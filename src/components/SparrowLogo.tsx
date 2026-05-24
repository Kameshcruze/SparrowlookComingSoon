import React from 'react';
import brandLogoImg from '../LogoSparrowlook.png';

interface SparrowLogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'hero';
}

export default function SparrowLogo({ className = '', iconOnly = false, size = 'md' }: SparrowLogoProps) {
  // We use precise container heights to fit nicely into the navigation, footer, and intro screen flow.
  // Because LogoSparrowlook.png is a square 1:1 image with substantial top/bottom padding,
  // we set a wider image width inside a vertical overflow-hidden container to zoom in and crop out
  // the empty padding, making the actual visual design fill the exact layout space required.
  const containerHeights = {
    sm: 'h-6 sm:h-7',
    md: 'h-11 sm:h-14',
    lg: 'h-16 sm:h-20',
    hero: 'h-48 sm:h-60 md:h-[250px]'
  };

  const imageWidths = {
    sm: 'w-[110px] sm:w-[130px]',
    md: 'w-[210px] sm:w-[260px]',
    lg: 'w-[320px] sm:w-[400px]',
    hero: 'w-[950px] sm:w-[1180px] md:w-[1450px]'
  };

  const currentHeight = containerHeights[size];
  const currentWidth = imageWidths[size];

  return (
    <div 
      className={`relative overflow-hidden flex items-center justify-center select-none ${currentHeight} ${className}`} 
      id="sparrow-look-logo-only"
    >
      <img
        src={brandLogoImg}
        style={{
          mixBlendMode: 'multiply'
        }}
        className={`${currentWidth} max-w-none h-auto shrink-0 transition-transform duration-300 pointer-events-none`}
        alt="SPARROWLOOK"
        referrerPolicy="no-referrer"
        id="sparrow-brand-logo-img"
      />
    </div>
  );
}

