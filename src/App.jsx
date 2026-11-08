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
import Background from './components/Background'

function Page() {
  const { t } = useLang()
  return (
    <>
      <a className="skip-link" href="#main">
        {t.nav.skip}
      </a>
      <Background />
      <Navbar />
      <main id="main">
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
    </>
  )
}

export default function App() {
  return (
    // reducedMotion="user" : Motion respecte prefers-reduced-motion automatiquement.
    <MotionConfig reducedMotion="user">
      <LangProvider>
        <Page />
      </LangProvider>
    </MotionConfig>
  )
}
