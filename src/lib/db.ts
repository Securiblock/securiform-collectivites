import { neon, type NeonQueryFunction } from "@neondatabase/serverless";

// Connexion Postgres (Neon) — à n'utiliser que côté serveur.
// Créée à la première requête pour que le build ne dépende pas de DATABASE_URL.
let client: NeonQueryFunction<false, false> | null = null;

export function sql(): NeonQueryFunction<false, false> {
  if (!client) {
    const url = process.env.DATABASE_URL;
    if (!url) {
      throw new Error("DATABASE_URL manquante : impossible de se connecter à la base de données.");
    }
    client = neon(url);
  }
  return client;
}
