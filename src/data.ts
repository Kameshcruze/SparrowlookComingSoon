import { BrandFeature, StyleArchetypeDetails, InstagramTeaser } from './types';

export const BRAND_ARCHETYPES: StyleArchetypeDetails[] = [
  {
    id: 'avant-garde',
    name: 'Crimson Avant-Garde',
    tagline: 'Asymmetry in motion. Unrestricted self-expression.',
    description: 'Designed for those who view fashion as structural poetry. Bold silhouettes, high-contrast visual focus, and architectural lines.',
    manifesto: 'We do not ask for attention. We define the space we stand in. By subverting traditional cuts in favor of bold asymmetrical details, this drop is an architectural statement on fabrics.',
    accentClass: 'text-[#D2143A]',
    bgGradient: 'from-[#FFF5F6] to-white border-brand-primary/25',
    badgeText: '01 / STRUCTURE'
  },
  {
    id: 'minimalist-rebel',
    name: 'Minimalist Rebel',
    tagline: 'Stripped back but loud. The power of negative space.',
    description: 'For the collectors of clean silhouettes. Heavyweight, dense fabrics styled with single-color accents. Loud through absolute precision.',
    manifesto: 'True confidence does not scream. It lingers. Built with ultimate fabric precision, minimalist rebellion is about micro-accents — custom drop shoulders, hidden details, and dense double-weight stitching.',
    accentClass: 'text-zinc-800',
    bgGradient: 'from-zinc-50 to-white border-zinc-300',
    badgeText: '02 / NEGATIVE SPACE'
  },
  {
    id: 'bold-iconoclast',
    name: 'The Bold Iconoclast',
    tagline: 'Fearless typography. Demolishing standard aesthetics.',
    description: 'For the voices that refuse to compromise. Radical layout typography, striking red statement blocks, and streetwear edge.',
    manifesto: 'Comfort is a cage; standard styling is a chore. The Iconoclast collection combines supreme luxury tailoring with street-born typography. It is not just clothing; it is a wearable banner.',
    accentClass: 'text-brand-primary font-bold',
    bgGradient: 'from-rose-50/70 to-white border-[#7F0E24]/20',
    badgeText: '03 / RADICAL TYPOGRAPHY'
  }
];

export const BRAND_FEATURES: BrandFeature[] = [
  {
    id: 'quality',
    title: 'Premium Heavyweight Canvas',
    subtitle: 'Zero compromises on weight and thread count.',
    description: 'Every Sparrow Look piece is engineered from custom 280GSM combed organic cotton. Built to retain its structure, drape, and texture through unlimited wears.',
    iconName: 'Layers',
    accentBg: 'bg-brand-light text-brand-primary'
  },
  {
    id: 'trends',
    title: 'Trend-Driven Architecture',
    subtitle: 'Engineered for the Gen-Z style vanguard.',
    description: 'Designed in London and Tokyo, our cuts feature specialized drop shoulders, extended ribbing, and custom geometric seam placements that redefine classic casual streetwear.',
    iconName: 'Compass',
    accentBg: 'bg-zinc-100 text-zinc-900'
  },
  {
    id: 'confidence',
    title: 'Designed for Everyday Swagger',
    subtitle: 'Garments acting as armor.',
    description: 'We design clothes that empower your presence. Fitted neck collars that never stretch outward, robust hems, and flattering proportional drape.',
    iconName: 'Shield',
    accentBg: 'bg-brand-light text-brand-primary'
  },
  {
    id: 'affordable',
    title: 'Democratic Luxury',
    subtitle: 'High-end manufacturing without the status Markup.',
    description: 'By partnering directly with state-of-the-art green fabric mills and cutting out middlemen, we deliver bespoke, luxury boutique-level tailoring at an accessible price point.',
    iconName: 'PiggyBank',
    accentBg: 'bg-zinc-100 text-zinc-900'
  }
];

export const INSTAGRAM_TEASERS: InstagramTeaser[] = [
  {
    id: 'mood-01',
    moodTitle: 'STRUCTURE & COIL',
    concept: 'Abstract textures of premium 280GSM cotton weave cascading over clean stone architectural surfaces.',
    likes: 1243,
    comments: 48,
    aspectRatio: 'aspect-square'
  },
  {
    id: 'mood-02',
    moodTitle: 'THE RED SILHOUETTE',
    concept: 'A stark, high-contrast overlay of a flying sparrow shadow cast upon deep crimson drapery.',
    likes: 1845,
    comments: 92,
    aspectRatio: 'aspect-[3/4]'
  },
  {
    id: 'mood-03',
    moodTitle: 'METROPOLIS SHADOWS',
    concept: 'Minimalist concrete design structures framing a soft morning crimson glow. No clutter, pure form.',
    likes: 954,
    comments: 31,
    aspectRatio: 'aspect-[3/4]'
  },
  {
    id: 'mood-04',
    moodTitle: 'TYPOGRAPHIC VOWS',
    concept: 'Close-ups of high density embroidered red threads in geometric text blocks: Craft is Devotion.',
    likes: 1402,
    comments: 73,
    aspectRatio: 'aspect-square'
  }
];
