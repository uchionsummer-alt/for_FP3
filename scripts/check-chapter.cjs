const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const {load}=require('./review-tools.cjs'),Q=require('../quiz-engine.js');
const root=path.resolve(__dirname,'..');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const curriculum=vm.runInNewContext(html.match(/const FP3_CURRICULUM = (\[[\s\S]*?\n        \]);/)[1]);
const bank=load('question-bank.js','FP3_QUESTIONS'),policy=load('reference-policy.js','FP3_REFERENCE_POLICY');
const chapterId='ch'+process.argv[2],ch=curriculum.find(ch=>ch.id===chapterId);
assert.ok(ch,'章が存在しません');const available=Q.available(bank,policy,'2026-11-05');
for(const u of ch.units){const qs=available.filter(q=>q.unitId===u.id);assert.ok(qs.length>=5&&qs.length<=10,`${u.id}: ${qs.length}`);assert.ok(qs.some(q=>q.type==='binary')&&qs.some(q=>q.type==='mcq'),`${u.id}: 形式の混合`);}
const sample=Q.chapterSample(available,ch.id,ch.units.map(u=>u.id));assert.equal(sample.length,25);assert.equal(new Set(sample.map(q=>q.unitId)).size,ch.units.length);
const answer=sample.map(q=>({questionId:q.id,chosen:q.answer}));assert.equal(Q.results(sample,answer).percent,100);
console.log(chapterId+': '+ch.units.length+' units, '+available.filter(q=>q.chapterId===ch.id).length+' verified questions, chapter test 25 passed');
