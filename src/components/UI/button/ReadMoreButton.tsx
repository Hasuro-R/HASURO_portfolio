'use client'

import { useState } from 'react';
import styles from './button.module.scss';
import {FiArrowRightCircle} from 'react-icons/fi';
import {motion} from 'framer-motion';

export default function ReadMoreButton() {
    const [isHover, setIsHover] = useState(false);

    const handleIsHover = () => {
        setIsHover(true);
    };

    const handleUnIsHover = () => {
        setIsHover(false);
    };

    return (
        <div className={styles['more-button']}>
            <motion.div
                className={styles['more-button-top']}
                onMouseEnter={handleIsHover}
                onMouseLeave={handleUnIsHover}
            >
                もっと見る
                <motion.div
                    className={styles['more-button-arrow']}
                    animate={isHover ? {x: 5} : {x: 0}}
                    transition={{duration: 0.4}}
                >
                    <FiArrowRightCircle />
                </motion.div>
            </motion.div>
        </div>
    );
}
