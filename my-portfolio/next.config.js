/** @type {import('next').NextConfig} */

// DEPLOY_TARGET=ece builds the static bundle for https://ece.uwaterloo.ca/~a235rahm/
// Unset (local dev + Vercel) keeps the site at the domain root on the normal build.
const isEce = process.env.DEPLOY_TARGET === 'ece'
const basePath = isEce ? '/~a235rahm' : ''

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  ...(isEce && {
    output: 'export',
    basePath,
    // Emit about-me/index.html rather than about-me.html so Apache's
    // DirectoryIndex serves the route without a rewrite rule.
    trailingSlash: true,
    // No Next image server on Apache.
    images: { unoptimized: true },
  }),
}

module.exports = nextConfig
