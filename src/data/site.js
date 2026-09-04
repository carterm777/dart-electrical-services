/* Single source of truth for every string the page renders.
   Copy is taken verbatim from PROMPT.txt; anything the brief left unwritten
   (button labels, eyebrows, empty states) is written in its stated voice —
   plain, values-forward, comfortable with a house panel and a farmyard
   transfer switch in the same breath. */

export const PHONE_DISPLAY = '(780) 352-3201'
export const PHONE_TEL = 'tel:+17803523201'
export const PHONE_SMS = 'sms:+17803523201'
export const EMAIL = 'contact@dartelectricalservices.com'
export const EMAIL_HREF = 'mailto:contact@dartelectricalservices.com'
export const LOCATION = 'Alberta, Canada'
export const BUSINESS = 'Dart Electrical Services'

export const SERVICE_LINKS = [
  'Residential Wiring',
  'Commercial Electrical',
  'Farm & Acreage Electrical',
  'Livestock Water System Wiring',
  'Standby Power & Transfer Switches',
  'Panel Upgrades & Replacements',
  'Lighting Installation',
  'Electrical Troubleshooting',
  'Renovation Wiring',
  'New Construction Wiring',
  'Electrical Safety Inspections',
  'Outbuilding & Shop Wiring',
]

export const AREA_LINKS = [
  'Rural & Acreage Properties',
  'Farm & Livestock Operations',
  'Residential Service',
  'Commercial Service',
  'New Construction',
]

export const NAV = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#story' },
  { label: 'Services', href: '#services', menu: SERVICE_LINKS, menuHref: '#services' },
  { label: 'Service Areas', href: '#coverage', menu: AREA_LINKS, menuHref: '#coverage' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Blog', href: '#site-footer' },
  { label: 'Contact', href: '#contact' },
]

export const HERO = {
  eyebrow: 'Serving Northern & Central Alberta',
  h1: 'Trusted Electricians Serving Farms & Homes Across Alberta',
  sub: 'Licensed electrical work built on honesty, safety, and quality, from a house panel to a farmyard’s standby power and livestock water system.',
}

export const VALUE_BADGES = [
  { label: 'Satisfaction Guarantee', icon: 'HeartHandshake' },
  { label: 'Licensed & Insured', icon: 'ShieldCheck' },
  { label: 'Free Estimates', icon: 'ClipboardList' },
  { label: 'Safety-First Standards', icon: 'HardHat' },
]

export const REVIEWS = [
  {
    name: 'Wade H.',
    initial: 'W',
    focus: 'Standby power',
    text: 'Installed a transfer switch before harvest so we wouldn’t lose power to the grain dryers. Worked with our schedule, not theirs.',
  },
  {
    name: 'Colleen B.',
    initial: 'C',
    focus: 'Livestock waterers',
    text: 'Rewired our livestock waterer system before the ground froze. Knew exactly what a working farm needs.',
  },
  {
    name: 'Trevor N.',
    initial: 'T',
    focus: 'Quoting',
    text: 'Quoted straight, showed up on time, and walked me through the panel before they left.',
  },
  {
    name: 'Sherry D.',
    initial: 'S',
    focus: 'Panel safety',
    text: 'Called about a house panel that was clearly outdated. Explained the risk honestly instead of pushing an upsell.',
  },
  {
    name: 'Blake M.',
    initial: 'B',
    focus: 'Shop wiring',
    text: 'Handled the wiring for our shop build. Safety was never an afterthought with this crew.',
  },
]

export const TRUST_BADGES = [
  { label: 'Licensed & Insured', icon: 'BadgeCheck', note: 'Every job, every property type' },
  { label: 'Locally Owned & Operated', icon: 'MapPin', note: 'Alberta owned, Alberta run' },
  { label: 'Years of Experience', icon: 'Award', note: 'Homes, shops and working farms' },
  { label: 'Satisfaction Guaranteed', icon: 'ThumbsUp', note: 'We stand behind what we leave' },
]

export const WHY_US = [
  {
    n: '01',
    title: 'Values You Can See on the Job',
    icon: 'HeartHandshake',
    body: 'Honesty, integrity, safety, and quality aren’t slogans here. They show up in how a job gets quoted, wired, and cleaned up after.',
    img: '/images/explaining-panel.webp',
    alt: 'Electrician’s hand pointing out individual breakers inside an open panel while explaining the work.',
  },
  {
    n: '02',
    title: 'Real Farm Electrical Experience',
    icon: 'Tractor',
    body: 'Standby power hookups and livestock water system wiring are a genuine part of this business, handled by people who understand the real demands of a working farm.',
    img: '/images/generator-hero.webp',
    alt: 'Standby generator and transfer switch mounted on a concrete pad beside a house in deep snow.',
  },
  {
    n: '03',
    title: 'Safety Comes First, Not Last',
    icon: 'HardHat',
    body: 'Every job gets done to code, with safety treated as the baseline standard rather than a corner to cut when a deadline gets tight.',
    img: '/images/permit-tag.webp',
    alt: 'Gloved hands holding an inspection clipboard beside an exterior electrical meter.',
  },
  {
    n: '04',
    title: 'Straight Answers on Every Quote',
    icon: 'ClipboardCheck',
    body: 'You get a clear number before work starts, and an honest answer about whether a repair or a replacement is the right call.',
    img: '/images/kitchen-table-quote.webp',
    alt: 'Two people at a kitchen table with coffee cups as a printed quote is handed across.',
  },
]

