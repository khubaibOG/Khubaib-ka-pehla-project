import React from 'react';
import { ChevronRight, ArrowRight, ArrowDown, Star } from 'lucide-react';

interface HeroProps {
  onOpenBooking: (prefill?: any) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Live Micro-Card */}
          <div 
            onClick={() => onOpenBooking({ time: '02:30 PM' })}
            className="inline-flex items-center space-x-3 bg-porcelain border border-hairline px-4 py-2 rounded-full shadow-sm hover:border-carmine/40 transition-colors cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-carmine animate-ping" />
            <span className="font-mono text-[11px] tracking-wider uppercase text-graphite">Next Available Chair:</span>
            <span className="font-mono text-xs font-semibold text-carmine underline decoration-carmine/40 underline-offset-4">2:30 PM Today</span>
            <ChevronRight className="w-3.5 h-3.5 text-graphite" />
          </div>

          {/* Typographic Headline */}
          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-ultra-wide text-graphite">Private Grooming Lounge &bull; Est. 2018</p>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[0.95] tracking-tight text-obsidian">
              Precision cut. <br/>
              <span className="italic font-light text-carmine">Singular</span> ritual.
            </h1>
          </div>

          <p className="text-base sm:text-lg text-graphite font-light max-w-xl leading-relaxed">
            Where traditional Japanese steel craftsmanship meets contemporary architectural grooming. An uncompromising sanctuary for the discerning modern gentleman.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-5 pt-2">
            <button 
              onClick={() => onOpenBooking()} 
              className="px-8 py-4 bg-pink text-white rounded-full font-mono text-xs tracking-widest uppercase hover:bg-pink-dark shadow-xl shadow-pink/25 transition-all duration-300 flex items-center justify-center space-x-3 group active:scale-95 font-semibold"
            >
              <span>Reserve Your Chair</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a 
              href="#packages" 
              className="px-8 py-4 border border-pink/30 text-white rounded-full font-mono text-xs tracking-widest uppercase hover:border-pink hover:text-pink transition-all duration-300 flex items-center justify-center space-x-3 group bg-[#160B24]/60"
            >
              <span>Explore Packages</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>

          {/* Social Proof Bar */}
          <div className="pt-8 border-t border-hairline flex flex-wrap items-center gap-6 sm:gap-12 text-graphite font-mono text-xs">
            <div>
              <div className="flex items-center space-x-1 text-carmine">
                <Star className="w-4 h-4 fill-carmine" />
                <span className="font-bold text-obsidian text-sm">4.9 / 5.0</span>
              </div>
              <span className="text-[11px] text-graphite/80 uppercase tracking-wider">1,200+ Discerning Clients</span>
            </div>
            <div className="h-8 w-px bg-hairline" />
            <div>
              <span className="block font-bold text-obsidian text-sm font-sans">Feather Japan &trade;</span>
              <span className="text-[11px] text-graphite/80 uppercase tracking-wider">Sterile Single-Use Steel</span>
            </div>
            <div className="h-8 w-px bg-hairline hidden sm:block" />
            <div className="hidden sm:block">
              <span className="block font-bold text-obsidian text-sm font-sans">Private Lounge</span>
              <span className="text-[11px] text-graphite/80 uppercase tracking-wider">Japanese Whisky & Espresso</span>
            </div>
          </div>

        </div>

        {/* Right Column Visual */}
        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-porcelain border border-hairline shadow-2xl relative group">
              <img 
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80" 
                alt="Bespoke Barbering Craft" 
                className="w-full h-full object-cover object-center grayscale contrast-125 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white p-4 glassmorphic bg-obsidian/75 rounded-xl border border-white/10 backdrop-blur-md">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-mono text-[10px] tracking-ultra-wide uppercase text-carmine-light">Chair 01 &bull; Master Barber</span>
                  <span className="font-mono text-xs text-white/80">Madison Ave</span>
                </div>
                <p className="font-serif text-lg italic text-white/90">"Every haircut is tailored to cranial architecture and natural flow."</p>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -top-6 -left-6 bg-[#160B24] p-5 rounded-xl shadow-xl border border-pink/30 max-w-[210px] hidden sm:block transform hover:-translate-y-1 transition-transform">
              <div className="flex items-center space-x-2.5 text-pink mb-1.5">
                <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-pink">Sanctuary Standard</span>
              </div>
              <p className="text-xs text-graphite leading-relaxed">Private acoustic suites with dedicated airflow & bespoke acoustics.</p>
            </div>

            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-pink/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>

      </div>
    </section>
  );
};

