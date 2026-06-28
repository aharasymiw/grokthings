/* Community.jsx — low-pressure ways to connect, plus the "what should we grok
   next?" input that visually + structurally seeds phase-three voting.

   Phase one stores nothing server-side, and the success notes say so plainly
   (honest over slick). Form feedback is conveyed by words + icon + an
   aria-live region, never by colour alone. */

import { useState } from 'react'
import { community, site } from '../data/content.js'
import { Icon } from './Icon.jsx'
import './Community.css'

function Feedback({ id, status }) {
  if (!status) return null
  return (
    <p id={id} className={`community__status community__status--${status.type}`} role="status">
      <Icon name={status.type === 'error' ? 'alert' : 'check'} size={18} />
      <span>{status.message}</span>
    </p>
  )
}

export function Community() {
  const [email, setEmail] = useState('')
  const [emailStatus, setEmailStatus] = useState(null)
  const [idea, setIdea] = useState('')
  const [ideaStatus, setIdeaStatus] = useState(null)

  const submitEmail = (event) => {
    event.preventDefault()
    if (!/.+@.+\..+/.test(email.trim())) {
      setEmailStatus({ type: 'error', message: 'That email looks incomplete — mind checking it?' })
      return
    }
    setEmailStatus({ type: 'success', message: community.newsletter.successNote })
    setEmail('')
  }

  const submitIdea = (event) => {
    event.preventDefault()
    if (idea.trim().length < 3) {
      setIdeaStatus({ type: 'error', message: 'Even a few words is plenty — what snags in your day?' })
      return
    }
    setIdeaStatus({ type: 'success', message: community.suggestion.successNote })
    setIdea('')
  }

  return (
    <section className="section section--sunken community" id="community" aria-labelledby="community-title">
      <div className="container">
        <p className="section-eyebrow">Community</p>
        <h2 className="section-title" id="community-title">
          {community.heading}
        </h2>
        <p className="section-lead">{community.body}</p>

        <div className="community__actions">
          <a className="btn btn--primary" href={site.youtubeUrl} target="_blank" rel="noopener noreferrer">
            <Icon name="youtube" size={20} />
            {community.subscribeCta}
            <span className="visually-hidden"> (opens YouTube in a new tab)</span>
          </a>
          <a className="btn btn--secondary" href={`mailto:${site.email}`}>
            <Icon name="mail" size={20} />
            {community.helloCta}
          </a>
        </div>

        <div className="community__cards">
          {/* Newsletter (phase-one stub) */}
          <form className="community__card card" onSubmit={submitEmail} noValidate>
            <label className="community__label" htmlFor="news-email">
              {community.newsletter.label}
            </label>
            <p className="community__help" id="news-help">
              {community.newsletter.helper}
            </p>
            <div className="community__row">
              <input
                id="news-email"
                className="community__input"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder={community.newsletter.placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-describedby={`news-help${emailStatus ? ' news-status' : ''}`}
                aria-invalid={emailStatus?.type === 'error' || undefined}
              />
              <button type="submit" className="btn btn--primary">
                {community.newsletter.button}
              </button>
            </div>
            <Feedback id="news-status" status={emailStatus} />
          </form>

          {/* "What should we grok next?" — seed of phase-three voting */}
          <form className="community__card card" onSubmit={submitIdea} noValidate>
            <label className="community__label" htmlFor="grok-next">
              {community.suggestion.label}
            </label>
            <p className="community__help" id="grok-next-help">
              {community.suggestion.prompt}
            </p>
            <textarea
              id="grok-next"
              className="community__textarea"
              rows={3}
              placeholder={community.suggestion.placeholder}
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              aria-describedby={`grok-next-help${ideaStatus ? ' grok-next-status' : ''}`}
              aria-invalid={ideaStatus?.type === 'error' || undefined}
            />
            <div className="community__row community__row--end">
              <span className="community__hint">{community.suggestion.phaseHint}</span>
              <button type="submit" className="btn btn--secondary">
                <Icon name="send" size={18} />
                {community.suggestion.button}
              </button>
            </div>
            <Feedback id="grok-next-status" status={ideaStatus} />
          </form>
        </div>
      </div>
    </section>
  )
}
