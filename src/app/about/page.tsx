import { Metadata } from 'next';
import styles from './about.module.scss';
import Header from '@/components/header/Header';
import Profile from '@/components/home/about/Profile';
import Albums from '@/components/home/about/Albums';
import Contact from '@/components/home/about/Contact';

export const metadata: Metadata = {
    title: 'About',
    openGraph: {
        title: 'About'
    },
    twitter: {
        title: 'About'
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
