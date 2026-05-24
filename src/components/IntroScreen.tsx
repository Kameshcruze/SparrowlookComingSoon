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

    // Fade out and deliver complete callback after the smooth ease settles (approx 2.8s)
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2850);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(startTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  // Adjust coordinates and sizing dynamically based on screen characteristics
  const getInitialPosition = () => {
    if (isMobile) return { x: '75vw', scale: 1.6, filter: 'blur(10px) drop-shadow(0 0 15px rgba(210,20,58,0.15))' };
    if (isTablet) return { x: '80vw', scale: 2.2, filter: 'blur(14px) drop-shadow(0 0 25px rgba(210,20,58,0.2))' };
    return { x: '82vw', scale: 3.2, filter: 'blur(18px) drop-shadow(0 0 40px rgba(210,20,58,0.25))' };
  };

  const getTargetPosition = () => {
    if (isMobile) return { x: '-2vw', scale: 1.0, filter: 'blur(0px) drop-shadow(0 0 0px rgba(210,20,58,0))' };
    if (isTablet) return { x: '-6vw', scale: 1.0, filter: 'blur(0px) drop-shadow(0 0 0px rgba(210,20,58,0))' };
    return { x: '-8vw', scale: 1.0, filter: 'blur(0px) drop-shadow(0 0 0px rgba(210,20,58,0))' };
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

      {/* Center Cinematic Stage */}
      <div className="relative flex-grow flex items-center justify-center w-full h-full">
        <motion.div
          layoutId="sparrow-logo-brand"
          className="relative px-6 py-4 flex items-center"
          initial={getInitialPosition()}
          animate={hasStartedMovement ? getTargetPosition() : getInitialPosition()}
          transition={{
            duration: 2.3,
            ease: [0.16, 1, 0.3, 1], // Exquisite luxurious slow ease-out
          }}
          style={{
            transformOrigin: 'left center',
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
