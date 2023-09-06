'use client'

import Image from 'next/image';
import styles from './album.module.scss';
import {motion} from 'framer-motion';

export default function AlbumImage({image, alt, number}: {image: any, alt: string, number: number}) {
    return (
        <motion.div
            className={styles['image-box']}
            initial={{opacity: 0, y: 6}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.3, delay: number * 0.1}}
        >
            <Image src={image} alt={alt} width={150} className={styles.image} />
        </motion.div>
    )
}
