'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CgShapeCircle } from 'react-icons/cg';
import { returnTech } from '@/lib/work/returnTech';
import { timelineType } from '@/types/timelineType';
import styles from './timeline.module.scss';

export default function TimelineBox({
    timelineData, number, end,
}: {
    timelineData: timelineType, number: number, end: number,
}) {
    const { id, title, date, feature, kind } = timelineData;

    const [isActiveTimeline, setIsActiveTimeline] = useState(false);

    const isEnd = number === end - 1;
    let icon: string;
    let titleText: JSX.Element;
    if (kind === 'released') {
        icon = '🎊';
        titleText = <p>Released <a href={feature?.url} className={styles['title-url']} target='_blank'>{title}</a></p>;
    } else if (kind === 'award') {
        icon = '🏆';
        titleText = <p>{title}</p>;
    } else if (kind === 'writing') {
        icon = '✍️';
        titleText = <p>Published an article on <a href={feature?.url} className={styles['title-url']} target='_blank'>{title}</a></p>;
    } else if (kind === 'internship') {
        icon = '💻';
        titleText = <p>{title}</p>;
    } else if (kind === 'hackathon') {
        icon = '🔥';
        titleText = <p>{title}</p>;
    } else {
        icon = '';
        titleText = <p>{title}</p>;
    };

    return (
        <div className={styles['timeline-box']}>
            <div className={styles[isEnd ? 'timeline-right-end' : 'timeline-right']} style={{paddingBottom: isEnd ? '0' : ''}}>
                <div
                    className={styles['timeline-icon']}
                    style={{ color: isActiveTimeline ? 'var(--primary-pink)' : '' }}
                >
                    <CgShapeCircle />
                </div>
                <motion.div
                    className={styles['timeline-box-cn']}
                    onMouseEnter={() => setIsActiveTimeline(true)}
                    onHoverStart={() => setIsActiveTimeline(true)}
                    onMouseLeave={() => setIsActiveTimeline(false)}
                    onMouseUp={() => setIsActiveTimeline(false)}
                    animate={isActiveTimeline ? {
                        y: -10, boxShadow: '0 0 1px var(--primary-pink), 0 0 2px var(--primary-pink), 0 0 3px var(--primary-pink), 0 0 4px var(--primary-yellow)'
                    } : {}}
                    transition={{ duration: 0.3 }}
                >
                    <div className={styles['timeline-box-title-cn']}>
                        <div className={styles['timeline-box-title-wr']}>
                            {icon}
                            {titleText}
                        </div>
                        <p className={styles['timeline-box-title-date']}>{date}</p>
                    </div>
                    {feature && (
                        <div className={styles['timeline-box-feature-cn']}>
                        <div>
                            {feature.description.split('\n').map((item, key) => {
                                return (
                                    <p className={styles['feature-box-text']} key={key}>{item}</p>
                                )
                            })}
                        </div>
                        {feature.techs.length !== 0 && (
                            <div className={styles['techs-container']}>
                            {feature.techs.map((item, key) => {
                                return (
                                    <div
                                        className={styles['tech-box']}
                                        style={{backgroundColor: returnTech(item).color}}
                                        key={key}
                                    >
                                        {returnTech(item).text}
                                    </div>
                                )
                            })}
                            </div>
                        )}
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    )
}
