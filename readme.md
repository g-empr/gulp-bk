# gulp環境

## 使い方
まず、GitHubからcloneしたら`npm install`。  
そのまま`node_modules`はルートに配置しておき、開発ディレクトリごとに`gulpfile.js`と依存しているファイル群を配置。  
## ディレクトリ構造
```
root/
　├─ node_modules/
　├─ dev_folder_A/
　│　├─ dest/
　│　│　├─ images/
　│　│　├─ js/
　│　│　├─ css/
　│　│　└─ index.html
　│　├─ gulp/
　│　│　├─ tasks/
　│　│　│　├─ browser_sync.js
　│　│　│　├─ css_lint.js
　│　│　│　├─ html.js
　│　│　│　├─ images_min.js
　│　│　│　├─ js_build.js
　│　│　│　└─ sass.js
　│　│　├─ config.js
　│　│　└─ plugin.js
　│　├─ src/
　│　│　├─ images/
　│　│　├─ js/
　│　│　├─ scss/
　│　│　└─ index.html
　│　└─ gulpfile.js
　├─ dev_folder_B/
　├─ dev_folder_C/
　└─ package.json
```

## 使用コマンド
ライブリロードしながら作業。基本。
```
gulp watch
```
HTML/SCSS/JS/イメージなどのコンパイル・圧縮。
```
gulp build
```
画像圧縮のみ。
```
gulp img
```
バリデートのみ。
```
gulp lint
```
※画像やcss/jsファイルの読み込みがうまくいかない場合、watchの前に圧縮したりbuildしたりを試すこと。