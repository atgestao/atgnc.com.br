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
    <section className="py-24 bg-[var(--cream)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICOS.map((servico) => {
            const Icon = ICONS[servico.icone] ?? BookOpen;
            return (
              <motion.div
                key={servico.slug}
                variants={fadeInUp}
                className="group bg-white p-8 border border-[var(--border)] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-default"
                style={{ borderTop: '3px solid var(--gold)' }}
              >
                {/* Decorative number */}
                <span
                  className="font-cormorant font-light text-[var(--gold)]/20 leading-none mb-4 block"
                  style={{ fontSize: '60px' }}
                >
                  {servico.numero}
                </span>

                <Icon size={28} className="text-[var(--navy)] mb-4" />

                <h3 className="font-cormorant text-[var(--text-xl)] font-semibold text-[var(--navy)] mb-3 leading-tight">
                  {servico.titulo}
                </h3>

                <p className="text-[var(--ink-muted)] text-sm leading-relaxed mb-6">
                  {servico.descricao}
                </p>

                <Link
                  href={`/servicos/${servico.slug}`}
                  className="inline-flex items-center gap-2 text-[var(--gold)] text-xs font-medium tracking-[0.15em] uppercase group-hover:gap-3 transition-all duration-200"
                >
                  Saiba mais
                  <ArrowRight size={14} />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
