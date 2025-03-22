import { defaultLang, ui, languages } from './ui'
import type { UI } from '@/types'

export function useTranslations(lang: 'en' | 'es') {
  return function t(key: keyof UI[typeof lang]) {
    return (
      (ui[lang] as UI[typeof lang])[key] ||
      (ui[defaultLang] as UI[typeof lang])[key]
    )
  }
}

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/')
  if (lang in languages) return lang as keyof typeof languages
  return defaultLang
}

export function changeLangFromUrl(url: URL, lang: string) {
  const newLang = lang === 'es' ? 'en' : 'es'
  const splitUrl = url.pathname.split('/')
  splitUrl[1] = newLang
  return splitUrl.join('/').substring(1)
}
