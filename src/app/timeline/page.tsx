import { Metadata } from 'next';
import SubHeader from '@/components/header/SubHeader';
import MainTimeline from '@/components/home/timeline/MainTimeline';
import styles from '../page.module.scss';

export const metadata: Metadata = {
    title: 'Timeline',
    description: 'HASUROのTimeline',
    openGraph: {
        title: 'Timeline',
        description: 'HASUROのTimeline',
    },
    twitter: {
        card: 'summary',
        title: 'Timeline',
        description: 'HASUROのTimeline',
    },
}

export default function TimelinePage() {
    return (
        <div className={styles['page-cn']}>
            <SubHeader title='Timeline' />
            <MainTimeline />
        </div>
    )
}
