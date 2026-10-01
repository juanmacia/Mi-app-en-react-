import { createContext, useContext } from "react"
import en from "../data/content.en"
import es from "../data/content.es"

export const content = { es, en }
export const STORAGE_KEY = "lang"

// Idioma inicial: el guardado; si no hay, el del navegador (español por defecto).
export function getInitialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved in content) return saved
  } catch {
    // Almacenamiento bloqueado: se usa el idioma del navegador.
  }
  return navigator.language?.toLowerCase().startsWith("en") ? "en" : "es"
}

export const LanguageContext = createContext(null)

// Devuelve { lang, toggleLang, t }, donde t son los textos del idioma activo.
export function useLanguage() {
  return useContext(LanguageContext)
}
