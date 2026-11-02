import React, { useState, useEffect } from 'react';

export const Footer: React.FC = () => {
  const [timeStr, setTimeStr] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: true, 
        timeZone: 'America/New_York' 
      };
      setTimeStr(`New York Time: ${now.toLocaleTimeString('en-US', options)} (EST)`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-white border-t border-hairline pt-20 pb-12 relative overflow-hidden">
      {/* Background Brand Watermark */}
      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 pointer-events-none select-none opacity-[0.03] whitespace-nowrap font-serif text-[18vw] leading-none text-obsidian uppercase tracking-tighter">
        CARMINE
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Summary */}
          <div className="lg:col-span-2 space-y-4">
            <div className="group flex items-center space-x-3.5 select-none cursor-pointer">
              <div className="relative w-9 h-9 flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full logo-ring-rotate" viewBox="0 0 44 44">
                  <circle cx="22" cy="22" r="20" fill="none" stroke="#B91C1C" strokeWidth="1" strokeDasharray="3 5" className="opacity-50 group-hover:opacity-100 transition-opacity" />
                </svg>
                <div className="logo-monogram-box w-7 h-7 border border-obsidian flex items-center justify-center font-serif text-sm font-bold bg-white">
                  <span className="logo-monogram-inner">AC</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl tracking-widest uppercase font-medium logo-shimmer-text">Atelier Carmine</span>
                <span className="font-mono text-[8px] tracking-ultra-wide uppercase text-graphite/70 group-hover:text-carmine transition-colors">Haute Coiffure LLC</span>
              </div>
            </div>
            <p className="text-graphite text-xs sm:text-sm max-w-sm leading-relaxed">
              New York's premier sanctuary for tailored cranial architecture, Japanese straight razor rituals, and private bespoke restorative care.
            </p>
            <div className="font-mono text-xs text-carmine pt-2 flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-graphite">{timeStr || 'New York Time: 02:45 AM (EST)'}</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-obsidian font-bold mb-4">Navigation</h4>
            <ul className="space-y-2.5 font-mono text-xs text-graphite">
              <li><a href="#services" className="hover:text-carmine transition-colors">Curated Services</a></li>
              <li><a href="#packages" className="hover:text-carmine transition-colors">Signature Suites</a></li>
              <li><a href="#experience" className="hover:text-carmine transition-colors">The Japanese Steel Craft</a></li>
              <li><a href="#barbers" className="hover:text-carmine transition-colors">Master Artisans</a></li>
              <li><a href="#hours-location" className="hover:text-carmine transition-colors">Sanctuary & Valet</a></li>
            </ul>
          </div>

          {/* Ritual Suites */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-obsidian font-bold mb-4">Ritual Suites</h4>
            <ul className="space-y-2.5 font-mono text-xs text-graphite">
              <li><a href="#packages" className="hover:text-carmine transition-colors">The Executive Ritual ($185)</a></li>
              <li><a href="#packages" className="hover:text-carmine transition-colors">The Groom's Delegation ($260)</a></li>
              <li><a href="#packages" className="hover:text-carmine transition-colors">Quick Refresher ($95)</a></li>
              <li><a href="#services" className="hover:text-carmine transition-colors">Japanese Head Spa</a></li>
              <li><a href="#services" className="hover:text-carmine transition-colors">Grey Blending Camouflage</a></li>
            </ul>
          </div>

          {/* Concierge */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-obsidian font-bold mb-4">Concierge</h4>
            <ul className="space-y-2.5 font-mono text-xs text-graphite">
              <li><a href="tel:+12128449100" className="hover:text-carmine transition-colors">VIP Line: (212) 844-9100</a></li>
              <li><a href="mailto:concierge@ateliercarmine.com" className="hover:text-carmine transition-colors">Private Lounge Buyouts</a></li>
              <li><a href="mailto:events@ateliercarmine.com" className="hover:text-carmine transition-colors">Wedding Delegation Prep</a></li>
              <li><a href="#" className="hover:text-carmine transition-colors">Gift Ceremonies & Black Card</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-hairline pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-graphite/70 gap-4">
          <div>
            &copy; {new Date().getFullYear()} Atelier Carmine Haute Coiffure LLC. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-carmine">Privacy Protocol</a>
            <a href="#" className="hover:text-carmine">Terms of Sanctuary</a>
            <a href="#" className="hover:text-carmine">Accessibility Standards</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

