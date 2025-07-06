'use client'

import Image from 'next/image'
import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'
import topIcon from '@/public/HASURO_portfolio_icon.webp'
import ColorThemeMenu from '../UI/menu/ColorThemeMenu'
import styles from './header.module.scss'

export default function SubHeader({ title }: { title: string }) {
  return (
    <div className={styles['sub-header-container']}>
      <div className={styles['sub-header-left']}>
        <Image
          src={topIcon}
          alt="top icon"
          width={50}
          className={styles['top-image']}
        />
        <div className={styles['sub-header-left-text-container']}>
          <Link href="/" className={styles['top-link']}>
            Home
          </Link>
          <div className={styles['separate-text']}>
            <IoIosArrowForward />
          </div>
          <p className={styles['top-link']}>{title}</p>
        </div>
      </div>
      <ColorThemeMenu />
    </div>
  )
}
