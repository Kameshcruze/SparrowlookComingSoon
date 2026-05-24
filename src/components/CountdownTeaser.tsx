import React, { useState, useEffect } from 'react';
import { Clock, Calendar, Bell, ArrowRight } from 'lucide-react';

export default function CountdownTeaser() {
  // Target Launch Date: June 18, 2026
  const targetDate = new Date('2026-06-18T18:00:00Z').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isCompleted: false
  });

  const [notificationSaved, setNotificationSaved] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft(prev => ({ ...prev, isCompleted: true }));
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isCompleted: false });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.trim().length > 7) {
      setNotificationSaved(true);
      // Simulate save
      setTimeout(() => {
        setPhoneNumber('');
      }, 3000);
    }
  };

  return (
    <section className="relative py-20 px-4 md:px-8 bg-[#FAF6F6] overflow-hidden" id="countdown-section">
      {/* Red soft glow backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-4xl mx-auto text-center relative z-10" id="countdown-wrapper">
        <span className="text-xs font-mono tracking-[0.25em] text-brand-primary uppercase block mb-3 font-semibold">
          // THE LAUNCH PROTOCOL
        </span>
        <h2 className="text-3xl sm:text-4xl font-display font-black text-stone-900 uppercase tracking-tight mb-4">
          LAUNCHING NEXT MONTH
        </h2>
        <p className="text-stone-500 font-sans font-light max-w-xl mx-auto text-sm sm:text-base leading-relaxed mb-12">
          Only a selected capsule batch is being prepared for this premier release. Once sold out, the patterns will be retired permanently.
        </p>

        {/* Outer Red-themed Glassmorphism Container */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-12 border border-brand-primary/10 shadow-[0_20px_45px_rgba(210,20,58,0.03)] mb-10 max-w-3xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6" id="countdown-timer-grid">
            {/* Days Card */}
            <div className="bg-gradient-to-br from-white to-brand-light/30 rounded-2xl p-4 sm:p-6 border border-white shadow-sm flex flex-col items-center">
              <span className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-brand-primary mb-1 tracking-tight">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 font-bold">DAYS</span>
            </div>

            {/* Hours Card */}
            <div className="bg-gradient-to-br from-white to-brand-light/30 rounded-2xl p-4 sm:p-6 border border-white shadow-sm flex flex-col items-center">
              <span className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-stone-900 mb-1 tracking-tight">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 font-bold">HOURS</span>
            </div>

            {/* Minutes Card */}
            <div className="bg-gradient-to-br from-white to-brand-light/30 rounded-2xl p-4 sm:p-6 border border-white shadow-sm flex flex-col items-center">
              <span className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-stone-900 mb-1 tracking-tight">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 font-bold">MINUTES</span>
            </div>

            {/* Seconds Card */}
            <div className="bg-gradient-to-br from-white to-[#FFF5F6] rounded-2xl p-4 sm:p-6 border border-brand-primary/10 shadow-sm flex flex-col items-center">
              <span className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-brand-primary mb-1 tracking-tight animate-pulse">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-brand-primary font-extrabold">SECONDS</span>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-primary" /> TARGET DATE: JUNE 18, 2026, 18:00 UTC
            </span>
            <span className="flex items-center gap-1 px-2.5 py-1 rounded bg-[#FFF5F6] text-brand-primary border border-brand-primary/5">
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-ping" />
              TICKING IN REALTIME
            </span>
          </div>
        </div>

        {/* Micro Interaction Tool: Interactive calendar holds & SMS alert setup */}
        <div className="max-w-md mx-auto" id="sms-notify border">
          {!notificationSaved ? (
            <form onSubmit={handleNotifySubmit} className="flex flex-col sm:flex-row items-center gap-2">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-stone-400">
                  <Bell className="w-4 h-4" />
                </div>
                <input
                  type="tel"
                  placeholder="Enter phone for drop text alert..."
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-full text-xs font-sans bg-white border border-stone-200 focus:border-brand-primary focus:outline-none transition-all duration-300 shadow-sm"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-display font-bold uppercase tracking-widest text-white bg-stone-900 hover:bg-black transition-colors duration-200 whitespace-nowrap shadow-md"
              >
                Notify Me
              </button>
            </form>
          ) : (
            <div className="p-4 rounded-full bg-[#FFF5F6] border border-brand-primary/10 text-brand-primary text-xs font-mono tracking-wide flex items-center justify-center gap-2 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
              SUCCESS: Phone logged for immediate SMS drop alerts!
            </div>
          )}

          <div className="mt-4 flex justify-center gap-6">
            <a
              href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Sparrow+Look+Fashion+Brand+Launch&dates=20260618T180000Z/20260618T200000Z&details=The+exclusive+Sparrow+Look+2026+Fashion+drop+goes+live.+Prepare+your+styles."
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-mono uppercase tracking-wider text-stone-400 hover:text-brand-primary transition-colors flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" /> ADD TO CALENDAR
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
