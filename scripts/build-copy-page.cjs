const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..');
const source=fs.readFileSync(path.join(root,'fp3-standalone.html'),'utf8');
const questionCount=require('./review-tools.cjs').load('question-bank.js','FP3_QUESTIONS').length;
const escaped=source.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const html=`<!doctype html>
<html lang="ja"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>FP3アプリ 完全版コードをコピー</title>
<style>body{font-family:system-ui,sans-serif;max-width:1100px;margin:24px auto;padding:0 16px;background:#f8fafc;color:#1e293b}h1{font-size:22px}button{border:0;border-radius:8px;padding:12px 18px;background:#db2777;color:white;font-weight:bold;margin:4px 8px 4px 0;cursor:pointer}textarea{width:100%;box-sizing:border-box;height:65vh;padding:12px;margin-top:12px;font:12px/1.5 monospace;white-space:pre;background:white;border:1px solid #cbd5e1;border-radius:8px}#status{min-height:1.5em}p{line-height:1.7}</style></head>
<body><h1>FP3アプリ 完全版コード</h1><p>${questionCount}問・学習管理・グラフ・必要データを含む、単独で使えるHTMLです。<br>「全文コピー」を押してテキストエディターに貼り付け、<strong>fp3.html</strong>という名前でUTF-8保存してください。</p>
<button id="copy" type="button">全文コピー</button><button id="select" type="button">コードを全選択</button><button id="download" type="button">fp3.htmlを保存</button><p id="status" role="status"></p>
<textarea id="source" aria-label="FP3アプリの完全版コード" readonly spellcheck="false" wrap="off">${escaped}</textarea>
<script>
const box=document.getElementById('source'),status=document.getElementById('status');
function selectCode(){box.focus();box.select();box.setSelectionRange(0,box.value.length);}
document.getElementById('select').onclick=()=>{selectCode();status.textContent='全選択しました。コピーしてエディターに貼り付けてください。';};
document.getElementById('copy').onclick=async()=>{
 try {await navigator.clipboard.writeText(box.value);status.textContent='全文をコピーしました。fp3.htmlとして保存してください。';}
 catch {selectCode();try {if(document.execCommand('copy')){status.textContent='全文をコピーしました。fp3.htmlとして保存してください。';return;}}catch{}status.textContent='コードを全選択しました。Ctrl+C、Command+C、または端末のコピー操作でコピーしてください。';}
};
document.getElementById('download').onclick=()=>{
 const url=URL.createObjectURL(new Blob([box.value],{type:'text/html;charset=utf-8'}));
 const link=document.createElement('a');link.href=url;link.download='fp3.html';document.body.appendChild(link);link.click();link.remove();
 setTimeout(()=>URL.revokeObjectURL(url),10000);status.textContent='保存したfp3.htmlをChromeやEdgeなどで開いてください。';
};
</script></body></html>`;
fs.writeFileSync(path.join(root,'fp3-copy.html'),html);
console.log('Created code viewer; source bytes='+Buffer.byteLength(source));
