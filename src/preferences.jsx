/* ===========================================================================
   preferences.jsx — reader-agency layer (theme / reading font)

   The single source of truth for the ND-affirming controls. State is mirrored
   onto <html data-theme data-font> (so CSS reacts) and persisted to
   localStorage. `reducedMotion` follows the OS prefers-reduced-motion setting,
   which gates the page's scroll reveals and the hero underline draw.
   ======================================================================== */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

const THEME_KEY = 'grok-theme' // shared with public/theme-init.js
const FONT_KEY = 'grok-font'

export const THEMES = ['auto', 'light', 'dark']
export const FONTS = [
  { id: 'atkinson', label: 'Atkinson', hint: 'Hyperlegible (default)' },
  { id: 'comicsans', label: 'Comic Sans', hint: 'playful & friendly' },
  { id: 'system', label: 'System', hint: 'your device font' },
  { id: 'spacing', label: 'Extra spacing', hint: 'roomier lines' },
  { id: 'opendyslexic', label: 'OpenDyslexic', hint: 'weighted letters' },
]

const html = () => document.documentElement

function read(key, allowed, fallback) {
  try {
    const v = localStorage.getItem(key)
    return allowed.includes(v) ? v : fallback
  } catch {
    return fallback
  }
}

function write(key, value) {
  try {
    localStorage.setItem(key, value)
  } catch {
    /* storage blocked — preference still applies for this visit */
  }
}

function remove(key) {
  try {
    localStorage.removeItem(key)
  } catch {
    /* ignore */
  }
}

// OpenDyslexic ships its files lazily — only fetched if a reader picks it.
let openDyslexicLoading = null
function ensureOpenDyslexic() {
  if (openDyslexicLoading) return openDyslexicLoading
  openDyslexicLoading = Promise.all([
    import('@fontsource/opendyslexic/latin-400.css'),
    import('@fontsource/opendyslexic/latin-700.css'),
  ]).catch(() => {
    // If it fails to load, the Atkinson fallback in the stack keeps text readable.
    openDyslexicLoading = null
  })
  return openDyslexicLoading
}

const PreferencesContext = createContext(null)

export function PreferencesProvider({ children }) {
  const [theme, setThemeState] = useState(() => read(THEME_KEY, THEMES, 'auto'))
  const [font, setFontState] = useState(() =>
    read(FONT_KEY, FONTS.map((f) => f.id), 'atkinson'),
  )
  const [osReducedMotion, setOsReducedMotion] = useState(false)

  // Watch the OS reduced-motion preference.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setOsReducedMotion(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  // Apply theme to the document + persist.
  useEffect(() => {
    html().setAttribute('data-theme', theme)
    if (theme === 'auto') remove(THEME_KEY)
    else write(THEME_KEY, theme)
  }, [theme])

  // Apply reading font (loading OpenDyslexic on demand).
  useEffect(() => {
    html().setAttribute('data-font', font)
    write(FONT_KEY, font)
    if (font === 'opendyslexic') ensureOpenDyslexic()
  }, [font])

  const setTheme = useCallback((t) => setThemeState(THEMES.includes(t) ? t : 'auto'), [])
  const cycleTheme = useCallback(
    () =>
      setThemeState((t) => {
        const order = ['light', 'dark', 'auto']
        return order[(order.indexOf(t) + 1) % order.length]
      }),
    [],
  )
  const setFont = useCallback((f) => setFontState(f), [])

  const reducedMotion = osReducedMotion

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      cycleTheme,
      font,
      setFont,
      reducedMotion,
    }),
    [theme, setTheme, cycleTheme, font, setFont, reducedMotion],
  )

  return (
    <PreferencesContext.Provider value={value}>
      {children}
    </PreferencesContext.Provider>
  )
}

export function usePreferences() {
  const ctx = useContext(PreferencesContext)
  if (!ctx) throw new Error('usePreferences must be used within PreferencesProvider')
  return ctx
}
