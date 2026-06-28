/* useReveal — one-shot, motion-safe scroll reveal.

   Returns a ref + `revealed` flag. Under reduced motion / Calm mode (or when
   IntersectionObserver is unavailable) it reveals immediately, so content is
   never gated behind motion. The reveal fires once, then stops observing. */

import { useEffect, useRef, useState } from 'react'
import { usePreferences } from '../preferences.jsx'

// A stable default so the effect dependency doesn't change every render.
const DEFAULT_REVEAL_OPTIONS = {}

export function useReveal(options = DEFAULT_REVEAL_OPTIONS) {
  const { reducedMotion } = usePreferences()
  const ref = useRef(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    if (revealed) return
    if (reducedMotion || typeof IntersectionObserver === 'undefined') {
      setRevealed(true)
      return
    }
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setRevealed(true)
            observer.disconnect()
            break
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px', ...options },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [reducedMotion, revealed, options])

  return { ref, revealed }
}
