'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Shield, Clock, Star } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { fadeInUp, stagger } from '@/lib/animations';

const DIFERENCIAIS = [
  {
    icon: CheckCircle,
    titulo: 'Expertise Comprovada',
    descricao:
      'Mais de 12 anos de atuação no mercado, atendendo empresas de todos os portes e segmentos com excelência técnica.',
  },
  {
    icon: Shield,
    titulo: 'Segurança Jurídica',
    descricao:
      'Compliance total com a legislação vigente, incluindo as últimas mudanças da reforma tributária em curso.',
  },
  {
    icon: Clock,
    titulo: 'Atendimento Ágil',
    descricao:
      'Respostas rápidas e soluções eficientes. Não deixamos seu negócio esperar quando o tempo é essencial.',
  },
  {
    icon: Star,
    titulo: 'Foco no Resultado',
    descricao:
      'Mais do que contabilidade, entregamos inteligência financeira para que você tome as melhores decisões.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              eyebrow="Por que nos escolher"
              title="Contabilidade que vai além"
              titleAccent="dos números"
              description="Somos parceiros estratégicos do seu negócio. Nossa missão é transformar dados financeiros em decisões inteligentes que impulsionam o crescimento."
            />

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8"
            >
              <a
                href="/sobre"
                className="inline-flex items-center gap-2 text-[var(--gold)] text-xs font-medium tracking-[0.21em] uppercase hover:gap-4 transition-all duration-200"
              >
                Conheça nossa história →
              </a>
            </motion.div>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {DIFERENCIAIS.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.titulo} variants={fadeInUp} className="p-6 bg-[var(--cream)]">
                  <Icon size={24} className="text-[var(--gold)] mb-4" />
                  <h3 className="font-cormorant text-[var(--text-lg)] font-semibold text-[var(--navy)] mb-2">
                    {item.titulo}
                  </h3>
                  <p className="text-[var(--ink-muted)] text-sm leading-relaxed">
                    {item.descricao}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
