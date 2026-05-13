'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const schema = z.object({
  nome: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('E-mail inválido'),
  telefone: z.string().min(10, 'Telefone deve ter pelo menos 10 dígitos'),
  tipoEmpresa: z.enum(['MEI', 'ME', 'EPP', 'Médio Porte', 'Pessoa Física']),
  assunto: z.enum(['Contabilidade', 'Consultoria', 'Reforma Tributária', 'Capacitação', 'Outro']),
  mensagem: z.string().min(20, 'Mensagem deve ter pelo menos 20 caracteres'),
  lgpd: z.literal(true, { error: 'Você deve aceitar a política de privacidade' }),
});

type FormData = z.infer<typeof schema>;

interface ContactFormProps {
  assuntoPreenchido?: FormData['assunto'];
}

export function ContactForm({ assuntoPreenchido }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: assuntoPreenchido ? { assunto: assuntoPreenchido } : undefined,
  });

  async function onSubmit(data: FormData) {
    setStatus('loading');
    try {
      const res = await fetch('/api/contato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Erro ao enviar');
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  }

  const fieldClass = (hasError: boolean) =>
    `w-full px-4 py-3 bg-white border text-sm text-[var(--ink)] placeholder:text-[var(--ink-muted)] focus:outline-none focus:border-[var(--gold)] transition-colors ${
      hasError ? 'border-red-400' : 'border-[var(--border)]'
    }`;

  const labelClass = 'block text-xs font-medium tracking-[0.15em] uppercase text-[var(--ink-muted)] mb-2';

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
        <CheckCircle size={40} className="text-[var(--gold)]" />
        <h3 className="font-cormorant text-[var(--text-xl)] text-[var(--navy)]">
          Mensagem enviada com sucesso!
        </h3>
        <p className="text-[var(--ink-muted)] text-sm">
          Entraremos em contato em breve.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-4 text-[var(--gold)] text-xs tracking-[0.15em] uppercase hover:underline"
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="nome" className={labelClass}>Nome *</label>
          <input
            id="nome"
            type="text"
            placeholder="Seu nome completo"
            className={fieldClass(!!errors.nome)}
            {...register('nome')}
          />
          {errors.nome && <p className="text-red-500 text-xs mt-1">{errors.nome.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>E-mail *</label>
          <input
            id="email"
            type="email"
            placeholder="seu@email.com"
            className={fieldClass(!!errors.email)}
            {...register('email')}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="telefone" className={labelClass}>Telefone *</label>
          <input
            id="telefone"
            type="tel"
            placeholder="(27) 99999-9999"
            className={fieldClass(!!errors.telefone)}
            {...register('telefone')}
          />
          {errors.telefone && <p className="text-red-500 text-xs mt-1">{errors.telefone.message}</p>}
        </div>

        <div>
          <label htmlFor="tipoEmpresa" className={labelClass}>Tipo de Empresa *</label>
          <select
            id="tipoEmpresa"
            className={fieldClass(!!errors.tipoEmpresa)}
            {...register('tipoEmpresa')}
          >
            <option value="">Selecione...</option>
            <option value="MEI">MEI</option>
            <option value="ME">ME</option>
            <option value="EPP">EPP</option>
            <option value="Médio Porte">Médio Porte</option>
            <option value="Pessoa Física">Pessoa Física</option>
          </select>
          {errors.tipoEmpresa && <p className="text-red-500 text-xs mt-1">{errors.tipoEmpresa.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="assunto" className={labelClass}>Assunto *</label>
        <select
          id="assunto"
          className={fieldClass(!!errors.assunto)}
          {...register('assunto')}
        >
          <option value="">Selecione o assunto...</option>
          <option value="Contabilidade">Contabilidade</option>
          <option value="Consultoria">Consultoria</option>
          <option value="Reforma Tributária">Reforma Tributária</option>
          <option value="Capacitação">Capacitação</option>
          <option value="Outro">Outro</option>
        </select>
        {errors.assunto && <p className="text-red-500 text-xs mt-1">{errors.assunto.message}</p>}
      </div>

      <div>
        <label htmlFor="mensagem" className={labelClass}>Mensagem *</label>
        <textarea
          id="mensagem"
          rows={5}
          placeholder="Descreva como podemos ajudar..."
          className={fieldClass(!!errors.mensagem)}
          {...register('mensagem')}
        />
        {errors.mensagem && <p className="text-red-500 text-xs mt-1">{errors.mensagem.message}</p>}
      </div>

      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            className="mt-0.5 w-4 h-4 accent-[var(--gold)]"
            {...register('lgpd')}
          />
          <span className="text-xs text-[var(--ink-muted)] leading-relaxed">
            Li e aceito a{' '}
            <a href="/politica-de-privacidade" className="text-[var(--gold)] hover:underline">
              Política de Privacidade
            </a>{' '}
            e concordo com o tratamento dos meus dados para fins de contato. *
          </span>
        </label>
        {errors.lgpd && <p className="text-red-500 text-xs mt-1">{errors.lgpd.message}</p>}
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 text-red-700 text-sm">
          <AlertCircle size={16} />
          Ocorreu um erro ao enviar. Por favor, tente novamente.
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[var(--navy)] text-white text-xs font-medium tracking-[0.21em] uppercase hover:bg-[var(--navy-light)] disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200"
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send size={16} />
            Enviar Mensagem
          </>
        )}
      </button>
    </form>
  );
}
