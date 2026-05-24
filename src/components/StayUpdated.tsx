import React, { useState } from 'react';
import { Mail, CheckCircle, Ticket, Copy, Sparkles, Send } from 'lucide-react';
import { Subscriber, StyleArchetype } from '../types';

interface StayUpdatedProps {
  id?: string;
}

export default function StayUpdated({ id = "stay-updated-section" }: StayUpdatedProps) {
  const [email, setEmail] = useState('');
  const [selectedPreference, setSelectedPreference] = useState<StyleArchetype | 'general'>('general');
  const [subscriberData, setSubscriberData] = useState<Subscriber | null>(null);
  const [copiedToken, setCopiedToken] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setIsError(true);
      return;
    }

    setIsError(false);
    
    // Generate a unique high-fashion serial number
    const randomHex = Math.floor(1000 + Math.random() * 9000);
    const token = `SPRW-VIP-26-${randomHex}`;

    const newSubscriber: Subscriber = {
      email,
      archetype: selectedPreference === 'general' ? undefined : selectedPreference,
      timestamp: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }),
      vipToken: token
    };

    // Save locally
    try {
      const existing = localStorage.getItem('sparrow_subscribers');
      const list = existing ? JSON.parse(existing) : [];
      list.push(newSubscriber);
      localStorage.setItem('sparrow_subscribers', JSON.stringify(list));
    } catch (err) {
      console.warn("Storage write failed due to sandboxed environment, continuing gracefully.");
    }

    setSubscriberData(newSubscriber);
    setEmail('');
  };

  const copyTokenToClipboard = () => {
    if (!subscriberData) return;
    navigator.clipboard.writeText(subscriberData.vipToken);
    setCopiedToken(true);
    setTimeout(() => setCopiedToken(false), 2000);
  };

  return (
    <section className="relative py-24 px-4 md:px-8 bg-white overflow-hidden border-t border-rose-100/30" id={id}>
      {/* Editorial Grid Backing */}
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#FAF6F6] to-transparent pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-4xl mx-auto relative z-10" id="subscription-container">
        <div className="bg-[#FAF6F6] border border-rose-100/50 rounded-3xl p-8 sm:p-14 relative shadow-[0_12px_45px_rgba(210,20,58,0.02)]">
          
          {/* Form State */}
          {!subscriberData ? (
            <div className="max-w-xl mx-auto text-center" id="subscription-form-envelope">
              <span className="text-xs font-mono tracking-[0.25em] text-brand-primary uppercase block mb-3 font-semibold">
                // PRIORITY NOTIFICATIONS
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-black text-stone-900 uppercase tracking-tight mb-4">
                BE THE FIRST TO KNOW
              </h2>
              <p className="text-stone-500 font-sans font-light text-xs sm:text-sm leading-relaxed mb-8">
                Join our premium priority waitlist. Sparrow Look VIP members get early entry notifications 2 hours before our public launch to lock in their selections, along with a secret voucher.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Fashion preference selection */}
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-stone-400 font-bold block">
                    Choose Your Style Preference (Optional)
                  </label>
                  <div className="flex flex-wrap justify-center gap-2">
                    {[
                      { id: 'general', name: 'ALL PIECES' },
                      { id: 'avant-garde', name: 'CRIMSON AVANT-GARDE' },
                      { id: 'minimalist-rebel', name: 'MINIMAL REBEL' },
                      { id: 'bold-iconoclast', name: 'THE ICONOCLAST' },
                    ].map((pref) => (
                      <button
                        key={pref.id}
                        type="button"
                        onClick={() => setSelectedPreference(pref.id as StyleArchetype | 'general')}
                        className={`px-3.5 py-1.5 rounded-full text-[10px] font-display uppercase tracking-widest transition-all ${
                          selectedPreference === pref.id
                            ? 'bg-brand-primary text-white font-bold'
                            : 'bg-white text-stone-500 hover:text-stone-800 border border-stone-200'
                        }`}
                      >
                        {pref.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Email Box design with validation feedback */}
                <div className="relative max-w-md mx-auto">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-stone-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    placeholder="Enter your premium email address..."
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (isError) setIsError(false);
                    }}
                    className={`w-full pl-11 pr-32 py-4 rounded-full text-xs font-sans bg-white border focus:outline-none transition-all duration-300 shadow-sm ${
                      isError ? 'border-brand-primary ring-1 ring-brand-primary/20' : 'border-stone-200 focus:border-brand-primary'
                    }`}
                    required
                  />
                  <div className="absolute right-2 top-2">
                    <button
                      type="submit"
                      className="px-6 py-2 rounded-full text-xs font-display font-extrabold uppercase tracking-widest text-[#FAF6F6] bg-[#D2143A] hover:bg-zinc-950 transition-colors duration-300 flex items-center gap-1.5 h-[36px]"
                    >
                      <span>SUBSCRIBE</span>
                      <Send className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {isError && (
                  <p className="text-brand-primary text-[10px] font-mono animate-pulse">
                    * Please insert a valid email location.
                  </p>
                )}
              </form>

              <div className="mt-8 flex justify-center items-center gap-6 text-[9px] font-mono text-zinc-400 uppercase tracking-widest leading-none">
                <span>✓ SPARK FREE SHIPPING</span>
                <span>•</span>
                <span>✓ NO ADVERTISING SPAM</span>
              </div>
            </div>
          ) : (
            /* Elegant high-fashion VIP Ticket Generation State */
            <div className="max-w-xl mx-auto text-center py-4" id="subscription-success-envelope">
              <div className="w-12 h-12 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-display font-black text-stone-900 uppercase tracking-tight mb-2">
                RESERVATION CONFIRMED
              </h3>
              <p className="text-xs text-stone-500 font-sans max-w-sm mx-auto mb-8">
                Your credentials have been authenticated. You are verified for the exclusive Launch Day queue. Below is your secure passport.
              </p>

              {/* VIP TICKET LAYOUT */}
              <div className="max-w-md mx-auto bg-white border border-brand-primary/15 rounded-2xl relative shadow-md overflow-hidden" id="vip-ticket-preview">
                {/* Visual tickets notch indicators */}
                <div className="absolute top-1/2 -left-3 w-6 h-6 rounded-full bg-[#FAF6F6] border-r border-brand-primary/15 transform -translate-y-1/2" />
                <div className="absolute top-1/2 -right-3 w-6 h-6 rounded-full bg-[#FAF6F6] border-l border-brand-primary/15 transform -translate-y-1/2" />

                {/* Ticket Top */}
                <div className="p-6 bg-gradient-to-br from-[#FFF5F6] to-white border-b border-dashed border-brand-primary/15 flex items-center justify-between text-left">
                  <div>
                    <span className="text-[9px] font-mono text-stone-400 uppercase block tracking-wider">MEMBER SEED ID</span>
                    <span className="text-xs font-mono font-bold text-stone-800">{subscriberData.email}</span>
                    {subscriberData.archetype && (
                      <span className="inline-block mt-1 px-2 py-0.5 rounded bg-brand-primary/5 border border-brand-primary/5 text-[9px] font-mono text-[#D2143A] uppercase font-bold">
                        {subscriberData.archetype} preference
                      </span>
                    )}
                  </div>
                  <Ticket className="w-8 h-8 text-brand-primary/30" />
                </div>

                {/* Ticket Bottom */}
                <div className="p-6 text-left flex flex-col sm:flex-row items-center sm:justify-between gap-4">
                  <div>
                    <span className="text-[9px] font-mono text-stone-400 uppercase block tracking-wider">VIP DOCKET KEY</span>
                    <span className="text-sm font-mono font-bold text-brand-primary flex items-center gap-1.5">
                      {subscriberData.vipToken}
                      <button
                        onClick={copyTokenToClipboard}
                        className="text-stone-400 hover:text-brand-primary transition-colors focus:outline-none p-1 bg-stone-50 hover:bg-[#FFF5F6] rounded-md border border-stone-200"
                        title="Copy ticket token"
                      >
                        <Copy className="w-3.5 h-3.5" />
                      </button>
                    </span>
                    {copiedToken && (
                      <span className="text-[9px] font-mono text-green-600 block mt-0.5">Copied to clipboard!</span>
                    )}
                  </div>

                  <div className="text-right sm:text-right w-full sm:w-auto font-mono text-xs text-stone-500">
                    <div>DATE: {subscriberData.timestamp}</div>
                    <div className="text-brand-primary uppercase font-bold text-[10px] mt-0.5">PASS LEVEL: TIER 1 Early-Bird</div>
                  </div>
                </div>

                {/* Ticket Incentive Banner */}
                <div className="py-2.5 px-4 bg-brand-primary text-[#FFF5F6] text-[10px] font-mono tracking-widest uppercase flex items-center justify-center gap-1.5 font-bold">
                  <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                  <span>2H Early Access + Free Premium shipping</span>
                </div>
              </div>

              <button
                onClick={() => setSubscriberData(null)}
                className="mt-8 text-xs font-mono uppercase text-stone-400 hover:text-brand-primary transition-all underline decoration-dotted"
              >
                Register an additional credential
              </button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
