'use client';

import AccountBoxes from '../account/AccountBoxes';
import MainIcon from '../account/MainIcon';
import styles from './header.module.scss';

export default function Header() {
    let name = 'HASURO';
    if (typeof window !== 'undefined') {
        const hostname = window.location.hostname;
        if (hostname === 'inoren.me') {
            name = 'いのれん';
        }
    }

    return (
        <div className={styles['top-account-container']}>
            <div className={styles['top-account-container-left']}>
                <div className={styles['top-account-icon-box']}>
                    <MainIcon />
                </div>
                <p className={styles['top-account-name']}>{name}</p>
            </div>
            <div className={styles['top-account-container-right']}>
                <AccountBoxes />
            </div>
        </div>
    );
}
