import React from 'react';
import product from '../data/product';

const StatsBar = () => {
  return (
    <div className="bg-gold py-10 px-6 border-y border-gold-light/20 relative z-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {product.stats.map((stat, idx) => (
            <div 
              key={idx} 
              className={`text-center ${
                idx !== product.stats.length - 1 ? 'lg:border-r border-bg/10' : ''
              }`}
            >
              <div className="font-display text-bg text-stat mb-1">{stat.valor}</div>
              <div className="font-body text-bg/60 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold">{stat.rotulo}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsBar;
