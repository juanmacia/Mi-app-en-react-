import { expect, test } from "@playwright/test"

test.describe("Idioma", () => {
  test("cambia todo el sitio a inglés y lo recuerda al recargar", async ({ page }) => {
    await page.goto("/")
    await expect(page.locator("html")).toHaveAttribute("lang", "es")

    await page.getByRole("button", { name: "View in English" }).click()

    await expect(page.locator("html")).toHaveAttribute("lang", "en")
    await expect(page.getByRole("heading", { level: 2, name: "Experience" })).toBeVisible()
    await expect(page.getByText("Open to new opportunities")).toBeVisible()

    await page.reload()
    await expect(page.locator("html")).toHaveAttribute("lang", "en")
    await expect(page.getByRole("button", { name: "Ver en español" })).toBeVisible()
  })

  test.describe("con el navegador en inglés", () => {
    test.use({ locale: "en-US" })

    test("muestra el sitio en inglés desde la primera visita", async ({ page }) => {
      await page.goto("/")
      await expect(page.locator("html")).toHaveAttribute("lang", "en")
      await expect(page.getByRole("link", { name: "Download CV" })).toBeVisible()
    })
  })
})

test.describe("Tema", () => {
  test("alterna entre modo oscuro y claro y lo recuerda al recargar", async ({ page }) => {
    await page.goto("/")
    const html = page.locator("html")
    await expect(html).toHaveAttribute("data-theme", "dark")

    await page.getByRole("button", { name: "Activar modo claro" }).click()
    await expect(html).toHaveAttribute("data-theme", "light")

    await page.reload()
    await expect(html).toHaveAttribute("data-theme", "light")
    await expect(page.getByRole("button", { name: "Activar modo oscuro" })).toBeVisible()
  })
})
