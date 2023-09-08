'use client'

import { timelineCategoryes } from '@/lib/timeline/timelineCategoryes';
import styles from './timeline.module.scss';

export default function TimelineCategoryesMenu({
    kind, onClose, setKind,
}: {
    kind: string, onClose: any, setKind: any,
}) {

    const handleClick = (kind: string) => {
        setKind(kind);
        onClose();
    };

    return (
        <>
        <div className={styles['category-menu-container']}>
        {timelineCategoryes.map((item, key) => {
            return (
                <div
                    className={styles['category-menu-box']}
                    onClick={() => handleClick(item.kind)}
                    key={key}
                >
                    <div className={styles['category-menu-box-icon']} style={item.kind === kind ? {background: 'linear-gradient(135deg, rgb(234, 94, 127) 0%, rgb(255, 226, 70) 50%, rgb(240, 134, 75) 100%)'} : {}}>
                        <div className={styles['category-box-cushion']}>
                            <div className={styles['category-icon']}>{item.icon}</div>
                        </div>
                    </div>
                    <p className={styles['category-text']}>{item.text}</p>
                </div>
            )
        })}
        </div>
        <div className={styles['category-menu-background']} onClick={onClose} />
        </>
    )
}
