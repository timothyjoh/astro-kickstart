import themeObject from 'daisyui/theme/object.js'
import { daisyuiThemes } from '../../tailwind.config.mjs'

export const DEFAULT_THEME = 'light'
export const THEME_STORAGE_KEY = 'astro-theme-preference'

const builtinThemes = Object.keys(themeObject)

const configThemes = Array.isArray(daisyuiThemes) ? daisyuiThemes : []

const uniqueThemes = Array.from(new Set([...(configThemes.length ? configThemes : builtinThemes), DEFAULT_THEME]))
const sortedThemes = [...uniqueThemes].sort((a, b) => a.localeCompare(b))

export function getAvailableThemes(): string[] {
  return [...sortedThemes]
}

export function applyTheme(theme: string): void {
  if (typeof document === 'undefined') return
  if (!theme) return
  document.documentElement.dataset.theme = theme
}

export function loadStoredTheme(storageKey: string = THEME_STORAGE_KEY): string | null {
  if (typeof window === 'undefined') return null
  try {
    const stored = window.localStorage.getItem(storageKey)
    if (!stored) return null
    if (sortedThemes.includes(stored)) return stored
    return null
  } catch (error) {
    return null
  }
}

export function persistTheme(theme: string, storageKey: string = THEME_STORAGE_KEY): void {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(storageKey, theme)
  } catch (error) {
    // Swallow storage errors to preserve UX in restricted environments
  }
}
