/* TopBar.jsx — calm top bar: wordmark, in-page nav (with active-section
   highlighting), the future "coming soon" homes, and the three controls. */

import { nav, site } from '../data/content.js'
import { useActiveSection } from '../hooks/useActiveSection.js'
import { Icon } from './Icon.jsx'
import { CalmControl, FontControl, ThemeControl } from './Controls.jsx'
import './TopBar.css'

// Stable id list so the IntersectionObserver effect doesn't re-run each render.
const SECTION_IDS = nav.links.map((l) => l.id)

export function TopBar() {
  const active = useActiveSection(SECTION_IDS)

  return (
    <header className="topbar" id="top">
      <div className="container topbar__inner">
        <a className="topbar__brand" href="#top">
          <span className="topbar__brandmark" aria-hidden="true">
            <Icon name="brand" size={26} />
          </span>
          <span className="topbar__brandname">{site.name}</span>
        </a>

        <nav className="topbar__nav" aria-label="Primary">
          <ul className="topbar__navlist">
            {nav.links.map((l) => (
              <li key={l.id}>
                <a
                  className="topbar__navlink"
                  href={l.href}
                  aria-current={active === l.id ? 'page' : undefined}
                >
                  {l.label}
                </a>
              </li>
            ))}
            {nav.comingSoon.map((c) => (
              <li key={c.label}>
                {/* Non-interactive, clearly labelled future homes. */}
                <span className="chip chip--soon topbar__soon">
                  {c.label} <span className="chip__note">· {c.note}</span>
                </span>
              </li>
            ))}
          </ul>
        </nav>

        <div className="topbar__controls" role="group" aria-label="Reading preferences">
          <ThemeControl />
          <CalmControl />
          <FontControl />
        </div>
      </div>
    </header>
  )
}
