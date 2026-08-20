/**
 * Prefix for anything served out of public/.
 *
 * Next applies basePath automatically to next/link and to its own /_next
 * chunks, but NOT to next/image srcs (when unoptimized), raw <img>/<source>
 * src, plain <a href>, window.open, or metadata icons. Those must go through
 * asset() or they 404 when the site is served from a subpath such as
 * https://ece.uwaterloo.ca/~a235rahm/.
 *
 * Resolves to "" for local dev and Vercel, so call sites work on both.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

export function asset(path: string): string {
  return `${BASE_PATH}${path}`
}
