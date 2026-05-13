import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--navy)] flex items-center justify-center px-6">
      <div className="text-center">
        <p className="font-cormorant text-[120px] font-light text-[var(--gold)]/20 leading-none mb-0">
          404
        </p>
        <div className="gold-line mx-auto mb-6" />
        <h1 className="font-cormorant font-light text-white text-[var(--text-3xl)] mb-4 leading-tight">
          Página não encontrada
        </h1>
        <p className="text-white/60 text-sm mb-10 max-w-sm mx-auto">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--gold)] text-[var(--navy)] text-xs font-medium tracking-[0.21em] uppercase hover:bg-[var(--gold-light)] transition-colors duration-200"
        >
          Voltar ao Início
        </Link>
      </div>
    </div>
  );
}
