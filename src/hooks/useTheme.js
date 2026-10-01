import { useEffect, useState } from "react"

const STORAGE_KEY = "theme"

// El tema inicial ya lo aplicó el script de index.html; aquí solo lo leemos.
function getInitialTheme() {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark"
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      // Almacenamiento bloqueado (modo privado): el tema solo dura esta visita.
    }
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"))

  return { theme, toggleTheme }
}
