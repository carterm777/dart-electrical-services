import { Wheat, Tractor, House, Building2, Construction, Phone } from 'lucide-react'
import { Reveal, useInView } from '../lib/motion.js'
import { COVERAGE_COPY, COVERAGE_TYPES, PHONE_DISPLAY, PHONE_TEL } from '../data/site.js'
import './coverage.css'

const ICONS = { Wheat, Tractor, House, Building2, Construction }

/* Dark Map Skin with Glow Pin. The province outline is drawn rather than
   embedded, so nothing depends on a third-party tile service, and the glow is
   kept tight to the pin per the entry's premium execution note. */
function AlbertaMap() {
  const [ref, inView] = useInView({ threshold: 0.28 })
  return (
    <div className="cov-map" ref={ref} data-in={inView ? 'true' : 'false'}>
      <svg viewBox="0 0 256 320" className="cov-map-svg" role="img" aria-labelledby="cov-map-title">
        <title id="cov-map-title">
          Outline map of Alberta with a marker placed over the northern and central region served by the
          780 area code.
        </title>
        <defs>
          <pattern id="cov-grid" width="16" height="16" patternUnits="userSpaceOnUse">
            <path d="M16 0H0V16" fill="none" stroke="var(--w-07)" strokeWidth="0.6" />
          </pattern>
          <radialGradient id="cov-glow">
            <stop offset="0%" stopColor="var(--red)" stopOpacity="0.62" />
            <stop offset="45%" stopColor="var(--red)" stopOpacity="0.16" />
            <stop offset="100%" stopColor="var(--red)" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect x="0" y="0" width="256" height="320" fill="url(#cov-grid)" />

        <path
          className="cov-shape"
          d="M12 10 L188 10 L188 310 L62 310 L54 296 L59 282 L47 268 L51 252 L39 236 L43 220 L31 204 L35 188 L23 170 L14 152 Z"
          fill="var(--ink-700)"
          stroke="var(--w-30)"
          strokeWidth="1.2"
        />
        {/* The 780 region sits across the northern and central portion. */}
        <path
          className="cov-region"
          d="M12 10 L188 10 L188 176 L38 176 L35 188 L23 170 L14 152 Z"
          fill="var(--red-16)"
          stroke="var(--red-70)"
          strokeWidth="1.2"
          strokeDasharray="5 4"
        />

        {/* Latitude ticks — the technical register the coverage grid asks for. */}
        <g className="cov-ticks">
          <line x1="188" y1="10" x2="204" y2="10" stroke="var(--w-30)" strokeWidth="0.8" />
          <text x="208" y="12.6" textAnchor="start">60°N</text>
          <line x1="188" y1="176" x2="204" y2="176" stroke="var(--red-70)" strokeWidth="0.8" />
          <text x="208" y="178.6" textAnchor="start" className="cov-tick-hot">780 AREA</text>
          <line x1="188" y1="310" x2="204" y2="310" stroke="var(--w-30)" strokeWidth="0.8" />
          <text x="208" y="312.6" textAnchor="start">49°N</text>
        </g>

        <circle className="cov-glow" cx="106" cy="100" r="30" fill="url(#cov-glow)" />
        <g className="cov-pin">
          <line x1="12" y1="100" x2="188" y2="100" stroke="var(--red-28)" strokeWidth="0.7" strokeDasharray="3 5" />
          <line x1="106" y1="10" x2="106" y2="176" stroke="var(--red-28)" strokeWidth="0.7" strokeDasharray="3 5" />
          <circle cx="106" cy="100" r="8" fill="var(--red)" />
          <circle cx="106" cy="100" r="14" fill="none" stroke="var(--red-70)" strokeWidth="1.2" />
          <circle cx="106" cy="100" r="2.6" fill="var(--light)" />
        </g>
      </svg>
      <p className="cov-map-label">
        <span className="cov-map-code">780</span>
        Northern &amp; Central Alberta
      </p>
    </div>
  )
}

export default function Coverage() {
  const [listRef, listIn] = useInView({ threshold: 0.2 })

  return (
    <section className="cov section band-deep" id="coverage" aria-labelledby="cov-title">
      <div className="shell">
        <div className="cov-grid">
          <div className="cov-copy">
            <Reveal technique="rise">
              <span className="tone-rule cov-rule" style={{ '--tone-seg': '40%' }} aria-hidden="true" />
              <p className="eyebrow eyebrow--dark cov-eyebrow">
                <span className="eyebrow-mark" aria-hidden="true" />Coverage
              </p>
              <h2 id="cov-title">Where The Truck Goes</h2>
              <p className="cov-lede">{COVERAGE_COPY}</p>
            </Reveal>

            <ul className="cov-types list-reset" ref={listRef} data-in={listIn ? 'true' : 'false'}>
              {COVERAGE_TYPES.map((t, i) => {
                const Icon = ICONS[t.icon]
                return (
                  <li className="cov-type" key={t.label} style={{ '--cov-i': i }}>
                    <span className="cov-type-icon" aria-hidden="true"><Icon /></span>
                    <span className="cov-type-text">
                      <h3 className="cov-type-label">{t.label}</h3>
                      <p className="cov-type-note">{t.note}</p>
                    </span>
                  </li>
                )
              })}
            </ul>

            <Reveal className="cov-foot" technique="rise" threshold={0.3}>
              <a className="btn btn--primary" href={PHONE_TEL}>
                <Phone aria-hidden="true" />Call {PHONE_DISPLAY}
              </a>
              <p className="placeholder-note cov-note">
                Placeholder coverage framing — a confirmed home base and town list replaces this before launch.
              </p>
            </Reveal>
          </div>

          <div className="cov-visual">
            <AlbertaMap />
          </div>
        </div>
      </div>
    </section>
  )
}
