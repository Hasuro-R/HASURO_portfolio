import Link from 'next/link'
import { profileIntroduction } from '@/lib/profile/profileIntroduction'
import ReadMoreButton from '../UI/button/ReadMoreButton'
import styles from './home.module.scss'

export default async function AboutMe() {
  const profile = await profileIntroduction()

  return (
    <div className={styles.container}>
      <div className={styles['title-container']}>
        <p className={styles.title}>About me</p>
        <Link href="/about">
          <ReadMoreButton />
        </Link>
      </div>
      <div className={styles['text-container']}>
        {profile.split('\n').map((item, key) => {
          return <span key={key}>{item}</span>
        })}
      </div>
    </div>
  )
}
