# ホーム画面のアイコン

公開版のindex.htmlは、同じディレクトリのapp-icon.pngをブラウザーとiPhone/iPadのホーム画面用アイコンとして指定します。manifest.webmanifestはAndroid等向けのアプリ名・起動先・アイコンを定義します。画像は生成した原本の1254×1254 PNGです。app-icon.svgは同じPNGを内包し、512×512の表示サイズを指定する配布用ラッパーです。

画像の変更時は正方形のapp-icon.pngを置き換え、npm run buildでSVGとmanifestも再生成します。

## 使い方

1. アイコン追加のPRをmainへマージし、GitHub Pagesの公開完了を待ちます。
2. iPhone/iPadはSafariで https://uchionsummer-alt.github.io/for_FP3/ を開き、共有メニュー →「ホーム画面に追加」を選びます。
3. AndroidはChromeで同じURLを開き、メニュー →「ホーム画面に追加」（端末によって「アプリをインストール」等）を選びます。

すでにホーム画面へ追加している場合、古いショートカットを削除して追加し直してください。ブラウザーの保存データは消さないでください。ホーム画面アプリとブラウザーで保存領域が分かれる場合は、同じGoogleアカウントでドライブへ接続して学習履歴を読み込んでください。

画像やmanifestのURLは相対指定です。Cloudflare Workersで使う場合も、index.html、app-icon.png、app-icon.svg、manifest.webmanifestを同じ公開先に配置して再公開する必要があります。GitHub側の更新だけでWorkersへ自動反映されるかは、Cloudflareの配信設定次第です。

fp3-standalone.html等の持ち運び用単一HTMLは追加ファイル不要の構成を維持します。上記のホーム画面アイコン登録は、公開版index.htmlのURLで行ってください。サービスワーカーやオフライン起動機能は追加していません。Googleログイン画面のロゴ登録は別の設定です。
