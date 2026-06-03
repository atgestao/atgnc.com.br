import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { TeamPreview } from '@/components/sections/TeamPreview';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTABanner } from '@/components/sections/CTABanner';

export const metadata: Metadata = {
  alternates: { canonical: 'https://atgnc.com.br' },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesGrid />
      <WhyChooseUs />
      <TeamPreview />
      <Testimonials />
      <CTABanner />
    </>
  );
}
