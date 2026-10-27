/* 実際のGoogleアカウントには接続しない。独立した2端末とDrive APIを再現する。 */
const {chromium}=require('playwright');
const assert=require('node:assert/strict'),fs=require('node:fs/promises'),http=require('node:http'),path=require('node:path');
const root=path.resolve(__dirname,'..'),entry=process.env.FP3_TEST_ENTRY||'index.html';
const server=http.createServer(async(req,res)=>{try{
 const file=path.resolve(root,'.'+new URL(req.url,'http://local').pathname);
 if(!file.startsWith(root+path.sep)){res.writeHead(403).end();return;}
 const mime={'.html':'text/html','.js':'text/javascript','.css':'text/css'};
 res.setHeader('Content-Type',(mime[path.extname(file)]||'application/octet-stream')+'; charset=utf-8');res.end(await fs.readFile(file));
}catch{res.writeHead(404).end();}});
const scope='https://www.googleapis.com/auth/drive.appdata',errors=[],files=new Map();
let browser,pc,phone,id=0,passed=0,failUpload=false,failReads=false,uploadBarrier=null;
const check=async(name,fn)=>{await fn();passed++;console.log('PASS '+name);};
async function device(name,initial){
 const context=await browser.newContext();const account={id:'same-account'};
 await context.addInitScript(({scope,initial})=>{
  if(initial&&!localStorage.getItem('fp3_trainer_state'))localStorage.setItem('fp3_trainer_state',JSON.stringify(initial));
  window.google={accounts:{oauth2:{initTokenClient:options=>({requestAccessToken:()=>queueMicrotask(()=>options.callback({access_token:'TEST_ONLY_ACCESS_TOKEN',expires_in:3600,scope}))})}}};
 },{scope,initial});
 await context.route('https://www.googleapis.com/**',async route=>{
  const req=route.request(),url=new URL(req.url()),method=req.method();
  const ok=(body,status=200)=>route.fulfill({status,contentType:'application/json',body:JSON.stringify(body)});
  assert.equal(req.headers().authorization,'Bearer TEST_ONLY_ACCESS_TOKEN');
  if(url.pathname.endsWith('/about'))return ok({user:{permissionId:account.id,emailAddress:name+'@example.invalid'}});
  if(method==='POST'){
   assert.equal(url.searchParams.get('uploadType'),'multipart');
   const boundary=req.headers()['content-type'].split('boundary=')[1];
   const parts=req.postData().split('--'+boundary).filter(p=>p.includes('Content-Type:'));
   const parse=p=>JSON.parse(p.slice(p.indexOf('\r\n\r\n')+4).trim());
   const metadata=parse(parts[0]),doc=parse(parts[1]);assert.deepEqual(metadata.parents,['appDataFolder']);assert.equal(metadata.appProperties.fp3Sync,'v1');
   const key='file'+(++id);files.set(key,doc);
   if(uploadBarrier)await uploadBarrier();
   if(failUpload){failUpload=false;return route.abort('failed');}
   return ok({id:key});
  }
  const key=url.pathname.split('/').at(-1);
  if(method==='DELETE'){if(!files.has(key))return ok({},404);files.delete(key);return route.fulfill({status:204});}
  if(failReads)return route.abort('internetdisconnected');
  if(key==='files'){
   assert.equal(url.searchParams.get('spaces'),'appDataFolder');assert.ok(url.searchParams.get('q').includes("key='fp3Sync'"));
   return ok({files:[...files.keys()].map(id=>({id,name:id+'.json'}))});
  }
  return files.has(key)?ok(files.get(key)):ok({},404);
 });
 const page=await context.newPage();page.on('dialog',d=>d.accept());page.on('pageerror',e=>errors.push(e.message));
 const load=async()=>{await page.goto('http://127.0.0.1:'+server.address().port+'/'+entry);await page.waitForFunction(()=>driveSync!==null);await page.evaluate(()=>clearInterval(driveSync.interval));};
 await load();
 const connect=async()=>page.evaluate(async()=>{document.getElementById('drive-client-id').value='123-test.apps.googleusercontent.com';await driveSync.connect();clearTimeout(driveSync.debounce);});
 const edit=async fn=>{await page.evaluate(fn);await page.evaluate(()=>clearTimeout(driveSync.debounce));};
 const flush=async()=>{await page.evaluate(async()=>{await driveSync.flush();clearTimeout(driveSync.debounce);});};
 return {context,page,account,load,connect,edit,flush,state:()=>page.evaluate(()=>JSON.parse(JSON.stringify(appState)))};
}
(async()=>{
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 browser=await chromium.launch({headless:true,executablePath:'/usr/bin/chromium'});
 pc=await device('pc',{startDate:'2026-10-20',targetHours:50,unitStatus:{u1_1:'completed'},dailyTimeLogs:{'2026-10-27':60},wrongQuestionIds:['unknown-old-id']});
 phone=await device('phone');
 await check('初回の端末履歴をDriveへ移行し、別端末で取得する',async()=>{
  await pc.connect();assert.ok(await pc.page.evaluate(()=>driveSync.token!==null));assert.equal(files.size,1);
  await phone.connect();const s=await phone.state();assert.equal(s.unitStatus.u1_1,'completed');assert.equal(s.dailyTimeLogs['2026-10-27'],60);assert.ok(s.wrongQuestionIds.includes('unknown-old-id'));
  assert.ok(await phone.page.evaluate(()=>localStorage.getItem('fp3_before_drive_sync')));
 });
 await check('PCとスマホの同時更新を統合し、読了・学習時間を失わない',async()=>{
  await pc.edit(()=>{appState.unitStatus.u1_2='completed';appState.dailyTimeLogs['2026-10-27']+=20;saveStateToStorage();});
  await phone.edit(()=>{appState.unitStatus.u2_1='completed';appState.dailyTimeLogs['2026-10-27']+=30;saveStateToStorage();});
  let waiting=0,release;const gate=new Promise(r=>release=r);
  uploadBarrier=async()=>{waiting++;if(waiting===2)release();await gate;};
  await Promise.all([pc.flush(),phone.flush()]);uploadBarrier=null;
  await pc.flush();await phone.flush();
  for(const d of [pc,phone]){const s=await d.state();assert.equal(s.dailyTimeLogs['2026-10-27'],110);assert.equal(s.unitStatus.u1_2,'completed');assert.equal(s.unitStatus.u2_1,'completed');}
 });
 await check('初回の読込確認をキャンセルすると、端末とドライブを変更しない',async()=>{
  const other=await device('cancel',{unitStatus:{u6_1:'completed'},dailyTimeLogs:{'2026-10-27':5}});
  other.page.removeAllListeners('dialog');other.page.on('dialog',d=>d.dismiss());const count=files.size;
  await other.connect();assert.equal((await other.state()).unitStatus.u6_1,'completed');
  assert.equal(await other.page.evaluate(()=>driveSync.cache),null);assert.equal(files.size,count);await other.context.close();
 });
 await check('保存の応答を失って再送しても、時間を二重計上せず旧版を整理する',async()=>{
  await pc.edit(()=>{appState.dailyTimeLogs['2026-10-27']+=10;saveStateToStorage();});failUpload=true;
  await pc.flush();assert.equal(await pc.page.evaluate(()=>driveSync.pending),true);
  await pc.flush();await phone.flush();assert.equal((await phone.state()).dailyTimeLogs['2026-10-27'],120);assert.equal(files.size,1);
 });
 await check('オフラインの変更を保存し、再読込・再接続後に送信する',async()=>{
  failReads=true;await pc.edit(()=>{appState.unitStatus.u3_1='completed';saveStateToStorage();});await pc.flush();
  assert.equal(await pc.page.evaluate(()=>JSON.parse(localStorage.getItem('fp3_drive_sync_v1')).pending),true);
  await pc.load();assert.equal(await pc.page.evaluate(()=>driveSync.token),null);assert.equal((await pc.state()).unitStatus.u3_1,'completed');
  failReads=false;await pc.connect();await phone.flush();assert.equal((await phone.state()).unitStatus.u3_1,'completed');
 });
 await check('認証切れは再接続を表示し、未送信の理解度・復習履歴を保持する',async()=>{
  await pc.edit(()=>{appState.unitTestScores.u1_1=80;appState.unitTestDetails.u1_1={total:5,correct:4,mode:'unit'};appState.wrongQuestionIds.push('q1_1');appState.wrongQuestionRevisions.q1_1=2;saveStateToStorage();driveSync.expiresAt=0;});
  await pc.flush();assert.ok((await pc.page.locator('#drive-sync-status').innerText()).includes('認証期限'));
  await pc.connect();await phone.flush();const s=await phone.state();assert.equal(s.unitTestScores.u1_1,80);assert.equal(s.wrongQuestionRevisions.q1_1,2);
 });
 await check('不正なクラウドの成績は端末や正常な同期記録に反映しない',async()=>{
  const before=await pc.page.evaluate(()=>JSON.stringify(driveSync.cache.doc));
  const bad=structuredClone([...files.values()][0]);
  bad.registers['["unitResult","u1_1"]']={value:{score:9999,detail:null},stamp:[Date.now()+86400000,1,'bad']};files.set('invalid',bad);
  await pc.flush();assert.equal(await pc.page.evaluate(()=>JSON.stringify(driveSync.cache.doc)),before);
  assert.equal((await pc.state()).unitTestScores.u1_1,80);assert.ok(files.has('invalid'));files.delete('invalid');
 });
 await check('別のOAuthアプリIDには未送信の履歴を送信しない',async()=>{
  const count=files.size;await pc.page.evaluate(async()=>{document.getElementById('drive-client-id').value='999-other.apps.googleusercontent.com';await driveSync.connect();});
  assert.ok((await pc.page.locator('#drive-sync-status').innerText()).includes('同じOAuthクライアントID'));assert.equal(files.size,count);
 });
 await check('同じタイマーを両端末で終了しても1回だけ計上する',async()=>{
  const now=Date.now();await pc.edit(()=>toggleTimer());await pc.flush();await phone.flush();
  const timer=(await pc.state()).timerSession;assert.ok(timer.id);assert.equal((await phone.state()).timerSession.id,timer.id);
  await pc.edit(()=>{const started=appState.timerSession.startedAt;Date.now=()=>started+60000;stopTimer();});
  await phone.edit(()=>{const started=appState.timerSession.startedAt;Date.now=()=>started+120000;stopTimer();});
  await pc.flush();await phone.flush();await pc.flush();
  for(const d of [pc,phone]){assert.equal((await d.state()).dailyTimeLogs['2026-10-27'],121);assert.equal((await d.state()).timerSession,null);}
 });
 await check('異なるアカウントには既存履歴を送信しない',async()=>{
  const count=files.size;pc.account.id='different-account';await pc.connect();
  assert.equal(await pc.page.evaluate(()=>driveSync.token),null);assert.ok((await pc.page.locator('#drive-sync-status').innerText()).includes('異なるGoogleアカウント'));assert.equal(files.size,count);
  pc.account.id='same-account';await pc.connect();
 });
 await check('初期化を同期し、旧版のオフライン変更で履歴を復活させない',async()=>{
  await phone.edit(()=>{appState.unitStatus.u5_1='completed';saveStateToStorage();});
  await pc.edit(()=>resetAllData());await pc.flush();await phone.flush();await pc.flush();
  for(const d of [pc,phone]){const s=await d.state();assert.equal(s.unitStatus.u5_1,'unstarted');assert.deepEqual(s.dailyTimeLogs,{});assert.equal(s.unitTestScores.u1_1,undefined);}
 });
 await check('Googleトークンを端末の永続記録・Driveデータ・バックアップに保存しない',async()=>{
  const local=await pc.page.evaluate(()=>JSON.stringify({...localStorage}));assert.ok(!local.includes('TEST_ONLY_ACCESS_TOKEN'));
  assert.ok(!JSON.stringify([...files.values()]).includes('TEST_ONLY_ACCESS_TOKEN'));assert.deepEqual(errors,[]);
 });
 await fs.mkdir(path.join(root,'test-results'),{recursive:true});
 await fs.writeFile(path.join(root,'test-results','drive-'+(entry==='index.html'?'normal':'standalone')+'.json'),JSON.stringify({entry,passed,realGoogleAccountTested:false,runtimeErrors:errors},null,2)+'\n');
 console.log(`${passed} Google Drive mock browser scenarios passed`);
})().catch(e=>{console.error(e);process.exitCode=1;}).finally(async()=>{if(browser)await browser.close();server.close();});
