import Link from "next/link";
import { servicesSectionHead, serviceRows, type ServiceIconKey } from "@/src/content/home";
import styles from "./TrainingsByService.module.css";

const ICON_PATHS: Record<Exclude<ServiceIconKey, "erp">, string> = {
  "espaces-verts": "M12 22V11M12 11c0-4 3-7 7-7 0 4-3 7-7 7Zm0 3c0-3.3-2.7-6-6-6 0 3.3 2.7 6 6 6Z",
  voirie: "M12 3 4 21h16L12 3Zm-2.5 12h5M8.2 18h7.6",
  collecte: "M4 7h16M9 7V4h6v3m-9 0 1 13h10l1-13M10 11v6m4-6v6",
  batiments: "M3 21h18M5 21V9l7-5 7 5v12M10 21v-6h4v6",
  vehicules: "M3 13l2-6h14l2 6v5h-2m-14 0H3v-5h18M7 18a2 2 0 1 0 0 .1M17 18a2 2 0 1 0 0 .1",
};

function ServiceIcon({ icon }: { icon: ServiceIconKey }) {
  if (icon === "erp") {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 21s-7-4.4-7-10.2A4.3 4.3 0 0 1 12 8a4.3 4.3 0 0 1 7 2.8C19 16.6 12 21 12 21Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M12 11v5m-2.5-2.5h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d={ICON_PATHS[icon]}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TrainingsByService() {
  return (
    <section className="section" aria-labelledby="titre-services">
      <div className="container">
        <div className="section-head">
          <h2 id="titre-services">{servicesSectionHead.title}</h2>
          <p>{servicesSectionHead.description}</p>
        </div>

        <ul className={styles.servicesList}>
          {serviceRows.map((row) => (
            <li key={row.title} className={styles.serviceRow}>
              <h3>
                <ServiceIcon icon={row.icon} />
                {row.title}
              </h3>
              <div>
                <p>{row.description}</p>
                <ul className={styles.serviceLinks}>
                  {row.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
