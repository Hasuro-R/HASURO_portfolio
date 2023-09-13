'use client'

import styles from './index.module.scss';

export default function IndexBox({
    icon, title, background,
}: {
    icon: string, title: string, background: string,
}) {
    return (
        <div className={styles['container']} style={{backgroundImage: background}}>
            <div className={styles['icon-box']}>{icon}</div>
            <div className={styles['text-box']}>{title}</div>
        </div>
    );
}
