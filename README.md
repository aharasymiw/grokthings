# Grok Things — landing page

The companion site for **Grok Things**, a YouTube channel that helps
neurodivergent and differently-wired people build personalized software that
fits *their* brain — no coding experience required.

This is **phase one**: a calm, deeply accessible discovery-and-context landing
page. Phase two adds a blog (*Field Notes*); phase three adds an interactive app
(*The Lab*) with topic voting and community submissions. The page is built so
those drop in without a redesign — the same tokens, components, and content
module extend forward.

> _“To grok something is to understand it so completely that it becomes part of
> you.”_ The design honours Marvin Minsky's principle that real understanding
> takes **multiple perspectives** — which is also how the visual direction was
> chosen (several concepts generated, judged, and synthesized; see
> `design/build-spec.json`).

---

## Tech stack

Deliberately minimal:

- **React 19** + **Vite 8** (`@vitejs/plugin-react`)
- **Vanilla CSS** — design tokens + a handful of co-located component
  stylesheets. No CSS framework, no CSS-in-JS.
- **Self-hosted fonts** via Fontsource (Atkinson Hyperlegible; OpenDyslexic
  loaded only on demand). No external font/CDN requests.
- Ships as a static bundle to **Cloudflare Pages**.

## Local development

```bash
npm install
npm run dev       # start the dev server (http://localhost:5173)
npm run build     # production build → dist/
npm run preview   # serve the production build locally
```

Requires Node 18+ (developed on Node 24).

## Project structure

```
index.html              # app shell, meta tags, no-flash theme bootstrap
public/
  _headers              # Cloudflare Pages: security headers + asset caching (CSP)
  _redirects            # Cloudflare Pages: SPA fallback
  theme-init.js         # sets the saved theme before first paint (no flash)
  favicon.svg
src/
  main.jsx              # entry; conditionally loads the webfont (skips on Save-Data)
  App.jsx               # assembles the page
  preferences.jsx       # theme / style / reading-font state + localStorage
  data/content.js       # ALL page copy lives here (edit this to change words)
  hooks/                # useReveal (motion-safe), useActiveSection (nav highlight)
  components/           # one component + its .css each
  styles/               # tokens.css, base.css, layout.css, ui.css, index.css,
                        # style-felt.css + style-lisafrank.css (whole-site skins)
design/build-spec.json  # the synthesized design spec this page was built from
```

**To change wording**, edit `src/data/content.js` — components read from it, so
copy never lives in markup.

## Accessibility

Accessibility is a first-class requirement here, not a polish pass:

- **Contrast:** every text/UI colour pair meets WCAG AA in both light and dark
  themes (verified ≥ 4.5:1 body, ≥ 3:1 large/UI — lowest pair is 5.0:1).
- **Colourblind-safe:** the three "perspective" channels use three separated
  hue families (green / periwinkle / amber) and meaning is *always* reinforced
  by a text label, an icon shape, and a position — never colour alone.
- **Semantic HTML:** one `<h1>`, ordered headings, `header/nav/main/footer`
  landmarks, real lists/buttons/links, and a native `<details>`/`<summary>` FAQ.
- **Keyboard:** skip-to-content link, visible focus ring everywhere, and the
  perspective switcher is a full ARIA tablist with roving tabindex (arrows /
  Home / End / Enter / Space).
- **Motion:** the still state is the default; nothing loops or autoplays.
  Respects `prefers-reduced-motion`, plus a manual **Calm mode** for the many
  people who never set the OS flag.
- **Reader agency:** in-page **Theme**, **Style** (Calm / Felt / Lisa Frank —
  whole-site skins, each with AA-checked light *and* dark palettes), and
  **Reading font** (Atkinson Hyperlegible / Comic Sans / System / extra
  spacing / OpenDyslexic) controls, remembered between visits. An explicit
  reading-font pick always outranks a style's display font.
- **Typography:** Atkinson Hyperlegible for body and headings, 18px+ base,
  generous spacing, left-aligned (never justified), 60–66ch measure.

## Before launch — replace these placeholders

In `src/data/content.js`, update the `site` object:

```js
youtubeUrl: 'https://www.youtube.com/@grokthings',  // ← real channel
email: 'hello@grokthings.com',                       // ← real inbox
```

The newsletter and "what should we grok next?" inputs are **phase-one stubs**
(they validate and confirm, but send nothing server-side yet — the success
messages say so). Phase three wires them to real storage + voting.

## Deploying to Cloudflare Pages

The build is a plain static site, so deployment is simple.

### Option A — Git integration (recommended)

1. Push this repo to GitHub/GitLab.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to
   Git**, and pick the repo.
3. Build settings:
   - **Framework preset:** None (or Vite)
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Deploy. Every push builds and publishes automatically.

### Option B — Direct upload with Wrangler

```bash
npm run build
npx wrangler pages deploy dist --project-name grokthings
```

`public/_headers` and `public/_redirects` are copied into `dist/` at build time,
so Cloudflare applies the security headers (including a strict Content-Security-
Policy) and the SPA fallback automatically. Point the `grokthings.com` custom
domain at the Pages project in the dashboard.

## Roadmap

- **Phase 1 (this):** discovery + context landing page.
- **Phase 2 — Field Notes:** a blog; reuses the card + accordion components and
  the Minsky multi-framing pattern.
- **Phase 3 — The Lab:** topic voting (built on the existing "grok next" input),
  community submissions (new perspective cards on a shared board), and
  interactive resources (reusing the tablist + details/summary patterns).
