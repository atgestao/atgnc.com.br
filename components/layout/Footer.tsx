import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { EMPRESA } from '@/lib/data/empresa';
import { WA } from '@/lib/whatsapp';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--navy)] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <span className="font-cormorant text-3xl font-semibold text-[var(--gold)]">AT</span>
              <span className="font-cormorant text-3xl font-light text-white"> Gestão</span>
            </div>
            <div className="gold-line mb-5" />
            <p className="text-white/65 text-sm leading-relaxed max-w-xs">
              Escritório de contabilidade especializado em consultoria empresarial,
              reforma tributária e capacitação de equipes em Cariacica, ES.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="eyebrow mb-5 text-white/50">Serviços</h3>
            <ul className="space-y-3 text-sm text-white/65">
              <li><Link href="/servicos/contabilidade" className="hover:text-[var(--gold)] transition-colors">Contabilidade</Link></li>
              <li><Link href="/servicos/prestacao-de-contas" className="hover:text-[var(--gold)] transition-colors">Prestação de Contas</Link></li>
              <li><Link href="/reforma-tributaria" className="hover:text-[var(--gold)] transition-colors">Reforma Tributária</Link></li>
              <li><Link href="/servicos/consultoria-empresarial" className="hover:text-[var(--gold)] transition-colors">Consultoria Empresarial</Link></li>
              <li><Link href="/servicos/empreendedorismo" className="hover:text-[var(--gold)] transition-colors">Empreendedorismo</Link></li>
              <li><Link href="/servicos/capacitacao-de-equipe" className="hover:text-[var(--gold)] transition-colors">Capacitação de Equipe</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="eyebrow mb-5 text-white/50">Contato</h3>
            <ul className="space-y-4 text-sm text-white/65">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[var(--gold)] mt-0.5 shrink-0" />
                <span>{EMPRESA.endereco.completo}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-[var(--gold)] shrink-0" />
                <a href={`mailto:${EMPRESA.email}`} className="hover:text-[var(--gold)] transition-colors break-all">
                  {EMPRESA.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-[var(--gold)] shrink-0" />
                <a href={WA.andrea()} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--gold)] transition-colors">
                  Andréa: {EMPRESA.telefone.andrea}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-[var(--gold)] shrink-0" />
                <a href={WA.tiago()} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--gold)] transition-colors">
                  Tiago: {EMPRESA.telefone.tiago}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs tracking-wide">
            © {year} AT Gestão de Negócios e Contabilidade. Todos os direitos reservados.
          </p>
          <p className="text-white/30 text-xs">
            <a href="https://atgnc.com.br" className="hover:text-[var(--gold)] transition-colors">atgnc.com.br</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
