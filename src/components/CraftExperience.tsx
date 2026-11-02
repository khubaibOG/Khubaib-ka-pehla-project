import React from 'react';
import { Scissors, Sparkles, Wine } from 'lucide-react';

export const CraftExperience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-20">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="font-mono text-xs uppercase tracking-ultra-wide text-pink font-semibold block mb-2">// 02 &bull; The Ethos</span>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight">The Standards of Craft</h2>
        <p className="text-graphite text-sm sm:text-base mt-3">Where surgical precision meets sensory relaxation. We obsess over the micro-details so your presence commands effortless respect.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Feature 1 */}
        <div className="border border-[#3B1D5C] p-8 rounded-2xl bg-[#160B24] hover:border-pink/60 transition-all duration-300 relative group overflow-hidden">
          <div className="w-12 h-12 rounded-xl bg-[#200F35] border border-[#3B1D5C] flex items-center justify-center text-pink mb-6 group-hover:bg-pink group-hover:text-white transition-colors duration-300">
            <Scissors className="w-5 h-5" />
          </div>
          <span className="font-mono text-xs text-graphite/60 tracking-widest uppercase">Standard 01</span>
          <h3 className="font-serif text-2xl font-normal text-white mt-2 mb-3">Japanese Feather Steel</h3>
          <p className="text-graphite text-sm leading-relaxed">
            Every straight razor shave employs newly unsealed, single-use Feather &reg; platinum-coated Japanese steel blades. Unmatched hygiene and microscopic cutting sharpness that prevents folliculitis.
          </p>
          <div className="mt-6 pt-4 border-t border-[#3B1D5C] font-mono text-[11px] text-pink font-semibold uppercase tracking-wider flex items-center space-x-1">
            <span>0.1mm Precision Tolerance</span>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="border border-[#3B1D5C] p-8 rounded-2xl bg-[#160B24] hover:border-pink/60 transition-all duration-300 relative group overflow-hidden">
          <div className="w-12 h-12 rounded-xl bg-[#200F35] border border-[#3B1D5C] flex items-center justify-center text-pink mb-6 group-hover:bg-pink group-hover:text-white transition-colors duration-300">
            <Sparkles className="w-5 h-5" />
          </div>
          <span className="font-mono text-xs text-graphite/60 tracking-widest uppercase">Standard 02</span>
          <h3 className="font-serif text-2xl font-normal text-white mt-2 mb-3">Botanical Scalp Alchemy</h3>
          <p className="text-graphite text-sm leading-relaxed">
            Custom compounded tonics derived from rosemary extract, cedarwood, and organic sea kelp. We test scalp pH prior to washing to balance the dermis and promote follicular vitality.
          </p>
          <div className="mt-6 pt-4 border-t border-[#3B1D5C] font-mono text-[11px] text-pink font-semibold uppercase tracking-wider flex items-center space-x-1">
            <span>Paraben & Sulfate Free</span>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="border border-[#3B1D5C] p-8 rounded-2xl bg-[#160B24] hover:border-pink/60 transition-all duration-300 relative group overflow-hidden">
          <div className="w-12 h-12 rounded-xl bg-[#200F35] border border-[#3B1D5C] flex items-center justify-center text-pink mb-6 group-hover:bg-pink group-hover:text-white transition-colors duration-300">
            <Wine className="w-5 h-5" />
          </div>
          <span className="font-mono text-xs text-graphite/60 tracking-widest uppercase">Standard 03</span>
          <h3 className="font-serif text-2xl font-normal text-white mt-2 mb-3">Private Acoustic Lounge</h3>
          <p className="text-graphite text-sm leading-relaxed">
            An antidote to chaotic street salons. Enjoy high-fidelity vinyl acoustic playback, private velvet club chairs, and complimentary pours of single malt Scotch, Yamazaki, or Kyoto espresso.
          </p>
          <div className="mt-6 pt-4 border-t border-[#3B1D5C] font-mono text-[11px] text-pink font-semibold uppercase tracking-wider flex items-center space-x-1">
            <span>Curated Vinyl & Library</span>
          </div>
        </div>

      </div>
    </section>
  );
};

