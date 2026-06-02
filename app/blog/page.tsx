import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog | AT Gestão de Negócios e Contabilidade',
  description:
    'Artigos especializados em contabilidade, reforma tributária, planejamento tributário e gestão financeira para empresas em Cariacica e região. AT Gestão.',
  keywords: [
    'blog contabilidade',
    'reforma tributária',
    'planejamento tributário',
    'gestão financeira empresas',
    'contabilidade Cariacica',
    'AT Gestão',
  ],
  alternates: { canonical: 'https://atgnc.com.br/blog' },
  openGraph: {
    type: 'website',
    url: 'https://atgnc.com.br/blog',
    title: 'Blog | AT Gestão de Negócios e Contabilidade',
    description: 'Artigos especializados em contabilidade, reforma tributária e gestão financeira para empresas.',
    siteName: 'AT Gestão de Negócios e Contabilidade',
    locale: 'pt_BR',
  },
};

const POSTS = [
  {
    slug: 'reforma-tributaria-o-que-muda-para-sua-empresa',
    categoria: 'Reforma Tributária',
    titulo: 'Reforma Tributária: O que muda para a sua empresa em 2026?',
    resumo: 'A maior reforma do sistema fiscal brasileiro em décadas está em marcha. Entenda o IVA dual, CBS, IBS, Imposto Seletivo e como planejar a transição para proteger a rentabilidade da sua empresa.',
    data: '10 Mai 2026',
  },
  {
    slug: 'como-escolher-o-regime-tributario-ideal',
    categoria: 'Contabilidade',
    titulo: 'Como escolher o regime tributário ideal para o seu negócio',
    resumo: 'Simples Nacional, Lucro Presumido ou Lucro Real? A escolha errada pode custar milhares de reais por ano. Entenda os critérios, veja exemplos práticos e descubra qual regime é realmente mais vantajoso para o seu negócio.',
    data: '25 Abr 2026',
  },
  {
    slug: 'planejamento-financeiro-para-pequenas-empresas',
    categoria: 'Consultoria',
    titulo: 'Planejamento financeiro para pequenas empresas: por onde começar',
    resumo: 'A maioria dos pequenos negócios não fecha por falta de clientes — fecha por falta de gestão financeira. Um guia prático com fluxo de caixa, DRE, capital de giro e os indicadores essenciais para MEIs, MEs e EPPs crescerem com solidez.',
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
