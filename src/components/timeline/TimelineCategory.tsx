'use client'

import { IoIosArrowDown } from 'react-icons/io';
import styles from './timeline.module.scss';
import {motion} from 'framer-motion';
import { useState } from 'react';
import { timelineCategoryes } from '@/lib/timeline/timelineCategoryes';
import TimelineCategoryesMenu from './ TimelineCategoryesMenu';

export default function TimelineCategory({kind, setKind} : {kind: string, setKind: any}) {
    const [menu, setMenu] = useState(false);
    const focusCategory = timelineCategoryes.filter(item => item.kind === kind)[0];

    const handleMenu = () => {
        setMenu(!menu);
    };

    return (
        <div className={styles['category-container']} onClick={handleMenu}>
            <div className={styles['category-box']}>
                <div className={styles['category-box-cushion']}>
                    <div className={styles['category-icon']}>{focusCategory.icon}</div>
                </div>
            </div>
            <p className={styles['category-text']}>{focusCategory.text}</p>
            <motion.div
                className={styles['category-change-arrow']}
                animate={{rotate: menu ? -180 : 0}}
                whileTap={{scale: 1.5}}
                transition={{duration: 0.3}}
            >
                <IoIosArrowDown />
            </motion.div>
            {menu && <TimelineCategoryesMenu kind={kind} onClose={handleMenu} setKind={setKind} />}
        </div>
    )
}
