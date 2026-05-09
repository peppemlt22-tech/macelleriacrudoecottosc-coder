/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&q=80&w=2000" // Butcher shop background
          alt="Premium Meat Cuts"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/30 text-white/80 text-xs font-semibold tracking-[0.2em] uppercase mb-6 backdrop-blur-sm">
            Dal 2025 • San Cataldo
          </span>
          <h1 className="text-5xl md:text-8xl font-serif text-white mb-6 leading-[1.1] tracking-tight">
            L'Arte del <span className="italic">Gusto</span>,<br />
            la Tradizione della <span className="text-secondary">Qualità</span>.
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Dalla passione per l'allevamento alla tua tavola. Scopri le migliori carni nostrane e i nostri preparati gourmet lavorati ogni giorno con maestria.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#products"
              className="w-full sm:w-auto px-10 py-5 bg-primary text-white font-bold rounded-full hover:bg-red-800 transition-all flex items-center justify-center group shadow-2xl shadow-primary/20"
            >
              Scopri i nostri prodotti
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-10 py-5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full backdrop-blur-md border border-white/30 transition-all"
            >
              Richiedi un preventivo
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
}
