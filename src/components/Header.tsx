import React from 'react';
import { ArrowUpRight, Menu, X, Calendar } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenBooking,
  mobileMenuOpen,
  setMobileMenuOpen
}) => {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-4 px-6 md:px-12 flex justify-between items-center glassmorphic border-b border-hairline/80">
        {/* Brand Monogram */}
        <a href="#" className="group flex items-center space-x-3.5 focus:outline-none select-none">
          {/* Animated Bespoke Monogram Icon */}
          <div className="relative w-10 h-10 flex items-center justify-center">
            {/* Slow orbiting dashed luxury ring */}
            <svg className="absolute inset-0 w-full h-full logo-ring-rotate pointer-events-none" viewBox="0 0 44 44">
              <circle
                cx="22"
                cy="22"
                r="20"
                fill="none"
                stroke="#B91C1C"
                strokeWidth="1"
                strokeDasharray="4 6"
                className="opacity-40 group-hover:opacity-100 transition-opacity duration-500"
              />
            </svg>

            {/* Corner hairline brackets that expand on hover */}
            <span className="logo-bracket-pulse logo-bracket-left absolute -left-1 top-1 text-[8px] font-mono text-carmine opacity-0 group-hover:opacity-100 transition-all duration-300">「</span>
            <span className="logo-bracket-pulse logo-bracket-right absolute -right-1 bottom-1 text-[8px] font-mono text-carmine opacity-0 group-hover:opacity-100 transition-all duration-300">」</span>

            {/* Central Monogram Diamond Box with 3D rotation & scale spring */}
            <div className="logo-monogram-box relative w-8 h-8 border border-obsidian/90 bg-white/80 backdrop-blur-sm flex items-center justify-center font-serif text-base tracking-wider font-bold">
              <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-carmine rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></span>
              <span className="logo-monogram-inner transition-transform duration-500 inline-block">AC</span>
            </div>
          </div>

          {/* Brand Typographic Wordmark with shimmer gradient effect */}
          <div className="flex flex-col">
            <div className="flex items-center space-x-1.5">
              <span className="font-serif text-xl tracking-widest-bespoke uppercase font-medium leading-none logo-shimmer-text">
                Atelier Carmine
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-carmine transform scale-75 group-hover:scale-125 transition-transform duration-300"></span>
            </div>
            <div className="flex items-center space-x-2 mt-1">
              <span className="font-mono text-[9px] tracking-ultra-wide uppercase text-graphite/70 group-hover:text-carmine transition-colors duration-300">
                Haute Grooming Lounge
              </span>
              <span className="h-px w-0 group-hover:w-4 bg-carmine transition-all duration-300"></span>
            </div>
          </div>
        </a>

        {/* Center Floating Pill Nav */}
        <nav className="hidden lg:flex items-center space-x-1 border border-hairline bg-white/90 shadow-sm px-4 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase">
          <a href="#services" className="px-3.5 py-1.5 rounded-full text-graphite hover:text-carmine hover:bg-porcelain transition-all duration-200">Services</a>
          <a href="#packages" className="px-3.5 py-1.5 rounded-full text-graphite hover:text-carmine hover:bg-porcelain transition-all duration-200">The Rituals</a>
          <a href="#experience" className="px-3.5 py-1.5 rounded-full text-graphite hover:text-carmine hover:bg-porcelain transition-all duration-200">The Craft</a>
          <a href="#barbers" className="px-3.5 py-1.5 rounded-full text-graphite hover:text-carmine hover:bg-porcelain transition-all duration-200">Artisans</a>
          <a href="#hours-location" className="px-3.5 py-1.5 rounded-full text-graphite hover:text-carmine hover:bg-porcelain transition-all duration-200">Sanctuary</a>
        </nav>

        {/* Right Action & Live Status */}
        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex items-center space-x-2 text-[11px] font-mono text-graphite bg-porcelain px-3 py-1.5 rounded-full border border-hairline">
            <span className="relative flex h-2 w-2">
              <span className="status-pulse absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="tracking-wider uppercase text-[10px]">Open Until 9 PM</span>
          </div>

          <button 
            onClick={onOpenBooking} 
            className="relative group overflow-hidden bg-carmine text-white text-xs font-mono tracking-widest uppercase px-5 py-2.5 rounded-full shadow-sm hover:bg-carmine-dark transition-all duration-300 flex items-center space-x-2 active:scale-95"
          >
            <span className="relative z-10 font-medium">Book Appointment</span>
            <ArrowUpRight className="w-3.5 h-3.5 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <button 
            onClick={() => setMobileMenuOpen(prev => !prev)} 
            className="lg:hidden p-2 text-obsidian hover:text-carmine focus:outline-none" 
            aria-label="Toggle Navigation"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 z-50 bg-white/98 backdrop-blur-2xl flex flex-col justify-between p-8 transform transition-transform duration-500 ease-in-out lg:hidden ${
        mobileMenuOpen ? 'translate-y-0' : '-translate-y-full pointer-events-none'
      }`}>
        <div className="flex justify-between items-center border-b border-hairline pb-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 border border-obsidian flex items-center justify-center font-serif text-base font-bold">AC</div>
            <span className="font-serif text-lg tracking-widest uppercase">Atelier Carmine</span>
          </div>
          <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-obsidian hover:text-carmine">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col space-y-6 my-auto text-left">
          {[
            { href: '#services', label: 'Curated Services', id: '01' },
            { href: '#packages', label: 'Signature Suites', id: '02' },
            { href: '#experience', label: 'The Craft', id: '03' },
            { href: '#barbers', label: 'Master Artisans', id: '04' },
            { href: '#hours-location', label: 'Private Sanctuary', id: '05' }
          ].map(item => (
            <a 
              key={item.id}
              href={item.href} 
              onClick={() => setMobileMenuOpen(false)} 
              className="font-serif text-3xl sm:text-4xl text-obsidian hover:text-carmine transition-colors flex items-center justify-between border-b border-hairline pb-4"
            >
              <span>{item.label}</span>
              <span className="font-mono text-xs text-graphite tracking-widest">{item.id}</span>
            </a>
          ))}
        </div>

        <div className="space-y-4 pt-6 border-t border-hairline">
          <button 
            onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }} 
            className="w-full bg-carmine text-white py-4 rounded-full font-mono text-xs tracking-widest uppercase flex items-center justify-center space-x-2"
          >
            <span>Reserve Your Chair</span>
            <Calendar className="w-4 h-4" />
          </button>
          <div className="flex justify-between items-center text-xs font-mono text-graphite">
            <span>742 Madison Ave, New York</span>
            <span>VIP: +1 (212) 844-9100</span>
          </div>
        </div>
      </div>
    </>
  );
};

