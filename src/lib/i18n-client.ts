import { locals, LocalType } from "@/types/localType";

export type TranslationParams = Record<string, string | number>;

// クライアントコンポーネント用の翻訳データ取得
export function getTranslationData(locale: string) {
  const parseLocal = locals.includes(locale as LocalType) ? locale : 'en';

  try {
    if (parseLocal === 'ja') {
      return require('@/i18n/ja.json');
    } else {
      return require('@/i18n/en.json');
    }
  } catch (error) {
    console.warn(`Translation file for locale '${parseLocal}' not found. Falling back to English.`);
    return require('@/i18n/en.json');
  }
}

// クライアントコンポーネント用の翻訳関数生成
export function createTranslationFunction(locale: string) {
  const translations = getTranslationData(locale);

  return (key: string, params?: TranslationParams): string => {
    const keys = key.split('.');
    let value = translations;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key '${key}' not found for locale '${locale}'`);
        return key;
      }
    }

    if (typeof value === 'string') {
      return params ? replacePlaceholders(value, params) : value;
    }

    return key;
  };
}

// プレースホルダーを置換する関数
function replacePlaceholders(template: string, params: TranslationParams = {}): string {
  return template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
    const value = params[key];
    return value !== undefined ? String(value) : match;
  });
}
