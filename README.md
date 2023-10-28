# HASUROのポートフォリオ

![アイコン](https://github.com/inoren-ten/HASURO_portfolio/assets/116473325/680d0d2d-73f8-4af8-b30f-195e03795137)

## 🤪 概要

[HASURO](https://twitter.com/HASURO_dev)のポートフォリオです。
構成としては自己紹介（About）ページやタイムラインページなどです。テーマカーラの切り替えも実装しています。
Webサイトとして公開（2023/9/7）。[こちら](https://hasuro.com)

## ⚒️ 使用した技術

- Next.js（ver 13.4.19）【App Router】
- TypeScript
- Sass（スタイル）
- framer-motion（アニメーション）

## 🌐 デプロイ

vercel（Next.js提供してるところなので無難）

## 📁 ファイル構成

    .
    ├── public/
    │   ├── next.svg
    │   └── vercel.svg
    │
    ├── src/
    │   ├── app/
    │   │   ├── layout.tsx
    │   │   ├── page.tsx
    │   │   ├── global.scss
    │   │   ├── page.module.scss
    │   │   ├── favicon.ico（ファビコン画像）
    │   │   ├── apple-touch-icon.png（appleアイコン画像）
    │   │   ├── opengraph-image.png（OGP画像）
    │   │   └── twitter-image.png（Twitterカードの画像）
    │   │
    │   ├── components/（コンポーネントを管理）
    │   │   ├── account/（アイコン系）
    │   │   ├── album/（Aboutページのアルバム）
    │   │   ├── footer/（フッター）
    │   │   ├── header/（ヘッダー）
    │   │   │
    │   │   ├── home/（主な画面）
    │   │   │   ├── about/（aboutの大まかな部分）
    │   │   │   └── timeline/（timelineの大まかな部分）
    │   │   │
    │   │   ├── index/（目次）
    │   │   ├── timeline/（timelineページのUI）
    │   │   ├── work/（workのUI）
    │   │   │
    │   │   └── UI/
    │   │       ├── Animation/（Lottieのコンポーネント）
    │   │       ├── Button/
    │   │       ├── Menu/
    │   │       ├── Modal/
    │   │       └── Screen/
    │   │
    │   ├── lib/（配列や関数などの処理）
    │   │   ├── image/（アルバム画像の配列）
    │   │   ├── index/（目次の配列）
    │   │   ├── profile/（年齢を返す関数）
    │   │   ├── route/（urlの配列）
    │   │   ├── timeline/（timelineに関する配列）
    │   │   ├── url/（メディアのurl）
    │   │   ├── work/（workの配列）
    │   │   └── key.ts（key）
    │   │
    │   ├── middleware/
    │   │   └── ColorThemeProvider.tsx（カラーテーマ切り替えのProvider）
    │   │
    │   ├── public/（画像の置き場所）
    │   │   ├── album/（アルバムに関する画像）
    │   │   └── work/（workに関する画像）
    │   │
    │   └── types/（型定義）
    │
    ├── .eslintrc.json
    ├── .gitignore
    ├── next-env.d.ts
    ├── next.config.js
    ├── package.json
    ├── package-lock.json
    ├── README.md
    └── tsconfig.json

## 🫠 詳しい実装

### Aboutページ

#### アルバム

ホバーしたり選択するとアルバムが開くようなUI。
`@/lib/image/`下のファイルに写真の配列を変えれば表示する画像が変わる。画像は`@/public/album`下のフォルダに入れる。

表示したいアルバムは`@/components/about/Albums.tsxのalbums`配列に以下のように定義する。

    // iconには絵文字、imagesには'@lib/image'下のフォルダ下に置いてある画像の配列の初めの4つを抜き出した配列、kindにはアルバムの名前を入れる。

    const albums = [
        {icon: '🇨🇦', images: firstCanadaImages, setShow: setCanada, kind: 'canada'},
    ];

### Timelineページ

#### Timelineの定義

Timelineは`@/lib/timeline/timelines.ts`に配列を以下のように定義することで表示可能。
ちなみにTimelineにはReleased（リリースした情報）と、他の情報の時とでUIが異なる。

    // techsには'@/lib/work/returnTech.ts'に定義した技術を入れる
    // kindには'@/lib/timeline/timelineCategoryes.ts'に定義したcategoryを入れる

    export const timelines = [
        // Releaseの場合
        {title: 'タイトル', feature: {url: '成果物のURL', description: '説明文（\nで改行可能）', techs: ['next', 'ts', 'sass']}, year: '2023', date: 'Oct 6', kind: 'released'},
        // その他
        {title: 'タイトル', year: '2023', date: 'Oct 22', kind: 'award'},
    ]

#### Timelineのカテゴリー

Timelineのカテゴリーを定義することで、絞って表示することが可能。
`@/lib/timeline/timelineCategoryes.ts`に配列を以下のように定義する。

    // kindにジャンル、iconに絵文字、textに表示するジャンルの文字を定義

    export const timelineCategoryes = [
        {kind: 'all', icon: '🤗', text: 'All'},
    ];

#### Timelineのアイコン

Timelineの表示の左には、カテゴリーによって表示するアイコンが異なる。
以下のように表示を切り替えられる。

    // iconには表示するアイコン（今は絵文字かスタイルを当てた円）、titleTextは表示するタイトル（releasedの時にはurlを含めることができる）

    if (kind === 'released') {
        icon = '🎊';
        titleText = <p className={styles['timeline-box-title']}>Released <a href={feature?.url} className={styles['title-url']} target='_blank'>{title}</a><span>{date}</span></p>;
    } else {
        icon = <div className={styles['timeline-circle']}></div>;
        titleText = <p className={styles['timeline-box-title']}>{title}<span>{date}</span></p>;
    };

### 全体の配色

基本的に`@/app/globals.scss`の:root内に、サイト内で使用する色を定義している。

テーマカラーによって変更される値に関しては、それぞれの場合に同じ変数名で定義。

## 💬 最後に

実装してから結構時間経ってからREADMEを記述したので、もしかしたら間違っている箇所もあるかもしれませんので、多めに見ていただけると幸いです。

あまりファイル構成などにこだわっていない時期に作成していますので、今読み返してみると反省点が見えてきてもっと気をつけようなんて思ったREADMEでした。
