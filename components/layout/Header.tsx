'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
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

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#1A2B4A',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'auto',
          }}
        >
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <img
              src="/images/at-gestao-white.svg"
              alt="AT Gestão"
              width="110"
              height="32"
              style={{ maxWidth: 'none' }}
            />
            <button
              onClick={onClose}
              style={{ color: 'rgba(255,255,255,0.7)', background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}
              aria-label="Fechar menu"
            >
              <X size={24} color="white" />
            </button>
          </div>

          {/* Nav links */}
          <nav
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '32px', flex: 1, padding: '24px' }}
            aria-label="Menu mobile"
          >
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontSize: 'clamp(28px, 7vw, 38px)',
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.9)',
                  textDecoration: 'none',
                  letterSpacing: '0.02em',
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div style={{ padding: '24px 32px 40px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <a
              href={WA.andrea(MSG.geral)}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'center',
                padding: '16px',
                backgroundColor: '#C9A84C',
                color: '#1A2B4A',
                fontFamily: 'var(--font-jost), system-ui, sans-serif',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.21em',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              Fale Conosco
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[var(--navy)] shadow-lg' : 'bg-transparent'
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
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
