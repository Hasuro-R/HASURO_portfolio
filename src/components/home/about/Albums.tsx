'use client'

import { useState } from 'react'
import AlbumBox from '@/components/album/AlbumBox'
import AlbumImage from '@/components/album/AlbumImage'
import { canadaImages, firstCanadaImages } from '@/lib/image/canadaImages'
import { firstFishImages, fishImages } from '@/lib/image/fishImages'
import { firstSweetImages, sweetImages } from '@/lib/image/sweetImages'
import styles from '../home.module.scss'

export default function Albums() {
  const [show, setShow] = useState('')

  const setCanada = () => {
    if (show === 'canada') {
      setShow('')
    } else {
      setShow('canada')
    }
  }

  const setSweet = () => {
    if (show === 'sweet') {
      setShow('')
    } else {
      setShow('sweet')
    }
  }

  const setFish = () => {
    if (show === 'fish') {
      setShow('')
    } else {
      setShow('fish')
    }
  }

  const albums = [
    {
      icon: '🇨🇦',
      images: firstCanadaImages,
      setShow: setCanada,
      kind: 'canada',
    },
    { icon: '🥮', images: firstSweetImages, setShow: setSweet, kind: 'sweet' },
    { icon: '🐟', images: firstFishImages, setShow: setFish, kind: 'fish' },
  ]

  return (
    <div className={styles.container}>
      <div className={styles['title-container']}>
        <p className={styles.title}>Albums</p>
      </div>
      <div className={styles['albums-container']}>
        {albums.map((item, key) => {
          return (
            <AlbumBox
              icon={item.icon}
              images={item.images}
              setShow={item.setShow}
              kind={item.kind}
              show={show}
              key={key}
            />
          )
        })}
      </div>
      {show === 'canada' && (
        <div className={styles['images-container']}>
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
        </div>
      )}
      {show === 'sweet' && (
        <div className={styles['images-container']}>
          {sweetImages.map((item, key) => {
            return (
              <AlbumImage
                image={item.image}
                alt={item.alt}
                number={key}
                key={key}
              />
            )
          })}
        </div>
      )}
      {show === 'fish' && (
        <div className={styles['images-container']}>
          {fishImages.map((item, key) => {
            return (
              <AlbumImage
                image={item.image}
                alt={item.alt}
                number={key}
                key={key}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}
