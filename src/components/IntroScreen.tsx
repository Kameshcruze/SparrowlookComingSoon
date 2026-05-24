import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import SparrowLogo from './SparrowLogo';

interface IntroScreenProps {
  onComplete: () => void;
}

export default function IntroScreen({ onComplete }: IntroScreenProps) {
  const [hasStartedMovement, setHasStartedMovement] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Check window width for precision responsive animation scale & coordinates
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
      setIsTablet(width >= 640 && width < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    // Smooth timing: start the leftward sweep shortly after mounting
    const startTimer = setTimeout(() => {
      setHasStartedMovement(true);
    }, 200);

    // Fade out and deliver complete callback right as the movement is elegant and sweeps (1.0s)
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 1000);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(startTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  // Adjust coordinates and sizing dynamically based on screen characteristics
  const getInitialPosition = () => {
    return {
      top: '50%',
      left: '75vw',
      y: '-50%',
      x: '-50%',
      scale: isMobile ? 1.4 : isTablet ? 1.8 : 2.4,
      filter: isMobile 
        ? 'blur(8px) drop-shadow(0 0 15px rgba(210,20,58,0.2))' 
        : 'blur(16px) drop-shadow(0 0 40px rgba(210,20,58,0.35))',
    };
  };

  const getTargetPosition = () => {
    const topVal = isMobile ? '24px' : '40px';
    
    // Compute dynamic left coordinate to match header placement
    let leftVal = '32px';
    if (isMobile) {
      leftVal = '16px';
    } else {
      const width = typeof window !== 'undefined' ? window.innerWidth : 1440;
      if (width >= 1280) {
        // Centered max-w-7xl (1280px) offset + custom px padding (approx 32px)
        leftVal = `calc((100vw - 1280px) / 2 + 32px)`;
      } else {
        leftVal = '32px';
      }
    }

    return {
      top: topVal,
      left: leftVal,
      y: '0%',
      x: '0%',
      scale: isMobile ? 0.375 : isTablet ? 0.29 : 0.22, // Shrinks gradually to match size="md" perfectly
      filter: 'blur(0px) drop-shadow(0 0 0px rgba(210,20,58,0))',
    };
  };

  return (
    <div 
      className="fixed inset-0 z-[100] bg-[#FAF6F6] flex flex-col justify-between overflow-hidden select-none" 
      id="intro-overlay-container"
    >
      {/* Absolute high-end aesthetic textures and glow details */}
      <div className="absolute inset-0 pointer-events-none">
        
        {/* Soft, warm red ambient glows */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-brand-primary/8 blur-[140px]" />
        <div className="absolute top-1/2 left-1/12 w-[400px] h-[400px] rounded-full bg-brand-primary/4 blur-[110px]" />
        
        {/* Structural subtle blueprint grids */}
        <div 
          className="absolute inset-0 opacity-[0.015]" 
          style={{
            backgroundImage: `radial-gradient(#D2143A 1.5px, transparent 1.5px)`,
            backgroundSize: '24px 24px'
          }} 
        />

        {/* Luxury fashion border container detail */}
        <div className="absolute top-5 left-5 right-5 bottom-5 border border-brand-primary/[0.04] md:border-brand-primary/[0.07]" />
      </div>

      {/* Top Metadata Line */}
      <div className="relative pt-10 px-8 sm:px-12 flex justify-between items-center z-10 w-full font-mono text-[9px] sm:text-[10px] text-stone-400 tracking-[0.25em] uppercase">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-ping" />
          <span>CAPSULE DEBUT // 2026</span>
        </div>
        <div className="hidden sm:block font-light">
          <span>SPARROW DESIGN ATELIER // TOKYO - MILAN - NYC</span>
        </div>
      </div>

      {/* Center Cinematic Stage - Relative box for coordinate absolute rendering */}
      <div className="relative flex-grow w-full h-full">
        <motion.div
          layoutId="sparrow-logo-brand"
          className="absolute flex items-center"
          initial={getInitialPosition()}
          animate={hasStartedMovement ? getTargetPosition() : getInitialPosition()}
          transition={{
            duration: 2.2, // Premium cinematic sweep
            ease: [0.16, 1, 0.3, 1], // Exquisite luxurious slow ease-out
          }}
          style={{
            transformOrigin: 'top left',
          }}
          id="cinematic-moving-logo"
        >
          <SparrowLogo size="hero" className="pointer-events-none select-none" />
        </motion.div>
      </div>

      {/* Bottom Metadata Footnotes */}
      <div className="relative pb-10 px-8 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-3 z-10 w-full font-mono text-[9px] sm:text-[10px] text-stone-400 tracking-[0.2em] uppercase">
        <div className="flex items-center gap-1.5 font-light">
          <span>COSMIC CRIMSON ATELIER</span>
        </div>
        <div className="flex items-center gap-4 text-center sm:text-right font-medium">
          <span className="animate-pulse text-brand-primary">SECURED VIP GATES ACTIVATED</span>
        </div>
      </div>
    </div>
  );
}
