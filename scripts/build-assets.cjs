const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const root = path.resolve(__dirname, '..');
process.chdir(root);
fs.mkdirSync('assets', { recursive: true });
execFileSync(process.execPath, ['node_modules/tailwindcss/lib/cli.js', '-i', 'styles/input.css', '-o', 'assets/app.css', '--minify'], { stdio: 'inherit' });
fs.copyFileSync('node_modules/chart.js/dist/chart.umd.js', 'assets/chart.umd.js');
fs.copyFileSync('node_modules/@fortawesome/fontawesome-free/css/all.min.css', 'assets/fontawesome.min.css');
// Font AwesomeのCSSは../webfontsを参照する。
fs.cpSync('node_modules/@fortawesome/fontawesome-free/webfonts', 'webfonts', { recursive: true });
fs.mkdirSync('assets/licenses', { recursive: true });
for (const [pkg, file] of [['chart.js', 'LICENSE.md'], ['@fortawesome/fontawesome-free', 'LICENSE.txt'], ['tailwindcss', 'LICENSE']]) {
    fs.copyFileSync(path.join('node_modules', pkg, file), path.join('assets/licenses', pkg.replaceAll('/', '-') + '.txt'));
}
fs.copyFileSync('index.html', 'fp3.html');
for (const [source, target] of [['index.html', 'fp3-source.txt'], ['quiz-engine.js', 'quiz-engine-source.txt'], ['data/question-bank.js', 'question-bank-source.txt']]) {
    fs.copyFileSync(source, target);
}
