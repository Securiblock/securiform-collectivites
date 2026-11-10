import type { DetailBlock, DetailCard, DetailSection } from "@/src/content/formations-details";
import styles from "./FormationDetails.module.css";

function Cell({ value }: { value: string | string[] }) {
  if (typeof value === "string") return <>{value}</>;
  return (
    <ul className={styles.cellList}>
      {value.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function Card({ card, index }: { card: DetailCard; index?: number }) {
  return (
    <li className={styles.card}>
      {index !== undefined ? (
        <span className={styles.stepNumber} aria-hidden="true">
          {index + 1}
        </span>
      ) : null}
      {card.title ? <h3 className={styles.cardTitle}>{card.title}</h3> : null}
      {card.text?.map((text) => (
        <p key={text}>{text}</p>
      ))}
      {card.items?.length ? (
        <ul className={styles.bullets}>
          {card.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
    </li>
  );
}

function Block({ block }: { block: DetailBlock }) {
  switch (block.type) {
    case "p":
      return <p className={styles.text}>{block.text}</p>;
    case "h3":
      return <h3 className={styles.subhead}>{block.text}</h3>;
    case "list":
      return (
        <ul className={styles.bullets}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div className={styles.tableScroll}>
          <table className={styles.table}>
            {block.head.some(Boolean) ? (
              <thead>
                <tr>
                  {block.head.map((cell, index) => (
                    <th key={index} scope="col">
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
            ) : null}
            <tbody>
              {block.rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>
                      <Cell value={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "cards":
      return (
        <ul className={styles.cards}>
          {block.items.map((card) => (
            <Card key={card.title} card={card} />
          ))}
        </ul>
      );
    case "steps":
      return (
        <ol className={`${styles.cards} ${styles.steps}`}>
          {block.items.map((card, index) => (
            <Card key={card.title} card={card} index={index} />
          ))}
        </ol>
      );
    case "aside":
      return (
        <aside className={styles.aside}>
          {block.title ? <h3 className={styles.asideTitle}>{block.title}</h3> : null}
          {block.text?.map((text) => (
            <p key={text}>{text}</p>
          ))}
          <ul className={styles.checklist}>
            {block.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      );
    case "faq":
      return (
        <div className={styles.faq}>
          {block.items.map((item) => (
            <details key={item.q} className={styles.faqItem}>
              <summary>{item.q}</summary>
              {item.a.map((answer) => (
                <p key={answer}>{answer}</p>
              ))}
            </details>
          ))}
        </div>
      );
  }
}

// Sections de contenu détaillé d'une page formation (voir src/content/formations-details.ts).
export function FormationDetails({ sections }: { sections: DetailSection[] }) {
  return (
    <>
      {sections.map((section, index) => {
        const id = `detail-${index + 1}`;
        const aside = section.blocks.find((block) => block.type === "aside");
        const main = section.blocks.filter((block) => block !== aside);

        return (
          <section
            key={section.title}
            className={`section ${styles.section} ${index % 2 === 0 ? styles.alt : ""}`}
            aria-labelledby={id}
          >
            <div className={`container ${aside ? styles.split : ""}`}>
              <div className={styles.main}>
                <div className={`section-head ${styles.head}`}>
                  {section.eyebrow ? <p className={styles.eyebrow}>{section.eyebrow}</p> : null}
                  <h2 id={id}>{section.title}</h2>
                </div>
                {main.map((block, blockIndex) => (
                  <Block key={blockIndex} block={block} />
                ))}
              </div>
              {aside ? <Block block={aside} /> : null}
            </div>
          </section>
        );
      })}
    </>
  );
}
