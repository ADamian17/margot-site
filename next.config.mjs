import BuilderDevTools from "@builder.io/dev-tools/next";

/** @type {import('next').NextConfig} */
const nextConfig = BuilderDevTools()(BuilderDevTools()({
  trailingSlash: true,
  sassOptions: {
    includePaths: ["styles"],
  },
  images: {
    domains: ["images.ctfassets.net"],
    minimumCacheTTL: 1500000,
  },
}));

export default nextConfig;
