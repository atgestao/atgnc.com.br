export const EMPRESA = {
  dominio: 'https://atgnc.com.br',
  nome: 'AT Gestão de Negócios e Contabilidade',
  nomeAbreviado: 'AT Gestão',
  tagline: 'Consultoria de Empreendedorismo · Capacitação de Equipe · Contabilidade',
  email: 'mkt.atgestao@gmail.com',
  whatsapp: {
    andrea: '5527993169155',
    tiago: '5527997378431',
  },
  telefone: {
    andrea: '(27) 99316-9155',
    tiago: '(27) 99737-8431',
  },
  endereco: {
    rua: 'R. Waldemar Siepierski, 200',
    bairro: 'Rio Branco',
    cidade: 'Cariacica',
    estado: 'ES',
    cep: '29147-600',
    completo: 'R. Waldemar Siepierski, 200 - Rio Branco, Cariacica - ES, 29147-600',
  },
  horario: 'Seg–Sex, 8h–18h',
} as const;

export const EQUIPE = [
  {
    nome: 'Andréa Gonçalves',
    iniciais: 'AG',
    cargo: 'Contadora | Sócia-Fundadora',
    especialidades: [
      'Contabilidade',
      'Prestação de Contas',
      'Finanças',
      'Consultoria',
      'Empreendedorismo',
      'Reforma Tributária',
    ],
    whatsapp: '5527993169155',
    telefone: '(27) 99316-9155',
    instagram: 'https://www.instagram.com/andreacontabil.es/',
  },
  {
    nome: 'Tiago Cardoso',
    iniciais: 'TC',
    cargo: 'Contador | Sócio',
    especialidades: [
      'Contabilidade',
      'Prestação de Contas',
      'Finanças',
      'Consultoria',
      'Empreendedorismo',
      'Reforma Tributária',
    ],
    whatsapp: '5527997378431',
    telefone: '(27) 99737-8431',
    instagram: 'https://www.instagram.com/tgcard/',
  },
] as const;

export const SERVICOS = [
  {
    slug: 'contabilidade',
    numero: '01',
    titulo: 'Contabilidade',
    descricao:
      'Escrituração contábil completa, balancetes, demonstrações financeiras e relatórios gerenciais para tomada de decisão segura.',
    icone: 'BookOpen',
  },
  {
    slug: 'prestacao-de-contas',
    numero: '02',
    titulo: 'Prestação de Contas',
    descricao:
      'Elaboração e entrega de obrigações acessórias, declarações fiscais e relatórios para órgãos reguladores com total conformidade.',
    icone: 'FileCheck',
  },
  {
    slug: 'reforma-tributaria',
    numero: '03',
    titulo: 'Reforma Tributária',
    descricao:
      'Análise de impacto da reforma tributária no seu negócio. Planejamento estratégico para a transição ao IVA dual (CBS e IBS).',
    icone: 'Scale',
  },
  {
    slug: 'consultoria-empresarial',
    numero: '04',
    titulo: 'Consultoria Empresarial',
    descricao:
      'Diagnóstico financeiro, planejamento estratégico, análise de viabilidade e orientação para crescimento sustentável.',
    icone: 'TrendingUp',
  },
  {
    slug: 'empreendedorismo',
    numero: '05',
    titulo: 'Empreendedorismo',
    descricao:
      'Abertura de empresas, escolha do regime tributário ideal, MEI, ME, EPP — suporte completo desde o primeiro passo.',
    icone: 'Rocket',
  },
  {
    slug: 'capacitacao-de-equipe',
    numero: '06',
    titulo: 'Capacitação de Equipe',
    descricao:
      'Treinamentos práticos em gestão financeira, controles internos e ferramentas de produtividade para sua equipe.',
    icone: 'Users',
  },
] as const;

export const STATS = [
  { valor: '12+', label: 'Anos de Experiência' },
  { valor: '500+', label: 'Clientes Atendidos' },
  { valor: '98%', label: 'Taxa de Satisfação' },
  { valor: '6', label: 'Áreas de Atuação' },
] as const;

export const DEPOIMENTOS = [
  {
    texto:
      'A AT Gestão transformou completamente a saúde financeira da minha empresa. A Andréa é extremamente competente e sempre disponível para esclarecer dúvidas.',
    autor: 'Carlos Mendonça',
    cargo: 'CEO, Mendonça Comércio',
  },
  {
    texto:
      'Finalmente encontrei um escritório que entende de empreendedorismo. O Tiago me ajudou a abrir minha empresa e escolher o regime tributário certo desde o início.',
    autor: 'Patrícia Oliveira',
    cargo: 'Fundadora, PO Estética',
  },
  {
    texto:
      'Com a reforma tributária chegando, precisava de especialistas de verdade. A AT Gestão me deu clareza total sobre os impactos e como me preparar.',
    autor: 'Roberto Faria',
    cargo: 'Diretor, Faria & Associados',
  },
] as const;
