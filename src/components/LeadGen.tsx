/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Facebook, Clock, MessageCircle } from 'lucide-react';

export default function LeadGen() {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm italic">Contatti</span>
            <h2 className="text-4xl md:text-5xl font-serif text-accent mt-4">
              Vieni a <span className="italic">trovarci</span> o scrivici per prenotare.
            </h2>
            <p className="text-gray-500 mt-6 text-lg">
              Siamo pronti ad accoglierti con il sorriso e la professionalità che ci distingue. Per ordini veloci o piatti pronti, usa WhatsApp!
            </p>

            <div className="mt-12 space-y-8">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="p-4 bg-secondary rounded-2xl text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Indirizzo</h4>
                  <p className="text-xl font-serif text-accent">Via Babbaurra 2, San Cataldo (CL)</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="p-4 bg-secondary rounded-2xl text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Giorni di Apertura</h4>
                  <p className="text-xl font-serif text-accent">Martedì — Sabato</p>
                  <p className="text-sm text-gray-400">Dom - Lun: Chiuso</p>
                </div>
              </div>

              <div className="flex gap-4 mt-12">
                <a 
                  href="https://facebook.com/macelleriacrudocotto" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-50 rounded-full text-[#1877F2] hover:bg-primary hover:text-white transition-all shadow-sm"
                  title="Seguici su Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a 
                  href="https://instagram.com/macelleriacrudocotto" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-50 rounded-full text-[#E4405F] hover:bg-primary hover:text-white transition-all shadow-sm"
                  title="Seguici su Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://wa.me/390000000000" className="flex items-center gap-2 px-6 py-4 bg-[#25D366] text-white rounded-full hover:shadow-lg transition-all font-bold">
                  <MessageCircle className="w-6 h-6" />
                  Chatta su WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-accent p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-3xl font-serif text-white mb-2">Richiedi Informazioni</h3>
              <p className="text-white/60 mb-8">Vuoi una box degustazione o un preventivo per il tuo evento?</p>
              
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Nome"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-white/50"
                  />
                  <input
                    type="text"
                    placeholder="Cellulare"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-white/50"
                  />
                </div>
                <select className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white/50 focus:outline-none focus:border-white/50 appearance-none">
                  <option className="bg-accent">Tipo di richiesta</option>
                  <option className="bg-accent">Ordine Carne</option>
                  <option className="bg-accent">Preventivo Catering/Horeca</option>
                  <option className="bg-accent">Info Box Degustazione</option>
                </select>
                <textarea
                  placeholder="Messaggio"
                  rows={4}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-white/50 resize-none"
                />
                <button className="w-full py-5 bg-primary text-white font-bold rounded-xl hover:bg-red-800 transition-all shadow-xl">
                  Invia Messaggio
                </button>
              </form>
            </div>

            {/* Visual accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
