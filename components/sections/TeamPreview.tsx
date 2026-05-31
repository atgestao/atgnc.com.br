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

const CARD_STYLE: React.CSSProperties = {
  background: 'rgba(255,255,255,0.06)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderTop: '2px solid rgba(201,168,76,0.6)',
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
          />
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-6 max-w-3xl mx-auto"
        >
          {EQUIPE.map((membro) => (
            <motion.div
              key={membro.nome}
              variants={fadeInUp}
              style={CARD_STYLE}
              className="flex flex-col sm:flex-row gap-8 p-8 sm:p-10"
            >
              {/* Photo */}
              <div className="shrink-0">
                <div className="w-24 h-24 rounded-full border-2 border-[var(--gold)] overflow-hidden">
                  <img
                    src={`/images/${membro.iniciais === 'AG' ? 'andrea-goncalves' : 'tiago-cardoso'}.jpg`}
                    alt={membro.nome}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3
                  className="font-cormorant font-semibold text-white mb-1 leading-tight"
                  style={{ fontSize: 'clamp(22px, 2vw, 28px)' }}
                >
                  {membro.nome}
                </h3>
                <p className="text-[var(--gold)] text-xs tracking-[0.2em] uppercase mb-4">
                  {membro.cargo}
                </p>

                <div className="mb-6">
                  <div className="w-6 h-px bg-[var(--gold)] mb-3" />
                  <p className="text-white/50 text-sm leading-loose">
                    {membro.especialidades.join(' · ')}
                  </p>
                </div>

                {/* Social links */}
                <div className="flex flex-wrap items-center gap-3">
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
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
