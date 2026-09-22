import { existsSync } from "node:fs";
import path from "node:path";

/**
 * Checks whether a file referenced by its public URL (e.g. "/images/x.webp")
 * actually exists in `public/`. Used to render a placeholder instead of
 * passing a non-existent path to next/image, which would break the build.
 * Server-only: import only from Server Components.
 */
export function publicImageExists(publicPath: string): boolean {
  const relative = publicPath.replace(/^\/+/, "");
  return existsSync(path.join(process.cwd(), "public", relative));
}
