import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CTABanner } from '@/components/sections/CTABanner';

type Props = { params: Promise<{ slug: string }> };

type Section = { heading?: string; body: string };

type Post = {
  titulo: string;
  categoria: string;
  data: string;
  dataISO: string;
  resumo: string;
  keywords: string[];
  sections: Section[];
};

const POSTS: Record<string, Post> = {
  'reforma-tributaria-o-que-muda-para-sua-empresa': {
    titulo: 'Reforma Tributária: O que muda para a sua empresa em 2025?',
    categoria: 'Reforma Tributária',
    data: '10 Mai 2026',
    dataISO: '2026-05-10',
    resumo:
      'A maior reforma do sistema fiscal brasileiro em décadas está em marcha. Entenda o IVA dual, CBS, IBS, Imposto Seletivo e como planejar a transição para proteger sua empresa.',
    keywords: [
      'reforma tributária 2025',
      'IVA dual',
      'CBS',
      'IBS',
      'imposto seletivo',
      'reforma tributária empresa',
      'contabilidade Cariacica',
      'AT Gestão',
    ],
    sections: [
      {
        body: 'A reforma tributária aprovada pela Emenda Constitucional nº 132/2023 representa a maior transformação do sistema fiscal brasileiro em mais de três décadas. Para empresários de todos os portes, compreender as mudanças e começar o planejamento agora é a diferença entre aproveitar oportunidades e ser pego de surpresa durante a transição.',
      },
      {
        heading: 'O fim dos cinco tributos e o nascimento do IVA dual',
        body: 'O coração da reforma é a extinção gradual de cinco tributos — PIS, Cofins, IPI, ICMS e ISS — e sua substituição por um IVA dual composto por dois novos impostos:\n\n• CBS (Contribuição sobre Bens e Serviços): tributo federal que unifica PIS e Cofins. Incidirá de forma não cumulativa sobre toda a cadeia produtiva.\n\n• IBS (Imposto sobre Bens e Serviços): tributo de competência compartilhada entre estados e municípios, substituindo ICMS e ISS. Terá alíquota única por ente federativo e regras uniformes em todo o território nacional.\n\nAlém do IVA dual, o Imposto Seletivo (IS) incidirá sobre produtos e serviços considerados prejudiciais à saúde ou ao meio ambiente, como bebidas alcoólicas, tabaco e veículos de alta emissão.',
      },
      {
        heading: 'Cronograma de transição: 2026 a 2032',
        body: 'A implantação ocorrerá de forma faseada para dar tempo ao setor produtivo de se adaptar:\n\n• 2026: início da cobrança experimental de CBS e IBS com alíquotas reduzidas (0,9% e 0,1% respectivamente). As empresas podem escolher recolher pelo sistema atual ou pelo novo.\n\n• 2027: CBS entra em vigor plena. PIS e Cofins são extintos.\n\n• 2029 a 2032: redução progressiva das alíquotas de ICMS e ISS à medida que o IBS ganha peso. Em 2033 ambos são extintos definitivamente.\n\nEsse período de convivência entre os dois sistemas exige atenção redobrada da contabilidade, pois obrigações acessórias dos regimes antigos e novos coexistirão simultaneamente.',
      },
      {
        heading: 'Impactos práticos por setor',
        body: 'Comércio e indústria: a não cumulatividade ampla do IBS/CBS tende a reduzir o efeito cascata de impostos, beneficiando cadeias com muitas etapas produtivas. Porém, empresas no Simples Nacional precisam avaliar cuidadosamente, pois o regime diferenciado para pequenos negócios ainda está em regulamentação.\n\nPrestadores de serviços: historicamente sobrecarregados pelo ISS municipal fragmentado, poderão se beneficiar da uniformização de alíquotas. Atenção especial para serviços de saúde, educação e financeiros, que têm regimes diferenciados previstos na reforma.\n\nAgronegócio: setor com tratamento específico na PEC, com alíquotas reduzidas e possibilidade de crédito presumido para pequenos produtores rurais.',
      },
      {
        heading: 'O que sua empresa deve fazer agora',
        body: 'Não espere a transição chegar para agir. As empresas que saírem na frente terão vantagem competitiva real. Recomendamos quatro frentes de ação imediata:\n\n1. Diagnóstico tributário completo: mapeie sua carga tributária atual, identificando quanto de PIS, Cofins, ICMS e ISS você recolhe e em quais etapas da cadeia.\n\n2. Simulação do impacto do novo sistema: calcule a alíquota de referência do IBS/CBS para o seu setor e compare com a carga atual. Em muitos casos, há oportunidade de redução de carga.\n\n3. Revisão de contratos e preços: a mudança na estrutura tributária pode afetar margens e precificação. Cláusulas de reajuste por mudança tributária devem ser revisadas.\n\n4. Treinamento da equipe financeira: o novo sistema exige familiaridade com créditos de IBS/CBS, split payment (mecanismo de pagamento automático previsto na reforma) e as novas obrigações acessórias.',
      },
      {
        heading: 'Como a AT Gestão pode ajudar sua empresa',
        body: 'Nossa equipe acompanha de perto toda a regulamentação complementar da reforma tributária e está preparada para conduzir o diagnóstico e o planejamento da sua empresa. Oferecemos análise personalizada do impacto no seu setor, modelagem financeira dos cenários de transição e suporte contínuo ao longo de todo o período 2026–2033. Entre em contato e agende uma conversa sem compromisso.',
      },
    ],
  },

  'como-escolher-o-regime-tributario-ideal': {
    titulo: 'Como escolher o regime tributário ideal para o seu negócio',
    categoria: 'Contabilidade',
    data: '25 Abr 2026',
    dataISO: '2026-04-25',
    resumo:
      'Simples Nacional, Lucro Presumido ou Lucro Real? A escolha do regime tributário é uma das decisões mais importantes para a saúde financeira da sua empresa. Entenda os critérios e descubra qual é o mais vantajoso para você.',
    keywords: [
      'regime tributário',
      'simples nacional',
      'lucro presumido',
      'lucro real',
      'como escolher regime tributário',
      'contabilidade empresarial',
      'planejamento tributário',
      'contabilidade Cariacica ES',
    ],
    sections: [
      {
        body: 'A escolha do regime de tributação é uma das decisões mais estratégicas que um empresário pode tomar — e também uma das mais ignoradas. Muitos negócios pagam mais imposto do que deveriam simplesmente por estarem enquadrados no regime errado. Entender as diferenças entre Simples Nacional, Lucro Presumido e Lucro Real é o primeiro passo para um planejamento tributário eficaz.',
      },
      {
        heading: 'Simples Nacional: simplicidade com limites',
        body: 'O Simples Nacional é um regime diferenciado criado para micro e pequenas empresas com faturamento anual de até R$ 4,8 milhões. Ele unifica oito tributos (IRPJ, CSLL, PIS, Cofins, IPI, ICMS, ISS e CPP) em uma única guia de recolhimento, com alíquotas progressivas divididas em anexos por setor de atividade.\n\nVantagens: burocracia reduzida, alíquota inicial baixa (especialmente para comércio e indústria), desobrigação de algumas obrigações acessórias complexas.\n\nDesvantagens: à medida que o faturamento cresce, as alíquotas sobem e o Simples pode deixar de ser vantajoso. Empresas com muitos funcionários em relação ao faturamento sofrem com a inclusão da Contribuição Patronal na guia. Algumas atividades de serviços (como sociedades de profissionais) chegam a alíquotas de 33% no teto do Anexo V.\n\nIdeal para: negócios com faturamento até R$ 1,5 milhão, margens saudáveis e folha de pagamento relativamente baixa.',
      },
      {
        heading: 'Lucro Presumido: previsibilidade para quem tem margem',
        body: 'No Lucro Presumido, o IRPJ e a CSLL são calculados sobre uma margem de lucro presumida definida pela Receita Federal — 8% para comércio e indústria, 32% para a maioria dos serviços — independentemente do lucro real apurado. Os demais tributos (PIS, Cofins, ICMS, ISS) são calculados separadamente.\n\nVantagens: é mais simples que o Lucro Real e pode ser muito vantajoso para empresas com margem de lucro real superior à presumida. Uma empresa de consultoria com margem de 60% e tributada sobre 32% de presunção tem economia significativa.\n\nDesvantagens: empresas com margem efetiva abaixo da presumida pagam mais imposto do que deveriam. PIS e Cofins são calculados pelo regime cumulativo (0,65% e 3%), sem direito a créditos sobre insumos.\n\nIdeal para: prestadores de serviços com boa margem, empresas comerciais com faturamento entre R$ 2 milhões e R$ 78 milhões sem despesas elevadas de insumos.',
      },
      {
        heading: 'Lucro Real: complexidade que pode compensar',
        body: 'No Lucro Real, IRPJ (15% + adicional de 10% sobre o que exceder R$ 20 mil/mês) e CSLL (9%) incidem sobre o lucro contábil ajustado pelas adições e exclusões fiscais previstas na legislação. É obrigatório para empresas com faturamento acima de R$ 78 milhões e para setores como instituições financeiras.\n\nVantagens: empresas com prejuízo não pagam IRPJ/CSLL. PIS e Cofins no regime não cumulativo (1,65% e 7,6%) permitem créditos sobre insumos, mercadorias, energia elétrica, aluguéis e outros custos — o que pode reduzir drasticamente a carga sobre PIS/Cofins. Empresas com grande volume de despesas dedutíveis se beneficiam muito.\n\nDesvantagens: exige contabilidade rigorosa, escrituração completa (SPED Contábil, ECF, EFD-Contribuições) e gestão fiscal sofisticada. O custo de compliance é significativamente maior.\n\nIdeal para: empresas com margens reduzidas, alto volume de insumos tributados, grande folha de pagamento ou que operam com prejuízo em alguns períodos.',
      },
      {
        heading: 'Como comparar: o cálculo que importa',
        body: 'A melhor forma de escolher o regime não é pela regra geral, mas pela simulação com os números reais da sua empresa. O processo envolve quatro etapas:\n\n1. Projeção de faturamento anual para o próximo exercício.\n2. Levantamento das despesas dedutíveis (folha, insumos, aluguéis, serviços tomados).\n3. Cálculo da carga tributária total em cada regime considerando todos os tributos envolvidos.\n4. Comparação do lucro líquido após impostos em cada cenário.\n\nUm detalhe frequentemente esquecido: a opção pelo regime tributário é irretratável dentro do mesmo ano-calendário. A escolha feita em janeiro (pelo pagamento da primeira guia) vale para os 12 meses seguintes. Por isso, o planejamento deve ser feito em novembro ou dezembro, com base nas projeções do próximo ano.',
      },
      {
        heading: 'Erros comuns e como evitá-los',
        body: 'Permanecer no Simples por inércia: muitos empresários mantêm o Simples Nacional mesmo após ultrapassar faixas onde ele deixou de ser vantajoso, seja por desconhecimento ou por medo da burocracia dos outros regimes.\n\nIgnorar o fator folha de pagamento: no Simples, a CPP (Contribuição Patronal Previdenciária) está incluída na guia. No Lucro Presumido/Real, ela é calculada separadamente (20% sobre a folha). Para empresas com muitos funcionários, isso pode inverter a vantagem.\n\nNão considerar os créditos de PIS/Cofins: empresas que compram muito de fornecedores que emitem nota fiscal podem acumular créditos relevantes no regime não cumulativo (Lucro Real), tornando-o mais barato do que parece à primeira vista.\n\nTrocar de regime no momento errado: mudanças societárias, fusões ou expansão de atividade podem criar oportunidades ou obrigações de mudança de regime que, se mal planejadas, resultam em autuações fiscais.',
      },
      {
        heading: 'Planejamento tributário como vantagem competitiva',
        body: 'Empresas que fazem planejamento tributário estruturado economizam, em média, de 5% a 15% da receita bruta anual em impostos — dinheiro que pode ser reinvestido no negócio ou distribuído como lucro. A AT Gestão realiza análise comparativa completa dos regimes tributários com base nos seus números reais. Fale conosco antes do final do ano e entre no próximo exercício com o regime mais adequado ao seu negócio.',
      },
    ],
  },

  'planejamento-financeiro-para-pequenas-empresas': {
    titulo: 'Planejamento financeiro para pequenas empresas: por onde começar',
    categoria: 'Consultoria',
    data: '08 Abr 2026',
    dataISO: '2026-04-08',
    resumo:
      'Organizar as finanças é o alicerce do crescimento sustentável. Um guia prático com as ferramentas, processos e indicadores essenciais para MEIs, MEs e EPPs que querem crescer com solidez.',
    keywords: [
      'planejamento financeiro pequenas empresas',
      'gestão financeira MEI',
      'fluxo de caixa',
      'capital de giro',
      'DRE',
      'indicadores financeiros',
      'consultoria empresarial Cariacica',
      'AT Gestão contabilidade',
    ],
    sections: [
      {
        body: 'A maioria dos pequenos negócios não fecha por falta de clientes — fecha por falta de gestão financeira. Pesquisas do Sebrae apontam que mais de 60% das empresas que encerram atividades nos primeiros cinco anos citam problemas financeiros como causa principal. A boa notícia é que planejamento financeiro não exige softwares caros nem equipes especializadas: exige método, disciplina e as ferramentas certas.',
      },
      {
        heading: 'O primeiro passo: separar pessoa física de jurídica',
        body: 'Parece óbvio, mas a mistura entre finanças pessoais e empresariais é o erro mais comum — e mais devastador — entre pequenos empreendedores. Sem essa separação, é impossível saber se o negócio é lucrativo, qual é o custo real das operações e quanto o dono pode retirar sem comprometer o caixa.\n\nA solução prática começa com três ações simples:\n\n1. Conta bancária exclusiva para a empresa (inclusive para MEI — a conta PJ não é obrigatória, mas evita confusão).\n2. Pró-labore definido: o dono deve se pagar um salário fixo, como qualquer funcionário. Esse valor precisa estar no fluxo de caixa como custo.\n3. Nenhuma despesa pessoal paga com dinheiro da empresa — e vice-versa.',
      },
      {
        heading: 'Fluxo de caixa: o coração do negócio',
        body: 'O fluxo de caixa registra todas as entradas e saídas de dinheiro da empresa em um determinado período. Ele responde à pergunta mais urgente do empreendedor: vou ter dinheiro para pagar minhas contas no final do mês?\n\nHá dois tipos essenciais:\n\nFluxo de caixa realizado: registra o que já aconteceu. Permite identificar padrões de receita e despesa, sazonalidades e gargalos.\n\nFluxo de caixa projetado: antecipa o que vai acontecer nos próximos 30, 60 ou 90 dias com base em compromissos assumidos e expectativas de recebimento. É essa projeção que permite agir antes que o problema apareça.\n\nUm fluxo de caixa negativo projetado para o próximo mês pode ser resolvido com antecedência — antecipando recebíveis, renegociando prazos com fornecedores ou ativando uma linha de crédito de capital de giro. Descoberto no dia do vencimento, o mesmo problema vira uma crise.',
      },
      {
        heading: 'DRE: entender se o negócio é lucrativo de verdade',
        body: 'A Demonstração do Resultado do Exercício (DRE) mostra se sua empresa teve lucro ou prejuízo em determinado período. Diferente do fluxo de caixa (que foca no dinheiro em caixa), a DRE trabalha com competência: registra receitas e despesas no momento em que ocorrem, independentemente do pagamento.\n\nUma DRE simplificada para pequenas empresas segue esta estrutura:\n\nReceita Bruta\n(–) Deduções (impostos, devoluções)\n= Receita Líquida\n(–) Custo das Mercadorias/Serviços Vendidos (CMV/CSV)\n= Lucro Bruto\n(–) Despesas Operacionais (aluguel, salários, marketing, etc.)\n= EBITDA (lucro operacional antes de juros e depreciação)\n(–) Depreciação e amortização\n(–) Resultado financeiro (juros pagos/recebidos)\n= Lucro Antes do Imposto de Renda\n(–) IRPJ e CSLL\n= Lucro Líquido\n\nMuitos empresários confundem faturamento com lucro. Um negócio pode faturar R$ 100 mil por mês e ter prejuízo se os custos não estiverem controlados. A DRE mensal torna isso visível.',
      },
      {
        heading: 'Capital de giro: o combustível das operações',
        body: 'Capital de giro é o dinheiro necessário para manter as operações rodando entre o momento em que você paga seus fornecedores e o momento em que recebe dos seus clientes. É um dos conceitos mais importantes — e mais negligenciados — da gestão financeira de pequenas empresas.\n\nO cálculo básico do capital de giro necessário envolve:\n\n• Prazo médio de recebimento: quantos dias, em média, você demora a receber após vender\n• Prazo médio de pagamento: quantos dias você tem para pagar fornecedores\n• Prazo médio de estocagem: quantos dias a mercadoria fica parada antes de ser vendida\n\nCiclo financeiro = Prazo de recebimento + Prazo de estocagem – Prazo de pagamento\n\nQuanto maior o ciclo financeiro, mais capital de giro a empresa precisa. Estratégias para reduzi-lo incluem oferecer desconto para pagamento à vista, negociar prazos maiores com fornecedores e reduzir estoques desnecessários.',
      },
      {
        heading: 'Indicadores financeiros essenciais para acompanhar',
        body: 'Você não pode gerenciar o que não mede. Estes são os indicadores que todo pequeno empresário deveria monitorar mensalmente:\n\nMargem de lucro líquida: Lucro Líquido ÷ Receita Líquida × 100. Indica quanto de cada real faturado sobra como lucro. Abaixo de 5% para comércio e 10% para serviços exige atenção.\n\nPonto de equilíbrio (break-even): o faturamento mínimo necessário para cobrir todos os custos. Saber esse número é fundamental para definir metas de vendas.\n\nLiquidez corrente: Ativo Circulante ÷ Passivo Circulante. Valores abaixo de 1 indicam que a empresa não tem recursos suficientes para pagar suas dívidas de curto prazo.\n\nROI (Retorno sobre Investimento): avalia se um investimento específico (equipamento, marketing, expansão) gerou retorno proporcional ao custo.\n\nTicket médio e taxa de conversão: não são indicadores contábeis, mas influenciam diretamente a receita e devem ser monitorados em conjunto com os financeiros.',
      },
      {
        heading: 'Planejamento orçamentário anual',
        body: 'O orçamento anual é o mapa financeiro da empresa para o próximo exercício. Ele parte da projeção de vendas e desdobra os recursos necessários para alcançá-la: contratações, investimentos em equipamentos, marketing, capital de giro adicional e metas de redução de custos.\n\nUm bom orçamento empresarial segue quatro etapas:\n\n1. Revisão do ano anterior: o que funcionou, o que saiu do planejado e por quê.\n2. Projeção de receitas: com base em tendências do mercado, sazonalidade e capacidade instalada.\n3. Projeção de custos e despesas: separando fixos (que existem independentemente do faturamento) de variáveis (que crescem com as vendas).\n4. Definição de metas e indicadores de acompanhamento: sem acompanhamento mensal, o orçamento vira papel.',
      },
      {
        heading: 'Dando o próximo passo com apoio profissional',
        body: 'Implementar uma gestão financeira estruturada do zero pode parecer desafiador, mas o retorno é imediato: mais clareza para tomar decisões, menos surpresas no fluxo de caixa e uma empresa mais atraente para crédito e para potenciais investidores. A AT Gestão oferece consultoria financeira personalizada para MEIs, MEs e EPPs em Cariacica e região. Nossa abordagem combina a visão contábil com ferramentas práticas de gestão para que você tenha controle real do seu negócio. Entre em contato e veja como podemos ajudar.',
      },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS[slug];
  if (!post) return {};

  const url = `https://atgnc.com.br/blog/${slug}`;

  return {
    title: `${post.titulo} | AT Gestão`,
    description: post.resumo,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: post.titulo,
      description: post.resumo,
      siteName: 'AT Gestão de Negócios e Contabilidade',
      publishedTime: post.dataISO,
      authors: ['AT Gestão'],
      locale: 'pt_BR',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.titulo,
      description: post.resumo,
    },
  };
}

function JsonLd({ slug, post }: { slug: string; post: Post }) {
  const url = `https://atgnc.com.br/blog/${slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.titulo,
    description: post.resumo,
    datePublished: post.dataISO,
    dateModified: post.dataISO,
    author: {
      '@type': 'Organization',
      name: 'AT Gestão de Negócios e Contabilidade',
      url: 'https://atgnc.com.br',
    },
    publisher: {
      '@type': 'Organization',
      name: 'AT Gestão de Negócios e Contabilidade',
      url: 'https://atgnc.com.br',
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    keywords: post.keywords.join(', '),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = POSTS[slug];
  if (!post) notFound();

  return (
    <>
      <JsonLd slug={slug} post={post} />

      <section className="pt-40 pb-16 bg-[var(--navy)]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/blog" className="text-white/50 text-xs hover:text-[var(--gold)] transition-colors">
              Blog
            </Link>
            <span className="text-white/30">·</span>
            <span className="text-[var(--gold)] text-xs tracking-[0.15em] uppercase">{post.categoria}</span>
          </div>
          <h1
            className="font-cormorant font-light text-white leading-tight mb-4"
            style={{ fontSize: 'clamp(30px, 4vw, 52px)' }}
          >
            {post.titulo}
          </h1>
          <p className="text-white/40 text-xs mb-6">{post.data}</p>
          <p className="text-white/70 leading-relaxed" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)' }}>
            {post.resumo}
          </p>
        </div>
      </section>

      <section className="py-16 bg-[var(--cream)]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <article className="space-y-10">
            {post.sections.map((section, i) => (
              <div key={i}>
                {section.heading && (
                  <h2
                    className="font-cormorant font-semibold text-[var(--navy)] mb-4 leading-tight"
                    style={{ fontSize: 'clamp(22px, 2.5vw, 30px)' }}
                  >
                    {section.heading}
                  </h2>
                )}
                <div className="space-y-4">
                  {section.body.split('\n\n').map((para, j) => (
                    <p key={j} className="text-[var(--ink-muted)] leading-relaxed" style={{ fontSize: 'clamp(14px, 1.2vw, 16px)' }}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </article>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
