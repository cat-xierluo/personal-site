import type { Locale, Messages } from './types';
import { DEFAULT_LOCALE, LOCALES } from './types';
import zhCN from './zh-CN';
import en from './en';

const dictionaries: Record<Locale, Messages> = {
  'zh-CN': zhCN,
  en,
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function resolveLocale(value: string | undefined | null): Locale {
  if (value && isLocale(value)) return value;
  return DEFAULT_LOCALE;
}

export function getDictionary(locale: Locale): Messages {
  return dictionaries[locale];
}

export function localeFromPath(pathname: string, baseUrl: string): Locale {
  const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  let relative = pathname;
  if (normalizedBase !== '/' && pathname.startsWith(normalizedBase)) {
    relative = pathname.slice(normalizedBase.length);
  }
  if (!relative.startsWith('/')) relative = `/${relative}`;
  if (relative === '/en' || relative.startsWith('/en/')) return 'en';
  return DEFAULT_LOCALE;
}

export function alternatePathForLocale(pathname: string, currentLocale: Locale, baseUrl: string): string {
  const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  let relative = pathname;
  if (normalizedBase !== '/' && pathname.startsWith(normalizedBase)) {
    relative = pathname.slice(normalizedBase.length);
  }
  if (!relative.startsWith('/')) relative = `/${relative}`;
  let target: string;
  if (currentLocale === 'en') {
    if (relative === '/en' || relative === '/en/') {
      target = '/';
    } else {
      target = relative.replace(/^\/en\//, '/');
    }
  } else {
    target = relative === '/' ? '/en/' : `/en${relative}`;
  }
  if (normalizedBase === '/') return target;
  return `${normalizedBase}${target.replace(/^\//, '')}`;
}

export type { Locale, Messages } from './types';
export { DEFAULT_LOCALE, LOCALES } from './types';
