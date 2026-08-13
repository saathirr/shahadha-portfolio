import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import AcademicKnowledge from './components/AcademicKnowledge'
import Strengths from './components/Strengths'
import Languages from './components/Languages'
import Contact from './components/Contact'
import Footer from './components/Footer'

/**
 * App — composes the full portfolio page.
 * Each section is a self-contained component; content lives in src/data.js.
 */
export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <AcademicKnowledge />
        <Strengths />
        <Languages />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
