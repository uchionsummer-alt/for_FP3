// 配布用のみを1ファイルにまとめる。編集元のHTMLと問題データは分離したまま維持する。
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const read = rel => fs.readFileSync(path.join(root, rel), 'utf8');
let html = read('index.html');
// ホーム画面登録は公開版index.htmlと同じ配信先のPNG・manifestで行う。
// 持ち運び用の単一HTMLには未同梱ファイルへの参照を残さない。
html = html.replace(/^[ \t]*<link rel="(?:icon|apple-touch-icon|manifest)"[^>]*>\r?\n/gm, '');
const scriptSafe = source => source.replace(/<\/script/gi, '<\\/script')
    .replace(/^\/\/[#@]\s*sourceMappingURL=.*$/gm, '');
let scriptCount = 0;
html = html.replace(/<script\s+src="([^"]+)"\s*><\/script>/g, (_, file) => {
    if (/^(?:https?:)?\/\//.test(file)) throw Error('外部スクリプトは使用しません: ' + file);
    scriptCount++;
    return '<script>\n' + scriptSafe(read(file)) + '\n</script>';
});
let styleCount = 0;
html = html.replace(/<link\s+rel="stylesheet"\s+href="([^"]+)"\s*>/g, (_, file) => {
    let css = read(file);
    if (file.endsWith('fontawesome.min.css')) {
        // 本アプリが使うFree 6のフォントだけを同梱し、未使用の旧版互換フォントを省く。
        css = css.replace(/@font-face\{[^{}]*\}/g, face => face.includes('font-family:"Font Awesome 6 Free"') ? face : '');
        // 現在の主要ブラウザーで利用できるWOFF2を同梱。TTFフォールバックは不要。
        css = css.replace(/,url\([^)]*\.ttf\)\s*format\("truetype"\)/g, '');
        css = css.replace(/url\((?:["']?)(\.\.\/webfonts\/[^)"']+\.woff2)(?:["']?)\)/g,
            (_, font) => 'url("data:font/woff2;base64,' +
                fs.readFileSync(path.resolve(root, 'assets', font)).toString('base64') + '")');
    }
    if (/url\((?!["']?data:)/.test(css)) throw Error('未同梱のCSSリソースがあります: ' + file);
    styleCount++;
    return '<style>\n' + css + '\n</style>';
});
if (scriptCount !== 6 || styleCount !== 2) throw Error('元HTMLの構成を確認してください');
if (/<script[^>]+src=|<link[^>]+rel="stylesheet"/i.test(html)) throw Error('依存ファイルが残っています');
fs.writeFileSync(path.join(root, 'fp3-standalone.html'), html);
fs.writeFileSync(path.join(root, 'fp3-copy-paste.txt'), html);
console.log('Created self-contained HTML and identical text: ' + Buffer.byteLength(html) + ' bytes');
