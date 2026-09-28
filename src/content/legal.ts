export type LegalSection = {
  title: string;
  paragraphs: string[];
};

export type ProcessingActivity = {
  finalite: string;
  baseLegale: string;
  donneesConcernees: string;
  duree: string;
  destinataires: string;
};

export const legalPagesMeta = {
  mentionsLegales: {
    title: "Mentions légales",
    description: "Mentions légales du site SECURIFORM Collectivités : éditeur, hébergeur et propriété intellectuelle.",
  },
  donneesPersonnelles: {
    title: "Données personnelles",
    description: "Informations sur la collecte et le traitement des données personnelles par SECURIFORM Collectivités.",
  },
  politiqueConfidentialite: {
    title: "Politique de confidentialité",
    description: "Politique de confidentialité et de gestion des cookies du site SECURIFORM Collectivités.",
  },
  conditionsGeneralesUtilisation: {
    title: "Conditions générales d'utilisation",
    description: "Conditions générales d'utilisation du site SECURIFORM Collectivités.",
  },
  politiqueCookies: {
    title: "Politique cookies",
    description: "Liste des cookies et traceurs utilisés sur le site SECURIFORM Collectivités et gestion de vos préférences.",
  },
};

export const mentionsLegalesSections: LegalSection[] = [
  {
    title: "Éditeur du site",
    paragraphs: [
      "SECURIFORM© COLLECTIVITES, département de SECURIFORM.",
      "Siège social : 17 rue du Carillon, 59650 Villeneuve d'Ascq.",
      "Capital social : 4 500 euros.",
      "Téléphone : 03 20 67 34 90 — Email : contact@securiform.fr",
      "SIRET : [À COMPLÉTER : numéro SIRET]",
      "RCS : [À COMPLÉTER : numéro RCS et ville d'immatriculation]",
      "Directeur de la publication : M. Jérôme Cailliez.",
    ],
  },
  {
    title: "Numéro de déclaration d'activité",
    paragraphs: [
      "SECURIFORM© COLLECTIVITES est enregistré sous le numéro de déclaration d'activité [À COMPLÉTER : numéro de déclaration d'activité] auprès du préfet de région de [À COMPLÉTER : région émettrice]. Cet enregistrement ne vaut pas agrément de l'État (article L.6352-12 du Code du travail).",
    ],
  },
  {
    title: "Hébergement",
    paragraphs: [
      "Nom de l'hébergeur : OVH SAS.",
      "Adresse : 140 Quai du Sartel, 59100 Roubaix, France.",
      "Téléphone : [À COMPLÉTER : numéro de téléphone de l'hébergeur]",
    ],
  },
  {
    title: "Propriété intellectuelle",
    paragraphs: [
      "L'ensemble des contenus présents sur ce site (textes, images, logos, graphismes) est la propriété exclusive de SECURIFORM, sauf mention contraire. Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation préalable est interdite.",
    ],
  },
];

export const donneesPersonnellesActivities: ProcessingActivity[] = [
  {
    finalite: "Répondre à une demande de contact ou de devis via le formulaire du site",
    baseLegale:
      "Exécution de mesures précontractuelles prises à la demande de la personne concernée (art. 6.1.b du RGPD), ou intérêt légitime à traiter les demandes reçues (art. 6.1.f du RGPD)",
    donneesConcernees: "Nom, téléphone (facultatif), adresse email, contenu du message",
    duree: "3 ans à compter du dernier échange, en l'absence de relation contractuelle",
    destinataires:
      "Service commercial de SECURIFORM ; Resend, Inc. (prestataire technique d'envoi d'emails, sous-traitant au sens de l'article 28 du RGPD)",
  },
  {
    finalite: "Mémoriser vos choix en matière de cookies",
    baseLegale: "Intérêt légitime (mémorisation d'un choix exprimé par l'utilisateur)",
    donneesConcernees: "Préférences de consentement par catégorie de cookies, horodatage du choix",
    duree: "6 mois",
    destinataires: "Aucun destinataire externe (donnée stockée uniquement sur votre appareil)",
  },
];

