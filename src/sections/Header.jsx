import { useEffect, useRef, useState } from 'react'
import { Phone, Mail, MapPin, ChevronDown } from 'lucide-react'
import { useScrollY, useMediaQuery } from '../lib/motion.js'
import { useMagnetic } from '../lib/useMagnetic.js'
import { NAV, PHONE_DISPLAY, PHONE_TEL, EMAIL, EMAIL_HREF, LOCATION } from '../data/site.js'
import './header.css'

function Wordmark({ compact = false }) {
  return (
    <span className="hdr-mark-inner">
      <span className="hdr-mark-bar" aria-hidden="true" />
      <span className="hdr-mark-type">
        <span className="hdr-mark-name">Dart</span>
        {!compact && <span className="hdr-mark-sub">Electrical Services</span>}
      </span>
    </span>
  )
}

export default function Header() {
  const y = useScrollY()
  const isDesktop = useMediaQuery('(min-width: 981px)')
  const [openMenu, setOpenMenu] = useState(null)
  const navRef = useRef(null)
  const callRef = useMagnetic()
  const solid = y > 24
  const scrolled = y > 90

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpenMenu(null) }
    const onClick = (e) => { if (navRef.current && !navRef.current.contains(e.target)) setOpenMenu(null) }
    document.addEventListener('keydown', onKey)
    document.addEventListener('click', onClick)
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('click', onClick) }
  }, [])

  return (
    <header className="hdr" data-solid={solid ? 'true' : 'false'} data-scrolled={scrolled ? 'true' : 'false'}>
      <div className="hdr-sub">
        <div className="shell shell--wide hdr-sub-row">
          <a className="hdr-sub-item" href={PHONE_TEL}>
            <Phone aria-hidden="true" /><span className="sweep">{PHONE_DISPLAY}</span>
          </a>
          <span className="hdr-sub-div" aria-hidden="true" />
          <a className="hdr-sub-item" href={EMAIL_HREF}>
            <Mail aria-hidden="true" /><span className="sweep">{EMAIL}</span>
          </a>
          <span className="hdr-sub-div" aria-hidden="true" />
          <span className="hdr-sub-item hdr-sub-item--static">
            <MapPin aria-hidden="true" />{LOCATION}
          </span>
        </div>
      </div>

      <div className="hdr-bar">
        <div className="shell shell--wide hdr-row">
          <a className="hdr-mark" href="#top" aria-label="Dart Electrical Services, back to top">
            <Wordmark compact={!isDesktop && scrolled} />
          </a>

          <nav className="hdr-nav" aria-label="Primary" ref={navRef}>
            <ul className="hdr-nav-list list-reset">
              {NAV.map((item) => (
                <li
                  key={item.label}
                  className={`hdr-nav-item${item.menu ? ' hdr-nav-item--has-menu' : ''}`}
                  onMouseEnter={() => item.menu && setOpenMenu(item.label)}
                  onMouseLeave={() => item.menu && setOpenMenu(null)}
                >
                  {item.menu ? (
                    <>
                      <button
                        type="button"
                        className="hdr-nav-link hdr-nav-trigger"
                        aria-expanded={openMenu === item.label}
                        aria-controls={`menu-${item.label.replace(/\s+/g, '-').toLowerCase()}`}
                        onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                      >
                        <span className="sweep">{item.label}</span>
                        <ChevronDown aria-hidden="true" className="hdr-nav-chev" />
                      </button>
                      <div
                        id={`menu-${item.label.replace(/\s+/g, '-').toLowerCase()}`}
                        className="hdr-menu"
                        data-open={openMenu === item.label ? 'true' : 'false'}
                      >
                        <p className="hdr-menu-head">{item.label}</p>
                        <ul className="hdr-menu-list list-reset">
                          {item.menu.map((sub, i) => (
                            <li key={sub} style={{ '--menu-i': i }}>
                              <a href={item.menuHref} onClick={() => setOpenMenu(null)}>
                                <span className="sweep">{sub}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <a className="hdr-nav-link" href={item.href}>
                      <span className="sweep">{item.label}</span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="hdr-actions">
            <a className="btn btn--primary btn--sm btn--magnetic hdr-call" href={PHONE_TEL} ref={callRef}>
              <Phone aria-hidden="true" />
              <span className="hdr-call-label">Call {PHONE_DISPLAY}</span>
              <span className="hdr-call-short">Call Now</span>
            </a>
          </div>
        </div>
      </div>
      <span className="hdr-edge" aria-hidden="true" />
    </header>
  )
}
