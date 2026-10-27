// 制作時の一次資料スナップショットを読み、設問ごとの照合結果を保存する補助。
// 本文の取得成功だけでは検証済みにしない。引用と設問を確認した上でapproveを呼ぶ。
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const cache = '/tmp/fp3-sources';
function load(name, variable) {
  const code = fs.readFileSync(path.join(root, 'data', name), 'utf8');
  const context = vm.createContext({});
  return vm.runInContext(code + `\n;${variable}`, context);
}
function digest(q) {
  const fields=[q.id,q.unitId,q.chapterId,q.type,q.question,q.options,q.answer,q.explanation,q.revision];
  if(q.bankEdition) fields.push(q.bankEdition,q.pastExamRefs,q.examAlignment,q.alignmentNote,q.calculationCheck,q.materials,q.practiceGroup);
  return crypto.createHash('sha256').update(JSON.stringify(fields)).digest('hex');
}
function source(key) {
  const info = JSON.parse(fs.readFileSync(path.join(cache, key+'.json'), 'utf8'));
  let text = fs.readFileSync(path.join(cache, key+'.txt'), 'utf8');
  if (text.startsWith('{')) {
    const j=JSON.parse(text);
    if (j.law_full_text) {
      const words=[];const walk=n=>{if(typeof n==='string')words.push(n);else if(Array.isArray(n))n.forEach(walk);else if(n && typeof n==='object')walk(n.children);};
      walk(j.law_full_text);text=words.join('\n');
    }
  }
  return { ...info, text };
}
function evidence(key, quote) {
  const s=source(key);
  if (!s.text.includes(quote)) throw Error(`引用を本文で確認できません: ${key}: ${quote}`);
  return { url:s.url, excerpt:quote, checkedAt:s.checkedAt, sha256:s.sha256 };
}
function approve(q, items, note='一次資料本文と正誤・解説を照合。計算問題は設問条件に基づき独立検算。') {
  const file=path.join(root,'data','reviews.json');
  const reviews=fs.existsSync(file)?JSON.parse(fs.readFileSync(file,'utf8')):{};
  const itemsResolved=items.map(([key,quote])=>evidence(key,quote));
  reviews[q.id]={ questionDigest:digest(q), lawsDate:'2026-04-01', verifiedAt:'2026-10-26', verificationStatus:'verified', sourceUrls:itemsResolved.map(e=>e.url), evidence:itemsResolved, verificationNote:note };
  fs.writeFileSync(file,JSON.stringify(reviews,null,2)+'\n');
}
module.exports={root,load,source,evidence,approve,digest};
