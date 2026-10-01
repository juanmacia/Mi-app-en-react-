// Encabezado común para que todas las secciones se vean iguales.
export default function SectionHeader({ id, title, children }) {
  return (
    <header className="section-header">
      <h2 id={id}>{title}</h2>
      {children && <p className="section-lead">{children}</p>}
    </header>
  )
}
