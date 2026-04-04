'use client'

import React, { useState } from 'react'
import TimelineBox from '@/components/timeline/TimelineBox'
import TimelineCategory from '@/components/timeline/TimelineCategory'
import { timelines } from '@/lib/timeline/timelines'
import styles from '../home.module.scss'

export default function MainTimeline() {
  const [kind, setKind] = useState('all')
  const allTimelines = timelines.filter((item) => {
    if (kind === 'all') {
      return item
    } else if (kind === 'released') {
      return item.kind === 'released'
    } else if (kind === 'award') {
      return item.kind === 'award'
    } else if (kind === 'writing') {
      return item.kind === 'writing'
    } else if (kind === 'hackathon') {
      return item.kind === 'hackathon'
    } else if (kind === 'work') {
      return item.kind === 'work'
    } else if (kind === 'other') {
      return item.kind === 'other'
    }
  })
  const timelines2026 = allTimelines.filter((item) => {
    return item.year === '2026'
  })
  const timelines2025 = allTimelines.filter((item) => {
    return item.year === '2025'
  })
  const timelines2024 = allTimelines.filter((item) => {
    return item.year === '2024'
  })
  const timelines2023 = allTimelines.filter((item) => {
    return item.year === '2023'
  })
  const timelines2022 = allTimelines.filter((item) => {
    return item.year === '2022'
  })
  const timelinesArray = [
    { item: timelines2026, title: '2026' },
    { item: timelines2025, title: '2025' },
    { item: timelines2024, title: '2024' },
    { item: timelines2023, title: '2023' },
    { item: timelines2022, title: '2022' },
  ]

  return (
    <div className={styles.container}>
      <div className={styles['title-container']}>
        <p className={styles.title}>Timeline</p>
        <TimelineCategory kind={kind} setKind={setKind} />
      </div>
      <div className={styles['sub-container']}>
        {timelinesArray.map(
          (array, arrayKey) =>
            array.item.length !== 0 && (
              <React.Fragment key={arrayKey}>
                <div className={styles['title-container']}>
                  <p className={styles['sub-title']}>{array.title}</p>
                </div>
                <div className={styles['timeline-box-container']}>
                  {array.item.map((item, key) => {
                    return (
                      <TimelineBox
                        timelineData={item}
                        number={key}
                        end={array.item.length}
                        key={key}
                      />
                    )
                  })}
                </div>
              </React.Fragment>
            )
        )}
      </div>
    </div>
  )
}
