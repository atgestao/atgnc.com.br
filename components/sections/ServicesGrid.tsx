'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  BookOpen,
  FileCheck,
  Scale,
  TrendingUp,
  Rocket,
  Users,
  ArrowRight,
} from 'lucide-react';
import { SERVICOS } from '@/lib/data/empresa';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { fadeInUp, stagger } from '@/lib/animations';

const ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  BookOpen,
  FileCheck,
  Scale,
  TrendingUp,
  Rocket,
  Users,
};

export function ServicesGrid() {
  return (
    <section className="py-28 bg-[var(--cream)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20">
          <SectionHeader
            eyebrow="O que fazemos"
            title="Soluções completas para"
            titleAccent="seu negócio"
            description="Da abertura da empresa ao crescimento sustentável — oferecemos suporte especializado em todas as etapas da jornada empresarial."
          />
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)]"
        >
          {SERVICOS.map((servico) => {
            const Icon = ICONS[servico.icone] ?? BookOpen;
            return (
              <motion.div
                key={servico.slug}
                variants={fadeInUp}
                className="group bg-[var(--cream)] p-10 hover:bg-white transition-colors duration-300 relative overflow-hidden"
              >
                {/* Decorative number */}
                <span
                  className="absolute top-6 right-8 font-cormorant font-light text-[var(--gold)]/10 leading-none select-none"
                  style={{ fontSize: '80px' }}
                  aria-hidden="true"
                >
                  {servico.numero}
                </span>

                <div className="relative">
                  <div className="w-10 h-px bg-[var(--gold)] mb-8" />

                  <Icon size={26} className="text-[var(--navy)] mb-6" />

                  <h3
                    className="font-cormorant font-semibold text-[var(--navy)] mb-4 leading-tight"
                    style={{ fontSize: 'clamp(22px, 2vw, 26px)' }}
                  >
                    {servico.titulo}
                  </h3>

                  <p className="text-[var(--ink-muted)] text-sm leading-relaxed mb-8">
                    {servico.descricao}
                  </p>

                  <Link
                    href={`/servicos/${servico.slug}`}
                    className="inline-flex items-center gap-2 text-[var(--gold)] text-xs font-medium tracking-[0.18em] uppercase group-hover:gap-3 transition-all duration-200"
                  >
                    Saiba mais
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
