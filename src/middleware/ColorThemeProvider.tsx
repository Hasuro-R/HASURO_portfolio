'use client'

import { createContext, useEffect, useState } from 'react'
import { colorThemeKey } from '@/lib/key'

type ColorThemeContextType = {
  theme: string
  setTheme: any
}

export const ColorThemeContext = createContext<ColorThemeContextType>({
  theme: '',
  setTheme: undefined,
})

export default function ColorThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, setTheme] = useState('')

  useEffect(() => {
    const colorTheme = localStorage.getItem(colorThemeKey)
    const root = window.document.documentElement

    if (colorTheme) {
      setTheme(colorTheme)
      root.setAttribute('data-theme', colorTheme)
    } else {
      // if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      //     root.setAttribute('data-theme', 'dark');
      //     setTheme('dark');
      // } else {
      //     root.setAttribute('data-theme', 'light');
      //     setTheme('light');
      // };
      root.setAttribute('data-theme', 'dark')
      setTheme('dark')
    }
  }, [theme])

  return (
    <ColorThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ColorThemeContext.Provider>
  )
}
