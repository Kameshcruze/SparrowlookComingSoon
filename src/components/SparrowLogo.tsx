import React from 'react';
import logoImg from '../Layer 0.png';

interface SparrowLogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'hero';
}

export default function SparrowLogo({ className = '', iconOnly = false, size = 'md' }: SparrowLogoProps) {
  // Balanced geometric text scaling for wordmark size presets
  const dimensions = {
    sm: 'text-sm sm:text-base font-extrabold tracking-[0.08em]',
    md: 'text-lg sm:text-xl md:text-2xl font-black tracking-[0.1em]',
    lg: 'text-2xl sm:text-3xl md:text-4xl font-black tracking-[0.1em]',
    hero: 'text-3xl sm:text-5xl md:text-6xl font-black tracking-[0.08em]'
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6 sm:w-7 sm:h-7',
    lg: 'w-9 h-9 sm:w-11 sm:h-11',
    hero: 'w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32'
  };

  const currentSize = dimensions[size];
  const currentIconSize = iconSizes[size];

  return (
    <div className={`inline-flex items-center select-none ${className}`} id="sparrow-look-logo-only">
      {/* Premium uploaded Sparrow brand mark image */}
      <img
        src={logoImg}
        className={`${currentIconSize} shrink-0 object-contain transition-transform duration-300 mr-2 sm:mr-3`}
        alt="Sparrow Logo"
        referrerPolicy="no-referrer"
        id="sparrow-bird-logo-img"
      />
      
      {!iconOnly && (
        <span
          className={`font-logo text-brand-primary select-none uppercase leading-none pointer-events-none tracking-[0.1em] ${currentSize}`}
          id="brand-logo-text"
        >
          SPARROWLOOK
        </span>
      )}
    </div>
  );
}
