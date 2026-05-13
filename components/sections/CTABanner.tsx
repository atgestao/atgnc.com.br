'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeInUp, stagger } from '@/lib/animations';
import { WA, MSG } from '@/lib/whatsapp';
import { EMPRESA } from '@/lib/data/empresa';

export function CTABanner() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)',
      }}
    >
      {/* Geo grid */}
      <div className="absolute inset-0 geo-grid opacity-30" aria-hidden="true" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p variants={fadeInUp} className="eyebrow mb-6">
            Pronto para começar?
          </motion.p>

          <motion.div variants={fadeInUp} className="flex justify-center mb-6">
            <div className="gold-line" />
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="font-cormorant font-light text-white leading-tight mb-6"
            style={{ fontSize: 'clamp(32px, 5vw, 48px)' }}
          >
            Sua empresa merece um parceiro{' '}
            <em className="text-[var(--gold)] not-italic">de confiança.</em>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-white/70 text-sm leading-relaxed mb-10 max-w-xl mx-auto"
          >
            Entre em contato agora e descubra como a AT Gestão pode transformar
            a saúde financeira do seu negócio.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center">
            <a
              href={WA.andrea(MSG.geral)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 bg-[var(--gold)] text-[var(--navy)] text-xs font-medium tracking-[0.21em] uppercase hover:bg-[var(--gold-light)] transition-colors duration-200"
            >
              Falar pelo WhatsApp
              <ArrowRight size={16} />
            </a>
            <a
              href="/contato"
              className="inline-flex items-center gap-2 px-10 py-4 border border-white/30 text-white text-xs font-medium tracking-[0.21em] uppercase hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-200"
            >
              Enviar Mensagem
            </a>
          </motion.div>

          <motion.p variants={fadeInUp} className="text-white/40 text-xs mt-8 tracking-wide">
            Atendimento: {EMPRESA.horario} · {EMPRESA.endereco.cidade}, {EMPRESA.endereco.estado}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
