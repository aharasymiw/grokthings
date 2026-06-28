/* SiteFooter.jsx — quiet colophon: a small link list, the resilience note,
   and a gentle ND-affirming sign-off. No dense link farm, no social widgets. */

import { footer, site } from '../data/content.js'
import { Icon } from './Icon.jsx'
import './SiteFooter.css'

export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__mark" aria-hidden="true">
            <Icon name="brand" size={24} />
          </span>
          <span className="footer__name">{site.name}</span>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          <ul className="footer__links">
            {footer.links.map((l) => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
            <li>
              <a href={site.youtubeUrl} target="_blank" rel="noopener noreferrer">
                YouTube
                <Icon name="external" size={14} />
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>Contact</a>
            </li>
          </ul>
        </nav>

        <p className="footer__note">{footer.note}</p>
        <p className="footer__signoff">{footer.signoff}</p>
        <p className="footer__legal">
          © {year} {site.name}. Made with care for differently-wired minds.
        </p>
      </div>
    </footer>
  )
}
