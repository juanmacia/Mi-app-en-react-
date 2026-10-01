import { profile } from "../data/profile"
import { useLanguage } from "../i18n/language"
import SocialLinks from "./SocialLinks"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {profile.name}. {t.ui.madeWith}
        </p>
        <SocialLinks />
      </div>
    </footer>
  )
}
