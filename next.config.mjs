/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    env: {
        NEXT_PUBLIC_ENV: process.env.NEXT_PUBLIC_ENV,
      },
      output: 'export',
  basePath: isProd ? '/zivaqpharma' : '',
};

export default nextConfig;
