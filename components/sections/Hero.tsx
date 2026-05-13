'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeInUp, stagger } from '@/lib/animations';
import { WA, MSG } from '@/lib/whatsapp';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--navy)]">
      {/* Geometric grid */}
      <div className="absolute inset-0 geo-grid" aria-hidden="true" />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(26,43,74,0.98) 0%, rgba(45,74,122,0.85) 100%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          <motion.p variants={fadeInUp} className="eyebrow mb-8">
            Escritório de Contabilidade &amp; Consultoria · Cariacica, ES
          </motion.p>

          {/* Gold line */}
          <motion.div variants={fadeInUp} className="mb-8">
            <div className="gold-line" />
          </motion.div>

          {/* Main title */}
          <motion.h1
            variants={fadeInUp}
            className="font-cormorant font-light text-white leading-tight mb-8"
            style={{ fontSize: 'clamp(42px, 7vw, 69px)' }}
          >
            Sua empresa com as contas{' '}
            <em className="text-[var(--gold)] not-italic whitespace-nowrap">em dia.</em>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-white/70 text-[var(--text-md)] leading-relaxed max-w-2xl mb-10"
          >
            Contabilidade especializada, consultoria empresarial e capacitação
            de equipes para o crescimento sustentável do seu negócio em Cariacica
            e região.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
            <a
              href={WA.andrea(MSG.geral)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--gold)] text-[var(--navy)] text-xs font-medium tracking-[0.21em] uppercase hover:bg-[var(--gold-light)] transition-colors duration-200"
            >
              Falar pelo WhatsApp
              <ArrowRight size={16} />
            </a>
            <a
              href="/servicos"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/40 text-white text-xs font-medium tracking-[0.21em] uppercase hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-200"
            >
              Ver Serviços
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--cream))' }}
        aria-hidden="true"
      />
    </section>
  );
}
