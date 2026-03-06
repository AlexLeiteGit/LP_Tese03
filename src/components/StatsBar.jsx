import React from 'react';
import product from '../data/product';

const StatsBar = () => {
  return (
    <div className="bg-[#182319] py-12 px-6 border-y border-gold/20 relative z-10 shadow-2xl">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {product.stats.map((stat, idx) => (
            <div 
              key={idx} 
              className={`text-center ${
                idx !== product.stats.length - 1 ? 'lg:border-r border-gold/20' : ''
              } py-2`}
            >
              <div className="font-display text-gold text-[clamp(2.5rem,5vw,4rem)] mb-2 leading-none">{stat.valor}</div>
              <div className="font-body text-white/60 text-[10px] sm:text-xs uppercase tracking-[0.3em] font-light">{stat.rotulo}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsBar;
