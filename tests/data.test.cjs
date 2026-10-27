const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const {load,digest}=require('../scripts/review-tools.cjs'),Q=require('../quiz-engine.js');
const root=path.resolve(__dirname,'..'),bank=load('question-bank.js','FP3_QUESTIONS'),policy=load('reference-policy.js','FP3_REFERENCE_POLICY');
const reviews=require('../data/reviews.json'),analysis=require('../data/past-exam-analysis.json'),archive=require('../data/archive/before-past-exam-revision.json');
const summary=load('question-bank.js','FP3_PAST_EXAM_SUMMARY');const available=Q.available(bank,policy,'2026-11-05');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8'),curriculum=vm.runInNewContext(html.match(/const FP3_CURRICULUM = (\[[\s\S]*?\n        \]);/)[1]);
test('学科61単元329問・協会実技12単元68問・全398問、必須単元は各5〜10問',()=>{
 assert.equal(bank.length,398);assert.equal(available.length,398);
 const counts={ch1:56,ch2:45,ch3:40,ch4:82,ch5:53,ch6:53,ch7:1,ch8:0,ch9:68};
 for(const [ch,n] of Object.entries(counts))assert.equal(bank.filter(q=>q.chapterId===ch).length,n,ch);
 const academic=bank.filter(q=>/^ch[1-6]$/.test(q.chapterId));assert.equal(academic.length,329);assert.equal(new Set(academic.map(q=>q.unitId)).size,61);
 assert.equal(summary.totalUnits,89);assert.equal(summary.requiredUnits,73);
 for(const ch of curriculum.filter(c=>!['ch7','ch8'].includes(c.id)))for(const u of ch.units){const rows=bank.filter(q=>q.unitId===u.id);assert.ok(rows.length>=5&&rows.length<=10,u.id);assert.ok(rows.every(q=>q.bankEdition==='past-2026-10-27'),u.id);}
 assert.equal(summary.replacedQuestions,342);assert.equal(summary.addedQuestions,55);assert.equal(summary.retainedQuestions,1);
});
test('旧343問のID・監査原稿を保持し、旧7問も2026年基準と照合記録を持つ',()=>{
 for(const old of archive){const q=bank.find(q=>q.id===old.id);assert.ok(q,old.id);assert.equal(q.unitId,old.unitId);}
 for(const id of ['q1_1','q1_10','q2_1','q4_1','q6_4','q7_3','q9_1']){const q=bank.find(q=>q.id===id);assert.equal(q.previousLawsDate,'2024-04-01');assert.equal(q.lawsDate,'2026-04-01');}
 for(const q of bank){assert.equal(reviews[q.id].questionDigest,digest(q),q.id);assert.ok(q.evidence.every(e=>/^[a-f0-9]{64}$/.test(e.sha256)&&e.excerpt.trim().length>=20),q.id);}
});
test('主要34問の計算と正解肢を、設問条件から独立検算する',()=>{
 const cases={
 q1_2_1:[720-50-90,'580万円'],q1_2_2:[600*1.01-40,'566万円'],q1_6_3:[Math.round(300000/30*2/3),'6,667円'],
 q2_2_4:[7600-5000-600-800,'1,200万円'],q2_9_4:[(6000*60+6000*20)/10000,'48万円'],
 q3_3_3:[Math.round((1.4+(100-102)/4)/102*10000)/100,'0.88%'],
 q4_1_3:[4000000*.2-427500,'37万2,500円'],q4_2_3:[800+70*(27-20),'1,290万円'],q4_2_4:[(2500-1500)/2,'500万円'],
 q4_3_1:[600-(60+400-80)-120,'100万円'],q4_5_5:[20000*(1-.20315),'15,937円'],q4_6_3:[(300-180-20-50)/2,'25万円'],q4_7_1:[(680-500-50)/2,'65万円'],q4_9_2:[120-20,'100万円'],q4_12_2:[20-3-180*.05,'8万円'],q4_12_3:[28-8-10,'10万円'],
 q5_3_4:[150*2,'300万円'],q5_5_4:[180-18*.5,'171㎡'],q5_8_7:[7000-2600-300-3000,'1,100万円'],
 q6_3_6:[(3000-110-2500)*.2,'78万円'],q6_5_3:[8000/2,'4,000万円'],q6_8_5:[(3000*.15-50)+2*(1500*.15-50),'750万円'],q6_9_5:[10000*(1-.6*.3),'8,200万円'],q6_9_6:[8000*(1-.3),'5,600万円'],q6_9_7:[Math.min(540,520,560,510),'510円'],
 q9_1_2:[Math.round(750*1.01+38),'796万円'],q9_2_1:[400+800+300+100+90+3200-2600,'2,290万円'],q9_3_3:[Math.ceil(3000000*.09133/1000)*1000,'274,000円'],q9_4_3:[(25-4)*6000+6000*40,'366,000円'],q9_6_3:[(200-20*.5)*.6,'114㎡'],q9_8_3:[Math.round(120000/(30+20+25+15)*100)/100,'1,333.33円'],q9_11_4:[(3600-(800+70*16))/2,'840万円'],q9_12_3:[(5000*.2-200)+2*(2500*.15-50),'1,450万円'],
 q9_12_4:[(600-110)*.2-30,'68万円']
 };
 function numeric(s){s=s.replaceAll(',','');const m=s.match(/^(\d+(?:\.\d+)?)(?:万(?:(\d+)円)?|円|%|㎡|万円)$/);assert.ok(m,s);return Number(m[1])*(s.includes('万')&&!s.endsWith('万円')?10000:1)+Number(m[2]||0);}
 for(const [id,[value,label]] of Object.entries(cases)){const q=bank.find(q=>q.id===id);assert.ok(q,id);assert.equal(q.options[q.answer],label,id);assert.ok(Math.abs(value-numeric(label))<1e-7,id);}
 assert.equal(Object.keys(cases).length,34);
});
test('全116件の計算メモを評価し、選択肢・解説の数値との対応を確認する',()=>{
 let count=0;
 function values(text){const clean=text.replaceAll(',','');const out=[...clean.matchAll(/\d+(?:\.\d+)?/g)].map(m=>Number(m[0]));for(const m of clean.matchAll(/(\d+(?:\.\d+)?)万(?:(\d+)円)?/g))out.push(Number(m[1])*10000+Number(m[2]||0));return out;}
 for(const q of bank){if(!q.calculationCheck)continue;count++;const c=q.calculationCheck;
  const expression=c.formula.replace(/Math\.(?:round|ceil|floor|min|max|pow)/g,'');assert.ok(/^[\d\s+*/().,%-]+$/.test(expression),q.id);
  const calculated=vm.runInNewContext(c.formula,Object.create(null),{timeout:50});assert.ok(Math.abs(calculated-c.value)<1e-7,q.id);
  if(q.type==='mcq'){const target=c.target==='explanation'?q.explanation:q.options[q.answer];assert.ok(values(target).some(n=>Math.abs(n-c.value)<1e-7),q.id+': '+target);}
 }
 assert.equal(count,116);
});
test('公式6公開セット240問の番号・単元対応と各設問の参照先が一致する',()=>{
 assert.equal(analysis.papers.length,6);assert.equal(analysis.papers.reduce((n,p)=>n+p.questions.length,0),240);
 const unitIds=new Set(curriculum.flatMap(ch=>ch.units.map(u=>u.id)));
 for(const p of analysis.papers){assert.match(p.sha256,/^[a-f0-9]{64}$/);assert.match(p.answerSHA256,/^[a-f0-9]{64}$/);assert.ok(p.questionUrl.includes('/'+p.id+'_'));assert.equal(p.lawsDate,(p.publishedYear-1)+'-04-01');assert.deepEqual(p.questions.map(q=>q.number),Array.from({length:p.kind==='academic'?60:20},(_,i)=>i+1));for(const q of p.questions)assert.ok(q.unitIds.every(id=>unitIds.has(id)),p.id+':'+q.number);}
 for(const q of bank.filter(q=>q.bankEdition)){
  assert.ok(['observed_topic','scope_supplement'].includes(q.examAlignment));assert.ok(q.alignmentNote.length>20);
  if(q.examAlignment==='observed_topic')assert.ok(q.pastExamRefs.some(r=>r.relationship==='same_topic'));
  for(const r of q.pastExamRefs){const p=analysis.papers.find(p=>p.id===r.paperId);assert.ok(p,q.id);assert.ok(p.questions.some(x=>x.number===r.questionNumber),q.id);assert.equal(r.questionUrl,p.questionUrl);assert.equal(r.answerUrl,p.answerUrl);assert.equal(r.originalLawsDate,p.lawsDate);assert.ok(r.processingNote.length>20);}
 }
});
test('原稿だけでなく過去問リンク・資料・計算・版の改ざんもレビュー不一致になる',()=>{
 const q=bank.find(q=>q.materials);const before=digest(q);
 for(const patch of [{materials:{...q.materials,rows:[['項目','別の値']]}},{pastExamRefs:[]},{calculationCheck:{value:0,formula:'0'}},{revision:q.revision+1}])assert.notEqual(digest({...q,...patch}),before);
 assert.equal(Q.validQuestion({...q,materials:{caption:'壊れた表',columns:['a','b'],rows:[['a']]}}),false);
});
test('各章25問を全単元から偏りなく抽出し、全問採点できる',()=>{
 for(const ch of curriculum.filter(ch=>!['ch7','ch8'].includes(ch.id))){
  for(let seed=1;seed<=10;seed++){let v=seed;const rng=()=>((v=v*16807%2147483647)-1)/2147483646;const qs=Q.chapterSample(available,ch.id,ch.units.map(u=>u.id),rng);assert.equal(qs.length,25);assert.equal(new Set(qs.map(q=>q.id)).size,25);assert.equal(new Set(qs.map(q=>q.unitId)).size,ch.units.length);const counts=Object.values(Object.groupBy(qs,q=>q.unitId)).map(g=>g.length);assert.ok(Math.max(...counts)-Math.min(...counts)<=1);assert.equal(Q.results(qs,qs.map(q=>({questionId:q.id,chosen:q.answer}))).percent,100);}
 }
});
test('日本FP協会実技20問は全て3択・12実技単元と業際を含み、分野不足は空で返す',()=>{
 for(let seed=1;seed<=30;seed++){let v=seed;const qs=Q.practicalSample(available,()=>((v=v*16807%2147483647)-1)/2147483646);assert.equal(qs.length,20);assert.ok(qs.every(q=>q.type==='mcq'));assert.equal(new Set(qs.map(q=>q.id)).size,20);assert.equal(new Set(qs.map(q=>q.unitId)).size,13);assert.equal(qs[0].unitId,'u1_1');for(const group of ['fund','bond_fx','social','liability','tax_income','tax_deduction','tax_filing','inheritance_tax','property_tax'])assert.ok(qs.some(q=>q.practiceGroup===group),group);assert.equal(Q.results(qs,qs.map(q=>({questionId:q.id,chosen:q.answer}))).percent,100);}
 assert.deepEqual(Q.practicalSample(available.filter(q=>q.practiceGroup!=='fund')),[]);
});
test('改正が必要な論点の年分・法令版・正解を固定し、古い過去問の丸写しを防ぐ',()=>{
 const q=id=>bank.find(q=>q.id===id);assert.ok(q('q1_5_6').options[q('q1_5_6').answer].includes('月額2万円'));
 assert.ok(q('q4_14_3').question.includes('2025年分'));assert.equal(q('q4_14_3').options[q('q4_14_3').answer],'68万円');
 assert.equal(q('q4_14_6').options[q('q4_14_6').answer],'特定親族特別控除63万円');
 assert.ok(q('q5_6_3').evidence.some(e=>e.url.includes('20260401_507AC0000000047')));assert.ok(q('q5_6_3').options[q('q5_6_3').answer].includes('出席者'));
 assert.ok(q('q6_7_4').question.includes('2026年'));assert.equal(q('q6_7_4').options[q('q6_7_4').answer],'× 誤り');
});
test('両HTML入口と生成の再現性を維持し、全単元分析の集計が実データと合う',()=>{
 assert.equal(fs.readFileSync(path.join(root,'index.html'),'utf8'),fs.readFileSync(path.join(root,'fp3.html'),'utf8'));
 const before=fs.readFileSync(path.join(root,'data/question-bank.js'),'utf8');require('../scripts/build-questions.cjs');assert.equal(fs.readFileSync(path.join(root,'data/question-bank.js'),'utf8'),before);
 assert.equal(summary.units.reduce((n,u)=>n+u.questionCount,0),bank.length);assert.equal(new Set(summary.units.map(u=>u.unitId)).size,89);
});
