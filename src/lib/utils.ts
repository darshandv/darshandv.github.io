/** Prefix an internal path with the configured base (SPEC rule: every internal
 *  href goes through this, so the site works at /portfolio-page/ and at /). */
export function url(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  return base + (path.startsWith('/') ? path : `/${path}`);
}

const fmt = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'short',
  day: '2-digit',
  timeZone: 'UTC',
});

/** `2026-07-11` → `JUL 11, 2026` (rendered inside .meta, so CSS uppercases) */
export function formatDate(d: Date): string {
  return fmt.format(d);
}

export function isoDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}
