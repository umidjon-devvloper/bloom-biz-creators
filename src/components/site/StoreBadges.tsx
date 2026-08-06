/**
 * App Store / Google Play badges.
 *
 * The marks are inline SVG rather than hosted images on purpose: the usual
 * copies floating around are Google-cache thumbnails that expire, or PNGs from
 * clipart sites that block hotlinking and carry a baked-in white background.
 * Vector costs no request, survives a dead CDN, and stays sharp on retina.
 */

function AppleMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className={className}>
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.088-4.61 1.088zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
    </svg>
  );
}

/** The Play mark is four flat regions of one triangle — exact as polygons. */
function PlayMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className={className}>
      <polygon points="0,0 57.5,50 0,100" fill="#00A0FF" />
      <polygon points="0,0 75,37.5 57.5,50" fill="#FF3A44" />
      <polygon points="57.5,50 75,37.5 100,50 75,62.5" fill="#FFCE00" />
      <polygon points="0,100 57.5,50 75,62.5" fill="#00C853" />
    </svg>
  );
}

const SHELL =
  "group/badge inline-flex items-center gap-2.5 rounded-xl border border-white/15 bg-black px-4 py-2.5 text-white shadow-lg transition-all hover:border-white/35 hover:shadow-glow hover:-translate-y-0.5";

const TOP_LINE = "text-[9px] font-medium uppercase leading-none tracking-[0.14em] text-white/70";
const BOTTOM_LINE = "font-display text-[15px] font-semibold leading-tight tracking-tight";

export function AppStoreBadge({ href, className = "" }: { href: string; className?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download on the App Store"
      className={`${SHELL} ${className}`}
    >
      <AppleMark className="h-7 w-7 shrink-0 transition-transform duration-300 group-hover/badge:scale-110" />
      <span className="flex flex-col items-start">
        <span className={TOP_LINE}>Download on the</span>
        <span className={BOTTOM_LINE}>App Store</span>
      </span>
    </a>
  );
}

export function PlayStoreBadge({ href, className = "" }: { href: string; className?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get it on Google Play"
      className={`${SHELL} ${className}`}
    >
      <PlayMark className="h-6 w-6 shrink-0 transition-transform duration-300 group-hover/badge:scale-110" />
      <span className="flex flex-col items-start">
        <span className={TOP_LINE}>Get it on</span>
        <span className={BOTTOM_LINE}>Google Play</span>
      </span>
    </a>
  );
}

/** Renders whichever of the two links a project actually has. */
export function StoreBadges({
  appStore,
  playStore,
  className = "",
}: {
  appStore?: string;
  playStore?: string;
  className?: string;
}) {
  if (!appStore && !playStore) return null;
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {appStore && <AppStoreBadge href={appStore} />}
      {playStore && <PlayStoreBadge href={playStore} />}
    </div>
  );
}
