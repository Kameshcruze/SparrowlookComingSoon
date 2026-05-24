export type StyleArchetype = 'avant-garde' | 'minimalist-rebel' | 'bold-iconoclast';

export interface StyleArchetypeDetails {
  id: StyleArchetype;
  name: string;
  tagline: string;
  description: string;
  manifesto: string;
  accentClass: string;
  bgGradient: string;
  badgeText: string;
}

export interface BrandFeature {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  accentBg: string;
}

export interface InstagramTeaser {
  id: string;
  moodTitle: string;
  concept: string;
  likes: number;
  comments: number;
  aspectRatio: string;
}

export interface Subscriber {
  email: string;
  archetype?: StyleArchetype;
  timestamp: string;
  vipToken: string;
}
