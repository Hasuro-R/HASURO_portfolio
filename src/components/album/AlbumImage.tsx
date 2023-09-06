'use client'

import Image from 'next/image';
import styles from './album.module.scss';
import {motion} from 'framer-motion';
import { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';

export default function AlbumImage({image, alt, number}: {image: any, alt: string, number: number}) {
    const [focus, setFocus] = useState(false);

    const handleFocus = () => {
        setFocus(!focus);
    };

    return (
        <motion.div
            className={styles['image-box']}
            onClick={handleFocus}
            initial={{opacity: 0, y: 6}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.3, delay: number * 0.1}}
        >
            <Image src={image} alt={alt} width={150} className={styles.image} />
        {focus && (
            <div className={styles['image-focus-background']} onClick={handleFocus}>
                <div className={styles['image-focus-background-cushion']}>
                    <div className={styles['cross-button']}><RxCross2 /></div>
                    <Image src={image} alt={alt} width={400} className={styles['focus-image']} />
                </div>
            </div>
        )}
        </motion.div>
    )
}
