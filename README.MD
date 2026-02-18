# Portfolio — Christophe Mostefaoui

Portfolio professionnel de Christophe Mostefaoui, développeur Fullstack Next.js / React. Design moderne Apple/Google-inspired en dark mode, construit avec **Astro v5** + **TypeScript**.

**Site en ligne** : [krismos.fr](https://krismos.fr)

## Stack

- **Astro v5** — Framework web statique
- **React 19** — Composants interactifs
- **TypeScript** — Typage strict
- **CSS Scoped** — Styles par composant, CSS Custom Properties (palette zinc dark mode)
- **Inter** — Typographie Google Fonts

## Sections

| Section | Description |
|---------|-------------|
| **Hero** | Présentation avec badge "Disponible", CTA projets & CV, liens LinkedIn/GitHub |
| **Parcours** | Timeline verticale des formations (CDA, DWWM) et expériences |
| **Compétences** | 6 catégories : Frontend, Backend & BDD, DevOps & CI/CD, IA & Automatisation, Conception, Gestion de projet |
| **Projets** | SmartPlanning AI V2 en projet phare + 4 projets en grille avec liens directs |
| **Contact** | Email, LinkedIn, GitHub |

## Architecture

```
src/
├── components/
│   ├── Navigation.astro    # Navbar glassmorphism + burger mobile
│   ├── Hero.astro          # Section hero Apple-inspired
│   ├── About.astro         # Timeline parcours
│   ├── Skills.astro        # Compétences (6 catégories, SVG inline)
│   └── Projects.astro      # Projets (featured + grille)
├── data/
│   └── projects.ts         # Données des 5 projets
├── layouts/
│   └── Layout.astro        # Layout global, SEO, CSS variables
└── pages/
    └── index.astro         # Page unique + section contact

public/
├── images/                 # Images portfolio et projets
└── docs/                   # CV PDF
```

## Développement

```bash
npm install          # Installer les dépendances
npm run dev          # Serveur de développement (localhost:4321)
npm run build        # Build de production
npm run preview      # Prévisualiser le build
```

## SEO

- Open Graph + Twitter Card
- JSON-LD (schema Person)
- Canonical URL
- Sitemap XML + robots.txt
- Favicon PNG

## Déploiement

Build statique compatible avec tout hébergeur :

```bash
npm run build        # Génère le dossier dist/
```
