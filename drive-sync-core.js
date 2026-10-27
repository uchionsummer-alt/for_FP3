/* 同期データの統合。Google認証・DOM・localStorageには依存しない。 */
(function (root, factory) {
    const api = factory();
    if (typeof module === 'object' && module.exports) module.exports = api;
    else root.FP3Sync = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
    'use strict';
    const maps = ['unitStatus', 'chapterTestScores', 'customUnitDays'];
    const scalars = ['startDate', 'targetHours', 'examDate', 'timerSession'];
    const clone = x => JSON.parse(JSON.stringify(x));
    const equal = (a, b) => JSON.stringify(a) === JSON.stringify(b);
    const forbidden = x => ['__proto__', 'prototype', 'constructor'].includes(x);
    const key = (field, id) => JSON.stringify(id === undefined ? [field] : [field, id]);
    const historyKey = h => h.syncId || JSON.stringify(h);
    const empty = () => ({ schemaVersion: 1, epoch: [0, 0, 'initial'], registers: {}, timeEvents: {} });
    function compare(a, b) {
        return a[0] - b[0] || a[1] - b[1] || (a[2] < b[2] ? -1 : a[2] > b[2] ? 1 : 0);
    }
    function validate(doc) {
        if (!doc || doc.schemaVersion !== 1 || !Array.isArray(doc.epoch) || doc.epoch.length !== 3
            || !doc.epoch.slice(0, 2).every(n => Number.isSafeInteger(n) && n >= 0)
            || typeof doc.epoch[2] !== 'string' || !doc.epoch[2] || !doc.registers || !doc.timeEvents
            || JSON.stringify(doc).length > 4000000) throw Error('同期データの形式・サイズが不正です');
        for (const section of ['registers', 'timeEvents']) {
            if (typeof doc[section] !== 'object' || Array.isArray(doc[section])) throw Error('不正な同期記録');
            for (const [id, row] of Object.entries(doc[section])) {
                if (forbidden(id) || !row || !Object.hasOwn(row, 'value') || !Array.isArray(row.stamp)
                    || row.stamp.length !== 3 || !row.stamp.slice(0, 2).every(n => Number.isSafeInteger(n) && n >= 0)
                    || typeof row.stamp[2] !== 'string' || !row.stamp[2]) throw Error('不正な同期の版');
                if (section === 'registers') {
                    const p = JSON.parse(id);
                    if (!Array.isArray(p) || p.some(x => typeof x !== 'string' || forbidden(x))
                        || !((p.length === 1 && scalars.includes(p[0])) || (p.length === 2
                        && [...maps, 'unitResult', 'wrong', 'history', 'timeBase'].includes(p[0])))) throw Error('不正な同期項目');
                    if (p[0] === 'timeBase' && (!/^\d{4}-\d{2}-\d{2}$/.test(p[1]) || !Number.isFinite(row.value) || row.value < 0)) throw Error('不正な復元時間');
                } else if (!row.value || !/^\d{4}-\d{2}-\d{2}$/.test(row.value.day)
                    || !Number.isFinite(row.value.minutes) || row.value.minutes < 0) throw Error('不正な同期時間');
            }
        }
        return doc;
    }
    function merge(a, b) {
        validate(a); validate(b);
        if (compare(a.epoch, b.epoch) !== 0) return clone(compare(a.epoch, b.epoch) > 0 ? a : b);
        const out = clone(a);
        for (const section of ['registers', 'timeEvents']) for (const [id, row] of Object.entries(b[section])) {
            const prev = out[section][id];
            let choose = !prev || compare(row.stamp, prev.stamp) > 0
                || (compare(row.stamp, prev.stamp) === 0 && JSON.stringify(row.value) > JSON.stringify(prev.value));
            // 同一タイマーを2端末で終了しても1件。先に終了した記録を採用。
            if (prev && section === 'timeEvents' && id.startsWith('timer:')) choose = compare(row.stamp, prev.stamp) < 0
                || (compare(row.stamp, prev.stamp) === 0 && JSON.stringify(row.value) > JSON.stringify(prev.value));
            // 初回移行の同一日分は二重加算しない。
            if (prev && section === 'timeEvents' && id.startsWith('legacy:')) {
                choose = row.value.minutes > prev.value.minutes
                    || (row.value.minutes === prev.value.minutes && compare(row.stamp, prev.stamp) > 0);
            }
            if (choose) out[section][id] = clone(row);
        }
        return out;
    }
    function capture(doc, before, after, writer, options = {}) {
        validate(doc);
        const out = clone(doc);
        let t = options.now === undefined ? Date.now() : options.now, n = 0;
        for (const section of ['registers', 'timeEvents']) for (const row of Object.values(out[section])) {
            if (row.stamp[0] > t) { t = row.stamp[0]; n = row.stamp[1]; }
            else if (row.stamp[0] === t) n = Math.max(n, row.stamp[1]);
        }
        const stamp = () => [t, ++n, writer];
        const put = (field, id, value) => { out.registers[key(field, id)] = { value: clone(value), stamp: stamp() }; };
        for (const field of scalars) if (after[field] !== undefined && !equal(before[field], after[field])) put(field, undefined, after[field]);
        for (const field of maps) {
            const a = before[field] || {}, b = after[field] || {};
            for (const id of new Set([...Object.keys(a), ...Object.keys(b)])) {
                if (!equal(a[id], b[id])) put(field, id, b[id] === undefined ? null : b[id]);
            }
        }
        const unitResult = (s, id) => ({ score: s.unitTestScores?.[id] ?? null, detail: s.unitTestDetails?.[id] ?? null });
        const unitIds = new Set([...Object.keys(before.unitTestScores || {}), ...Object.keys(after.unitTestScores || {}),
            ...Object.keys(before.unitTestDetails || {}), ...Object.keys(after.unitTestDetails || {})]);
        for (const id of unitIds) if (!equal(unitResult(before, id), unitResult(after, id))) put('unitResult', id, unitResult(after, id));
        for (const id of new Set([...(before.wrongQuestionIds || []), ...(after.wrongQuestionIds || [])])) {
            const wrong = s => (s.wrongQuestionIds || []).includes(id) ? { revision: s.wrongQuestionRevisions?.[id] || null } : null;
            if (!equal(wrong(before), wrong(after))) put('wrong', id, wrong(after));
        }
        const history = s => new Map((s.testHistory || []).map(h => [historyKey(h), h]));
        const a = history(before), b = history(after);
        for (const id of new Set([...a.keys(), ...b.keys()])) if (!equal(a.get(id), b.get(id))) put('history', id, b.get(id) || null);
        for (const day of new Set([...Object.keys(before.dailyTimeLogs || {}), ...Object.keys(after.dailyTimeLogs || {})])) {
            const minutes = (after.dailyTimeLogs?.[day] || 0) - (before.dailyTimeLogs?.[day] || 0);
            if (!minutes) continue;
            // バックアップ復元等で時間を減らす場合は、その日の基準を置換する。
            // 複数端末の復元を負の加算として重ねると、将来の学習時間まで相殺してしまう。
            if (minutes < 0) { put('timeBase', day, after.dailyTimeLogs?.[day] || 0); continue; }
            const s = stamp();
            const id = options.seed ? 'legacy:' + day : options.timeEventId || 'event:' + s.join(':');
            const event = { value: { day, minutes }, stamp: s };
            // 同じタイマーの再終了も、この端末の既存記録を上書きしない。
            out.timeEvents[id] = merge(out, { ...empty(), epoch: out.epoch, timeEvents: { [id]: event } }).timeEvents[id];
        }
        validate(out);
        return out;
    }
    function materialize(doc, defaults) {
        validate(doc);
        const out = clone(defaults);
        for (const field of [...maps, 'unitTestScores', 'unitTestDetails', 'dailyTimeLogs', 'wrongQuestionRevisions']) out[field] = {};
        out.wrongQuestionIds = []; out.testHistory = []; out.timerSession = null;
        for (const [id, row] of Object.entries(doc.registers)) {
            const [field, sub] = JSON.parse(id), value = clone(row.value);
            if (scalars.includes(field)) out[field] = value;
            else if (maps.includes(field)) { if (value !== null) out[field][sub] = value; }
            else if (field === 'unitResult' && value) {
                if (value.score !== null) out.unitTestScores[sub] = value.score;
                if (value.detail !== null) out.unitTestDetails[sub] = value.detail;
            } else if (field === 'wrong' && value) {
                out.wrongQuestionIds.push(sub);
                if (value.revision !== null) out.wrongQuestionRevisions[sub] = value.revision;
            } else if (field === 'history' && value) out.testHistory.push(value);
        }
        const bases = {};
        for (const [id, row] of Object.entries(doc.registers)) {
            const [field, day] = JSON.parse(id);
            if (field === 'timeBase') { bases[day] = row; out.dailyTimeLogs[day] = row.value; }
        }
        for (const row of Object.values(doc.timeEvents)) {
            const { day, minutes } = row.value;
            if (bases[day] && compare(row.stamp, bases[day].stamp) <= 0) continue;
            out.dailyTimeLogs[day] = (out.dailyTimeLogs[day] || 0) + minutes;
        }
        for (const day of Object.keys(out.dailyTimeLogs)) out.dailyTimeLogs[day] = Math.max(0, out.dailyTimeLogs[day]);
        out.testHistory.sort((a, b) => String(a.completedAt || '').localeCompare(String(b.completedAt || '')) || historyKey(a).localeCompare(historyKey(b)));
        out.wrongQuestionIds.sort();
        return out;
    }
    function reset(doc, state, writer, now = Date.now()) {
        validate(doc);
        let time = Math.max(now, doc.epoch[0]);
        for (const section of ['registers', 'timeEvents']) for (const row of Object.values(doc[section])) time = Math.max(time, row.stamp[0]);
        const fresh = empty(); fresh.epoch = [time + 1, 0, writer];
        return capture(fresh, {}, state, writer, { now: time + 1, seed: true });
    }
    return { empty, validate, merge, capture, materialize, reset };
});
