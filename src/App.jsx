import { useEffect, useState } from "react"
import "./App.css"
import emailjs from "@emailjs/browser"

// Lee la preferencia inicial: primero lo guardado, si no la del sistema operativo.
function getInitialDarkMode() {
  const saved = localStorage.getItem("darkMode")
  if (saved !== null) return saved === "true"
  return window.matchMedia("(prefers-color-scheme: dark)").matches
}

function App() {
  const [darkMode, setDarkMode] = useState(getInitialDarkMode)
  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState(null) // { type: "ok" | "error", msg }

  // Persiste la elección del usuario.
  useEffect(() => {
    localStorage.setItem("darkMode", String(darkMode))
  }, [darkMode])

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    setSending(true)
    setStatus(null)

    emailjs
      .sendForm(
        "service_dxmvioc",
        "template_40eclkc",
        form,
        "ZUQ8dK-sL2cC2z8Gz"
      )
      .then(() => {
        setStatus({ type: "ok", msg: "¡Mensaje enviado! Te responderé pronto." })
        form.reset()
      })
      .catch(() => {
        setStatus({
          type: "error",
          msg: "No se pudo enviar el mensaje. Intenta de nuevo o escríbeme por otro medio.",
        })
      })
      .finally(() => setSending(false))
  }

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>

      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">Juan Macias</h2>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Proyectos</a>
          <a href="#contact">Contacto</a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label={darkMode ? "Activar modo claro" : "Activar modo oscuro"}
          >
            {darkMode ? "☀" : "🌙"}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <h1>Juan Macias</h1>
        <p>Frontend Developer</p>
        <span>Construyendo interfaces limpias y funcionales.</span>
        <div className="hero-actions">
          <a href="/cv.pdf" download="CV-Juan-Macias.pdf" className="cv-btn">
            Descargar CV
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about">
        <h2>About</h2>
        <p>
          Soy estudiante apasionado por el desarrollo web y la electrónica.
          Me enfoco en crear interfaces limpias, funcionales y bien estructuradas.
          Actualmente trabajo con React y desarrollo proyectos con Arduino.
        </p>

        <div className="skills">
          <span>React</span>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>Git</span>
          <span>Arduino</span>
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="projects" className="projects">
        <h2>Proyectos</h2>

        <div className="project-card">
          <h3>Portfolio React</h3>
          <p>Sitio personal desarrollado con React y modo oscuro.</p>
          <a
            href="https://github.com/juanmacia/Mi-app-en-react-"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver código
          </a>
        </div>

        <div className="project-card">
          <h3>Proyecto Arduino</h3>
          <p>Sistema electrónico con simulación en Proteus.</p>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contact" className="contact">
        <h2>Contacto</h2>
        <p>Puedes escribirme directamente desde el formulario.</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="nombre" placeholder="Tu nombre" required />
          <input type="email" name="email" placeholder="Tu correo" required />
          <textarea name="mensaje" placeholder="Tu mensaje" rows="5" required></textarea>
          <button type="submit" disabled={sending}>
            {sending ? "Enviando..." : "Enviar mensaje"}
          </button>
          {status && (
            <p className={`form-status ${status.type}`} role="status">
              {status.msg}
            </p>
          )}
        </form>
      </section>

    </div>
  )
}

export default App
