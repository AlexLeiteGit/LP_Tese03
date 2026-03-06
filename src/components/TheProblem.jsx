import React from 'react';
import { motion } from 'framer-motion';
import product from '../data/product';

const TheProblem = () => {
  return (
    <section id="o-problema" className="py-24 px-6 bg-bg-dark relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-white text-section mb-4">O Problema Invisível</h2>
          <p className="font-body text-muted max-w-2xl mx-auto">
            Muitos médicos pagam INSS em duplicidade por anos sem nunca perceber. Entenda como o sistema acaba retendo seu dinheiro ilegalmente.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {product.dores.map((dor, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12 }}
              className="bg-bg-card p-8 rounded-2xl border-t-2 border-gold flex gap-6"
            >
              <span className="text-4xl">{dor.emoji}</span>
              <div>
                <h3 className="font-display text-white text-xl mb-3">{dor.titulo}</h3>
                <p className="font-body text-muted text-sm leading-relaxed">{dor.texto}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheProblem;
