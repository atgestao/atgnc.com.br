import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';
import { SERVICOS } from '@/lib/data/empresa';
import { getServicoConteudo } from '@/lib/data/servicos-conteudo';
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

const WA_MSG: Record<string, string> = {
  'contabilidade': 'Olá! Gostaria de informações sobre os serviços de contabilidade.',
  'prestacao-de-contas': 'Olá! Gostaria de informações sobre prestação de contas.',
  'reforma-tributaria': 'Olá! Gostaria de uma análise de impacto da Reforma Tributária para minha empresa.',
  'consultoria-empresarial': 'Olá! Gostaria de saber mais sobre a consultoria empresarial.',
  'empreendedorismo': 'Olá! Tenho interesse em abrir uma empresa e gostaria de orientação.',
  'capacitacao-de-equipe': 'Olá! Gostaria de informações sobre capacitação de equipe.',
};

export default async function ServicoPage({ params }: Props) {
  const { slug } = await params;
  const servico = SERVICOS.find((s) => s.slug === slug);
  if (!servico) notFound();

  const conteudo = getServicoConteudo(slug);
  const waUrl = WA.andrea(WA_MSG[slug] ?? `Olá! Gostaria de informações sobre ${servico.titulo}.`);

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-28 bg-[var(--navy)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <p className="eyebrow">Serviços</p>
            <span className="text-white/20 text-xs">·</span>
            <Link href="/servicos" className="eyebrow hover:text-[var(--gold)] transition-colors duration-200">
              Ver todos
            </Link>
          </div>
          <div className="gold-line mb-6" />
          <div className="max-w-3xl">
            <span
              className="font-cormorant font-light text-white/15 leading-none block mb-2 select-none"
              style={{ fontSize: 'clamp(80px, 12vw, 140px)' }}
              aria-hidden
            >
              {servico.numero}
            </span>
            <h1
              className="font-cormorant font-light text-white leading-tight -mt-4"
              style={{ fontSize: 'clamp(40px, 5vw, 68px)' }}
            >
              {servico.titulo}
            </h1>
            {conteudo && (
              <p
                className="text-white/65 mt-6 leading-relaxed max-w-2xl"
                style={{ fontSize: 'clamp(15px, 1.2vw, 17px)' }}
              >
                {conteudo.intro}
              </p>
            )}
          </div>
        </div>
      </section>

      {conteudo ? (
        <>
          {/* Benefícios */}
          <section className="py-24 bg-[var(--cream)]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="mb-14">
                <p className="eyebrow mb-3">Por que contratar</p>
                <div className="gold-line mb-5" />
                <h2
                  className="font-cormorant font-light text-[var(--navy)] leading-tight"
                  style={{ fontSize: 'clamp(28px, 3vw, 42px)' }}
                >
                  O que você ganha com este serviço
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {conteudo.beneficios.map((b, i) => (
                  <div key={i} className="bg-white p-8 border-t-2 border-[var(--gold)]">
                    <h3
                      className="font-cormorant font-semibold text-[var(--navy)] mb-3 leading-tight"
                      style={{ fontSize: 'clamp(20px, 1.8vw, 24px)' }}
                    >
                      {b.titulo}
                    </h3>
                    <p className="text-[var(--ink-muted)] text-sm leading-relaxed">
                      {b.descricao}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* O que está incluído + Para quem */}
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16">
                {/* Inclui */}
                <div>
                  <p className="eyebrow mb-3">Escopo</p>
                  <div className="gold-line mb-5" />
                  <h2
                    className="font-cormorant font-light text-[var(--navy)] leading-tight mb-8"
                    style={{ fontSize: 'clamp(26px, 2.5vw, 38px)' }}
                  >
                    O que está incluído
                  </h2>
                  <ul className="space-y-4">
                    {conteudo.inclui.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle
                          size={17}
                          className="text-[var(--gold)] mt-0.5 shrink-0"
                        />
                        <span className="text-[var(--ink-muted)] text-sm leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Para quem */}
                <div>
                  <p className="eyebrow mb-3">Indicado para</p>
                  <div className="gold-line mb-5" />
                  <h2
                    className="font-cormorant font-light text-[var(--navy)] leading-tight mb-8"
                    style={{ fontSize: 'clamp(26px, 2.5vw, 38px)' }}
                  >
                    Para quem é este serviço
                  </h2>
                  <ul className="space-y-4">
                    {conteudo.paraQuem.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <ArrowRight
                          size={16}
                          className="text-[var(--gold)] mt-0.5 shrink-0"
                        />
                        <span className="text-[var(--ink-muted)] text-sm leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA inline */}
                  <div className="mt-12 pt-10 border-t border-[var(--border)]">
                    <p
                      className="font-cormorant font-light text-[var(--navy)] mb-5 leading-tight"
                      style={{ fontSize: 'clamp(20px, 1.8vw, 26px)' }}
                    >
                      Pronto para começar?
                    </p>
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--gold)] text-[var(--navy)] text-xs font-medium tracking-[0.2em] uppercase hover:bg-[var(--gold-light)] transition-colors duration-200"
                    >
                      <MessageCircle size={14} />
                      Falar com um especialista
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          {conteudo.faq && conteudo.faq.length > 0 && (
            <section className="py-24 bg-[var(--cream)]">
              <div className="max-w-3xl mx-auto px-6 lg:px-8">
                <div className="mb-14">
                  <p className="eyebrow mb-3">Dúvidas frequentes</p>
                  <div className="gold-line mb-5" />
                  <h2
                    className="font-cormorant font-light text-[var(--navy)] leading-tight"
                    style={{ fontSize: 'clamp(28px, 3vw, 42px)' }}
                  >
                    Perguntas frequentes
                  </h2>
                </div>
                <div className="space-y-0 divide-y divide-[var(--border)]">
                  {conteudo.faq.map((item, i) => (
                    <div key={i} className="py-7">
                      <h3
                        className="font-cormorant font-semibold text-[var(--navy)] mb-3 leading-snug"
                        style={{ fontSize: 'clamp(18px, 1.5vw, 22px)' }}
                      >
                        {item.pergunta}
                      </h3>
                      <p className="text-[var(--ink-muted)] text-sm leading-relaxed">
                        {item.resposta}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </>
      ) : (
        /* Fallback sem conteúdo rico */
        <section className="py-24 bg-[var(--cream)]">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <p className="text-[var(--ink-muted)] text-[var(--text-md)] leading-relaxed mb-10">
              {servico.descricao}
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--gold)] text-[var(--navy)] text-xs font-medium tracking-[0.21em] uppercase hover:bg-[var(--gold-light)] transition-colors duration-200"
            >
              Solicitar Este Serviço
            </a>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  );
}
