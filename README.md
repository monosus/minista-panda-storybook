# boiler plate: minista-panda-storybook

いい感じに開発してコンパクトに納品する.


## npm scripts

`npm install` : インストール

`npm run prepare` : panda css のジェネレート

`npm run dev` : ローカルサーバー

`npm run build` : ビルド

`npm run prod` : CI／CD用

`npm run storybook`: ストーリーブック

`npm run build-storybook` : 準備中

`npm run generate:components-export-list` : コンポーネントリスト生成。src/components/index.ts,recipes.tsから一括インポートできるようにするため

`npm run watch:components-export-list` : コンポーネント追加時にサーバーを止めたくないので監視

`npm run generate-component` : scaffdogで必要ファイルを生成
