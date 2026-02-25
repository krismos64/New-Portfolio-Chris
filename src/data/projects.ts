export interface Project {
  id: string;
  title: string;
  tagline: string;
  badge: string;
  badgeColor: "blue" | "green" | "purple" | "amber";
  image: string;
  tech: string[];
  description: string;
  highlights: string[];
  links: {
    website?: string;
    github?: string;
    video?: string;
  };
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "smartplanning",
    title: "SmartPlanning AI V2",
    tagline: "SaaS de gestion d'équipes avec plannings IA",
    badge: "Projet CDA · En production",
    badgeColor: "blue",
    image: "/images/projects/smart.jpg",
    tech: ["Next.js 15", "React 19", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "Docker"],
    description:
      "Solution SaaS de gestion d'équipes : plannings automatiques avec IA, gestion des congés, tâches personnelles. Fait gagner ~3h/semaine aux managers.",
    highlights: [
      "Architecture multi-tenant SaaS",
      "Génération de plannings assistée par IA",
      "Paiements Stripe intégrés",
      "CI/CD GitHub Actions + déploiement VPS OVH",
    ],
    links: {
      website: "https://smartplanning.fr/",
      github: "https://github.com/krismos64/SmartPlanning",
      video: "https://www.youtube.com/watch?v=jSdnkoMc8gU",
    },
    featured: true,
  },
  {
    id: "livrestaka",
    title: "Staka Livres",
    tagline: "Plateforme de correction et d'édition de manuscrits",
    badge: "Full-Stack · Production-ready",
    badgeColor: "green",
    image: "/images/projects/livrestaka.jpg",
    tech: ["React", "TypeScript", "Node.js", "Express", "MySQL", "Stripe", "Tailwind CSS"],
    description:
      "Plateforme enterprise-grade pour auteurs : authentification sécurisée, paiements Stripe, messagerie temps réel, administration avancée.",
    highlights: [
      "Monorepo fullstack",
      "Système de messagerie temps réel",
      "Intégration paiements Stripe",
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
    image: "/images/portfolio/miniature.jpg",
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
    image: "/images/projects/coachtfe.png",
    tech: ["CSS", "JavaScript", "SEO", "GitHub", "OVH"],
    description:
      "Refonte d'un site vitrine moderne et responsive pour CoachTFE — accompagnement à la réussite du TFE infirmier. SEO amélioré, formulaire de contact relié à l'adresse mail du client, gestion de projet et déploiement.",
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
    id: "kocinaspeed",
    title: "Kocinaspeed",
    tagline: "Site de recettes avec chatbot IA intégré",
    badge: "Projet personnel",
    badgeColor: "purple",
    image: "/images/projects/kocinaspeed.png",
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
    id: "graslin",
    title: "Cabinet Infirmier Graslin",
    tagline: "Site vitrine pour cabinet infirmier libéral à Nantes",
    badge: "Freelance · Client réel",
    badgeColor: "amber",
    image: "/images/projects/graslin.jpg",
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
];
