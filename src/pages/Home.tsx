/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { MessageCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Identity from '../components/Identity';
import Products from '../components/Products';
import Blog from '../components/Blog';
import LeadGen from '../components/LeadGen';
import Footer from '../components/Footer';

export default function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ButcherShop",
    "name": "Macelleria Crudo e Cotto",
    "image": "https://macelleriacrudocotto.it/hero-meat.jpg",
    "@id": "https://macelleriacrudocotto.it",
    "url": "https://macelleriacrudocotto.it",
    "telephone": "+390000000000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via Babbaurra 2",
      "addressLocality": "San Cataldo",
      "postalCode": "93017",
      "addressRegion": "CL",
      "addressCountry": "IT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.486,
      "longitude": 13.987
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:30",
      "closes": "20:00"
    },
    "sameAs": [
      "https://facebook.com/macelleriacrudocotto",
      "https://instagram.com/macelleriacrudocotto"
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Macelleria Crudo e Cotto | Carne Locale e Preparati Gourmet San Cataldo</title>
        <meta name="description" content="La migliore macelleria a San Cataldo (CL). Carne nostrana certificata, hamburger artigianali e preparati gourmet. Qualità dall'allevamento alla tavola." />
        <link rel="canonical" href="https://macelleriacrudocotto.it/" />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Quality Banner */}
        <section className="bg-accent py-12 overflow-hidden border-y border-white/10">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center mx-8">
                <span className="text-white/30 text-4xl md:text-6xl font-serif italic mx-4">Qualità Nostrana</span>
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-white/30 text-4xl md:text-6xl font-serif italic mx-4">Innovazione Gourmet</span>
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-white/30 text-4xl md:text-6xl font-serif italic mx-4">Dal 2025</span>
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
            ))}
          </div>
        </section>

        <Identity />
        <Products />
        
        {/* Blog Section */}
        <Blog />
        
        {/* Dynamic CTA */}
        <section className="py-20 bg-primary overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="text-center md:text-left">
                <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
                  Sei un <span className="italic">ristoratore</span>? <br />
                  <span className="text-secondary">Lavoriamo insieme.</span>
                </h2>
                <p className="text-white/70 mt-6 text-lg max-w-xl">
                  Siamo alla ricerca di partner HORECA locali che vogliano distinguersi offrendo carni di eccellenza. Contattaci per un listino dedicato.
                </p>
              </div>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-12 py-6 bg-accent text-white font-bold rounded-full shadow-2xl hover:bg-gray-900 transition-all text-center"
              >
                Diventa nostro partner
              </motion.a>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        </section>

        <LeadGen />
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <motion.a
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        href="https://wa.me/390000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 p-4 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:shadow-[#25D366]/30 transition-all border-4 border-white"
        title="Chatta con noi"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute -top-2 -left-2 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
        </span>
      </motion.a>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
}
