import { commitmentsSectionHead, commitments, type CommitmentIconKey } from "@/src/content/home";
import styles from "./Commitments.module.css";

function CommitmentIcon({ icon }: { icon: CommitmentIconKey }) {
  switch (icon) {
    case "etude":
      return (
        <svg width="40" height="40" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M9 11h6M9 15h4M8 3h8l3 3v15H5V3h3Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "france":
      return (
        <svg width="40" height="40" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 21s-6-5.6-6-11a6 6 0 0 1 12 0c0 5.4-6 11-6 11Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <circle cx="12" cy="10" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case "groupes":
      return (
        <svg width="40" height="40" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="9" cy="8" r="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path
            d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M16 5a3 3 0 0 1 0 6m2 3c2 .8 3 3 3 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "reglementation":
      return (
        <svg width="40" height="40" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M20 12a8 8 0 1 1-2.3-5.7M20 4v5h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

export function Commitments() {
  return (
    <section className={`section ${styles.commitments}`} aria-labelledby="titre-engagements">
      <div className="container">
        <div className="section-head">
          <h2 id="titre-engagements">{commitmentsSectionHead.title}</h2>
        </div>
        <ul className={styles.commitGrid}>
          {commitments.map((item) => (
            <li key={item.title}>
              <CommitmentIcon icon={item.icon} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
