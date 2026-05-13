'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { WA, MSG } from '@/lib/whatsapp';

const NAV = [
  { label: 'Início', href: '/' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Equipe', href: '/equipe' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contato', href: '/contato' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--navy)] shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" aria-label="AT Gestão - Página inicial">
            <img
              src="/images/at-gestao-white.svg"
              alt="AT Gestão de Negócios e Contabilidade"
              width="138"
              height="40"
              style={{ maxWidth: 'none' }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link text-white/80 hover:text-[var(--gold)] transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={WA.andrea(MSG.geral)}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link px-5 py-2.5 border border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--navy)] transition-all duration-200"
            >
              Fale Conosco
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white p-2"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 right-0 w-80 bg-[var(--navy)] shadow-2xl md:hidden flex flex-col z-50"
          >
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <span className="font-cormorant text-xl text-white font-light">Menu</span>
              <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white" aria-label="Fechar menu">
                <X size={22} />
              </button>
            </div>

            <nav className="flex flex-col p-6 gap-6 flex-1" aria-label="Menu mobile">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="nav-link text-white/80 hover:text-[var(--gold)] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="p-6 border-t border-white/10">
              <a
                href={WA.andrea(MSG.geral)}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center nav-link py-3 border border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--navy)] transition-all duration-200"
              >
                Fale Conosco
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 md:hidden z-40"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>
    </header>
  );
}
