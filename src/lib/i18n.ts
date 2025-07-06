import { locals, LocalType } from "@/types/localType";
import { readFileSync } from "fs";
import { join } from "path";
import { cookies } from "next/headers";
import { localKey } from "@/lib/key";

export type TranslationParams = Record<string, string | number>;

export function getTranslations(locale: string) {
  const parseLocal = locals.includes(locale as LocalType) ? locale : 'en';

  try {
    const filePath = join(process.cwd(), 'src', 'i18n', `${parseLocal}.json`);
    const raw = readFileSync(filePath, 'utf-8');
    const data = JSON.parse(raw);

    return (key: string, params?: TranslationParams): string => {
      const keys = key.split('.');
      let value = data;

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
  } catch (error) {
    console.warn(`Translation file for locale '${parseLocal}' not found. Falling back to English.`);

    try {
      const fallbackPath = join(process.cwd(), 'src', 'i18n', 'en.json');
      const fallbackRaw = readFileSync(fallbackPath, 'utf-8');
      const fallbackData = JSON.parse(fallbackRaw);

      return (key: string, params?: TranslationParams): string => {
        const keys = key.split('.');
        let value = fallbackData;

        for (const k of keys) {
          if (value && typeof value === 'object' && k in value) {
            value = value[k];
          } else {
            return key;
          }
        }

        if (typeof value === 'string') {
          return params ? replacePlaceholders(value, params) : value;
        }

        return key;
      };
    } catch (fallbackError) {
      console.error('Failed to load fallback translations:', fallbackError);
      return (key: string, params?: TranslationParams) => key;
    }
  }
}

export async function getServerTranslations() {
  const cookieStore = await cookies();
  const locale = cookieStore.get(localKey)?.value ?? 'en';

  return getTranslations(locale);
}

// プレースホルダーを置換する関数
function replacePlaceholders(template: string, params: TranslationParams = {}): string {
  return template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
    const value = params[key];
    return value !== undefined ? String(value) : match;
  });
}
