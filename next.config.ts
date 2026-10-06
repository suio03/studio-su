import type { NextConfig } from "next";

// The site is a single static page, so it is exported as plain files to `out/`
// and can be served by any static host (Cloudflare Pages, Netlify, …).
const nextConfig: NextConfig = {
  output: "export",
};

export default nextConfig;
