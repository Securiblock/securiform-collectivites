// Règles anti-spam communes aux formulaires du site (contact et rappel de recyclage).
//
// Les robots postent directement sur le serveur sans passer par la page : on
// rejoue donc côté serveur des règles qu'un vrai visiteur ne peut pas enfreindre
// en utilisant le formulaire normalement. Pas de faux positif sur un visiteur
// réel, c'est la priorité.

const URL_RE = /https?:\/\/|www\.|\[url|<a\s/i;

// Champs courts où un lien n'a rien à faire.
const SHORT_FIELDS = ["nom", "telephone"] as const;

function field(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

// Renvoie la raison si l'envoi ressemble à un robot, sinon null.
// Un champ absent du formulaire (ex. pas de téléphone sur le rappel) est simplement ignoré.
export function detectSpam(formData: FormData): string | null {
  for (const key of SHORT_FIELDS) {
    if (URL_RE.test(field(formData, key))) return `lien dans le champ « ${key} »`;
  }

  // Signature classique de robot : adresse truffée de points
  // (h.u.mm.er.to.l.ympia@gmail.com). Un vrai prénom.nom en a 1 ou 2.
  const localPart = field(formData, "email").split("@")[0];
  if ((localPart.match(/\./g) ?? []).length >= 4) return "email à points multiples";

  // Téléphone facultatif, mais s'il est rempli il doit ressembler à un numéro
  // (au moins 6 chiffres, pas un paragraphe).
  const telephone = field(formData, "telephone");
  if (telephone) {
    const digits = (telephone.match(/\d/g) ?? []).length;
    if (digits < 6 || telephone.length > 30) return "téléphone invalide";
  }

  return null;
}
