const {test}=require('node:test');
const assert=require('node:assert/strict');
const Q=require('../quiz-engine.js');
const {load}=require('../scripts/review-tools.cjs');
const policy={status:'verified',periods:[{from:'2026-06-01',to:'2026-12-27',lawsDate:'2026-04-01',verifiedAt:'2026-10-26',verificationStatus:'verified',sourceUrls:['https://www.jafp.or.jp/exam/schedule/']}]};
const make=(n,u=1)=>({id:`fixture_${u}_${n}`,chapterId:'ch1',unitId:`u1_${u}`,question:`検証用フィクスチャ${u}-${n}`,options:['○','×'],type:'binary',answer:n%2,explanation:'テスト専用。実際の問題データには登録しない。',lawsDate:'2026-04-01',verifiedAt:'2026-10-26',verificationStatus:'verified',sourceUrls:['https://example.com/source'],evidence:[{url:'https://example.com/source',excerpt:'フィクスチャ',checkedAt:'2026-10-26'}]});
test('未検証・出典欠落・本文照合記録欠落・旧法令を出題しない',()=>{
 const q=make(1);assert.equal(Q.eligible(q,policy,'2026-11-05'),true);
 for(const patch of [{verificationStatus:'pending'},{lawsDate:'2024-04-01'},{sourceUrls:[]},{evidence:[]},{verifiedAt:null},{answer:2},{options:['同じ','同じ']},{sourceUrls:['javascript:alert(1)']}])assert.equal(Q.eligible({...q,...patch},policy,'2026-11-05'),false);
});
test('適用期間外・未設定・曖昧な基準日・不正な日付を出題しない',()=>{
 for(const date of ['','2026-02-29','2026-05-31','2026-12-28'])assert.equal(Q.eligible(make(1),policy,date),false);
 assert.equal(Q.referenceForDate({...policy,periods:[...policy.periods,...policy.periods]},'2026-11-05'),null);
});
test('重複IDはどちらも出題停止',()=>assert.equal(Q.available([make(1),make(1)],policy,'2026-11-05').length,0));
test('章別は25問・全10単元を網羅し重複なし、入力を破壊しない',()=>{
 const bank=Array.from({length:10},(_,i)=>Array.from({length:5},(_,n)=>make(n,i+1))).flat();
 const original=JSON.stringify(bank);const picked=Q.chapterSample(bank,'ch1',Array.from({length:10},(_,i)=>`u1_${i+1}`),()=>0.4);
 assert.equal(picked.length,25);assert.equal(new Set(picked.map(q=>q.id)).size,25);
 const counts=Object.values(Object.groupBy(picked,q=>q.unitId)).map(g=>g.length);
 assert.equal(counts.length,10);assert.ok(Math.max(...counts)-Math.min(...counts)<=1);assert.equal(JSON.stringify(bank),original);
});
test('章別の20問未満・0問を空のテストとして扱わない',()=>{
 assert.deepEqual(Q.chapterSample([], 'ch1',['u1_1']),[]);
 assert.deepEqual(Q.chapterSample(Array.from({length:19},(_,i)=>make(i)), 'ch1',['u1_1']),[]);
 assert.equal(Q.chapterSample(Array.from({length:20},(_,i)=>make(i)), 'ch1',['u1_1']).length,20);
});
test('複数単元の採点を混同しない',()=>{
 const bank=[make(0,1),make(0,2),make(1,2)];
 const a=bank.map((q,i)=>({questionId:q.id,chosen:i===0?q.answer:1-q.answer}));
 const r=Q.results(bank,a);assert.equal(r.percent,33);assert.deepEqual(r.units, {u1_1:{total:1,correct:1},u1_2:{total:2,correct:0}});
 assert.throws(()=>Q.results(bank,[]));assert.throws(()=>Q.results([],[]));
});
test('問題データは有効な設問と単元IDを持つ',()=>{
 const bank=load('question-bank.js','FP3_QUESTIONS');
 const fs=require('fs'),vm=require('vm');const html=fs.readFileSync(require('path').join(__dirname,'../index.html'),'utf8');
 const curriculum=vm.runInNewContext(html.match(/const FP3_CURRICULUM = (\[[\s\S]*?\n        \]);/)[1]);
 const unitMap=new Map(curriculum.flatMap(ch=>ch.units.map(u=>[u.id,ch.id])));
 assert.equal(new Set(bank.map(q=>q.id)).size,bank.length);
 assert.equal(new Set(bank.map(q=>q.question)).size,bank.length);
 for(const q of bank){assert.ok(Q.validQuestion(q),q.id);assert.equal(unitMap.get(q.unitId),q.chapterId,q.id);assert.ok(q.sourceUrls?.length,q.id);assert.ok(['pending','verified'].includes(q.verificationStatus),q.id);}
});
