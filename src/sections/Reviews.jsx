import { Star, Quote } from 'lucide-react'
import { Reveal, Stagger, useCountUp } from '../lib/motion.js'
import { REVIEWS } from '../data/site.js'
import './reviews.css'

function GoogleMark({ size = 20 }) {
  return (
    <svg className="rv-g" viewBox="0 0 48 48" width={size} height={size} aria-hidden="true" focusable="false">
      <path fill="var(--g-blue)" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z" />
      <path fill="var(--g-green)" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z" />
      <path fill="var(--g-yellow)" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z" />
      <path fill="var(--g-red)" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z" />
    </svg>
  )
}

/* Star Rating Fill Animation on Scroll — one quick sweep, not a long stagger. */
function Stars({ big = false, sweep = false }) {
  return (
    <span className={`rv-stars${big ? ' rv-stars--big' : ''}`} data-sweep={sweep ? 'true' : 'false'}>
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} aria-hidden="true" fill="currentColor" style={{ '--star-i': i }} />
      ))}
      <span className="sr-only">Rated 5 out of 5 stars</span>
    </span>
  )
}

export default function Reviews() {
  const [numRef, value] = useCountUp(4.9, { duration: 1500, decimals: 1 })

  return (
    <section className="rv section band-raised" id="reviews" aria-labelledby="rv-title">
      <div className="shell">
        <Reveal className="rv-head sect-head sect-head--split" technique="rise">
          <div>
            <span className="tone-rule rv-rule" style={{ '--tone-seg': '30%' }} aria-hidden="true" />
            <p className="eyebrow eyebrow--dark rv-eyebrow">
              <span className="eyebrow-mark" aria-hidden="true" />Google Reviews
            </p>
            <h2 id="rv-title">What Alberta Homeowners And Farms Say</h2>
          </div>
          <p className="sect-lede">
            Five recent write-ups from the properties we work on — a grain-drying yard, a livestock waterer,
            a shop build, and two houses with panels well past their service life.
          </p>
        </Reveal>

        <div className="rv-body">
          <Reveal className="rv-agg" technique="settle" threshold={0.3}>
            <div className="rv-agg-top">
              <GoogleMark size={22} />
              <span className="rv-agg-src">Google Reviews</span>
            </div>
            <p className="rv-agg-num" ref={numRef}>
              <span className="rv-agg-value">{value.toFixed(1)}</span>
              <span className="rv-agg-of">/ 5</span>
            </p>
            <Stars big sweep />
            <h3 className="rv-agg-title">Aggregate Google Rating</h3>
            <p className="rv-agg-line">4.9 out of 5 stars, based on real Google reviews</p>
            <dl className="rv-agg-meta">
              <div><dt>Reviews shown</dt><dd>5</dd></div>
              <div><dt>All five-star</dt><dd>Yes</dd></div>
            </dl>
          </Reveal>

          <Stagger className="rv-list" itemClassName="rv-cell" technique="rise" step={90} threshold={0.12}>
            {REVIEWS.map((r) => (
              <article className="rv-card" key={r.name}>
                <Quote className="rv-card-quote" aria-hidden="true" />
                <div className="rv-card-top">
                  <Stars />
                  <span className="rv-card-tag">{r.focus}</span>
                </div>
                <blockquote className="rv-card-text">{r.text}</blockquote>
                <footer className="rv-card-foot">
                  <span className="rv-card-avatar" aria-hidden="true">{r.initial}</span>
                  <span className="rv-card-who">
                    <cite className="rv-card-name">{r.name}</cite>
                    <span className="rv-card-src"><GoogleMark size={12} />Posted on Google</span>
                  </span>
                </footer>
              </article>
            ))}
          </Stagger>
        </div>

        <p className="placeholder-note rv-note">
          Placeholder reviews — representative wording pending the real Google Business Profile feed.
        </p>
      </div>
    </section>
  )
}
