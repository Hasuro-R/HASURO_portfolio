import { Metadata } from 'next';
import Profile from '@/components/home/about/Profile';
import Albums from '@/components/home/about/Albums';
import Contact from '@/components/home/about/Contact';
import SubHeader from '@/components/header/SubHeader';

export const metadata: Metadata = {
    title: 'About me',
    description: 'HASUROのAbout me',
    openGraph: {
        title: 'About me',
        description: 'HASUROのAbout me',
    },
    twitter: {
        card: 'summary',
        title: 'About me',
        description: 'HASUROのAbout me',
    },
}

export default function AboutPage() {

    return (
        <>
        <SubHeader title='About me' />
        <Profile />
        <Albums />
        <Contact />
        </>
    );
}
