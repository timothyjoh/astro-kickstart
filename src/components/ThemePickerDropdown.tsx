import { useEffect, useMemo, useState, type ChangeEvent } from 'react'

type ThemePickerDropdownProps = {
  themes: string[]
  defaultTheme?: string
  storageKey?: string
  onThemeChange?: (theme: string) => void
}

import { applyTheme, DEFAULT_THEME, loadStoredTheme, persistTheme, THEME_STORAGE_KEY } from '@/lib/theme'

export function ThemePickerDropdown({
  themes,
  defaultTheme = DEFAULT_THEME,
  storageKey = THEME_STORAGE_KEY,
  onThemeChange,
}: ThemePickerDropdownProps) {
  const orderedThemes = useMemo(() => {
    const uniqueThemes = Array.from(new Set(themes))
    const remaining = uniqueThemes.filter((theme) => theme !== defaultTheme)
    return [defaultTheme, ...remaining].filter(Boolean)
  }, [themes, defaultTheme])

  const allowedThemes = useMemo(() => new Set(orderedThemes), [orderedThemes])

  const [selectedTheme, setSelectedTheme] = useState(defaultTheme)

  useEffect(() => {
    const storedTheme = loadStoredTheme(storageKey)
    const nextTheme = storedTheme && allowedThemes.has(storedTheme) ? storedTheme : defaultTheme
    console.log({ storedTheme, nextTheme })
    setSelectedTheme(nextTheme)
    applyTheme(nextTheme)
  }, [allowedThemes, defaultTheme, storageKey])

  useEffect(() => {
    const storedTheme = loadStoredTheme(storageKey)
    const nextTheme = storedTheme && allowedThemes.has(storedTheme) ? storedTheme : defaultTheme
    console.log({ storedTheme, nextTheme })
    setSelectedTheme(nextTheme)
  }, [])

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextTheme = event.target.value
    setSelectedTheme(nextTheme)
    persistTheme(nextTheme, storageKey)
    applyTheme(nextTheme)
    onThemeChange?.(nextTheme)
  }

  return (
    <div className="flex items-center gap-2">
      <label htmlFor="theme-picker" className="sr-only">
        Theme
      </label>
      <select
        id="theme-picker"
        data-testid="theme-picker"
        className="select select-bordered select-sm min-w-[10rem]"
        value={selectedTheme}
        onChange={handleChange}
        aria-label="Theme"
      >
        {orderedThemes.map((theme) => (
          <option key={theme} value={theme}>
            {theme}
          </option>
        ))}
      </select>
    </div>
  )
}

export default ThemePickerDropdown
