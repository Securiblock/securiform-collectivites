"use client";

import { useEffect, useRef, useState } from "react";
import { stats, type Stat } from "@/src/content/home";
import styles from "./StatsBand.module.css";

const DURATION = 1800;

function easeOutQuad(t: number) {
  return 1 - (1 - t) * (1 - t);
}

function useCountUp(target: number, active: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reduced ? 1 : DURATION;

    let frame: number;
    const start = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      setValue(target * easeOutQuad(progress));
      if (progress < 1) frame = requestAnimationFrame(tick);
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target]);

  return value;
}

function StatValue({ stat, active }: { stat: Stat; active: boolean }) {
  const target = stat.kind === "percent" ? stat.value : stat.minutes;
  const current = useCountUp(target, active);
  const done = active && current >= target;

  if (stat.kind === "percent") {
    return <p className={styles.value}>{current.toFixed(1).replace(".", ",")}%</p>;
  }

  return <p className={styles.value}>{done ? stat.finalLabel : `${Math.round(current)} min`}</p>;
}

export function StatsBand() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.stats} aria-label="Nos chiffres clés" ref={ref}>
      <div className={`container ${styles.grid}`}>
        {stats.map((stat) => (
          <div key={stat.label} className={styles.stat}>
            <StatValue stat={stat} active={active} />
            <p className={styles.label}>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
