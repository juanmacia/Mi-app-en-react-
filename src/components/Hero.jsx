import { profile } from "../data/profile"
import { useLanguage } from "../i18n/language"
import { DownloadIcon } from "./Icons"
import SocialLinks from "./SocialLinks"

export default function Hero() {
  const { lang, t } = useLanguage()
  const { hero, summary, ui } = t
  const cv = profile.cv[lang]

  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="hero-text">
        <p className="availability">
          <span className="availability-dot" aria-hidden="true" />
          {hero.availability}
        </p>
        <h1 id="hero-title">{profile.name}</h1>
        <p className="hero-role">{hero.role}</p>
        <p className="hero-tagline">{hero.tagline}</p>
        <p className="hero-studies">{hero.studies}</p>
        <p className="hero-work-mode">{hero.workMode}</p>

        <div className="hero-actions">
          <a href={cv.href} download={cv.fileName} className="btn btn-primary">
            <DownloadIcon />
            {ui.downloadCv}
          </a>
          <a href="#contacto" className="btn btn-secondary">{ui.contactCta}</a>
        </div>

        <SocialLinks className="hero-socials" />
      </div>

      <aside className="hero-summary card" aria-label={ui.summary}>
        <dl>
          {summary.map((item) => (
            <div key={item.label} className="summary-row">
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </aside>
    </section>
  )
}
