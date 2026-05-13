'use client';

import { motion } from 'framer-motion';
import { DEPOIMENTOS } from '@/lib/data/empresa';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { fadeInUp, stagger } from '@/lib/animations';

export function Testimonials() {
  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20">
          <SectionHeader
            eyebrow="Depoimentos"
            title="O que dizem nossos"
            titleAccent="clientes"
            centered
          />
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {DEPOIMENTOS.map((dep, i) => (
            <motion.div
              key={dep.autor}
              variants={fadeInUp}
              className="relative p-10 bg-[var(--cream)]"
            >
              {/* Large decorative quote */}
              <span
                className="absolute top-4 right-8 font-cormorant text-[var(--gold)]/15 leading-none select-none"
                style={{ fontSize: '120px' }}
                aria-hidden="true"
              >
                "
              </span>

              <div className="relative">
                <div className="w-8 h-px bg-[var(--gold)] mb-8" />

                <p
                  className="font-cormorant text-[var(--navy)] font-light leading-relaxed mb-10"
                  style={{ fontSize: 'clamp(18px, 1.6vw, 22px)' }}
                >
                  {dep.texto}
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-px bg-[var(--gold)]" />
                  <div>
                    <p className="font-medium text-[var(--navy)] text-sm">{dep.autor}</p>
                    <p className="text-[var(--ink-muted)] text-xs tracking-wide mt-0.5">{dep.cargo}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
