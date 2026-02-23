import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // required for GitHub Pages
  },
  basePath: "/abhilash-portfolio", // 👈 repo name
  assetPrefix: "/abhilash-portfolio/",
};

export default nextConfig;
