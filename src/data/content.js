/* ===========================================================================
   content.js — all page copy in one place.

   Centralized on purpose: phase two (Field Notes / blog) and phase three
   (The Lab / voting + submissions) extend this module instead of touching
   markup. Copy follows the house style from the design spec: warm, plain,
   ND-affirming. Banned words: "just / simply / obviously / easy". Plain
   words first, the proper term in parentheses second.
   ======================================================================== */

export const site = {
  name: 'Grok Things',
  tagline: 'Software that fits your brain.',
  // NOTE: placeholders — swap for the real channel + inbox before launch.
  youtubeUrl: 'https://www.youtube.com/@grokthings',
  email: 'hello@grokthings.com',
}

export const nav = {
  links: [
    { id: 'about', label: 'About', href: '#about' },
    { id: 'how-it-works', label: 'How it works', href: '#how-it-works' },
    { id: 'faq', label: 'Questions', href: '#faq' },
    { id: 'community', label: 'Community', href: '#community' },
  ],
}

export const hero = {
  h1: 'What if your software actually fit your brain?',
  // Minsky in miniature: the definition arrives as three short framings
  // around one word, not a paragraph to decode.
  word: 'grok',
  framings: [
    'a word Robert Heinlein coined,',
    'to understand something so deeply it becomes part of you,',
    '…including understanding your own brain.',
  ],
  restatement:
    'Grokking means really getting something, down in your bones. We start with the most interesting thing you’ll ever study — you.',
  primaryCta: 'Start grokking your brain',
  primaryHref: '#how-it-works',
  secondaryCta: 'Watch on YouTube',
  reassurance:
    'No coding experience needed. Curiosity is the only prerequisite, and you already brought it.',
}

// Kept for SEO / structured data and future reuse. The hero renders the same
// idea split into framings, so we don't repeat this verbatim on the page.
export const grokDefinition =
  'To grok something is to understand it so completely that it becomes part of you — not facts you memorized, but knowing it down in your bones. Robert Heinlein coined the word, and the most rewarding thing you’ll ever grok is your own brain. Once you really understand how your mind works, you can build small software shaped around it — no coding required.'

// The signature interaction: one subject, seen through three separate
// channels. Each channel is distinguished by HUE + ICON SHAPE + LABEL +
// POSITION — never colour alone.
export const perspectives = {
  heading: 'One idea, seen a few ways.',
  intro:
    'Here’s the whole Grok Things method in one picture. Pick an angle on the same small idea — a reminder that actually works for you — and see how each view adds something.',
  subject: 'A reminder that actually works for you.',
  options: [
    {
      id: 'felt',
      channel: 'green',
      icon: 'heart',
      tabLabel: 'How it feels',
      cardTitle: 'How it feels',
      body: 'A nudge that arrives the way your attention needs it — not a guilt-trip you slowly learn to ignore.',
    },
    {
      id: 'mechanism',
      channel: 'periwinkle',
      icon: 'gears',
      tabLabel: 'How it works',
      cardTitle: 'How it works',
      body: 'A trigger (a time, a place, a tap) hands off to an action (a message, a sound, a note). That handoff is the whole machine.',
    },
    {
      id: 'example',
      channel: 'amber',
      icon: 'spark',
      tabLabel: 'For instance',
      cardTitle: 'For instance',
      body: 'When you get home (location), your phone quietly shows tonight’s one thing. Just one.',
    },
  ],
  footer:
    'This is the whole method: look at one thing from a few angles until at least one of them clicks for your wiring.',
}

export const about = {
  heading: 'Who this is for.',
  body: [
    'Grok Things is a YouTube channel for brains that don’t come standard. We’re for ADHD, autistic, dyslexic, and otherwise differently-wired folks who’ve spent years bending themselves to fit software that was never built for them.',
    'Here we flip it: first you get curious about how your own mind actually works, then you make small, personal tools that fit it. No computer-science degree, no gatekeeping — and no day where you’re behind. Some days have more spoons than others, and that’s allowed.',
  ],
  missionLabel: 'Our mission',
  mission:
    'Help differently-wired people understand their own minds well enough to build personal software shaped around them — no coding required. We don’t teach you to think like a computer; we help you teach the computer to think a little more like you.',
}

export const howItWorks = {
  heading: 'How a Grok Things build goes.',
  steps: [
    {
      n: 1,
      name: 'Observe',
      icon: 'eye',
      body: 'Notice one moment your day snags. That snag is the whole assignment.',
    },
    {
      n: 2,
      name: 'Question',
      icon: 'question',
      body: 'Ask what you actually wish happened instead. Plain words, no tech.',
    },
    {
      n: 3,
      name: 'Try',
      icon: 'flask',
      body: 'Pick a friendly tool and make the smallest version that helps.',
    },
    {
      n: 4,
      name: 'Keep',
      icon: 'bookmark',
      body: 'Keep what fits, toss what doesn’t. The tool serves you, not the other way around.',
    },
  ],
  footer: 'You can stop after any step and come back later. There’s no wrong pace.',
}

