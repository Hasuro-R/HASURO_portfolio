'use client'

import styles from './button.module.scss';
import {FiArrowRightCircle} from 'react-icons/fi';

export default function ReadMoreButton() {
    return (
        <div className={styles['more-button']}>
            <div className={styles['more-button-top']}>
                More <FiArrowRightCircle />
            </div>
        </div>
    );
}
