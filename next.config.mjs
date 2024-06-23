import BuilderDevTools from "@builder.io/dev-tools/next";

/** @type {import('next').NextConfig} */
const nextConfig = BuilderDevTools()({
  trailingSlash: true,
  sassOptions: {
    includePaths: ["styles"],
  },
  images: {
    domains: ["images.ctfassets.net", "cdn.builder.io"],
    minimumCacheTTL: 1500000,
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
});

export default nextConfig;
