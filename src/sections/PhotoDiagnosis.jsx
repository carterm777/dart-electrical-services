import { useMemo, useState } from 'react'
import { Camera, ImagePlus, X, ShieldCheck, Check, Phone, ArrowRight } from 'lucide-react'
import { usePhotoDiagnosis } from '../lib/usePhotoDiagnosis.js'
import { useCursorGlow } from '../lib/motion.js'
import { PHONE_DISPLAY, PHONE_TEL } from '../data/site.js'
import './photo-diagnosis.css'

/* The page's signature element.
   Visual style: Dark Mode Form Panel with a single red progress rule.
   Motion: Cursor-Reactive Glow (this element only, once on the page) plus the
   site-specific Diagnostic Progress Rule — a red hairline that advances as the
   three inputs are satisfied. */
export default function PhotoDiagnosis() {
  const pd = usePhotoDiagnosis()
  const glowRef = useCursorGlow()
  /* Compact initial state on small screens so the widget still clears the fold
     at 390x844. CSS owns the collapse, so there is no first-paint flash. */
  const [expanded, setExpanded] = useState(false)
  const open = () => setExpanded(true)

  const steps = useMemo(() => {
    const digits = pd.fields.phone.replace(/\D/g, '')
    return [
      { key: 'photo', label: 'Photo', done: Boolean(pd.file) },
      { key: 'detail', label: 'Detail', done: pd.fields.description.trim().length > 3 },
      { key: 'contact', label: 'Contact', done: pd.fields.name.trim().length > 1 && digits.length >= 10 },
    ]
  }, [pd.file, pd.fields])

  const completed = steps.filter((s) => s.done).length
  const progress = completed / steps.length

  const ref = useMemo(
    () => `DE-${String(new Date().getFullYear()).slice(2)}-${String(1040 + Math.floor(Math.random() * 860))}`,
    [],
  )

  return (
    <div className="pd" ref={glowRef} data-glow-surface data-expanded={expanded ? 'true' : 'false'}>
      <span className="pd-corner pd-corner--tl" aria-hidden="true" />
      <span className="pd-corner pd-corner--br" aria-hidden="true" />

      <div className="pd-head">
        <div className="pd-head-row">
          <span className="pd-kicker"><Camera aria-hidden="true" />Photo Diagnosis</span>
          <span className="pd-count" aria-live="polite">
            {pd.status === 'done' ? 'Sent' : `${completed} of 3 ready`}
          </span>
        </div>
        <h2 className="pd-title">Send a Photo, Get a Straight Answer</h2>
        <p className="pd-sub">
          Snap the panel, the scorched outlet, or the yard pole. We look at it and call you back with an
          honest read — repair or replace, and what it takes.
        </p>
      </div>

      {/* Site-specific motion #1 — Diagnostic Progress Rule */}
      <div className="pd-progress" role="presentation">
        <span
          className="pd-progress-fill"
          style={{ transform: `scaleX(${pd.status === 'done' ? 1 : progress})` }}
        />
        <ul className="pd-progress-legend list-reset" aria-hidden="true">
          {steps.map((s) => (
            <li key={s.key} data-done={s.done || pd.status === 'done' ? 'true' : 'false'}>{s.label}</li>
          ))}
        </ul>
      </div>

      {pd.status === 'done' ? (
        <div className="pd-done" role="status">
          <span className="pd-done-mark" aria-hidden="true">
            <svg viewBox="0 0 44 44" width="44" height="44" fill="none">
              <circle cx="22" cy="22" r="20.5" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
              <path
                className="pd-done-tick"
                d="M13 22.6 19.3 29 31.5 16"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="square"
              />
            </svg>
          </span>
          <h3 className="pd-done-title">{pd.file ? 'Photo Received' : 'Details Received'}</h3>
          <p className="pd-done-copy">
            Thanks {pd.fields.name.trim().split(' ')[0] || 'for that'} — an electrician has it in front of them.
            We’ll call {pd.fields.phone} with a straight answer, usually the same working day.
          </p>
          <dl className="pd-done-meta">
            <div><dt>Reference</dt><dd>{ref}</dd></div>
            <div><dt>Photo</dt><dd>{pd.file ? pd.file.name : 'Description only'}</dd></div>
          </dl>
          <div className="pd-done-actions">
            <a className="btn btn--primary btn--block" href={PHONE_TEL}>
              <Phone aria-hidden="true" />Call {PHONE_DISPLAY} Now
            </a>
            <button type="button" className="pd-reset" onClick={pd.reset}>
              <span className="sweep">Send another photo</span>
              <ArrowRight aria-hidden="true" />
            </button>
          </div>
        </div>
      ) : (
        <form className="pd-form" onSubmit={pd.submit} noValidate>
          <div
            className="pd-drop"
            data-drag={pd.dragging ? 'true' : 'false'}
            data-filled={pd.preview ? 'true' : 'false'}
            {...pd.dropProps}
            onDrop={(e) => { pd.dropProps.onDrop(e); open() }}
          >
            <input
              ref={pd.inputRef}
              id="pd-file"
              className="sr-only"
              type="file"
              accept={pd.accepted}
              onChange={(e) => { pd.onFileInput(e); open() }}
            />
            {pd.preview ? (
              <div className="pd-preview">
                <img src={pd.preview} alt="Preview of the photo you selected" />
                <div className="pd-preview-meta">
                  <p className="pd-preview-name">{pd.file?.name}</p>
                  <p className="pd-preview-size">{(pd.file?.size / 1024 / 1024).toFixed(2)} MB · attached</p>
                </div>
                <button type="button" className="pd-preview-clear" onClick={pd.clearPhoto} aria-label="Remove this photo">
                  <X aria-hidden="true" />
                </button>
              </div>
            ) : (
              <button type="button" className="pd-drop-trigger" onClick={pd.openPicker}>
                <span className="pd-drop-icon" aria-hidden="true"><ImagePlus /></span>
                <span className="pd-drop-copy">
                  <span className="pd-drop-lead">Add a photo of the problem</span>
                  <span className="pd-drop-hint">Drag it in, or browse — JPG, PNG or HEIC, up to 10MB. Optional.</span>
                </span>
              </button>
            )}
          </div>
          {pd.errors.file && <p className="pd-error">{pd.errors.file}</p>}

          <button type="button" className="pd-more" onClick={open}>
            <span className="sweep">No photo handy? Describe it instead</span>
            <ArrowRight aria-hidden="true" />
          </button>

          <div className="pd-rest">
          <div className="pd-field">
            <label htmlFor="pd-desc">What’s going on?</label>
            <textarea
              id="pd-desc"
              rows={2}
              placeholder="Breaker keeps tripping in the shop, panel is original to the house…"
              value={pd.fields.description}
              onChange={pd.setField('description')}
              aria-invalid={pd.errors.description ? 'true' : undefined}
            />
            {pd.errors.description && <p className="pd-error">{pd.errors.description}</p>}
          </div>

          <div className="pd-grid">
            <div className="pd-field">
              <label htmlFor="pd-name">Name</label>
              <input
                id="pd-name"
                type="text"
                autoComplete="name"
                placeholder="Wade Hartley"
                value={pd.fields.name}
                onChange={pd.setField('name')}
                aria-invalid={pd.errors.name ? 'true' : undefined}
              />
              {pd.errors.name && <p className="pd-error">{pd.errors.name}</p>}
            </div>
            <div className="pd-field">
              <label htmlFor="pd-phone">Phone</label>
              <input
                id="pd-phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="780 555 0134"
                value={pd.fields.phone}
                onChange={pd.setField('phone')}
                aria-invalid={pd.errors.phone ? 'true' : undefined}
              />
              {pd.errors.phone && <p className="pd-error">{pd.errors.phone}</p>}
            </div>
          </div>

          <button type="submit" className="btn btn--primary btn--block pd-submit" disabled={pd.status === 'sending'}>
            {pd.status === 'sending' ? (
              <><span className="spinner" aria-hidden="true" />Sending your photo…</>
            ) : (
              <><Check aria-hidden="true" />Send It to an Electrician</>
            )}
          </button>
          </div>

          <p className="reassure reassure--dark pd-reassure">
            <ShieldCheck aria-hidden="true" />
            No cost, no obligation, and we never share your information.
          </p>
        </form>
      )}
    </div>
  )
}
