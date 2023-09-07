import { returnTech } from '@/lib/work/returnTech';
import styles from './timeline.module.scss';

export default function TimelineBox({
    title, date, feature, kind, number, end,
}: {
    title: string, date: string, feature?: {url: string, description: string, techs: string[]}, kind: string, number: number, end: number,
}) {
    const isEnd = number === end - 1;
    let icon;
    let titleText;
    if (kind === 'released') {
        icon = '🎊';
        titleText = <p className={styles['timeline-box-title']}>Released <a href={feature?.url} className={styles['title-url']} target='_blank'>{title}</a><span>{date}</span></p>;
    } else {
        icon = <div className={styles['timeline-circle']}></div>;
        titleText = <p className={styles['timeline-box-title']}>{title}<span>{date}</span></p>;
    };

    return (
        <div className={styles['timeline-box']}>
            <div className={styles['timeline-right']} style={{paddingBottom: isEnd ? '0' : ''}}>
                <div className={styles['timeline-icon']}>{icon}</div>
                    {titleText}
                {feature && (
                    <div className={styles['feature-box']}>
                        {feature.description.split('\n').map((item, key) => {
                            return (
                                <p className={styles['feature-box-text']} key={key}>{item}</p>
                            )
                        })}
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
                    </div>
                )}
            </div>
        </div>
    )
}
