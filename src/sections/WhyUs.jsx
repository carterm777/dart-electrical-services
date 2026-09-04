import { HeartHandshake, Tractor, HardHat, ClipboardCheck } from 'lucide-react'
import { Reveal } from '../lib/motion.js'
import { WHY_US } from '../data/site.js'
import './why.css'

const ICONS = { HeartHandshake, Tractor, HardHat, ClipboardCheck }

export default function WhyUs() {
  return (
    <section className="why section band-light" id="why" aria-labelledby="why-title">
      <div className="shell">
        <Reveal className="why-head sect-head sect-head--split" technique="rise">
          <div>
            <span className="tone-rule tone-rule--light why-rule" style={{ '--tone-seg': '34%' }} aria-hidden="true" />
            <p className="eyebrow eyebrow--light why-eyebrow">
              <span className="eyebrow-mark" aria-hidden="true" />Why Dart
            </p>
            <h2 id="why-title">Four Reasons People Keep The Number</h2>
          </div>
          <p className="sect-lede">
            Honesty, integrity, safety and quality are the four words this company states out loud.
            Here is what each one looks like once the truck is in the yard.
          </p>
        </Reveal>

        <ul className="why-list list-reset">
          {WHY_US.map((item, i) => {
            const Icon = ICONS[item.icon]
            return (
              <li className="why-row" key={item.title} data-flip={i % 2 === 1 ? 'true' : 'false'}>
                <figure className="why-media">
                  <span className="why-offset" aria-hidden="true" />
                  <Reveal as="span" className="why-frame" technique="settle" threshold={0.2}>
                    <img
                      src={item.img}
                      alt={item.alt}
                      width="2000"
                      height="1125"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="why-corner" aria-hidden="true" />
                  </Reveal>
                </figure>

                <Reveal className="why-text" technique="rise" delay={140} threshold={0.2}>
                  <span className="why-icon" aria-hidden="true"><Icon /></span>
                  <h3 className="why-h3">{item.title}</h3>
                  <span className="why-hair" aria-hidden="true" />
                  <p className="why-body">{item.body}</p>
                </Reveal>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
