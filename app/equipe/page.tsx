import type { Metadata } from 'next';
import { MessageCircle, Instagram } from 'lucide-react';
import { EQUIPE } from '@/lib/data/empresa';
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
          <h1
            className="font-cormorant font-light text-white leading-tight max-w-3xl"
            style={{ fontSize: 'clamp(40px, 5vw, 64px)' }}
          >
            Profissionais dedicados ao{' '}
            <em className="text-[var(--gold)] not-italic">seu sucesso</em>
          </h1>
        </div>
      </section>

      <section className="py-24 bg-[var(--cream)]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            {EQUIPE.map((membro) => (
              <div key={membro.nome} className="bg-white p-10">
                {/* Photo */}
                <div className="w-28 h-28 rounded-full border-2 border-[var(--gold)] overflow-hidden mb-8">
                  <img
                    src={`/images/${membro.iniciais === 'AG' ? 'andrea-goncalves' : 'tiago-cardoso'}.jpg`}
                    alt={membro.nome}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <h2
                  className="font-cormorant font-semibold text-[var(--navy)] mb-1 leading-tight"
                  style={{ fontSize: 'clamp(26px, 2.5vw, 32px)' }}
                >
                  {membro.nome}
                </h2>
                <p className="text-[var(--gold)] text-xs tracking-[0.2em] uppercase mb-7">
                  {membro.cargo}
                </p>

                {/* Especialidades sem badges */}
                <div className="mb-10">
                  <div className="w-6 h-px bg-[var(--gold)] mb-5" />
                  <p className="text-[var(--ink-muted)] text-sm leading-loose">
                    {membro.especialidades.join(' · ')}
                  </p>
                </div>

                {/* Social links */}
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={WA[membro.iniciais === 'AG' ? 'andrea' : 'tiago']()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white text-xs font-medium tracking-[0.15em] uppercase hover:bg-[#128C7E] transition-colors duration-200"
                  >
                    <MessageCircle size={13} />
                    WhatsApp
                  </a>
                  <a
                    href={membro.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-[var(--border)] text-[var(--ink-muted)] text-xs font-medium tracking-[0.15em] uppercase hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-200"
                  >
                    <Instagram size={13} />
                    Instagram
                  </a>
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
