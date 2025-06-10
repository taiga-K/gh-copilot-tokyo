# GitHub Copilot Meetup Tokyo

このプロジェクトは、「GitHub Copilot Meetup Tokyo」のウェブサイトです。

## 概要

「GitHub Copilot Meetup Tokyo」は、AIペアプログラミングツールであるGitHub Copilotの活用方法やベストプラクティスを共有し、探求するためのコミュニティイベントです。このリポジトリには、そのイベント告知や情報発信を行うためのウェブサイトのソースコードが含まれています。

## 技術スタック

- React
- TypeScript
- Tailwind CSS

## 機能

- **イベント情報表示**: GitHub Copilot Meetup Tokyoのイベント情報を掲載
- **アジェンダ表示**: イベントのタイムテーブルと発表内容を表示
- **会場情報**: イベント会場の詳細情報とマップ
- **GitHub Copilot更新監視**: GitHub ChangelogからCopilot関連の最新更新情報を自動取得・表示
  - RSS Feed URL: `https://github.blog/changelog/label/copilot/feed/`
  - リアルタイムでの更新情報取得
  - 開発者向けの最新情報提供

## セットアップと実行方法

1.  **リポジトリをクローンします:**
    ```bash
    git clone https://github.com/your-username/github-copilot-meetup-tokyo.git
    cd github-copilot-meetup-tokyo
    ```

2.  **依存関係をインストールします:**
    ```bash
    npm install
    ```

3.  **開発サーバーを起動します:**
    ```bash
    npm start
    ```
    開発サーバーは通常 `http://localhost:3000` で起動します。

4.  **本番用にビルドします:**
    ```bash
    npm run build
    ```
    ビルドされたファイルは `build` ディレクトリに出力されます。

## コントリビューション

コントリビューションを歓迎します！バグ報告や機能提案は、Issueを通じてお願いします。プルリクエストも歓迎です。
