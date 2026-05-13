export type ServicoConteudo = {
  slug: string;
  intro: string;
  beneficios: { titulo: string; descricao: string }[];
  inclui: string[];
  paraQuem: string[];
  faq?: { pergunta: string; resposta: string }[];
};

export const SERVICOS_CONTEUDO: ServicoConteudo[] = [
  {
    slug: 'contabilidade',
    intro:
      'A contabilidade é o alicerce de qualquer negócio bem-sucedido. Na AT Gestão, oferecemos escrituração contábil completa e rigorosa, transformando números em informações estratégicas que orientam decisões, garantem conformidade legal e sustentam o crescimento da sua empresa. Nossa equipe acompanha de perto cada movimento financeiro, entregando relatórios claros e pontuais para que você tenha sempre uma visão precisa da saúde do seu negócio.',
    beneficios: [
      {
        titulo: 'Conformidade fiscal garantida',
        descricao: 'Escrituração dentro dos padrões exigidos pelo Fisco e pelos órgãos reguladores, eliminando riscos de autuação e penalidades.',
      },
      {
        titulo: 'Decisões baseadas em dados',
        descricao: 'Balancetes, DRE e fluxo de caixa entregues mensalmente para que você tome decisões com segurança e clareza.',
      },
      {
        titulo: 'Redução de custos tributários',
        descricao: 'Identificamos créditos fiscais e oportunidades de economia dentro da lei, reduzindo a carga tributária da sua empresa.',
      },
      {
        titulo: 'Suporte contínuo',
        descricao: 'Atendimento ágil para esclarecer dúvidas, responder a fiscalizações e orientar gestores em qualquer situação.',
      },
    ],
    inclui: [
      'Escrituração contábil mensal completa',
      'Elaboração de balancetes e demonstrações financeiras (DRE, Balanço Patrimonial)',
      'Conciliação bancária e de contas',
      'Controle de imobilizado e depreciação',
      'Relatórios gerenciais mensais',
      'Apuração de resultados por período',
      'Guarda e organização digital de documentos',
      'Atendimento a auditorias e fiscalizações',
    ],
    paraQuem: [
      'Empresas de todos os portes que precisam manter a contabilidade em dia',
      'Negócios em crescimento que necessitam de informações financeiras confiáveis',
      'Empresários que querem delegar a contabilidade com tranquilidade',
      'Organizações que enfrentaram problemas com a contabilidade anterior',
    ],
    faq: [
      {
        pergunta: 'Com que frequência recebo os relatórios contábeis?',
        resposta: 'Os relatórios são entregues mensalmente, até o dia 10 do mês seguinte. Para empresas que precisam de acompanhamento semanal, oferecemos um plano de monitoramento mais frequente.',
      },
      {
        pergunta: 'Posso migrar de outro escritório sem perder histórico?',
        resposta: 'Sim. Nossa equipe realiza a transição completa, solicitando e organizando todos os documentos do escritório anterior para garantir continuidade e conformidade.',
      },
      {
        pergunta: 'A AT Gestão atende empresas de qual porte?',
        resposta: 'Atendemos desde MEIs e microempresas até empresas de médio porte, adaptando os serviços e a frequência de entrega ao perfil de cada cliente.',
      },
    ],
  },
  {
    slug: 'prestacao-de-contas',
    intro:
      'Cumprir as obrigações acessórias no prazo certo é essencial para evitar multas, juros e complicações com o Fisco. A AT Gestão cuida de toda a prestação de contas da sua empresa — desde as declarações mensais até as obrigações anuais —, garantindo entrega pontual, dados corretos e total conformidade com a legislação vigente. Você foca no negócio; nós cuidamos do que o governo exige.',
    beneficios: [
      {
        titulo: 'Zero multas por atraso',
        descricao: 'Controle rigoroso de prazos e calendário fiscal atualizado para que nenhuma obrigação seja entregue fora do prazo.',
      },
      {
        titulo: 'Dados íntegros e rastreáveis',
        descricao: 'Todas as declarações são conferidas antes do envio, eliminando erros que podem gerar malha fina ou autuações.',
      },
      {
        titulo: 'Histórico organizado',
        descricao: 'Guarda digital de todos os comprovantes de entrega, protocolos e recibos para consulta a qualquer momento.',
      },
      {
        titulo: 'Atualizações legislativas',
        descricao: 'Monitoramos constantemente as mudanças na legislação para adequar suas obrigações sem impacto nas operações.',
      },
    ],
    inclui: [
      'SPED Contábil e SPED Fiscal',
      'ECF — Escrituração Contábil Fiscal',
      'EFD Contribuições (PIS/COFINS)',
      'DCTF, DCTF-Web e DIRF',
      'RAIS e eSocial',
      'DEFIS (Simples Nacional)',
      'Declarações municipais (ISS)',
      'Obrigações estaduais (SINTEGRA, GIA)',
      'Certidões negativas e regularidade fiscal',
    ],
    paraQuem: [
      'Empresas do Simples Nacional, Lucro Presumido ou Lucro Real',
      'Negócios que já sofreram autuações ou estão em malha fina',
      'Empresários cansados de pagar multas por obrigações atrasadas',
      'Empresas em processo de regularização fiscal',
    ],
    faq: [
      {
        pergunta: 'Quantas obrigações minha empresa tem por ano?',
        resposta: 'Depende do regime tributário e da atividade. Uma empresa do Simples Nacional pode ter entre 10 e 15 obrigações anuais; empresas do Lucro Real chegam a mais de 30. Mapeamos todas no onboarding.',
      },
      {
        pergunta: 'O que acontece se uma declaração for entregue errada?',
        resposta: 'Realizamos a retificação imediatamente, com análise do impacto e, se necessário, o recolhimento de eventuais diferenças para evitar juros adicionais.',
      },
    ],
  },
  {
    slug: 'reforma-tributaria',
    intro:
      'A Reforma Tributária brasileira representa a maior mudança no sistema fiscal do país em décadas. A substituição de PIS, COFINS, IPI, ICMS e ISS por dois novos tributos — CBS e IBS — impacta preços, margens, contratos e processos de toda empresa. A AT Gestão oferece análise personalizada do impacto na sua operação e um plano de transição para que você chegue à nova realidade tributária preparado e competitivo.',
    beneficios: [
      {
        titulo: 'Diagnóstico personalizado',
        descricao: 'Análise do impacto específico da reforma no seu setor, regime tributário e estrutura de custos, com projeções financeiras comparativas.',
      },
      {
        titulo: 'Planejamento da transição',
        descricao: 'Roteiro detalhado para adaptação de sistemas, contratos, preços e processos ao longo do período de transição (2026–2033).',
      },
      {
        titulo: 'Aproveitamento de benefícios',
        descricao: 'Identificação de regimes diferenciados, isenções e créditos previstos na nova legislação aplicáveis ao seu negócio.',
      },
      {
        titulo: 'Segurança jurídica',
        descricao: 'Monitoramento contínuo das regulamentações complementares e atualização do seu planejamento conforme a legislação avança.',
      },
    ],
    inclui: [
      'Mapeamento dos tributos atuais e projeção na nova estrutura (CBS + IBS)',
      'Análise de impacto por produto, serviço e linha de receita',
      'Revisão de contratos com cláusulas tributárias',
      'Adequação de sistemas de emissão de notas fiscais',
      'Treinamento da equipe financeira e fiscal',
      'Monitoramento das regulamentações da reforma',
      'Relatório executivo com cenários e recomendações',
    ],
    paraQuem: [
      'Empresas de todos os regimes que querem entender o impacto real da reforma',
      'Gestores financeiros que precisam replanejar preços e margens',
      'Negócios com contratos de longo prazo que precisam renegociar cláusulas',
      'Empresas do setor de serviços com alta exposição ao novo IBS',
    ],
    faq: [
      {
        pergunta: 'A reforma já está em vigor?',
        resposta: 'A transição começa em 2026 e se estende até 2033. Já em 2026 haverá alíquotas-teste de CBS e IBS. Quanto antes sua empresa se preparar, menores serão os impactos.',
      },
      {
        pergunta: 'Minha empresa do Simples Nacional será afetada?',
        resposta: 'Sim, mas o Simples terá regras próprias de transição. Fazemos a análise específica para o Simples considerando as particularidades do seu segmento.',
      },
      {
        pergunta: 'Preciso trocar meu sistema de gestão por causa da reforma?',
        resposta: 'Não necessariamente. Avaliamos seu sistema atual e orientamos sobre as adaptações necessárias, trabalhando junto ao seu fornecedor de software se preciso.',
      },
    ],
  },
  {
    slug: 'consultoria-empresarial',
    intro:
      'Crescer de forma sustentável exige mais do que intuição — exige dados, estratégia e um olhar externo qualificado. A AT Gestão oferece consultoria empresarial que combina análise financeira profunda com visão de negócios prática, ajudando empreendedores a identificar problemas, corrigir rotas e construir operações mais sólidas e rentáveis. Do diagnóstico ao plano de ação, estamos ao seu lado em cada decisão.',
    beneficios: [
      {
        titulo: 'Visão clara da situação real',
        descricao: 'Diagnóstico financeiro completo que revela onde estão as perdas, os gargalos e as oportunidades ocultas no seu negócio.',
      },
      {
        titulo: 'Planejamento com metas reais',
        descricao: 'Definição de objetivos financeiros e operacionais baseados no histórico da empresa, com indicadores mensuráveis de acompanhamento.',
      },
      {
        titulo: 'Redução de desperdícios',
        descricao: 'Análise de custos e despesas para identificar reduções sem comprometer a qualidade ou a operação do negócio.',
      },
      {
        titulo: 'Decisões mais seguras',
        descricao: 'Análise de viabilidade para expansões, novos produtos, contratações e investimentos antes de comprometer recursos.',
      },
    ],
    inclui: [
      'Diagnóstico financeiro e operacional completo',
      'Análise de DRE, fluxo de caixa e ponto de equilíbrio',
      'Identificação de custos ocultos e desperdícios',
      'Planejamento estratégico com metas e indicadores (KPIs)',
      'Análise de viabilidade para novos projetos e investimentos',
      'Reestruturação de precificação e margens',
      'Acompanhamento mensal de resultados',
      'Reuniões periódicas de revisão e ajuste do plano',
    ],
    paraQuem: [
      'Empresas que cresceram mas perderam o controle financeiro',
      'Negócios com margens apertadas e dificuldade de lucrar',
      'Empreendedores planejando expansão ou captação de investimento',
      'Empresas em crise financeira que precisam de reestruturação',
    ],
    faq: [
      {
        pergunta: 'Quanto tempo dura um processo de consultoria?',
        resposta: 'A fase de diagnóstico leva de 2 a 4 semanas. O acompanhamento estratégico é contínuo e revisado trimestralmente, com reuniões mensais de performance.',
      },
      {
        pergunta: 'A consultoria inclui implementação ou só orientação?',
        resposta: 'Oferecemos orientação estratégica e acompanhamos a implementação junto à sua equipe. Para ações contábeis e fiscais, nossa equipe executa diretamente.',
      },
    ],
  },
  {
    slug: 'empreendedorismo',
    intro:
      'Abrir uma empresa no Brasil pode parecer um labirinto burocrático — mas com a orientação certa, o processo é simples e rápido. A AT Gestão acompanha o empreendedor desde a escolha do tipo societário ideal até o primeiro faturamento, garantindo que a empresa nasça estruturada, com o regime tributário correto e sem surpresas fiscais no caminho. Mais de uma centena de empresas já nasceram com nossa ajuda.',
    beneficios: [
      {
        titulo: 'Abertura ágil e sem erros',
        descricao: 'Cuidamos de todo o processo burocrático — CNPJ, Alvará, Inscrições Estadual e Municipal — sem que você precise perder tempo em filas ou cartórios.',
      },
      {
        titulo: 'Regime tributário ideal desde o início',
        descricao: 'Análise comparativa entre MEI, Simples Nacional, Lucro Presumido e Lucro Real para escolher o regime que vai economizar mais impostos para o seu tipo de negócio.',
      },
      {
        titulo: 'Estrutura societária protegida',
        descricao: 'Orientação para definir a estrutura de capital e o contrato social que protege os sócios e facilita a entrada de investidores no futuro.',
      },
      {
        titulo: 'Suporte nos primeiros meses',
        descricao: 'Acompanhamento próximo no início das operações para garantir que a empresa cumpra todas as obrigações desde o primeiro mês de funcionamento.',
      },
    ],
    inclui: [
      'Análise e escolha do tipo empresarial (MEI, EIRELI, LTDA, SA)',
      'Elaboração do contrato social ou requerimento de empresário',
      'Registro na Junta Comercial',
      'Obtenção do CNPJ na Receita Federal',
      'Inscrição Estadual (quando aplicável)',
      'Inscrição Municipal e Alvará de Funcionamento',
      'Escolha e enquadramento no regime tributário ideal',
      'Abertura de conta PJ e orientação financeira inicial',
      'Registro em conselhos profissionais (quando obrigatório)',
    ],
    paraQuem: [
      'Pessoas que querem abrir o primeiro negócio e não sabem por onde começar',
      'Profissionais liberais que precisam formalizar sua atividade',
      'MEIs que precisam migrar para ME ou EPP por crescimento',
      'Sócios que vão abrir uma empresa juntos e precisam estruturar a sociedade',
    ],
    faq: [
      {
        pergunta: 'Quanto tempo leva para abrir uma empresa?',
        resposta: 'Para MEI, o cadastro é imediato. Para empresas com registro em Junta Comercial, o prazo médio é de 5 a 15 dias úteis, dependendo do município e do tipo de atividade.',
      },
      {
        pergunta: 'Qual é a diferença entre MEI, ME e EPP?',
        resposta: 'O MEI é para quem fatura até R$ 81 mil/ano com tributação simplificada. ME é para até R$ 360 mil/ano e EPP até R$ 4,8 milhões/ano. A escolha impacta tributos, obrigações e possibilidade de ter sócios.',
      },
      {
        pergunta: 'Preciso de advogado para abrir empresa?',
        resposta: 'Para a maioria dos tipos societários, não. A AT Gestão elabora o contrato social e conduz todo o processo. Apenas casos com estruturas jurídicas mais complexas podem exigir assessoria jurídica complementar.',
      },
    ],
  },
  {
    slug: 'capacitacao-de-equipe',
    intro:
      'Uma empresa só tão forte quanto as pessoas que a conduzem. A AT Gestão oferece treinamentos práticos e personalizados para que sua equipe domine gestão financeira, controles internos e ferramentas de produtividade — transformando colaboradores em profissionais mais seguros, eficientes e alinhados com os objetivos do negócio. Os treinamentos são desenvolvidos sob medida para a realidade e o nível de cada equipe.',
    beneficios: [
      {
        titulo: 'Equipe financeiramente letrada',
        descricao: 'Colaboradores que entendem conceitos de fluxo de caixa, DRE e custos tomam decisões mais conscientes no dia a dia.',
      },
      {
        titulo: 'Controles internos mais eficazes',
        descricao: 'Processos de controle bem definidos reduzem erros, desvios e retrabalho, aumentando a confiabilidade das informações financeiras.',
      },
      {
        titulo: 'Adoção real de ferramentas',
        descricao: 'Treinamentos hands-on que garantem que a equipe realmente utilize as ferramentas adotadas, não apenas as conheça teoricamente.',
      },
      {
        titulo: 'Conteúdo adaptado ao seu negócio',
        descricao: 'Cada treinamento é desenvolvido com exemplos e exercícios do próprio setor e da realidade da empresa, acelerando o aprendizado.',
      },
    ],
    inclui: [
      'Diagnóstico das necessidades de capacitação da equipe',
      'Treinamento em gestão financeira básica e avançada',
      'Controles internos: processos, checklists e rotinas',
      'Gestão de fluxo de caixa e contas a pagar/receber',
      'Planilhas e ferramentas de produtividade financeira',
      'Leitura e interpretação de relatórios contábeis (DRE, Balanço)',
      'Workshops práticos presenciais ou online',
      'Material didático e suporte pós-treinamento',
    ],
    paraQuem: [
      'Equipes financeiras e administrativas que precisam se atualizar',
      'Gestores que assumiram responsabilidades financeiras sem formação na área',
      'Empresas que estão implantando novos processos ou sistemas',
      'Negócios que querem profissionalizar a gestão interna',
    ],
    faq: [
      {
        pergunta: 'Os treinamentos são presenciais ou online?',
        resposta: 'Oferecemos as duas modalidades. Treinamentos presenciais são realizados na sede da sua empresa (região da Grande Vitória/ES) ou em local combinado. Online via Google Meet ou Zoom.',
      },
      {
        pergunta: 'Qual a duração média de um treinamento?',
        resposta: 'Módulos básicos têm entre 4 e 8 horas. Programas completos de capacitação financeira são estruturados em encontros semanais ao longo de 4 a 8 semanas.',
      },
      {
        pergunta: 'É possível treinar equipes de diferentes departamentos juntas?',
        resposta: 'Sim, e muitas vezes é até recomendado. Treinamentos interdepartamentais ajudam a criar uma linguagem financeira comum na empresa.',
      },
    ],
  },
];

export function getServicoConteudo(slug: string): ServicoConteudo | undefined {
  return SERVICOS_CONTEUDO.find((s) => s.slug === slug);
}
