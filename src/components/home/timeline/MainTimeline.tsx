'use client'

import { useState } from 'react';
import styles from '../home.module.scss';
import { timelines } from '@/lib/timeline/timelines';
import TimelineBox from '@/components/timeline/TimelineBox';
import TimelineCategory from '@/components/timeline/TimelineCategory';

export default function MainTimeline() {
    const [kind, setKind] = useState('all');
    const allTimelines = timelines.filter((item) => {
        if (kind === 'all') {
            return item;
        } else if (kind === 'released') {
            return item.kind === 'released';
        } else if (kind === 'award') {
            return item.kind === 'award';
        } else if (kind === 'writing') {
            return item.kind === 'writing';
        } else if (kind === 'other') {
            return item.kind === 'other';
        };
    });
    const timelines2023 = allTimelines.filter((item) => {
        return item.year === '2023';
    });
    const timelines2022 = allTimelines.filter((item) => {
        return item.year === '2022';
    });

    return (
        <div className={styles['container']}>
            <div className={styles['title-container']}>
                <p className={styles['title']}>Timeline</p>
                <TimelineCategory kind={kind} setKind={setKind} />
            </div>
            <div className={styles['sub-container']}>
            {timelines2023.length !== 0 && (
                <>
                <div className={styles['title-container']}>
                    <p className={styles['sub-title']}>2023</p>
                </div>
                <div className={styles['timeline-box-container']}>
                {timelines2023.map((item, key) => {
                    return (
                        <TimelineBox
                            title={item.title}
                            date={item.date}
                            feature={item.feature}
                            kind={item.kind}
                            number={key}
                            end={timelines2023.length}
                            key={key}
                        />
                    )
                })}
                </div>
                </>
            )}
            {timelines2022.length !== 0 && (
                <>
                <div className={styles['title-container']}>
                    <p className={styles['sub-title']}>2022</p>
                </div>
                <div className={styles['timeline-box-container']}>
                {timelines2022.map((item, key) => {
                    return (
                        <TimelineBox
                            title={item.title}
                            date={item.date}
                            feature={item.feature}
                            kind={item.kind}
                            number={key}
                            end={timelines2022.length}
                            key={key}
                        />
                    )
                })}
                </div>
                </>
            )}
            </div>
        </div>
    )
}
