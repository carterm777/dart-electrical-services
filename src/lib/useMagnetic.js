/* Button Magnetic Hover — the pull is kept to a few pixels, per the entry's
   premium execution note. Pointer-fine devices only; no-ops under reduced
   motion so the button simply behaves as a normal button. */
import { useEffect, useRef } from 'react'
import { prefersReducedMotion } from './motion.js'

export function useMagnetic(strength = 0.16, max = 4) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return
    if (window.matchMedia('(hover: none)').matches) return
    const clamp = (v) => Math.max(-max, Math.min(max, v))
    const move = (e) => {
      const r = el.getBoundingClientRect()
      el.style.setProperty('--mag-x', `${clamp((e.clientX - (r.left + r.width / 2)) * strength).toFixed(2)}px`)
      el.style.setProperty('--mag-y', `${clamp((e.clientY - (r.top + r.height / 2)) * strength).toFixed(2)}px`)
    }
    const reset = () => {
      el.style.setProperty('--mag-x', '0px')
      el.style.setProperty('--mag-y', '0px')
    }
    el.addEventListener('pointermove', move)
    el.addEventListener('pointerleave', reset)
    return () => {
      el.removeEventListener('pointermove', move)
      el.removeEventListener('pointerleave', reset)
    }
  }, [strength, max])
  return ref
}
