/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEWS_ORG_API: process.env.NEWS_ORG_API,
    NEWS_ORG_API_KEY: process.env.NEWS_ORG_API_KEY,
    NY_TIMES_API: process.env.NY_TIMES_API,
    NY_TIMES_API_KEY: process.env.NY_TIMES_API_KEY,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
