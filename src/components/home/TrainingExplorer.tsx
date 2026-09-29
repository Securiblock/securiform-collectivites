"use client";

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import styles from "./TrainingTiles.module.css";

export type ExplorerItem = {
  id: string;
  label: string;
  meta: string;
  thumb: ReactNode;
  panel: ReactNode;
};

export function TrainingExplorer({ items }: { items: ExplorerItem[] }) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();

  function select(index: number) {
    setActive(index);
    // Sur mobile, la liste défile horizontalement : on y ramène l'onglet choisi.
    const tab = tabRefs.current[index];
    const list = tab?.parentElement;
    if (tab && list && list.scrollWidth > list.clientWidth) {
      list.scrollTo({ left: tab.offsetLeft - list.offsetLeft - 8, behavior: "smooth" });
    }
  }

  function focusTab(index: number) {
    const next = (index + items.length) % items.length;
    select(next);
    tabRefs.current[next]?.focus({ preventScroll: true });
  }

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const keys: Record<string, number> = {
      ArrowDown: index + 1,
      ArrowRight: index + 1,
      ArrowUp: index - 1,
      ArrowLeft: index - 1,
      Home: 0,
      End: items.length - 1,
    };
    if (event.key in keys) {
      event.preventDefault();
      focusTab(keys[event.key]);
    }
  }

  return (
    <div className={styles.explorer}>
      <div className={styles.tabs} role="tablist" aria-label="Thématiques de formation" aria-orientation="vertical">
        {items.map((item, index) => {
          const selected = index === active;
          return (
            <button
              key={item.id}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              type="button"
              role="tab"
              id={`${baseId}-tab-${item.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${item.id}`}
              tabIndex={selected ? 0 : -1}
              className={styles.tab}
              onClick={() => select(index)}
              onKeyDown={(event) => onKeyDown(event, index)}
            >
              <span className={styles.tabThumb}>{item.thumb}</span>
              <span className={styles.tabText}>
                <span className={styles.tabLabel}>{item.label}</span>
                <span className={styles.tabMeta}>{item.meta}</span>
              </span>
              <span className={styles.tabArrow} aria-hidden="true">
                →
              </span>
            </button>
          );
        })}
      </div>

      {items.map((item, index) => (
        <div
          key={item.id}
          role="tabpanel"
          id={`${baseId}-panel-${item.id}`}
          aria-labelledby={`${baseId}-tab-${item.id}`}
          hidden={index !== active}
          className={styles.panel}
        >
          {item.panel}
        </div>
      ))}
    </div>
  );
}
