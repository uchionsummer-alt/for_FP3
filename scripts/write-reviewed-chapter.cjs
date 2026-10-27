// 制作用。根拠本文を読み、正誤・解説を照合してからレビュー済み設問を登録する。
const fs=require('node:fs'), path=require('node:path');
const {root,source,evidence,approve}=require('./review-tools.cjs');
module.exports=function(chapter){
 const rows=[], refs=[];
 function add(unit,question,options,answer,explanation,key,quote,legacyId){
  const num=rows.filter(q=>q.unitId===`u${chapter}_${unit}`).length+1;
  if(typeof options==='boolean'){answer=options?0:1;options=['○ 正しい','× 誤り'];}
  const ref=evidence(key,quote);
  const q={id:legacyId||`q${chapter}_${unit}_${num}`,chapterId:`ch${chapter}`,unitId:`u${chapter}_${unit}`,
    type:options.length===2?'binary':'mcq',question,options,answer,explanation,lawsDate:null,
    sourceUrls:[ref.url],verificationStatus:'pending',verifiedAt:null,evidence:[],revision:legacyId?2:1,
    verificationNote:'レビュー結果はreviews.jsonに保持。設問本文が変更された場合は再照合が必要。',
    ...(legacyId?{previousLawsDate:'2024-04-01'}:{})};
  rows.push(q);refs.push([key,quote]);
 }
 function finish(){
  const n=String(chapter).padStart(2,'0');
  fs.writeFileSync(path.join(root,'data',`chapter-${n}.js`),
   `// 第${chapter}章 オリジナル問題。照合記録はreviews.json。\nconst FP3_CHAPTER_${n} = `+JSON.stringify(rows,null,2)+';\n');
  rows.forEach((q,i)=>approve(q,[refs[i]]));
  console.log('Saved chapter '+chapter+': '+rows.length+' reviewed questions');
 }
 return {add,finish,source};
};
