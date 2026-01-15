import anisphereImage from '@/public/work/AniSphereOGP.webp'
import anisphereAboutImage from '@/public/work/about-open-graph.webp'
import fwtImage from '@/public/work/fwt.webp'
import portfolioImage from '@/public/work/HASURO_ogp_image.webp'
import HASUROGImage from '@/public/work/HASUROG_ogp.webp'
import HASUROSlidesImage from '@/public/work/hasuro_slides_ogp.webp'
import morihinakoImage from '@/public/work/morihinako.webp'
import RSCImage from '@/public/work/rsc_ogp.webp'

export const works = [
  {
    titleKey: 'works.aniSphere.title',
    image: anisphereImage,
    url: 'https://anisphere.jp',
    descriptionKey: 'works.aniSphere.description',
    techs: ['next', 'rails'],
  },
  {
    titleKey: 'works.aniSphereAbout.title',
    image: anisphereAboutImage,
    url: 'https://about.anisphere.jp',
    descriptionKey: 'works.aniSphereAbout.description',
    techs: ['next'],
  },
  {
    titleKey: 'works.portfolio.title',
    image: portfolioImage,
    url: '',
    descriptionKey: 'works.portfolio.description',
    techs: ['next'],
  },
  {
    titleKey: 'works.hasuroG.title',
    image: HASUROGImage,
    url: 'https://blog.hasuro.com',
    descriptionKey: 'works.hasuroG.description',
    techs: ['astro', 'react'],
  },
  {
    titleKey: 'works.morihinako.title',
    image: morihinakoImage,
    url: 'https://hinako-mori-site.vercel.app',
    descriptionKey: 'works.morihinako.description',
    techs: ['next'],
  },
  {
    titleKey: 'works.fwt.title',
    image: fwtImage,
    url: 'https://github.com/Futurealize-with-Tech',
    descriptionKey: 'works.fwt.description',
    techs: ['next', 'prisma'],
  },
  {
    titleKey: 'works.rsc.title',
    image: RSCImage,
    url: 'https://github.com/Hasuro-R/react-slide-craft',
    descriptionKey: 'works.rsc.description',
    techs: ['react', 'vite'],
  },
  {
    titleKey: 'works.slides.title',
    image: HASUROSlidesImage,
    url: 'https://slides.hasuro.com',
    descriptionKey: 'works.slides.description',
    techs: ['next', 'react', 'rsc'],
  },
]
