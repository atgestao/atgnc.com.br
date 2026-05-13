'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { EQUIPE } from '@/lib/data/empresa';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { WA } from '@/lib/whatsapp';
import { fadeInUp, stagger } from '@/lib/animations';

export function TeamPreview() {
  return (
    <section className="py-24 bg-[var(--navy)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
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
          className="grid md:grid-cols-2 gap-8 max-w-3xl"
        >
          {EQUIPE.map((membro) => (
            <motion.div
              key={membro.nome}
              variants={fadeInUp}
              className="bg-[var(--navy-light)] p-8 border border-white/10"
            >
              {/* Monogram */}
              <div className="w-16 h-16 rounded-full border-2 border-[var(--gold)] flex items-center justify-center mb-6">
                <span className="font-cormorant text-xl font-semibold text-[var(--gold)]">
                  {membro.iniciais}
                </span>
              </div>

              <h3 className="font-cormorant text-[var(--text-xl)] font-semibold text-white mb-1">
                {membro.nome}
              </h3>
              <p className="text-[var(--gold)] text-xs tracking-[0.21em] uppercase mb-6">
                {membro.cargo}
              </p>

              {/* Especialidades */}
              <div className="flex flex-wrap gap-2 mb-8">
                {membro.especialidades.map((esp) => (
                  <Badge key={esp} variant="outline-gold" className="text-[10px]">
                    {esp}
                  </Badge>
                ))}
              </div>

              <a
                href={WA[membro.iniciais === 'AG' ? 'andrea' : 'tiago']()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white text-xs font-medium tracking-[0.15em] uppercase hover:bg-[#128C7E] transition-colors duration-200"
              >
                <MessageCircle size={14} />
                WhatsApp
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
