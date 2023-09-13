export const timelines = [
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
    return timeline.kind === 'released';
});
