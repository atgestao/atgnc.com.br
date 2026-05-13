'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { WA, MSG } from '@/lib/whatsapp';

const NAV = [
  { label: 'Início', href: '/' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Equipe', href: '/equipe' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contato', href: '/contato' },
];

const MENU_STYLE: React.CSSProperties = {
  position: 'fixed',
  inset: 0,
  background: '#1A2B4A',
  backgroundColor: '#1A2B4A',
  zIndex: 9999,
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',
  minHeight: '-webkit-fill-available',
};

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: 'background-color 0.3s, box-shadow 0.3s',
          backgroundColor: scrolled ? '#1A2B4A' : 'transparent',
          boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.3)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" aria-label="AT Gestão - Página inicial">
              <img
                src="/images/at-gestao-white.svg"
                alt="AT Gestão de Negócios e Contabilidade"
                width="138"
                height="40"
                style={{ maxWidth: 'none' }}
              />
            </Link>

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

            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-white p-2"
              aria-label="Abrir menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu — sibling of header, outside any stacking context */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={MENU_STYLE}
          >
            {/* Top bar */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '20px 24px',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              flexShrink: 0,
            }}>
              <img
                src="/images/at-gestao-white.svg"
                alt="AT Gestão"
                width="110"
                height="32"
                style={{ maxWidth: 'none' }}
              />
              <button
                onClick={() => setOpen(false)}
                aria-label="Fechar menu"
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', color: 'white' }}
              >
                <X size={26} color="white" />
              </button>
            </div>

            {/* Nav links */}
            <nav
              aria-label="Menu mobile"
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '28px',
                padding: '24px',
              }}
            >
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: 'clamp(20px, 5vw, 28px)',
                    fontWeight: 200,
                    color: 'rgba(255,255,255,0.92)',
                    textDecoration: 'none',
                    letterSpacing: '0.02em',
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div style={{
              padding: '20px 28px 36px',
              borderTop: '1px solid rgba(255,255,255,0.1)',
              flexShrink: 0,
            }}>
              <a
                href={WA.andrea(MSG.geral)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                style={{
                  display: 'block',
                  textAlign: 'center',
                  padding: '16px',
                  backgroundColor: '#C9A84C',
                  color: '#1A2B4A',
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                }}
              >
                Fale Conosco
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
