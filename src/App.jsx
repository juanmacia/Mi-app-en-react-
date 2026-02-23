import { useState, useEffect } from "react"
import emailjs from "@emailjs/browser"
import "./App.css"

function App() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false)

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: ""
  })

  const [enviado, setEnviado] = useState(false)
  const [error, setError] = useState("")
  const [darkMode, setDarkMode] = useState(false)

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

  if (
    formData.nombre === "" ||
    formData.email === "" ||
    formData.mensaje === ""
  ) {
    setError("Por favor completa todos los campos")
    return
  }

  setError("")

  emailjs.send(
    "service_dxmvioc",
    "template_40eclkc",
    {
      nombre: formData.nombre,
      email: formData.email,
      mensaje: formData.mensaje
    },
    "ZUQ8dK-sL2cC2z8Gz"
  )
  .then(() => {
    setEnviado(true)
    setFormData({
      nombre: "",
      email: "",
      mensaje: ""
    })
  })
  .catch((error) => {
    setError("Error al enviar el mensaje")
    console.log(error)
  })
} //
return (
  <div className={`container ${darkMode ? "dark" : ""}`}>
    <div className="card">

      <h1>Juan Macías</h1>
      <p>Desarrollador en formación</p>

      <button onClick={() => setMostrarFormulario(!mostrarFormulario)}>
        Contactame
      </button>

     <form
  onSubmit={manejarEnvio}
  className={`formulario ${mostrarFormulario ? "activo" : ""}`}
>
          <input
            type="text"
            name="nombre"
            placeholder="Tu nombre"
            value={formData.nombre}
            onChange={manejarCambio}
          />

          <input
            type="email"
            name="email"
            placeholder="Tu email"
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

        <button onClick={() => setDarkMode(!darkMode)}>
  {darkMode ? "Modo Claro ☀️" : "Modo Oscuro 🌙"}
</button>
      

      {enviado && <p>✅ Mensaje enviado</p>}

      <section className="about">
  <h2>Sobre mí</h2>
  <p>
    Soy estudiante y desarrollador en formación apasionado por la tecnología.
    Actualmente estoy aprendiendo React, JavaScript y desarrollo web moderno.
  </p>

  <div className="skills">
    <span>HTML</span>
    <span>CSS</span>
    <span>JavaScript</span>
    <span>React</span>
  </div>
</section>

    </div>
  </div>
)
} // 
export default App //

