const { test } = require('node:test');
const assert = require('node:assert/strict');
const S = require('../drive-sync-core.js');
const state = () => ({ startDate:'2026-10-27',targetHours:50,examDate:'2026-11-05',timerSession:null,
    unitStatus:{u1_1:'unstarted',u1_2:'unstarted'},unitTestScores:{},unitTestDetails:{},chapterTestScores:{},
    customUnitDays:{},dailyTimeLogs:{'2026-10-27':60},wrongQuestionIds:['legacy'],wrongQuestionRevisions:{},testHistory:[] });
const copy = x => structuredClone(x);
const project = doc => S.materialize(doc, state());
const seed = () => S.capture(S.empty(), {}, state(), 'first', {seed:true,now:100});
test('既存の読了・未知の誤答ID・日別学習時間を初回移行し、再統合しても増えない',()=>{
    const doc = seed();assert.deepEqual(project(doc), state());
    assert.deepEqual(project(S.merge(doc,doc)),state());
});
test('両端末の別単元変更・学習時間を統合し、通信の再送でも二重加算しない',()=>{
    const base=seed(), a=state(), b=state();a.unitStatus.u1_1='completed';a.dailyTimeLogs['2026-10-27']+=20;
    b.unitStatus.u1_2='completed';b.dailyTimeLogs['2026-10-27']+=30;
    const x=S.capture(base,state(),a,'pc',{now:200}),y=S.capture(base,state(),b,'phone',{now:200});
    const merged=S.merge(x,y), actual=project(merged);
    assert.equal(actual.dailyTimeLogs['2026-10-27'],110);assert.equal(actual.unitStatus.u1_1,'completed');assert.equal(actual.unitStatus.u1_2,'completed');
    assert.deepEqual(project(S.merge(merged,x)),actual);assert.deepEqual(project(S.merge(y,x)),actual);
});
test('同じ項目の新しい変更を採用し、読了取消と復習からの除外も反映する',()=>{
    const base=seed(), a=state();a.unitStatus.u1_1='completed';
    const x=S.capture(base,state(),a,'pc',{now:200}), b=copy(a);b.unitStatus.u1_1='unstarted';b.wrongQuestionIds=[];
    const y=S.capture(x,a,b,'phone',{now:201});const r=project(S.merge(x,y));
    assert.equal(r.unitStatus.u1_1,'unstarted');assert.deepEqual(r.wrongQuestionIds,[]);
});
test('タイマーの同じ終了を別端末・別日付で記録しても、先に終了した1件だけ採用する',()=>{
    const base=seed(), a=state(),b=state();a.dailyTimeLogs['2026-10-27']+=60;b.dailyTimeLogs['2026-10-28']=90;
    const x=S.capture(base,state(),a,'pc',{now:200,timeEventId:'timer:shared'});
    const y=S.capture(base,state(),b,'phone',{now:201,timeEventId:'timer:shared'});
    const r=project(S.merge(x,y));assert.equal(r.dailyTimeLogs['2026-10-27'],120);assert.equal(r.dailyTimeLogs['2026-10-28'],undefined);
    assert.deepEqual(project(S.merge(y,x)),r);
});
test('別のテスト履歴を残し、同じテストの再取得を重複させず、得点と明細を一緒に更新する',()=>{
    const base=seed(),a=state(),b=state();
    a.testHistory=[{syncId:'A',completedAt:'2026-10-27T00:00:00Z',percent:80}];
    b.testHistory=[{syncId:'B',completedAt:'2026-10-27T00:01:00Z',percent:60}];
    a.unitTestScores.u1_1=80;a.unitTestDetails.u1_1={total:5,correct:4,mode:'unit'};
    b.unitTestScores.u1_1=60;b.unitTestDetails.u1_1={total:5,correct:3,mode:'unit'};
    const x=S.capture(base,state(),a,'pc',{now:200}),y=S.capture(base,state(),b,'phone',{now:201});
    const r=project(S.merge(S.merge(x,y),x));assert.equal(r.testHistory.length,2);
    assert.equal(r.unitTestScores.u1_1,60);assert.equal(r.unitTestDetails.u1_1.correct,3);
});
test('誤答の追加・版と、JSON復元による学習時間の修正を保持する',()=>{
    const base=seed(),a=state();a.wrongQuestionIds.push('q1');a.wrongQuestionRevisions.q1=2;a.dailyTimeLogs['2026-10-27']=15;
    const r=project(S.capture(base,state(),a,'pc',{now:200}));assert.equal(r.dailyTimeLogs['2026-10-27'],15);assert.equal(r.wrongQuestionRevisions.q1,2);
});
test('初期化は旧版のオフライン変更で復活せず、その後の新しい学習時間は加算できる',()=>{
    const base=seed(),fresh=state();fresh.dailyTimeLogs={};fresh.wrongQuestionIds=[];
    const reset=S.reset(base,fresh,'pc',200);const offline=state();offline.dailyTimeLogs['2026-10-27']=100;
    const stale=S.capture(base,state(),offline,'phone',{now:9999});
    const result=project(S.merge(reset,stale));assert.deepEqual(result.dailyTimeLogs,{});
    result.dailyTimeLogs['2026-10-27']=10;
    assert.equal(project(S.capture(reset,fresh,result,'pc',{now:300})).dailyTimeLogs['2026-10-27'],10);
});
test('日付が戻った端末でも既知の版より新しい変更を作成する',()=>{
    const base=seed(),a=state();a.targetHours=70;
    const first=S.capture(base,state(),a,'pc',{now:500});const b=copy(a);b.targetHours=80;
    assert.equal(project(S.merge(first,S.capture(first,a,b,'phone',{now:1}))).targetHours,80);
});
test('異常な同期形式・プロトタイプ汚染・サイズ超過を拒否する',()=>{
    assert.throws(()=>S.validate({}));assert.throws(()=>S.validate({...seed(),registers:[]}));
    const bad=seed();bad.registers['["unitStatus","__proto__"]']={value:'completed',stamp:[1,1,'bad']};
    assert.throws(()=>S.validate(bad));assert.equal({}.polluted,undefined);
    assert.throws(()=>S.validate({...seed(),padding:'x'.repeat(4000001)}));
});
test('多数の同期順序で全ての変更が同じ結果に収束する',()=>{
    const base=seed();const docs=Array.from({length:10},(_,i)=>{const a=state();a.unitStatus['u1_'+i]='completed';a.dailyTimeLogs['2026-10-27']+=i+1;return S.capture(base,state(),a,'device'+i,{now:200+i});});
    const expected=project(docs.reduce(S.merge,base));
    assert.equal(expected.dailyTimeLogs['2026-10-27'],115);
    assert.deepEqual(project([...docs].reverse().reduce(S.merge,base)),expected);
    assert.deepEqual(project(docs.slice(3).concat(docs.slice(0,3)).reduce(S.merge,base)),expected);
});
test('同一の版番号に矛盾した値があっても、統合の順序で結果が変わらない',()=>{
    const a=seed(),b=copy(a);b.registers['["targetHours"]'].value=80;
    assert.deepEqual(project(S.merge(a,b)),project(S.merge(b,a)));
    a.timeEvents['timer:tie']={value:{day:'2026-10-27',minutes:2},stamp:[200,1,'pc']};
    b.timeEvents['timer:tie']={value:{day:'2026-10-27',minutes:3},stamp:[200,1,'pc']};
    assert.deepEqual(project(S.merge(a,b)),project(S.merge(b,a)));
});
test('2端末で古いバックアップに戻しても、復元後の追加学習時間を相殺しない',()=>{
    const base=seed(),old=state();old.dailyTimeLogs['2026-10-27']=0;
    const a=S.capture(base,state(),old,'pc',{now:200});
    const b=S.capture(base,state(),old,'phone',{now:201});
    const merged=S.merge(a,b);assert.equal(project(merged).dailyTimeLogs['2026-10-27'],0);
    const next=project(merged);next.dailyTimeLogs['2026-10-27']=20;
    assert.equal(project(S.capture(merged,project(merged),next,'pc',{now:202})).dailyTimeLogs['2026-10-27'],20);
});
