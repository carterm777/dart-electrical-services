import { House, Building2, Tractor, Droplets, PlugZap, Gauge, Phone, ArrowUpRight } from 'lucide-react'
import { Reveal, Stagger } from '../lib/motion.js'
import { SERVICES, PHONE_DISPLAY, PHONE_TEL } from '../data/site.js'
import './services.css'

const ICONS = { House, Building2, Tractor, Droplets, PlugZap, Gauge }

export default function Services() {
  return (
    <section className="svc section band-dark" id="services" aria-labelledby="svc-title">
      <div className="shell">
        <Reveal className="svc-head sect-head sect-head--split" technique="rise">
          <div>
            <span className="tone-rule svc-rule" style={{ '--tone-seg': '30%' }} aria-hidden="true" />
            <p className="eyebrow eyebrow--dark svc-eyebrow">
              <span className="eyebrow-mark" aria-hidden="true" />Core Services
            </p>
            <h2 id="svc-title">From A House Panel To A Farmyard</h2>
          </div>
          <p className="sect-lede">
            Six things we are asked for most. If what you need is not on this list, it is almost certainly
            still work we do — call and ask.
          </p>
        </Reveal>

        <Stagger className="svc-grid" itemClassName="svc-cell" technique="rise" step={90} threshold={0.12}>
          {SERVICES.map((s) => {
            const Icon = ICONS[s.icon]
            return (
              <article className="svc-card" key={s.title}>
                <div className="svc-media">
                  <img
                    src={s.img}
                    alt={s.alt}
                    width="2000"
                    height="1125"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="svc-duo" aria-hidden="true" />
                </div>
                <div className="svc-body">
                  <span className="svc-icon" aria-hidden="true"><Icon /></span>
                  <h3 className="svc-h3">{s.title}</h3>
                  <p className="svc-copy">{s.body}</p>
                </div>
                <span className="svc-edge" aria-hidden="true" />
              </article>
            )
          })}
        </Stagger>

        <Reveal className="svc-cta" technique="rise" threshold={0.3}>
          <div className="svc-cta-text">
            <h3 className="svc-cta-h3">Not Sure Which One You Need?</h3>
            <p>Describe it on the phone in thirty seconds and we will tell you straight.</p>
          </div>
          <a className="btn btn--primary btn--lg" href={PHONE_TEL}>
            <Phone aria-hidden="true" />Call {PHONE_DISPLAY}
          </a>
          <a className="btn btn--ghost-dark btn--lg" href="#contact">
            Get A Free Estimate<ArrowUpRight aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
