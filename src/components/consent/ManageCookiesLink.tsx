"use client";

import { useConsentContext } from "@/src/lib/consent/ConsentContext";
import styles from "./ManageCookiesLink.module.css";

export function ManageCookiesLink() {
  const { openPreferences } = useConsentContext();

  return (
    <button type="button" className={styles.link} onClick={openPreferences}>
      Gérer mes cookies
    </button>
  );
}
