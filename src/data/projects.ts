export interface Project {
  id: string;
  title: string;
  tagline: string;
  /** Optionnel : sans badge, la carte n'affiche aucune étiquette sur l'image */
  badge?: string;
  badgeColor?: "blue" | "green" | "purple" | "amber";
  image: string;
  /** Affiche l'image entière sans rognage : logos et visuels non photographiques */
  imageContain?: boolean;
  /** L'image est une capture verticale du site, qui défile dans la carte au survol */
  scrollPreview?: boolean;
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
    image: "/images/projects/smartplanning-apercu.webp",
    scrollPreview: true,
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
    image: "/images/projects/lune-soleil-apercu.webp",
    scrollPreview: true,
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
    image: "/images/projects/livrestaka.webp",
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
    image: "/images/projects/freelance-apercu.webp",
    scrollPreview: true,
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
    image: "/images/projects/coachtfe-apercu.webp",
    scrollPreview: true,
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
    image: "/images/projects/graslin-apercu.webp",
    scrollPreview: true,
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
    image: "/images/projects/kocinaspeed-apercu.webp",
    scrollPreview: true,
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
];
