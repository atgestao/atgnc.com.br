import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://atgnc.com.br';
  const now = new Date('2026-06-02');

  const staticPages = [
    { url: base, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${base}/sobre`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${base}/servicos`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${base}/equipe`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${base}/blog`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${base}/contato`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${base}/reforma-tributaria`, priority: 0.9, changeFrequency: 'monthly' as const },
  ];

  const blogPosts = [
    'reforma-tributaria-o-que-muda-para-sua-empresa',
    'como-escolher-o-regime-tributario-ideal',
    'planejamento-financeiro-para-pequenas-empresas',
  ].map((slug) => ({
    url: `${base}/blog/${slug}`,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  }));

  return [...staticPages, ...blogPosts].map((page) => ({
    ...page,
    lastModified: now,
  }));
}
