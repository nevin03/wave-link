/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",

  reactCompiler: true,
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,

  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": "./src",
    };

    config.resolve.extensions.push(".js", ".jsx", ".ts", ".tsx");

    return config;
  },
};

export default nextConfig;
