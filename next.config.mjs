/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",

  reactCompiler: true,
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,

  // Fix alias for Turbopack (Next.js 16)
  turbopack: {
    resolveAlias: {
      "@": "./src",
    }
  }
};

export default nextConfig;
