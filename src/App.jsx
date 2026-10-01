import About from "./components/About"
import Contact from "./components/Contact"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import { useTheme } from "./hooks/useTheme"
import { useLanguage } from "./i18n/language"

function App() {
  const { theme, toggleTheme } = useTheme()
  const { t } = useLanguage()

  return (
    <>
      <a href="#contenido" className="skip-link">{t.ui.skipLink}</a>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main id="contenido" className="container">
        <Hero />
        <Experience />
        <About />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
