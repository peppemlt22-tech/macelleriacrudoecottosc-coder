/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { blogPosts } from '../data/blogData';
import { motion } from 'motion/react';
import { ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm italic">Il Nostro Blog</span>
          <h2 className="text-4xl md:text-5xl font-serif text-accent mt-4">
            Cultura della <span className="italic">Carne</span> e Guide in Cucina
          </h2>
          <p className="text-gray-500 mt-6 text-lg max-w-2xl mx-auto">
            Consigli, ricette della tradizione e segreti tecnici dal nostro laboratorio direttamente alla tua tavola.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col h-full border border-gray-100"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-[10px] font-bold uppercase rounded-full shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-gray-400 text-xs mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                  <div className="flex items-center gap-1">
                    {post.date}
                  </div>
                </div>
                
                <h3 className="text-xl font-serif text-accent font-bold mb-4 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto">
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary font-bold text-sm tracking-tight hover:gap-2 transition-all"
                  >
                    Leggi l'articolo <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <Link to="/blog" className="px-8 py-4 border-2 border-accent text-accent font-bold rounded-full hover:bg-accent hover:text-white transition-all inline-block">
                Tutti gli articoli →
            </Link>
        </div>
      </div>
    </section>
  );
}
