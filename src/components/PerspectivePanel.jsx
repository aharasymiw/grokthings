/* PerspectivePanel.jsx — the page's load-bearing interaction and a literal
   Minsky mechanic: one subject, seen through three separate channels.

   Built as a WAI-ARIA tablist with roving tabindex:
     · Left/Right (and Up/Down) arrows move between markers
     · Home / End jump to first / last
     · Enter / Space (native <button>) and arrow-focus both select
   Selection follows focus (automatic activation). Each channel is told apart
   by hue + icon shape + text label + position — never colour alone. The
   panel cross-fades with opacity only, and appears instantly under reduced
   motion. Nothing here is hover-only. */

import { useRef, useState } from 'react'
import { perspectives } from '../data/content.js'
import { Reveal } from './Reveal.jsx'
import { Icon } from './Icon.jsx'
import './PerspectivePanel.css'

export function PerspectivePanel() {
  const { heading, intro, subject, options, footer } = perspectives
  const [active, setActive] = useState(0)
  const tabRefs = useRef([])

  const focusTab = (index) => {
    const next = (index + options.length) % options.length
    setActive(next)
    tabRefs.current[next]?.focus()
  }

  const onKeyDown = (event) => {
    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        event.preventDefault()
        focusTab(active + 1)
        break
      case 'ArrowLeft':
      case 'ArrowUp':
        event.preventDefault()
        focusTab(active - 1)
        break
      case 'Home':
        event.preventDefault()
        focusTab(0)
        break
      case 'End':
        event.preventDefault()
        focusTab(options.length - 1)
        break
      default:
        break
    }
  }

  const current = options[active]

  return (
    <section className="perspectives section section--sunken" aria-labelledby="persp-title">
      <div className="container">
        <p className="section-eyebrow">The whole method, in one picture</p>
        <h2 className="section-title" id="persp-title">
          {heading}
        </h2>
        <p className="section-lead">{intro}</p>

        <Reveal className="perspectives__stage">
          <div className="perspectives__subject">
            <span className="perspectives__subject-tag">One idea</span>
            <p className="perspectives__subject-text">{subject}</p>
          </div>

          <div
            className="perspectives__tabs"
            role="tablist"
            aria-label="Three ways to see one idea"
            aria-orientation="horizontal"
            onKeyDown={onKeyDown}
          >
            {options.map((o, i) => (
              <button
                key={o.id}
                type="button"
                role="tab"
                id={`ptab-${o.id}`}
                aria-selected={i === active}
                aria-controls={`ppanel-${o.id}`}
                tabIndex={i === active ? 0 : -1}
                ref={(el) => {
                  tabRefs.current[i] = el
                }}
                className={`perspectives__tab pchannel--${o.channel}${i === active ? ' is-selected' : ''}`}
                onClick={() => setActive(i)}
              >
                <span className="perspectives__tab-icon" aria-hidden="true">
                  <Icon name={o.icon} size={22} />
                </span>
                <span>{o.tabLabel}</span>
              </button>
            ))}
          </div>

          <div
            key={current.id}
            role="tabpanel"
            id={`ppanel-${current.id}`}
            aria-labelledby={`ptab-${current.id}`}
            tabIndex={0}
            className={`perspectives__panel pchannel--${current.channel} fade-in`}
          >
            <h3 className="perspectives__panel-title">
              <span className="perspectives__panel-icon" aria-hidden="true">
                <Icon name={current.icon} size={24} />
              </span>
              {current.cardTitle}
            </h3>
            <p className="perspectives__panel-body">{current.body}</p>
          </div>
        </Reveal>

        <p className="perspectives__footnote">{footer}</p>
      </div>
    </section>
  )
}
