"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { NavLink } from "@/src/content/home";
import styles from "./MobileNav.module.css";

type Props = {
  navLinks: NavLink[];
  cta: NavLink;
};

export function MobileNav({ navLinks, cta }: Props) {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button
        ref={toggleRef}
        type="button"
        className={styles.navToggle}
        aria-expanded={open}
        aria-controls="menu-principal"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        onClick={() => setOpen((value) => !value)}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M3 6h18M3 12h18M3 18h18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <nav
        id="menu-principal"
        aria-label="Navigation principale"
        className={`${styles.mainNav} ${open ? styles.isOpen : ""}`}
      >
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} aria-current={link.href === "/" ? "page" : undefined}>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href={cta.href} className="btn btn-primary" onClick={() => setOpen(false)}>
              {cta.label}
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
