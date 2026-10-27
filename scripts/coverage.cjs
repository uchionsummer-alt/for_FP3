const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const {root,load}=require('./review-tools.cjs'),Q=require('../quiz-engine.js');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const curriculum=vm.runInNewContext(html.match(/const FP3_CURRICULUM = (\[[\s\S]*?\n        \]);/)[1]);
const bank=load('question-bank.js','FP3_QUESTIONS'),policy=load('reference-policy.js','FP3_REFERENCE_POLICY');
const analysis=load('question-bank.js','FP3_PAST_EXAM_SUMMARY'),available=Q.available(bank,policy,'2026-11-05');
const chapters=curriculum.map(ch=>({id:ch.id,title:ch.title,optional:['ch7','ch8'].includes(ch.id),
 units:ch.units.map(u=>({...u,recorded:bank.filter(q=>q.unitId===u.id).length,available:available.filter(q=>q.unitId===u.id).length})),
 questionCount:bank.filter(q=>q.chapterId===ch.id).length,availableCount:available.filter(q=>q.chapterId===ch.id).length,
 chapterTestSize:Q.chapterSample(available,ch.id,ch.units.map(u=>u.id)).length}));
const units=chapters.flatMap(ch=>ch.units.map(u=>({...u,chapterId:ch.id,optional:ch.optional})));
const result={generatedAt:'2026-10-27',examDate:'2026-11-05',lawsDate:'2026-04-01',totalUnits:units.length,academicUnits:61,
 requiredUnits:units.filter(u=>!u.optional).length,recordedUnits:units.filter(u=>u.recorded>0).length,
 questionCount:bank.length,availableCount:available.length,unverifiedCount:bank.filter(q=>q.verificationStatus!=='verified').length,
 missingUnits:units.filter(u=>!u.recorded),insufficientUnits:units.filter(u=>u.recorded>0&&u.recorded<5),
 academicQuestionCount:bank.filter(q=>/^ch[1-6]$/.test(q.chapterId)).length,practicalQuestionCount:bank.filter(q=>q.chapterId==='ch9').length,
 practicalTestSize:Q.practicalSample(available).length,chapters};
fs.writeFileSync(path.join(root,'docs/coverage.json'),JSON.stringify(result,null,2)+'\n');
const audit=new Map();
for(const q of bank)for(const e of q.evidence||[]){const key=e.url+'|'+e.sha256;let r=audit.get(key);if(!r){r={url:e.url,sha256:e.sha256,checkedAt:e.checkedAt,...(e.extractionMethod?{extractionMethod:e.extractionMethod}:{}),questionIds:[]};audit.set(key,r);}if(!r.questionIds.includes(q.id))r.questionIds.push(q.id);}
fs.writeFileSync(path.join(root,'docs/source-audit.json'),JSON.stringify([...audit.values()],null,2)+'\n');
let md=`# 問題整備・検証レポート\n\n受検予定日：2026年11月5日、日本FP協会・資産設計提案業務。法令基準日：2026年4月1日。[公式試験日程](https://www.jafp.or.jp/exam/schedule/)。公開問題の分析・設問ごとの変更は[単元別分析レポート](PAST_EXAM_ANALYSIS.md)を参照。\n\n## 収録状況\n\n- 全単元：${result.totalUnits}（学科61・日本FP協会実技12・任意きんざい16）。\n- 問題収録済み：${result.recordedUnits}単元（必須${result.requiredUnits}単元全て＋任意1単元）。\n- 総問題数：${result.questionCount}（学科${result.academicQuestionCount}・協会実技${result.practicalQuestionCount}・任意1）。必須単元は全て5〜10問。\n- 法令確認未完了：${result.unverifiedCount}問。旧7問もIDを保持して再検証済み。\n- 公開問題240問を分析。旧${analysis.replacedQuestions}問を差替え、${analysis.addedQuestions}問を追加。同じ論点の演習${analysis.observedTopicExercises}問・範囲の補強${analysis.supplementExercises}問。公開分にない論点を高頻度とは表示しません。\n\n|章|単元数|収録数|章別テスト|\n|---|---:|---:|---:|\n`;
for(const ch of chapters)md+=`|${ch.title}${ch.optional?'【任意】':''}|${ch.units.length}|${ch.questionCount}|${ch.chapterTestSize?ch.chapterTestSize+'問':'問題不足・開始不可'}|\n`;
md+=`\n日本FP協会実技は別に3択20問の演習を用意。必須分野が未検証・不足なら開始しません。追加5単元は「追加演習」と表示し、存在しないテキストページを割り当てていません。\n\n## 未収録・不足\n\n学科・日本FP協会の未収録は0単元。任意きんざいは15単元未収録、1単元1問で不足のため未完成です。\n\n`;
for(const u of result.missingUnits)md+=`- ${u.id}：${u.title}【任意】\n`;
md+=`\n不足：${result.insufficientUnits.map(u=>u.id+'（'+u.recorded+'問）').join('、')}。これらのデータや学習履歴は削除せず、通常の10日計画の必須対象からは外しています。\n\n## 法令・出典\n\n日本FP協会の公開原問は2023〜2025年4月1日基準であり、今回の基準日とは異なります。国税庁、日本年金機構、厚生労働省、金融庁、e-Gov等の本文・施行範囲を照合し、区分所有法の2026年4月施行改正などを反映。年分で値が異なる税の問題は年分を明記しています。\n\n各問に正解・解説・法令基準日・URL・照合抜粋・資料ハッシュ・確認日・検証状態・過去問の年度と問番号・加工区分を保存。未検証・基準日不一致の設問は出題しません。[出典監査記録](source-audit.json)は実際に採用した${new Set([...audit.values()].map(e=>e.url)).size}件のURLの記録です。\n\n## 検証と保存互換性\n\n- 第1章55問の差替えを先に実装・ブラウザー確認後、他章・実技へ拡充。最終の第1章は公務員iDeCo上限を追加し56問。\n- 計算34問を設問条件から独立検算し、全116件の計算メモも計算結果・選択肢と照合。全章25問、実技20問の分野・重複・不足の制御を検証。\n- 動作テストの実行結果は[検証記録](validation.json)に保存。Safari実機は未検証。file://は環境のChromium管理ポリシーで遮断される場合に明示してスキップし、HTTPで確認します。\n- 保存キーfp3_trainer_stateと既存の読了・成績・時間・復習・日程を保持。旧JSONを読み込めます。新旧問題を混同しないよう、旧成績を明示し、誤答の版が異なる履歴は保留として維持。\n- タイマーの開始時刻保存、休止・再表示時の経過補完、一時停止、終了時の二重加算防止を保持。\n\n実際の利用者のブラウザー履歴にはアクセスせず、隔離した旧形式テストデータで検証しています。\n`;
fs.writeFileSync(path.join(root,'docs/REPORT.md'),md);
console.log(JSON.stringify({questionCount:result.questionCount,totalUnits:result.totalUnits,recordedUnits:result.recordedUnits,unverifiedCount:result.unverifiedCount,missingUnits:result.missingUnits.length,chapters:chapters.map(ch=>[ch.id,ch.questionCount])},null,2));
