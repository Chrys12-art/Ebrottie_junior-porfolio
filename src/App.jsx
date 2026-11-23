import { useCallback, useState } from 'react'
import { MotionConfig } from 'motion/react'
import { LangProvider, useLang } from './hooks/useLang'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Goals from './components/Goals'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Mascot from './components/Mascot'
import Preloader from './components/Preloader'
import ScrollProgress from './components/ScrollProgress'

function Page() {
  const { t } = useLang()
  const [loading, setLoading] = useState(true)
  const finishLoading = useCallback(() => setLoading(false), [])

  return (
    <>
      {loading && <Preloader onDone={finishLoading} />}
      <ScrollProgress />
      <a className="skip-link" href="#main">
        {t.nav.skip}
      </a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Goals />
        <Contact />
      </main>
      <Footer />
      <Mascot />
    </>
  )
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <LangProvider>
        <Page />
      </LangProvider>
    </MotionConfig>
  )
}
