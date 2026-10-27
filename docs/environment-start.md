既存の /workspace/for_FP3 を使用してください。クラウドタスクは既に隔離された環境です。ユーザーの明示依頼がない限りGit worktreeを作成せず、既存チェックアウトや学習履歴をリセットしないでください。

README.md と docs/REPORT.md を読んでください。Node.js 24系（22以上）、npm、Python 3、Chromium（通常 /usr/bin/chromium）で検証済みです。インストール済み依存・生成済みファイルは保持されますが、サーバープロセスは新しいタスクで起動し直します。APIキーや外部CDNは不要です。依存を更新する場合は保存したinstall_scriptを /workspace/for_FP3 で実行します。ロックファイルや検証設定を変更してインストールを通さないでください。

開発サーバーは /workspace/for_FP3 で `python3 -m http.server 8000 --bind 0.0.0.0` を実行してください。既存プロセスがある場合は本プロジェクトのHTMLと問題データを返すか調べて再利用し、無関係なプロセスを停止しないでください。内部HTTPリクエストで index.html と fp3.html が同一であること、data/question-bank.js に FP3_QUESTIONS があること、data/reference-policy.js に 2026-04-01 があること、assets/app.css と assets/chart.umd.js が200で取得できることを確認します。localhostのプレビューリンクは作らないでください。

問題・画面を変更した場合は `npm run build`、`npm test`、`npm run test:browser`、`npm run report` を /workspace/for_FP3 で実行します。ブラウザーテストは隔離コンテキストと一時HTTPサーバーを使い、自分で開始したサービスだけ終了します。file:// はこの環境のChromium管理ポリシーで遮断されるため、当該テストはスキップとして明示しHTTP経由で確認します。

問題はdata/chapter-XX.js、照合記録はdata/reviews.json、法令基準日の対応はdata/reference-policy.jsで管理します。生成済みdata/question-bank.jsを直接編集しません。問題文・正解・解説を変更した場合は一次資料本文と施行日を再確認し、照合記録を更新してください。取得成功だけでverifiedにしないでください。未検証や適用基準日不一致の問題は通常テストに出しません。現在の確認対象は日本FP協会、受検日2026-11-05、法令基準日2026-04-01（確認済み受検期間2026-06-01〜2026-12-27）です。期間外は公式案内の追加確認が必要です。

localStorageキーfp3_trainer_stateと旧単元・旧問題IDを維持し、JSONバックアップと復元を保持してください。きんざい実技は任意学習です。旧IDの誤答履歴を消さず、現在出題できないものは保留として表示します。
