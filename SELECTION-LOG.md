# Selection log — Dart Electrical Services

Working document for the three-phase process in `section-style-repo.md`. Filled in
from Step 0 onward; both finishing passes read from and write back to it.

---

## Step 0 — Page inventory

**Subject:** Dart Electrical Services Ltd. — licensed residential, commercial and
farm/agricultural electricians working across northern and central Alberta (780).
**Audience:** homeowners with an ageing panel, and farm/acreage operators who need
standby power, yard power and livestock-waterer circuits that cannot fail in winter.
**The page's single job:** get a phone call, or a photo of the problem, from a
stranger who has never heard of this company.

**Page ambition level:** maximal-and-layered (assigned in `DIRECTION.md`).
**Primary style family:** dark-moody + bold-geometric.

### Sections, in order

| # | Section | Type file used | Imagery available |
|---|---|---|---|
| 1 | Header / Nav | navigation | none (type + rules only) |
| 2 | Hero | hero + forms (widget) | `winter-house.webp` full-bleed |
| 3 | Google Reviews | social-proof | none — deliberate; type + glass cards |
| 4 | Trust Badges Banner | credibility | none — deliberate; icon system only |
| 5 | Why Us | value-proposition | 4 photos, one per benefit |
| 6 | Services | services | 6 photos, one per service |
| 7 | Coverage / Service Area | location | none — drawn SVG province map |
| 8 | Our Story | about-story | `vans-morning.webp` full-bleed |
| 9 | FAQ | faq | none — deliberate (dense reading task) |
| 10 | Final CTA | calls-to-action | `outage-night.webp` full-bleed |
| 11 | Footer | footer | none |

### Tonal map (set at Step 0 so the page has one rhythm, not eleven)

```
HEADER  HERO    REVIEWS  TRUST   WHY US   SERVICES  COVERAGE  STORY   FAQ     CTA     FOOTER
dark    darkest graphite band    LIGHT    dark      dark      dark    LIGHT   dark    dark
```

Two light bands, placed at the two points where the page asks the reader to slow
down and actually read (the four benefit rows, and the six-question FAQ). Every
other band is a tonal step of the same near-black so the page reads as one field
with two windows cut in it, rather than a stripe pattern.

### Type & colour substitutions

| Brief names | Used | Why |
|---|---|---|
| Adelle Sans (Bold) — display | **Archivo** 600/700/800 | `BRIEF.md` substitution table. Set tight (-0.03em) and heavy per `DIRECTION.md`. |
| Aktiv Grotesk (Regular) — body | **Inter** 400/500/600 | `BRIEF.md` substitution table. |

