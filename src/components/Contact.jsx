import { useEffect, useRef, useState } from 'react'
import { ExternalLink, Loader2 } from 'lucide-react'
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
      if (typeof e.data !== 'string') return
      let hostname = ''
      try {
        hostname = new URL(e.origin).hostname
      } catch {
        return
      }
      if (hostname !== 'jotform.com' && !hostname.endsWith('.jotform.com')) return
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
        <div className="contact">
          <Reveal className="contact__info">
            <SectionHeader eyebrow={c.eyebrow} title={c.title} subtitle={c.subtitle} id="contact-title" />

            <ul className="contact__list">
              <li>
                <span className="label">{c.emailLabel}</span>
                <span className="value">
                  {site.email ? (
                    <a href={`mailto:${site.email}`} className="link">
                      {site.email}
                    </a>
                  ) : (
                    <span className="muted">[ {c.emailPending} ]</span>
                  )}
                </span>
              </li>

              {site.phone && (
                <li>
                  <span className="label">{c.phoneLabel}</span>
                  <span className="value">
                    <a href={`tel:${site.phoneHref}`} className="link">
                      {site.phone}
                    </a>
                  </span>
                </li>
              )}

              {site.cv && (
                <li>
                  <span className="label">{c.cvLabel}</span>
                  <span className="value">
                    <a href={site.cv} download={site.cvDownloadName} className="link">
                      {c.cvLink}
                    </a>
                  </span>
                </li>
              )}

              <li>
                <span className="label">{c.githubLabel}</span>
                <span className="value">
                  <a href={site.github} target="_blank" rel="noopener noreferrer" className="link">
                    {site.github.replace(/^https?:\/\/(www\.)?/, '')}
                  </a>
                </span>
              </li>

              {site.linkedin && (
                <li>
                  <span className="label">{c.linkedinLabel}</span>
                  <span className="value">
                    <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="link">
                      LinkedIn
                    </a>
                  </span>
                </li>
              )}

              <li>
                <span className="label">{c.locationLabel}</span>
                <span className="value">{t.hero.location}</span>
              </li>
            </ul>
          </Reveal>

          <div className="jotform">
            {!loaded && (
              <p className="jotform__loading" role="status">
                <Loader2 size={16} className="spin" aria-hidden="true" />
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
            <p className="jotform__fallback">
              {c.formFallback}
              <a href={site.contactFormUrl} target="_blank" rel="noopener noreferrer" className="link">
                {c.formOpen}
                <ExternalLink size={12} aria-hidden="true" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
