import BuilderDevTools from "@builder.io/dev-tools/next";

/** @type {import('next').NextConfig} */
const nextConfig = BuilderDevTools()({
  trailingSlash: true,
  sassOptions: {
    includePaths: ["styles"],
  },
  images: {
    remotePatterns: [
      {
        hostname: "images.ctfassets.net",
      },
      {
        hostname: "cdn.builder.io",
      },
    ],
    minimumCacheTTL: 1500000,
  },
});

export default nextConfig;
