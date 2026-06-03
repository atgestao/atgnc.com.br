import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, FileCheck, Scale, TrendingUp, Rocket, Users } from 'lucide-react';
import { SERVICOS } from '@/lib/data/empresa';
import { CTABanner } from '@/components/sections/CTABanner';

export const metadata: Metadata = {
  title: 'Serviços | AT Gestão',
  description:
    'Contabilidade, planejamento tributário, reforma tributária, consultoria empresarial e capacitação de equipes para empresas em Cariacica e Grande Vitória, ES. Conheça todos os serviços da AT Gestão.',
  keywords: [
    'serviços contabilidade Cariacica',
    'planejamento tributário ES',
    'reforma tributária consultoria',
    'abertura de empresa Cariacica',
    'capacitação financeira empresas',
    'consultoria empresarial Espírito Santo',
  ],
  alternates: { canonical: 'https://atgnc.com.br/servicos' },
  openGraph: {
    title: 'Serviços | AT Gestão de Negócios e Contabilidade',
    description: 'Contabilidade, planejamento tributário, reforma tributária e consultoria empresarial em Cariacica, ES.',
    url: 'https://atgnc.com.br/servicos',
    images: [{ url: '/images/andrea-thiago.webp', width: 1400, height: 788, alt: 'AT Gestão — Serviços de Contabilidade' }],
  },
};

const ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  BookOpen, FileCheck, Scale, TrendingUp, Rocket, Users,
};

export default function ServicosPage() {
  return (
    <>
      <section className="pt-40 pb-24 bg-[var(--navy)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="eyebrow mb-4">O que fazemos</p>
          <div className="gold-line mb-6" />
          <h1 className="font-cormorant font-light text-white leading-tight max-w-3xl"
            style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}>
            Soluções completas para{' '}
            <em className="text-[var(--gold)] not-italic">cada etapa do seu negócio</em>
          </h1>
        </div>
      </section>

      <section className="py-24 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICOS.map((servico) => {
              const Icon = ICONS[servico.icone] ?? BookOpen;
              return (
                <Link
                  key={servico.slug}
                  href={`/servicos/${servico.slug}`}
                  className="group bg-white p-8 border border-[var(--border)] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 block"
                  style={{ borderTop: '3px solid var(--gold)' }}
                >
                  <span className="font-cormorant font-light text-[var(--gold)]/20 leading-none mb-4 block" style={{ fontSize: '60px' }}>
                    {servico.numero}
                  </span>
                  <Icon size={28} className="text-[var(--navy)] mb-4" />
                  <h2 className="font-cormorant text-[var(--text-xl)] font-semibold text-[var(--navy)] mb-3 leading-tight">
                    {servico.titulo}
                  </h2>
                  <p className="text-[var(--ink-muted)] text-sm leading-relaxed mb-6">{servico.descricao}</p>
                  <span className="inline-flex items-center gap-2 text-[var(--gold)] text-xs font-medium tracking-[0.15em] uppercase group-hover:gap-3 transition-all duration-200">
                    Saiba mais <ArrowRight size={14} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
