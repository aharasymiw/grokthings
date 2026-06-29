/* TopBar.jsx — calm top bar: wordmark, in-page nav (with active-section
   highlighting), and the reading controls. It stays pinned to the top while
   you scroll. On narrow screens the nav + controls collapse behind a "Menu"
   disclosure button in the upper right; on wider screens they sit inline. */

import { useEffect, useRef, useState } from 'react'
import { nav, site } from '../data/content.js'
import { useActiveSection } from '../hooks/useActiveSection.js'
import { Icon } from './Icon.jsx'
import { FontControl, ThemeControl } from './Controls.jsx'
import './TopBar.css'

// Stable id list so the IntersectionObserver effect doesn't re-run each render.
const SECTION_IDS = nav.links.map((l) => l.id)
const MENU_ID = 'topbar-menu'

export function TopBar() {
  const active = useActiveSection(SECTION_IDS)
  const [menuOpen, setMenuOpen] = useState(false)
  const headerRef = useRef(null)

  // While the menu is open, Escape closes it and a tap/click outside the header
  // dismisses it. Listeners are only attached while open, so there's no idle cost.
  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    const onPointerDown = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [menuOpen])

  return (
    <header className="topbar" id="top" data-menu-open={menuOpen} ref={headerRef}>
      <div className="container topbar__inner">
        <a className="topbar__brand" href="#top">
          <span className="topbar__brandmark" aria-hidden="true">
            <Icon name="brand" size={26} />
          </span>
          <span className="topbar__brandname">{site.name}</span>
        </a>

        {/* Only shown on narrow screens (CSS). A disclosure for the menu below. */}
        <button
          type="button"
          className="control topbar__menubtn"
          aria-expanded={menuOpen}
          aria-controls={MENU_ID}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Icon name="menu" size={20} />
          <span className="control__text">Menu</span>
        </button>

        <div className="topbar__collapse" id={MENU_ID}>
          <nav className="topbar__nav" aria-label="Primary">
            <ul className="topbar__navlist">
              {nav.links.map((l) => (
                <li key={l.id}>
                  <a
                    className="topbar__navlink"
                    href={l.href}
                    aria-current={active === l.id ? 'page' : undefined}
                    onClick={() => setMenuOpen(false)}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="topbar__controls" role="group" aria-label="Reading preferences">
            <ThemeControl />
            <FontControl />
          </div>
        </div>
      </div>
    </header>
  )
}
