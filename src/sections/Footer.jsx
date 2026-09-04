import { Facebook, Instagram, Linkedin, Phone, MessageSquareText, MapPin, Star, ShieldCheck } from 'lucide-react'
import { useInView } from '../lib/motion.js'
import {
  BUSINESS, LOCATION, PHONE_DISPLAY, PHONE_TEL, PHONE_SMS,
  FOOTER_MISSION, FOOTER_SERVICES, FOOTER_LINKS,
} from '../data/site.js'
import './footer.css'

const SOCIAL = [
  { label: 'Facebook', Icon: Facebook },
  { label: 'Instagram', Icon: Instagram },
  { label: 'LinkedIn', Icon: Linkedin },
]

export default function Footer() {
  const [ref, inView] = useInView({ threshold: 0.1 })
  const year = new Date().getFullYear()

  return (
    <footer className="ft band-dark" id="site-footer">
      <h2 className="sr-only">Site Footer</h2>

      {/* Trust strip — the last reassurance before the sitemap. */}
      <div className="ft-strip">
        <div className="shell shell--wide ft-strip-row">
          <p className="ft-strip-item">
            <Star aria-hidden="true" fill="currentColor" />
            4.9 out of 5 stars, based on real Google reviews
          </p>
          <p className="ft-strip-item">
            <ShieldCheck aria-hidden="true" />
            Licensed &amp; insured electricians, homes to farmyards
          </p>
          <a className="ft-strip-call" href={PHONE_TEL}>
            <Phone aria-hidden="true" /><span className="sweep">Call {PHONE_DISPLAY}</span>
          </a>
        </div>
      </div>

      <div className="shell shell--wide">
        <div className="ft-cols" ref={ref} data-in={inView ? 'true' : 'false'}>
          <div className="ft-col ft-col--brand" style={{ '--ft-i': 0 }}>
            <p className="ft-mark">
              <span className="ft-mark-bar" aria-hidden="true" />
              <span className="ft-mark-type">
                <span className="ft-mark-name">Dart</span>
                <span className="ft-mark-sub">Electrical Services</span>
              </span>
            </p>
            <p className="ft-mission">{FOOTER_MISSION}</p>
            <ul className="ft-social list-reset">
              {SOCIAL.map(({ label, Icon }) => (
                <li key={label}>
                  <a href="#site-footer" aria-label={`${BUSINESS} on ${label}`}>
                    <Icon aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="ft-col" style={{ '--ft-i': 1 }}>
            <h3 className="ft-h3">Our Services</h3>
            <ul className="ft-list list-reset">
              {FOOTER_SERVICES.map((s) => (
                <li key={s}><a href="#services"><span className="sweep">{s}</span></a></li>
              ))}
            </ul>
          </div>

          <div className="ft-col" style={{ '--ft-i': 2 }}>
            <h3 className="ft-h3">Quick Links</h3>
            <ul className="ft-list list-reset">
              {FOOTER_LINKS.map((l) => (
                <li key={l.label}><a href={l.href}><span className="sweep">{l.label}</span></a></li>
              ))}
            </ul>
          </div>

          <div className="ft-col" style={{ '--ft-i': 3 }}>
            <h3 className="ft-h3">Contact</h3>
            <ul className="ft-contact list-reset">
              <li className="ft-contact-name">{BUSINESS}</li>
              <li><MapPin aria-hidden="true" />{LOCATION}</li>
              <li>
                <Phone aria-hidden="true" />
                <a href={PHONE_TEL}><span className="sweep">{PHONE_DISPLAY}</span></a>
              </li>
              <li>
                <MessageSquareText aria-hidden="true" />
                <a href={PHONE_SMS}><span className="sweep">Text {PHONE_DISPLAY}</span></a>
              </li>
            </ul>
          </div>
        </div>

        <div className="ft-legal">
          <p>© {year} {BUSINESS}. All rights reserved.</p>
          <p className="placeholder-note ft-legal-note">
            Demonstration build · Email and mailing address are placeholders pending confirmation
          </p>
        </div>
      </div>
    </footer>
  )
}
