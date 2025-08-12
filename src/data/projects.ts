export interface Project {
  id: string;
  title: string;
  image: string;
  tech: string[];
  description: string;
  links: {
    website?: string;
    github?: string;
    video?: string;
    documentation?: string;
    youtube?: string;
  };
  audio?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "Livrestaka",
    title: "Livres Staka",
    image: "/images/projects/livrestaka.jpg",
    tech: [
      "Tailwind CSS",
      "TypeScript",
      "Node JS",
      "React",
      "MySQL",
      "Express",
      "API",
      "Gestion de projet",
      "GitHub",
      "OVH",
    ],
    description: `Plateforme web enterprise-grade dédiée aux services de correction et d'édition de manuscrits. Cette application monorepo sophistiquée offre une expérience complète aux auteurs avec authentification sécurisée, administration avancée, paiements Stripe intégrés et système de messagerie temps réel.`,
    links: {
      website: "https://livrestaka.fr/",
      github: "https://github.com/krismos64/Staka-livres",
      video:
        "https://www.youtube.com/watch?v=yxl47xKgfN4&ab_channel=krismosDev",
    },
    featured: true,
  },
  {
    id: "smartplanning",
    title: "Smart Planning",
    image: "/images/projects/smart.jpg",
    tech: [
      "Tailwind CSS",
      "TypeScript",
      "Animations Lottie",
      "Node JS",
      "React",
      "MongoDB",
      "Express",
      "API",
      "Gestion de projet",
      "GitHub",
      "Stack MERN",
      "Intégration IA",
    ],
    description: `Réalisation d'une solution web de gestion d'équipes (plannings manuels, plannings automatiques avec IA, demande de congés, tâches personnelles, gestion des employés, etc.). En cours de d'intégration IA (nouvelle fonctionnalité). Déploiement final avec SEO optimisé, la documentation du projet et des explications vidéo seront bientôt disponibles.`,
    links: {
      website: "https://smartplanning.fr/",
      github: "https://github.com/krismos64/SmartPlanning",
      video:
        "https://www.youtube.com/watch?v=jSdnkoMc8gU&ab_channel=SmartPlanning",
      youtube: "https://www.youtube.com/@SmartPlanning-x2c",
    },
    featured: true,
  },
  {
    id: "hackathon",
    title: "Hackathon",
    image: "/images/projects/Hackathon.jpg",
    tech: [
      "Tailwind CSS",
      "TypeScript",
      "Confluence",
      "Node JS",
      "React",
      "MongoDB",
      "Express",
      "API",
      "Gestion de projet",
      "GitHub",
      "Stack MERN",
      "Intégration IA",
      "Jira",
      "Figma",
    ],
    description: `Application de Comparaison de Modèles d'IA pour Hackathon, elle va permettre à des étudiants d'interagir avec différents modèles d'IA (OpenAI et Mistral), de comparer leurs réponses, et de sélectionner manuellement la meilleure réponse comme version finale. Projet en groupe de 3 dans le cadre de la formation CDA, commandé par l'association IA de Pau. En cours de développement. Stack MERN. Documentation et lien à venir.`,
    links: {
      github: "https://github.com/Remy-Nano/IAPAU",
    },
  },
  {
    id: "poulpfiction",
    title: "Poulp Fiction",
    image: "/images/projects/poulpfiction.jpg",
    tech: [
      "Html CSS",
      "JS",
      "Animations Lottie",
      "Freelance",
      "Services",
      "Formulaire de contact",
    ],
    description: `Réalisation d'un site web vitrine professionnel temporaire pour un projet de création de centre de plongée à St Cyprien.`,
    links: {
      website: "https://poulpfiction.netlify.app/",
      github: "https://github.com/krismos64/poulp-fiction",
    },
  },
  {
    id: "kocinaspeed",
    title: "Kocinaspeed",
    image: "/images/projects/kocinaspeed.png",
    tech: [
      "Symfony",
      "Twig",
      "Chatbot",
      "PHP",
      "JS",
      "MySQL",
      "CRUD",
      "Heygen",
      "IA",
      "FCPX",
    ],
    description: `Projet d'entraînement personnel : Site web réalisé avec Symfony proposant des recettes de cuisine et intégrant un chatbot intéractif. Accès à un espace administrateur pour les gérants du site, pouvant éditer ou modifier les recettes du site dans la base de données, avec images et vidéos, gérer les avis des visiteurs. Création de la chaîne youtube. Montages des vidéos des recettes. Voir les liens ci-dessous pour la synthèse des détails de la conception, le code source sur Github ainsi qu'une vidéo publicitaire de présentation du site web.`,
    links: {
      website: "https://kocinaspeed.fr/",
      github: "https://github.com/krismos64/kocinaspeed",
      video: "https://www.youtube.com/watch?v=-BynMQHg3uQ",
      documentation: "/docs/Synthese-Kocinaspeed.pdf",
    },
    audio: "/audio/kocinaspeed-podcast.mp3",
  },
  {
    id: "parrot",
    title: "Garage V.Parrot",
    image: "/images/projects/parrot.png",
    tech: [
      "Symfony",
      "Twig",
      "PHP",
      "JS",
      "MySQL",
      "CRUD",
      "Heygen",
      "IA",
      "FCPX",
    ],
    description: `Site web réalisé avec Symfony dans le cadre de l'examen final de la formation "DWWM", avec espace administrateur. Voir les boutons ci-dessous pour le dossier projet avec les détails de la conception ainsi que le Github.`,
    links: {
      website: "https://garageparrot.space/",
      github: "https://github.com/krismos64/GarageAuto",
      video:
        "https://www.youtube.com/watch?v=Qjrm9HWjzbo&ab_channel=krismosDev",
      documentation: "/docs/dossier projet FINAL.pdf",
    },
  },
  {
    id: "freelance",
    title: "Mon site web pro",
    image: "/images/projects/Freelance.jpg",
    tech: [
      "React",
      "JS",
      "Micro-entreprise",
      "Freelance",
      "Services",
      "Formulaire de contact",
    ],
    description: `Réalisation de mon site web professionnel, en React, création de ma micro-entreprise. Avec la présentation de mes services proposés, un portfolio et un formulaire de contact`,
    links: {
      website: "https://christophe-dev-freelance.fr/",
      github: "https://github.com/krismos64/Christophe-Mostefaoui-Dev",
    },
  },
  {
    id: "stacymakeup",
    title: "StacyMakeupCreations",
    image: "/images/projects/logo3.png",
    tech: ["Symfony", "Twig", "PHP", "JS", "MySQL", "CRUD"],
    description: `Projet personnel : Site web réalisé avec Symfony pour une personne désirant exposer ses créations de maquillage/ongles avec un espace administrateur pour gérer les publications, photos et vidéos.`,
    links: {
      website: "https://stacymakeupcreations.space/",
      github: "https://github.com/krismos64/stacymakeupcreations",
      documentation: "/docs/SyntheseStacymakeupcreations.pdf",
    },
  },
  {
    id: "jds",
    title: "Jeux de société",
    image: "/images/projects/sitejds.jpg",
    tech: ["JS", "CSS", "FCPX", "Suno ai"],
    description: `Site web régulièrement mis à jour réalisé pour une bande d'amis qui se réunissent régulièrement pour des soirées jeux de société, avec récapitulatif des scores, des jeux, anecdotes, photos, montages vidéos avec chansons personnalisées crées avec SUNO.AI. Javascript. Projet de création de base de donnée et espace administrateur à venir prochainement`,
    links: {
      website: "https://embrouillejds.netlify.app/",
      github: "https://github.com/krismos64/JDS",
      documentation: "/docs/syntheseJDS.pdf",
    },
  },
  {
    id: "metalgear",
    title: "Metal Gear",
    image: "/images/projects/mgs.jpg",
    tech: ["JS", "CHATBOT", "API", "IA", "QUIZ"],
    description: `Projet personnel : Réalisation d'un site web sur l'univers de Metal gear (le jeu vidéo) avec la présentation des personnages, des intrigues, un quiz et un chatbot interractif qui vous permet de dialoguer avec Snake, le personnage principal du jeu. Ce site me sert notamment à un entraînement de l'utilisation de Javascript et l'intégration d'un chatbot personnalisé via une API chatgpt.`,
    links: {
      website: "https://mgs-quiz-krismos.netlify.app/",
      github: "https://github.com/krismos64/Metal-Gear",
      documentation: "/docs/syntheseMetalGear.pdf",
    },
  },
  {
    id: "youtube-channel",
    title: "Création chaîne Youtube",
    image: "/images/projects/youtubechannel.png",
    tech: ["Youtube"],
    description: `Chaîne destinée à présenter mes projets en vidéos en tant que développeur web. Je compte également prochainement partager mes connaissances et astuces sous forme de vidéos, abonnez-vous !`,
    links: {
      youtube: "https://www.youtube.com/@krismosDev/playlists",
    },
  },
  {
    id: "video-candidature",
    title: "Réalisation vidéo de candidature",
    image: "/images/portfolio/chris3.png",
    tech: ["Youtube", "FCPX", "NotebookLM", "Heygen", "IA"],
    description: `Projet personnel : Réalisation d'une vidéo originale en utilisant l'IA qui présente mon personnage, mes compétences, mes motivations et mon expérience. J'ai utilisé NOTEBOOKLM pour générer un texte cohérent en lui fournissant comme sources mon CV, mon portfolio, mon linkedin, mes projets et d'autres documents montrant mon travail. J'ai ensuite généré une voix, puis un avatar IA sur HEYGEN, et pour finir j'ai monté la vidéo à l'aide de FCPX et publié sur ma chaine YOUTUBE.`,
    links: {
      video:
        "https://www.youtube.com/watch?v=6rEa_1e7qm8&ab_channel=krismosDev",
    },
  },
  {
    id: "podcast-candidature",
    title: "Réalisation vidéo de candidature en podcast",
    image: "/images/projects/podcast.png",
    tech: ["Youtube", "FCPX", "NotebookLM", "IA"],
    description: `Projet personnel : Réalisation d'une vidéo originale en utilisant l'IA de NotebookLM qui présente mon personnage, mes compétences, mes motivations et mon expérience sous forme de podcast. Pour finir j'ai monté la vidéo à l'aide de FCPX et publié sur ma chaine YOUTUBE.`,
    links: {
      video:
        "https://www.youtube.com/watch?v=TJXDgX5yApI&ab_channel=krismosDev",
    },
  },
  {
    id: "kaamelot",
    title: "La quête du trésor de Kaamelot",
    image: "/images/projects/kaamelot.png",
    tech: ["JS", "Algo", "Djikstra", "BFS", "Labyrinthe"],
    description: `Exercice d'entraînement Javascript : Ce projet combine des algorithmes classiques (Dijkstra, BFS) avec des techniques de développement web modernes pour créer une expérience immersive et interactive dans l'univers de Kaamelot.`,
    links: {
      website: "https://kingdome-kaamelot-map.netlify.app/",
      github: "https://github.com/krismos64/kaamelot",
      documentation: "/docs/La Quete du Tresor de Kaamelott.pdf",
    },
  },
  {
    id: "morpion",
    title: "Jeu du Morpion",
    image: "/images/projects/morpion.png",
    tech: ["JS", "Algo"],
    description: `Exercice d'entraînement : Jeu du morpion réalisé en Javascript.`,
    links: {
      website: "https://krismorpion-thegame.netlify.app/",
      github: "https://github.com/krismos64/JeuDuMorpion",
    },
  },
  {
    id: "casse-briques",
    title: "Jeu du Casse-briques",
    image: "/images/projects/casse-briques.png",
    tech: ["JS", "Algo"],
    description: `Exercice d'entraînement : Jeu du casse-briques réalisé en Javascript.`,
    links: {
      website: "https://kriskasbrik.netlify.app/",
      github: "https://github.com/krismos64/CasseBriques",
    },
  },
  {
    id: "typing-game",
    title: "Jeu du typing game",
    image: "/images/projects/typing-game.png",
    tech: ["JS", "Algo"],
    description: `Exercice d'entraînement : Jeu pour taper le plus vite possible réalisé en Javascript.`,
    links: {
      website: "https://kristypingame.netlify.app/",
      github: "https://github.com/krismos64/TypingGame",
    },
  },
  {
    id: "todolist",
    title: "To do list",
    image: "/images/projects/todolist-vert.png",
    tech: ["JS", "Algo"],
    description: `Exercice d'entraînement : Site de todolist réalisé en Javascript`,
    links: {
      website: "https://krislist.netlify.app/",
      github: "https://github.com/krismos64/Todolist",
    },
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const getProjectById = (id: string) =>
  projects.find((project) => project.id === id);
