'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { timelineCategoryes } from '@/lib/timeline/timelineCategoryes'
import styles from './timeline.module.scss'

export default function TimelineCategory({
  kind,
  setKind,
}: {
  kind: string
  setKind: any
}) {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const focusCategory = timelineCategoryes.filter(
    (item) => item.kind === kind
  )[0]

  const handleSelectCategory = (category: string) => {
    setKind(category)
    setIsOpenMenu(false)
  }

  const handleMenu = () => {
    setIsOpenMenu(!isOpenMenu)
  }

  return (
    <>
      <motion.div
        className={styles['category-cn']}
        onClick={handleMenu}
        style={
          isOpenMenu
            ? {
                borderRadius: '1rem',
              }
            : {
                borderRadius: '100vh',
              }
        }
        animate={
          isOpenMenu
            ? {
                width: '200px',
                height: '18.75rem',
              }
            : {
                width: 'auto',
                height: '2.5rem',
              }
        }
        transition={{ duration: 0.3, type: 'spring' }}
      >
        <AnimatePresence>
          {isOpenMenu ? (
            <motion.div
              className={styles['category-menu-cn']}
              initial={{ opacity: 0, height: '2.5rem' }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ delay: 0.1 }}
            >
              {timelineCategoryes.map((timeline, key) => (
                <div
                  className={`${styles['category-menu-select-box']} ${focusCategory.kind === timeline.kind && styles.focus}`}
                  onClick={() => handleSelectCategory(timeline.kind)}
                  key={key}
                >
                  <div className={styles['category-icon-cn']}>
                    {timeline.icon}
                  </div>
                  <p className={styles['category-text']}>{timeline.text}</p>
                </div>
              ))}
            </motion.div>
          ) : (
            <div className={styles['category-box']}>
              <div className={styles['category-meta-cn']}>
                <div className={styles['category-icon-cn']}>
                  {focusCategory.icon}
                </div>
                <p className={styles['category-text']}>{focusCategory.text}</p>
              </div>
              <div className={styles['category-change-arrow']}>
                <IoIosArrowDown />
              </div>
            </div>
          )}
        </AnimatePresence>
      </motion.div>
      {isOpenMenu && (
        <div className={styles['category-menu-bg']} onClick={handleMenu} />
      )}
    </>
  )
}
