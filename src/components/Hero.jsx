/* Hero.jsx — teaches "grok" with zero jargon gate. The definition arrives as
   three short framings around one word (Minsky in miniature), rendered as a
   real list so assistive tech reads all three. The underline draws itself once
   on load and is simply already-drawn under reduced motion / Calm mode. */

import { hero, site } from '../data/content.js'
import { Icon } from './Icon.jsx'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <p className="hero__kicker">A calm lab for your brain</p>

        <h1 className="hero__title" id="hero-title">
          {hero.h1}
        </h1>

        <div className="hero__def">
          <p className="hero__word">
            <span className="hero__word-text">{hero.word}</span>
            <svg
              className="hero__underline"
              viewBox="0 0 240 16"
              preserveAspectRatio="none"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M4 10c40 5 95 5 150 1 30-2 60-4 82-5" />
            </svg>
          </p>

          <p className="hero__def-intro">
            <span className="visually-hidden">The word grok means: </span>
            one word, three ways&nbsp;—
          </p>

          <ul className="hero__framings">
            {hero.framings.map((f, i) => (
              <li key={i} className="hero__framing">
                <span className="hero__framing-arrow" aria-hidden="true">
                  <Icon name="arrow" size={20} />
                </span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="hero__restatement">{hero.restatement}</p>

        <div className="hero__cta">
          <a className="btn btn--primary" href={hero.primaryHref}>
            {hero.primaryCta}
          </a>
          <a
            className="btn btn--secondary"
            href={site.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="youtube" size={20} />
            {hero.secondaryCta}
            <span className="visually-hidden"> (opens YouTube in a new tab)</span>
          </a>
        </div>

        <p className="hero__reassurance">{hero.reassurance}</p>
      </div>
    </section>
  )
}
