import { useState } from "react"
import "./App.css"

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      
      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">Juan Macias</h2>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Proyectos</a>
          <a href="#contact">Contacto</a>
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "☀" : "🌙"}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <h1>Juan Macias</h1>
        <p>Frontend Developer</p>
        <span>Construyendo interfaces limpias y funcionales.</span>
      </section>
      <a href="/cv.pdf" download className="cv-btn">
  Descargar CV
</a>


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
          <a href="https://github.com/TUUSUARIO" target="_blank">
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

        <form className="contact-form">
          <input type="text" placeholder="Tu nombre" required />
          <input type="email" placeholder="Tu correo" required />
          <textarea placeholder="Tu mensaje" rows="5" required></textarea>
          <button type="submit">Enviar mensaje</button>
        </form>
      </section>

    </div>
  )
}

export default App