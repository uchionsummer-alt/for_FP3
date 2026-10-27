const fs = require('node:fs');
const path = require('node:path');
const { root, load, digest } = require('./review-tools.cjs');
const reviews = JSON.parse(fs.readFileSync(path.join(root,'data/reviews.json'),'utf8'));
const files = fs.readdirSync(path.join(root,'data')).filter(f=>/^chapter-\d{2}\.js$/.test(f)).sort();
const rows = files.flatMap(file => load(file, 'FP3_CHAPTER_'+file.match(/\d{2}/)[0]));
const present = new Set(rows.map(q=>q.id));
const legacy = load('legacy-pending.js','FP3_LEGACY_PENDING').filter(q=>!present.has(q.id));
const bank = [...rows,...legacy].map(q=> {
  const review=reviews[q.id];
  if (!review) return q;
  if(review.questionDigest !== digest(q)) throw Error('設問が変更されています。再検証が必要: '+q.id);
  return {...q,...review};
});
const summary = require('./past-exams/report.cjs').writeReport(bank);
fs.writeFileSync(path.join(root,'data/question-bank.js'),
  '// Generated: node scripts/build-questions.cjs。編集元はchapter-XX.js / reviews.json。\nconst FP3_QUESTIONS = '+JSON.stringify(bank,null,2)+';\n'
  + 'const FP3_BANK_EDITION = '+JSON.stringify(summary.bankEdition)+';\n'
  + 'const FP3_PAST_EXAM_SUMMARY = '+JSON.stringify(summary)+';\n');
console.log(`${bank.length} questions; ${bank.filter(q=>q.verificationStatus==='verified').length} verified`);
