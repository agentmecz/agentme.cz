import * as en from './content';
import * as cs from './content.cs';

export type Locale = 'en' | 'cs';

const locales: Record<Locale, typeof en> = { en, cs };

export function t(locale: Locale) {
  return locales[locale];
}

export function getLocaleFromUrl(url: URL): Locale {
  const seg = url.pathname.split('/')[1];
  return seg === 'cs' ? 'cs' : 'en';
}

export function getLocalePath(locale: Locale, hash = ''): string {
  const base = locale === 'cs' ? '/cs/' : '/';
  return hash ? `${base}${hash}` : base;
}

export function getAlternateLang(locale: Locale): Locale {
  return locale === 'cs' ? 'en' : 'cs';
}

export const localeLabels: Record<Locale, string> = {
  en: 'EN',
  cs: 'CZ',
};

export const ogLocales: Record<Locale, string> = {
  en: 'en_US',
  cs: 'cs_CZ',
};
