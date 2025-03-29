import { timelineType } from "@/types/timelineType";

export const timelines = <timelineType[]>[
    {id: 25, title: '42Tokyo', year: '2025', date: 'Apr ~', kind: 'other'},
    {id: 28, title: 'note株式会社', feature: {url: '', description: 'エンジニアの長期インターン', techs: ['rails', 'next']}, year: '2025', date: 'Apr ~', kind: 'internship'},
    {id: 27, title: 'Apple Vision Proハッカソン', feature: {url: '', description: 'MeltingHack主催のVisionProアプリ開発ハッカソンに出場\n空間マインドマップアプリを作成', techs: ['swiftui']}, year: '2025', date: 'Mar 23', kind: 'hackathon'},
    {id: 26, title: 'ピクシブ株式会社', feature: {url: 'https://booth.pm/ja', description: 'エンジニアの短期インターン', techs: ['rails', 'react']}, year: '2025', date: 'in Mar', kind: 'internship'},
    {id: 25, title: '42Tokyo Piscine受験', year: '2025', date: 'in Dec', kind: 'other'},
    {id: 24, title: 'blog.hasuro.com', feature: {url: 'https://blog.hasuro.com/articles/4', description: 'Vimを使おう！初めに覚えた方が良いVimコマンド集', techs: []}, year: '2024', date: 'Dec 21', kind: 'writing'},
    {id: 23, title: 'blog.hasuro.com', feature: {url: 'https://blog.hasuro.com/articles/3', description: '個人開発でもGraphQL良きです', techs: ['flutter']}, year: '2024', date: 'Dec 16', kind: 'writing'},
    {id: 22, title: '株式会社イロリ', feature: {url: 'https://iroriworks.com/', description: 'モバイル・バックエンドエンジニアの長期インターン', techs: ['flutter', 'go']}, year: '2024', date: 'Jun ~ Jan 2024-25', kind: 'internship'},
    {id: 21, title: 'CA Tech Lounge', year: '2024', date: 'Jun ~', kind: 'other'},
    {id: 20, title: 'Open Hack U Osaka', feature: {url: '', description: 'LINEヤフー株式会社主催のハッカソンに出場\n近未来型鬼ごっこアプリを開発', techs: ['swiftui', 'firebase', 'next']}, year: '2024', date: 'Mar 16', kind: 'hackathon'},
    {id: 19, title: '株式会社アレスグッド', feature: {url: 'https://baseme.app/', description: 'フロントエンド・バックエンドエンジニアの長期インターン', techs: ['next', 'rails', 'ts']}, year: '2024', date: 'Mar ~ Sep', kind: 'internship'},
    {id: 18, title: '株式会社ゆめみ', feature: {url: '', description: 'サーバーサイド 1Dayインターン', techs: ['DB設計']}, year: '2024', date: 'Mar 1', kind: 'internship'},
    {id: 17, title: 'Futurealize with Tech!', feature: {url: 'https://github.com/Futurealize-with-Tech', description: 'ライフイズテックでの卒業メンバー4人の全国企画\n全国から卒業メンターさんへメッセージを集めるサービスを作成', techs: ['next', 'prisma', 'ts']}, year: '2024', date: 'Jan ~ Mar', kind: 'other'},
    {id: 16, title: 'blog.hasuro.com', feature: {url: 'https://blog.hasuro.com/articles/2', description: 'Flutter開発でのトピック', techs: ['flutter']}, year: '2023', date: 'Dec 31', kind: 'writing'},
    {id: 15, title: '中高生国際Rubyプログラミングコンテスト', feature: {url: 'https://www.ruby-procon.net/', description: '・ソニックガーデン賞\n・Matz賞\n・審査員特別賞', techs: []}, year: '2023', date: 'Dec 9', kind: 'award'},
    {id: 14, title: 'アプリ甲子園2023 Cygames賞', year: '2023', date: 'Oct 22', kind: 'award'},
    {id: 13, title: '森日向子 OfficialSite', feature: {url: 'https://mori-hinako.com', description: '森 日向子さんの公式サイト。\nスクロールアニメーションやってみました。', techs: ['next', 'ts', 'sass']}, year: '2023', date: 'Oct 6', kind: 'released'},
    {id: 12, title: 'blog.hasuro.com', feature: {url: 'https://blog.hasuro.com/articles/1', description: 'Astro使ってブログ作ってみた話', techs: ['astro', 'react', 'ts']}, year: '2023', date: 'Sep 13', kind: 'writing'},
    {id: 11, title: 'HASUROG', feature: {url: 'https://blog.hasuro.com', description: 'HASURO（私）のブログ。\nAstroを使ってみました。', techs: ['astro', 'react', 'ts']}, year: '2023', date: 'Sep 13', kind: 'released'},
    {id: 10, title: 'this portfolio', feature: {url: 'https://hasuro.com', description: 'HASURO（私）のポートフォリオ。\nテーマカラー変更やアルバムのUIに力を入れたシンプルなサイト', techs: ['next', 'ts', 'sass']}, year: '2023', date: 'Sep 7', kind: 'released'},
    {id: 9, title: 'AniSphereユーザー数50人突破!!', year: '2023', date: 'Aug 23', kind: 'other'},
    {id: 8, title: 'Started leaning Flutter', year: '2023', date: 'Aug 18', kind: 'other'},
    {id: 7, title: 'トロント留学 🇨🇦', year: '2023', date: 'Jul 29 ~ Aug 20', kind: 'other'},
    {id: 6, title: 'AniSphere AboutPage', feature: {url: 'https://about.anisphere.jp', description: 'AniSphereのAboutページ。\n表示の際のアニメーションをこだわった。', techs: ['next', 'ts', 'sass']}, year: '2023', date: 'Jul 27', kind: 'released'},
    {id: 5, title: 'AniSphere', feature: {url: 'https://anisphere.jp', description: 'アニメ共有サイト。\nアニメ評価サイトとSNSを掛け合わせた、新しいサービス。', techs: ['next', 'rails', 'ts', 'sass']}, year: '2023', date: 'Jul 26', kind: 'released'},
    {id: 4, title: 'Started leaning Next.js', year: '2023', date: 'Jul 1', kind: 'other'},
    {id: 3, title: 'Started leaning React', year: '2023', date: 'Mar 28', kind: 'other'},
    {id: 2, title: 'Started leaning Ruby・HTML・CSS', year: '2022', date: 'in Oct', kind: 'other'},
    {id: 1, title: 'Started programming', year: '2022', date: 'Mar 26', kind: 'other'},
];

export const topTimelines = timelines.filter((timeline) => {
    return timeline.kind === 'released' || timeline.kind === 'award' || timeline.kind === 'internship';
});
