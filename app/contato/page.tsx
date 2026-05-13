import type { Metadata } from 'next';
import { Mail, MapPin, Clock, Phone } from 'lucide-react';
import { ContactForm } from '@/components/forms/ContactForm';
import { EMPRESA } from '@/lib/data/empresa';
import { WA } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Entre em contato com a AT Gestão de Negócios e Contabilidade. Atendimento em Cariacica, ES e toda a Grande Vitória.',
};

export default function ContatoPage() {
  return (
    <>
      <section className="pt-40 pb-24 bg-[var(--navy)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="eyebrow mb-4">Fale conosco</p>
          <div className="gold-line mb-6" />
          <h1 className="font-cormorant font-light text-white leading-tight max-w-3xl"
            style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}>
            Vamos conversar sobre o{' '}
            <em className="text-[var(--gold)] not-italic">seu negócio</em>
          </h1>
        </div>
      </section>

      <section className="py-24 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Info */}
            <div>
              <h2 className="font-cormorant text-[var(--text-2xl)] font-light text-[var(--navy)] mb-8">
                Informações de contato
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin size={18} className="text-[var(--gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-medium tracking-[0.15em] uppercase text-[var(--ink-muted)] mb-1">Endereço</p>
                    <p className="text-sm text-[var(--ink)]">{EMPRESA.endereco.completo}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail size={18} className="text-[var(--gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-medium tracking-[0.15em] uppercase text-[var(--ink-muted)] mb-1">E-mail</p>
                    <a href={`mailto:${EMPRESA.email}`} className="text-sm text-[var(--ink)] hover:text-[var(--gold)] transition-colors">
                      {EMPRESA.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone size={18} className="text-[var(--gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-medium tracking-[0.15em] uppercase text-[var(--ink-muted)] mb-1">WhatsApp</p>
                    <a href={WA.andrea()} target="_blank" rel="noopener noreferrer" className="block text-sm text-[var(--ink)] hover:text-[var(--gold)] transition-colors">
                      Andréa: {EMPRESA.telefone.andrea}
                    </a>
                    <a href={WA.tiago()} target="_blank" rel="noopener noreferrer" className="block text-sm text-[var(--ink)] hover:text-[var(--gold)] transition-colors">
                      Tiago: {EMPRESA.telefone.tiago}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock size={18} className="text-[var(--gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-medium tracking-[0.15em] uppercase text-[var(--ink-muted)] mb-1">Horário</p>
                    <p className="text-sm text-[var(--ink)]">{EMPRESA.horario}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-white p-8 border border-[var(--border)]">
              <h2 className="font-cormorant text-[var(--text-2xl)] font-light text-[var(--navy)] mb-8">
                Envie uma mensagem
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
