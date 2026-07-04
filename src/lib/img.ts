/**
 * Route a remote image through the wsrv.nl image CDN to resize + convert to WebP
 * on the fly. Turns multi-MB source PNGs into ~30–150 KB WebP at display size.
 *
 * Local assets ("/logo.png") and data URIs are returned untouched. If the proxy
 * ever fails at runtime, callers fall back to the original src via `onError`.
 */
export function optimizedImage(src: string, width: number, quality = 78): string {
  if (!src || src.startsWith("/") || src.startsWith("data:")) return src;
  const enc = encodeURIComponent(src);
  return `https://wsrv.nl/?url=${enc}&w=${width}&output=webp&q=${quality}`;
}

/** onError handler that swaps to the original source once (no infinite loop). */
export function fallbackToOriginal(original: string) {
  return (e: React.SyntheticEvent<HTMLImageElement>) => {
    const el = e.currentTarget;
    if (el.src !== original) el.src = original;
  };
}
