import Header from '@/components/header/Header'
import AboutMe from '@/components/home/AboutMe'
import Timeline from '@/components/home/Timeline'
import TopIndex from '@/components/home/TopIndex'
import Works from '@/components/home/Works'
import styles from './page.module.scss'

export default function Home() {
  return (
    <div className={styles['page-cn']}>
      <Header />
      <TopIndex />
      <AboutMe />
      <Works />
      <Timeline />
    </div>
  )
}