export const SERVICES = [
  {
    title: 'Residential Wiring',
    icon: 'House',
    body: 'Full home wiring, panel work, and troubleshooting for houses of every age.',
    img: '/images/rewiring-hero.webp',
    alt: 'Stud-framed interior mid-renovation with new electrical cable run overhead between joists.',
  },
  {
    title: 'Commercial Electrical',
    icon: 'Building2',
    body: 'Wiring, maintenance, and repairs for local shops, offices, and commercial spaces.',
    img: '/images/commercial-lift.webp',
    alt: 'Two workers on a scissor lift installing linear light fixtures in an open-ceiling commercial space.',
  },
  {
    title: 'Farm & Acreage Electrical',
    icon: 'Tractor',
    body: 'Yard power, outbuilding wiring, and shop electrical for working farms and acreages.',
    img: '/images/trench-conduit.webp',
    alt: 'Open trench beside a building with electrical conduit laid in it and a shovel standing upright.',
  },
  {
    title: 'Livestock Water System Wiring',
    icon: 'Droplets',
    body: 'Electrical work for livestock watering systems, so equipment keeps running through the seasons that matter most.',
    img: '/images/sub-panel-garage.webp',
    alt: 'Neatly installed sub-panel on an outbuilding wall with conduit runs and tools on the bench below.',
  },
  {
    title: 'Standby Power & Transfer Switches',
    icon: 'PlugZap',
    body: 'Transfer switch installation to keep a home or farm operation running through an outage, including Generlink-style setups.',
    img: '/images/transfer-switch.webp',
    alt: 'Close-up of a transfer switch enclosure mounted on house siding with its cover open.',
  },
  {
    title: 'Panel Upgrades',
    icon: 'Gauge',
    body: 'Older panels replaced with equipment sized for how a property draws power today.',
    img: '/images/panel-upgrade-hero.webp',
    alt: 'Gloved hands testing breakers inside a modern electrical panel with copper busbars visible.',
  },
]

export const COVERAGE_COPY =
  'We take on residential, commercial, and farm electrical work across our Alberta service area, from a single house panel to a full farmyard standby power setup. The same crew and the same values apply no matter what’s at the end of the driveway.'

export const COVERAGE_TYPES = [
  { label: 'Rural & Acreage Properties', icon: 'Wheat', note: 'Yard power, outbuildings, shops' },
  { label: 'Farm & Livestock Operations', icon: 'Tractor', note: 'Waterers, dryers, standby power' },
  { label: 'Residential Service', icon: 'House', note: 'Panels, rewires, troubleshooting' },
  { label: 'Commercial Service', icon: 'Building2', note: 'Shops, offices, tenant spaces' },
  { label: 'New Construction', icon: 'Construction', note: 'Rough-in through final inspection' },
]

export const STORY = [
  'This business runs on values the team doesn’t treat as decoration, stated plainly and lived out on every job site. Those values shape a wiring job on a Tuesday afternoon the same way they shape a farmyard standby power install before harvest — no shortcuts taken to save an hour, no answer given that isn’t the honest one.',
  'Farm work is a real, ongoing part of the business, not a side offering. Livestock water systems need to keep running through the seasons that matter most, and a transfer switch that fails during an outage can cost a farm operation far more than the install itself would have. That kind of stake is part of why safety gets treated as the starting point on every job, not a box checked at the end.',
  'Whether the call comes from a homeowner with an outdated panel or a farm getting ready for winter, the approach stays the same: assess it honestly, explain the real risk, and do the work to a standard that holds up long after the truck leaves the yard.',
]

export const VALUES = ['Honesty', 'Integrity', 'Safety', 'Quality']

export const FAQ = [
  {
    q: 'Do You Do Farm and Acreage Electrical Work, or Just Houses?',
    a: 'Both. Farm work is a real, ongoing part of the business, including standby power and livestock water system wiring, alongside residential and commercial jobs.',
  },
  {
    q: 'What Is a Transfer Switch, and Do I Need One?',
    a: 'A transfer switch lets a home or farm operation run on backup power safely during an outage, without the risk of feeding power back into the grid. It’s especially valuable for farms with equipment like grain dryers or livestock waterers that can’t afford downtime.',
  },
  {
    q: 'Are You Licensed and Insured?',
    a: 'Yes. Every job is handled by licensed, insured electricians, so you’re covered from the first call to the final test.',
  },
  {
    q: 'How Do You Handle Livestock Water System Wiring?',
    a: 'We wire the electrical side of livestock watering systems so they keep running through the seasons that matter most, working around the realities of an active farm.',
  },
  {
    q: 'Do You Offer Free Estimates?',
    a: 'Yes. We’ll look at the job and give you a straightforward number before any work begins.',
  },
  {
    q: 'What Area Do You Serve?',
    a: 'We take on residential, commercial, and farm electrical work across our Alberta service area. Call and we’ll confirm whether your location is a fit.',
  },
]

export const FINAL_CTA = {
  h2: 'Ready for Electrical Work Built on Honesty and Safety?',
  sub: 'Call now for a free estimate on residential, commercial, or farm electrical work across our Alberta service area.',
}

export const FOOTER_MISSION =
  'We’re a licensed electrical crew serving homes, farms, and businesses across our Alberta service area, built on straight talk and safety-first work. From a single house panel to a farmyard’s standby power setup, the same standard applies to every job.'

export const FOOTER_SERVICES = [
  'Residential Wiring',
  'Commercial Electrical',
  'Farm & Acreage Electrical',
  'Standby Power & Transfer Switches',
  'Livestock Water System Wiring',
]

export const FOOTER_LINKS = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#story' },
  { label: 'Services', href: '#services' },
  { label: 'Service Areas', href: '#coverage' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]
