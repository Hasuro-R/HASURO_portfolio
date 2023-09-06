import styles from './page.module.scss'
import AboutMe from '@/components/home/AboutMe'
import Works from '@/components/home/Works'
import Header from '@/components/header/Header'

export default function Home() {
  return (
    <>
    <Header title='HASURO' />
    <AboutMe />
    <Works />
    </>
  )
}
