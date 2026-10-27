const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const {root}=require('../review-tools.cjs');
const read=file=>JSON.parse(fs.readFileSync(path.join(root,file),'utf8'));
function makeSummary(bank){
 const analysis=read('data/past-exam-analysis.json'),archive=read('data/archive/before-past-exam-revision.json'),notes=read('data/unit-revision-notes.json');
 const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
 const curriculum=vm.runInNewContext(html.match(/const FP3_CURRICULUM = (\[[\s\S]*?\n        \]);/)[1]);
 const oldById=new Map(archive.map(q=>[q.id,q]));
 const changed=q=>{const old=oldById.get(q.id);return !!old && JSON.stringify([q.question,q.options,q.answer,q.explanation])!==JSON.stringify([old.question,old.options,old.answer,old.explanation]);};
 const units=curriculum.flatMap(ch=>ch.units.map(u=>{
  const rows=bank.filter(q=>q.unitId===u.id);
  const observed=analysis.papers.flatMap(p=>p.questions.filter(q=>q.unitIds.includes(u.id)).map(q=>({paperId:p.id,kind:p.kind,label:p.label,number:q.number,topic:q.topic,questionUrl:p.questionUrl})));
  return {unitId:u.id,title:u.title,chapterId:ch.id,optional:['ch7','ch8'].includes(ch.id),supplementary:u.page==null,
   observedAcademicSets:new Set(observed.filter(q=>q.kind==='academic').map(q=>q.paperId)).size,
   observedPracticalSets:new Set(observed.filter(q=>q.kind==='practical').map(q=>q.paperId)).size,
   observedQuestions:observed,questionCount:rows.length,replaced:rows.filter(changed).length,added:rows.filter(q=>!oldById.has(q.id)).length,
   observedTopicExercises:rows.filter(q=>q.examAlignment==='observed_topic').length,supplementExercises:rows.filter(q=>q.examAlignment==='scope_supplement').length,
   notes:notes[u.id]||(['ch7','ch8'].includes(ch.id)?'任意学習。今回の差替え対象外で、収録不足は維持・明示。':'公開分では同論点を未確認。試験範囲の補強として区別。'),
   questionIds:rows.map(q=>q.id)};
 }));
 return {schemaVersion:1,bankEdition:'past-2026-10-27',analyzedAt:analysis.analyzedAt,examDate:'2026-11-05',lawsDate:'2026-04-01',
  sampleNote:analysis.sampleNote,indexUrl:analysis.indexUrl,licenseUrl:analysis.licenseUrl,
  papers:analysis.papers.map(({questions,...p})=>({...p,questionCount:questions.length})),academicQuestionsAnalyzed:180,practicalQuestionsAnalyzed:60,
  totalUnits:units.length,requiredUnits:units.filter(u=>!u.optional).length,replacedQuestions:bank.filter(changed).length,
  addedQuestions:bank.filter(q=>!oldById.has(q.id)).length,retainedQuestions:bank.filter(q=>oldById.has(q.id)&&!changed(q)).length,
  currentQuestionCount:bank.length,observedTopicExercises:bank.filter(q=>q.examAlignment==='observed_topic').length,
  supplementExercises:bank.filter(q=>q.examAlignment==='scope_supplement').length,
  unresolvedLawReviews:bank.filter(q=>q.verificationStatus!=='verified').length,units};
}
function writeReport(bank){
 const s=makeSummary(bank);fs.writeFileSync(path.join(root,'docs/past-exam-analysis.json'),JSON.stringify(s,null,2)+'\n');
 let md=`# 公開過去問の分析と問題差替え\n\n対象：日本FP協会の2024・2025・2026年5月公表分。学科180問、実技（資産設計提案業務）60問、計240問を問題・模範解答と照合。掲載年は公表年で、特定日に実施された全問題という意味ではありません。\n\n${s.sampleNote}\n\n受検予定日2026年11月5日、法令基準日2026年4月1日。公開原問の基準日は2023・2024・2025年4月1日であり、現在の基準日と異なります。元問の答えだけを機械的にコピーしていません。\n\n## 差替え結果\n\n- 既存問題の差替え：${s.replacedQuestions}問。追加：${s.addedQuestions}問。今回対象外で保持：${s.retainedQuestions}問（任意きんざい）。合計${s.currentQuestionCount}問。\n- 公開分の同じ論点を参考にした演習：${s.observedTopicExercises}問。範囲の補強：${s.supplementExercises}問。補強を出題実績・高頻度と偽って表示しません。\n- 必須${s.requiredUnits}単元は5〜10問。日本FP協会実技は旧7単元を残し、5単元を追加。学習履歴の旧IDを保存し、差替前の誤答を新版の誤答と混同しないよう版管理します。\n- 一次資料による法令確認未完了：${s.unresolvedLawReviews}問。\n- 章別25問に加え、日本FP協会公開問題の分野構成を参考にした3択20問演習を追加。資料表、係数選択、端数処理、保険の支払条件、税の速算表、相続人の判定を扱います。\n\n## 修正の判断\n\n旧版は一般論や極端な誤答肢が多く、制度の具体的な年齢・期間・限度額、似た制度の比較、複数段階の計算が不足していました。新しい誤答肢は、分母の逆転・控除順序・限度超過・元金と利息・放棄と代襲など、計算や読取りの間違いに対応させました。正解位置も章ごとの3択内で偏らないよう配置しています。\n\n法改正を伴う例として区分所有法31条は、2026年4月施行版の定足数と出席者基準の決議に更新。税の数値が変わる問題は年分を明記し、2026年12月施行の基礎控除・所得要件等を、2026年4月1日基準へ無条件に混入させません。2025年分を指定した計算は2025年分の値で解答します。\n\n## 一次資料と利用表示\n\ndata/past-exam-analysis.json に240問の設問番号・独自要約・単元対応、6資料と模範解答のURL・SHA-256を保持。原本PDFは再配布しません。各練習問題の過去問対応は設問本文・正解・解説等と一緒にダイジェスト検証します。各問に参考年度・問番号、同論点か補強か、修正加工であることを表示します。\n\n[日本FP協会の公開問題一覧](${s.indexUrl}) / [試験問題の利用条件](${s.licenseUrl})。原問の利用には出典と修正・加工の明記が求められており、それに従います。日本FP協会による出題予測や本アプリの監修を意味しません。\n\n## 単元ごとの読解記録と変更\n\n観測数は、学科3公開セット・実技3公開セットそれぞれの中で、その単元に対応付けた設問があるセット数です。非公開CBTの出題率ではありません。複数単元に関係する原問は重複して分類する場合があります。\n\n`;
 for(const u of s.units){
  md+=`### ${u.unitId} ${u.title}${u.optional?'【任意】':''}\n\n${u.notes}\n\n- 観測：学科${u.observedAcademicSets}/3セット、実技${u.observedPracticalSets}/3セット。現在${u.questionCount}問（差替え${u.replaced}・追加${u.added}）。\n`;
  md+=u.observedQuestions.length?u.observedQuestions.map(o=>`- [${o.label} 問${o.number}](${o.questionUrl})：${o.topic}\n`).join(''):'- 公開3セットで同論点は未確認。出題頻度を推測しません。\n';
  md+=`- 新版の問題ID：${u.questionIds.join(', ')||'未収録'}。\n\n`;
 }
 fs.writeFileSync(path.join(root,'docs/PAST_EXAM_ANALYSIS.md'),md.trimEnd()+'\n');return s;
}
module.exports={makeSummary,writeReport};
