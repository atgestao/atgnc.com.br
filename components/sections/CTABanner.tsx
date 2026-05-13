'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeInUp, stagger } from '@/lib/animations';
import { WA, MSG } from '@/lib/whatsapp';
import { EMPRESA } from '@/lib/data/empresa';

export function CTABanner() {
  return (
    <section
      className="py-32 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)',
      }}
    >
      <div className="absolute inset-0 geo-grid opacity-20" aria-hidden="true" />

      {/* Decorative monogram */}
      <div
        className="absolute right-[-5%] bottom-[-10%] font-cormorant font-light leading-none select-none pointer-events-none"
        style={{
          fontSize: 'clamp(200px, 30vw, 500px)',
          color: 'rgba(201,168,76,0.04)',
          letterSpacing: '-0.05em',
        }}
        aria-hidden="true"
      >
        AT
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p variants={fadeInUp} className="eyebrow mb-8">
            Pronto para começar?
          </motion.p>

          <motion.div variants={fadeInUp} className="flex justify-center mb-8">
            <div className="gold-line" />
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="font-cormorant font-light text-white mb-8"
            style={{ fontSize: 'clamp(40px, 6vw, 64px)', lineHeight: 1.1 }}
          >
            Sua empresa merece um parceiro{' '}
            <em className="text-[var(--gold)] not-italic whitespace-nowrap">de confiança.</em>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-white/60 leading-relaxed mb-12 max-w-xl mx-auto"
            style={{ fontSize: 'clamp(15px, 1.3vw, 17px)' }}
          >
            Entre em contato agora e descubra como a AT Gestão pode transformar
            a saúde financeira do seu negócio.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center">
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
              href="/contato"
              className="inline-flex items-center gap-3 px-10 py-4 border border-white/25 text-white text-xs font-medium tracking-[0.25em] uppercase hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-200"
            >
              Enviar Mensagem
            </a>
          </motion.div>

          <motion.p variants={fadeInUp} className="text-white/30 text-xs mt-10 tracking-widest uppercase">
            Atendimento: {EMPRESA.horario} · {EMPRESA.endereco.cidade}, {EMPRESA.endereco.estado}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
