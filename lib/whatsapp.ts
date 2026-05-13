export const MSG = {
  geral: 'Olá! Vim pelo site atgnc.com.br e gostaria de mais informações.',
  reformaTrib:
    'Olá! Gostaria de uma análise de impacto da Reforma Tributária para minha empresa.',
  aberturaEmpresa:
    'Olá! Tenho interesse em abrir uma empresa e gostaria de orientação.',
  contabilidade:
    'Olá! Gostaria de informações sobre os serviços de contabilidade.',
  consultoria:
    'Olá! Gostaria de saber mais sobre a consultoria empresarial.',
} as const;

export const WA = {
  andrea: (msg?: string) =>
    `https://wa.me/5527993169155?text=${encodeURIComponent(
      msg ?? MSG.geral
    )}`,
  tiago: (msg?: string) =>
    `https://wa.me/5527997378431?text=${encodeURIComponent(
      msg ?? MSG.geral
    )}`,
} as const;
