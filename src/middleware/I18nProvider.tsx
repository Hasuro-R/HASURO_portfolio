'use client'

import { useRouter } from 'next/navigation'
import { createContext, useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { localKey } from '@/lib/key'
import { type LocalType, locals } from '@/types/localType'

type I18nProviderContextType = {
  local: LocalType | undefined
  setLocal: ((local: LocalType) => void) | null
}

export const I18nProviderContext = createContext<I18nProviderContextType>({
  local: 'en',
  setLocal: null,
})

export default function I18nProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()

  const [local, setLocal] = useState<LocalType>()
  const [cookies, setCookies] = useCookies()

  useEffect(() => {
    const localCookie = cookies[localKey]

    if (localCookie && locals.includes(localCookie as LocalType)) {
      setLocal(localCookie as LocalType)
    } else {
      const language = window.navigator.language
      if (locals.includes(language as LocalType)) {
        setLocal(language as LocalType)
      } else {
        setLocal('en')
      }
    }
  }, [cookies])

  useEffect(() => {
    if (local) {
      setCookies(localKey, local)
      router.refresh()
    }
  }, [local, setCookies, router.refresh])

  const handleSetLocal = (newLocal: LocalType) => {
    setLocal(newLocal)
  }

  return (
    <I18nProviderContext.Provider value={{ local, setLocal: handleSetLocal }}>
      {children}
    </I18nProviderContext.Provider>
  )
}
