// Diagrama del pipeline de pruebas: pasos conectados por flechas.
// Horizontal en escritorio y vertical en móvil (ver .pipeline en index.css).

import { useLanguage } from "../i18n/language"

const stroke = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
}

const icons = {
  // Rayo: el disparo de la corrida
  trigger: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />,
  // Contenedor: el pod que ejecuta las pruebas
  run: (
    <>
      <path d="M21 8 12 3 3 8v8l9 5 9-5V8Z" />
      <path d="m3 8 9 5 9-5M12 13v8" />
    </>
  ),
  // Lista con checks: clasificación de resultados
  process: <path d="M3 6l2 2 3-3M3 13l2 2 3-3M12 6h9M12 13h9M12 20h9M4 20h4" />,
  // Campana: notificaciones
  notify: (
    <>
      <path d="M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </>
  ),
  // Globo: publicación del sitio estático
  publish: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </>
  ),
}

export default function PipelineDiagram({ steps }) {
  const { ui } = useLanguage().t
  const label = ui.pipelineLabel(steps.length, steps.map((s) => s.title).join(", "))

  return (
    <ol className="pipeline" aria-label={label}>
      {steps.map((step, i) => (
        <li key={step.title} className="pipeline-step">
          <span className="pipeline-icon">
            <svg {...stroke}>{icons[step.icon]}</svg>
          </span>
          <div>
            <p className="pipeline-title">
              <span className="sr-only">{ui.step} {i + 1}: </span>
              {step.title}
            </p>
            <p className="pipeline-text">{step.text}</p>
          </div>
          {i < steps.length - 1 && (
            <svg className="pipeline-arrow" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M4 12h15m-5-5 5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </li>
      ))}
    </ol>
  )
}
