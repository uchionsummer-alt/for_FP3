// 原本PNGの画素を変更せず、ホーム画面向けの表示サイズを持つSVGを生成する。
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const png = fs.readFileSync(path.join(root, 'app-icon.png'));
if (png.subarray(0, 8).toString('hex') !== '89504e470d0a1a0a') throw Error('アイコンはPNGで保存してください');
const width = png.readUInt32BE(16), height = png.readUInt32BE(20);
if (!width || width !== height) throw Error('アイコンには正方形のPNGが必要です');
fs.writeFileSync(path.join(root, 'app-icon.svg'), `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 ${width} ${height}"><image width="${width}" height="${height}" href="data:image/png;base64,${png.toString('base64')}"/></svg>\n`);
const manifest = {
    name: 'FP3級 学習トレーナー', short_name: 'FP3学習', lang: 'ja', start_url: './', scope: './',
    display: 'standalone', background_color: '#f8fafc', theme_color: '#db2777',
    icons: [
        { src: './app-icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
        { src: './app-icon.png', sizes: `${width}x${height}`, type: 'image/png', purpose: 'any' }
    ]
};
fs.writeFileSync(path.join(root, 'manifest.webmanifest'), JSON.stringify(manifest, null, 2) + '\n');
console.log(`Created home-screen icon manifest: PNG ${width}px, SVG 512px`);
