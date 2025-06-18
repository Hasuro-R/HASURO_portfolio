'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRightCircle } from 'react-icons/fi';
import { IoIosArrowForward } from 'react-icons/io';
import styles from './button.module.scss';

export default function ReadMoreButton({ onClick } : { onClick?: () => void }) {
    return (
        <div className={styles['circle-btn-gray']} onClick={onClick}>
            <IoIosArrowForward />
        </div>
    )
}

export function OldReadMoreButton() {
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
                Read more
                <motion.div
                    className={styles['more-button-arrow']}
                    animate={{ x: isHover ? 5 : 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <FiArrowRightCircle />
                </motion.div>
            </motion.div>
        </div>
    );
}
