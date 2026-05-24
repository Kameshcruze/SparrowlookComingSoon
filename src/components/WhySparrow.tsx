import React, { useState } from 'react';
import { Layers, Compass, Shield, Coins, Sparkles, Plus } from 'lucide-react';
import { BRAND_FEATURES } from '../data';

// Helper to resolve the icon name to Lucide components
function FeatureIcon({ name, className }: { name: string; className: string }) {
  switch (name) {
    case 'Layers':
      return <Layers className={className} />;
    case 'Compass':
      return <Compass className={className} />;
    case 'Shield':
      return <Shield className={className} />;
    case 'PiggyBank':
    default:
      return <Coins className={className} />;
  }
}

export default function WhySparrow() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="relative py-24 px-4 md:px-8 bg-white overflow-hidden border-t border-rose-100/30" id="why-sparrow-section">
      <div className="w-full max-w-7xl mx-auto" id="why-sparrow-grid-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Typographic poster (Investor-Ready Editorial Vibe) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-zinc-950 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.08)]">
            {/* Background design accents */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.01]" style={{
              backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }} />

            <div>
              <div className="flex items-center gap-2 mb-10">
                <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                <span className="text-[10px] font-mono tracking-[0.25em] text-zinc-400 uppercase">
                  SPARROW FORMULA 04
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-display font-light uppercase tracking-tight leading-none mb-6">
                THE NEW <strong className="font-extrabold text-brand-primary block">STANDARDS</strong> OF UTILITY.
              </h3>

              <p className="text-zinc-400 font-sans font-light text-xs sm:text-sm leading-relaxed mb-8 max-w-sm">
                We believe T-shirts aren't throwaway blanks. They are the scaffolding of your wardrobe. Each variable — from loop yarn density to collar elasticity — has been mathematically optimized.
              </p>
            </div>

            {/* Simulated Specs Blueprint */}
            <div className="border-t border-zinc-900 pt-8 mt-8 space-y-4 font-mono text-[10px] text-zinc-400">
              <div className="flex justify-between items-center pb-2 border-b border-zinc-900">
                <span>FABRIC GRAVITY</span>
                <span className="text-brand-primary font-bold">280GSM HEAVYWEIGHT</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-zinc-900">
                <span>DRAFT RATIO</span>
                <span className="text-white">6:4 SILHOUETTE BALANCE</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-zinc-900">
                <span>COLLAR SEAM</span>
                <span className="text-white">DOUBLE STITCH LYCRA CORES</span>
              </div>
              <div className="flex justify-between items-center">
                <span>BATCH LIMIT</span>
                <span className="text-brand-primary font-bold">500 SIGNED COPIES</span>
              </div>
            </div>

            {/* Small corner detail */}
            <div className="mt-8 flex items-center justify-between text-[9px] font-mono tracking-widest text-[#FFF5F6]/40 uppercase">
              <span>DESIGN PROTOCOL</span>
              <span>©2026 CO.</span>
            </div>
          </div>

          {/* Right Column: Interactive feature cards block */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
            <div className="mb-6">
              <span className="text-xs font-mono text-stone-400 tracking-widest uppercase block mb-1">
                // MATRICES & ASSURANCE
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-stone-900 uppercase">
                WHY SPARROW LOOK STANDS ALONE
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {BRAND_FEATURES.map((item) => {
                const isActive = hoveredCard === item.id;
                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setHoveredCard(item.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 relative overflow-hidden group flex flex-col justify-between ${
                      isActive
                        ? 'bg-gradient-to-br from-[#FFF5F6] to-white border-brand-primary/20 shadow-[0_8px_25px_-5px_rgba(210,20,58,0.06)] scale-[1.02]'
                        : 'bg-white border-stone-200/60 shadow-[0_2px_12px_rgba(0,0,0,0.01)]'
                    }`}
                    style={{ minHeight: '230px' }}
                    id={`feature-card-${item.id}`}
                  >
                    {/* Corner animated expand indicator */}
                    <div className="absolute top-4 right-4 text-stone-300 group-hover:text-brand-primary transition-colors flex items-center justify-center">
                      <Plus className="w-4 h-4 transform group-hover:rotate-90 transition-transform duration-300" />
                    </div>

                    <div className="space-y-4">
                      {/* Icon */}
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 ${item.accentBg}`}>
                        <FeatureIcon name={item.iconName} className="w-5 h-5" />
                      </div>

                      {/* Header copy */}
                      <div>
                        <h4 className="font-display font-bold text-sm sm:text-base text-stone-900 uppercase tracking-tight">
                          {item.title}
                        </h4>
                        <p className="text-[10px] font-mono uppercase text-brand-primary font-semibold mt-0.5">
                          {item.subtitle}
                        </p>
                      </div>

                      {/* Description with subtle interactive reveal height */}
                      <p className="text-stone-500 text-xs font-sans leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom highlight thread */}
                    <div className={`w-full h-1 mt-6 rounded-full bg-stone-100 overflow-hidden relative`}>
                      <div
                        className={`h-full bg-brand-primary transition-all duration-500 rounded-full`}
                        style={{ width: isActive ? '100%' : '15%' }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
