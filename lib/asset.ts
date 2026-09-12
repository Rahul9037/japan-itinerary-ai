/** Prefix public files so they work on GitHub Pages (`/japan-itinerary-ai`) and locally. */
export function assetPath(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!path.startsWith("/")) return `${base}/${path}`;
  return `${base}${path}`;
}
