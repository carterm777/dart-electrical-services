import { Reveal, useScrub } from '../lib/motion.js'
import { STORY, VALUES } from '../data/site.js'
import './story.css'

export default function Story() {
  /* Progressive Reveal Scrub, applied to the reading rule rather than the prose
     itself — the rule fills as the reader moves through the section, and the
     text never sits at reduced clarity while it is being read. */
  const scrubRef = useScrub({ disableBelow: 700 })

  return (
    <section className="story section section--loose band-deep grain" id="story" aria-labelledby="story-title">
      <div className="story-bed" aria-hidden="true">
        <img
          src="/images/vans-morning.webp"
          alt=""
          width="2000"
          height="1125"
          loading="lazy"
          decoding="async"
          data-ambient
          style={{ '--ambient-dur': '26s' }}
        />
        <span className="story-scrim" />
      </div>

      <div className="shell story-shell">
        <Reveal className="story-head" technique="rise">
          <span className="tone-rule story-rule" style={{ '--tone-seg': '28%' }} aria-hidden="true" />
          <p className="eyebrow eyebrow--dark story-eyebrow">
            <span className="eyebrow-mark" aria-hidden="true" />Our Story
          </p>
          <h2 id="story-title">What This Business Runs On</h2>
          <ul className="story-values list-reset">
            {VALUES.map((v) => <li key={v}>{v}</li>)}
          </ul>
        </Reveal>

        <div className="story-body" ref={scrubRef}>
          <span className="story-progress" aria-hidden="true"><span className="story-progress-fill" /></span>
          <div className="story-prose">
            {STORY.map((p, i) => (
              <Reveal as="p" key={i} className={i === 0 ? 'story-p story-p--lede' : 'story-p'} technique="rise" delay={i * 90} threshold={0.16}>
                {p}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
