# HTML Relearn

HTML / CSS / JavaScript を一から学び直しつつ、静的サイト制作でよく出る「構造・レイアウト・最小UI」を手を動かして固める練習プロジェクトです。

## Live
- https://html-relearn.vercel.app/

## できること
- レスポンシブ対応（PC / スマホ）
- ナビゲーション（ハンバーガーメニュー開閉）
- フォーム（必須チェック・エラー表示・送信成功メッセージの表示）

## 学習で触れたこと（要点）
### Week1: HTML（構造の復習）
- セマンティック構造：`header / nav / main / section / article / footer`
- 見出し階層：`h1` は1つ、セクション見出しは `h2`、小見出しは `h3`
- リストとリンク導線：`ul / ol`、ページ内リンク（アンカー）
- 画像：`figure / figcaption`、`alt` の書き方、`loading="lazy"`
- 引用とコード表示：`blockquote`、`pre / code`
- フォーム基礎：`label for` と `input id` の紐付け、`required`、`aria-describedby`（エラー表示の関連付け）

### Week2: CSS（ぐだりやすい所を型で整理）
- Box model：`padding`（内側）/ `margin`（外側）
- Container：`--container` で幅制限＋中央寄せ
- Flex：ヘッダーの横並び（`justify-content` と `gap` の関係）
- Grid：カード一覧の列数制御（PC: 3列 → 900px: 2列 → 720px: 1列）
- Responsive：スマホ表示で `.section` の余白を調整して読みやすさを改善
- スコープ：`.site-nav .nav-list` のように影響範囲を絞って意図しない崩れを防ぐ

## 触った点 / 工夫
- 余白スケール（CSS変数で 8px 刻み）
- レイアウトは Flex / Grid を優先（position は最後）
- `container / section / stack / grid` の型で、CSSが迷子にならないように整理

## 開発メモ
- 更新フロー：ローカル修正 → GitHubへpush → Vercelで自動デプロイ
- ブランチ運用：`fix/*` や `feat/*` ブランチで修正 → PR → Previewで確認 → merge
