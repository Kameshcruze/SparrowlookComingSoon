import React from 'react';
import SparrowLogo from './SparrowLogo';
import { Mail, ArrowUpCircle, Globe, Compass, Shield, Origami } from 'lucide-react';

interface FooterProps {
  onScrollToTop: () => void;
  onExploreClick: () => void;
  onSubscribeShortcut: () => void;
}

export default function Footer({ onScrollToTop, onExploreClick, onSubscribeShortcut }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-rose-100/40 relative overflow-hidden" id="premium-footer">
      {/* Dynamic line divider detail */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent" />

      <div className="w-full max-w-7xl mx-auto px-6 py-16 md:py-24 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start" id="footer-layout-grid">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-6">
            <SparrowLogo size="md" />
            <p className="text-stone-500 font-sans font-light text-xs sm:text-sm leading-relaxed max-w-sm">
              Authentic Gen-Z streetwear silhouettes meets premium garment engineering. Defining confidence through minimalist negative space and deep crimson tones.
            </p>
            <div className="text-brand-primary text-xs font-mono font-bold uppercase tracking-widest flex items-center gap-1.5 pt-2">
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-ping" />
              Launching June 2026
            </div>
          </div>

          {/* Nav Links Col 1 (Product / Specs) */}
          <div className="md:col-span-2.5 sm:col-span-4 space-y-4">
            <h5 className="text-[10px] font-mono tracking-[0.25em] text-stone-400 font-bold uppercase">
              // SPECIFICATION
            </h5>
            <ul className="space-y-2.5 text-xs font-mono tracking-wider text-stone-600">
              <li>
                <button onClick={onExploreClick} className="hover:text-brand-primary hover:underline underline-offset-4 decoration-dotted transition-all text-left">
                  280GSM Heavyweight
                </button>
              </li>
              <li>
                <a href="#brand-identity-section" className="hover:text-brand-primary hover:underline underline-offset-4 decoration-dotted transition-all">
                  Silhouettes
                </a>
              </li>
              <li>
                <a href="#why-sparrow-section" className="hover:text-brand-primary hover:underline underline-offset-4 decoration-dotted transition-all">
                  Eco-Organic Tailoring
                </a>
              </li>
              <li>
                <span className="text-stone-300 select-none">Capsule Spec Sheet</span>
              </li>
            </ul>
          </div>

          {/* Nav Links Col 2 (Philosophy / Registry) */}
          <div className="md:col-span-2.5 sm:col-span-4 space-y-4">
            <h5 className="text-[10px] font-mono tracking-[0.25em] text-stone-400 font-bold uppercase">
              // REGISTRY
            </h5>
            <ul className="space-y-2.5 text-xs font-mono tracking-wider text-stone-600">
              <li>
                <button onClick={onSubscribeShortcut} className="hover:text-brand-primary hover:underline underline-offset-4 decoration-dotted transition-all text-left font-bold text-brand-primary">
                  VIP Launch Key
                </button>
              </li>
              <li>
                <a href="#social-teaser-section" className="hover:text-brand-primary hover:underline underline-offset-4 decoration-dotted transition-all">
                  Atmosphere Feeds
                </a>
              </li>
              <li>
                <span className="text-stone-300 cursor-not-allowed">Press Pack (2026)</span>
              </li>
              <li>
                <span className="text-stone-300 cursor-not-allowed">Wholesale Ledger</span>
              </li>
            </ul>
          </div>

          {/* Back to top widget */}
          <div className="md:col-span-2 flex flex-col md:items-end justify-center">
            <button
              onClick={onScrollToTop}
              className="group flex items-center gap-2 text-xs font-mono tracking-widest text-[#D2143A] hover:text-black transition-all p-1.5 focus:outline-none"
              id="footer-top-btn"
            >
              <span>TOP OF PAGE</span>
              <ArrowUpCircle className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

        </div>

        {/* Footnotes line block (Privacy, trademark, credits) */}
        <div className="mt-16 pt-8 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-6" id="footer-licensing-block">
          
          {/* Copyright details & Developer Credit */}
          <div className="flex flex-col gap-1.5 items-center sm:items-start text-center sm:text-left">
            <p className="text-[10px] font-mono text-stone-400 tracking-wider animate-fade-in">
              © {currentYear} SPARROWLOOK. ALL RIGHTS RESERVED.
            </p>
            <p className="text-[9px] font-mono text-stone-400 tracking-widest uppercase">
              Developed by <a href="https://elitewebdevelopers.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-brand-primary font-bold hover:text-red-700 transition-all duration-300 underline underline-offset-4 hover:drop-shadow-[0_0_8px_rgba(210,20,58,0.3)]">Elite</a>
            </p>
          </div>

          <div className="flex flex-wrap justify-center sm:justify-end gap-6 text-[10px] font-mono text-stone-400 tracking-wider">
            <span className="hover:text-brand-primary cursor-pointer transition-colors">PRIVACY CODE</span>
            <span>•</span>
            <span className="hover:text-brand-primary cursor-pointer transition-colors">TERMS OF EXCLUSION</span>
            <span>•</span>
            <span className="flex items-center gap-1"><Globe className="w-3.5 h-3.5 text-brand-primary/60" /> GLOBAL INT.</span>
          </div>

        </div>

      </div>
    </footer>
  );
}
