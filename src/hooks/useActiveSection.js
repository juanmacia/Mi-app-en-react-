import { useEffect, useState } from "react"

// Devuelve el id de la última sección cuyo inicio ya pasó una línea justo debajo de la navbar.
// En el hero (antes de la primera sección) devuelve null; al final de la página, la última.
export function useActiveSection(ids) {
  const [active, setActive] = useState(null)
  const key = ids.join(",")

  useEffect(() => {
    const sectionIds = key.split(",")
    let frame = 0

    const update = () => {
      frame = 0
      const line = Math.min(window.innerHeight * 0.4, 180)
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      let current = null

      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) current = id
      }
      setActive(atBottom ? sectionIds.at(-1) : current)
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [key])

  return active
}
