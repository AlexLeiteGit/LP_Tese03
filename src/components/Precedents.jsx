import React from 'react';
import { motion } from 'framer-motion';
import product from '../data/product';

const Precedents = () => {
  return (
    <section id="precedentes" className="py-24 px-6 bg-bg-dark relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-white text-section mb-4">Jurisprudência & Casos Reais</h2>
          <p className="font-body text-muted max-w-2xl mx-auto">
            O direito à restituição é pacífico nos tribunais. Veja resultados reais obtidos com base nesta tese jurídica.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {product.casos.map((caso, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12 }}
              className="bg-bg-card p-8 rounded-2xl border-l-4 border-gold shadow-lg"
            >
              <div className="font-mono text-[10px] text-gold uppercase tracking-widest mb-4">Processo: {caso.processo}</div>
              <div className="font-body text-white/60 text-xs mb-2">{caso.tribunal}</div>
              <p className="font-body text-white text-sm leading-relaxed mb-6 italic opacity-80">"{caso.resumo}"</p>
              <div className="font-display text-white text-xl font-bold border-t border-white/5 pt-4">
                {caso.resultado || "Decisão Favorável"}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Precedents;
