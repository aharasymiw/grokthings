/* Reveal — wraps content in a one-shot, motion-safe scroll reveal.
   Pass `delay` (ms) to stagger siblings; the delay only applies to the
   transition, and the whole thing is inert under reduced motion / Calm mode. */

import { useReveal } from '../hooks/useReveal.js'

export function Reveal({ as: Tag = 'div', delay = 0, className = '', style, children, ...rest }) {
  const { ref, revealed } = useReveal()
  const classes = ['reveal', revealed ? 'reveal--in' : '', className].filter(Boolean).join(' ')
  return (
    <Tag
      ref={ref}
      className={classes}
      style={delay ? { ...style, transitionDelay: `${delay}ms` } : style}
      {...rest}
    >
      {children}
    </Tag>
  )
}
