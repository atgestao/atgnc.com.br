'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeInUp, stagger } from '@/lib/animations';
import { WA, MSG } from '@/lib/whatsapp';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--navy)]">
      {/* Background photo */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/andrea-thiago.webp"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Geometric grid */}
      <div className="absolute inset-0 geo-grid" aria-hidden="true" />

      {/* Gradient overlay — stronger on the left to keep text legible */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(105deg, rgba(26,43,74,0.97) 0%, rgba(26,43,74,0.92) 45%, rgba(26,43,74,0.50) 70%, rgba(26,43,74,0.20) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Decorative large monogram */}
      <div
        className="absolute right-[-2%] top-1/2 -translate-y-1/2 font-cormorant font-light leading-none select-none pointer-events-none"
        style={{
          fontSize: 'clamp(220px, 28vw, 420px)',
          color: 'rgba(201,168,76,0.05)',
          letterSpacing: '-0.05em',
        }}
        aria-hidden="true"
      >
        AT
      </div>

      {/* Vertical gold accent */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[2px]"
        style={{ background: 'linear-gradient(to bottom, transparent 0%, var(--gold) 40%, var(--gold) 60%, transparent 100%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-36 pb-28">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          <motion.p variants={fadeInUp} className="eyebrow mb-10">
            Escritório de Contabilidade &amp; Consultoria · Cariacica, ES
          </motion.p>

          <motion.div variants={fadeInUp} className="mb-10">
            <div className="gold-line" />
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="font-cormorant font-light text-white mb-10"
            style={{ fontSize: 'clamp(52px, 8vw, 88px)', lineHeight: 1.05 }}
          >
            Sua empresa com as contas{' '}
            <em className="text-[var(--gold)] not-italic whitespace-nowrap">em dia.</em>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-white/60 leading-relaxed max-w-2xl mb-14"
            style={{ fontSize: 'clamp(15px, 1.4vw, 18px)' }}
          >
            Contabilidade especializada, consultoria empresarial e capacitação
            de equipes para o crescimento sustentável do seu negócio em Cariacica
            e região.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
            <a
              href={WA.andrea(MSG.geral)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 bg-[var(--gold)] text-[var(--navy)] text-xs font-semibold tracking-[0.25em] uppercase hover:bg-[var(--gold-light)] transition-colors duration-200"
            >
              Falar pelo WhatsApp
              <ArrowRight size={14} />
            </a>
            <a
              href="/servicos"
              className="inline-flex items-center gap-3 px-10 py-4 border border-white/25 text-white text-xs font-medium tracking-[0.25em] uppercase hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-200"
            >
              Ver Serviços
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
