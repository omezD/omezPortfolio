import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this folder so a stray lockfile higher up is ignored.
  turbopack: { root: __dirname },
};

export default nextConfig;
