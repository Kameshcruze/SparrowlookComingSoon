import React, { useState } from 'react';
import { Instagram, Heart, MessageCircle, Send, Sparkles, Compass } from 'lucide-react';
import { INSTAGRAM_TEASERS } from '../data';
import logoImg from '../Layer 0.png';

export default function SocialTeaser() {
  const [likes, setLikes] = useState<{ [key: string]: number }>({
    'mood-01': 1243,
    'mood-02': 1845,
    'mood-03': 954,
    'mood-04': 1402
  });

  const [hasLiked, setHasLiked] = useState<{ [key: string]: boolean }>({});

  const toggleLike = (id: string) => {
    const alreadyLiked = hasLiked[id];
    setHasLiked(prev => ({ ...prev, [id]: !alreadyLiked }));
    setLikes(prev => ({
      ...prev,
      [id]: alreadyLiked ? prev[id] - 1 : prev[id] + 1
    }));
  };

  return (
    <section className="relative py-24 px-4 md:px-8 bg-[#FAF6F6] overflow-hidden" id="social-teaser-section">
      {/* Decorative details */}
      <div className="absolute top-1/2 left-0 w-8 h-8 rounded-full border border-brand-primary/10 pointer-events-none hidden xl:block" />

      <div className="w-full max-w-7xl mx-auto" id="social-teaser-viewport">
        
        {/* Header Title Grid */}
        <div className="flex flex-col md:flex-row items-baseline justify-between gap-4 mb-16 border-b border-stone-200 pb-8" id="social-header">
          <div>
            <span className="text-xs font-mono tracking-[0.25em] text-brand-primary uppercase block mb-2 font-semibold">
              // ATMOSPHERE RECORD
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-stone-900 uppercase">
              FOLLOW THE JOURNEY
            </h2>
          </div>
          
          <div className="flex items-center gap-2">
            <Instagram className="w-5 h-5 text-brand-primary" />
            <a
              href="https://www.instagram.com/sparrowlook_com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-mono tracking-widest text-stone-600 hover:text-brand-primary transition-colors uppercase font-bold"
            >
              @sparrowlook_com
            </a>
          </div>
        </div>

        {/* Minimal grid of moody previews (Instead of T-shirts/products, uses typography/textures) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="instagram-simulation-grid">
          {INSTAGRAM_TEASERS.map((post) => {
            const liked = hasLiked[post.id];
            
            return (
              <div
                key={post.id}
                className="bg-white border border-stone-200/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between"
                id={`insta-post-${post.id}`}
              >
                
                {/* Simulated Post Header */}
                <div className="p-4 flex items-center justify-between border-b border-stone-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center font-serif text-[10px] text-brand-primary font-bold">
                      SL
                    </div>
                    <div className="leading-none">
                      <span className="text-[11px] font-mono font-bold text-stone-800 uppercase flex items-center gap-1.5">
                        <img src={logoImg} className="w-3 h-3 object-contain" alt="Sparrow Logo" referrerPolicy="no-referrer" />
                        sparrowlook
                      </span>
                      <span className="text-[9px] font-mono text-stone-400">Atmosphere drop</span>
                    </div>
                  </div>
                  <Sparkles className="w-3.5 h-3.5 text-brand-primary/30" />
                </div>

                {/* Conceptual Fashion Card Content (NO products, pure typography textures) */}
                <div className={`relative ${post.aspectRatio} w-full bg-stone-950 flex flex-col justify-between p-6 overflow-hidden relative select-none`}>
                  
                  {/* Textured pattern background */}
                  <div className="absolute inset-0 opacity-[0.03] bg-gradient-to-tr from-brand-primary to-stone-100 pointer-events-none" />
                  <div className="absolute inset-0 bg-[radial-gradient(#ffffff_0.8px,transparent_0.8px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

                  {/* Soft crimson center glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-brand-primary/20 rounded-full blur-[40px] pointer-events-none" />

                  {/* Visual Metadata Overlay */}
                  <div className="flex justify-between items-center text-[8px] font-mono text-stone-400 tracking-wider">
                    <span>SECTOR_CRIMSON</span>
                    <span>JUNE_26_DOCKET</span>
                  </div>

                  {/* Center Bold Typographic Statement with micro serif pairing */}
                  <div className="my-auto text-center relative z-10 py-4">
                    <h4 className="text-white font-display text-sm tracking-[0.2em] font-extrabold uppercase mb-2">
                      {post.moodTitle}
                    </h4>
                    <span className="h-[1px] w-8 bg-brand-primary/60 block mx-auto mb-2" />
                    <p className="text-[10px] font-serif italic text-[#FFF5F6] opacity-75 max-w-[180px] mx-auto leading-normal">
                      &ldquo;Silhouettes define presence.&rdquo;
                    </p>
                  </div>

                  {/* Concept Statement on bottom of post image */}
                  <div className="text-[9px] font-mono text-zinc-500 leading-normal border-t border-zinc-900/60 pt-3">
                    <span className="text-[#D2143A]">Concept:</span> {post.concept}
                  </div>
                </div>

                {/* Simulated Post Action Bar (Heart, Comment, Share) */}
                <div className="p-4" id={`actions-${post.id}`}>
                  <div className="flex items-center justify-between mb-3 text-stone-600">
                    <div className="flex items-center gap-4">
                      {/* Heart Button with direct counter incremental click feedback */}
                      <button
                        onClick={() => toggleLike(post.id)}
                        className={`transition-transform duration-200 hover:scale-125 focus:outline-none ${liked ? 'text-brand-primary' : 'hover:text-brand-primary'}`}
                      >
                        <Heart className={`w-4 h-4 ${liked ? 'fill-current' : ''}`} />
                      </button>
                      <button className="hover:text-stone-800 transition-colors pointer-events-none">
                        <MessageCircle className="w-4 h-4" />
                      </button>
                    </div>
                    <span className="text-[9px] font-mono text-stone-300">#JUNE2026</span>
                  </div>

                  {/* Displays Interactive Counters */}
                  <div className="font-mono text-[10px] text-stone-500 flex items-center justify-between">
                    <span>
                      <strong className="text-stone-800 font-bold">{likes[post.id].toLocaleString()}</strong> genuine likes
                    </span>
                    <span>
                      <span className="text-stone-700">{post.comments}</span> threads
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Action Anchor invitation */}
        <div className="mt-14 text-center">
          <p className="text-xs font-sans text-stone-500 italic">
            "No studio models. No distracting products. Only the pure atmosphere of the loom."
          </p>
          <a
            href="https://www.instagram.com/sparrowlook_com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#D2143A] hover:text-stone-900 transition-colors uppercase font-bold"
          >
            <span>JOIN THE LIVE DIGITAL FEED</span>
            <Instagram className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
