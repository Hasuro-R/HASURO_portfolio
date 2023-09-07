import styles from './page.module.scss'
import AboutMe from '@/components/home/AboutMe'
import Works from '@/components/home/Works'
import Header from '@/components/header/Header'
import Timeline from '@/components/home/Timeline'

export default function Home() {
  return (
    <>
    <Header title='HASURO' />
    <AboutMe />
    <Works />
    <Timeline />
    </>
  )
}
