import { useMemo } from 'react'
import {
  createTranslationFunction,
  type TranslationParams,
} from '@/lib/i18n-client'
import { useLocal } from './useLocal'

export function useI18n() {
  const { local } = useLocal()

  const t = useMemo(() => {
    return createTranslationFunction(local)
  }, [local])

  return t
}

export type { TranslationParams }
