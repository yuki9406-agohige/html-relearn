# html-relearn

HTML/CSS/JavaScript を一から学び直しながら、静的サイト制作の基礎（構造・レイアウト・簡単なUI）を固めるための練習ページです。

## Live
- https://html-relearn.vercel.app/

## できること
- レスポンシブ対応（PC / スマホ表示）
- ナビゲーション（モバイルメニュー開閉）
- フォーム（必須チェック・簡易バリデーション・成功メッセージ表示）

## 触った点 / 工夫
- 余白スケール（CSS変数で 8px 刻み）
- レイアウトは Flex / Grid を優先して組む
- `container / section / stack / grid` の型で、CSSがぐだらないように整理
- まだコピペしただけで内容理解は追いついてない

## 開発メモ
- 更新フロー：ローカル修正 → GitHubへpush → Vercelで自動デプロイ
- ブランチ運用：`fix/*` ブランチで修正 →（PRでPreview確認）→ merge
