import type { Metadata } from 'next';
import { AlertTriangle, CheckCircle, ChevronDown } from 'lucide-react';
import { ContactForm } from '@/components/forms/ContactForm';
import { WA } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Reforma Tributária — Prepare sua Empresa',
  description:
    'Entenda o impacto da Reforma Tributária no seu negócio. IVA dual, CBS, IBS e IS: análise especializada pela AT Gestão de Negócios e Contabilidade.',
};

const FAQ = [
  {
    pergunta: 'O que é o IVA dual da Reforma Tributária?',
    resposta:
      'O IVA dual é composto pelo CBS (Contribuição sobre Bens e Serviços), de competência federal, e o IBS (Imposto sobre Bens e Serviços), de competência estadual e municipal. Juntos, substituirão PIS, Cofins, IPI, ICMS e ISS.',
  },
  {
    pergunta: 'Quando a reforma entra em vigor?',
    resposta:
      'A transição ocorre gradualmente entre 2026 e 2032. Em 2026, começam as alíquotas teste (0,1% CBS e 0,05% IBS). O sistema novo estará plenamente em vigor a partir de 2033.',
  },
  {
    pergunta: 'O Simples Nacional será extinto?',
    resposta:
      'Não. O Simples Nacional será mantido, mas com adaptações. As empresas optantes terão regras específicas de transição para o novo sistema.',
  },
  {
    pergunta: 'O que é o Imposto Seletivo (IS)?',
    resposta:
      'O IS incidirá sobre produtos e serviços considerados prejudiciais à saúde ou ao meio ambiente, como cigarros, bebidas alcoólicas e veículos poluentes.',
  },
];

const IMPACTOS = [
  { regime: 'Simples Nacional', pontos: ['Regime mantido com adaptações', 'Possibilidade de apurar CBS e IBS separadamente', 'Transição gradual e diferenciada'] },
  { regime: 'Lucro Presumido', pontos: ['Substituição de PIS/Cofins pelo CBS', 'Substituição de ICMS/ISS pelo IBS', 'Possível revisão do planejamento tributário'] },
  { regime: 'Lucro Real', pontos: ['Maior impacto inicial na estrutura fiscal', 'Oportunidades de crédito ampliadas', 'Necessidade de revisão completa dos controles'] },
];

const CHECKLIST = [
  'Análise de impacto personalizada para o seu regime tributário',
  'Mapeamento de créditos tributários na transição',
  'Revisão de contratos e precificação',
  'Capacitação da equipe financeira',
  'Acompanhamento contínuo das mudanças legislativas',
  'Planejamento tributário estratégico para a nova realidade',
];

export default function ReformaTributariaPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map((item) => ({
      '@type': 'Question',
      name: item.pergunta,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.resposta,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="pt-40 pb-24 bg-[var(--navy)] relative overflow-hidden">
        <div className="absolute inset-0 geo-grid" aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--gold)]/15 border border-[var(--gold)]/30 mb-8">
            <AlertTriangle size={14} className="text-[var(--gold)]" />
            <span className="text-[var(--gold)] text-xs font-medium tracking-[0.21em] uppercase">
              Atenção Empresários
            </span>
          </div>
          <div className="gold-line mb-6" />
          <h1 className="font-cormorant font-light text-white leading-tight max-w-3xl mb-6"
            style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}>
            Sua empresa está preparada para a{' '}
            <em className="text-[var(--gold)] not-italic">Reforma Tributária?</em>
          </h1>
          <p className="text-white/70 text-sm leading-relaxed max-w-2xl mb-10">
            A maior reforma tributária da história do Brasil está em curso. IVA dual, CBS, IBS e IS
            vão transformar completamente o sistema fiscal. Prepare-se agora.
          </p>
          <a
            href={WA.andrea('Olá! Gostaria de uma análise de impacto da Reforma Tributária para minha empresa.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--gold)] text-[var(--navy)] text-xs font-medium tracking-[0.21em] uppercase hover:bg-[var(--gold-light)] transition-colors duration-200"
          >
            Solicitar Análise Gratuita
          </a>
        </div>
      </section>

      {/* Accordion */}
      <section className="py-24 bg-[var(--cream)]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="eyebrow mb-4">Entenda</p>
          <div className="gold-line mb-6" />
          <h2 className="font-cormorant font-light text-[var(--navy)] text-[var(--text-3xl)] mb-12 leading-tight">
            O que muda com a reforma?
          </h2>

          <div className="space-y-4">
            {FAQ.map((item, i) => (
              <details key={i} className="group bg-white border border-[var(--border)] open:border-[var(--gold)]">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-cormorant text-[var(--text-lg)] text-[var(--navy)] font-semibold pr-4">
                    {item.pergunta}
                  </span>
                  <ChevronDown size={18} className="text-[var(--gold)] shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-[var(--ink-muted)] text-sm leading-relaxed">{item.resposta}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Impacto por regime */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="eyebrow mb-4">Impacto por regime</p>
          <div className="gold-line mb-6" />
          <h2 className="font-cormorant font-light text-[var(--navy)] text-[var(--text-3xl)] mb-12 leading-tight">
            Como a reforma afeta <em className="text-[var(--gold)] not-italic">seu regime tributário</em>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {IMPACTOS.map((item) => (
              <div key={item.regime} className="p-8 bg-[var(--cream)] border border-[var(--border)]" style={{ borderTop: '3px solid var(--gold)' }}>
                <h3 className="font-cormorant text-[var(--text-xl)] font-semibold text-[var(--navy)] mb-6">{item.regime}</h3>
                <ul className="space-y-3">
                  {item.pontos.map((ponto) => (
                    <li key={ponto} className="flex items-start gap-3 text-sm text-[var(--ink-muted)]">
                      <CheckCircle size={14} className="text-[var(--gold)] mt-0.5 shrink-0" />
                      {ponto}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-24 bg-[var(--navy)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="eyebrow mb-4">O que oferecemos</p>
              <div className="gold-line mb-6" />
              <h2 className="font-cormorant font-light text-white text-[var(--text-3xl)] mb-8 leading-tight">
                Suporte completo na <em className="text-[var(--gold)] not-italic">transição tributária</em>
              </h2>
              <ul className="space-y-4">
                {CHECKLIST.map((item) => (
                  <li key={item} className="flex items-start gap-4 text-white/80 text-sm">
                    <CheckCircle size={16} className="text-[var(--gold)] mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[var(--navy-light)] p-8 border border-white/10">
              <h3 className="font-cormorant text-[var(--text-2xl)] text-white font-light mb-6">
                Solicite uma análise personalizada
              </h3>
              <ContactForm assuntoPreenchido="Reforma Tributária" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
