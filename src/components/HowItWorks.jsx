/* HowItWorks.jsx — a calm four-step loop (Observe · Question · Try · Keep),
   framed as friendly experiment steps, never a productivity ladder. Cards
   reveal once with a gentle staggered drift, and appear instantly under
   reduced motion / Calm mode. */

import { howItWorks } from '../data/content.js'
import { Reveal } from './Reveal.jsx'
import { Icon } from './Icon.jsx'
import './HowItWorks.css'

export function HowItWorks() {
  return (
    <section
      className="section section--sunken how"
      id="how-it-works"
      aria-labelledby="how-title"
    >
      <div className="container">
        <p className="section-eyebrow">How it works</p>
        <h2 className="section-title" id="how-title">
          {howItWorks.heading}
        </h2>

        <ol className="how__list">
          {howItWorks.steps.map((step, i) => (
            <Reveal as="li" key={step.n} delay={i * 90} className="how__item">
              <div className="how__card card">
                <div className="how__top">
                  <span className="how__num" aria-hidden="true">
                    {step.n}
                  </span>
                  <span className="how__icon" aria-hidden="true">
                    <Icon name={step.icon} size={26} />
                  </span>
                </div>
                <h3 className="how__name">{step.name}</h3>
                <p className="how__body">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <p className="how__footnote">{howItWorks.footer}</p>
      </div>
    </section>
  )
}
