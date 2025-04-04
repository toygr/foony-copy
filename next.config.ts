import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "foony.com" },
      { hostname: "media.discordapp.net" }
    ],
  },

};

export default nextConfig;
