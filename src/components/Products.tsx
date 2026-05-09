/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

const products = [
  {
    name: 'Bovino Locale',
    tag: 'Selezione Premium',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=600',
    description: 'Tagli pregiati da allevamenti locali, frollatura accurata.'
  },
  {
    name: 'Gourmet "Pronti a Cuocere"',
    tag: 'Novità del Giorno',
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&q=80&w=600',
    description: 'Involtini, spiedini e preparati lavorati artigianalmente.'
  },
  {
    name: 'Hamburger Artigianali',
    tag: 'I Nostri Classici',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80&w=600',
    description: 'Carne di prima scelta, speziatura segreta, gusto inimitabile.'
  },
  {
    name: 'Specialità Ovino e Suino',
    tag: 'Sapore Autentico',
    image: 'https://images.unsplash.com/photo-1542444459-bb3d9401d3bd?auto=format&fit=crop&q=80&w=600',
    description: 'Prodotti tipici del territorio san cataldese.'
  }
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm bg-primary px-3 py-1 rounded">Vetrina Prodotti</span>
            <h2 className="text-4xl md:text-5xl font-serif text-accent mt-6">
              Dall'allevamento al <span className="italic">bancone</span>.
            </h2>
            <p className="text-gray-500 mt-4 text-lg">
              Scegliamo i migliori tagli dalle nostre terre. Ogni giorno una selezione di preparati freschi pronti per essere gustati.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-gray-100 shadow-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 p-8 z-20">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] text-white font-bold uppercase tracking-wider mb-2">
                    {product.tag}
                  </span>
                  <h3 className="text-2xl font-serif text-white">{product.name}</h3>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/90 flex flex-col justify-center p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-30">
                  <h3 className="text-2xl font-serif text-white mb-4">{product.name}</h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-6">
                    {product.description}
                  </p>
                  <button className="text-white font-bold text-sm underline underline-offset-8">
                    Chiedi disponibilità
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block p-1 bg-gray-100 rounded-full">
            <div className="bg-white px-8 py-4 rounded-full flex flex-col md:flex-row items-center gap-4">
              <span className="text-accent font-bold">Vuoi un taglio specifico?</span>
              <span className="text-gray-400 hidden md:block">|</span>
              <span className="text-primary font-medium italic">Selvaggina disponibile su richiesta</span>
              <a href="#contact" className="text-primary font-bold hover:underline">Contattaci →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
