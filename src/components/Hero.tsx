import React from 'react';
import { motion } from 'motion/react';
import SparrowLogo from './SparrowLogo';
import { ShieldCheck, Compass, ArrowDown, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onSubscribeShortcut: () => void;
  introActive?: boolean;
}

export default function Hero({ onExploreClick, onSubscribeShortcut, introActive = false }: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#FAF6F6] pt-6 pb-12 px-4 md:px-8 border-b border-rose-100/50" id="hero-section">
      {/* 1. Fine Design Grids and Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft elegant red ambient glows */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-brand-primary/10 blur-[130px]" />
        <div className="absolute top-1/2 left-1/12 w-80 h-80 rounded-full bg-brand-primary/5 blur-[100px]" />
        <div className="absolute -bottom-20 right-1/4 w-96 h-96 rounded-full bg-brand-primary/8 blur-[120px]" />
        
        {/* Subtle geometric structural patterns */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(#D2143A 1.5px, transparent 1.5px)`,
          backgroundSize: '24px 24px'
        }} />

        {/* Framing border accents for high luxury look */}
        <div className="absolute top-8 left-8 right-8 bottom-8 border border-brand-primary/[0.04] hidden lg:block" />
      </div>

      {/* 2. Top Navigation Bar (Within Hero Envelope) */}
      <header className="relative w-full max-w-7xl mx-auto flex items-center justify-between z-10 py-4" id="app-header">
        <motion.div
          layoutId="sparrow-logo-brand"
          transition={{
            duration: 2.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative z-50 origin-left"
        >
          <SparrowLogo size="md" />
        </motion.div>

        <motion.div
          className="flex items-center gap-6"
          initial={{ opacity: 0, y: -15 }}
          animate={!introActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -15 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Micro indicator badge */}
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono tracking-widest uppercase bg-white border border-brand-primary/15 text-brand-primary shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
            Capsule Drop 01
          </span>
          
          <button 
            onClick={onSubscribeShortcut}
            className="px-5 py-2 rounded-full text-xs font-display font-semibold uppercase tracking-wider text-white bg-brand-primary hover:bg-brand-dark shadow-md hover:shadow-lg hover:shadow-brand-primary/10 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            id="nav-subscribe-btn"
          >
            Get VIP Access
          </button>
        </motion.div>
      </header>

      {/* 3. Centerpiece Creative Hero Layout */}
      <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center text-center justify-center my-auto z-10 py-8 px-2">
        
        {/* Animated Pill Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={!introActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mb-6 flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-stone-800 text-xs font-display font-medium tracking-widest uppercase border border-stone-200/60 shadow-[0_2px_10px_rgba(210,20,58,0.04)]"
        >
          <Sparkles className="w-3.5 h-3.5 text-brand-primary animate-pulse" />
          <span>STREETWEAR MEETS LUXURY MINIMALISM</span>
        </motion.div>

        {/* Fashion-aligned typographic headers */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={!introActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="font-display text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-stone-900 mb-6 uppercase"
          id="hero-heading"
        >
          Something <span className="text-brand-primary relative inline-block">Bold<span className="absolute left-0 bottom-1 w-full h-[6px] bg-brand-primary/10 rounded-full"></span></span> is Landing Soon
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={!introActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="text-stone-600 font-sans text-base sm:text-xl max-w-2xl leading-relaxed font-light tracking-wide mb-10"
          id="hero-subheading"
        >
          A new era of T-shirt philosophy is arriving. Raw Gen-Z edge meets pristine tailoring. Sparrow Look launches in <span className="font-semibold text-brand-primary">June 2026</span>.
        </motion.p>

        {/* Launching soon animated pulse button */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={!introActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
          transition={{ duration: 0.9, delay: 1.0 }}
          className="relative flex flex-col sm:flex-row items-center gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={onSubscribeShortcut}
            className="px-8 py-4 rounded-full text-sm font-display font-bold uppercase tracking-widest text-white bg-brand-primary shadow-lg shadow-brand-primary/20 hover:bg-brand-dark group flex items-center gap-3 transition-colors duration-300"
            id="hero-cta-btn"
          >
            <span>Securing Launch Invitations</span>
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-200 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-100"></span>
            </span>
          </motion.button>

          <button
            onClick={onExploreClick}
            className="px-7 py-4 rounded-full text-sm font-display font-semibold uppercase tracking-widest text-stone-700 bg-white hover:bg-stone-50 border border-stone-200 transition-all duration-300"
            id="hero-secondary-btn"
          >
            Explore Philosophy
          </button>
        </motion.div>
      </div>

      {/* 4. Bottom Scroller Icon & Micro-Text Meta Footer */}
      <div className="relative w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-center gap-4 justify-between z-10 pt-8 mt-4 border-t border-stone-200/60" id="hero-foot">
        <div className="flex items-center gap-8 text-xs font-mono text-stone-400 tracking-wider">
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-brand-primary" /> BESPOKE CUTS</span>
          <span className="flex items-center gap-1.5"><Compass className="w-3.5 h-3.5 text-brand-primary" /> STREET INSPIRED</span>
        </div>

        <motion.button
          onClick={onExploreClick}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase text-stone-500 hover:text-brand-primary transition-colors hover:bg-white border border-transparent hover:border-brand-primary/10"
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        >
          <span>Discover Below</span>
          <ArrowDown className="w-3 h-3" />
        </motion.button>

        <div className="text-xs font-mono text-stone-400 tracking-wider">
          <span>COSMIC CRIMSOM SERENE</span>
        </div>
      </div>
    </section>
  );
}