export const donneesPersonnellesSections: LegalSection[] = [
  {
    title: "Responsable du traitement",
    paragraphs: [
      "SECURIFORM© COLLECTIVITES, 17 rue du Carillon, 59650 Villeneuve d'Ascq, est responsable du traitement des données personnelles collectées via ce site.",
    ],
  },
  {
    title: "Traitements de données mis en œuvre",
    paragraphs: [
      "Le tableau ci-dessous détaille, pour chaque finalité, la base légale du traitement, les données concernées, leur durée de conservation et leurs destinataires.",
    ],
  },
  {
    title: "Destinataires et sous-traitants",
    paragraphs: [
      "Les données transmises via le formulaire de contact sont adressées au service commercial de SECURIFORM. L'envoi de cet email repose sur le service technique Resend, Inc., qui agit en tant que sous-traitant au sens de l'article 28 du RGPD et n'utilise ces données à aucune autre fin.",
    ],
  },
  {
    title: "Transferts de données hors Union européenne",
    paragraphs: [
      "Resend, Inc. est une société établie aux États-Unis. Les transferts de données vers ce prestataire s'appuient sur [À COMPLÉTER : mécanisme de transfert retenu par Resend — clauses contractuelles types de la Commission européenne et/ou adhésion au Data Privacy Framework, à vérifier sur la page de conformité de Resend].",
    ],
  },
  {
    title: "Vos droits",
    paragraphs: [
      "Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, d'effacement, d'opposition, de portabilité et de limitation sur vos données personnelles.",
      "Pour exercer ces droits, contactez-nous à l'adresse contact@securiform.fr ou par courrier à l'adresse du siège social.",
    ],
  },
  {
    title: "Réclamation auprès de la CNIL",
    paragraphs: [
      "Vous disposez également du droit d'introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) — 3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07 — www.cnil.fr.",
    ],
  },
  {
    title: "Délégué à la protection des données",
    paragraphs: [
      "[À COMPLÉTER : nom et coordonnées du délégué à la protection des données (DPO), le cas échéant ; si aucun DPO n'est désigné, cette section peut être supprimée]",
    ],
  },
];

export const politiqueConfidentialiteSections: LegalSection[] = [
  {
    title: "Cookies",
    paragraphs: [
      "Ce site utilise un nombre minimal de traceurs. La liste complète, leur finalité et vos options de gestion sont détaillées sur notre page « Politique cookies ». Vous pouvez à tout moment modifier vos choix via le lien « Gérer mes cookies » en pied de page.",
    ],
  },
  {
    title: "Sécurité des données",
    paragraphs: [
      "SECURIFORM met en œuvre les mesures techniques et organisationnelles appropriées afin de garantir la sécurité et la confidentialité des données transmises via ce site.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      "Pour toute question relative à cette politique de confidentialité, contactez-nous à l'adresse contact@securiform.fr.",
    ],
  },
];

export const cguSections: LegalSection[] = [
  {
    title: "Objet",
    paragraphs: [
      "Les présentes conditions générales d'utilisation (CGU) ont pour objet de définir les modalités et conditions d'utilisation du site securiform-collectivites.fr, ainsi que les droits et obligations des parties dans ce cadre. Toute connexion et navigation sur ce site implique l'acceptation sans réserve des présentes CGU.",
    ],
  },
  {
    title: "Accès au site",
    paragraphs: [
      "Le site est accessible gratuitement à tout utilisateur disposant d'un accès à Internet. Tous les coûts afférents à l'accès au site, que ce soient les frais matériels, logiciels ou d'accès à Internet, sont exclusivement à la charge de l'utilisateur.",
      "SECURIFORM met en œuvre les moyens raisonnables à sa disposition pour assurer un accès de qualité au site, mais n'est tenu à aucune obligation d'y parvenir et ne garantit pas l'absence d'interruption ou de dysfonctionnement.",
    ],
  },
  {
    title: "Propriété intellectuelle",
    paragraphs: [
      "L'ensemble des éléments constituant le site (textes, images, logos, graphismes, structure) est la propriété exclusive de SECURIFORM ou fait l'objet d'une autorisation d'utilisation, et est protégé par le Code de la propriété intellectuelle. Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation préalable est interdite et constitutive d'une contrefaçon.",
    ],
  },
  {
    title: "Utilisation du site",
    paragraphs: [
      "L'utilisateur s'engage à faire un usage licite et conforme à leur destination des contenus et services proposés sur le site, et à ne pas porter atteinte à son bon fonctionnement.",
    ],
  },
  {
    title: "Liens hypertextes",
    paragraphs: [
      "Le site peut contenir des liens hypertextes vers d'autres sites (notamment des organismes institutionnels ou partenaires). SECURIFORM ne saurait être tenu responsable du contenu de ces sites tiers, ni des dommages pouvant résulter de leur consultation ou utilisation.",
    ],
  },
  {
    title: "Limitation de responsabilité",
    paragraphs: [
      "SECURIFORM ne saurait être tenu responsable des dommages directs ou indirects résultant de l'utilisation du site ou de l'impossibilité d'y accéder, y compris en cas de perte de données ou de dommage causé à l'équipement de l'utilisateur.",
    ],
  },
  {
    title: "Droit applicable",
    paragraphs: [
      "Les présentes CGU sont soumises au droit français. En cas de litige et à défaut de résolution amiable, les tribunaux français seront seuls compétents.",
    ],
  },
  {
    title: "Modification des CGU",
    paragraphs: [
      "SECURIFORM se réserve le droit de modifier les présentes CGU à tout moment, notamment pour se conformer à toute évolution législative, réglementaire, jurisprudentielle ou technique. La version applicable est celle en vigueur à la date de consultation du site.",
    ],
  },
];
