import { ArrowUp } from 'lucide-react'
import GithubIcon from './GithubIcon'
import LinkedinIcon from './LinkedinIcon'
import { useLang } from '../hooks/useLang'
import { site } from '../data/site'

export default function Footer() {
  const { t } = useLang()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {year} {site.name}. {t.footer.rights}
          <span className="footer__built"> {t.footer.built}</span>
        </p>
        <div className="footer__actions">
          <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="footer__icon">
            <GithubIcon size={18} aria-hidden="true" />
          </a>
          {site.linkedin && (
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer__icon">
              <LinkedinIcon size={18} aria-hidden="true" />
            </a>
          )}
          <a href="#home" className="footer__top">
            {t.footer.top}
            <ArrowUp size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
