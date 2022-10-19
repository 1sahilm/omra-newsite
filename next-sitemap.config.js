/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://omrasolutions.com/",
  generateRobotsTxt: true, // (optional)
  generateIndexSitemap: true,
  sitemapBaseFileName: "sitemap",
  // ...other options
};
