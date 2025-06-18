'use client'

import styles from './account.module.scss';
import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { SiWantedly } from 'react-icons/si';

export default function AccountBoxes() {
    return (
        <div className={styles['account-box-cn']}>
            <a href='https://twitter.com/HASURO_dev' target='_blank' rel='noreferrer'>
                <motion.div className={styles['twitter-box']}
                    whileHover={{ scale: 1.2 }}
                >
                    <FaTwitter />
                </motion.div>
            </a>
            <a href='https://github.com/Hasuro-R' target='_blank' rel='noreferrer'>
                <motion.div className={styles['github-box']}
                    whileHover={{ scale: 1.2 }}
                >
                    <FaGithub />
                </motion.div>
            </a>
            <a href='https://www.linkedin.com/in/hasuro-304183321' target='_blank' rel='noreferrer'>
                <motion.div className={styles['linkedin-box']}
                    whileHover={{ scale: 1.2 }}
                >
                    <FaLinkedinIn />
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
