/* Controls.jsx — the three reader-agency controls in the top bar.
   Each has a persistent text label (never icon-only), so they can never read
   as broken or disabled. State is announced to assistive tech via the control
   semantics (button label, aria-pressed, <select>), not by colour alone. */

import { FONTS, usePreferences } from '../preferences.jsx'
import { Icon } from './Icon.jsx'

const THEME_META = {
  auto: { icon: 'auto', label: 'Auto', next: 'Light' },
  light: { icon: 'sun', label: 'Light', next: 'Dark' },
  dark: { icon: 'moon', label: 'Dark', next: 'Auto' },
}

export function ThemeControl() {
  const { theme, cycleTheme } = usePreferences()
  const meta = THEME_META[theme]
  return (
    <button
      type="button"
      className="control"
      onClick={cycleTheme}
      aria-label={`Theme: ${meta.label}. Activate to switch to ${meta.next}.`}
      title={`Theme: ${meta.label}`}
    >
      <Icon name={meta.icon} size={20} />
      <span className="control__text">{meta.label}</span>
    </button>
  )
}

export function CalmControl() {
  const { calm, toggleCalm } = usePreferences()
  return (
    <button
      type="button"
      className={`control${calm ? ' is-on' : ''}`}
      onClick={toggleCalm}
      aria-pressed={calm}
      title="Calm mode turns off all motion"
    >
      <Icon name={calm ? 'check' : 'calm'} size={20} />
      <span className="control__text">Calm{calm ? ' on' : ''}</span>
    </button>
  )
}

export function FontControl() {
  const { font, setFont } = usePreferences()
  return (
    <span className="control control--field">
      <Icon name="font" size={20} />
      <label htmlFor="reading-font" className="control__text">
        Reading&nbsp;font
      </label>
      <select
        id="reading-font"
        className="control__select"
        value={font}
        onChange={(e) => setFont(e.target.value)}
      >
        {FONTS.map((f) => (
          <option key={f.id} value={f.id}>
            {f.label}
          </option>
        ))}
      </select>
    </span>
  )
}
