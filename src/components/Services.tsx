import React, { useState } from 'react';
import { SERVICES_DATA, SIGNATURE_SUITES } from '../data';
import { Plus, ArrowRight, Check } from 'lucide-react';

interface ServicesProps {
  onSelectService: (service: { name: string; price: number; duration: string; category?: string }) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [catalogMode, setCatalogMode] = useState<'alacarte' | 'bundles'>('alacarte');
  const [activeCategory, setActiveCategory] = useState<'hair' | 'beard' | 'recovery'>('hair');

  return (
    <section id="services" className="py-24 bg-porcelain/60 border-t border-b border-hairline relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header with Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-ultra-wide text-carmine font-semibold block mb-2">// 01 &bull; Service Taxonomy</span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-obsidian tracking-tight">The Curated Menu</h2>
            <p className="text-graphite text-sm sm:text-base mt-2 max-w-md">Select individually crafted treatments or explore all-inclusive signature grooming suites.</p>
          </div>

          {/* Toggle */}
          <div className="inline-flex p-1.5 bg-[#160B24] border border-[#3B1D5C] rounded-full shadow-sm self-start md:self-end">
            <button 
              onClick={() => setCatalogMode('alacarte')}
              className={`px-5 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-200 ${
                catalogMode === 'alacarte' ? 'bg-pink text-white font-semibold shadow-sm' : 'text-graphite hover:text-pink font-medium'
              }`}
            >
              A La Carte
            </button>
            <button 
              onClick={() => setCatalogMode('bundles')}
              className={`px-5 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-200 ${
                catalogMode === 'bundles' ? 'bg-pink text-white font-semibold shadow-sm' : 'text-graphite hover:text-pink font-medium'
              }`}
            >
              Signature Suites (Bundles)
            </button>
          </div>
        </div>

        {/* A LA CARTE */}
        {catalogMode === 'alacarte' && (
          <div className="space-y-12 animate-fadeIn">
            {/* Filter Tabs */}
            <div className="flex items-center space-x-2 sm:space-x-4 border-b border-[#3B1D5C] pb-4 overflow-x-auto no-scrollbar font-mono text-xs tracking-wider uppercase">
              <button 
                onClick={() => setActiveCategory('hair')} 
                className={`category-btn px-4 py-2 rounded-lg transition-all ${
                  activeCategory === 'hair' ? 'text-pink border-b-2 border-pink font-semibold bg-pink/10' : 'text-graphite hover:text-white'
                }`}
              >
                Hair Care (04)
              </button>
              <button 
                onClick={() => setActiveCategory('beard')} 
                className={`category-btn px-4 py-2 rounded-lg transition-all ${
                  activeCategory === 'beard' ? 'text-pink border-b-2 border-pink font-semibold bg-pink/10' : 'text-graphite hover:text-white'
                }`}
              >
                Beard & Shave (03)
              </button>
              <button 
                onClick={() => setActiveCategory('recovery')} 
                className={`category-btn px-4 py-2 rounded-lg transition-all ${
                  activeCategory === 'recovery' ? 'text-pink border-b-2 border-pink font-semibold bg-pink/10' : 'text-graphite hover:text-white'
                }`}
              >
                Massage & Recovery (03)
              </button>
            </div>

            {/* Editorial Menu Format */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {SERVICES_DATA[activeCategory].map((service, index) => (
                <div key={service.id} className="border-b border-[#3B1D5C] pb-8 pt-2 group transition-all duration-200">
                  <div className="flex justify-between items-baseline mb-2">
                    <div className="flex items-center space-x-3">
                      <span className="font-mono text-xs text-pink font-semibold">0{index + 1}</span>
                      <h3 className="font-serif text-2xl font-normal text-white group-hover:text-pink transition-colors">
                        {service.name}
                      </h3>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="font-mono text-xs text-graphite bg-[#160B24] px-2.5 py-0.5 rounded-full border border-[#3B1D5C]">{service.duration}</span>
                      <span className="font-mono text-xl font-bold text-pink tracking-tight">${service.price}</span>
                    </div>
                  </div>

                  <p className="text-graphite text-xs sm:text-sm leading-relaxed mb-4 pl-7">
                    {service.description}
                  </p>

                  <div className="pl-7 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center space-x-2 text-[11px] font-mono text-graphite/80">
                      <span className="text-pink">&bull;</span>
                      <span>Includes: {service.inclusions.join(' &bull; ')}</span>
                    </div>
                    <button 
                      onClick={() => onSelectService({
                        name: service.name,
                        price: service.price,
                        duration: service.duration,
                        category: service.category.toUpperCase()
                      })}
                      className="px-4 py-1.5 rounded-full border border-pink/40 hover:border-pink hover:bg-pink hover:text-white font-mono text-[11px] uppercase tracking-wider font-medium text-pink transition-all duration-200 flex items-center space-x-1.5"
                    >
                      <span>Select Service</span>
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SIGNATURE SUITES (BUNDLES) */}
        {catalogMode === 'bundles' && (
          <div className="space-y-8 animate-fadeIn" id="packages">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {SIGNATURE_SUITES.map((suite, idx) => (
                <div 
                  key={suite.id}
                  className={`bg-[#160B24] rounded-2xl p-8 relative flex flex-col justify-between group transition-all duration-300 ${
                    suite.isFlagship ? 'border-2 border-pink shadow-xl shadow-pink/15' : 'border border-[#3B1D5C] hover:border-pink/60 shadow-sm'
                  }`}
                >
                  <div className="absolute top-0 right-8 transform -translate-y-1/2">
                    <span className={`text-white text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full shadow ${
                      suite.isFlagship ? 'bg-pink font-bold' : 'bg-[#200F35] border border-[#3B1D5C]'
                    }`}>
                      {suite.tag}
                    </span>
                  </div>

                  <div>
                    <div className="flex justify-between items-baseline mb-4">
                      <span className="font-mono text-xs tracking-widest uppercase text-graphite">Suite 0{idx + 1} &bull; {suite.duration}</span>
                      <span className="font-mono text-2xl font-bold text-pink">${suite.price}</span>
                    </div>
                    <h3 className="font-serif text-3xl font-normal text-white group-hover:text-pink transition-colors mb-3">
                      {suite.name}
                    </h3>
                    <p className="text-graphite text-xs sm:text-sm leading-relaxed mb-6">
                      {suite.description}
                    </p>

                    <div className="border-t border-[#3B1D5C] pt-4 mb-6 space-y-3 font-mono text-xs text-graphite">
                      {suite.inclusions.map((inc, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <Check className="w-3.5 h-3.5 text-pink" />
                          <span>{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button 
                    onClick={() => onSelectService({
                      name: suite.name,
                      price: suite.price,
                      duration: suite.duration,
                      category: 'SIGNATURE SUITE'
                    })}
                    className={`w-full py-3.5 rounded-xl font-mono text-xs tracking-widest uppercase font-semibold flex items-center justify-center space-x-2 transition-all duration-200 ${
                      suite.isFlagship 
                        ? 'bg-pink text-white hover:bg-pink-dark shadow-lg shadow-pink/30' 
                        : 'border border-pink/50 text-white hover:bg-pink hover:border-pink'
                    }`}
                  >
                    <span>Select Suite</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

