/* Faq.jsx — a notebook of questions, built on native <details>/<summary>.
   That gives correct keyboard + ARIA semantics for free and keeps each
   question a real heading in the outline. Every answer leads with the
   reassurance, then offers the idea in more than one framing (Minsky in the
   FAQ). Any card can be open; opening one never closes another. */

import { faq } from '../data/content.js'
import { Icon } from './Icon.jsx'
import './Faq.css'

export function Faq() {
  return (
    <section className="section faq" id="faq" aria-labelledby="faq-title">
      <div className="container container--narrow">
        <p className="section-eyebrow">Questions</p>
        <h2 className="section-title" id="faq-title">
          {faq.heading}
        </h2>
        <p className="section-lead">{faq.intro}</p>

        <div className="faq__list">
          {faq.items.map((item) => (
            <details key={item.id} className="faq__item">
              <summary className="faq__summary">
                <h3 className="faq__q">{item.q}</h3>
                <span className="faq__chevron" aria-hidden="true">
                  <Icon name="chevron" size={22} />
                </span>
              </summary>
              <div className="faq__answer">
                {item.a.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
