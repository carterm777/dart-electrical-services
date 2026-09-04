import { Phone, ArrowUp } from 'lucide-react'
import { useScrollY } from '../lib/motion.js'
import { PHONE_DISPLAY, PHONE_TEL } from '../data/site.js'
import './sticky.css'

/* Sticky Bar Slide-In on Scroll Threshold — call-only, and deliberately absent
   at the top of the page so it never eats into the mobile fold.
   Back-to-Top Button Scroll Reveal rides alongside it on desktop, where the
   page is long enough for the return trip to be worth a control. */
export default function StickyCall() {
  const y = useScrollY()
  return (
    <>
      <div className="stc" data-show={y > 420 ? 'true' : 'false'}>
        <a className="stc-link" href={PHONE_TEL}>
          <Phone aria-hidden="true" />
          <span className="stc-text">
            <span className="stc-lead">Call Dart Electrical</span>
            <span className="stc-num">{PHONE_DISPLAY}</span>
          </span>
        </a>
      </div>

      <a className="totop" href="#top" data-show={y > 1600 ? 'true' : 'false'} aria-label="Back to the top of the page">
        <ArrowUp aria-hidden="true" />
      </a>
    </>
  )
}
