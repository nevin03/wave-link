/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',

  experimental: {
    reactCompiler: true,  // Move inside experimental
  },
  
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;