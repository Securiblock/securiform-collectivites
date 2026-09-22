import Image from "next/image";
import { publicImageExists } from "@/src/lib/check-image";
import styles from "./Media.module.css";

type MediaProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
};

/**
 * Renders a cover-fit image, or a clean placeholder (hatched background +
 * expected path) when the file hasn't been supplied yet in `public/` — so
 * the build never breaks on a missing asset.
 */
export function Media({ src, alt, sizes, priority, className }: MediaProps) {
  const exists = publicImageExists(src);
  const wrapperClassName = [styles.media, !exists && styles.isMissing, className]
    .filter(Boolean)
    .join(" ");

  if (!exists) {
    return (
      <div className={wrapperClassName}>
        <span className={styles.missingLabel}>{src}</span>
      </div>
    );
  }

  return (
    <div className={wrapperClassName}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={styles.image} />
    </div>
  );
}
