import React from 'react';
import { motion } from 'framer-motion';
import product from '../data/product';

const Requirements = () => {
  return (
    <section id="requisitos" className="py-24 px-6 bg-bg relative">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-gold text-section mb-6 tracking-wide">Quem tem direito?</h2>
          <p className="font-body text-muted">Verifique se você se enquadra nos critérios para a restituição.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Requirements */}
          <div>
            <h3 className="font-display text-gold text-xl mb-8 flex items-center gap-3">
               Públicos e Requisitos
            </h3>
            <ul className="space-y-4">
              {product.requisitos.map((req, idx) => (
                <li key={idx} className="flex items-start gap-4 p-5 border border-white/5 hover:border-gold/20 transition-colors duration-500 rounded-sm">
                  <div className="w-6 h-6 rounded-none border border-gold/40 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-body text-white text-sm leading-relaxed">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Documents */}
          <div>
            <h3 className="font-display text-gold text-xl mb-8 flex items-center gap-3">
              Documentos Necessários
            </h3>
            <ul className="space-y-4">
              {product.documentos.map((doc, idx) => (
                <li key={idx} className="flex items-start gap-4 p-5 border border-white/5 hover:border-gold/20 transition-colors duration-500 rounded-sm">
                  <span className="text-gold font-bold text-lg leading-none">—</span>
                  <span className="font-body text-white text-sm leading-relaxed">{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Requirements;
