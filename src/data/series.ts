export interface Series {
  key: string;
  /** Titre affiché en tête de la page de série */
  title: string;
  /** Accroche courte, reprise sur la carte du hub /blog/ */
  tagline: string;
  description: string;
  /** Meta description de la page de série, 150 à 160 caracteres */
  metaDescription: string;
  /** Title SEO de la page de série */
  metaTitle: string;
  /** Suffixe de title des articles de la série */
  postTitleSuffix: string;
  /** Libellé court, pour le fil d'Ariane */
  shortLabel: string;
  url: string;
  image: string;
  imageAlt: string;
  accent: string;
  /** Categories proposées en filtre sur la page de série, dans l'ordre */
  filters: { key: string; label: string }[];
}

export const series: Record<string, Series> = {
  smartplanning: {
    key: 'smartplanning',
    title: 'SmartPlanning : du concept au déploiement',
    tagline: 'La conception d’un SaaS de gestion d’équipes, étape par étape',
    description:
      "Chaque étape de la création d'un SaaS de gestion d'équipes : analyse des besoins, architecture, développement, tests et mise en production. Code, décisions et leçons apprises.",
    metaTitle: 'Blog SmartPlanning : du concept au déploiement | Christophe Mostefaoui',
    metaDescription:
      "De l'analyse des besoins au déploiement VPS : 8 articles détaillés sur la conception de SmartPlanning, SaaS de gestion d'équipes en Next.js, avec CI/CD Docker.",
    postTitleSuffix: 'Blog SmartPlanning',
    shortLabel: 'SmartPlanning',
    url: 'https://krismos.fr/blog/smartplanning/',
    image: '/images/blog/smartplanning-conception.webp',
    imageAlt: 'Christophe Mostefaoui, SmartPlanning : du concept au déploiement',
    accent: 'var(--accent)',
    filters: [
      { key: 'all', label: 'Tout' },
      { key: 'analyse', label: 'Analyse' },
      { key: 'gestion-projet', label: 'Gestion' },
      { key: 'conception', label: 'Conception' },
      { key: 'developpement', label: 'Dev' },
      { key: 'tests', label: 'Tests' },
      { key: 'deploiement', label: 'Déploiement' },
      { key: 'demo', label: 'Démos' },
    ],
  },
  'claude-code': {
    key: 'claude-code',
    title: 'Encadrer un agent de code sur un vrai projet',
    tagline: 'Les garde-fous qui rendent Claude Code fiable en production',
    description:
      "Configurer un agent de code pour qu'il travaille sous contraintes vérifiables : hooks, permissions, skills et sous-agents, sur une boutique e-commerce en cours de construction.",
    metaTitle: 'Encadrer un agent de code : config Claude Code | Christophe Mostefaoui',
    metaDescription:
      "Hooks, permissions, skills et sous-agents : comment je configure Claude Code sur un projet e-commerce réel pour que l'agent travaille sous contraintes vérifiables.",
    postTitleSuffix: 'Blog',
    shortLabel: 'Agent de code',
    url: 'https://krismos.fr/blog/claude-code/',
    image: '/images/blog/claude-code-garde-fous.svg',
    imageAlt:
      "Configuration Claude Code : hooks, permissions et regles projet encadrant un agent de code",
    accent: 'var(--green)',
    filters: [
      { key: 'all', label: 'Tout' },
      { key: 'ia-outillage', label: 'IA et outillage' },
    ],
  },
};

export const seriesOrder = ['smartplanning', 'claude-code'];
