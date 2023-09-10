# boiler plate: minista-panda-storybook

いい感じに開発してコンパクトに納品する.

## pre-commit
コード規約を守るため
npm install後に以下を実施して下さい。
`npx lefthook add pre-commit`

commit時に自動でtype check eslint markup-lint prettierで整形とチェックをします。

## npm scripts

`npm install` : インストール

`npm run prepare` : panda css のジェネレート

`npm run dev` : ローカルサーバー

`npm run build` : ビルド

`npm run prod` : CI／CD用

`npm run storybook`: ストーリーブック

`npm run build-storybook` : storybookを静的にビルド、合わせてstories.jsonを出力（スナップショットテストで使用する)

`npm run generate:components-export-list` : コンポーネントリスト生成。src/components/index.ts,recipes.tsから一括インポートできるようにするため

`npm run watch:components-export-list` : コンポーネント追加時にサーバーを止めたくないので監視

`npm run generate-component` : scaffdogで必要ファイルを生成

`npm run test-story` : storybook内のstoryに対してa11yなどのテストを実施する。別ターミナルで先に`npm run storybook`を実行しておく

`npm run vrt-storybook` : storybookの各コンポーネントについてスナップショットテストを実行する
