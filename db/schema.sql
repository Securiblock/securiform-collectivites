-- Rappels de recyclage envoyés par email (outil /outils/calculateur-recyclage/).
-- Dates au format ISO « AAAA-MM-JJ » (created_at / sent_at : horodatage ISO complet).
-- L'id (UUID) sert aussi de jeton d'annulation dans le lien envoyé par email.
CREATE TABLE IF NOT EXISTS rappels_recyclage (
  id TEXT PRIMARY KEY,
  email TEXT NOT NULL,
  formation TEXT NOT NULL,
  libelle TEXT NOT NULL,
  date_formation TEXT NOT NULL,
  echeance TEXT NOT NULL,
  date_rappel TEXT NOT NULL,
  created_at TEXT NOT NULL,
  sent_at TEXT
);

CREATE INDEX IF NOT EXISTS rappels_recyclage_a_envoyer ON rappels_recyclage (date_rappel) WHERE sent_at IS NULL;

CREATE INDEX IF NOT EXISTS rappels_recyclage_email ON rappels_recyclage (email);
