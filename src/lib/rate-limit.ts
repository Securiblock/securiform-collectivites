// Limiteur d'envois en mémoire, par clé (adresse IP).
// Suffisant pour un petit site : la mémoire est propre à chaque instance du serveur,
// donc sur un hébergement multi-instances la limite s'applique par instance.

type Window = { limit: number; durationMs: number };

const hits = new Map<string, number[]>();
const MAX_KEYS = 5000;

export function isRateLimited(key: string, windows: Window[]): boolean {
  const now = Date.now();
  const longest = Math.max(...windows.map((w) => w.durationMs));
  const recent = (hits.get(key) ?? []).filter((time) => now - time < longest);

  const limited = windows.some((w) => recent.filter((time) => now - time < w.durationMs).length >= w.limit);

  if (!limited) {
    recent.push(now);
  }
  hits.set(key, recent);

  // Évite que la table grossisse indéfiniment.
  if (hits.size > MAX_KEYS) {
    for (const [storedKey, times] of hits) {
      if (times.every((time) => now - time >= longest)) {
        hits.delete(storedKey);
      }
    }
  }

  return limited;
}
