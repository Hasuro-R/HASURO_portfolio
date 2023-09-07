import Link from 'next/link';
import ReadMoreButton from '../UI/button/ReadMoreButton';
import styles from './home.module.scss';
import { releasedTimelines } from '@/lib/timeline/timelines';
import TimelineBox from '../timeline/TimelineBox';

export default function Timeline() {
    return (
        <div className={styles['container']}>
            <div className={styles['title-container']}>
                <p className={styles['title']}>Timeline</p>
                <Link href='/timeline'>
                    <ReadMoreButton />
                </Link>
            </div>
            <div className={styles['timeline-container']}>
                <p className={styles['timeline-year']}>2023</p>
                <div className={styles['timeline-box-container']}>
                {releasedTimelines.map((item, key) => {
                    return (
                        <TimelineBox
                            title={item.title}
                            date={item.date}
                            feature={item.feature}
                            kind={item.kind}
                            number={key}
                            end={releasedTimelines.length}
                            key={key}
                        />
                    )
                })}
                </div>
            </div>
        </div>
    )
}
