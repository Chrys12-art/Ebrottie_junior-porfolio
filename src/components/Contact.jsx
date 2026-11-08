import { useEffect, useRef, useState } from 'react'
import { ExternalLink, FileDown, Loader2, Mail, MapPin, Phone } from 'lucide-react'
import GithubIcon from './GithubIcon'
import LinkedinIcon from './LinkedinIcon'
import { useLang } from '../hooks/useLang'
import { site } from '../data/site'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function Contact() {
  const { t } = useLang()
  const c = t.contact
  const frameRef = useRef(null)
  const [loaded, setLoaded] = useState(false)
  const [height, setHeight] = useState(760)

  // Jotform envoie "setHeight:<px>:<id>" pour ajuster la hauteur de l'iframe.
  useEffect(() => {
    const onMessage = (e) => {
      if (typeof e.data !== 'string' || !e.origin.includes('jotform.com')) return
      if (e.source !== frameRef.current?.contentWindow) return
      const [action, value] = e.data.split(':')
      const px = parseInt(value, 10)
      if (action === 'setHeight' && px > 300) setHeight(px + 8)
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])

  return (
    <section id="contact" className="section section--last" aria-labelledby="contact-title">
      <div className="container">
        <Reveal className="contact glass glow">
          <div className="contact__glow" aria-hidden="true" />

          <div className="contact__info">
            <SectionHeader eyebrow={c.eyebrow} title={c.title} subtitle={c.subtitle} id="contact-title" />

            <ul className="contact__list">
              <li>
                <span className="icon-badge icon-badge--sm" aria-hidden="true">
                  <Mail size={18} />
                </span>
                <span>
                  <span className="facts__label">{c.emailLabel}</span>
                  {site.email ? (
                    <a href={`mailto:${site.email}`} className="facts__value link">
                      {site.email}
                    </a>
                  ) : (
                    <span className="facts__value placeholder">[ {c.emailPending} ]</span>
                  )}
                </span>
              </li>
              {site.phone && (
                <li>
                  <span className="icon-badge icon-badge--sm" aria-hidden="true">
                    <Phone size={18} />
                  </span>
                  <span>
                    <span className="facts__label">{c.phoneLabel}</span>
                    <a href={`tel:${site.phoneHref}`} className="facts__value link">
                      {site.phone}
                    </a>
                  </span>
                </li>
              )}
              {site.cv && (
                <li>
                  <span className="icon-badge icon-badge--sm" aria-hidden="true">
                    <FileDown size={18} />
                  </span>
                  <span>
                    <span className="facts__label">{c.cvLabel}</span>
                    <a href={site.cv} download={site.cvDownloadName} className="facts__value link">
                      {c.cvLink}
                    </a>
                  </span>
                </li>
              )}
              <li>
                <span className="icon-badge icon-badge--sm" aria-hidden="true">
                  <GithubIcon size={18} />
                </span>
                <span>
                  <span className="facts__label">{c.githubLabel}</span>
                  <a href={site.github} target="_blank" rel="noopener noreferrer" className="facts__value link">
                    github.com/Chrys12-art
                  </a>
                </span>
              </li>
              {site.linkedin && (
                <li>
                  <span className="icon-badge icon-badge--sm" aria-hidden="true">
                    <LinkedinIcon size={18} />
                  </span>
                  <span>
                    <span className="facts__label">{c.linkedinLabel}</span>
                    <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="facts__value link">
                      LinkedIn
                    </a>
                  </span>
                </li>
              )}
              <li>
                <span className="icon-badge icon-badge--sm" aria-hidden="true">
                  <MapPin size={18} />
                </span>
                <span>
                  <span className="facts__label">{c.locationLabel}</span>
                  <span className="facts__value">{t.hero.location}</span>
                </span>
              </li>
            </ul>
          </div>

          <div className="jotform">
            {!loaded && (
              <p className="jotform__loading" role="status">
                <Loader2 size={18} className="spin" aria-hidden="true" />
                {c.formLoading}
              </p>
            )}
            <iframe
              ref={frameRef}
              title={c.formTitle}
              src={site.contactFormUrl}
              loading="lazy"
              allow="geolocation"
              onLoad={() => setLoaded(true)}
              style={{ height }}
              className={`jotform__frame ${loaded ? 'is-loaded' : ''}`}
            />
            <p className="jotform__fallback muted small">
              {c.formFallback}
              <a href={site.contactFormUrl} target="_blank" rel="noopener noreferrer" className="link">
                {c.formOpen}
                <ExternalLink size={13} aria-hidden="true" />
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
