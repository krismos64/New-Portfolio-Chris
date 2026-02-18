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
    id: "krismos",
    title: "krismos.fr",
    tagline: "Portfolio interactif avec design moderne",
    badge: "Astro · JAMstack",
    badgeColor: "purple",
    image: "/images/portfolio/chris7.jpg",
    tech: ["Astro 5", "React 19", "TypeScript", "GSAP"],
    description:
      "Ce portfolio — conçu avec Astro pour des performances optimales, animations subtiles et SEO natif.",
    highlights: [
      "Score Lighthouse 95+",
      "Build statique ultra-rapide",
      "Composants React interactifs",
      "SEO et accessibilité prioritaires",
    ],
    links: {
      website: "https://krismos.fr/",
      github: "https://github.com/krismos64/New-Portfolio-Chris",
    },
  },
  {
    id: "coachtfe",
    title: "CoachTFE",
    tagline: "Site vitrine professionnel pour coach sportif",
    badge: "Freelance · Client réel",
    badgeColor: "amber",
    image: "/images/projects/coachtfe.png",
    tech: ["HTML/CSS", "JavaScript", "SEO", "OVH"],
    description:
      "Refonte complète d'un site vitrine pour un coach sportif : design responsive, SEO optimisé, formulaire de contact fonctionnel.",
    highlights: [
      "Mission freelance client réel",
      "SEO optimisé (meta, schema, sitemap)",
      "Formulaire de contact intégré",
      "Déployé sur OVH",
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
];
