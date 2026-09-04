import { Phone, MessageSquareText, ShieldCheck } from 'lucide-react'
import { Reveal } from '../lib/motion.js'
import { useMagnetic } from '../lib/useMagnetic.js'
import { FINAL_CTA, PHONE_DISPLAY, PHONE_TEL, PHONE_SMS } from '../data/site.js'
import './cta.css'

export default function FinalCta() {
  const magRef = useMagnetic()

  return (
    <section className="cta section section--loose band-deep grain" id="contact" aria-labelledby="cta-title">
      <div className="cta-bed" aria-hidden="true">
        <img
          src="/images/outage-night.webp"
          alt=""
          width="2000"
          height="1125"
          loading="lazy"
          decoding="async"
          data-ambient
          style={{ '--ambient-dur': '30s' }}
        />
        <span className="cta-scrim" />
      </div>

      <div className="shell cta-shell">
        <Reveal className="cta-card" technique="rise" threshold={0.2}>
          <span className="tone-rule cta-rule" style={{ '--tone-seg': '24%' }} aria-hidden="true" />
          <p className="eyebrow eyebrow--dark cta-eyebrow">
            <span className="eyebrow-mark" aria-hidden="true" />Free Estimate
          </p>
          <h2 id="cta-title" className="cta-h2">{FINAL_CTA.h2}</h2>
          <p className="cta-sub">{FINAL_CTA.sub}</p>

          <div className="cta-actions">
            <a className="btn btn--primary btn--lg btn--magnetic cta-call" href={PHONE_TEL} ref={magRef}>
              <Phone aria-hidden="true" />Call {PHONE_DISPLAY}
            </a>
            <a className="btn btn--ghost-dark btn--lg" href={PHONE_SMS}>
              <MessageSquareText aria-hidden="true" />Text Us Instead
            </a>
          </div>

          <p className="reassure reassure--dark cta-reassure">
            <ShieldCheck aria-hidden="true" />
            <span>
              No cost, no obligation, and we never share your information. Prefer to send a photo first?{' '}
              <a className="cta-inline" href="#top"><span className="sweep">Use the photo diagnosis at the top of the page.</span></a>
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
