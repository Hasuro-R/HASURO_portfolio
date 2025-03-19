import styles from './page.module.scss'
import AboutMe from '@/components/home/AboutMe'
import Works from '@/components/home/Works'
import Header from '@/components/header/Header'
import Timeline from '@/components/home/Timeline'
import TopIndex from '@/components/home/TopIndex'

export default function Home() {
  return (
    <div className={styles['page-cn']}>
      <Header title='HASURO' />
      <TopIndex />
      <AboutMe />
      <Works />
      <Timeline />
    </div>
  )
}
