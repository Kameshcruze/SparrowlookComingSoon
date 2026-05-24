import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import logoImg from './Layer 0.png';
import BrandIdentity from './components/BrandIdentity';
import CountdownTeaser from './components/CountdownTeaser';
import WhySparrow from './components/WhySparrow';
import StayUpdated from './components/StayUpdated';
import SocialTeaser from './components/SocialTeaser';
import Footer from './components/Footer';
import IntroScreen from './components/IntroScreen';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, Sparkles, Flame, CheckCircle, ChevronRight } from 'lucide-react';

export default function App() {
  // Global interactive live registration tracker (Starts at 4,812 and ticks up slowly to simulate traffic)
  const [securedRegistryCount, setSecuredRegistryCount] = useState(4812);
  const [introActive, setIntroActive] = useState(true);

  useEffect(() => {
    // Lock scroll during the cinematic brand reveal intro sequence
    if (introActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [introActive]);

  useEffect(() => {
    // Smoothly increment the fashion ticket claim counter randomly every 12 to 25 seconds
    const interval = setInterval(() => {
      setSecuredRegistryCount(prev => prev + Math.floor(Math.random() * 2) + 1);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-brand-primary selection:text-white antialiased relative" id="sparrow-look-app">
      
      {/* Cinematic Luxury Intro Screen Overlay */}
      <AnimatePresence mode="wait">
        {introActive && (
          <motion.div
            key="luxury-intro"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100]"
          >
            <IntroScreen onComplete={() => setIntroActive(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. Global Interactive Top Ticker Tape (Gen Z High Fashion Promo Banner) */}
      <motion.div
        initial={{ opacity: 0, y: -45 }}
        animate={!introActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -45 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="bg-brand-primary text-white text-[9px] md:text-[10px] font-mono tracking-[0.25em] uppercase py-2.5 overflow-hidden relative z-50 select-none border-b border-brand-dark/25 w-full flex" 
        id="promo-banner-ticker"
      >
        <div className="w-full flex items-center overflow-hidden font-logo">
          {/* Infinite scrolling marquee wrapper moving right to left */}
          <div className="flex items-center animate-marquee-rtl gap-12 whitespace-nowrap pl-6">
            {/* Segment 1 */}
            <div className="flex items-center gap-6 shrink-0">
              <div className="flex items-center gap-1.5 font-semibold text-rose-100 font-sans">
                <Flame className="w-3.5 h-3.5 animate-bounce text-rose-200" />
                <span>Priority Drop Entry Queue Active</span>
              </div>
              <span className="opacity-40 font-sans">•</span>
              <div className="flex items-center gap-1.5 font-sans">
                <Sparkles className="w-3.5 h-3.5 animate-pulse text-amber-200" />
                <span>{securedRegistryCount.toLocaleString()} Members Reserved Globally</span>
              </div>
              <span className="opacity-40 font-sans">•</span>
              <div className="flex items-center gap-1.5 font-bold text-white font-sans">
                <span>First Session Launches June 18, 2026</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>
            <span className="opacity-40 font-bold tracking-widest inline-flex items-center gap-1.5 shrink-0 select-none">
              <span>//</span>
              <img src={logoImg} className="w-3.5 h-3.5 object-contain" alt="Sparrow Logo" referrerPolicy="no-referrer" />
              <span>SPARROWLOOK //</span>
            </span>

            {/* Segment 2 */}
            <div className="flex items-center gap-6 shrink-0">
              <div className="flex items-center gap-1.5 font-semibold text-rose-100 font-sans">
                <Flame className="w-3.5 h-3.5 animate-bounce text-rose-200" />
                <span>Priority Drop Entry Queue Active</span>
              </div>
              <span className="opacity-40 font-sans">•</span>
              <div className="flex items-center gap-1.5 font-sans">
                <Sparkles className="w-3.5 h-3.5 animate-pulse text-amber-200" />
                <span>{securedRegistryCount.toLocaleString()} Members Reserved Globally</span>
              </div>
              <span className="opacity-40 font-sans">•</span>
              <div className="flex items-center gap-1.5 font-bold text-white font-sans">
                <span>First Session Launches June 18, 2026</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>
            <span className="opacity-40 font-bold tracking-widest inline-flex items-center gap-1.5 shrink-0 select-none">
              <span>//</span>
              <img src={logoImg} className="w-3.5 h-3.5 object-contain" alt="Sparrow Logo" referrerPolicy="no-referrer" />
              <span>SPARROWLOOK //</span>
            </span>

            {/* Segment 3 */}
            <div className="flex items-center gap-6 shrink-0 font-bold text-white font-sans">
              <div className="flex items-center gap-1.5 font-semibold text-rose-100 font-sans">
                <Flame className="w-3.5 h-3.5 animate-bounce text-rose-200" />
                <span>Priority Drop Entry Queue Active</span>
              </div>
              <span className="opacity-40 font-sans">•</span>
              <div className="flex items-center gap-1.5 font-sans">
                <Sparkles className="w-3.5 h-3.5 animate-pulse text-amber-200" />
                <span>{securedRegistryCount.toLocaleString()} Members Reserved Globally</span>
              </div>
              <span className="opacity-40 font-sans">•</span>
              <div className="flex items-center gap-1.5 font-bold text-white font-sans">
                <span>First Session Launches June 18, 2026</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>
            <span className="opacity-40 font-bold tracking-widest inline-flex items-center gap-1.5 shrink-0 select-none">
              <span>//</span>
              <img src={logoImg} className="w-3.5 h-3.5 object-contain" alt="Sparrow Logo" referrerPolicy="no-referrer" />
              <span>SPARROWLOOK //</span>
            </span>

            {/* Segment 4 */}
            <div className="flex items-center gap-6 shrink-0 font-sans">
              <div className="flex items-center gap-1.5 font-semibold text-rose-100 font-sans">
                <Flame className="w-3.5 h-3.5 animate-bounce text-rose-200" />
                <span>Priority Drop Entry Queue Active</span>
              </div>
              <span className="opacity-40 font-sans">•</span>
              <div className="flex items-center gap-1.5 font-sans">
                <Sparkles className="w-3.5 h-3.5 animate-pulse text-amber-200" />
                <span>{securedRegistryCount.toLocaleString()} Members Reserved Globally</span>
              </div>
              <span className="opacity-40 font-sans">•</span>
              <div className="flex items-center gap-1.5 font-bold text-white font-sans">
                <span>First Session Launches June 18, 2026</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>
            <span className="opacity-40 font-bold tracking-widest inline-flex items-center gap-1.5 shrink-0 select-none">
              <span>//</span>
              <img src={logoImg} className="w-3.5 h-3.5 object-contain" alt="Sparrow Logo" referrerPolicy="no-referrer" />
              <span>SPARROWLOOK //</span>
            </span>
          </div>
        </div>
      </motion.div>

      {/* 2. Primary Sections Layout Flow */}
      <main className="flex-grow w-full">
        {/* Section 1: Hero Cover */}
        <Hero 
          onExploreClick={() => scrollToSection('brand-identity-section')}
          onSubscribeShortcut={() => scrollToSection('stay-updated-section')}
          introActive={introActive}
        />

        {/* Section 2: Brand Philosophy & Dynamic Archetype Selector */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={!introActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.9, delay: 1.1, ease: "easeOut" }}
          id="brand-identity-section"
        >
          <BrandIdentity />
        </motion.div>

        {/* Section 3: Premium Countdown / Launch Teaser Clock & SMS Alarm Setup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={!introActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.9, delay: 1.3, ease: "easeOut" }}
        >
          <CountdownTeaser />
        </motion.div>

        {/* Section 4: Specifications Blueprint & Feature Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={!introActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.9, delay: 1.5, ease: "easeOut" }}
          id="why-sparrow-section"
        >
          <WhySparrow />
        </motion.div>

        {/* Section 5: Priority RSVP Subscription & VIP Ticket Generator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={!introActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.9, delay: 1.7, ease: "easeOut" }}
          id="stay-updated-section"
        >
          <StayUpdated />
        </motion.div>

        {/* Section 6: Atmosphere Previews / Instagram Gallery Simulator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={!introActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.9, delay: 1.9, ease: "easeOut" }}
          id="social-teaser-section"
        >
          <SocialTeaser />
        </motion.div>
      </main>

      {/* 3. Footer Section (Logo, specs, licensing footnotes) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={!introActive ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.0, delay: 2.1 }}
      >
        <Footer 
          onScrollToTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          onExploreClick={() => scrollToSection('why-sparrow-section')}
          onSubscribeShortcut={() => scrollToSection('stay-updated-section')}
        />
      </motion.div>

    </div>
  );
}
