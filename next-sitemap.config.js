/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.drone-pilot.co.uk', // ← замени на свой домен
    generateRobotsTxt: true, // генерирует robots.txt
    changefreq: 'monthly',
    priority: 0.7,
    sitemapSize: 7000,
}
