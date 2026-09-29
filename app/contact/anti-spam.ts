// Noms des champs anti-spam, partagés entre le formulaire et l'action serveur.

// Champ invisible pour les visiteurs : seul un robot le remplit.
export const HONEYPOT_FIELD = "site_internet";

// Heure d'affichage du formulaire : un envoi trop rapide trahit un robot.
export const RENDERED_AT_FIELD = "form_rendu";

// Appelé au rendu de la page contact, qui est dynamique (une valeur par visite).
export function formRenderTime(): number {
  return Date.now();
}
