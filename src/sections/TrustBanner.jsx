import { BadgeCheck, MapPin, Award, ThumbsUp } from 'lucide-react'
import { useInView } from '../lib/motion.js'
import { TRUST_BADGES } from '../data/site.js'
import './trust.css'

const ICONS = { BadgeCheck, MapPin, Award, ThumbsUp }

export default function TrustBanner() {
  const [ref, inView] = useInView({ threshold: 0.35 })

  return (
    <section className="tb section section--band band-deep" id="trust" aria-labelledby="tb-title">
      <div className="shell shell--wide">
        <div className="tb-panel" ref={ref} data-in={inView ? 'true' : 'false'}>
          <div className="tb-head">
            <span className="tone-rule tb-rule" style={{ '--tone-seg': '46%' }} aria-hidden="true" />
            <h2 id="tb-title" className="tb-title">What Backs The Work</h2>
          </div>

          <ul className="tb-row list-reset">
            {TRUST_BADGES.map((b, i) => {
              const Icon = ICONS[b.icon]
              return (
                <li className="tb-badge" key={b.label} style={{ '--tb-i': i }}>
                  <span className="tb-icon" aria-hidden="true"><Icon /></span>
                  <span className="tb-text">
                    <h3 className="tb-label">{b.label}</h3>
                    <p className="tb-note">{b.note}</p>
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
