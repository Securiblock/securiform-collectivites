// Génère un fichier agenda .ics (RFC 5545) avec un événement sur une journée entière.
// Construit dans le navigateur : rien n'est envoyé au serveur.

type IcsEvent = {
  date: string; // AAAA-MM-JJ
  title: string;
  description: string;
  url?: string;
};

function escapeText(value: string): string {
  return value.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\r?\n/g, "\\n");
}

// Les lignes de plus de 75 octets doivent être repliées (on coupe à 60 caractères par prudence).
function fold(line: string): string {
  const chunks: string[] = [];
  for (let i = 0; i < line.length; i += 60) {
    chunks.push(line.slice(i, i + 60));
  }
  return chunks.join("\r\n ");
}

function nextDay(date: string): string {
  const [y, m, d] = date.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d + 1)).toISOString().slice(0, 10);
}

export function buildIcs(event: IcsEvent): string {
  const stamp = new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//SECURIFORM Collectivites//Calculateur de recyclage//FR",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${crypto.randomUUID()}@securiform-collectivites.fr`,
    `DTSTAMP:${stamp}`,
    `DTSTART;VALUE=DATE:${event.date.replace(/-/g, "")}`,
    `DTEND;VALUE=DATE:${nextDay(event.date).replace(/-/g, "")}`,
    `SUMMARY:${escapeText(event.title)}`,
    `DESCRIPTION:${escapeText(event.description)}`,
    ...(event.url ? [`URL:${event.url}`] : []),
    "BEGIN:VALARM",
    "ACTION:DISPLAY",
    `DESCRIPTION:${escapeText(event.title)}`,
    "TRIGGER:-PT15H",
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
  ];
  return lines.map(fold).join("\r\n") + "\r\n";
}

export function downloadIcs(filename: string, content: string): void {
  const blob = new Blob([content], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}
