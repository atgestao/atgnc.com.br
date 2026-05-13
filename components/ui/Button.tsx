'use client';

import Link from 'next/link';
import { forwardRef } from 'react';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean;
}

const base =
  'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer';

const variants: Record<Variant, string> = {
  primary:
    'bg-[var(--gold)] text-[var(--navy)] hover:bg-[var(--gold-light)] focus-visible:outline-[var(--gold)]',
  secondary:
    'bg-[var(--navy)] text-white hover:bg-[var(--navy-light)] focus-visible:outline-[var(--navy)]',
  outline:
    'border border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--navy)] focus-visible:outline-[var(--gold)]',
  ghost:
    'text-[var(--navy)] hover:text-[var(--gold)] focus-visible:outline-[var(--gold)]',
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-xs tracking-[0.15em] uppercase',
  md: 'px-6 py-3 text-xs tracking-[0.21em] uppercase',
  lg: 'px-8 py-4 text-sm tracking-[0.21em] uppercase',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      href,
      external,
      children,
      className = '',
      ...props
    },
    ref
  ) => {
    const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={classes}
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
