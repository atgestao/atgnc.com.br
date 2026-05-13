import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CTABanner } from '@/components/sections/CTABanner';

type Props = { params: Promise<{ slug: string }> };

const POSTS: Record<string, { titulo: string; categoria: string; data: string; conteudo: string }> = {
  'reforma-tributaria-o-que-muda-para-sua-empresa': {
    titulo: 'Reforma Tributária: O que muda para a sua empresa em 2025?',
    categoria: 'Reforma Tributária',
    data: '10 Mai 2026',
    conteudo: `A reforma tributária aprovada em 2023 representa a maior mudança no sistema fiscal brasileiro em décadas. Com a substituição de cinco tributos (PIS, Cofins, IPI, ICMS e ISS) por um IVA dual — composto pelo CBS federal e IBS subnacional — as regras do jogo mudam significativamente para empresas de todos os portes.

O período de transição está programado para ocorrer entre 2026 e 2032, com implementação gradual. É fundamental que sua empresa comece o planejamento agora.

**O que muda na prática?**

O Imposto sobre Bens e Serviços (IBS) substituirá ICMS e ISS, enquanto a Contribuição sobre Bens e Serviços (CBS) unificará PIS e Cofins. Além disso, o Imposto Seletivo (IS) incidirá sobre produtos considerados prejudiciais à saúde ou ao meio ambiente.

**Como a AT Gestão pode ajudar?**

Nossa equipe está preparada para analisar o impacto específico na sua empresa e desenvolver estratégias de adaptação. Entre em contato para uma análise personalizada.`,
  },
};

export async function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS[slug];
  if (!post) return {};
  return { title: post.titulo, description: post.conteudo.slice(0, 160) };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = POSTS[slug];
  if (!post) notFound();

  return (
    <>
      <section className="pt-40 pb-16 bg-[var(--navy)]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/blog" className="text-white/50 text-xs hover:text-[var(--gold)] transition-colors">
              Blog
            </Link>
            <span className="text-white/30">·</span>
            <span className="text-[var(--gold)] text-xs tracking-[0.15em] uppercase">{post.categoria}</span>
          </div>
          <h1 className="font-cormorant font-light text-white leading-tight mb-4"
            style={{ fontSize: 'clamp(30px, 4vw, 48px)' }}>
            {post.titulo}
          </h1>
          <p className="text-white/40 text-xs">{post.data}</p>
        </div>
      </section>

      <section className="py-16 bg-[var(--cream)]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {post.conteudo.split('\n\n').map((para, i) => (
              <p key={i} className="text-[var(--ink-muted)] text-[var(--text-sm)] leading-relaxed mb-6">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
