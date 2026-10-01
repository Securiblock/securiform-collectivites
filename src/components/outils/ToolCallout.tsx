import Link from "next/link";
import type { OutilIcon } from "@/src/content/outils";
import { ToolIcon } from "./ToolIcon";
import styles from "./ToolCallout.module.css";

export type ToolLink = {
  icon: OutilIcon;
  title: string;
  text: string;
  href: string;
  cta: string;
};

type ToolCalloutProps = ToolLink & { className?: string };

// Encart compact qui renvoie vers un outil (fiches formation, thématiques, contact).
export function ToolCallout({ icon, title, text, href, cta, className }: ToolCalloutProps) {
  return (
    <div className={`${styles.callout} ${className ?? ""}`}>
      <span className={styles.icon}>
        <ToolIcon name={icon} />
      </span>
      <div className={styles.body}>
        <p className={styles.title}>{title}</p>
        <p className={styles.text}>{text}</p>
        <Link className={styles.link} href={href}>
          {cta} <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}
