'use client'

import { FaGithub, FaTwitter } from 'react-icons/fa';
import styles from './account.module.scss';
import {motion} from 'framer-motion';

export default function AccountBoxes() {
    return (
        <div className={styles['account-box-container']}>
            <a href='https://twitter.com/HASURO_dev' target='_blank'>
                <motion.div className={styles['twitter-box']}
                    whileHover={{scale: 1.2}}
                >
                    <FaTwitter />
                </motion.div>
            </a>
            <a href='https://github.com/inoren-ten' target='_blank'>
                <motion.div className={styles['github-box']}
                    whileHover={{scale: 1.2}}
                >
                    <FaGithub />
                </motion.div>
            </a>
        </div>
    )
}
