'use client';

import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '@/lib/animations';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  titleAccent,
  description,
  centered = false,
  light = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`max-w-2xl ${centered ? 'mx-auto text-center' : ''}`}
    >
      {eyebrow && (
        <motion.p
          variants={fadeInUp}
          className="eyebrow mb-4"
        >
          {eyebrow}
        </motion.p>
      )}

      <motion.div variants={fadeInUp} className={`mb-4 ${centered ? 'flex justify-center' : ''}`}>
        <div className="gold-line" />
      </motion.div>

      <motion.h2
        variants={fadeInUp}
        className={`font-cormorant font-light leading-tight mb-5 ${
          light ? 'text-white' : 'text-[var(--navy)]'
        }`}
        style={{ fontSize: 'clamp(36px, 4vw, 52px)' }}
      >
        {title}
        {titleAccent && (
          <> <em className="text-[var(--gold)] not-italic">{titleAccent}</em></>
        )}
      </motion.h2>

      {description && (
        <motion.p
          variants={fadeInUp}
          className={`leading-relaxed ${
            light ? 'text-white/70' : 'text-[var(--ink-muted)]'
          }`}
          style={{ fontSize: 'clamp(15px, 1.3vw, 17px)' }}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
