import Link from 'next/link';
import { topTimelines } from '@/lib/timeline/timelines';
import { timelineType } from '@/types/timelineType';
import ReadMoreButton from '../UI/button/ReadMoreButton';
import TimelineBox from '../timeline/TimelineBox';
import ReadMoreTextButton from '../UI/button/ReadMoreTextButton';
import styles from './home.module.scss';

export default function Timeline() {
    const timeline23 = topTimelines.filter((timeline) => timeline.year === '2023');
    const timeline24 = topTimelines.filter((timeline) => timeline.year === '2024');
    const timeline25 = topTimelines.filter((timeline) => timeline.year === '2025');

    return (
        <div className={styles['container']}>
            <div className={styles['title-container']}>
                <p className={styles['title']}>Timeline</p>
                <Link href='/timeline'>
                    <ReadMoreButton />
                </Link>
            </div>
            <TimeLineSection year='2025' timelines={timeline25} />
            <TimeLineSection year='2024' timelines={timeline24} />
            <TimeLineSection year='2023' timelines={timeline23} />
            <div className={styles['timeline-more-btn-cn']}>
                <Link href='/timeline'>
                    <ReadMoreTextButton text='もっと詳しく見る' />
                </Link>
            </div>
        </div>
    )
}

function TimeLineSection({
    year,
    timelines,
}: {
    year: string,
    timelines: timelineType[],
}) {
    return (
        <div className={styles['timeline-container']}>
        <p className={styles['timeline-year']}>{year}</p>
        <div className={styles['timeline-box-container']}>
        {timelines.map((item, key) => {
            return (
                <TimelineBox
                    title={item.title}
                    date={item.date}
                    feature={item.feature}
                    kind={item.kind}
                    number={key}
                    end={timelines.length}
                    key={key}
                />
            )
        })}
        </div>
    </div>
    );
}
