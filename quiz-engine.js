/* 共通の出題条件・章別抽出・集計。DOMとlocalStorageには触れない。 */
(function (root, factory) {
    const api = factory();
    if (typeof module === 'object' && module.exports) module.exports = api;
    else root.FP3Quiz = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
    'use strict';
    function isDate(value) {
        return typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value)
            && Number.isFinite(Date.parse(value))
            && new Date(value).toISOString().slice(0, 10) === value;
    }
    function validURL(value) {
        try { return new URL(value).protocol === 'https:'; } catch { return false; }
    }
    function referenceForDate(policy, examDate) {
        if (!policy || policy.status !== 'verified' || !isDate(examDate)) return null;
        const matches = (policy.periods || []).filter(p => p.verificationStatus === 'verified'
            && isDate(p.from) && isDate(p.to) && p.from <= examDate && examDate <= p.to
            && isDate(p.lawsDate) && p.lawsDate <= examDate && isDate(p.verifiedAt)
            && Array.isArray(p.sourceUrls) && p.sourceUrls.length > 0 && p.sourceUrls.every(validURL));
        return matches.length === 1 ? matches[0] : null;
    }
    function validQuestion(q) {
        return q && typeof q.id === 'string' && q.id.length > 0
            && typeof q.unitId === 'string' && typeof q.chapterId === 'string'
            && typeof q.question === 'string' && q.question.trim().length > 0
            && typeof q.explanation === 'string' && q.explanation.trim().length > 0
            && Array.isArray(q.options) && q.options.every(o => typeof o === 'string' && o.length > 0)
            && new Set(q.options).size === q.options.length
            && ((q.type === 'binary' && q.options.length === 2) || (q.type === 'mcq' && q.options.length === 3))
            && Number.isInteger(q.answer) && q.answer >= 0 && q.answer < q.options.length
            && (q.materials == null || (typeof q.materials.caption === 'string'
                && Array.isArray(q.materials.columns) && q.materials.columns.length >= 2 && q.materials.columns.length <= 6
                && q.materials.columns.every(v => typeof v === 'string')
                && Array.isArray(q.materials.rows) && q.materials.rows.length > 0 && q.materials.rows.length <= 40
                && q.materials.rows.every(row => Array.isArray(row) && row.length === q.materials.columns.length && row.every(v => typeof v === 'string'))));
    }
    function eligible(q, policy, examDate) {
        const ref = referenceForDate(policy, examDate);
        return Boolean(ref && validQuestion(q) && q.verificationStatus === 'verified'
            && isDate(q.verifiedAt) && q.lawsDate === ref.lawsDate
            && Array.isArray(q.sourceUrls) && q.sourceUrls.length > 0
            && q.sourceUrls.every(url => validURL(url) && Array.isArray(q.evidence)
                && q.evidence.some(e => e.url === url && typeof e.excerpt === 'string'
                    && e.excerpt.trim().length > 0 && isDate(e.checkedAt))));
    }
    function available(bank, policy, examDate) {
        // 重複IDは、誤答履歴との紐付けが曖昧になるため該当IDをすべて出題停止。
        const counts = new Map();
        for (const q of bank) counts.set(q.id, (counts.get(q.id) || 0) + 1);
        return bank.filter(q => counts.get(q.id) === 1 && eligible(q, policy, examDate));
    }
    function shuffled(items, rng = Math.random) {
        const out = [...items];
        for (let i = out.length - 1; i > 0; i--) {
            const j = Math.floor(rng() * (i + 1));
            [out[i], out[j]] = [out[j], out[i]];
        }
        return out;
    }
    function chapterSample(questions, chapterId, unitIds, rng = Math.random) {
        const groups = shuffled(unitIds, rng).map(id => shuffled(
            questions.filter(q => q.chapterId === chapterId && q.unitId === id), rng));
        const total = groups.reduce((sum, g) => sum + g.length, 0);
        if (total < 20) return [];
        const picked = [];
        while (picked.length < Math.min(25, total)) {
            for (const g of groups) {
                if (g.length && picked.length < 25) picked.push(g.pop());
            }
        }
        return shuffled(picked, rng);
    }
    function results(questions, answers) {
        if (!questions.length || answers.length !== questions.length) throw new Error('テストが未完了です');
        const units = {};
        let correct = 0;
        questions.forEach((q, i) => {
            const a = answers[i];
            if (!a || a.questionId !== q.id || !Number.isInteger(a.chosen)
                || a.chosen < 0 || a.chosen >= q.options.length) throw new Error('回答と設問が一致しません');
            const right = a.chosen === q.answer;
            const u = units[q.unitId] || (units[q.unitId] = { total: 0, correct: 0 });
            u.total++; if (right) { u.correct++; correct++; }
        });
        return { correct, total: questions.length, percent: Math.round(correct / questions.length * 100), units };
    }
    // 公開3セットの実技の構成を参考にした20枠。全て3択で、同じ設問を重複させない。
    // 必要な分野が不足したら開始不可にし、架空の問題や部分的なセットを返さない。
    function practicalSample(questions, rng = Math.random) {
        const specs = [
            ['u1_1'], ['u9_1'], ['u9_2'], ['u9_3'], ['u9_10', 'social'],
            ['u9_5'], ['u9_8', 'fund'], ['u9_8', 'bond_fx'], ['u9_6'], ['u9_9'],
            ['u9_9'], ['u9_4', 'policy'], ['u9_4'], ['u9_10', 'liability'],
            ['u9_11', 'tax_income'], ['u9_11', 'tax_deduction'], ['u9_11', 'tax_filing'],
            ['u9_7'], ['u9_12', 'inheritance_tax'], ['u9_12', 'property_tax']
        ];
        const chosen = [], used = new Set();
        for (const [unitId, group] of specs) {
            const pool = questions.filter(q => q.type === 'mcq' && q.unitId === unitId
                && (!group || q.practiceGroup === group) && !used.has(q.id));
            if (!pool.length) return [];
            const q = shuffled(pool, rng)[0];
            chosen.push(q); used.add(q.id);
        }
        return chosen;
    }
    return { isDate, validQuestion, referenceForDate, eligible, available, shuffled, chapterSample, practicalSample, results };
});
