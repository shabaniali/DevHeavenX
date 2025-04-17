/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/DevHeavenX" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/DevHeavenX/" : "",
};

module.exports = nextConfig;
