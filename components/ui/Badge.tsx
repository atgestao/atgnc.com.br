interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'navy' | 'outline-gold';
  className?: string;
}

export function Badge({
  children,
  variant = 'outline-gold',
  className = '',
}: BadgeProps) {
  const variants = {
    gold: 'bg-[var(--gold)] text-[var(--navy)]',
    navy: 'bg-[var(--navy)] text-white',
    'outline-gold': 'border border-[var(--gold)] text-[var(--gold)]',
  };

  return (
    <span
      className={`inline-block px-3 py-1 text-[11px] font-medium tracking-[0.21em] uppercase ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
