import { images } from '../images.js'

export const NAV_HOME = [
  { label: 'MANIFESTO', hash: '#manifesto' },
  { label: 'LOOKS', hash: '#looks' },
  { label: 'ATELIER', hash: '#atelier' },
  { label: 'ARCHIVE', to: '/archive' },
  { label: 'ABOUT', to: '/about' },
]

export const NAV_PAGE = [
  { label: 'EDITORIAL', to: '/' },
  { label: 'ARCHIVE', to: '/archive' },
  { label: 'ABOUT', to: '/about' },
]

/** Segments of the manifesto; `em` marks the emphasised phrases. */
export const MANIFESTO = [
  { text: 'We do not design garments. We design' },
  { text: 'what remains', em: true },
  { text: 'after the garment has been forgotten — the crease, the stain, the' },
  { text: 'ghost of a shoulder.', em: true },
  { text: 'Erosion is not decay. Erosion is the earth editing itself, and this collection is our' },
  { text: 'red pencil.', em: true },
]

export const LOOKS = [
  {
    num: '04',
    src: images.look1,
    alt: 'Crimson organza caught in wind',
    caption: 'LOOK 04',
    fabric: 'SILK ORGANZA / BLOOD',
    name: '“The Hemorrhage Dress”',
  },
  {
    num: '11',
    src: images.look2,
    alt: 'Liquid chrome garment in black water',
    caption: 'LOOK 11',
    fabric: 'MERCURY LAMÉ / MIRROR',
    name: '“Narcissus, Drowning”',
  },
  {
    num: '19',
    src: images.look3,
    alt: 'Ivory cocoon coat dissolving into fog',
    caption: 'LOOK 19',
    fabric: 'RAW CANVAS / BONE',
    name: '“Cocoon for Nobody”',
  },
]

export const STATS = [
  { value: 214, label: 'HOURS / LOOK' },
  { value: 9, label: 'DESTRUCTION RITES' },
  { value: 1, label: 'OF EACH, EVER' },
]

export const PRINCIPLES = [
  {
    numeral: 'I',
    title: 'DESTRUCTION IS DRAFTING',
    body: 'Before a pattern is cut, the cloth is buried for a season. What the ground returns to us is the pattern. We trace the rot, we honour the tear line, we cut where the earth has already decided.',
  },
  {
    numeral: 'II',
    title: 'ONE OF EACH, EVER',
    body: 'A garment that can be repeated is a garment that can be ignored. Every VESTIGE piece is a single edition — when it leaves the atelier, its pattern is burned in the same fire that aged it.',
  },
  {
    numeral: 'III',
    title: 'THE WEARER FINISHES THE WORK',
    body: 'Our seams are left deliberately provisional. Ten years of a body moving inside the garment completes the silhouette. We do not sell clothing; we sell the first chapter of one.',
  },
]

/** The six archive plates, cycled across the 27 looks. */
const PLATES = ['look1', 'look2', 'look3', 'hero', 'detail', 'finale']

const ARCHIVE_NAMES = [
  ['Salt Psalm', 'raw canvas / bone'],
  ['Static Vow', 'mercury lamé / mirror'],
  ['The Hemorrhage Dress', 'silk organza / blood'],
  ['Widow of the Flat', 'black wool / ash'],
  ['Rite of Dragging', 'torn silk / rust'],
  ['Choir of Pins', 'deconstructed tailoring'],
  ['Fog Register', 'ivory gauze / bone'],
  ['Bone Ledger', 'raw canvas / bone'],
  ['Mercury Elegy', 'chrome lamé / mirror'],
  ['Narcissus, Drowning', 'mercury lamé / mirror'],
  ['Stitch for the Dead', 'hand-sewn wool / ash'],
  ['Abrasion Hymn', 'burned organza / rust'],
  ['Terra Nullius Suit', 'brushed canvas / bone'],
  ['Gale Apparition', 'wind-cut silk / blood'],
  ['Rust Canticle', 'oxidised lamé / rust'],
  ['Concrete Bride', 'sculpted wool / ash'],
  ['Salt Cathedral', 'layered gauze / bone'],
  ['Cocoon for Nobody', 'raw canvas / bone'],
  ['The Unsewn Coat', 'frayed wool / ash'],
  ['Vesper in Chrome', 'liquid lamé / mirror'],
  ['Dust Matrimony', 'buried silk / bone'],
  ['A Thousand Cuts', 'slashed organza / blood'],
  ['Elegy for a Sleeve', 'one-armed tailoring'],
  ['Wind Burial', 'wind-filled train / ash'],
  ['The Red Pencil', 'editing toile / rust'],
  ['Last Look Before Rain', 'waxed canvas / bone'],
  ['Erosion, Herself', 'everything that survived'],
]

export const ARCHIVE = ARCHIVE_NAMES.map(([name, fabric], i) => ({
  id: i + 1,
  number: String(i + 1).padStart(2, '0'),
  name,
  fabric: fabric.toUpperCase(),
  plate: PLATES[i % PLATES.length],
}))

export const PLATE_KEYS = PLATES
