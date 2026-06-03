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
    titulo: 'Reforma Tributária: O que muda para a sua empresa em 2026?',
    categoria: 'Reforma Tributária',
    data: '02 Jun 2026',
    dataISO: '2026-06-02',
    resumo:
      '2026 é o ano em que a reforma tributária deixou de ser teoria: CBS e IBS já estão sendo cobrados experimentalmente. Entenda o que mudou, o que ainda vai mudar e como proteger a rentabilidade da sua empresa durante a transição.',
    keywords: [
      'reforma tributária 2026',
      'IVA dual',
      'CBS 2026',
      'IBS 2026',
      'imposto seletivo',
      'reforma tributária empresa',
      'contabilidade Cariacica',
      'AT Gestão',
    ],
    sections: [
      {
        body: 'A reforma tributária aprovada pela Emenda Constitucional nº 132/2023 deixou de ser uma promessa futura: em 2026, CBS e IBS passaram à fase de cobrança experimental, e as empresas brasileiras estão pela primeira vez operando sob dois sistemas tributários simultaneamente. Para quem ainda não tomou nenhuma providência, o momento de agir é agora.',
      },
      {
        heading: 'O que já está em vigor em 2026',
        body: 'A partir de janeiro de 2026, duas novas contribuições passaram a ser cobradas com alíquotas reduzidas em caráter experimental:\n\n• CBS (Contribuição sobre Bens e Serviços): alíquota de 0,9%, de competência federal, unificando PIS e Cofins numa única cobrança não cumulativa.\n\n• IBS (Imposto sobre Bens e Serviços): alíquota de 0,1%, de competência compartilhada entre estados e municípios, destinado a substituir ICMS e ISS.\n\nNesse período de teste, as empresas recolhem os tributos dos dois sistemas em paralelo: o antigo (PIS, Cofins, ICMS, ISS) e o novo (CBS e IBS). O objetivo é testar a operacionalização antes da implantação plena. O valor pago de CBS e IBS pode ser abatido do PIS e Cofins devidos, evitando bitributação.',
      },
      {
        heading: 'Cronograma: o que vem a seguir (2027–2033)',
        body: '• 2027: CBS entra em vigor plena com sua alíquota definitiva. PIS e Cofins são extintos. O IBS segue com alíquota reduzida.\n\n• 2029: IBS começa a subir progressivamente enquanto as alíquotas de ICMS e ISS começam a cair.\n\n• 2029 a 2032: redução gradual de ICMS e ISS (25% ao ano), substituídos pelo IBS.\n\n• 2033: extinção total de ICMS e ISS. O sistema do IVA dual opera em plena capacidade.\n\nO Imposto Seletivo (IS), que incide sobre produtos prejudiciais à saúde e ao meio ambiente como bebidas alcoólicas, tabaco, veículos poluentes e apostas, também entra em vigor ao longo desse período conforme regulamentação complementar.',
      },
      {
        heading: 'Os desafios práticos da coexistência dos dois sistemas',
        body: 'O período 2026–2032 é o mais complexo para a contabilidade empresarial, justamente pela necessidade de gerenciar os dois regimes em paralelo. Os principais desafios são:\n\nObrigações acessórias dobradas: as empresas precisam manter as escriturações do sistema antigo (SPED, EFD-Contribuições, GIA, etc.) e ao mesmo tempo aprender as novas obrigações do CBS/IBS.\n\nGestão de créditos: o novo sistema é amplamente não cumulativo, o que gera créditos de CBS e IBS a compensar. Empresas que não monitorarem esses créditos perderão dinheiro.\n\nSplit payment: o mecanismo de pagamento automático previsto na reforma, pelo qual o imposto é retido na própria transação financeira antes de chegar ao vendedor, exigirá adaptação nos sistemas de fluxo de caixa.\n\nPreços e contratos: cláusulas de reajuste tributário precisam ser revisadas, pois a mudança na estrutura de custos pode afetar margens e relacionamentos comerciais.',
      },
      {
        heading: 'Impactos por porte e setor em 2026',
        body: 'Simples Nacional: as micro e pequenas empresas têm regime diferenciado previsto na reforma, mas a regulamentação ainda está sendo finalizada. É fundamental acompanhar as leis complementares para entender se haverá opção de recolhimento conjunto.\n\nPrestadores de serviços: são os que mais ganham com a uniformização de regras, especialmente empresas que atuam em múltiplos municípios e hoje lidam com ISS diferente em cada cidade.\n\nComércio e indústria: beneficiados pela não cumulatividade ampla, especialmente em cadeias longas onde o efeito cascata do ICMS era mais intenso.\n\nAgronegócio: conta com alíquotas reduzidas de CBS/IBS e crédito presumido para produtores rurais não contribuintes.',
      },
      {
        heading: 'O que sua empresa deve fazer agora',
        body: 'Com a cobrança experimental já em curso, não há mais espaço para esperar. As quatro ações prioritárias para 2026 são:\n\n1. Calcular o impacto real: compare sua carga tributária atual com a estimada sob o novo sistema. Em muitos setores há redução efetiva, mas em outros, especialmente serviços intensivos em mão de obra, a carga pode aumentar.\n\n2. Adaptar o sistema de gestão: seu ERP ou software de emissão de notas já está preparado para emitir documentos com CBS e IBS? Muitos sistemas ainda estão em atualização.\n\n3. Treinar o time financeiro: a equipe que cuida de contas a pagar, contas a receber e apuração de impostos precisa entender a lógica do novo sistema, especialmente o aproveitamento de créditos.\n\n4. Revisar precificação: se você vende para outras empresas, seus clientes podem exigir crédito de CBS/IBS na nota fiscal. Isso muda a negociação de preços.',
      },
      {
        heading: 'Como a AT Gestão pode ajudar sua empresa',
        body: 'Nossa equipe está atualizada com toda a regulamentação complementar da reforma e já está auxiliando clientes na adaptação ao período de transição. Oferecemos diagnóstico tributário completo, simulação de impacto do novo sistema no seu setor, adequação das obrigações acessórias e acompanhamento contínuo ao longo de todo o período 2026–2033. Entre em contato e agende uma conversa sem compromisso.',
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
        body: 'A escolha do regime de tributação é uma das decisões mais estratégicas que um empresário pode tomar, sendo também uma das mais ignoradas. Muitos negócios pagam mais imposto do que deveriam simplesmente por estarem enquadrados no regime errado. Entender as diferenças entre Simples Nacional, Lucro Presumido e Lucro Real é o primeiro passo para um planejamento tributário eficaz.',
      },
      {
        heading: 'Simples Nacional: simplicidade com limites',
        body: 'O Simples Nacional é um regime diferenciado criado para micro e pequenas empresas com faturamento anual de até R$ 4,8 milhões. Ele unifica oito tributos (IRPJ, CSLL, PIS, Cofins, IPI, ICMS, ISS e CPP) em uma única guia de recolhimento, com alíquotas progressivas divididas em anexos por setor de atividade.\n\nVantagens: burocracia reduzida, alíquota inicial baixa (especialmente para comércio e indústria), desobrigação de algumas obrigações acessórias complexas.\n\nDesvantagens: à medida que o faturamento cresce, as alíquotas sobem e o Simples pode deixar de ser vantajoso. Empresas com muitos funcionários em relação ao faturamento sofrem com a inclusão da Contribuição Patronal na guia. Algumas atividades de serviços (como sociedades de profissionais) chegam a alíquotas de 33% no teto do Anexo V.\n\nIdeal para: negócios com faturamento até R$ 1,5 milhão, margens saudáveis e folha de pagamento relativamente baixa.',
      },
      {
        heading: 'Lucro Presumido: previsibilidade para quem tem margem',
        body: 'No Lucro Presumido, o IRPJ e a CSLL são calculados sobre uma margem de lucro presumida definida pela Receita Federal: 8% para comércio e indústria e 32% para a maioria dos serviços, independentemente do lucro real apurado. Os demais tributos (PIS, Cofins, ICMS, ISS) são calculados separadamente.\n\nVantagens: é mais simples que o Lucro Real e pode ser muito vantajoso para empresas com margem de lucro real superior à presumida. Uma empresa de consultoria com margem de 60% e tributada sobre 32% de presunção tem economia significativa.\n\nDesvantagens: empresas com margem efetiva abaixo da presumida pagam mais imposto do que deveriam. PIS e Cofins são calculados pelo regime cumulativo (0,65% e 3%), sem direito a créditos sobre insumos.\n\nIdeal para: prestadores de serviços com boa margem, empresas comerciais com faturamento entre R$ 2 milhões e R$ 78 milhões sem despesas elevadas de insumos.',
      },
      {
        heading: 'Lucro Real: complexidade que pode compensar',
        body: 'No Lucro Real, IRPJ (15% + adicional de 10% sobre o que exceder R$ 20 mil/mês) e CSLL (9%) incidem sobre o lucro contábil ajustado pelas adições e exclusões fiscais previstas na legislação. É obrigatório para empresas com faturamento acima de R$ 78 milhões e para setores como instituições financeiras.\n\nVantagens: empresas com prejuízo não pagam IRPJ/CSLL. PIS e Cofins no regime não cumulativo (1,65% e 7,6%) permitem créditos sobre insumos, mercadorias, energia elétrica, aluguéis e outros custos, o que pode reduzir drasticamente a carga sobre PIS/Cofins. Empresas com grande volume de despesas dedutíveis se beneficiam muito.\n\nDesvantagens: exige contabilidade rigorosa, escrituração completa (SPED Contábil, ECF, EFD-Contribuições) e gestão fiscal sofisticada. O custo de compliance é significativamente maior.\n\nIdeal para: empresas com margens reduzidas, alto volume de insumos tributados, grande folha de pagamento ou que operam com prejuízo em alguns períodos.',
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
        body: 'Empresas que fazem planejamento tributário estruturado economizam, em média, de 5% a 15% da receita bruta anual em impostos, valor que pode ser reinvestido no negócio ou distribuído como lucro. A AT Gestão realiza análise comparativa completa dos regimes tributários com base nos seus números reais. Fale conosco antes do final do ano e entre no próximo exercício com o regime mais adequado ao seu negócio.',
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
        body: 'A maioria dos pequenos negócios não fecha por falta de clientes, mas por falta de gestão financeira. Pesquisas do Sebrae apontam que mais de 60% das empresas que encerram atividades nos primeiros cinco anos citam problemas financeiros como causa principal. A boa notícia é que planejamento financeiro não exige softwares caros nem equipes especializadas: exige método, disciplina e as ferramentas certas.',
      },
      {
        heading: 'O primeiro passo: separar pessoa física de jurídica',
        body: 'Parece óbvio, mas a mistura entre finanças pessoais e empresariais é o erro mais comum e mais devastador entre pequenos empreendedores. Sem essa separação, é impossível saber se o negócio é lucrativo, qual é o custo real das operações e quanto o dono pode retirar sem comprometer o caixa.\n\nA solução prática começa com três ações simples:\n\n1. Conta bancária exclusiva para a empresa (inclusive para MEI — a conta PJ não é obrigatória, mas evita confusão).\n2. Pró-labore definido: o dono deve se pagar um salário fixo, como qualquer funcionário. Esse valor precisa estar no fluxo de caixa como custo.\n3. Nenhuma despesa pessoal paga com dinheiro da empresa, nem o contrário.',
      },
      {
        heading: 'Fluxo de caixa: o coração do negócio',
        body: 'O fluxo de caixa registra todas as entradas e saídas de dinheiro da empresa em um determinado período. Ele responde à pergunta mais urgente do empreendedor: vou ter dinheiro para pagar minhas contas no final do mês?\n\nHá dois tipos essenciais:\n\nFluxo de caixa realizado: registra o que já aconteceu. Permite identificar padrões de receita e despesa, sazonalidades e gargalos.\n\nFluxo de caixa projetado: antecipa o que vai acontecer nos próximos 30, 60 ou 90 dias com base em compromissos assumidos e expectativas de recebimento. É essa projeção que permite agir antes que o problema apareça.\n\nUm fluxo de caixa negativo projetado para o próximo mês pode ser resolvido com antecedência: antecipando recebíveis, renegociando prazos com fornecedores ou ativando uma linha de crédito de capital de giro. Descoberto no dia do vencimento, o mesmo problema vira uma crise.',
      },
      {
        heading: 'DRE: entender se o negócio é lucrativo de verdade',
        body: 'A Demonstração do Resultado do Exercício (DRE) mostra se sua empresa teve lucro ou prejuízo em determinado período. Diferente do fluxo de caixa (que foca no dinheiro em caixa), a DRE trabalha com competência: registra receitas e despesas no momento em que ocorrem, independentemente do pagamento.\n\nUma DRE simplificada para pequenas empresas segue esta estrutura:\n\nReceita Bruta\n(–) Deduções (impostos, devoluções)\n= Receita Líquida\n(–) Custo das Mercadorias/Serviços Vendidos (CMV/CSV)\n= Lucro Bruto\n(–) Despesas Operacionais (aluguel, salários, marketing, etc.)\n= EBITDA (lucro operacional antes de juros e depreciação)\n(–) Depreciação e amortização\n(–) Resultado financeiro (juros pagos/recebidos)\n= Lucro Antes do Imposto de Renda\n(–) IRPJ e CSLL\n= Lucro Líquido\n\nMuitos empresários confundem faturamento com lucro. Um negócio pode faturar R$ 100 mil por mês e ter prejuízo se os custos não estiverem controlados. A DRE mensal torna isso visível.',
      },
      {
        heading: 'Capital de giro: o combustível das operações',
        body: 'Capital de giro é o dinheiro necessário para manter as operações rodando entre o momento em que você paga seus fornecedores e o momento em que recebe dos seus clientes. É um dos conceitos mais importantes e mais negligenciados da gestão financeira de pequenas empresas.\n\nO cálculo básico do capital de giro necessário envolve:\n\n• Prazo médio de recebimento: quantos dias, em média, você demora a receber após vender\n• Prazo médio de pagamento: quantos dias você tem para pagar fornecedores\n• Prazo médio de estocagem: quantos dias a mercadoria fica parada antes de ser vendida\n\nCiclo financeiro = Prazo de recebimento + Prazo de estocagem – Prazo de pagamento\n\nQuanto maior o ciclo financeiro, mais capital de giro a empresa precisa. Estratégias para reduzi-lo incluem oferecer desconto para pagamento à vista, negociar prazos maiores com fornecedores e reduzir estoques desnecessários.',
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
