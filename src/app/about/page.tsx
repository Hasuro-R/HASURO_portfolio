import { Metadata } from 'next';
import styles from './about.module.scss';
import Header from '@/components/header/Header';
import Profile from '@/components/home/about/Profile';
import Albums from '@/components/home/about/Albums';
import Contact from '@/components/home/about/Contact';

export const metadata: Metadata = {
    title: 'About me',
    description: 'HASUROのAbout me',
    openGraph: {
        title: 'About me',
        description: 'HASUROのAbout me',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About me',
        description: 'HASUROのAbout me',
    },
}

export default function AboutPage() {

    return (
        <>
        <Header title='About me' />
        <Profile />
        <Albums />
        <Contact />
        </>
    );
}
