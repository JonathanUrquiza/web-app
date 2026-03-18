'use client'

import { useEffect, useState, useRef } from 'react'
import styles from './ThemeSwitcher.module.css'

type Theme = 'dark' | 'light' | 'synthwave'

const THEMES: { value: Theme; label: string; icon: string }[] = [
  { value: 'dark',      label: 'Oscuro',    icon: '🌙' },
  { value: 'light',     label: 'Claro',     icon: '☀️' },
  { value: 'synthwave', label: 'Synthwave', icon: '⚡' },
]

const VALID_THEMES: Theme[] = ['dark', 'light', 'synthwave']

function getStoredTheme(): Theme {
  if (typeof window === 'undefined') return 'dark'
  const stored = localStorage.getItem('duw-theme')
  return VALID_THEMES.includes(stored as Theme) ? (stored as Theme) : 'dark'
}

export default function ThemeSwitcher() {
  const [current, setCurrent] = useState<Theme>('dark')
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Sync state with actual localStorage/DOM on mount
  // Also re-applies data-theme to <html> after React hydration
  useEffect(() => {
    const stored = getStoredTheme()
    setCurrent(stored)
    document.documentElement.setAttribute('data-theme', stored)
  }, [])

  // Keyboard (Escape) and outside-click to close panel
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }
    const onOutside = (e: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onOutside)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onOutside)
    }
  }, [open])

  const applyTheme = (theme: Theme) => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('duw-theme', theme)
    setCurrent(theme)
    setOpen(false)
    buttonRef.current?.focus()
  }

  const currentTheme = THEMES.find(t => t.value === current) ?? THEMES[0]

  return (
    <div className={styles.wrapper}>
      {open && (
        <div
          ref={panelRef}
          className={styles.panel}
          role="menu"
          aria-label="Seleccionar tema"
        >
          {THEMES.map(t => (
            <button
              key={t.value}
              role="menuitem"
              className={`${styles.option} ${current === t.value ? styles.active : ''}`}
              onClick={() => applyTheme(t.value)}
              aria-current={current === t.value ? 'true' : undefined}
            >
              <span className={styles.optionIcon}>{t.icon}</span>
              <span className={styles.optionLabel}>{t.label}</span>
              {current === t.value && (
                <span className={styles.check} aria-hidden="true">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
      <button
        ref={buttonRef}
        className={styles.trigger}
        onClick={() => setOpen(o => !o)}
        aria-label="Cambiar tema"
        aria-expanded={open}
        aria-haspopup="menu"
        title={`Tema: ${currentTheme.label}`}
      >
        <span aria-hidden="true">{currentTheme.icon}</span>
      </button>
    </div>
  )
}
