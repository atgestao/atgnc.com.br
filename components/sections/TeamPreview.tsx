'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Instagram } from 'lucide-react';
import { EQUIPE } from '@/lib/data/empresa';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { WA } from '@/lib/whatsapp';
import { fadeInUp, stagger } from '@/lib/animations';

export function TeamPreview() {
  return (
    <section className="py-28 bg-[var(--navy)]">
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
          className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto"
        >
          {EQUIPE.map((membro) => (
            <motion.div
              key={membro.nome}
              variants={fadeInUp}
              className="bg-white p-10"
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
                className="font-cormorant font-semibold text-[var(--navy)] mb-1 leading-tight"
                style={{ fontSize: 'clamp(22px, 2vw, 28px)' }}
              >
                {membro.nome}
              </h3>
              <p className="text-[var(--gold)] text-xs tracking-[0.2em] uppercase mb-5">
                {membro.cargo}
              </p>

              {/* Especialidades sem quadrado */}
              <div className="mb-8">
                <div className="w-6 h-px bg-[var(--gold)] mb-4" />
                <p className="text-[var(--ink-muted)] text-sm leading-loose">
                  {membro.especialidades.join(' · ')}
                </p>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-3">
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
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-[var(--border)] text-[var(--ink-muted)] text-xs font-medium tracking-[0.15em] uppercase hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-200"
                >
                  <Instagram size={13} />
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
