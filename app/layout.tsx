import type { Metadata } from 'next';
import { Cormorant_Garamond, Jost } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const jost = Jost({
  variable: '--font-jost',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://atgnc.com.br'),
  title: {
    default: 'AT Gestão | Contabilidade e Consultoria Empresarial — Cariacica, ES',
    template: '%s | AT Gestão',
  },
  description:
    'Escritório de contabilidade especializado em reforma tributária, consultoria empresarial e capacitação de equipes. Andréa Gonçalves e Tiago Cardoso, Contadores CRC/ES. Cariacica e região.',
  keywords: [
    'contabilidade cariacica',
    'contador cariacica es',
    'contabilidade espírito santo',
    'reforma tributária contador',
    'abrir empresa cariacica',
    'consultoria empresarial es',
    'simples nacional cariacica',
    'atgnc contabilidade',
    'AT gestão contabilidade',
  ],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://atgnc.com.br',
    siteName: 'AT Gestão de Negócios e Contabilidade',
    images: [{ url: 'https://atgnc.com.br/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: { canonical: 'https://atgnc.com.br' },
  robots: { index: true, follow: true },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'AccountingService',
  '@id': 'https://atgnc.com.br',
  name: 'AT Gestão de Negócios e Contabilidade',
  url: 'https://atgnc.com.br',
  telephone: '+55-27-99316-9155',
  email: 'mkt.atgestao@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'R. Waldemar Siepierski, 200',
    addressLocality: 'Cariacica',
    addressRegion: 'ES',
    postalCode: '29147-600',
    addressCountry: 'BR',
  },
  openingHours: 'Mo-Fr 08:00-18:00',
  employee: [
    { '@type': 'Person', name: 'Andréa Gonçalves', jobTitle: 'Contadora' },
    { '@type': 'Person', name: 'Tiago Cardoso', jobTitle: 'Contador' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${jost.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[var(--cream)] text-[var(--ink)]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
