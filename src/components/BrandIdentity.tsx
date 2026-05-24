import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BRAND_ARCHETYPES } from '../data';
import { StyleArchetype } from '../types';
import { Sparkles, Compass, Eye, ShieldCheck, Origami } from 'lucide-react';

export default function BrandIdentity() {
  const [activeArchetype, setActiveArchetype] = useState<StyleArchetype>('avant-garde');

  const selectedData = BRAND_ARCHETYPES.find(a => a.id === activeArchetype) || BRAND_ARCHETYPES[0];

  return (
    <section className="relative py-24 px-4 md:px-8 bg-white overflow-hidden" id="brand-identity-section">
      {/* Editorial Decorative Details */}
      <div className="absolute top-0 right-0 w-1/3 h-full border-l border-brand-primary/[0.04] pointer-events-none hidden lg:block" />
      <div className="absolute top-1/2 left-4 h-24 w-[1px] bg-brand-primary/10 hidden xl:block" />

      <div className="w-full max-w-7xl mx-auto relative z-10" id="brand-identity-viewport">
        {/* Core Narrative / Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-20">
          <div className="lg:col-span-5">
            <span className="text-xs font-mono tracking-widest text-brand-primary uppercase block mb-3 font-semibold">
              // BRAND PHILOSOPHY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-stone-900 tracking-tight uppercase leading-none">
              CRAFTED FOR CONFIDENCE.<br/>
              <span className="text-brand-primary">DESIGNED</span> FOR INDIVIDUALITY.
            </h2>
          </div>
          
          <div className="lg:col-span-7 lg:pt-4">
            <p className="text-stone-600 font-sans text-base sm:text-lg font-light leading-relaxed mb-6">
              Sparrow Look was born to dissolve the boundary between lazy everyday fits and bespoke design architecture. We don't believe in generic graphics — we craft silhouette-first statement wear for a generation that commands attention with calm self-assurance.
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-mono text-zinc-500 tracking-wider">
              <span className="px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-100 uppercase">280GSM Heavyweight</span>
              <span className="px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-100 uppercase">Anti-Collar-Stretch</span>
              <span className="px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-100 uppercase">Bespoke Dyeing Colors</span>
            </div>
          </div>
        </div>

        {/* Dynamic Interactive Archetype Playground */}
        <div className="bg-slate-50/55 rounded-3xl p-6 sm:p-10 border border-stone-200/50 shadow-sm" id="archetype-interaction">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-lg font-display font-bold text-center text-stone-900 uppercase tracking-wider mb-2">
              Select Your Style Signature
            </h3>
            <p className="text-xs font-sans text-stone-500">
              When our store launches, our drops will be structured around distinct clothing languages. Match your aura below to generate custom launching parameters.
            </p>
          </div>

          {/* Selector Tabs (Gen Z streetwear layout) */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-10 max-w-2xl mx-auto">
            {BRAND_ARCHETYPES.map((arch) => (
              <button
                key={arch.id}
                onClick={() => setActiveArchetype(arch.id)}
                className={`w-full sm:w-auto px-6 py-3 rounded-full text-xs font-display font-medium uppercase tracking-widest transition-all duration-300 border ${
                  activeArchetype === arch.id
                    ? 'bg-brand-primary text-white border-brand-primary shadow-md'
                    : 'bg-white text-stone-600 hover:text-stone-800 border-stone-200 hover:border-brand-primary/20 hover:shadow-sm'
                }`}
                id={`tab-${arch.id}`}
              >
                {arch.name}
              </button>
            ))}
          </div>

          {/* Tab Content Display (Editorial Grid) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4">
            
            {/* Visual Manifesto Poster Card (Left side) */}
            <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-2xl bg-white border border-stone-200/50 shadow-[0_4px_20px_rgba(0,0,0,0.01)] relative overflow-hidden group">
              {/* Background accent decor */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/[0.01] rounded-full pointer-events-none group-hover:scale-125 transition-transform duration-700" />
              
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className={`text-[10px] font-mono tracking-widest uppercase ${selectedData.accentClass}`}>
                    {selectedData.badgeText}
                  </span>
                  <Origami className="w-5 h-5 text-brand-primary/40" />
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedData.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4 className="text-2xl font-serif italic text-stone-900 mb-4 font-semibold">
                      "{selectedData.tagline}"
                    </h4>
                    <p className="text-stone-500 text-xs font-sans font-light leading-relaxed">
                      {selectedData.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* High fashion micro badge */}
              <div className="mt-8 pt-6 border-t border-stone-100 flex items-center justify-between">
                <span className="text-[10px] font-mono text-stone-400">STATUS: COMING SOON</span>
                <span className="text-[10px] font-mono text-brand-primary font-bold">LIMITED QUANTITY CUTS</span>
              </div>
            </div>

            {/* In-depth Manifesto Narrative (Right side) */}
            <div className="lg:col-span-7 flex flex-col justify-center p-8 lg:p-10 rounded-2xl bg-white border border-stone-200/50 shadow-[0_4px_20px_rgba(0,0,0,0.01)] relative">
              <span className="text-[10px] font-mono text-zinc-400 mb-2 tracking-widest block uppercase">
                // MANIFESTO RECORD
              </span>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedData.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className={`text-xl sm:text-2xl font-display font-medium uppercase tracking-tight mb-4 ${selectedData.accentClass}`}>
                    {selectedData.name} Edition
                  </h3>
                  
                  <div className="text-stone-700 font-sans text-sm sm:text-base font-light leading-relaxed mb-6 space-y-4">
                    <p>{selectedData.manifesto}</p>
                    <p className="text-stone-500 text-xs italic font-serif">
                      "We focus heavily on the silhouette weight. When fabric has natural posture, the individual shines. True streetwear does not seek approval."
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Mini Brand Highlights inside tab */}
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="p-3 bg-brand-light/35 rounded-xl border border-brand-primary/5 flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-brand-primary/10 text-brand-primary">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-[11px] font-display font-bold uppercase text-stone-900 leading-none mb-0.5">Custom Cuts</h5>
                    <span className="text-[10px] text-stone-400 font-sans">Custom drop shoulders</span>
                  </div>
                </div>

                <div className="p-3 bg-brand-light/35 rounded-xl border border-brand-primary/5 flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-brand-primary/10 text-brand-primary">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-[11px] font-display font-bold uppercase text-stone-900 leading-none mb-0.5">100% Organic</h5>
                    <span className="text-[10px] text-stone-400 font-sans">Tailored and woven raw</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
