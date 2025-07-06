import { useContext } from 'react'
import { I18nProviderContext } from '@/middleware/I18nProvider'

export function useLocal() {
  const { local, setLocal } = useContext(I18nProviderContext)

  return {
    local: local ?? 'en',
    setLocal,
  }
}
