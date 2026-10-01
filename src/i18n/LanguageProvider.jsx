import { useEffect, useState } from "react"
import { content, getInitialLang, LanguageContext, STORAGE_KEY } from "./language"

export default function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang)
  const t = content[lang]

  // Mantiene sincronizados el atributo lang, el título y la descripción de la página.
  useEffect(() => {
    document.documentElement.lang = lang
    document.title = t.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.meta.description)
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // Almacenamiento bloqueado: el idioma solo dura esta visita.
    }
  }, [lang, t])

  const toggleLang = () => setLang((l) => (l === "es" ? "en" : "es"))

  return <LanguageContext.Provider value={{ lang, toggleLang, t }}>{children}</LanguageContext.Provider>
}
