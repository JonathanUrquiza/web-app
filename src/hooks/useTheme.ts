'use client'
import { useEffect, useState } from 'react'

type Theme = 'dark' | 'light' | 'synthwave'

export function useTheme(): Theme {
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    // Read current data-theme attribute value
    const read = () => {
      const t = document.documentElement.getAttribute('data-theme') as Theme | null
      setTheme(t ?? 'dark')
    }
    read()

    // Watch for future changes via MutationObserver
    const observer = new MutationObserver(read)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })
    return () => observer.disconnect()
  }, [])

  return theme
}
