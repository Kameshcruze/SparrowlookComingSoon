import React from 'react';

interface SparrowLogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'hero';
}

export default function SparrowLogo({ className = '', iconOnly = false, size = 'md' }: SparrowLogoProps) {
  // Balanced geometric text scaling for wordmark size presets
  const dimensions = {
    sm: 'text-[15px] tracking-tight font-black',
    md: 'text-xl sm:text-2xl tracking-normal font-black',
    lg: 'text-3xl sm:text-4xl tracking-tight font-black',
    hero: 'text-4xl sm:text-6xl md:text-7xl tracking-tighter font-black'
  };

  const currentSize = dimensions[size];

  return (
    <div className={`inline-flex items-center select-none ${className}`} id="sparrow-look-logo-only">
      <span
        className={`font-logo text-brand-primary select-none uppercase leading-none pointer-events-none tracking-tight ${currentSize}`}
        id="brand-logo-text"
      >
        SPARROWLOOK
      </span>
    </div>
  );
}
