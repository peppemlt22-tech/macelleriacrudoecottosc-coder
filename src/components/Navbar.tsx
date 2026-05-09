/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Chi Siamo', href: '/#history', type: 'hash' },
    { name: 'Prodotti', href: '/#products', type: 'hash' },
    { name: 'Blog', href: '/blog', type: 'link' },
    { name: 'Contatti', href: '/#contact', type: 'hash' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="font-serif text-2xl font-bold text-primary tracking-tight">
              Macelleria <span className="text-accent underline decoration-primary/30">Crudo e Cotto</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.type === 'hash' ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-primary transition-colors uppercase tracking-widest"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-primary transition-colors uppercase tracking-widest"
                >
                  {link.name}
                </Link>
              )
            ))}
            <a
              href="https://wa.me/390000000000" // Placeholder
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-red-800 transition-all shadow-lg hover:shadow-primary/20"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-gray-100 flex flex-col p-4 space-y-4 shadow-xl"
        >
          {navLinks.map((link) => (
             link.type === 'hash' ? (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-gray-800 hover:text-primary px-4 py-2"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-gray-800 hover:text-primary px-4 py-2"
              >
                {link.name}
              </Link>
            )
          ))}
          <a
            href="https://wa.me/390000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-xl"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Ordina su WhatsApp
          </a>
        </motion.div>
      )}
    </nav>
  );
}
