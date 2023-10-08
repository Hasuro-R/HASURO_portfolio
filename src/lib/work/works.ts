import anisphereImage from '@/public/work/AniSphereOGP.png';
import anisphereAboutImage from '@/public/work/about-open-graph.png';
import portfolioImage from '@/public/work/HASURO_ogp_image.png';
import HASUROGImage from '@/public/work/HASUROG_ogp.png';
import morihinakoImage from '@/public/work/morihinako.png';

export const works = [
    {title: 'AniSphere', image: anisphereImage, url: 'https://anisphere.jp', description: 'アニメ共有サイト', techs: ['next', 'rails']},
    {title: 'AniSphere About', image: anisphereAboutImage, url: 'https://about.anisphere.jp', description: 'アニメ共有サイトのAboutページ', techs: ['next']},
    {title: 'portfolio', image: portfolioImage, url: '', description: 'このサイト', techs: ['next']},
    {title: 'HASUROG', image: HASUROGImage, url: 'https://blog.hasuro.com', description: 'HASUROのブログ', techs: ['astro','react']},
    {title: '森日向子 OfficialSite', image: morihinakoImage, url: 'https://mori-hinako.com', description: '森日向子さんの公式サイト', techs: ['next']},
];
