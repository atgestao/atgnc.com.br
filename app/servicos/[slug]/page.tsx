import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICOS } from '@/lib/data/empresa';
import { CTABanner } from '@/components/sections/CTABanner';
import { WA } from '@/lib/whatsapp';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return SERVICOS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const servico = SERVICOS.find((s) => s.slug === slug);
  if (!servico) return {};
  return {
    title: servico.titulo,
    description: servico.descricao,
  };
}

export default async function ServicoPage({ params }: Props) {
  const { slug } = await params;
  const servico = SERVICOS.find((s) => s.slug === slug);
  if (!servico) notFound();

  const msgMap: Record<string, string> = {
    'contabilidade': 'Olá! Gostaria de informações sobre os serviços de contabilidade.',
    'prestacao-de-contas': 'Olá! Gostaria de informações sobre prestação de contas.',
    'reforma-tributaria': 'Olá! Gostaria de uma análise de impacto da Reforma Tributária para minha empresa.',
    'consultoria-empresarial': 'Olá! Gostaria de saber mais sobre a consultoria empresarial.',
    'empreendedorismo': 'Olá! Tenho interesse em abrir uma empresa e gostaria de orientação.',
    'capacitacao-de-equipe': 'Olá! Gostaria de informações sobre capacitação de equipe.',
  };

  return (
    <>
      <section className="pt-40 pb-24 bg-[var(--navy)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="eyebrow mb-4">Serviços · {servico.numero}</p>
          <div className="gold-line mb-6" />
          <h1 className="font-cormorant font-light text-white leading-tight max-w-3xl"
            style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}>
            {servico.titulo}
          </h1>
        </div>
      </section>

      <section className="py-24 bg-[var(--cream)]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-[var(--ink-muted)] text-[var(--text-md)] leading-relaxed mb-10">
            {servico.descricao}
          </p>
          <a
            href={WA.andrea(msgMap[servico.slug])}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--gold)] text-[var(--navy)] text-xs font-medium tracking-[0.21em] uppercase hover:bg-[var(--gold-light)] transition-colors duration-200"
          >
            Solicitar Este Serviço
          </a>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
