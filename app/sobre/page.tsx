import type { Metadata } from 'next';
import { CTABanner } from '@/components/sections/CTABanner';

export const metadata: Metadata = {
  title: 'Sobre Nós | AT Gestão',
  description:
    'Conheça a AT Gestão de Negócios e Contabilidade — mais de uma década cuidando das finanças de empresas em Cariacica e Grande Vitória, ES. Andréa Gonçalves e Tiago Cardoso, contadores CRC/ES.',
  keywords: [
    'sobre AT Gestão',
    'escritório contabilidade Cariacica',
    'Andréa Gonçalves contadora',
    'Tiago Cardoso contador',
    'contabilidade Grande Vitória',
  ],
  alternates: { canonical: 'https://atgnc.com.br/sobre' },
  openGraph: {
    title: 'Sobre Nós | AT Gestão de Negócios e Contabilidade',
    description: 'Conheça a equipe por trás da AT Gestão — contadores especializados em Cariacica, ES.',
    url: 'https://atgnc.com.br/sobre',
    images: [{ url: '/images/andrea-thiago.webp', width: 1400, height: 788, alt: 'Andréa Gonçalves e Tiago Cardoso — AT Gestão' }],
  },
};

export default function SobrePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-24 bg-[var(--navy)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="eyebrow mb-4">Quem somos</p>
          <div className="gold-line mb-6" />
          <h1 className="font-cormorant font-light text-white leading-tight max-w-3xl"
            style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}>
            Mais de uma década cuidando dos{' '}
            <em className="text-[var(--gold)] not-italic">números do seu negócio</em>
          </h1>
        </div>
      </section>

      {/* História */}
      <section className="py-24 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="eyebrow mb-4">Nossa história</p>
              <div className="gold-line mb-6" />
              <h2 className="font-cormorant font-light text-[var(--navy)] text-[var(--text-3xl)] mb-6 leading-tight">
                Fundada com propósito, crescida com responsabilidade
              </h2>
              <div className="space-y-4 text-[var(--ink-muted)] text-sm leading-relaxed">
                <p>
                  A AT Gestão nasceu da visão de Andréa Gonçalves e Tiago Cardoso em oferecer
                  um serviço contábil que vai além do cumprimento de obrigações fiscais —
                  um escritório que seja verdadeiramente parceiro do empresário.
                </p>
                <p>
                  Com mais de 12 anos de experiência combinada, atendemos empresas de todos
                  os portes: do MEI em seus primeiros passos até médias empresas que precisam
                  de inteligência financeira para escalar com segurança.
                </p>
                <p>
                  Sediados em Cariacica, ES, atuamos em toda a Grande Vitória e oferecemos
                  atendimento digital para clientes em qualquer região do Brasil.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {[
                { titulo: 'Nossa Missão', texto: 'Transformar a gestão financeira das empresas em vantagem competitiva, com excelência técnica, ética e comprometimento.' },
                { titulo: 'Nossa Visão', texto: 'Ser referência em contabilidade consultiva no Espírito Santo, reconhecidos pela qualidade e pelo impacto positivo nos negócios de nossos clientes.' },
                { titulo: 'Nossos Valores', texto: 'Integridade, transparência, atualização constante e foco genuíno no sucesso do cliente.' },
              ].map((item) => (
                <div key={item.titulo} className="p-8 bg-white border border-[var(--border)]" style={{ borderTop: '3px solid var(--gold)' }}>
                  <h3 className="font-cormorant text-[var(--text-lg)] font-semibold text-[var(--navy)] mb-3">{item.titulo}</h3>
                  <p className="text-[var(--ink-muted)] text-sm leading-relaxed">{item.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
