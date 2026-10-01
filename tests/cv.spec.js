import { expect, test } from "@playwright/test"

test.describe("Descarga del CV", () => {
  test("descarga el CV en español", async ({ page }) => {
    await page.goto("/")

    const downloadPromise = page.waitForEvent("download")
    await page.getByRole("link", { name: "Descargar CV" }).click()
    const download = await downloadPromise

    expect(download.suggestedFilename()).toBe("CV-Juan-Carlos-Macias-ES.pdf")
  })

  test("descarga el CV en inglés cuando el sitio está en inglés", async ({ page }) => {
    await page.goto("/")
    await page.getByRole("button", { name: "View in English" }).click()

    const downloadPromise = page.waitForEvent("download")
    await page.getByRole("link", { name: "Download CV" }).click()
    const download = await downloadPromise

    expect(download.suggestedFilename()).toBe("CV-Juan-Carlos-Macias-EN.pdf")
  })

  test("los dos PDF existen en el servidor", async ({ request }) => {
    for (const path of ["/cv-juan-macias.pdf", "/cv-juan-macias-en.pdf"]) {
      const res = await request.get(path)
      expect(res.status(), path).toBe(200)
      expect(res.headers()["content-type"]).toContain("application/pdf")
    }
  })
})
