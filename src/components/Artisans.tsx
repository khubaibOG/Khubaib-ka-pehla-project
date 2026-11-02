import React from 'react';
import { ARTISANS } from '../data';

interface ArtisansProps {
  onSelectBarber: (barberName: string) => void;
}

export const Artisans: React.FC<ArtisansProps> = ({ onSelectBarber }) => {
  return (
    <section id="barbers" className="py-24 bg-[#120722] border-t border-b border-[#3B1D5C] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-ultra-wide text-pink font-semibold block mb-2">// 03 &bull; The Masters</span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight">The Master Artisans</h2>
            <p className="text-graphite text-sm sm:text-base mt-2">Decades of combined master scissorsmanship, cranial geometry, and razor craft.</p>
          </div>
          <p className="font-mono text-xs text-pink uppercase tracking-widest font-semibold">Select an artisan to book directly</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ARTISANS.map(artisan => (
            <div 
              key={artisan.id} 
              className="bg-[#160B24] rounded-2xl border border-[#3B1D5C] overflow-hidden group hover:border-pink/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[3/4] overflow-hidden bg-[#200F35] relative">
                  <img 
                    src={artisan.imageUrl} 
                    alt={artisan.name} 
                    className="w-full h-full object-cover object-center grayscale contrast-125 transition-transform duration-700 group-hover:scale-105 opacity-90"
                  />
                  <div className="absolute top-3 right-3 bg-pink text-white text-[10px] font-mono px-2.5 py-1 rounded-full uppercase tracking-wider font-bold">
                    {artisan.chair}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-normal text-white group-hover:text-pink transition-colors">
                    {artisan.name}
                  </h3>
                  <p className="font-mono text-xs text-pink font-medium uppercase tracking-wider mt-1">{artisan.title}</p>
                  <div className="mt-4 pt-4 border-t border-[#3B1D5C] text-xs text-graphite space-y-1">
                    <div className="flex justify-between">
                      <span className="text-graphite/60">Experience:</span>
                      <span className="font-mono font-medium text-white">{artisan.experience}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-graphite/60">Signature:</span>
                      <span className="font-mono font-medium text-white">{artisan.signature}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button 
                  onClick={() => onSelectBarber(artisan.name)}
                  className="w-full py-2.5 rounded-lg border border-pink/40 text-pink hover:bg-pink hover:text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-200"
                >
                  Book with {artisan.name.split(' ')[0]}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

