'use client'

import styles from './account.module.scss';
import { ColorThemeContext } from "@/middleware/ColorThemeProvider";
import Image from "next/image";
import { useContext } from "react"
import mainIconImage from '@/public/hasuro_icon.png'
import {motion} from 'framer-motion';
import { colorThemeKey } from '@/lib/key';

export default function MainIcon() {
    const {theme, setTheme} = useContext(ColorThemeContext);

    const handleChangeColorTheme = () => {
        if (theme === 'dark') {
            setTheme('light');
            localStorage.setItem(colorThemeKey, 'light');
        } else {
            setTheme('dark');
            localStorage.setItem(colorThemeKey, 'dark');
        };
    };

    return (
        <div className={styles['main-icon-box']} onClick={handleChangeColorTheme}>
            <Image src={mainIconImage} alt='HASUROのアイコン' width={150} height={150} className={styles['main-icon']} />
            <motion.div
                className={styles['main-icon-cover']}
                animate={{opacity: [0, 0, 0, 0, 0, 1, 0.7, 0.2]}}
                transition={{duration: 10, repeat: Infinity}}
            >
                <div className={styles['main-icon-cover-cushion']}>
                {theme === 'dark' ? '🌞' : '🌙'}
                </div>
            </motion.div>
        </div>
    )
}
