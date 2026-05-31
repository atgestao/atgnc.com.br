'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { EQUIPE } from '@/lib/data/empresa';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { WA } from '@/lib/whatsapp';
import { fadeInUp, stagger } from '@/lib/animations';

const GRID_BG: React.CSSProperties = {
  backgroundImage: `
    linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
  `,
  backgroundSize: '48px 48px',
};

const CARD_BASE: React.CSSProperties = {
  background: 'rgba(255,255,255,0.06)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderTop: '2px solid rgba(201,168,76,0.6)',
  transition: 'border-color 0.3s, box-shadow 0.3s',
};


export function TeamPreview() {
  return (
    <section className="py-28 bg-[var(--navy)]" style={GRID_BG}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20">
          <SectionHeader
            eyebrow="Nossa Equipe"
            title="Contadores especializados"
            titleAccent="para o seu negócio"
            description="Dois profissionais dedicados, prontos para oferecer o suporte que sua empresa precisa."
            light
            centered
          />
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {EQUIPE.map((membro) => (
            <motion.div
              key={membro.nome}
              variants={fadeInUp}
              whileHover={{ y: -6, boxShadow: '0 24px 48px rgba(0,0,0,0.35)' }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              style={CARD_BASE}
              className="flex flex-col items-center text-center p-10 cursor-default"
            >
              {/* Photo */}
              <div className="w-24 h-24 rounded-full border-2 border-[var(--gold)] overflow-hidden mb-6">
                <img
                  src={`/images/${membro.iniciais === 'AG' ? 'andrea-goncalves' : 'tiago-cardoso'}.jpg`}
                  alt={membro.nome}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <h3
                className="font-cormorant font-semibold text-white mb-1 leading-tight text-center"
                style={{ fontSize: 'clamp(22px, 2vw, 28px)' }}
              >
                {membro.nome}
              </h3>
              <p className="text-[var(--gold)] text-xs tracking-[0.2em] uppercase mb-5 text-center">
                {membro.cargo}
              </p>

              <div className="mb-7 flex flex-col items-center w-full">
                <div className="w-6 h-px bg-[var(--gold)] mb-4" />
                <p className="text-white/50 text-sm leading-loose text-center">
                  {membro.especialidades.join(' · ')}
                </p>
              </div>

              {/* Social links */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href={WA[membro.iniciais === 'AG' ? 'andrea' : 'tiago']()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white text-xs font-medium tracking-[0.15em] uppercase hover:bg-[#128C7E] transition-colors duration-200"
                >
                  <MessageCircle size={13} />
                  WhatsApp
                </a>
                <a
                  href={membro.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/20 text-white/50 text-xs font-medium tracking-[0.15em] uppercase hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-200"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
                  Instagram
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
