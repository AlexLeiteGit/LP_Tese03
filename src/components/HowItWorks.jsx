import React from 'react';
import { motion } from 'framer-motion';
import product from '../data/product';

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-24 px-6 bg-bg relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-white text-section mb-4">Sua Restituição em 4 Passos</h2>
          <p className="font-body text-muted max-w-2xl mx-auto">
            Nosso processo é 100% digital, seguro e focado na agilidade para que você receba seus valores o quanto antes.
          </p>
        </motion.div>

        <div className="relative flex flex-col md:flex-row justify-between items-start gap-12 md:gap-6">
          {/* Desktop Connecting Line */}
          <div className="hidden md:block absolute top-[24px] left-[5%] right-[5%] border-t-2 border-dashed border-gold/20 -z-0" />

          {product.passos.map((passo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12 }}
              className="relative z-10 flex flex-col items-center text-center flex-1"
            >
              <div className="w-12 h-12 rounded-full bg-bg border-2 border-gold flex items-center justify-center font-display text-gold mb-6 shadow-[0_0_20px_rgba(201,168,76,0.2)]">
                {passo.numero}
              </div>
              <h3 className="font-display text-white text-lg mb-3">{passo.titulo}</h3>
              <p className="font-body text-muted text-xs leading-relaxed">{passo.descricao}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
