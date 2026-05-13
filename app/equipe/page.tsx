import type { Metadata } from 'next';
import { MessageCircle } from 'lucide-react';
import { EQUIPE } from '@/lib/data/empresa';
import { Badge } from '@/components/ui/Badge';
import { WA } from '@/lib/whatsapp';
import { CTABanner } from '@/components/sections/CTABanner';

export const metadata: Metadata = {
  title: 'Equipe',
  description:
    'Conheça Andréa Gonçalves e Tiago Cardoso, os contadores especializados por trás da AT Gestão de Negócios e Contabilidade.',
};

export default function EquipePage() {
  return (
    <>
      <section className="pt-40 pb-24 bg-[var(--navy)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="eyebrow mb-4">Nossa Equipe</p>
          <div className="gold-line mb-6" />
          <h1 className="font-cormorant font-light text-white leading-tight max-w-3xl"
            style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}>
            Profissionais dedicados ao{' '}
            <em className="text-[var(--gold)] not-italic">seu sucesso</em>
          </h1>
        </div>
      </section>

      <section className="py-24 bg-[var(--cream)]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            {EQUIPE.map((membro) => (
              <div key={membro.nome} className="bg-white p-10 border border-[var(--border)]" style={{ borderTop: '3px solid var(--gold)' }}>
                <div className="w-20 h-20 rounded-full border-2 border-[var(--gold)] flex items-center justify-center mb-6">
                  <span className="font-cormorant text-2xl font-semibold text-[var(--gold)]">{membro.iniciais}</span>
                </div>
                <h2 className="font-cormorant text-[var(--text-2xl)] font-semibold text-[var(--navy)] mb-1">{membro.nome}</h2>
                <p className="text-[var(--gold)] text-xs tracking-[0.21em] uppercase mb-6">{membro.cargo}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {membro.especialidades.map((esp) => (
                    <Badge key={esp} variant="outline-gold" className="text-[10px]">{esp}</Badge>
                  ))}
                </div>

                <p className="text-[var(--ink-muted)] text-sm leading-relaxed mb-8">
                  Especialista em contabilidade empresarial e consultoria, com foco em
                  resultados práticos e acompanhamento próximo de cada cliente.
                </p>

                <div className="flex items-center gap-3">
                  <a
                    href={WA[membro.iniciais === 'AG' ? 'andrea' : 'tiago']()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white text-xs font-medium tracking-[0.15em] uppercase hover:bg-[#128C7E] transition-colors duration-200"
                  >
                    <MessageCircle size={14} />
                    WhatsApp
                  </a>
                  <span className="text-[var(--ink-muted)] text-sm">{membro.telefone}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
