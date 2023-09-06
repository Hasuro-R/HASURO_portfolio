'use client'

import { canadaImages, firstCanadaImages } from '@/lib/image/canadaImages';
import styles from '../home.module.scss';
import AlbumBox from '@/components/album/AlbumBox';
import { useState } from 'react';
import AlbumImage from '@/components/album/AlbumImage';

export default function Albums() {
    const [show, setShow] = useState('');

    const setCanada = () => {
        if (show === 'canada') {
            setShow('');
        } else {
            setShow('canada');
        };
    };

    const albums = [
        {icon: '🇨🇦', images: firstCanadaImages, setShow: setCanada},
    ];

    return (
        <div className={styles['container']}>
            <div className={styles['title-container']}>
                <p className={styles['title']}>Albums</p>
            </div>
            <div className={styles['works-container']}>
            {albums.map((item, key) => {
                return (
                    <AlbumBox
                        icon={item.icon}
                        images={item.images}
                        setShow={item.setShow}
                        key={key}
                    />
                )
            })}
            </div>
            {show === 'canada' && (
                <div className={styles['images-container']}>
                    <>
                    {canadaImages.map((item, key) => {
                        return (
                            <AlbumImage
                                image={item.image}
                                alt={item.alt}
                                number={key}
                                key={key}
                            />
                        )
                    })}
                    </>
                </div>
            )}
        </div>
    )
}
