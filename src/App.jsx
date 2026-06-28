/* App.jsx — assembles the single landing page.

   Order honours the brief: explain grokking → enact Minsky's multiple
   perspectives → who it's for + mission → how it works → questions →
   community → accessibility → footer. Everything lives inside the
   PreferencesProvider so theme / Calm mode / reading font apply everywhere. */

import { PreferencesProvider } from './preferences.jsx'
import { SkipLink } from './components/SkipLink.jsx'
import { TopBar } from './components/TopBar.jsx'
import { Hero } from './components/Hero.jsx'
import { PerspectivePanel } from './components/PerspectivePanel.jsx'
import { About } from './components/About.jsx'
import { HowItWorks } from './components/HowItWorks.jsx'
import { Faq } from './components/Faq.jsx'
import { Community } from './components/Community.jsx'
import { AccessibilityNote } from './components/AccessibilityNote.jsx'
import { SiteFooter } from './components/SiteFooter.jsx'

export default function App() {
  return (
    <PreferencesProvider>
      <SkipLink />
      <TopBar />
      <main id="main" tabIndex={-1}>
        <Hero />
        <PerspectivePanel />
        <About />
        <HowItWorks />
        <Faq />
        <Community />
        <AccessibilityNote />
      </main>
      <SiteFooter />
    </PreferencesProvider>
  )
}
