import { profile } from "../data/profile"
import { useLanguage } from "../i18n/language"
import { GitHubIcon, LinkedInIcon } from "./Icons"

export default function SocialLinks({ className = "" }) {
  const { t } = useLanguage()

  return (
    <ul className={`social-links ${className}`.trim()}>
      <li>
        <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label={`GitHub (${t.ui.newTab})`}>
          <GitHubIcon />
        </a>
      </li>
      <li>
        <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn (${t.ui.newTab})`}>
          <LinkedInIcon />
        </a>
      </li>
    </ul>
  )
}
