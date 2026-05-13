'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { DEPOIMENTOS } from '@/lib/data/empresa';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { fadeInUp, stagger } from '@/lib/animations';

export function Testimonials() {
  return (
    <section className="py-24 bg-[var(--cream)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
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
          {DEPOIMENTOS.map((dep) => (
            <motion.div
              key={dep.autor}
              variants={fadeInUp}
              className="bg-white p-8 border border-[var(--border)]"
            >
              <Quote size={24} className="text-[var(--gold)] mb-6 opacity-60" />

              <p
                className="font-cormorant text-[var(--navy)] font-light leading-relaxed mb-8"
                style={{ fontSize: 'var(--text-lg)' }}
              >
                &ldquo;{dep.texto}&rdquo;
              </p>

              <div>
                <p className="font-medium text-[var(--navy)] text-sm">{dep.autor}</p>
                <p className="text-[var(--ink-muted)] text-xs tracking-wide mt-0.5">{dep.cargo}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
