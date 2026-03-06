import React from 'react';
import { motion } from 'framer-motion';
import product from '../data/product';

const LegalBasis = () => {
  return (
    <section id="base-legal" className="py-24 px-6 bg-bg-dark relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-white text-section mb-4">Base Legal Sólida</h2>
          <p className="font-body text-muted max-w-2xl mx-auto">
            A restituição está fundamentada na legislação federal e em normas da própria Receita Federal.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {product.baseLegal.map((base, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12 }}
              className="bg-bg-card p-8 rounded-2xl border-t-2 border-gold"
            >
              <div className="font-body text-gold-light text-xs mb-2 uppercase tracking-widest">{base.norma}</div>
              <h3 className="font-display text-gold text-xl mb-4 italic">{base.artigo}</h3>
              <p className="font-body text-muted text-sm leading-relaxed">{base.descricao}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegalBasis;
