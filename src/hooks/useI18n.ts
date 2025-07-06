import { useMemo } from "react";
import { createTranslationFunction, TranslationParams } from "@/lib/i18n-client";

export function useI18n(locale: string) {
  const t = useMemo(() => {
    return createTranslationFunction(locale);
  }, [locale]);

  return t;
}

// 型をエクスポート
export type { TranslationParams };