Colours are fixed by `PROMPT.txt` and are **not** re-derived. The only additions in
`tokens.css` are neutral tonal steps interpolated between the brief's own Dark
(#212020) and Light (#FFFFFF), passing through the brief's Accent (#3A3A3A) — no
new hue is introduced. Google's four brand colours are declared as tokens solely
for the Google mark in the reviews block.

### The red problem (from `DIRECTION.md`)

Large red fields go cheap fast. Red on this page is rationed to five jobs and
nothing else: the primary button, one filled block per major section (never two),
hairline rules, the widget's progress rule, and star fills. Every large field is
near-black or paper. This is checked in the coherence sweep.

---

## Per-section decisions

### 1 — Header / Navigation
- **Layout:** Transparent-to-Solid Scroll Nav *(assigned)*. Beat Standard Horizontal Nav Bar because the hero is a full-bleed dark photograph — the nav's own **Best for** field describes exactly this case, and a solid bar at rest would cut the photograph's top edge off.
- **Visual style:** Dark Contrast Nav Band *(assigned)*. Its **Avoid when** ("the rest of the page is light and airy throughout") does not apply — the page is dark-dominant. Glass Frosted Nav Bar lost because the brand voice is plain and dependable, not tech-forward.
- **Style family:** dark-moody.
- **Animation:** Nav Background Fade-In on Scroll + Underline Grow on Hover (nav links) + CTA Button Magnetic Hover (call button, 3px pull max per its premium note).
- **Element sequence:** the bar's own fill is the only animating element on scroll (per the entry — logo, links and CTA stay put). Hover behaviours are per-element resting states. Dropdowns: Mega Menu Column Stagger Reveal, 60ms per column group, on hover and on focus-within.
- **Rationale:** the header must never compete with the hero; its whole job is to hold the phone number and disappear.

### 2 — Hero
- **Layout:** Full-Bleed Image Hero *(assigned)*, crossed with Hero with Embedded Quote/Booking Form — the widget is a mandated part of the fold, so the hero is structurally a two-column full-bleed with the form as the right column. Split-Screen Hero lost because a 50/50 split cannot hold an H1 at 2–3 lines, four badges, two CTAs *and* the widget above 900px.
- **Visual style:** Gradient Scrim *(assigned)* + Full-Bleed Background Photo with Foreground Card (`image-and-visual-richness.md`, first of the two required uses) + Layered Depth Composition (photo → scrim → red rule → foreground panel).
- **Style family:** dark-moody.
- **Animation:** Parallax Scroll Depth *(assigned)* on the photo bed only, desktop-only per its **Avoid when**; Staggered Load-In for the text stack (the fold cannot wait for a scroll trigger it never receives); CTA Micro-Interaction on both buttons.
- **Element sequence (motion budget: 5 groups):** eyebrow+red rule (0ms) → H1 (110ms, Weighted Word Reveal, once-per-page) → subhead (variable, after H1) → badge row as one group with 90ms internal stagger → CTA group (both buttons + reassurance microcopy as one unit). Widget panel enters as its own group at 260ms so it does not compete with the headline. All `data-load`, not scroll. Reduced motion: all groups render final-state instantly (kit `@media` block).
- **Rationale:** the hero is the thesis. It is the only section allowed a photograph *and* a form *and* the page's one word-reveal.

### 2a — Photo-diagnosis widget (signature element)
- **Layout:** Split Form with Trust Sidebar, compressed — the "sidebar" is a single-line credential rail inside the panel head rather than a column, because the fold has no room for a real sidebar. Standard Contact Form lost: it gives the page's most important element no visual identity at all.
- **Visual style:** Dark Mode Form Panel with a single red progress rule *(assigned)*. Its **Avoid when** ("the rest of the page is light and airy") does not apply.
- **Style family:** dark-moody / industrial-utilitarian.
- **Animation:** Field Focus Highlight; Inline Validation Feedback; Success State Confirmation Animation (the form group swaps as one state, per the entry); Cursor-Reactive Glow *(assigned, this element only, once on the page)*; plus **Diagnostic Progress Rule** — site-specific, below.
- **Element sequence:** panel enters as one unit (never field-by-field — a form that assembles itself reads as a gimmick). Inside, only the progress rule, the focus ring and the drop-zone state move.
- **Rationale:** `DIRECTION.md` names this the one element a stranger would screenshot. Everything else on the page is deliberately quieter than it.

### 3 — Google Reviews
- **Layout:** Stat Counter and Testimonial Combo *(assigned)*. Its **Avoid when** is "the numbers are not impressive enough" — 4.9/5 carries a section. Testimonial Card Grid lost because it gives the aggregate rating no place to be prominent, which the brief explicitly requires.
- **Visual style:** Glass Panel Quote Card on dark *(assigned)* + Star Rating Bold Color Accent for the aggregate block only (red fills, once).
- **Style family:** glass-depth on dark-moody.
- **Animation:** Count-Up Stat Numbers on Scroll (4.9, ease-out-expo, 1500ms, once) + Star Rating Fill Animation on Scroll (one quick sweep, not a long stagger) + Staggered Rise for the five cards + Magnetic Lift on hover.
- **Element sequence (budget: 4 groups):** section eyebrow+H2 → aggregate block (numeral counts, stars sweep as its closing beat) → review cards, 5 units, 90ms apart in reading order → placeholder disclosure line last, quiet. Threshold 0.18 / rootMargin `0px 0px -12% 0px` (kit default). Reduced motion: final number immediately, no sweep, opacity-only card entrance.
- **Rationale:** the aggregate is the ask; the five quotes are the evidence. The layout has to make that hierarchy visible, and a flat grid does not.

### 4 — Trust Badges Banner
- **Layout:** Certification Badge Wall, four cells. Awards and Press Mention Bar was rejected outright — no genuine press or awards exist, and its **Avoid when** says a padded bar undercuts trust.
- **Visual style:** Dark Framed Credential Panel *(assigned)*. Premium note applied literally: the frame is a brand-accent hairline that fades graphite→red→graphite, not a hard rectangle.
- **Style family:** dark-moody.
- **Animation:** Badge Fade and Scale-In on Scroll, plus **Badge Filament Warm-Up** — site-specific, below.
- **Element sequence (budget: 2 groups):** frame hairline draws left-to-right (wipe, 620ms) → four badges as one group, 110ms apart, each badge's icon+label moving together as one unit (never icon-then-label). Reduced motion: frame and badges render in place.
- **Rationale:** four badges, four different meaning-matched icons, one icon box size, one stroke weight, one optical baseline. The row has to read as a single manufactured object.

### 5 — Why Us
- **Layout:** Alternating Benefit List *(assigned)*. Its **Content shape** wants image + 30–60 words per benefit; the brief supplies exactly that, four times. Icon + Blurb Grid lost because it would waste four genuinely good photographs and flatten four points that are not equal in weight.
- **Visual style:** Filled Icon Badges *(assigned)* + Image with Color-Block Corner Accent (`image-and-visual-richness.md`) — one red corner block per row, alternating side with the zig-zag.
- **Style family:** bold-geometric on paper.
- **Animation:** Sequential Reveal on Scroll + Hover Tilt and Lift replaced by a restrained image-only scale (the rows are not cards; tilting a photographic row reads cheap).
- **Element sequence (budget: 4 groups, one per row):** per row, image (Depth Settle, 800ms) and text block (Staggered Rise) enter as two beats 140ms apart, direction following the zig-zag's reading order (image-first on left-image rows, text-first on right-image rows). Icon badge is part of the text unit, not its own beat. Reduced motion: opacity only.
- **Rationale:** this is the page's first light band and its first slow read — the layout has to give each point room rather than compress four ideas into one scannable row.

### 6 — Services
- **Layout:** Service Card Grid *(assigned)*, 6 items, 3×2 on desktop. Its **Content shape** field asks for 4–8 items with a short title and 1–2 sentences each — exactly the brief's shape. Zig-Zag Alternating lost because Why Us already owns that shape on this page.
- **Visual style:** Duotone Image Treatment per Service *(assigned)* — near-black to brand red, applied through a blend layer so the photograph stays a photograph.
- **Style family:** dark-moody.
- **Animation:** Staggered Grid Fade-In on Scroll (grouped by row, not itemised, per the entry) + Image Zoom on Hover, plus **Duotone Bleed-Back on hover** — site-specific, below.
- **Element sequence (budget: 3 groups):** section head → row 1 (3 cards, 90ms apart) → row 2 (3 cards, 90ms apart). Card icon+title+copy move as one unit. Reduced motion: opacity only, duotone stays static.
- **Rationale:** six services of genuinely similar scope; the grid is the honest structure. The duotone is what stops it being a stock card grid.

### 7 — Coverage / Service Area
- **Layout:** Service Area List or Coverage Zone Grid. Map Embed with Address Card was rejected: no confirmed address exists, and its **Avoid when** covers exactly this (a single pin underselling a regional reach).
- **Visual style:** Dark Map Skin with Glow Pin *(assigned)* — a drawn SVG Alberta with a graticule, one tight red glow pin. Premium note applied: the glow is kept tight to the pin.
- **Style family:** dark-moody / industrial-utilitarian.
- **Animation:** Map Pin Drop-In Animation + Coverage Zone Highlight on Hover.
- **Element sequence (budget: 3 groups):** map panel (Depth Settle) → pin drop + tight glow as the map's closing beat, 400ms after → five coverage-type rows staggering 80ms apart. Reduced motion: pin renders in place, no drop, no pulse.
- **Rationale:** no city is confirmed anywhere in the source material, so the section is built to be honest about a region rather than to fake a town list.

### 8 — Our Story
- **Layout:** Single-Column Long-Form Story *(assigned)*. Chronological Timeline lost — no dated milestones exist and its **Avoid when** warns against stretching a thin history.
- **Visual style:** Dark Cinematic Narrative Band *(assigned)* + Full-Bleed Background Photo with Foreground Card (second required use of the featured image technique).
- **Style family:** dark-moody / editorial.
- **Animation:** Photo Slow Zoom on Load (very slow ambient, background layer only) + Progressive Reveal Scrub on the three paragraphs.
- **Element sequence (budget: 3 groups):** values kicker → H2 → three paragraphs, each scrubbing to full clarity as it nears viewport centre. The photograph is a continuous independent layer, never tied to the text. Reduced motion: static photo, full-clarity text.
- **Rationale:** the copy is three real paragraphs of prose. Anything other than a single column would fight it.

### 9 — FAQ
- **Layout:** Classic Accordion List *(assigned)*, 6 pairs — its **Content shape** field wants 6–12.
- **Visual style:** **Deviation.** Assigned Dark Mode Technical FAQ; built as a light-ground technical accordion — hairline dividers, oversized graphite numerals, tabular question index. *Justification: the assigned option lost against page rhythm, not against fit. Coverage, Story, Final CTA and Footer are all dark-moody; a dark FAQ makes a five-band unbroken dark run in which hairline dividers stop reading, and the FAQ is the densest reading task on the page. The technical register the assignment was chosen for is preserved — numerals, hairlines, tight grid — only the ground is inverted.* Numbered Question Treatment is the entry actually used.
- **Style family:** editorial / industrial-utilitarian.
- **Animation:** Accordion Expand and Collapse with Height Transition + Icon Rotate on Expand (plus→minus, 200ms, tied 1:1 to the click) + Staggered Fade-In on Scroll.
- **Element sequence (budget: 2 groups):** section head → six question rows, 70ms apart, question text + numeral + icon as one unit per row. Reduced motion: instant open/close, no rotation.
- **Rationale:** six questions is exactly accordion territory; a conversational feed would put ~350 words of answer copy on screen at once.

### 10 — Final CTA
- **Layout:** Full-Width CTA Banner *(assigned)*. Split CTA with Form was considered and rejected on the banner entry's own **Avoid when** — a banner wants brevity, and the page already carries a form that is meant to be its most designed element. Adding a second form here would take pressure off the widget rather than add conversion.
- **Visual style:** Dark Cinematic CTA Background *(assigned)* + Full-Bleed Background Photo with Foreground Card (third, lighter use).
- **Style family:** dark-moody.
- **Animation:** Banner Background Slow Pan (continuous, background layer only) + Button Magnetic Hover on the primary tel: button (small pull, per its premium note).
- **Element sequence (budget: 2 groups):** H2 + supporting sentence as one grouped beat → call/text button pair + reassurance line as the second. Reduced motion: static background, no pan.
- **Rationale:** one ask, no distractions, the phone number at the largest type size it appears anywhere on the page.

### 11 — Footer
- **Layout:** Footer with Trust Strip *(assigned)*, four columns exactly as the brief specifies, with a trust strip above them.
- **Visual style:** Dark Contrast Footer Band *(assigned)*.
- **Style family:** dark-moody.
- **Animation:** Link Column Staggered Fade-In on Scroll + Social Icon Hover + Underline Sweep on every footer link.
- **Element sequence (budget: 3 groups):** trust strip → four columns staggering left to right, 90ms apart, each column's heading and links moving as one unit → legal line last. Reduced motion: opacity only.
- **Rationale:** the footer is the last reassurance and the last phone number; the trust strip earns its place because the CTA above it is deliberately content-free.

---

## Site-specific motion techniques (written for this build, not in the kit)

1. **Diagnostic Progress Rule** *(widget)* — a red hairline across the panel head that advances as the three required inputs are satisfied. State-linked, not scroll-linked or time-linked. 420ms, ease-out-quart, `transform: scaleX()` on a composited layer. Derived from Multi-Step Progress Bar Transition (`animations/forms.md`) applied to a single-page form. Reduced motion: width applies instantly, no transition.
2. **Badge Filament Warm-Up** *(trust banner)* — each badge glyph's stroke transitions graphite→red over 420ms on a 110ms chain as the row enters, like four filaments coming up in sequence, then holds. Derived from Badge Fade and Scale-In on Scroll plus the Sequential Line Draw idea of a chained, directional arrival. Reduced motion: final colour immediately.
3. **Two-Tone Rule Draw** *(every section header)* — the section rule draws full width in graphite (620ms, ease-out-quart), then a short red segment slides along it 140ms later. Composite of Sequential Line Draw and Underline Draw Animation. Reduced motion: both segments render in place.
4. **Duotone Bleed-Back** *(service cards)* — on hover, a service card's red/black duotone blend fades off over 520ms and the photograph returns to full colour underneath, with the image scaling 1.0→1.05. Derived from Image Zoom on Hover plus the Duotone Image Treatment visual style. Reduced motion: no scale, no fade; the duotone holds.

---

## Screenshot critique rounds

**Round 1** (desktop + mobile fold, desktop full, plus section-level captures at
1440 and 390 so mid-page composition could be judged at real scale rather than as
a 300px-wide thumbnail):

| Found | Fixed |
|---|---|
| `WordReveal`'s per-word `overflow: hidden` swallowed the word spaces — the H1 rendered as *TrustedElectriciansServingFarms* | restored the space with a `margin-inline-end` on every word but the last |
| H1 wrapped over **4** lines, not the required 2–3 | dropped the display step and widened the measure; now 3 lines on desktop, tablet and mobile |
| The hero photograph was invisible — a dusk photo at `brightness(0.72)` under a heavy scrim | raised exposure and re-cut the scrim so it stays opaque under the type and opens up across the middle and behind the panel |
| Six service cards read as one large pink field — exactly the failure `DIRECTION.md` warns about | duotone rebuilt: red now arrives only in the top corner and drops out to neutral graphite by mid-frame, at 0.4 opacity |
| Trust banner sat almost flush with its own band and had no presence | lifted the panel's top tone, larger icon boxes, bigger labels, stronger dividers |
| Why Us was photos on flat white — no compositional intent | added an offset pale plane behind each photo and a hard red edge on the outer side, tightened the column gap, hairline under each H3 |
| Coverage map: province barely legible, glow too diffuse | brighter shape and stroke, tighter glow, visible graticule, latitude ticks moved outside the outline into a widened viewBox |
| Story photograph was effectively black | raised exposure, re-cut the scrim so the vans read on the right |
| FAQ index numerals were too small to be the "distinctly different scale" the entry's premium note asks for | numerals up to `--fs-xl` monospace against the tight heavy display question type |
| Final CTA's reassurance line broke into two columns — the inline link became its own flex item | wrapped the copy in a single span |
| Hero left a dead 150px strip under the content at 1440×900 | hero now fills the viewport so its closing red rule lands on the fold line, with a scroll cue in the recovered space |
| Mobile header led with a near-full-width call button at rest | at rest it is a compact call chip; it expands to a full-width click-to-call once scrolling starts |
| Trust badge note wrapped on badge 2, breaking the row's shared baseline | notes shortened so all four sit on one line |

**Round 2** (folds re-shot, sections re-captured, plus a scripted pass that drives
the widget through empty → error → filled → success, a breakpoint sweep at
390/480/768/1024/1280/1440/1920, a 26-stop tab walk and a reduced-motion render):

| Found | Fixed |
|---|---|
| `.why-offset` pushed the document 4–8px wider than the viewport at 768 and 1024 | offset distance now sits inside the gutter at every breakpoint, and the plane drops out below 640px |
| The widget's three fields had `outline: none` on `:focus-visible` — the red shadow ring was doing the job, but a keyboard user got no outline | outline handed back to the base focus ring; the red field state stacks on top |
| The success state said "Photo Received" even when the visitor sent a description only | title is now conditional |

Everything else the sweeps checked came back clean: no horizontal overflow at any
of the seven widths, no element left at opacity 0 under reduced motion, both nav
dropdowns and all six accordion triggers correctly wired with
`aria-expanded`/`aria-controls`.

---

## Pass 1 — Elevation sweep

Section by section, re-reading each one's visual-styles, animations and
`image-and-visual-richness.md` entries.

| Section | Outcome |
|---|---|
| Header | **Left as-is.** Already carries transparent-to-solid, a staggered mega-menu, underline sweep and a magnetic CTA. Its job is to hold the phone number and get out of the way. |
| Hero | **Elevated.** Added the Scroll-Cue Bounce Indicator (`animations/hero.md`) — its **Best for** field is literally "full-viewport-height heroes where it isn't obvious there's more content below", which became true the moment the hero was given `min-height: 100vh`. Built as a travelling red segment on a hairline rather than a bouncing arrow. |
| Photo widget | **Left as-is at maximum ambition**, but the states were verified rather than assumed — the empty, error, filled and success screens were each driven and looked at. The success state gained a conditional title. |
| Google Reviews | **Elevated.** The aggregate panel now stretches to the card grid's full height with its meta pinned to the bottom, and the fifth quote — which spans the row — is set as a pull-quote at `--fs-xl` so the grid ends on a considered note instead of a half-empty row. |
| Trust Badges | **Left as-is.** Four badges, four icons, one box, one stroke, one baseline. The entry's premium note (accent hairline frame, not a hard rectangle) is already implemented; more would break the "reads as one manufactured object" requirement. |
| Why Us | **Elevated.** Image with Color-Block Corner Accent was upgraded from a thin bar at the image's corner to a hard red edge on the outer side, and a pale offset plane was added behind each photograph — real depth on the page's airiest band. |
| Services | **Elevated.** Added Duotone Bleed-Back (site-specific) and a red edge rule that draws across the card foot on hover, so the grid is not inert under the cursor. |
| Coverage | **Elevated.** Latitude ticks and a `780 AREA` boundary label added — the "technical precision" register the Industrial Grid Coverage entry sits next to, without inventing a town name. Deliberately **not** given ambient motion: Slow Ambient Drift's **Avoid when** rules it out beside the pin-drop and hover behaviour already in the section. |
| Our Story | **Left as-is.** Photo drift plus a scroll-linked reading rule is the right amount for a three-paragraph read; the content does not support more. |
| FAQ | **Elevated modestly** (numeral scale), otherwise left quiet on purpose — this is the page's deliberate reading moment and the densest text on it. |
| Final CTA | **Left as-is.** Brevity is the point; the layout entry's **Avoid when** rules out adding supporting content. |
| Footer | **Elevated.** Added Back-to-Top Button Scroll Reveal (`animations/footer.md`) — the page runs ~9,900px on desktop and ~14,500px on mobile, which is exactly the "long pages where returning to the top is genuinely useful" case. Desktop only, since mobile already carries the sticky call bar. |

Completeness check against the Step 5 element inventories: every logged group is
actually built. The one gap found was the hero — the badge row and CTA group were
entering on the same beat as the subhead; they now have their own delays (880ms
and 1000ms) so the fold assembles in reading order rather than as one block.

---

## Pass 2 — Coherence sweep

Fresh eyes on the whole page after Pass 1 landed.

1. **Red budget.** Counted every red element. Two problems: the five review-card
   avatars and the six service-card icon tiles were both solid red blocks, which
   together with Why Us's (assigned) Filled Icon Badges made fifteen small red
   squares down the page and started to read as a pattern rather than an accent.
   - Review avatars → graphite with a hairline; they fill red only on card hover.
     The section's single red anchor is now the aggregate panel's top rule.
   - Service icon tiles → near-black with a red hairline and a red glyph, filling
     red on hover. Why Us keeps the filled treatment, since it is the assigned
     visual style for that section.
2. **Motion budget.** Three continuous loops existed: the hero scroll cue, the
   Story photograph's drift and the Final CTA's background pan. Slow Ambient
   Drift's **Avoid when** warns against stacking continuous background motion
   behind active foreground motion, and the hero is the busiest section on the
   page. The cue now runs three passes and stops — a cue that loops forever
   becomes furniture — leaving two ambient loops, both in short sections with no
   scroll-linked foreground.
3. **Tonal rhythm.** Confirmed the Step 0 map survived: two light bands, at the
   two points where the reader is asked to slow down, and every dark band a
   different step of the same near-black (`#0E0D0D` → `#151414` → `#1A1919`).
   Services (dark) and Coverage (deep) sit adjacent but are separated by a
   near-black CTA strip and read as different objects.
4. **Section-head variety.** Four sections use the split head, two use a single
   column, one is centred. Kept.
5. **Nothing walked back.** No Pass 1 change made the page busier; the two Pass 2
   edits above are both reductions.

---

## Build note

`vite.config.js` needed one line beyond what the kit ships. The shared
`src/lib/motion.js` contains JSX, and Vite 5's `esbuild` option defaults its
`exclude` filter to `/\.js$/` — so an `include` filter alone never reaches that
file and the build fails to parse it. `exclude: []` is set explicitly alongside
the include filter. Nothing else in the config was touched.
