'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useContext, useEffect, useState } from 'react'
import {
  HiArrowLeft,
  HiChevronRight,
  HiClock,
  HiHome,
  HiMenuAlt3,
  HiUser,
} from 'react-icons/hi'
import { TbWorld } from 'react-icons/tb'
import { useI18n } from '@/hooks/useI18n'
import { useLocal } from '@/hooks/useLocal'
import { colorThemeKey } from '@/lib/key'
import { ColorThemeContext } from '@/middleware/ColorThemeProvider'
import type { LocalType } from '@/types/localType'
import styles from './HoverMenu.module.scss'

interface MenuItem {
  label: string
  href: string
  icon: React.ReactNode
}

const allMenuItems: MenuItem[] = [
  {
    label: 'Home',
    href: '/',
    icon: <HiHome />,
  },
  {
    label: 'AboutMe',
    href: '/about',
    icon: <HiUser />,
  },
  {
    label: 'Timeline',
    href: '/timeline',
    icon: <HiClock />,
  },
]

export default function HoverMenu() {
  const t = useI18n()

  const [isExpanded, setIsExpanded] = useState(false)
  const [currentSection, setCurrentSection] = useState('Home')
  const [showLanguageMenu, setShowLanguageMenu] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useContext(ColorThemeContext)
  const { local, setLocal } = useLocal()

  const getMenuItems = (): MenuItem[] => {
    return allMenuItems.filter((item) => item.href !== pathname)
  }

  const handleChangeTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
      localStorage.setItem(colorThemeKey, 'light')
    } else {
      setTheme('dark')
      localStorage.setItem(colorThemeKey, 'dark')
    }
  }

  const handleLanguageChange = (newLocale: LocalType) => {
    if (setLocal) {
      setLocal(newLocale)
    }
    setShowLanguageMenu(false)
  }

  const handleLanguageMenuToggle = () => {
    setShowLanguageMenu(!showLanguageMenu)
  }

  const handleMenuItemClick = () => {
    setIsExpanded(false)
    setShowLanguageMenu(false)
  }

  useEffect(() => {
    if (pathname !== '/') {
      setCurrentSection('Home')
      return
    }

    const sections = [
      { id: 'about', name: 'AboutMe' },
      { id: 'works', name: 'Works' },
      { id: 'timeline', name: 'Timeline' },
    ]

    const handleScroll = () => {
      let currentSectionName = 'Home'

      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            currentSectionName = section.name
          }
        }
      }

      setCurrentSection(currentSectionName)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [pathname])

  const getMenuLabel = () => {
    switch (pathname) {
      case '/':
        return currentSection
      case '/about':
        return 'AboutMe'
      case '/timeline':
        return 'Timeline'
      case '/album':
        return 'アルバム'
      default:
        return 'Menu'
    }
  }

  const toggleMenu = () => {
    setIsExpanded(!isExpanded)
  }

  const handleBackgroundClick = () => {
    if (isExpanded) {
      setIsExpanded(false)
      setShowLanguageMenu(false)
    }
  }

  return (
    <>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleBackgroundClick}
          />
        )}
      </AnimatePresence>

      <motion.div
        className={`${styles['menu-cn']} ${isExpanded ? styles.expanded : ''}`}
        initial={{
          width: 120,
          height: 40,
          borderRadius: 20,
        }}
        animate={{
          width: isExpanded ? 200 : 120,
          height: isExpanded ? 192 : 40,
          borderRadius: isExpanded ? 16 : 20,
        }}
        transition={{
          type: 'tween',
          ease: [0.4, 0.0, 0.2, 1],
          duration: 0.25,
        }}
      >
        {!isExpanded && (
          <motion.div
            className={styles['menu-btn']}
            onClick={toggleMenu}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {getMenuLabel()}
            <span>
              <HiMenuAlt3 />
            </span>
          </motion.div>
        )}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className={styles['expanded-menu']}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.1 }}
            >
              {!showLanguageMenu ? (
                <>
                  {getMenuItems().map((item, index) => (
                    <Link
                      className={styles['menu-item-link']}
                      key={item.label}
                      href={item.href}
                    >
                      <motion.div
                        className={styles['menu-item-wrapper']}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={handleMenuItemClick}
                      >
                        <span className={styles['menu-item-icon']}>
                          {item.icon}
                        </span>
                        {item.label}
                      </motion.div>
                    </Link>
                  ))}
                  <motion.div
                    className={styles['menu-item-wrapper']}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: getMenuItems().length * 0.05 }}
                    onClick={handleLanguageMenuToggle}
                  >
                    <span className={styles['menu-item-icon']}>
                      <TbWorld />
                    </span>
                    {t('menu.selectLanguage')}
                    <HiChevronRight className={styles['chevron-icon']} />
                  </motion.div>
                  <motion.div
                    className={styles['theme-toggle-wrapper']}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: getMenuItems().length * 0.05 + 0.05 }}
                  >
                    <div className={styles['theme-toggle-container']}>
                      <span className={styles['theme-toggle-label']}>
                        Dark Theme
                      </span>
                      <motion.div
                        className={`${styles['theme-toggle']} ${theme === 'dark' ? styles['theme-toggle-active'] : ''}`}
                        onClick={handleChangeTheme}
                      >
                        <motion.div
                          className={styles['theme-toggle-button']}
                          animate={{
                            x: theme === 'dark' ? 20 : 0,
                          }}
                          transition={{
                            type: 'spring',
                            stiffness: 500,
                            damping: 30,
                          }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                </>
              ) : (
                <>
                  <motion.div
                    className={styles['language-menu-header']}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: 0.05 }}
                  >
                    <button
                      type="button"
                      className={styles['back-button']}
                      onClick={() => setShowLanguageMenu(false)}
                    >
                      <HiArrowLeft />
                    </button>
                    <span className={styles['menu-title']}>
                      {t('menu.selectLanguage')}
                    </span>
                  </motion.div>

                  <motion.div
                    className={`${styles['menu-item-wrapper']} ${local === 'ja' ? styles['language-item-active'] : ''}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: 0.1 }}
                    onClick={() => handleLanguageChange('ja')}
                  >
                    <span className={styles['menu-item-icon']}>🇯🇵</span>
                    日本語
                    {local === 'ja' && (
                      <span className={styles['check-icon']}>✓</span>
                    )}
                  </motion.div>

                  <motion.div
                    className={`${styles['menu-item-wrapper']} ${local === 'en' ? styles['language-item-active'] : ''}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: 0.15 }}
                    onClick={() => handleLanguageChange('en')}
                  >
                    <span className={styles['menu-item-icon']}>🇺🇸</span>
                    English
                    {local === 'en' && (
                      <span className={styles['check-icon']}>✓</span>
                    )}
                  </motion.div>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  )
}