export const faq = {
  heading: 'A notebook of questions.',
  intro: 'Short answers up top; open any card to go deeper.',
  // Each answer leads with the reassurance, then offers the idea in more than
  // one framing (plain words + metaphor + concrete example) — Minsky inside
  // the FAQ. Stored as paragraphs for comfortable reading.
  items: [
    {
      id: 'start',
      q: 'How do I start learning?',
      a: [
        'Start tiny — pick one moment in your day that snags, and get curious about it. That’s the whole first step, and you’ve basically already done it by being here.',
        'Plain words: notice a frustration, describe what you wish happened instead, and watch one episode that touches it. Think of it like keeping a little field notebook for your own brain.',
        'For example: “every evening I forget the one thing I meant to do” is a perfect, complete starting point — we build from exactly that kind of sentence. You can go as slowly as you like and come back whenever your energy is there.',
      ],
    },
    {
      id: 'tools',
      q: 'What tools do you recommend?',
      a: [
        'Friendly, no-code and low-code tools that do the heavy lifting for you — the kind where you describe what you want in plain language and the tool builds the machinery.',
        'We lean on things like your phone’s built-in Shortcuts (little automations) and approachable visual builders and AI assistants that turn a sentence into a working tool. We always show the tool on screen, name it in plain words first and its proper name in parentheses, and never assume you’ve used it before.',
        'You don’t need to choose a tool today; each episode walks you to the right one for that build, one calm step at a time.',
      ],
    },
    {
      id: 'coding',
      q: 'Do I need coding experience?',
      a: [
        'No — not one line, not a little, not eventually. If you can describe what would make your day easier in your own words, you can build it here.',
        'We start from your real frustrations and use tools that carry the technical part, so the only thing you bring is curiosity about your own brain — and you already brought that.',
        'Coding is genuinely not the prerequisite; understanding what you actually need is, and no one knows that better than you.',
      ],
    },
    {
      id: 'learning-styles',
      q: 'How does the channel handle different learning styles?',
      a: [
        'By never handing you one rigid “right way.” Every idea on Grok Things is shown from more than one angle — a plain-language explanation, a quick visual, a relatable metaphor, and one concrete example — so at least one of them clicks for your particular wiring.',
        'This is on purpose: real understanding (Marvin Minsky, a pioneer of artificial intelligence, called it seeing a thing from several sides at once) is built from a few perspectives, not handed over in a single take.',
        'Different minds need different care, and the same is true of tools — so we make room for yours and invite you to take whichever angle lands.',
      ],
    },
    {
      id: 'energy',
      q: 'What if I run out of energy partway through?',
      a: [
        'That’s completely allowed, and the site is built for it. Some days have fewer spoons than others, and stopping is not falling behind — there’s no streak to break and no clock counting down.',
        'Every build breaks into small steps you can pause after and return to later; lurking quietly is a perfectly good way to take part. Come back when your battery’s charged. The notebook will still be here.',
      ],
    },
    {
      id: 'diagnosis',
      q: 'Is this only for people with a diagnosis?',
      a: [
        'No. Grok Things is for anyone whose brain doesn’t come off the assembly line — ADHD, autistic, dyslexic, or simply wired your own way — and you don’t need a label, a diagnosis, or anyone’s permission to be here.',
        'If software has ever felt like it was built for a brain that isn’t yours, you’re in the right place. We describe wiring, not deficits: nothing about how you think needs fixing before you’re welcome.',
      ],
    },
  ],
}

export const community = {
  heading: 'Come join the lab.',
  body: 'Subscribe on YouTube, say hi by email, or just lurk happily in the back — there’s no wrong way to show up, and you can leave whenever your battery runs low.',
  subscribeCta: 'Subscribe on YouTube',
  helloCta: 'Send a hello',
  newsletter: {
    label: 'Email (optional)',
    helper: 'Workshop notes, no more than once a month. No spam, ever.',
    placeholder: 'you@example.com',
    button: 'Keep me posted',
    // Phase one collects nothing server-side yet; this is a friendly stub.
    successNote: 'Thanks! This is a phase-one preview, so nothing was sent yet — but your enthusiasm is noted. 💛',
  },
  suggestion: {
    label: 'What should we grok next?',
    prompt:
      'What does your brain wish existed? Tell us what to grok next — your idea might become the next thing we build together.',
    placeholder: 'I wish my phone would…',
    button: 'Send the idea',
    successNote: 'Love it. Saved to the notebook — soon you’ll be able to vote on these too.',
    // Visual + structural seed of phase-three topic voting.
    phaseHint: 'Soon you’ll be able to vote on these, too.',
  },
}

export const accessibility = {
  heading: 'Accessibility, on purpose.',
  body: [
    'This site is built to be comfortable for as many brains and bodies as we can reach. If something here gets in your way, that’s a bug to us — please tell us and we’ll fix it.',
  ],
  points: [
    'Stays readable if our font doesn’t load, and remembers your settings between visits.',
    'Respects your system reduced-motion and font-size settings — plus a reading-font picker right in the top bar.',
    'Colour never carries meaning on its own; everything also has a label, a shape, and a position.',
    'Strong contrast and large, generously-spaced text in both light and dark themes.',
    'Full keyboard support with a visible focus ring everywhere you can go.',
  ],
}

export const footer = {
  links: [
    { label: 'About', href: '#about' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Questions', href: '#faq' },
    { label: 'Community', href: '#community' },
    { label: 'Accessibility', href: '#accessibility' },
  ],
  note: 'This site respects your reduced-motion and system-font settings, and remembers your choices between visits.',
  signoff:
    'Built for the brain you actually have. Come back any time — the notebook will keep filling up.',
}
