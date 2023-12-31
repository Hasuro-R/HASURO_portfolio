export const timelines = [
    {title: 'blog.hasuro.com', feature: {url: 'https://blog.hasuro.com/articles/2', description: 'Flutter開発でのトピック', techs: ['flutter']}, year: '2023', date: 'Dec 31', kind: 'writing'},
    {title: '中高生国際Rubyプログラミングコンテスト', feature: {url: 'https://www.ruby-procon.net/', description: '・ソニックガーデン賞\n・Matz賞\n・審査員特別賞', techs: []}, year: '2023', date: 'Dec 9', kind: 'award'},
    {title: 'アプリ甲子園2023 Cygames賞', year: '2023', date: 'Oct 22', kind: 'award'},
    {title: '森日向子 OfficialSite', feature: {url: 'https://mori-hinako.com', description: '森 日向子さんの公式サイト。\nスクロールアニメーションやってみました。', techs: ['next', 'ts', 'sass']}, year: '2023', date: 'Oct 6', kind: 'released'},
    {title: 'blog.hasuro.com', feature: {url: 'https://blog.hasuro.com/articles/1', description: 'Astro使ってブログ作ってみた話', techs: ['astro', 'react', 'ts']}, year: '2023', date: 'Sep 13', kind: 'writing'},
    {title: 'HASUROG', feature: {url: 'https://blog.hasuro.com', description: 'HASURO（私）のブログ。\nAstroを使ってみました。', techs: ['astro', 'react', 'ts']}, year: '2023', date: 'Sep 13', kind: 'released'},
    {title: 'this portfolio', feature: {url: 'https://hasuro.com', description: 'HASURO（私）のポートフォリオ。\nテーマカラー変更やアルバムのUIに力を入れたシンプルなサイト', techs: ['next', 'ts', 'sass']}, year: '2023', date: 'Sep 7', kind: 'released'},
    {title: 'AniSphereユーザー数50人突破!!', year: '2023', date: 'Aug 23', kind: 'other'},
    {title: 'Started leaning Flutter', year: '2023', date: 'Aug 18', kind: 'other'},
    {title: 'トロント留学 🇨🇦', year: '2023', date: 'Jul 29 ~ Aug 20', kind: 'other'},
    {title: 'AniSphere AboutPage', feature: {url: 'https://about.anisphere.jp', description: 'AniSphereのAboutページ。\n表示の際のアニメーションをこだわった。', techs: ['next', 'ts', 'sass']}, year: '2023', date: 'Jul 27', kind: 'released'},
    {title: 'AniSphere', feature: {url: 'https://anisphere.jp', description: 'アニメ共有サイト。\nアニメ評価サイトとSNSを掛け合わせた、新しいサービス。', techs: ['next', 'rails', 'ts', 'sass']}, year: '2023', date: 'Jul 26', kind: 'released'},
    {title: 'Started leaning Next.js', year: '2023', date: 'Jul 1', kind: 'other'},
    {title: 'Started leaning React', year: '2023', date: 'Mar 28', kind: 'other'},
    {title: 'Started leaning Ruby・HTML・CSS', year: '2022', date: 'in Oct', kind: 'other'},
    {title: 'Started programming', year: '2022', date: 'Mar 26', kind: 'other'},
];

export const releasedTimelines = timelines.filter((timeline) => {
    return timeline.kind === 'released' || timeline.kind === 'award';
});
