/* AccessibilityNote.jsx — a short, plain-language accessibility statement.
   Linked from the footer; reachable at #accessibility. */

import { accessibility } from '../data/content.js'
import { Icon } from './Icon.jsx'
import './AccessibilityNote.css'

export function AccessibilityNote() {
  return (
    <section className="section section--tight access" id="accessibility" aria-labelledby="access-title">
      <div className="container container--narrow">
        <p className="section-eyebrow">Accessibility</p>
        <h2 className="section-title" id="access-title">
          {accessibility.heading}
        </h2>
        {accessibility.body.map((para, i) => (
          <p key={i} className="access__body">
            {para}
          </p>
        ))}
        <ul className="access__list">
          {accessibility.points.map((point, i) => (
            <li key={i} className="access__point">
              <span className="access__check" aria-hidden="true">
                <Icon name="check" size={20} />
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
