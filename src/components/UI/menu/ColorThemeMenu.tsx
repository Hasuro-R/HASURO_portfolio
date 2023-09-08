'use client'

import { useContext } from 'react';
import styles from './menu.module.scss';
import {motion} from 'framer-motion';
import { ColorThemeContext } from '@/middleware/ColorThemeProvider';
import { colorThemeKey } from '@/lib/key';

export default function ColorThemeMenu() {
    const {theme, setTheme} = useContext(ColorThemeContext);
    const isDark = theme === 'dark';
    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30
    };

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
        <motion.div
            className={styles['container']}
            onClick={handleChangeColorTheme}
            animate={isDark ? {justifyContent: 'flex-end'} : {justifyContent: 'flex-start'}}
            transition={{duration: 0.3}}
        >
            <motion.div
                className={styles['change-button']}
                transition={spring}
            >
            {isDark ? (
                <div className={styles['change-button-icon']}>🌙</div>
            ) : (
                <div className={styles['change-button-icon']}>🌞</div>
            )}
            </motion.div>
        </motion.div>
    )
}
