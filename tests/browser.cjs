const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs/promises');
const path=require('node:path');
const http=require('node:http');
const root=path.resolve(__dirname,'..');
const entry=process.env.FP3_TEST_ENTRY||'index.html';
const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css','.woff2':'font/woff2','.ttf':'font/ttf'};
const server=http.createServer(async(req,res)=>{
 try {
  const target=path.resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));
  if(!target.startsWith(root+path.sep)){res.writeHead(403).end();return;}
  const data=await fs.readFile(target);res.writeHead(200,{'Content-Type':mime[path.extname(target)]||'application/octet-stream'});res.end(data);
 } catch {res.writeHead(404).end();}
});
const legacy={startDate:'2026-10-20',targetHours:50,unitStatus:{u1_1:'completed',u7_1:'completed'},unitTestScores:{u1_1:60,u7_1:90},chapterTestScores:{ch7:70},dailyTimeLogs:{'2026-10-20':90},wrongQuestionIds:['q1_1','mock_u2_2_1','unknown_legacy'],customUnitDays:{u7_1:8},customFutureField:{kept:true}};
let browser,context,page,count=0,skipped=0;const errors=[];const external=[];
async function check(name,fn){await fn();console.log('PASS '+name);count++;}
(async()=>{
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 const base='http://127.0.0.1:'+server.address().port;
 browser=await chromium.launch({headless:true,executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium'});
 context=await browser.newContext({acceptDownloads:true});
 await context.addInitScript(value=>{if(!localStorage.getItem('fp3_trainer_state'))localStorage.setItem('fp3_trainer_state',JSON.stringify(value));},legacy);
 page=await context.newPage();page.on('pageerror',e=>errors.push(e.message));page.on('request',r=>{if(!r.url().startsWith(base))external.push(r.url());});page.on('dialog',d=>d.accept());
 await page.goto(base+'/'+entry);await page.waitForFunction(()=>typeof QUESTION_DATABASE!=='undefined'&&document.getElementById('chapters-container').children.length===9);
 await check('旧localStorage・任意学習・50時間・3軸グラフを維持',async()=>{
  const state=await page.evaluate(()=>appState);for(const key of Object.keys(legacy))assert.deepEqual(state[key],key==='unitStatus'?{...state.unitStatus,...legacy.unitStatus}:legacy[key],key);
  assert.equal(await page.locator('canvas').count(),5);assert.equal(await page.evaluate(()=>Object.keys(Chart.instances).length),5);
  assert.equal(await page.evaluate(()=>appState.targetHours),50);
  assert.equal(await page.evaluate(()=>DEFAULT_SCHEDULE.some(d=>d.unitIds.some(id=>/^u[78]_/.test(id)))),false);
  assert.equal(await page.locator('#dash-practical-progress').innerText(),'0 / 12 完了');
  assert.ok(await page.evaluate(()=>appState.wrongQuestionIds.includes('q1_1')));
  assert.equal(await page.evaluate(()=>reviewQuestions().some(q=>q.id==='q1_1')),false);
  assert.equal(await page.evaluate(()=>scoreHistoryLabel('u1_1')),'（旧履歴）');
 });
 await check('第1章の実データ56問・適用基準日・収録数を表示',async()=>{
  assert.equal(await page.evaluate(()=>availableQuestions().filter(q=>q.chapterId==='ch1').length),56);
  assert.equal(await page.evaluate(()=>FP3Quiz.referenceForDate(FP3_REFERENCE_POLICY,appState.examDate).lawsDate),'2026-04-01');
  assert.ok((await page.locator('#question-coverage').innerText()).includes('2026-11-05'));
  assert.equal(await page.evaluate(()=>unitInventory('u1_1').available),5);
 });
 await check('確認テスト5問・二重採点防止・解説・80%保存',async()=>{
  await page.evaluate(()=>startSingleUnitTest('u1_1'));
  for(let i=0;i<5;i++){
   const q=await page.evaluate(()=>activeTestSession.questions[activeTestSession.currentIndex]);
   await page.locator(`[data-answer="${i===0?(q.answer+1)%q.options.length:q.answer}"]`).click();
   assert.ok((await page.locator('#test-content-area').innerText()).includes(q.explanation));
   assert.ok((await page.locator('#test-content-area').innerText()).includes(q.options[q.answer]));
   assert.ok((await page.locator('#test-content-area a').first().getAttribute('href')).startsWith('https://'));
   const n=await page.evaluate(()=>{submitAnswer(0);return activeTestSession.userAnswers.length;});assert.equal(n,i+1);
   await page.getByRole('button',{name:i===4?'結果を見る':'次の問題へ',exact:true}).click();
  }
  assert.equal(await page.evaluate(()=>appState.unitTestScores.u1_1),80);
  assert.equal(await page.evaluate(()=>appState.testHistory.at(-1).total),5);
  assert.equal(await page.evaluate(()=>appState.testHistory.at(-1).percent),80);
 });
 await check('誤答を即時保存・再読込後の復習・未知IDの維持',async()=>{
  const wrong=await page.evaluate(()=>appState.wrongQuestionIds.find(id=>QUESTION_DATABASE.some(q=>q.id===id)));
  assert.ok(wrong);await page.reload();await page.evaluate(()=>startReviewMode());
  const expected=await page.evaluate(()=>activeTestSession.questions.length);assert.ok(expected>0);
  for(let i=0;i<expected;i++){const a=await page.evaluate(()=>activeTestSession.questions[activeTestSession.currentIndex].answer);await page.locator(`[data-answer="${a}"]`).click();await page.getByRole('button',{name:i===expected-1?'結果を見る':'次の問題へ',exact:true}).click();}
  const s=await page.evaluate(()=>appState);assert.equal(s.unitTestScores.u1_1,80);assert.ok(!s.wrongQuestionIds.includes(wrong));assert.ok(s.wrongQuestionIds.includes('unknown_legacy'));assert.ok(s.wrongQuestionIds.includes('mock_u2_2_1'));
 });
 await check('第1章の章別25問・全単元出題・単元別成績を正しく記録',async()=>{
  await page.evaluate(()=>startChapterTest('ch1'));const qs=await page.evaluate(()=>activeTestSession.questions);assert.equal(qs.length,25);assert.equal(new Set(qs.map(q=>q.unitId)).size,10);
  const expected={};qs.forEach((q,i)=>{const s=expected[q.unitId]||(expected[q.unitId]={total:0,correct:0});s.total++;if(i<11)s.correct++;});
  for(let i=0;i<25;i++){await page.evaluate(({i})=>{const q=activeTestSession.questions[i];submitAnswer(i<11?q.answer:(q.answer+1)%q.options.length);nextQuestion();},{i});}
  const s=await page.evaluate(()=>appState);assert.equal(s.chapterTestScores.ch1,44);
  for(const [id,c] of Object.entries(expected)){assert.equal(s.unitTestScores[id],Math.round(c.correct/c.total*100),id);assert.equal(s.unitTestDetails[id].total,c.total);}
  const n=s.testHistory.length;await page.evaluate(()=>renderTestResults());assert.equal(await page.evaluate(()=>appState.testHistory.length),n);
 });
 await check('全必須章の25問テストが完了し章成績100%を保存',async()=>{
  for(const ch of ['ch2','ch3','ch4','ch5','ch6','ch9']){
   await page.evaluate(id=>startChapterTest(id),ch);
   assert.equal(await page.evaluate(()=>activeTestSession.questions.length),25);
   for(let i=0;i<25;i++) await page.evaluate(()=>{const q=activeTestSession.questions[activeTestSession.currentIndex];submitAnswer(q.answer);nextQuestion();});
   assert.equal(await page.evaluate(id=>appState.chapterTestScores[id],ch),100,ch);
   assert.ok((await page.locator('#test-content-area').innerText()).includes('正解: 25 / 25'));
  }
 });
 await check('公開過去問の単元別分析と加工・補強表示を確認',async()=>{
  await page.evaluate(()=>switchTab('tests'));await page.getByText('公開過去問の単元別分析・差し替え内容',{exact:true}).click();
  const analysis=await page.locator('#past-exam-analysis').innerText();
  assert.ok(analysis.includes('学科180問・実技60問'));
  assert.equal(await page.locator('#past-exam-analysis details').count(),73);
  assert.ok(analysis.includes('非公開CBTの出題率'));
  const legacyLabel=await page.evaluate(()=>{const saved=appState.unitTestDetails.u1_1;appState.unitTestDetails.u1_1={total:5,correct:3,mode:'unit'};const label=scoreHistoryLabel('u1_1');appState.unitTestDetails.u1_1=saved;return label;});
  assert.ok(legacyLabel.includes('問題差替前'));
 });
 await check('実技の資料表・採点・出典表示・誤答の版を保存',async()=>{
  await page.evaluate(()=>{const q=QUESTION_DATABASE.find(q=>q.id==='q9_2_1');runTestEngine([q],'資料読取りの検証',{mode:'unit',unitId:q.unitId});});
  assert.equal(await page.locator('#test-content-area table tbody tr').count(),5);
  assert.ok((await page.locator('#test-content-area table').innerText()).includes('2,600万円'));
  await page.setViewportSize({width:390,height:844});
  await page.locator('#test-content-area table').scrollIntoViewIfNeeded();
  assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
  await fs.mkdir(path.join(root,'test-results'),{recursive:true});
  await page.screenshot({path:path.join(root,'test-results/material-table.png'),fullPage:false});
  await page.setViewportSize({width:1280,height:900});
  const q=await page.evaluate(()=>activeTestSession.questions[0]);
  await page.locator(`[data-answer="${(q.answer+1)%3}"]`).click();
  assert.equal(await page.locator('#test-content-area table tbody tr').count(),5);
  assert.equal(await page.locator('#test-content-area h4').innerText(),'Q. '+q.question);
  assert.ok((await page.locator('#test-content-area').innerText()).includes('修正加工'));
  assert.ok((await page.locator('#test-content-area').innerText()).includes('2026年5月公表分 問3'));
  const markers=await page.evaluate(()=>JSON.parse(localStorage.getItem('fp3_trainer_state')).wrongQuestionRevisions);assert.equal(markers[q.id],q.revision);
  await page.getByRole('button',{name:'結果を見る',exact:true}).click();
  await page.reload();assert.ok(await page.evaluate(()=>reviewQuestions().some(q=>q.id==='q9_2_1')));
 });
 await check('日本FP協会の実技20問を完了し95%保存・章別25問の成績を維持',async()=>{
  await page.evaluate(()=>switchTab('tests'));await page.locator('button[onclick="startPracticalTest()"]').click();
  const qs=await page.evaluate(()=>activeTestSession.questions);assert.equal(qs.length,20);assert.ok(qs.every(q=>q.type==='mcq'));assert.equal(new Set(qs.map(q=>q.unitId)).size,13);
  const oldChapter=await page.evaluate(()=>appState.chapterTestScores.ch9);
  for(let i=0;i<20;i++)await page.evaluate(i=>{const q=activeTestSession.questions[activeTestSession.currentIndex];submitAnswer(i===0?(q.answer+1)%3:q.answer);nextQuestion();},i);
  const history=await page.evaluate(()=>appState.testHistory.at(-1));assert.equal(history.mode,'practical');assert.equal(history.total,20);assert.equal(history.percent,95);assert.equal(history.questionRevisions.length,20);
  assert.equal(await page.evaluate(()=>appState.chapterTestScores.ch9),oldChapter);
 });
 await check('実技の分野が未検証なら20問を捏造せず開始を止める',async()=>{
  await page.evaluate(()=>{QUESTION_DATABASE.filter(q=>q.practiceGroup==='fund').forEach(q=>q.verificationStatus='pending');activeTestSession=null;startPracticalTest();});
  assert.equal(await page.evaluate(()=>activeTestSession),null);await page.reload();
 });
 await check('未収録・未検証・基準日不一致・空の復習を開始しない',async()=>{
  await page.evaluate(()=>{activeTestSession=null;startSingleUnitTest('nonexistent');});assert.equal(await page.evaluate(()=>activeTestSession),null);
  await page.evaluate(()=>runTestEngine([], '空'));assert.equal(await page.evaluate(()=>activeTestSession),null);
  await page.evaluate(()=>{const q=QUESTION_DATABASE.find(q=>q.unitId==='u1_1');q.verificationStatus='pending';window.testPendingId=q.id;startSingleUnitTest('u1_1');});
  assert.ok(!(await page.evaluate(()=>activeTestSession.questions.map(q=>q.id))).includes(await page.evaluate(()=>window.testPendingId)));
  await page.reload();await page.evaluate(()=>{appState.examDate='2026-02-01';activeTestSession=null;startSingleUnitTest('u1_1');startChapterTest('ch1');startPracticalTest();startReviewMode();});assert.equal(await page.evaluate(()=>activeTestSession),null);
  await page.reload();
 });
 await check('読了チェック・学習日選択・タイマー・累計学習時間',async()=>{
  await page.evaluate(()=>{switchTab('dashboard');document.getElementById('schedule-day-select').value='8';renderScheduleChecklist();toggleUnitStatusFromSchedule('u9_1',true);});
  assert.equal(await page.locator('#schedule-day-select').inputValue(),'8');assert.equal(await page.evaluate(()=>appState.unitStatus.u9_1),'completed');
  await page.evaluate(()=>toggleTimer());await page.waitForFunction(()=>timerSeconds>=1);await page.evaluate(()=>toggleTimer());assert.equal(await page.evaluate(()=>isTimerRunning),false);
  const before=await page.evaluate(()=>Object.values(appState.dailyTimeLogs).reduce((a,b)=>a+b,0));
  await page.evaluate(()=>{appState.timerSession={elapsedMs:120000,startedAt:null};restoreTimer();stopTimer();});assert.equal(await page.evaluate(()=>Object.values(appState.dailyTimeLogs).reduce((a,b)=>a+b,0)),before+2);
 });
 // 固定した時計で長時間の休止と電源断（ページの破棄・再生成）を再現する。
 // 実利用の保存領域とは別のブラウザーコンテキストを使う。
 const timerContext=await browser.newContext();
 const timerErrors=[];const epoch=Date.UTC(2026,9,27,1);
 let timerPage;
 async function openTimer(now){
  timerPage=await timerContext.newPage();
  await timerPage.addInitScript(value=>{Date.now=()=>value;},now);
  timerPage.on('dialog',d=>d.accept());timerPage.on('pageerror',e=>timerErrors.push(e.message));
  await timerPage.goto(base+'/'+entry);await timerPage.waitForFunction(()=>typeof appState!=='undefined'&&document.getElementById('chapters-container').children.length===9);
 }
 async function setTimerClock(now){await timerPage.evaluate(value=>{Date.now=()=>value;document.dispatchEvent(new Event('visibilitychange'));},now);}
 const timerTotal=()=>timerPage.evaluate(()=>Object.values(appState.dailyTimeLogs).reduce((a,b)=>a+b,0));
 await check('タイマー: 休止中2時間を補完し、タブを閉じても3時間で再開',async()=>{
  await openTimer(epoch);await timerPage.locator('#timer-start-btn').click();
  assert.equal(await timerPage.evaluate(()=>JSON.parse(localStorage.getItem('fp3_trainer_state')).timerSession.startedAt),epoch);
  await setTimerClock(epoch+2*3600000);assert.equal(await timerPage.locator('#timer-display').innerText(),'02:00:00');
  await timerPage.close();await openTimer(epoch+3*3600000);
  assert.equal(await timerPage.locator('#timer-display').innerText(),'03:00:00');assert.equal(await timerPage.evaluate(()=>isTimerRunning),true);
  assert.equal(await timerTotal(),0); // 終了までは累計に二重加算しない。
 });
 await check('タイマー: 終了時のみ180分を加算し、再表示・再終了で重複しない',async()=>{
  await timerPage.locator('#timer-stop-btn').click();assert.equal(await timerTotal(),180);
  await timerPage.evaluate(()=>stopTimer());assert.equal(await timerTotal(),180);
  await timerPage.close();await openTimer(epoch+4*3600000);
  assert.equal(await timerPage.locator('#timer-display').innerText(),'00:00:00');assert.ok(await timerPage.locator('#timer-stop-btn').isDisabled());
  await timerPage.evaluate(()=>stopTimer());assert.equal(await timerTotal(),180);
 });
 await check('タイマー: 一時停止は再起動後も維持し、再開後の時間だけを追加',async()=>{
  await timerPage.evaluate(()=>toggleTimer());await setTimerClock(epoch+4*3600000+90000);await timerPage.evaluate(()=>toggleTimer());
  await timerPage.close();await openTimer(epoch+10*3600000);
  assert.equal(await timerPage.locator('#timer-display').innerText(),'00:01:30');assert.equal(await timerPage.evaluate(()=>isTimerRunning),false);
  await setTimerClock(epoch+11*3600000);assert.equal(await timerPage.locator('#timer-display').innerText(),'00:01:30');
  await timerPage.locator('#timer-start-btn').click();await setTimerClock(epoch+11*3600000+30000);
  assert.equal(await timerPage.locator('#timer-display').innerText(),'00:02:00');await timerPage.evaluate(()=>stopTimer());assert.equal(await timerTotal(),182);
 });
 await check('タイマー: バックアップに開始時刻を含み、不正なタイマーを拒否',async()=>{
  await timerPage.evaluate(()=>toggleTimer());
  const restored=await timerPage.evaluate(()=>validatedState(JSON.parse(JSON.stringify(appState))).timerSession);
  assert.equal(restored.startedAt,epoch+11*3600000+30000);
  const download=timerPage.waitForEvent('download');await timerPage.evaluate(()=>exportData());
  assert.deepEqual(JSON.parse(await fs.readFile(await (await download).path(),'utf8')).timerSession,restored);
  for(const session of [{elapsedMs:-1,startedAt:null},{elapsedMs:0,startedAt:'yesterday'},[],{elapsedMs:0,startedAt:null,extra:true}]){
   const accepted=await timerPage.evaluate(timerSession=>{try{validatedState({...appState,timerSession});return true;}catch{return false;}},session);
   assert.equal(accepted,session.extra===true);
  }
  assert.equal(await timerPage.evaluate(()=>validatedState({startDate:'2026-10-20'}).timerSession),null);
  assert.deepEqual(timerErrors,[]);
 });
 await timerContext.close();
 await check('JSONバックアップのダウンロードと旧形式の復元',async()=>{
  const downloadPromise=page.waitForEvent('download');await page.evaluate(()=>exportData());const dl=await downloadPromise;const saved=JSON.parse(await fs.readFile(await dl.path(),'utf8'));assert.ok(saved.customFutureField.kept);assert.ok(saved.testHistory.length>=3);
  await page.evaluate(()=>{toggleTimer();switchTab('settings');});const file=page.locator('input[type=file]');
  await file.setInputFiles({name:'old-backup.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify(legacy))});
  await page.waitForFunction(()=>appState.unitTestScores.u1_1===60);
  assert.equal(await page.evaluate(()=>appState.timerSession),null);assert.equal(await page.evaluate(()=>isTimerRunning),false);assert.ok(await page.locator('#timer-stop-btn').isDisabled());
  assert.deepEqual(await page.evaluate(()=>appState.wrongQuestionRevisions),{});
  assert.equal(await page.evaluate(()=>appState.unitStatus.u7_1),'completed');assert.equal(await page.evaluate(()=>appState.customUnitDays.u7_1),8);assert.ok(await page.evaluate(()=>appState.customFutureField.kept));
  const before=await page.evaluate(()=>JSON.stringify(appState));await file.setInputFiles({name:'invalid.json',mimeType:'application/json',buffer:Buffer.from('{"unitStatus":null}')});await page.waitForTimeout(100);assert.equal(await page.evaluate(()=>JSON.stringify(appState)),before);
 });
 await check('モバイル幅で操作可能・fp3.htmlも同じデータを利用',async()=>{
  await page.setViewportSize({width:390,height:844});await page.goto(base+'/'+(entry==='index.html'?'fp3.html':entry));await page.evaluate(()=>switchTab('progress'));
  await fs.mkdir(path.join(root,'test-results'),{recursive:true});await page.screenshot({path:path.join(root,'test-results/mobile.png'),fullPage:false});
  assert.equal(await page.locator('#chapters-container > div').count(),9);assert.ok(await page.locator('#chapters-container').isVisible());
  assert.ok(await page.evaluate(()=>appState.customFutureField.kept));
 });
 await check('未収録/不足表示・0問の単元ボタン無効を確認',async()=>{
  await page.evaluate(()=>{QUESTION_DATABASE.splice(0,QUESTION_DATABASE.length,...QUESTION_DATABASE.filter(q=>q.unitId!=='u1_2'));renderAllViews();});
  assert.equal(await page.evaluate(()=>unitInventory('u1_2').total),0);assert.ok((await page.evaluate(()=>unitInventory('u1_2').text)).includes('問題未収録'));
  const btn=page.locator('#chapters-container button[onclick="startSingleUnitTest(\'u1_2\')"]');assert.ok(await btn.isDisabled());
  await page.evaluate(()=>{QUESTION_DATABASE.splice(0,QUESTION_DATABASE.length,...QUESTION_DATABASE.filter(q=>q.unitId!=='u1_3'||q.id==='q1_3_1'));renderAllViews();});assert.ok((await page.evaluate(()=>unitInventory('u1_3').text)).includes('問題不足'));
 });
 try {
  const offline=await browser.newContext();const local=await offline.newPage();
  try {
   await local.goto('file://'+path.join(root,'fp3.html'));
   assert.equal(await local.evaluate(()=>QUESTION_DATABASE.length),398);
   console.log('PASS file://起動');count++;
  } finally {await offline.close();}
 } catch(e) {
  if(!e.message.includes('ERR_BLOCKED_BY_ADMINISTRATOR'))throw e;
  console.log('SKIP file://起動: この環境のChromium管理ポリシーで遮断。HTTP経由の両入口は検証済み。');skipped++;
 }
 await check('実行時エラー・外部CDN依存がない',async()=>{assert.deepEqual(errors,[]);assert.deepEqual(external,[]);});
 if(entry==='fp3-standalone.html') {
  const deps=await page.evaluate(()=>({scripts:document.querySelectorAll('script[src]').length,styles:document.querySelectorAll('link[rel=stylesheet]').length}));
  assert.deepEqual(deps,{scripts:0,styles:0});
  assert.ok(!(await page.content()).includes('../webfonts/'));
  console.log('PASS 単一HTMLの外部JS・CSS・フォント依存が0件');count++;
  const {createHash}=require('node:crypto');const hash=s=>createHash('sha256').update(s).digest('hex');
  const original=await fs.readFile(path.join(root,'fp3-standalone.html'),'utf8');
  await page.goto(base+'/fp3-copy.html');
  assert.equal(hash(await page.locator('#source').inputValue()),hash(original));
  console.log('PASS コピー用ページに完全版HTML全文を保持');count++;
  await context.grantPermissions(['clipboard-read','clipboard-write']);
  await page.locator('#copy').click();await page.waitForFunction(()=>document.getElementById('status').textContent.includes('全文をコピーしました'));
  assert.equal(hash(await page.evaluate(()=>navigator.clipboard.readText())),hash(original));
  console.log('PASS 全文コピーボタンで完全版HTMLをコピー');count++;
  const fullDownload=page.waitForEvent('download');await page.locator('#download').click();const file=await fullDownload;
  assert.equal(file.suggestedFilename(),'fp3.html');assert.equal(hash(await fs.readFile(await file.path(),'utf8')),hash(original));
  console.log('PASS 保存ボタンでコピー元と同一のfp3.htmlを保存');count++;
 }
 await fs.mkdir(path.join(root,'test-results'),{recursive:true});
 await fs.writeFile(path.join(root,'test-results',entry==='index.html'?'browser-normal.json':'browser-standalone.json'),JSON.stringify({entry,passed:count,skipped,runtimeErrors:errors,externalRequests:external},null,2)+'\n');
 console.log(`${count} browser scenarios passed; ${skipped} skipped`);
})().catch(e=>{console.error(e);process.exitCode=1;}).finally(async()=>{if(browser)await browser.close();server.close();});
