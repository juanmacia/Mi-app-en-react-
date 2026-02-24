import { useState, useEffect } from "react"
import emailjs from "@emailjs/browser"
import "./App.css"

function App() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: ""
  })

  const [enviado, setEnviado] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    if (enviado) {
      const timer = setTimeout(() => {
        setEnviado(false)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [enviado])

  const manejarCambio = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const manejarEnvio = (e) => {
    e.preventDefault()

    if (!formData.nombre || !formData.email || !formData.mensaje) {
      setError("Todos los campos son obligatorios")
      return
    }

    setError("")

    emailjs.send(
      "service_dxmvioc",
      "template_40eclkc",
      formData,
      "ZUQ8dK-sL2cC2z8Gz"
    )
    .then(() => {
      setEnviado(true)
      setFormData({ nombre: "", email: "", mensaje: "" })
    })
    .catch(() => {
      setError("Error al enviar el mensaje")
    })
  }

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <div className="card">

        <section className="hero">
          <h1>Juan Macías</h1>
          <p>Frontend Developer en formación</p>

          <button onClick={() => setMostrarFormulario(!mostrarFormulario)}>
            Contactar
          </button>

          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "Light ☀️" : "Dark 🌙"}
          </button>
        </section>

        <section className={`formulario ${mostrarFormulario ? "activo" : ""}`}>
          <form onSubmit={manejarEnvio}>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={manejarCambio}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={manejarCambio}
            />

            <textarea
              name="mensaje"
              placeholder="Mensaje"
              value={formData.mensaje}
              onChange={manejarCambio}
            />

            <button type="submit">Enviar</button>

            {error && <p className="error">{error}</p>}
          </form>

          {enviado && <p>Mensaje enviado ✔</p>}
        </section>

        <section className="about">
          <h2>Sobre mí</h2>
          <p>
            Soy desarrollador en formación apasionado por crear interfaces limpias y funcionales.
          </p>
        </section>

      </div>
    </div>
  )
}

export default App