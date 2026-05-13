'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { STATS } from '@/lib/data/empresa';
import { fadeInUp, stagger } from '@/lib/animations';

function AnimatedNumber({ value }: { value: string }) {
  const [display, setDisplay] = useState('0');
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;

    const numeric = parseInt(value.replace(/\D/g, ''), 10);
    if (isNaN(numeric)) {
      setDisplay(value);
      return;
    }

    const suffix = value.replace(/[\d]/g, '');
    const duration = 1200;
    const steps = 40;
    const stepTime = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += numeric / steps;
      if (current >= numeric) {
        setDisplay(`${numeric}${suffix}`);
        clearInterval(timer);
      } else {
        setDisplay(`${Math.floor(current)}${suffix}`);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, value]);

  return <span ref={ref}>{display}</span>;
}

export function Stats() {
  return (
    <section className="bg-[var(--navy)] py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className={`py-10 px-6 text-center ${
                i === STATS.length - 1
                  ? ''
                  : i % 2 === 1
                    ? 'lg:border-r lg:border-[var(--gold)]/20'
                    : 'border-r border-[var(--gold)]/20'
              }`}
            >
              <div
                className="font-cormorant font-light text-[var(--gold)] mb-2"
                style={{ fontSize: 'var(--text-5xl)' }}
              >
                <AnimatedNumber value={stat.valor} />
              </div>
              <p className="text-white/60 text-xs tracking-[0.21em] uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
