import type { Metadata } from 'next';
import { MessageCircle } from 'lucide-react';
import { EQUIPE } from '@/lib/data/empresa';
import { WA } from '@/lib/whatsapp';
import { CTABanner } from '@/components/sections/CTABanner';

export const metadata: Metadata = {
  title: 'Nossa Equipe | AT Gestão',
  description:
    'Conheça Andréa Gonçalves (Contadora CRC/ES, Sócia-Fundadora) e Tiago Cardoso (Contador CRC/ES, Sócio) — os profissionais especializados por trás da AT Gestão de Negócios e Contabilidade em Cariacica, ES.',
  keywords: [
    'Andréa Gonçalves contadora Cariacica',
    'Tiago Cardoso contador ES',
    'equipe contabilidade Cariacica',
    'contador CRC Espírito Santo',
  ],
  alternates: { canonical: 'https://atgnc.com.br/equipe' },
  openGraph: {
    title: 'Nossa Equipe | AT Gestão de Negócios e Contabilidade',
    description: 'Andréa Gonçalves e Tiago Cardoso — contadores especializados em Cariacica, ES.',
    url: 'https://atgnc.com.br/equipe',
    images: [{ url: '/images/andrea-thiago.webp', width: 1400, height: 788, alt: 'Andréa Gonçalves e Tiago Cardoso — AT Gestão' }],
  },
};

const GRID_BG: React.CSSProperties = {
  backgroundImage: `
    linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
  `,
  backgroundSize: '48px 48px',
};

const CARD_STYLE: React.CSSProperties = {
  background: 'rgba(255,255,255,0.06)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderTop: '2px solid rgba(201,168,76,0.6)',
};

export default function EquipePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-24 bg-[var(--navy)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="eyebrow mb-4">Nossa Equipe</p>
          <div className="gold-line mb-6 mx-auto" />
          <h1
            className="font-cormorant font-light text-white leading-tight"
            style={{ fontSize: 'clamp(40px, 5vw, 64px)' }}
          >
            Profissionais dedicados ao{' '}
            <em className="text-[var(--gold)] not-italic">seu sucesso</em>
          </h1>
        </div>
      </section>

      {/* Team cards */}
      <section className="py-24 bg-[var(--navy)]" style={GRID_BG}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {EQUIPE.map((membro) => (
              <div
                key={membro.nome}
                style={CARD_STYLE}
                className="team-card flex flex-col items-center text-center p-10"
              >
                {/* Photo */}
                <div className="w-28 h-28 rounded-full border-2 border-[var(--gold)] overflow-hidden mb-6">
                  <img
                    src={`/images/${membro.iniciais === 'AG' ? 'andrea-goncalves' : 'tiago-cardoso'}.jpg`}
                    alt={membro.nome}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <h2
                  className="font-cormorant font-semibold text-white mb-1 leading-tight text-center"
                  style={{ fontSize: 'clamp(26px, 2.5vw, 32px)' }}
                >
                  {membro.nome}
                </h2>
                <p className="text-[var(--gold)] text-xs tracking-[0.2em] uppercase mb-5 text-center">
                  {membro.cargo}
                </p>

                <div className="mb-8 flex flex-col items-center w-full">
                  <div className="w-6 h-px bg-[var(--gold)] mb-4" />
                  <p className="text-white/50 text-sm leading-loose text-center">
                    {membro.especialidades.join(' · ')}
                  </p>
                </div>

                {/* Social links */}
                <div className="flex flex-wrap items-center justify-center gap-3">
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
                      className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/20 text-white/50 text-xs font-medium tracking-[0.15em] uppercase hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-200"
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
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
