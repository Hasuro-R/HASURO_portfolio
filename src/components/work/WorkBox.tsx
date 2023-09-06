'use client'

import Image from 'next/image';
import styles from './work.module.scss';
import { returnTech } from '@/lib/work/returnTech';
import {motion} from 'framer-motion';

export default function WorkBox({
    title, image, url, description, techs,
}: {
    title: string, image: any, url: string, description: string, techs: string[],
}) {
    return (
        <a href={url} target='_blank' className='link'>
            <motion.div className={styles['container']} whileHover={{scale: 1.05}}>
                <Image src={image} alt={`${title}の画像`} width={240} height={126} className={styles['top-image']} />
                <div className={styles['under-box']}>
                    <p className={styles['title']}>{title}</p>
                    <div className={styles['description-box']}>{description}</div>
                    <div className={styles['techs-container']}>
                    {techs.map((item, key) => {
                        return (
                            <div
                                className={styles['tech-box']}
                                style={{backgroundColor: returnTech(item).color}}
                                key={key}
                            >
                                {returnTech(item).text}
                            </div>
                        )
                    })}
                    </div>
                </div>
            </motion.div>
        </a>
    )
}
