'use client'

import styles from './account.module.scss';
import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { SiWantedly } from 'react-icons/si';

export default function AccountBoxes() {
    return (
        <div className={styles['account-box-container']}>
            <a href='https://twitter.com/HASURO_dev' target='_blank' rel='noreferrer'>
                <motion.div className={styles['twitter-box']}
                    whileHover={{ scale: 1.2 }}
                >
                    <FaTwitter />
                </motion.div>
            </a>
            <a href='https://github.com/inoren-ten' target='_blank' rel='noreferrer'>
                <motion.div className={styles['github-box']}
                    whileHover={{ scale: 1.2 }}
                >
                    <FaGithub />
                </motion.div>
            </a>
            <a href='https://www.wantedly.com/id/hasuro' target='_blank' rel='noreferrer'>
                <motion.div className={styles['wantedly-box']}
                    whileHover={{ scale: 1.2 }}
                >
                    <SiWantedly />
                </motion.div>
            </a>
            {/* <a href='https://www.instagram.com/ren_hasuro/' target='_blank' className={styles['none-link']}>
                <motion.div className={styles['instagram-box']}
                    whileHover={{scale: 1.2}}
                >
                    <FaInstagram />
                </motion.div>
            </a> */}
        </div>
    )
}
