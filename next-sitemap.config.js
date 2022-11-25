/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.supereasygame.com",
  generateRobotsTxt: true, // (optional)
  // ...other options
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: [
          "cdn.supereasygame.com",
          "cdn2.supereasygame.com",
          "cdn3.supereasygame.com",
          "gamecdn.supereasygame.com",
        ],
      },
    ],
  },
};

// export default config;
