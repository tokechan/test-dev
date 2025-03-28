# Study notes
## 前提
T3 StackとはTheo氏によって2021年に提唱されたWebアプリケーション開発のための技術スタックです。
「簡素さ」「モジュール性」「フルスタック安全」を実現できる技術スタックを集めた総称をT3 Stackと呼びます。

Next.js
TypeScript
trpc
NextAuth.js
Prisma
TailwindCSS
で構成されています。

2021年に生まれて多く利用されてきたモダンなスキルスタックと呼ばれていた構成でしたが現代いくつかの不満が生まれてきました。
TS Stack を使っていて、３つの問題に直面した。
まず、tRPCがRecat Queryと密結合していて、柔軟な状態管理ができない。
次に、tRPCはJSON以外のレスポンス形式に対応しづらく、公開APIの構築に不安があった。
最後に様々なプラットフォームへのデプロイがスムーズにイアかなたった。

Josh氏がこういった不満を持って、新しくJStack（https://jstack.app/）をつくった。

今回はそのJStackを使ってX（旧Twitter）のクローンアプリを開発する

## What is JStack?
JStackはJosh氏が開発したTypeScriptとNext.jsをベースにしたフルスタック開発ツールキットです。

スキルスタックは以下で構成されています。

1.TypeScript
TypeScriptを利用することでフロントエンドからバックエンドまでの一貫した型安全性を提供し、開発段階でのエラーを減らします。
　
2.Next.js
Reactをベースにしたフルスタックフレームワークです。高性能なWebアプリケーションを構築できます。
　
3.Hono
軽量でポータブルなバックエンドフレームワークです。Honoを使用してWeb標準のレスポンスをネイティブにサポートし、JSON以外のレスポンス形式も扱えるます。
　
4.Drizzle
TypeScriptで書かれた軽量で柔軟なORMです。
Drizzleを使用してデータベース操作を型安全に行い、SQLのようなクエリAPIも提供します。
　
5.Zod
ランタイムでのデータ検証を提供するライブラリです。
Zodを使用してデータの整合性を保ち、TypeScriptとの連携でさらに安全なデータ処理を実現します。
これらの技術を組み合わせることで、JStackは開発者に高速で軽量な、かつエンドツーエンドで型安全な開発環境を提供します。

T3 Stackの作者であるTheo氏も絶賛しております。

これらをベースにさらに他のモダンな技術を使っていく
Clerk
Neon
Shadcn/ui
Ngrok


# JStackでAPIを開発する
JStackではsrc/serverにAPIに関するファイルを作成する

