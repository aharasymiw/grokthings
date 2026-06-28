/* About.jsx — who Grok Things is for + the mission, in warm, anti-deficit
   language. The mission is pinned as an amber index card (dark ink on amber
   fill — the amber guardrail in action). */

import { about } from '../data/content.js'
import { Reveal } from './Reveal.jsx'
import './About.css'

export function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="container about__grid">
        <div className="about__intro">
          <p className="section-eyebrow">About the channel</p>
          <h2 className="section-title" id="about-title">
            {about.heading}
          </h2>
          {about.body.map((para, i) => (
            <p key={i} className="about__para">
              {para}
            </p>
          ))}
        </div>

        <Reveal as="aside" className="about__mission" aria-label="Our mission">
          <p className="about__mission-label">{about.missionLabel}</p>
          <p className="about__mission-text">{about.mission}</p>
        </Reveal>
      </div>
    </section>
  )
}
