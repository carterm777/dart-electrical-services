import { Phone } from 'lucide-react'
import { Reveal, useAccordion, useInView } from '../lib/motion.js'
import { FAQ, PHONE_DISPLAY, PHONE_TEL } from '../data/site.js'
import './faq.css'

export default function Faq() {
  const { toggle, isOpen } = useAccordion(0)
  const [listRef, listIn] = useInView({ threshold: 0.12 })

  return (
    <section className="faq section band-light-2" id="faq" aria-labelledby="faq-title">
      <div className="shell">
        <Reveal className="faq-head sect-head sect-head--split" technique="rise">
          <div>
            <span className="tone-rule tone-rule--light faq-rule" style={{ '--tone-seg': '36%' }} aria-hidden="true" />
            <p className="eyebrow eyebrow--light faq-eyebrow">
              <span className="eyebrow-mark" aria-hidden="true" />Questions
            </p>
            <h2 id="faq-title">The Six We Get Asked Most</h2>
          </div>
          <p className="sect-lede">
            Short answers, no hedging. Anything not covered here gets a straight answer on the phone
            instead.
          </p>
        </Reveal>

        <ul className="faq-list list-reset" ref={listRef} data-in={listIn ? 'true' : 'false'}>
          {FAQ.map((item, i) => {
            const open = isOpen(i)
            const num = String(i + 1).padStart(2, '0')
            return (
              <li className="faq-item" key={item.q} data-open={open ? 'true' : 'false'} style={{ '--faq-i': i }}>
                <h3 className="faq-h3">
                  <button
                    type="button"
                    className="faq-trigger"
                    id={`faq-t-${i}`}
                    aria-expanded={open}
                    aria-controls={`faq-p-${i}`}
                    onClick={() => toggle(i)}
                  >
                    <span className="faq-num" aria-hidden="true">{num}</span>
                    <span className="faq-q">{item.q}</span>
                    <span className="faq-mark" aria-hidden="true">
                      <span className="faq-mark-h" />
                      <span className="faq-mark-v" />
                    </span>
                  </button>
                </h3>
                <div
                  className="faq-panel"
                  id={`faq-p-${i}`}
                  role="region"
                  aria-labelledby={`faq-t-${i}`}
                >
                  <div className="faq-panel-inner">
                    <p className="faq-a">{item.a}</p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>

        <Reveal className="faq-foot" technique="rise" threshold={0.3}>
          <p className="faq-foot-text">Still have a question about a panel, a yard, or a transfer switch?</p>
          <a className="btn btn--primary" href={PHONE_TEL}>
            <Phone aria-hidden="true" />Call {PHONE_DISPLAY}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
