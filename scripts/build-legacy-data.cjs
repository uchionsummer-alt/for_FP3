// 元の7問を監査用JSONに保持。第1章の2問は改訂IDを引き継ぐため重複登録しない。
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const urls = {
    q2_1: ['https://www.seiho.or.jp/'],
    q4_1: ['https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2260.htm'],
    q6_4: ['https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4132.htm'],
    q7_3: ['https://www.jafp.or.jp/exam/3fp/'],
    q9_1: ['https://www.jafp.or.jp/aim/fptoha/fp/']
};
const old = JSON.parse(fs.readFileSync(path.join(root, 'data/legacy-questions.json'), 'utf8'));
const pending = old.filter(q => !['q1_1', 'q1_10'].includes(q.id)).map(q => ({
    ...q, previousLawsDate: q.lawsDate, lawsDate: null,
    verificationStatus: 'pending', verifiedAt: null, evidence: [], revision: 1,
    sourceUrls: urls[q.id],
    verificationNote: '旧2024年基準の問題。2026年の適用基準日と一次資料本文を再確認できるまで通常出題を停止。'
}));
fs.writeFileSync(path.join(root, 'data/legacy-pending.js'),
    '// 自動生成: node scripts/build-legacy-data.cjs。未検証の既存問題。\nconst FP3_LEGACY_PENDING = ' + JSON.stringify(pending, null, 2) + ';\n');
