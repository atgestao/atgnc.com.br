/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://atgnc.com.br',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  robotsTxtOptions: {
    additionalSitemaps: ['https://atgnc.com.br/sitemap.xml'],
  },
};
