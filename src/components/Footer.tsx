/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="bg-accent py-16 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 border-b border-white/10 pb-16">
          <div className="col-span-2">
            <h2 className="font-serif text-3xl mb-6">Macelleria <br /><span className="text-primary italic">Crudo e Cotto</span></h2>
            <p className="text-white/50 max-w-sm mb-8">
              L'impegno quotidiano per portare sulla tavola dei nostri clienti la migliore carne nostrana, con l'innovazione dei preparati gourmet.
            </p>
            <div className="flex gap-4">
               {/* Social links placeholder */}
               <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                 <span className="text-xs font-bold">IG</span>
               </div>
               <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                 <span className="text-xs font-bold">FB</span>
               </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs opacity-50">Navigazione</h4>
            <ul className="space-y-4 text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#history" className="hover:text-white transition-colors">Chi Siamo</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Prodotti</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contatti</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs opacity-50">Marketing Automation</h4>
            <p className="text-white/70 mb-4 text-sm">
              Iscriviti per ricevere offerte esclusive e ricette stagionali.
            </p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="La tua email" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary transition-colors"
              />
              <button className="bg-primary text-white text-xs font-bold py-2 rounded-lg hover:bg-red-800 transition-colors">
                Iscriviti alla Newsletter
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-[10px] uppercase font-semibold tracking-widest">
          <p>© 2025 Macelleria Crudo e Cotto. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
            <a href="#">Design by AIS</a>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/2" />
    </footer>
  );
}
