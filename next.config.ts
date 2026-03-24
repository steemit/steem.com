import type { NextConfig } from "next";

/**
 * GitHub Pages project URL is https://<org>.github.io/<repo>/, which needs
 * basePath `/<repo>`. A custom apex domain (e.g. steem.com) is served from `/`,
 * so the same basePath would produce `steem.com/steem.com/...` for assets.
 * Use NEXT_PUBLIC_BASE_PATH only when you must serve the github.io project URL;
 * leave unset or empty for a custom domain at the site root.
 */
function basePathFromEnv(): string | undefined {
  const raw = process.env.NEXT_PUBLIC_BASE_PATH?.trim();
  if (!raw || raw === "/") {
    return undefined;
  }
  return raw.startsWith("/") ? raw : `/${raw}`;
}

const basePath = basePathFromEnv();

const nextConfig: NextConfig = {
  output: "export",
  distDir: "out",
  trailingSlash: true,
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
