import { returnTech } from '@/lib/work/returnTech';
import { CgShapeCircle } from 'react-icons/cg';
import styles from './timeline.module.scss';

export default function TimelineBox({
    title, date, feature, kind, number, end,
}: {
    title: string, date: string, feature?: {url: string, description: string, techs: string[]}, kind: string, number: number, end: number,
}) {
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
                <div className={styles['timeline-icon']}>
                    <CgShapeCircle />
                </div>
                <div className={styles['timeline-box-cn']}>
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
                </div>
            </div>
        </div>
    )
}
