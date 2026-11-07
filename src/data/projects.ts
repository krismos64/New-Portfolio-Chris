export interface Project {
  id: string;
  title: string;
  tagline: string;
  /** Optionnel : sans badge, la carte n'affiche aucune étiquette sur l'image */
  badge?: string;
  badgeColor?: "blue" | "green" | "purple" | "amber";
  /** Maquette 16:9 (portable + téléphone), 1200 px ; une variante `-800.webp` sert le srcset */
  image: string;
  /** Réalisation secondaire : carte compacte dans « Autres réalisations », sous la grille principale */
  secondary?: boolean;
  /** Remplace les boutons de liens quand le projet n'est pas encore en ligne */
  status?: string;
  /** Domaine réservé, affiché sans lien tant que le site n'est pas ouvert */
  upcomingDomain?: string;
  tech: string[];
  description: string;
  highlights: string[];
  links: {
    website?: string;
    github?: string;
    video?: string;
    linkedin?: string;
    youtube?: string;
    facebook?: string;
  };
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "smartplanning",
    title: "SmartPlanning",
    tagline: "SaaS de gestion d'équipes et de plannings",
    badge: "Projet CDA · En production",
    badgeColor: "blue",
    image: "/images/projects/smartplanning-mockup.webp",
    tech: ["Next.js 15", "React 19", "TypeScript", "PostgreSQL", "Prisma", "Stripe", "Docker"],
    description:
      "Solution SaaS réelle et fonctionnelle de gestion d'équipes : plannings, gestion des congés, tâches personnelles. Paiements Stripe opérationnels, conforme RGPD. Projet final CDA.",
    highlights: [
      "Architecture multi-tenant SaaS",
      "Paiements Stripe fonctionnels",
      "Conforme RGPD",
      "CI/CD GitHub Actions + déploiement VPS OVH",
    ],
    links: {
      website: "https://smartplanning.fr/",
      github: "https://github.com/krismos64/SmartPlanning",
      video: "https://www.youtube.com/watch?v=jSdnkoMc8gU",
      linkedin: "https://www.linkedin.com/company/smartplanning-fr/",
      youtube: "https://www.youtube.com/@SmartPlanning-x2c",
    },
    featured: true,
  },
  {
    id: "lune-soleil",
    title: "Lune-Soleil",
    tagline: "Boutique e-commerce de bijoux artisanaux faits main",
    badge: "Freelance · Client réel",
    badgeColor: "green",
    image: "/images/projects/lune-soleil-mockup.webp",
    tech: ["Next.js 16", "React 19", "TypeScript", "PostgreSQL 18", "Prisma 7", "Stripe", "Docker"],
    description:
      "Boutique en ligne sur mesure pour une créatrice de bijoux du Béarn, ouverte sur lune-soleil.fr. Cycle commercial complet : catalogue, paiement Stripe, stock partagé entre site et marchés, factures et avoirs, expédition Mondial Relay, espace client et back-office mobile.",
    highlights: [
      "Réservation atomique du dernier exemplaire",
      "Paiement confirmé par webhook signé et idempotent",
      "Factures immuables, corrections par avoir",
      "Développement encadré par des garde-fous IA",
    ],
    links: {
      website: "https://lune-soleil.fr/",
      github: "https://github.com/krismos64/lune-soleil",
      facebook: "https://www.facebook.com/profile.php?id=61592696335840",
    },
  },
  {
    id: "livrestaka",
    title: "Staka Livres",
    tagline: "Plateforme de correction et d'édition de manuscrits",
    badge: "Freelance · Client réel",
    badgeColor: "green",
    image: "/images/projects/livrestaka-mockup.webp",
    tech: ["React", "TypeScript", "Node.js", "Express", "MySQL", "Stripe", "Tailwind CSS"],
    description:
      "Plateforme web enterprise-grade dédiée aux services de correction et d'édition de manuscrits. Application monorepo avec authentification sécurisée, administration avancée, paiements Stripe intégrés et messagerie temps réel.",
    highlights: [
      "Mission freelance client réel",
      "Monorepo fullstack sophistiqué",
      "Paiements Stripe + messagerie temps réel",
      "Tableau de bord administrateur complet",
    ],
    links: {
      website: "https://livrestaka.fr/",
      github: "https://github.com/krismos64/Staka-livres",
      video: "https://www.youtube.com/watch?v=yxl47xKgfN4",
    },
  },
  {
    id: "freelance",
    title: "Christophe Dev Freelance",
    tagline: "Site vitrine professionnel pour mon activité freelance",
    badge: "Freelance · En ligne",
    badgeColor: "purple",
    image: "/images/projects/freelance-mockup.webp",
    tech: ["Next.js", "React", "TypeScript", "SEO", "Responsive"],
    description:
      "Site web professionnel présentant mes services de conception et développement de solutions digitales sur mesure pour entreprises et indépendants.",
    highlights: [
      "Vitrine freelance professionnelle",
      "SEO optimisé et responsive",
      "Présentation des services et tarifs",
      "Formulaire de contact intégré",
    ],
    links: {
      website: "https://christophe-dev-freelance.fr/",
    },
  },
  {
    id: "coachtfe",
    title: "CoachTFE",
    tagline: "Guide en ligne pour la réussite du TFE infirmier",
    badge: "Freelance · Client réel",
    badgeColor: "amber",
    image: "/images/projects/coachtfe-mockup.webp",
    tech: ["CSS", "JavaScript", "SEO", "GitHub", "OVH"],
    description:
      "Refonte d'un site vitrine moderne et responsive pour CoachTFE, accompagnement à la réussite du TFE infirmier. SEO amélioré, formulaire de contact relié à l'adresse mail du client, gestion de projet et déploiement.",
    highlights: [
      "Mission freelance client réel",
      "SEO optimisé (meta, schema, sitemap)",
      "Formulaire de contact relié au mail client",
      "Gestion de projet + déploiement OVH",
    ],
    links: {
      website: "https://coachtfe.fr/",
      github: "https://github.com/krismos64/coachtfe-website",
    },
  },
  {
    id: "graslin",
    title: "Cabinet Infirmier Graslin",
    tagline: "Site vitrine pour cabinet infirmier libéral à Nantes",
    badge: "Freelance · Client réel",
    badgeColor: "amber",
    image: "/images/projects/graslin-mockup.webp",
    tech: ["React", "CSS Modules", "SEO", "Responsive", "Doctolib"],
    description:
      "Site one-page professionnel pour une infirmière libérale, conforme aux règles de l'ordre infirmier (contenu informatif, sans promotion). Lien Doctolib intégré pour la prise de rendez-vous.",
    highlights: [
      "Mission freelance client réel",
      "Conforme réglementation ordre infirmier",
      "Intégration Doctolib",
      "SEO local optimisé (Nantes)",
    ],
    links: {
      website: "https://cabinet-infirmier-graslin.fr/",
    },
  },
  {
    id: "kocinaspeed",
    title: "Kocinaspeed",
    tagline: "Site de recettes avec chatbot IA intégré",
    badge: "Projet personnel",
    badgeColor: "purple",
    image: "/images/projects/kocinaspeed-mockup.webp",
    tech: ["Symfony", "PHP", "MySQL", "JavaScript", "Chatbot IA"],
    description:
      "Site de recettes de cuisine avec chatbot interactif, espace admin CRUD complet, gestion images et vidéos.",
    highlights: [
      "Chatbot IA interactif",
      "Espace administrateur complet",
      "CRUD avec upload médias",
      "Chaîne YouTube associée",
    ],
    links: {
      website: "https://kocinaspeed.fr/",
      github: "https://github.com/krismos64/kocinaspeed",
      video: "https://www.youtube.com/watch?v=-BynMQHg3uQ",
    },
  },
  {
    id: "mastermentor",
    title: "MasterMentor",
    tagline: "Accompagnement méthodologique au mémoire de Master 2",
    badge: "Freelance · Client réel",
    badgeColor: "green",
    image: "/images/projects/mastermentor-mockup.webp",
    secondary: true,
    tech: ["PHP", "JavaScript", "SEO", "OVH"],
    description:
      "Site vitrine pour le client Staka : disciplines et équipe d'enseignants-chercheurs, quiz, page tarifs, formulaire de diagnostic sécurisé, charte d'intégrité académique et URLs sans extension.",
    highlights: [],
    links: {
      website: "https://mastermentor.fr/",
      github: "https://github.com/krismos64/master_mentor",
    },
  },
  {
    id: "coachdec",
    title: "CoachDEC",
    tagline: "Accompagnement méthodologique au mémoire d'expertise comptable",
    badge: "Freelance · Client réel",
    badgeColor: "green",
    image: "/images/projects/coachdec-mockup.webp",
    secondary: true,
    tech: ["PHP", "JavaScript", "SEO", "OVH"],
    description:
      "Site vitrine pour le client Staka : quiz d'orientation, présentation des formules, formulaire de contact protégé contre le spam et données structurées.",
    highlights: [],
    links: {
      website: "https://coachdec.fr/",
      github: "https://github.com/krismos64/coachdec",
    },
  },
  {
    id: "doctorat",
    title: "Doctorat.me",
    tagline: "Accompagnement doctoral assuré par des docteurs",
    badge: "Freelance · Client réel",
    badgeColor: "green",
    image: "/images/projects/doctorat-mockup.webp",
    secondary: true,
    tech: ["HTML", "CSS", "JavaScript", "Données structurées"],
    description:
      "Landing page pour le client Staka : méthodologie, aide au traitement des données (SPSS, Stata, R), formulaire de rappel et charte d'intégrité. Contenus reformulés pour présenter une démarche éthique.",
    highlights: [],
    links: {
      website: "https://doctorat.me/",
    },
  },
  {
    id: "methodea",
    title: "Methodea",
    tagline: "Refonte d'un site de formation à la recherche scientifique",
    badge: "Freelance · Client réel",
    badgeColor: "green",
    image: "/images/projects/methodea-mockup.webp",
    secondary: true,
    tech: ["HTML", "CSS", "JavaScript", "Netlify"],
    description:
      "Refonte complète d'un site vitrine pour le client Staka : design responsive, animations et formulaire de contact connecté.",
    highlights: [],
    links: {
      website: "https://methodea.netlify.app/",
      github: "https://github.com/krismos64/methodia",
    },
  },
  {
    id: "garage-parrot",
    title: "Garage V. Parrot",
    tagline: "Site de garage automobile avec espace d'administration",
    badge: "Projet de formation · ECF",
    badgeColor: "purple",
    image: "/images/projects/garage-mockup.webp",
    secondary: true,
    tech: ["Symfony", "PHP", "Twig", "MySQL"],
    description:
      "Projet fictif réalisé pour l'évaluation finale (ECF) de ma formation Studi : catalogue de véhicules d'occasion filtrable, prise de rendez-vous et espace d'administration pour le gérant et ses employés.",
    highlights: [],
    links: {
      website: "https://garage-parrot.online/",
      github: "https://github.com/krismos64/Garage_VParrot",
    },
  },
  {
    id: "poulp-fiction",
    title: "Poulp Fiction",
    tagline: "Démo de site vitrine pour un club de plongée",
    badge: "Projet personnel · Démo",
    badgeColor: "purple",
    image: "/images/projects/poulpfiction-mockup.webp",
    secondary: true,
    tech: ["HTML", "CSS", "JavaScript", "Lottie"],
    description:
      "Maquette fonctionnelle d'un site de club de plongée à Saint-Cyprien : animations Lottie, galerie filtrable et formulaire de démonstration sans envoi.",
    highlights: [],
    links: {
      website: "https://poulpfiction.netlify.app/",
      github: "https://github.com/krismos64/poulp-fiction",
    },
  },
];
