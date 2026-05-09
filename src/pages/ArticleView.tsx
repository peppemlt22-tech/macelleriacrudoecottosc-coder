/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Clock, Calendar, User, Share2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { blogPosts } from '../data/blogData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ArticleView() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center font-sans">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">Articolo non trovato</h1>
          <Link to="/" className="text-primary underline">Torna alla Home</Link>
        </div>
      </div>
    );
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "author": {
      "@type": "Organization",
      "name": "Macelleria Crudo e Cotto"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Macelleria Crudo e Cotto",
      "logo": {
        "@type": "ImageObject",
        "url": "https://macelleriacrudocotto.it/logo.png"
      }
    },
    "datePublished": "2025-05-09"
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{post.title} | Macelleria Crudo e Cotto</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://macelleriacrudocotto.it/blog/${post.slug}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>
      <Navbar />
      
      <main className="pt-32 pb-24">
        <article className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link to="/" className="inline-flex items-center text-gray-400 hover:text-primary mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> Torna alla Home
            </Link>
            
            <span className="text-primary font-bold uppercase tracking-widest text-xs">{post.category}</span>
            <h1 className="text-4xl md:text-5xl font-serif text-accent mt-4 mb-8 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm mb-12 border-y border-gray-100 py-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" /> {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> {post.readTime} di lettura
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" /> Team Macelleria
              </div>
            </div>
          </motion.div>

          <div className="aspect-[21/9] rounded-[2rem] overflow-hidden mb-12 shadow-2xl">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="markdown-body">
            <ReactMarkdown
              components={{
                h1: ({node, ...props}) => <h1 className="text-3xl font-serif font-bold text-accent mt-12 mb-6" {...props} />,
                h2: ({node, ...props}) => <h2 className="text-2xl font-serif font-bold text-accent mt-12 mb-4" {...props} />,
                h3: ({node, ...props}) => <h3 className="text-xl font-serif font-bold text-accent mt-8 mb-4 border-l-4 border-primary pl-4" {...props} />,
                p: ({node, ...props}) => <p className="text-gray-600 leading-relaxed mb-6" {...props} />,
                ul: ({node, ...props}) => <ul className="list-disc list-inside mb-6 space-y-2 text-gray-600" {...props} />,
                li: ({node, ...props}) => <li className="ml-4" {...props} />,
                strong: ({node, ...props}) => <strong className="text-accent font-bold" {...props} />,
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-100 flex justify-between items-center">
            <div className="flex items-center gap-4">
               <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full hover:bg-primary hover:text-white transition-all text-sm font-bold">
                 <Share2 className="w-4 h-4" /> Condividi
               </button>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
