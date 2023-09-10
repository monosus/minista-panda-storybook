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

## コーディング方針

### マインド

- 複雑にしない
- 少なければ少ないほどいい
- 1ファイル最大200行
- 書くことより読まれることを意識する、適宜コメントで補足する
- 自分の知っている方法ではなく世の中で良いとされている方法を採用する

### 具体的に

- markuplintのエラーがでないように
- 画像についてはministaのImage,Pictureを採用する
- sp-onlyなどのクラスによる表示出し分けは可能な限り回避する。必要となった場合はチーム内で協議する
- ユーティリティクラスは避ける→歯止めが効かなくなるため
- pandacssのrecipesでスタイリングする
- 以下のプロパティはcss変数を用いる
  - font-size
  - font-weight
  - font-family
  - color
  - background-color
  - border-radius
  - margin
  - max-width

### 独自コンポーネント

#### InsertHtml

- ajaxでhtmlファイルを非同期で読み込む
- 開発時は`pages/inc`内から参照する
- 初期表示に関係のないフッターなどに用いてレンダリングコストを削減する目的で使用する

#### HtmlAppendedLink

- hrefが / で終わっていない場合、本番環境で.htmlを追加する。
- リンクコンポーネントやボタンコンポ―を作成する際にaタグのかわりに使用する（予定)

## issue - branch - PR

- issueのassigneeを更新するとissue-｛issueNumber}で作業ブランチが作成される
- 作業ブランチでリモートにcommit(push)するとdraftでPRが作成される
