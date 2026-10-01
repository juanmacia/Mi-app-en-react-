import { expect, test } from "@playwright/test"

const EMAILJS_API = "https://api.emailjs.com/**"

test.describe("Formulario de contacto", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/#contacto")
  })

  test("no envía nada si los campos están vacíos y marca cada error", async ({ page }) => {
    let requests = 0
    await page.route(EMAILJS_API, (route) => {
      requests++
      return route.fulfill({ status: 200, body: "OK" })
    })

    await page.getByRole("button", { name: "Enviar mensaje" }).click()

    await expect(page.getByText("Escribe tu nombre.")).toBeVisible()
    await expect(page.getByText("Escribe tu correo.")).toBeVisible()
    await expect(page.getByText("El mensaje debe tener al menos 10 caracteres.")).toBeVisible()
    await expect(page.getByLabel("Nombre")).toBeFocused()
    await expect(page.getByLabel("Nombre")).toHaveAttribute("aria-invalid", "true")
    expect(requests).toBe(0)
  })

  test("rechaza un correo con formato inválido", async ({ page }) => {
    await page.getByLabel("Nombre").fill("Ana")
    await page.getByLabel("Correo").fill("ana@")
    await page.getByLabel("Mensaje").fill("Hola, me interesa tu perfil.")
    await page.getByRole("button", { name: "Enviar mensaje" }).click()

    await expect(page.getByText("Escribe un correo válido, por ejemplo nombre@empresa.com.")).toBeVisible()
    await expect(page.getByLabel("Correo")).toBeFocused()
  })

  test("envía los datos a EmailJS y confirma el envío", async ({ page }) => {
    // Se simula la respuesta de EmailJS para no mandar correos reales.
    await page.route(EMAILJS_API, (route) => route.fulfill({ status: 200, body: "OK" }))

    await page.getByLabel("Nombre").fill("Ana López")
    await page.getByLabel("Correo").fill("ana@empresa.com")
    await page.getByLabel("Mensaje").fill("Hola Juan, me gustaría platicar sobre una vacante.")

    const requestPromise = page.waitForRequest(EMAILJS_API)
    await page.getByRole("button", { name: "Enviar mensaje" }).click()
    const body = (await requestPromise).postData() ?? ""

    // La plantilla de EmailJS espera exactamente estos campos.
    for (const value of ["Ana López", "ana@empresa.com", "me gustaría platicar"]) {
      expect(body).toContain(value)
    }
    for (const field of ['name="nombre"', 'name="email"', 'name="mensaje"']) {
      expect(body).toContain(field)
    }

    await expect(page.getByRole("status")).toHaveText("¡Mensaje enviado! Te responderé pronto.")
    await expect(page.getByLabel("Nombre")).toHaveValue("")
  })

  test("muestra un error si el servicio de correo falla", async ({ page }) => {
    await page.route(EMAILJS_API, (route) => route.fulfill({ status: 500, body: "Error" }))

    await page.getByLabel("Nombre").fill("Ana López")
    await page.getByLabel("Correo").fill("ana@empresa.com")
    await page.getByLabel("Mensaje").fill("Hola Juan, me gustaría platicar sobre una vacante.")
    await page.getByRole("button", { name: "Enviar mensaje" }).click()

    await expect(page.getByRole("status")).toContainText("No se pudo enviar el mensaje")
    // El texto escrito se conserva para que la persona pueda reintentar.
    await expect(page.getByLabel("Mensaje")).toHaveValue(/vacante/)
  })
})
