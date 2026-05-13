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
            className="fixed inset-0 bg-[var(--navy)] md:hidden flex flex-col z-50"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <img
                src="/images/at-gestao-white.svg"
                alt="AT Gestão"
                width="110"
                height="32"
                style={{ maxWidth: 'none' }}
              />
              <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white p-2" aria-label="Fechar menu">
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col items-center justify-center gap-8 flex-1" aria-label="Menu mobile">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-cormorant text-white/90 hover:text-[var(--gold)] transition-colors duration-200"
                  style={{ fontSize: 'clamp(26px, 6vw, 36px)', fontWeight: 300 }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="px-8 pb-10 border-t border-white/10 pt-6">
              <a
                href={WA.andrea(MSG.geral)}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center nav-link py-4 bg-[var(--gold)] text-[var(--navy)] font-semibold hover:bg-[var(--gold-light)] transition-all duration-200"
              >
                Fale Conosco
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
