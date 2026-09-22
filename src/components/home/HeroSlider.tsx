"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from "react";
import type { KeyboardEvent, TouchEvent, FocusEvent } from "react";
import Link from "next/link";
import styles from "./HeroSlider.module.css";

export type HeroSliderSlide = {
  id: string;
  title: string;
  description: string;
  codesLabel: string;
  codes: string[];
  ctaLabel: string;
  ctaHref: string;
  visual: ReactNode;
};

const DELAY = 7000;
const TEXT_ID = "home-hero-slides";
const REDUCE_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(onChange: () => void) {
  const mql = window.matchMedia(REDUCE_MOTION_QUERY);
  mql.addEventListener("change", onChange);
  return () => mql.removeEventListener("change", onChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia(REDUCE_MOTION_QUERY).matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export function HeroSlider({ heroH1, slides }: { heroH1: string; slides: HeroSliderSlide[] }) {
  const total = slides.length;
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(true);
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );
  const [live, setLive] = useState<"off" | "polite">("off");
  const [paused, setPaused] = useState(false);
  const [tabVisible, setTabVisible] = useState(true);
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback(
    (index: number, userAction: boolean) => {
      setCurrent(((index % total) + total) % total);
      setLive(userAction ? "polite" : "off");
    },
    [total]
  );

  useEffect(() => {
    function onVisibilityChange() {
      setTabVisible(!document.hidden);
    }
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

  useEffect(() => {
    if (!playing || paused || !tabVisible || prefersReducedMotion) return;
    const id = setTimeout(() => {
      setCurrent((c) => (c + 1) % total);
      setLive("off");
    }, DELAY);
    return () => clearTimeout(id);
  }, [playing, paused, tabVisible, prefersReducedMotion, total, current]);

  const isAutoPlaying = playing && !prefersReducedMotion;

  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if ((event.target as HTMLElement).closest("a")) return;
    if (event.key === "ArrowLeft") goTo(current - 1, true);
    if (event.key === "ArrowRight") goTo(current + 1, true);
  }

  function handleTouchStart(event: TouchEvent) {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  }

  function handleTouchEnd(event: TouchEvent) {
    if (touchStartX.current === null) return;
    const dx = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) goTo(current + (dx < 0 ? 1 : -1), true);
    touchStartX.current = null;
  }

  function handleBlur(event: FocusEvent<HTMLElement>) {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setPaused(false);
    }
  }

  return (
    <section
      className={styles.hero}
      aria-roledescription="carrousel"
      aria-label="Nos principales formations"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className={`container ${styles.inner}`}>
        <div className={styles.heroCopy}>
          <h1 className={styles.heroH1}>{heroH1}</h1>

          <div className={styles.slidesText} id={TEXT_ID} aria-live={live}>
            {slides.map((slide, index) => (
              <article
                key={slide.id}
                className={`${styles.slideText} ${index === current ? styles.isActive : ""}`}
                role="group"
                aria-roledescription="diapositive"
                aria-label={`${index + 1} sur ${total}`}
              >
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                <ul className={styles.codes} aria-label={slide.codesLabel}>
                  {slide.codes.map((code) => (
                    <li key={code}>{code}</li>
                  ))}
                </ul>
                <div className={styles.slideActions}>
                  <Link className="btn btn-primary" href={slide.ctaHref}>
                    {slide.ctaLabel}
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.sliderControls}>
            <button
              type="button"
              className={styles.ctrl}
              aria-controls={TEXT_ID}
              aria-label="Diapositive précédente"
              onClick={() => goTo(current - 1, true)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M15 5 8 12l7 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              className={styles.ctrl}
              aria-controls={TEXT_ID}
              aria-label="Diapositive suivante"
              onClick={() => goTo(current + 1, true)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="m9 5 7 7-7 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <ul className={styles.dots} aria-label="Choisir une diapositive">
              {slides.map((slide, index) => (
                <li key={slide.id}>
                  <button
                    type="button"
                    aria-current={index === current}
                    aria-label={`Afficher la diapositive ${index + 1} : ${slide.title}`}
                    onClick={() => goTo(index, true)}
                  />
                </li>
              ))}
            </ul>
            <span className={styles.slideCount} aria-hidden="true">
              {current + 1} / {total}
            </span>
            <button
              type="button"
              className={styles.ctrl}
              aria-label={isAutoPlaying ? "Mettre en pause le défilement" : "Lancer le défilement"}
              onClick={() => setPlaying((value) => !value)}
            >
              {isAutoPlaying ? (
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 5v14M16 5v14" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 5v14l12-7z" fill="currentColor" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.slidesMedia}>
            {slides.map((slide, index) => (
              <figure
                key={slide.id}
                className={`${styles.slideMedia} ${index === current ? styles.isActive : ""}`}
              >
                <div className={styles.mediaClip}>{slide.visual}</div>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
