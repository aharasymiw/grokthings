/* Icon.jsx — inline SVG icon set.

   No icon fonts. Every glyph is decorative: aria-hidden + focusable=false,
   drawn with currentColor so it inherits the surrounding text colour. Meaning
   is always carried by an adjacent text label, never by the icon alone.
   Friendly, hand-drawn feel: round caps/joins, consistent 24x24 grid. */

function Svg({ size = 24, strokeWidth = 1.9, children, ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  )
}

const GLYPHS = {
  // Brand: a lightbulb = the spark of grokking.
  brand: (
    <>
      <path d="M12 3a6 6 0 0 0-4 10.5c.8.8 1.1 1.4 1.1 2.5h5.8c0-1.1.3-1.7 1.1-2.5A6 6 0 0 0 12 3z" />
      <path d="M9.4 19h5.2M10.2 21.5h3.6" />
    </>
  ),

  // Perspective channels
  heart: (
    <path d="M12 20s-6.5-4-8.6-8.2C2 8.6 3.7 5.5 6.7 5.5c1.9 0 3 1.1 3.5 2.1.5-1 1.6-2.1 3.5-2.1 3 0 4.7 3.1 3.3 6.3C18.5 16 12 20 12 20z" />
  ),
  gears: (
    <>
      <circle cx="6" cy="12" r="2.4" />
      <circle cx="18" cy="12" r="2.4" />
      <path d="M8.5 12h5.2M12.1 9.4l2.6 2.6-2.6 2.6" />
    </>
  ),
  spark: (
    <path d="M12 3.5l1.7 4.6 4.8 1.7-4.8 1.7L12 16.2l-1.7-4.7L5.5 9.8l4.8-1.7z" />
  ),

  // How-it-works steps
  eye: (
    <>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  question: (
    <>
      <path d="M9.2 9.2a3 3 0 1 1 4.3 2.8c-1 .5-1.5 1.2-1.5 2.3" />
      <path d="M12 17.4h.01" />
    </>
  ),
  flask: (
    <>
      <path d="M9 3h6M10 3v5.2L5.3 17a2 2 0 0 0 1.8 3h9.8a2 2 0 0 0 1.8-3L14 8.2V3" />
      <path d="M8 14h8" />
    </>
  ),
  bookmark: <path d="M6.5 3.5h11v17l-5.5-3.8L6.5 20.5z" />,

  // Controls
  sun: (
    <>
      <circle cx="12" cy="12" r="3.8" />
      <path d="M12 2.5v2.3M12 19.2v2.3M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.3M19.2 12h2.3M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6" />
    </>
  ),
  moon: <path d="M20.5 13.2A8 8 0 1 1 10.8 3.5a6.4 6.4 0 0 0 9.7 9.7z" />,
  auto: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v18" />
      <path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor" stroke="none" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,

  // Links / actions
  youtube: (
    <>
      <rect x="2.5" y="5.5" width="19" height="13" rx="3.2" />
      <path d="M10 9.4l5 2.6-5 2.6z" fill="currentColor" stroke="none" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.4" />
      <path d="M3.5 7.5 12 13l8.5-5.5" />
    </>
  ),
  send: <path d="M21.5 2.5 11 13M21.5 2.5l-6.7 19-3.8-8.5L2.5 9.2z" />,
  arrow: <path d="M4 12h13M12.5 6.5 18 12l-5.5 5.5" />,
  chevron: <path d="M6 9.5 12 15.5l6-6" />,
  external: (
    <>
      <path d="M14 4h6v6M20 4l-9 9" />
      <path d="M18 13.5V19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 4 19V8a1.5 1.5 0 0 1 1.5-1.5H11" />
    </>
  ),

  // Form feedback (always paired with words, never colour-only)
  check: <path d="M4.5 12.5l4.5 4.5 10.5-11" />,
  alert: (
    <>
      <path d="M12 3.5 21 19.5H3z" />
      <path d="M12 10v4M12 16.7h.01" />
    </>
  ),
}

export function Icon({ name, ...rest }) {
  const glyph = GLYPHS[name]
  if (!glyph) return null
  return <Svg {...rest}>{glyph}</Svg>
}

export const ICON_NAMES = Object.keys(GLYPHS)
