/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://marmorarialapidarte.com.br',
  generateRobotsTxt: true,
  exclude: [
    '/gerenciamento',
    '/login',
    '/granitos',
    '/marmores',
    '/quartzitos',
    '/nobilestone',
    '/api/*'
  ],
}