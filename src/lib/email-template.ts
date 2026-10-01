// Gabarit HTML des emails transactionnels (rappels de recyclage).
// Mise en page en tableaux et styles en ligne : c'est ce que les messageries
// (Outlook, Gmail, Apple Mail…) affichent de façon fiable. Aucune image externe.

const RED = "#ce2222";
const INK = "#1f262e";
const TEXT = "#3a434d";
const MUTED = "#5b646e";
const LINE = "#e3e6ea";
const PANEL = "#f4f5f7";
const FONT = "Arial, Helvetica, sans-serif";

export type EmailContent = {
  preheader: string;
  eyebrow: string;
  title: string;
  intro: string;
  highlight: { label: string; value: string; caption?: string };
  details?: { label: string; value: string }[];
  cta?: { label: string; href: string };
  paragraphs?: string[];
  footerNote: string;
  unsubscribe: { label: string; href: string };
  contact: { phone: string; email: string; address: string; siteUrl: string };
};

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function button(label: string, href: string): string {
  return `
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:28px 0 8px;">
      <tr>
        <td align="center" bgcolor="${RED}" style="border-radius:8px;">
          <a href="${escapeHtml(href)}" target="_blank" style="display:inline-block;padding:15px 30px;font-family:${FONT};font-size:16px;font-weight:bold;color:#ffffff;text-decoration:none;border-radius:8px;">${escapeHtml(label)}&nbsp;&rarr;</a>
        </td>
      </tr>
    </table>`;
}

export function renderEmail(content: EmailContent): string {
  const details = (content.details ?? [])
    .map(
      (detail) => `
        <tr>
          <td style="padding:10px 0;border-top:1px solid ${LINE};font-family:${FONT};font-size:14px;color:${MUTED};">${escapeHtml(detail.label)}</td>
          <td align="right" style="padding:10px 0;border-top:1px solid ${LINE};font-family:${FONT};font-size:14px;font-weight:bold;color:${INK};">${escapeHtml(detail.value)}</td>
        </tr>`,
    )
    .join("");

  const paragraphs = (content.paragraphs ?? [])
    .map((text) => `<p style="margin:0 0 14px;font-family:${FONT};font-size:15px;line-height:24px;color:${TEXT};">${escapeHtml(text)}</p>`)
    .join("");

  const { contact } = content;
  const siteHost = contact.siteUrl.replace(/^https?:\/\//, "");

  return `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light">
<meta name="supported-color-schemes" content="light">
<title>${escapeHtml(content.title)}</title>
</head>
<body style="margin:0;padding:0;background:${PANEL};">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:${PANEL};">${escapeHtml(content.preheader)}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${PANEL}" style="background:${PANEL};">
    <tr>
      <td align="center" style="padding:32px 12px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;">

          <!-- En-tête -->
          <tr>
            <td bgcolor="${INK}" style="background:${INK};padding:26px 36px;border-radius:12px 12px 0 0;border-bottom:4px solid ${RED};">
              <a href="${escapeHtml(contact.siteUrl)}" target="_blank" style="text-decoration:none;">
                <span style="font-family:${FONT};font-size:22px;font-weight:bold;letter-spacing:1px;color:#ffffff;">SECURI</span><span style="font-family:${FONT};font-size:22px;font-weight:bold;letter-spacing:1px;color:${RED};">FORM</span>
                <br>
                <span style="font-family:${FONT};font-size:11px;letter-spacing:3px;color:#c9cfd6;">COLLECTIVIT&Eacute;S</span>
              </a>
            </td>
          </tr>

          <!-- Contenu -->
          <tr>
            <td bgcolor="#ffffff" style="background:#ffffff;padding:36px 36px 28px;">
              <p style="margin:0 0 10px;font-family:${FONT};font-size:12px;font-weight:bold;letter-spacing:2px;text-transform:uppercase;color:${RED};">${escapeHtml(content.eyebrow)}</p>
              <h1 style="margin:0 0 16px;font-family:${FONT};font-size:26px;line-height:32px;color:${INK};">${escapeHtml(content.title)}</h1>
              <p style="margin:0 0 24px;font-family:${FONT};font-size:15px;line-height:24px;color:${TEXT};">${escapeHtml(content.intro)}</p>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${PANEL};border-left:4px solid ${RED};border-radius:0 10px 10px 0;">
                <tr>
                  <td style="padding:22px 24px;">
                    <p style="margin:0 0 6px;font-family:${FONT};font-size:13px;color:${MUTED};">${escapeHtml(content.highlight.label)}</p>
                    <p style="margin:0;font-family:${FONT};font-size:28px;line-height:34px;font-weight:bold;color:${INK};">${escapeHtml(content.highlight.value)}</p>
                    ${content.highlight.caption ? `<p style="margin:6px 0 0;font-family:${FONT};font-size:14px;font-weight:bold;color:${RED};">${escapeHtml(content.highlight.caption)}</p>` : ""}
                    ${details ? `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:16px;">${details}</table>` : ""}
                  </td>
                </tr>
              </table>

              ${content.cta ? button(content.cta.label, content.cta.href) : ""}
              <div style="margin-top:24px;">${paragraphs}</div>
            </td>
          </tr>

          <!-- Pied -->
          <tr>
            <td bgcolor="#ffffff" style="background:#ffffff;padding:0 36px 32px;border-radius:0 0 12px 12px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding-top:22px;border-top:1px solid ${LINE};font-family:${FONT};font-size:14px;line-height:22px;color:${TEXT};">
                    <strong style="color:${INK};">Une question ?</strong><br>
                    <a href="tel:${escapeHtml(contact.phone.replace(/\s/g, ""))}" style="color:${RED};text-decoration:none;font-weight:bold;">${escapeHtml(contact.phone)}</a>
                    &nbsp;&middot;&nbsp;
                    <a href="mailto:${escapeHtml(contact.email)}" style="color:${RED};text-decoration:none;font-weight:bold;">${escapeHtml(contact.email)}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td align="center" style="padding:22px 24px 0;font-family:${FONT};font-size:12px;line-height:19px;color:${MUTED};">
              ${escapeHtml(content.footerNote)}<br>
              <a href="${escapeHtml(content.unsubscribe.href)}" target="_blank" style="color:${MUTED};text-decoration:underline;">${escapeHtml(content.unsubscribe.label)}</a>
              <br><br>
              SECURIFORM Collectivit&eacute;s &middot; ${escapeHtml(contact.address)}<br>
              <a href="${escapeHtml(contact.siteUrl)}" target="_blank" style="color:${MUTED};text-decoration:none;">${escapeHtml(siteHost)}</a>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
