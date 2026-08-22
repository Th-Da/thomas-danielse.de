import { useEffect } from 'react'

export function usePageMeta(title: string, lang: string) {
  useEffect(() => {
    document.title = title
    document.documentElement.lang = lang

    return () => {
      document.documentElement.lang = 'en'
    }
  }, [title, lang])
}
