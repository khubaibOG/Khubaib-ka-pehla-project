import React from 'react';
import { Compass, MapPin, ExternalLink } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section id="hours-location" className="py-24 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        
        {/* Left Column */}
        <div className="lg:col-span-6 space-y-8 flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-ultra-wide text-pink font-semibold block mb-2">// 04 &bull; Physical Presence</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-normal text-white tracking-tight">The Madison Lounge</h2>
            <p className="text-graphite text-sm sm:text-base mt-2">Located discreetly on Madison Avenue with private curbside concierge valet service.</p>
          </div>

          <div className="space-y-6 border-t border-b border-[#3B1D5C] py-6 font-mono text-xs">
            <div className="flex items-start justify-between">
              <span className="text-graphite/70 uppercase tracking-wider">Sanctuary Address</span>
              <span className="text-right text-white font-sans font-medium">
                742 Madison Avenue, Suite 4B<br />
                <span className="text-graphite text-xs">Upper East Side, New York, NY 10065</span>
              </span>
            </div>

            <div className="flex items-start justify-between">
              <span className="text-graphite/70 uppercase tracking-wider">Concierge Line</span>
              <div className="text-right">
                <a href="tel:+12128449100" className="text-pink hover:underline font-bold">+1 (212) 844-9100</a>
                <span className="block text-graphite/70 text-[10px] mt-0.5">VIP Direct & SMS Line</span>
              </div>
            </div>

            <div className="flex items-start justify-between">
              <span className="text-graphite/70 uppercase tracking-wider">Curbside Valet</span>
              <span className="text-right text-white font-sans text-xs">Complimentary white-glove valet on 65th St.</span>
            </div>
          </div>

          {/* Operating Schedule */}
          <div className="bg-[#160B24] border border-[#3B1D5C] rounded-2xl p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="font-mono text-xs uppercase tracking-wider font-semibold text-white">Operating Schedule</span>
              <span className="inline-flex items-center space-x-1.5 text-[11px] font-mono text-pink bg-pink/10 px-2.5 py-1 rounded-full border border-pink/30">
                <span className="w-1.5 h-1.5 rounded-full bg-pink" />
                <span>Accepting Appointments</span>
              </span>
            </div>
            <div className="space-y-2 text-xs font-mono text-graphite">
              <div className="flex justify-between pb-1 border-b border-[#3B1D5C]/60">
                <span>Monday &ndash; Thursday</span>
                <span className="text-white font-medium">09:00 AM &ndash; 08:00 PM</span>
              </div>
              <div className="flex justify-between pb-1 border-b border-[#3B1D5C]/60">
                <span>Friday &ndash; Saturday</span>
                <span className="text-white font-medium">08:30 AM &ndash; 09:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="text-pink font-medium">10:00 AM &ndash; 06:00 PM (By Appointment Only)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column Custom Map */}
        <div className="lg:col-span-6 relative rounded-3xl overflow-hidden border border-[#3B1D5C] shadow-lg bg-[#0E061A] p-8 flex flex-col justify-between min-h-[460px]">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid-pattern-react" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#EC4899" strokeWidth="0.7" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-pattern-react)" />
              <path d="M-50,120 L800,280" stroke="#EC4899" strokeWidth="2" />
              <path d="M-50,340 L800,100" stroke="#EC4899" strokeWidth="1.5" />
              <path d="M260,-50 L240,600" stroke="#EC4899" strokeWidth="2.5" />
              <path d="M500,-50 L520,600" stroke="#EC4899" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="relative z-10 flex justify-between items-center text-white/90">
            <div className="flex items-center space-x-2 font-mono text-xs">
              <Compass className="w-4 h-4 text-pink" />
              <span>40.7675&deg; N, 73.9688&deg; W</span>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-pink bg-pink/10 px-3 py-1 rounded-full border border-pink/30">Manhattan &bull; UES</span>
          </div>

          <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center">
            <div className="relative flex items-center justify-center mb-3">
              <span className="absolute w-16 h-16 rounded-full bg-pink/30 animate-ping" />
              <div className="w-10 h-10 rounded-full bg-pink border-2 border-white flex items-center justify-center text-white shadow-xl">
                <MapPin className="w-5 h-5" />
              </div>
            </div>
            <div className="bg-[#160B24]/90 backdrop-blur-md px-5 py-2.5 rounded-full border border-pink/30 text-white shadow-2xl">
              <p className="font-serif text-base tracking-wide">OG Barber &bull; Lounge 4B</p>
              <p className="font-mono text-[10px] text-pink uppercase tracking-widest">Discreet Private Elevator Entry</p>
            </div>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#3B1D5C]">
            <div className="text-graphite font-mono text-xs">
              <span>2 min walk from 68 St - Hunter College Station</span>
            </div>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-5 py-2.5 rounded-full bg-pink text-white hover:bg-pink-dark transition-all font-mono text-xs uppercase tracking-wider font-semibold flex items-center space-x-2 shadow-md shadow-pink/20"
            >
              <span>Open in Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

