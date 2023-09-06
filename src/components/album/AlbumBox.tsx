'use client'

import Image from 'next/image';
import styles from './album.module.scss';
import {motion} from 'framer-motion';
import { useState } from 'react';

export default function AlbumBox({
    icon, images, setShow,
}: {
    icon: string, images: any, setShow: any,
}) {
    const [isHover, setIsHover] = useState(false);
    const [isSelected, setIsSelected] = useState(false);

    const handleIsHover = () => {
        setIsHover(true);
    };

    const handleUnIsHover = () => {
        setIsHover(false);
    };

    const handleClick = () => {
        setShow();
        setIsHover(false);
        setIsSelected(!isSelected);
    };

    return (
        <motion.div
            className={styles.container}
            onClick={handleClick}
            onMouseEnter={handleIsHover}
            onMouseLeave={handleUnIsHover}
            animate={(isHover || isSelected) ? {y: 25} : {y: 0}}
            transition={{duration: 0.3}}
        >
            <div className={styles['top-icon']}>{icon}</div>
                <motion.div
                    className={styles['image0']}
                    animate={(isHover || isSelected) ? {bottom: '-10px'} : {bottom: '0px'}}
                >
                    <Image
                        src={images[0].image}
                        alt={images[0].alt}
                        width={150}
                        className={styles['image']}
                    />
                </motion.div>
                <motion.div
                    className={styles['image1']}
                    animate={(isHover || isSelected) ? {transform: 'rotate(-30deg)', bottom: '15px', left: '0px'} : {transform: 'rotate(-9deg)', bottom: '10px', left: '10px'}}
                    transition={{duration: 0.3}}
                >
                    <Image
                        src={images[1].image}
                        alt={images[1].alt}
                        width={150}
                        className={styles['image']}
                    />
                </motion.div>
                <motion.div
                    className={styles['image2']}
                    animate={(isHover || isSelected) ? {transform: 'rotate(30deg)', bottom: '30px', right: '0px'} : {transform: 'rotate(9deg)', bottom: '20px', right: '10px'}}
                    transition={{duration: 0.3}}
                >
                    <Image
                        src={images[2].image}
                        alt={images[2].alt}
                        width={150}
                        className={styles['image']}
                    />
                </motion.div>
                <motion.div
                    className={styles['image3']}
                    animate={(isHover || isSelected) ? {transform: 'rotate(-10deg)', bottom: '60px'} : {transform: 'rotate(-9deg)', bottom: '30px'}}
                    transition={{duration: 0.3}}
                >
                    <Image
                        src={images[3].image}
                        alt={images[3].alt}
                        width={150}
                        className={styles['image']}
                    />
                </motion.div>
        </motion.div>
    )
}
