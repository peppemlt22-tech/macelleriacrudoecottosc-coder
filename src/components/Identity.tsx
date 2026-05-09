/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ShieldCheck, Truck, Clock, Sparkles } from 'lucide-react';

const identityItems = [
  {
    icon: ShieldCheck,
    title: 'Qualità Certificata',
    description: 'Solo carni nostrane da filiera controllata e allevamenti partner locali.'
  },
  {
    icon: Sparkles,
    title: 'Innovazione Gourmet',
    description: 'Non solo i soliti tagli. Sperimentiamo ogni giorno con nuovi preparati artigianali.'
  },
  {
    icon: Clock,
    title: 'Freschezza Quotidiana',
    description: 'Il nostro laboratorio lavora a pieno ritmo per offrirti prodotti freschissimi, ogni giorno.'
  }
];

export default function Identity() {
  return (
    <section id="history" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <span className="text-primary font-bold tracking-widest uppercase text-sm italic">Chi Siamo</span>
              <h2 className="text-4xl md:text-5xl font-serif text-accent mt-4 leading-tight">
                Esperienza che nasce <br />dall'allevamento.
              </h2>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              La nostra storia ha radici profonde. Non siamo solo macellai: conosciamo ogni fase del processo, dalla cura dell'animale fino al bancone. Questa conoscenza tecnica ci permette di scegliere solo il meglio per i nostri compaesani.
            </p>
            <div className="space-y-6">
              {identityItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="p-3 bg-secondary rounded-xl text-primary">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-accent font-bold">{item.title}</h3>
                    <p className="text-gray-500 mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border-[12px] border-white">
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1000" // Butcher working or meat display
                alt="Macelleria Crudo e Cotto"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Artistic elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl z-0" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary/50 rounded-full blur-3xl z-0" />
            
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent text-white flex items-center justify-center rounded-full z-20 text-[10px] font-bold text-center p-4 border-4 border-white uppercase tracking-tighter"
            >
              Qualità Nostrana Certificata
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
