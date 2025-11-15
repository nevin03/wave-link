/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',

  reactCompiler: true,      // Correct placement (Next.js 16)
  reactStrictMode: true,    // Good for production
  compress: true,           // Gzip compression
  poweredByHeader: false,   // Removes "X-Powered-By"
};

export default nextConfig;
