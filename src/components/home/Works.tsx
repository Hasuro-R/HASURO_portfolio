import { getServerTranslations } from '@/lib/i18n'
import { works } from '@/lib/work/works'
import WorkBox from '../work/WorkBox'
import styles from './home.module.scss'

export default async function Works() {
  const t = await getServerTranslations()

  return (
    <div className={styles.container}>
      <div className={styles['title-container']}>
        <p className={styles.title}>Works</p>
      </div>
      <div className={styles['works-container']}>
        {works.map((item, key) => {
          return (
            <WorkBox
              title={t(item.titleKey)}
              image={item.image}
              url={item.url}
              description={t(item.descriptionKey)}
              techs={item.techs}
              key={key}
            />
          )
        })}
      </div>
    </div>
  )
}
