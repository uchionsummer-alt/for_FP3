// 制作補助。一次資料の該当箇所を読解・照合した設問だけを登録する。
// 通常のビルドはこのスクリプトや/tmpの取得キャッシュに依存しない。
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const {root,digest}=require('../review-tools.cjs');
const analysis=require('../../data/past-exam-analysis.json');
const old=require('../../data/archive/before-past-exam-revision.json');
const normalize=s=>s.replace(/\s+/g,' ').trim();
const errors=[];
function E(key,needle,length=400,before=0){
 const dir='/tmp/fp3-review-2026';const t=normalize(fs.readFileSync(path.join(dir,key+'.txt'),'utf8'));
 const at=t.indexOf(normalize(needle));
 if(at<0){
  const message='根拠箇所を確認できない: '+key+' / '+needle;
  if(process.env.FP3_REVIEW_PREFLIGHT!=='1')throw Error(message);
  errors.push(message);
 }
 const meta=JSON.parse(fs.readFileSync(path.join(dir,key+'.json'),'utf8'));
 return {url:meta.url,sha256:meta.sha256,checkedAt:meta.checkedAt,excerpt:t.slice(Math.max(0,at-before),Math.max(0,at-before)+length),...(meta.extractionMethod?{extractionMethod:meta.extractionMethod}:{})};
}
function R(year,number,kind='g3',relationship='same_topic'){
 const paper=analysis.papers.find(p=>p.id===`${kind}_${year}05`);
 if(!paper?.questions.some(q=>q.number===number))throw Error('存在しない過去問');
 return {paperId:paper.id,questionNumber:number,relationship,label:paper.label+` 問${number}`,questionUrl:paper.questionUrl,answerUrl:paper.answerUrl,originalLawsDate:paper.lawsDate,
 processingNote:relationship==='same_topic'?'同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。':'公開問題の関連論点を広げた補強問題。元問と同一の出題内容ではありません。'};
}
function P(year,number,kind='g3'){
 const paper=analysis.papers.find(p=>p.id===`${kind}_${year}05`);
 const filename=paper.id+(kind==='g3'?'_qa.txt':'_q.txt');
 const text=fs.readFileSync('/tmp/fp3-past/'+filename,'utf8');
 // 注意事項の「問31～問60」を設問と誤認しない。独立した見出し行だけを採用する。
 const headings=[...text.matchAll(/^[ \t\f]*問[ \t]*([０-９0-9]+)[ \t]*\r?$/gm)];
 const index=headings.findIndex(m=>Number(m[1].normalize('NFKC'))===number);
 if(index<0)throw Error('PDF設問を確認できない: '+paper.id+' / '+number);
 const block=text.slice(headings[index].index+headings[index][0].length,headings[index+1]?.index||text.length);
 if(normalize(block).length<20)throw Error('設問本文が不足: '+paper.id+' / '+number);
 return {url:paper.questionUrl,sha256:paper.sha256,checkedAt:paper.checkedAt,excerpt:normalize(block).slice(0,700)};
}
function chapter(n){
 const rows=[];const reviews=JSON.parse(fs.readFileSync(path.join(root,'data/reviews.json'),'utf8'));
 function add(unit,question,options,answer,explanation,refs,evidence,extra={}){
  const uid=`u${n}_${unit}`,pos=rows.filter(q=>q.unitId===uid).length;
  const original=old.filter(q=>q.unitId===uid)[pos];
  const id=original?.id||`q${n}_${unit}_${pos+1}`;
  if(typeof options==='boolean'){answer=options?0:1;options=['○ 正しい','× 誤り'];}
  else {
   // 解説は選択肢の内容で説明し、正解位置の偏りを章内で抑える。
   const target=rows.filter(q=>q.type==='mcq').length%3;
   options=[...options];
   while(answer!==target){options.push(options.shift());answer=(answer+options.length-1)%options.length;}
  }
  if(!Array.isArray(evidence)||!evidence.length)throw Error('根拠なし: '+id);
  const q={id,chapterId:'ch'+n,unitId:uid,type:options.length===2?'binary':'mcq',question,options,answer,explanation,
   revision:(original?.revision||0)+1,bankEdition:'past-2026-10-27',pastExamRefs:refs,
   examAlignment:refs.some(r=>r.relationship==='same_topic')?'observed_topic':'scope_supplement',
   alignmentNote:refs.length?'公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。':'分析した公開3セットでは同じ論点の出題を確認できず、試験範囲の補強として収録。出題頻度は未確認。',
   ...(original?.previousLawsDate?{previousLawsDate:original.previousLawsDate}:{}),...extra,
   lawsDate:null,sourceUrls:evidence.map(e=>e.url),verificationStatus:'pending',verifiedAt:null,evidence:[],verificationNote:'照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。'};
  const review={questionDigest:digest(q),lawsDate:'2026-04-01',verifiedAt:'2026-10-27',verificationStatus:'verified',sourceUrls:[...new Set(evidence.map(e=>e.url))],evidence,
   verificationNote:'公開問題・模範解答の論点と一次資料本文を照合。数値問題は設問条件から検算。2026年4月1日時点の施行範囲を使用し、後施行の改正を混入させない。',
   analysisCheckedAt:'2026-10-27'};
  rows.push(q);reviews[id]=review;
 }
 function finish(){
  if(errors.length)throw Error(errors.join('\n'));
  fs.writeFileSync(path.join(root,'data',`chapter-${String(n).padStart(2,'0')}.js`),`// 公開過去問の分析に基づく再構成問題。照合記録はreviews.json。\nconst FP3_CHAPTER_${String(n).padStart(2,'0')} = `+JSON.stringify(rows,null,2)+';\n');
  fs.writeFileSync(path.join(root,'data/reviews.json'),JSON.stringify(reviews,null,2)+'\n');
  console.log('Reviewed chapter',n,rows.length);
 }
 return {add,finish};
}
module.exports={chapter,E,R,P};
