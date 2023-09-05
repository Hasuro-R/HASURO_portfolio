import Image from 'next/image'
import styles from './page.module.scss'
import MainIcon from '@/components/account/MainIcon'
import AccountBoxes from '@/components/account/AccountBoxes'
import AboutMe from '@/components/home/AboutMe'
import Works from '@/components/home/Works'

export default function Home() {
  return (
    <>
    <div className={styles['top-account-container']}>
      <div className={styles['top-account-container-left']}>
        <div className={styles['top-account-icon-box']}>
          <MainIcon />
        </div>
        <p className={styles['top-account-name']}>HASURO</p>
      </div>
      <div className={styles['top-account-container-right']}>
        <AccountBoxes />
      </div>
    </div>
    <AboutMe />
    <Works />
    </>
  )
}
