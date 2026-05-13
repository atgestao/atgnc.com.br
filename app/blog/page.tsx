import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Artigos sobre contabilidade, reforma tributária, empreendedorismo e gestão empresarial. Conteúdo especializado da AT Gestão.',
};

const POSTS = [
  {
    slug: 'reforma-tributaria-o-que-muda-para-sua-empresa',
    categoria: 'Reforma Tributária',
    titulo: 'Reforma Tributária: O que muda para a sua empresa em 2025?',
    resumo: 'Entenda as principais mudanças do IVA dual, CBS e IBS e como se preparar para a transição do sistema tributário brasileiro.',
    data: '10 Mai 2026',
  },
  {
    slug: 'como-escolher-o-regime-tributario-ideal',
    categoria: 'Contabilidade',
    titulo: 'Como escolher o regime tributário ideal para o seu negócio',
    resumo: 'Simples Nacional, Lucro Presumido ou Lucro Real? Descubra qual regime tributário é mais vantajoso para a sua empresa.',
    data: '25 Abr 2026',
  },
  {
    slug: 'planejamento-financeiro-para-pequenas-empresas',
    categoria: 'Consultoria',
    titulo: 'Planejamento financeiro para pequenas empresas: por onde começar',
    resumo: 'Um guia prático para MEIs e MEs que querem organizar suas finanças e crescer de forma sustentável.',
    data: '08 Abr 2026',
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="pt-40 pb-24 bg-[var(--navy)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="eyebrow mb-4">Blog</p>
          <div className="gold-line mb-6" />
          <h1 className="font-cormorant font-light text-white leading-tight max-w-3xl"
            style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}>
            Conteúdo especializado para{' '}
            <em className="text-[var(--gold)] not-italic">empresários</em>
          </h1>
        </div>
      </section>

      <section className="py-24 bg-[var(--cream)]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="space-y-8">
            {POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white p-8 border border-[var(--border)] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[var(--gold)] text-xs tracking-[0.21em] uppercase font-medium">
                    {post.categoria}
                  </span>
                  <span className="text-[var(--border)]">·</span>
                  <span className="text-[var(--ink-muted)] text-xs">{post.data}</span>
                </div>
                <h2 className="font-cormorant text-[var(--text-2xl)] font-semibold text-[var(--navy)] mb-3 leading-tight group-hover:text-[var(--gold)] transition-colors">
                  {post.titulo}
                </h2>
                <p className="text-[var(--ink-muted)] text-sm leading-relaxed mb-6">{post.resumo}</p>
                <span className="inline-flex items-center gap-2 text-[var(--gold)] text-xs font-medium tracking-[0.15em] uppercase group-hover:gap-3 transition-all duration-200">
                  Ler artigo <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
