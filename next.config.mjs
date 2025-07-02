/** @type {import('next').NextConfig} */
const isGithubPages = process.env.NODE_ENV === 'production';

const nextConfig = {
   env: {
    NEXT_PUBLIC_ENV: process.env.NEXT_PUBLIC_ENV,
  },
  images: { unoptimized: true },
  // output: isGithubPages ? 'export' : undefined,
  output: 'export',
  basePath: '',
  assetPrefix: '',
};

export default nextConfig;
