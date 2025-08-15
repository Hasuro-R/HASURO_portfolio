'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { CgShapeCircle } from 'react-icons/cg'
import { useI18n } from '@/hooks/useI18n'
import { returnTech } from '@/lib/work/returnTech'
import type { timelineType } from '@/types/timelineType'
import styles from './timeline.module.scss'

export default function TimelineBox({
  timelineData,
  number,
  end,
}: {
  timelineData: timelineType
  number: number
  end: number
}) {
  const t = useI18n()
  const { id, titleKey, date, feature, url, kind } = timelineData

  const [isActiveTimeline, setIsActiveTimeline] = useState(false)

  const isEnd = number === end - 1
  const title = t(titleKey)
  let icon: string
  let titleText: JSX.Element
  if (kind === 'released') {
    icon = '🎊'
    titleText = (
      <p>
        Released{' '}
        <a href={feature?.url} className={styles['title-url']} target="_blank">
          {title}
        </a>
      </p>
    )
  } else if (kind === 'award') {
    icon = '🏆'
    titleText = <p>{title}</p>
  } else if (kind === 'writing') {
    icon = '✍️'
    titleText = (
      <p>
        Published an article on{' '}
        <a href={feature?.url} className={styles['title-url']} target="_blank">
          {title}
        </a>
      </p>
    )
  } else if (kind === 'internship') {
    icon = '💻'
    titleText = <p>{title}</p>
  } else if (kind === 'hackathon') {
    icon = '🔥'
    titleText = <p>{title}</p>
  } else {
    icon = ''
    titleText = <p>{title}</p>
  }

  const handleBoxClick = () => {
    if (url || feature?.url) {
      window.open(url || feature?.url, '_blank', 'noopener,noreferrer');
    }
  }

  return (
    <div className={styles['timeline-box']} onClick={handleBoxClick}>
      <div
        className={styles[isEnd ? 'timeline-right-end' : 'timeline-right']}
        style={{ paddingBottom: isEnd ? '0' : '' }}
      >
        <div
          className={styles['timeline-icon']}
          style={{ color: isActiveTimeline ? 'var(--primary-pink)' : '' }}
        >
          <CgShapeCircle />
        </div>
        <motion.div
          className={styles['timeline-box-cn']}
          onMouseEnter={() => setIsActiveTimeline(true)}
          onHoverStart={() => setIsActiveTimeline(true)}
          onMouseLeave={() => setIsActiveTimeline(false)}
          onMouseUp={() => setIsActiveTimeline(false)}
          animate={
            isActiveTimeline
              ? {
                  y: -10,
                  boxShadow:
                    '0 0 1px var(--primary-pink), 0 0 2px var(--primary-pink), 0 0 3px var(--primary-pink), 0 0 4px var(--primary-yellow)',
                }
              : {}
          }
          transition={{ duration: 0.3 }}
        >
          <div className={styles['timeline-box-title-cn']}>
            <div className={styles['timeline-box-title-wr']}>
              {icon}
              {titleText}
            </div>
            <p className={styles['timeline-box-title-date']}>{date}</p>
          </div>
          {feature && (
            <div className={styles['timeline-box-feature-cn']}>
              <div>
                {t(feature.descriptionKey)
                  .split('\n')
                  .map((item, key) => {
                    return (
                      <p className={styles['feature-box-text']} key={key}>
                        {item}
                      </p>
                    )
                  })}
              </div>
              {feature.techs && (
                <div className={styles['techs-container']}>
                  {feature.techs.map((item, key) => {
                    return (
                      <div
                        className={styles['tech-box']}
                        style={{ backgroundColor: returnTech(item).color }}
                        key={key}
                      >
                        {returnTech(item).text}
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
