/* 公開OAuthクライアントIDのみ。クライアントシークレットは設定しない。 */
const FP3_GOOGLE_CLIENT_ID = '';
(function (root) {
    'use strict';
    const S = root.FP3Sync;
    const SCOPE = 'https://www.googleapis.com/auth/drive.appdata';
    const STORE = 'fp3_drive_sync_v1', CONFIG = 'fp3_drive_client_id';
    const BACKUP = 'fp3_before_drive_sync';
    const clone = x => JSON.parse(JSON.stringify(x));
    class DriveSync {
        constructor(adapter, options = {}) {
            this.adapter = adapter;
            this.fetch = options.fetch || root.fetch.bind(root);
            this.writer = root.crypto.randomUUID();
            this.last = clone(adapter.getState());
            this.cache = null; this.token = null; this.expiresAt = 0;
            this.busy = false; this.pending = false; this.revision = 0;
            this.message = '未接続：学習履歴はこの端末に保存しています。';
            try {
                const saved = JSON.parse(localStorage.getItem(STORE) || 'null');
                if (saved) {
                    S.validate(saved.doc);
                    if (typeof saved.account !== 'string' || !saved.account) throw Error('不正な接続先');
                    this.cache = saved;
                    const base = S.materialize(saved.doc, this.last);
                    saved.doc = S.capture(saved.doc, base, this.last, this.writer);
                    this.pending = !!saved.pending || JSON.stringify(base) !== JSON.stringify(this.last);
                    this.persist();
                    this.message = '再接続してください。未送信の変更は端末に保存されています。';
                }
            } catch {
                this.cache = null;
                this.blocked = true;
                this.message = '同期記録を読み込めません。端末のバックアップを出力してから接続設定を確認してください。';
            }
            this.interval = setInterval(() => {
                if (this.token && !document.hidden) void this.flush();
            }, 30000);
            root.addEventListener('online', () => { if (this.token) void this.flush(); });
            document.addEventListener('visibilitychange', () => {
                if (!document.hidden && this.token) void this.flush();
            });
            root.addEventListener('storage', event => {
                if (event.key !== STORE || !event.newValue || !this.cache) return;
                try {
                    const other = JSON.parse(event.newValue);
                    if (other.account !== this.cache.account) return;
                    const merged = S.merge(this.cache.doc, other.doc);
                    this.adapter.validate(S.materialize(merged, this.last));
                    this.cache.doc = merged;
                    this.pending ||= !!other.pending;
                    this.revision++;
                    this.apply();
                    if (this.token && this.pending) this.schedule();
                } catch { this.status('別タブの同期記録が不正です。同期を停止して確認してください。'); this.token = null; }
            });
            this.render();
        }
        status(message) { this.message = message; this.render(); }
        render() {
            const status = document.getElementById('drive-sync-status');
            if (status) status.textContent = this.message;
            const account = document.getElementById('drive-sync-account');
            if (account) account.textContent = this.token && this.cache ? this.cache.label : '';
            const input = document.getElementById('drive-client-id');
            if (input && document.activeElement !== input) input.value = FP3_GOOGLE_CLIENT_ID || localStorage.getItem(CONFIG) || '';
            const badge = document.getElementById('drive-sync-badge');
            if (badge) badge.textContent = !this.token ? '同期：未接続' : this.pending ? '同期：送信待ち' : '同期：接続中';
            const backup = document.getElementById('drive-backup-button');
            if (backup) backup.hidden = !localStorage.getItem(BACKUP);
        }
        persist() {
            if (this.cache) localStorage.setItem(STORE, JSON.stringify({ ...this.cache, pending: this.pending }));
        }
        onSave(options = {}) {
            const state = clone(this.adapter.getState());
            if (this.cache) {
                this.cache.doc = options.reset ? S.reset(this.cache.doc, state, this.writer)
                    : S.capture(this.cache.doc, this.last, state, this.writer, options);
                this.pending = true; this.revision++;
                this.persist(); this.schedule();
            }
            this.last = state;
            this.status(this.token ? '変更を端末に保存しました。自動同期を待っています。'
                : this.cache ? '未送信の変更を保存しました。Googleドライブに再接続してください。' : this.message);
        }
        schedule(delay = 2000) {
            clearTimeout(this.debounce);
            if (this.token) this.debounce = setTimeout(() => void this.flush(), delay);
        }
        apply() {
            const state = this.adapter.validate(S.materialize(this.cache.doc, this.last));
            this.adapter.applyState(state);
            this.last = clone(state);
            this.persist();
        }
        async request(url, options = {}) {
            if (!this.token || Date.now() >= this.expiresAt) {
                this.token = null;
                throw Error('Googleの認証期限が切れました。「Googleドライブに接続」で再接続してください。');
            }
            const token = this.token;
            const controller = new AbortController();
            const timeout = setTimeout(() => controller.abort(), 30000);
            let response;
            try {
                response = await this.fetch(url, { ...options, signal: controller.signal,
                    headers: { ...options.headers, Authorization: 'Bearer ' + token }, cache: 'no-store' });
            } finally { clearTimeout(timeout); }
            if (this.token !== token) throw Error('接続が変更されました。端末の履歴は保持しています。');
            if (response.status === 401) { this.token = null; throw Error('Googleドライブへの再接続が必要です。'); }
            if (!response.ok) {
                const error = Error(response.status === 403 ? 'Googleドライブの権限・API設定・容量を確認してください。'
                    : response.status === 429 ? 'アクセスが集中しています。しばらくして自動再試行します。'
                    : '同期通信に失敗しました。端末の変更は保持されています。');
                error.status = response.status; throw error;
            }
            return response;
        }
        async readAll() {
            const files = []; let page = '';
            do {
                const params = new URLSearchParams({ spaces: 'appDataFolder', pageSize: '100',
                    q: "trashed = false and appProperties has { key='fp3Sync' and value='v1' }",
                    fields: 'nextPageToken,files(id,name)', ...(page ? { pageToken: page } : {}) });
                const list = await (await this.request('https://www.googleapis.com/drive/v3/files?' + params)).json();
                if (!Array.isArray(list.files)) throw Error('ドライブの一覧が不正です');
                files.push(...list.files); page = list.nextPageToken || '';
                if (files.length > 1000) throw Error('同期記録が多すぎます。履歴は保持し、同期を停止しました。');
            } while (page);
            let doc = S.empty();
            // 読込済みのファイルだけを後で整理する。読取中の404は再試行し、欠落扱いにしない。
            for (const file of files) {
                const response = await this.request('https://www.googleapis.com/drive/v3/files/' + encodeURIComponent(file.id) + '?alt=media');
                const text = await response.text();
                if (text.length > 4000000) throw Error('同期記録のサイズが上限を超えています');
                doc = S.merge(doc, JSON.parse(text));
            }
            return { files, doc };
        }
        async upload(doc) {
            S.validate(doc);
            const boundary = 'fp3_' + root.crypto.randomUUID();
            const metadata = { name: 'fp3-sync-v1-' + root.crypto.randomUUID() + '.json',
                parents: ['appDataFolder'], appProperties: { fp3Sync: 'v1' } };
            const body = '--' + boundary + '\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n'
                + JSON.stringify(metadata) + '\r\n--' + boundary + '\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n'
                + JSON.stringify(doc) + '\r\n--' + boundary + '--';
            const response = await this.request('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id', {
                method: 'POST', headers: { 'Content-Type': 'multipart/related; boundary=' + boundary }, body });
            const file = await response.json();
            if (!file.id) throw Error('ドライブへの保存完了を確認できません');
            return file.id;
        }
        async flush() {
            if (this.busy || !this.token || !this.cache) return;
            this.busy = true;
            let failed = false;
            try {
                const remote = await this.readAll();
                const merged = S.merge(this.cache.doc, remote.doc);
                this.adapter.validate(S.materialize(merged, this.last));
                this.cache.doc = merged;
                this.apply();
                if (this.pending || remote.files.length >= 5) {
                    const revision = this.revision;
                    const sent = clone(this.cache.doc);
                    await this.upload(sent);
                    this.pending = this.revision !== revision;
                    this.persist();
                    // 保存成功後のみ、送信内容に含めた旧版を削除。並行して作成された版は消さない。
                    for (const file of remote.files) {
                        try { await this.request('https://www.googleapis.com/drive/v3/files/' + encodeURIComponent(file.id), { method: 'DELETE' }); }
                        catch (e) { if (e.status !== 404) break; }
                    }
                }
                this.status(!this.token ? '今回の保存は完了しました。次の同期にはGoogleへの再接続が必要です。'
                    : this.pending ? '新しい変更を送信待ちです。' : '同期済み：' + new Date().toLocaleTimeString('ja-JP'));
            } catch (e) {
                failed = true;
                this.status(e.message || '通信できません。変更は端末に保存されています。');
            } finally {
                this.busy = false;
                if (this.token && this.pending) this.schedule(failed ? 30000 : 2000);
            }
        }
        async connect() {
            if (this.blocked || this.connecting || this.busy) return;
            const input = document.getElementById('drive-client-id');
            const clientId = (FP3_GOOGLE_CLIENT_ID || input?.value || '').trim();
            if (!/^[A-Za-z0-9_-]+\.apps\.googleusercontent\.com$/.test(clientId)) {
                this.status('初回設定が必要です。OAuthクライアントIDを入力してください。手順は設定欄のリンクから確認できます。'); return;
            }
            if (this.cache?.clientId && this.cache.clientId !== clientId) {
                this.status('以前と同じOAuthクライアントIDを使ってください。未送信の履歴を別のGoogleアプリには送信しません。'); return;
            }
            if (location.protocol !== 'https:' && !['localhost', '127.0.0.1'].includes(location.hostname)) {
                this.status('Google接続には公開したHTTPSのURLを使ってください。HTMLファイルを直接開く方法では接続できません。'); return;
            }
            localStorage.setItem(CONFIG, clientId);
            this.connecting = true; this.status('Googleの接続画面を開きます…');
            try {
                if (!root.google?.accounts?.oauth2) {
                    await new Promise((resolve, reject) => {
                        const script = document.createElement('script');
                        script.src = 'https://accounts.google.com/gsi/client'; script.async = true;
                        script.onload = resolve; script.onerror = () => { script.remove(); reject(Error('Googleのログイン機能を読み込めません')); };
                        document.head.append(script);
                    });
                    this.status('準備ができました。もう一度「Googleドライブに接続」を押してGoogleの画面を開いてください。');
                    return; // Safariでも次のクリックのユーザー操作からポップアップを開く。
                }
                const token = await new Promise((resolve, reject) => {
                    const client = root.google.accounts.oauth2.initTokenClient({ client_id: clientId, scope: SCOPE,
                        include_granted_scopes: false,
                        callback: response => response.error ? reject(Error('Googleへの接続が許可されませんでした。')) : resolve(response),
                        error_callback: () => reject(Error('接続画面を開けないか、接続をキャンセルしました。もう一度接続ボタンを押してください。')) });
                    client.requestAccessToken({ prompt: 'select_account' });
                });
                if (!token.access_token || !String(token.scope || '').split(' ').includes(SCOPE)) throw Error('アプリ専用領域の権限が必要です');
                if (!Number.isFinite(Number(token.expires_in)) || Number(token.expires_in) <= 30) throw Error('Googleの認証期限を確認できません。再接続してください。');
                this.token = token.access_token;
                this.expiresAt = Date.now() + Math.max(0, Number(token.expires_in) * 1000 - 30000);
                const about = await (await this.request('https://www.googleapis.com/drive/v3/about?fields=user(permissionId,emailAddress,displayName)')).json();
                const account = about.user?.permissionId;
                if (!account) throw Error('Googleアカウントを確認できません');
                if (this.cache && this.cache.account !== account) throw Error('前回と異なるGoogleアカウントです。学習履歴は送信しません。同じアカウントで接続してください。');
                if (!this.cache) {
                    const remote = await this.readAll();
                    if (remote.files.length) this.adapter.validate(S.materialize(remote.doc, this.last));
                    if (remote.files.length && !root.confirm('ドライブに学習履歴があります。この端末の履歴を復元用に保存して、ドライブの履歴を読み込みますか？')) throw Error('接続をキャンセルしました。端末の履歴は変更していません。');
                    localStorage.setItem(BACKUP, JSON.stringify(this.adapter.getState()));
                    this.cache = { account, clientId, label: about.user.emailAddress || about.user.displayName || 'Googleドライブ',
                        doc: remote.files.length ? remote.doc : S.capture(S.empty(), {}, this.adapter.getState(), this.writer, { seed: true }) };
                    // 初回のクラウド読込は、別アカウントの端末履歴を自動混入させない。
                    this.pending = !remote.files.length;
                    this.apply();
                } else {
                    this.cache.clientId = clientId;
                    this.cache.label = about.user.emailAddress || about.user.displayName || this.cache.label;
                }
                await this.flush();
            } catch (e) { this.token = null; this.status(e.message || '接続できませんでした。'); }
            finally { this.connecting = false; this.render(); }
        }
        disconnect() {
            clearTimeout(this.debounce);
            this.token = null; this.expiresAt = 0;
            this.status('接続を解除しました。未送信の変更と端末の履歴は保持しています。');
        }
        downloadBackup() {
            const text = localStorage.getItem(BACKUP);
            if (!text) return;
            const url = URL.createObjectURL(new Blob([text], { type: 'application/json' }));
            const a = document.createElement('a'); a.href = url; a.download = 'fp3-before-drive-sync.json'; a.click();
            setTimeout(() => URL.revokeObjectURL(url), 1000);
        }
    }
    root.FP3DriveSync = DriveSync;
})(globalThis);
