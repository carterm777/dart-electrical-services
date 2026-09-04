import { HeartHandshake, ShieldCheck, ClipboardList, HardHat, Phone, ArrowDown } from 'lucide-react'
import { WordReveal, useParallax } from '../lib/motion.js'
import { HERO, VALUE_BADGES, PHONE_DISPLAY, PHONE_TEL } from '../data/site.js'
import PhotoDiagnosis from './PhotoDiagnosis.jsx'
import './hero.css'

const ICONS = { HeartHandshake, ShieldCheck, ClipboardList, HardHat }

export default function Hero() {
  /* Parallax Scroll Depth on the photo bed only — desktop-only per the entry's
     Avoid-when field; the hook flattens it below 900px and under reduced motion. */
  const bedRef = useParallax(0.12, { disableBelow: 981 })

  return (
    <section className="hero" id="top">
      <div className="hero-bed" aria-hidden="true">
        <div className="hero-bed-inner" ref={bedRef}>
          <img
            src="/images/winter-house.webp"
            alt=""
            width="2000"
            height="1125"
            fetchpriority="high"
            decoding="async"
          />
        </div>
        <span className="hero-scrim" />
        <span className="hero-scrim-edge" />
      </div>

      <div className="shell shell--wide hero-shell">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow eyebrow--dark hero-eyebrow" data-load style={{ '--reveal-delay': '60ms' }}>
              <span className="eyebrow-mark" aria-hidden="true" />
              {HERO.eyebrow}
            </p>

            <h1 className="hero-h1">
              <WordReveal text={HERO.h1} step={62} start={180} />
            </h1>

            <p className="hero-sub" data-load style={{ '--reveal-delay': '760ms' }}>{HERO.sub}</p>

            <ul className="hero-badges list-reset" data-load style={{ '--reveal-delay': '880ms' }}>
              {VALUE_BADGES.map((b, i) => {
                const Icon = ICONS[b.icon]
                return (
                  <li className="hero-badge" key={b.label} style={{ '--badge-i': i }}>
                    <span className="hero-badge-icon" aria-hidden="true"><Icon /></span>
                    <span className="hero-badge-label">{b.label}</span>
                  </li>
                )
              })}
            </ul>

            <div className="hero-actions" data-load style={{ '--reveal-delay': '1000ms' }}>
              <a className="btn btn--primary btn--lg hero-call" href={PHONE_TEL}>
                <Phone aria-hidden="true" />Call {PHONE_DISPLAY}
              </a>
              <a className="btn btn--ghost-dark btn--lg" href="#services">
                See Our Services<ArrowDown aria-hidden="true" />
              </a>
            </div>

            <p className="hero-note" data-load style={{ '--reveal-delay': '1080ms' }}>
              Free estimates on residential, commercial and farm electrical work.
            </p>
          </div>

          <div className="hero-widget" data-load style={{ '--reveal-delay': '340ms' }}>
            <PhotoDiagnosis />
          </div>
        </div>

        {/* Scroll cue — a full-height hero needs one, kept to a travelling dot
            on a hairline rather than a bouncing arrow. */}
        <p className="hero-cue" data-load style={{ '--reveal-delay': '1400ms' }} aria-hidden="true">
          <span className="hero-cue-track"><span className="hero-cue-dot" /></span>
          Keep scrolling — reviews, services and the coverage map
        </p>
      </div>
    </section>
  )
}
