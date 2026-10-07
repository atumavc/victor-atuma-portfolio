import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // Allow Cursor preview / tunnel hosts to load Next.js dev assets
  allowedDevOrigins: [
    "127.0.0.1",
    "localhost",
    "*.loca.lt",
    "*.localtunnel.me",
    "*.trycloudflare.com",
    "*.cursor.sh",
    "*.cursor.com",
  ],
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
