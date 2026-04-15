# Portfolio — Christophe Mostefaoui

[![Site](https://img.shields.io/badge/Site-krismos.fr-3b82f6?style=flat-square)](https://krismos.fr)
[![Astro](https://img.shields.io/badge/Astro-v5-ff5d01?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178c6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![License](https://img.shields.io/badge/License-ISC-22c55e?style=flat-square)](LICENSE)

Portfolio professionnel de **Christophe Mostefaoui**, Concepteur Developpeur d'Applications Fullstack & IA. Design Apple/Google-inspired en dark mode avec fond Canvas anime.

> **Site en ligne** : [krismos.fr](https://krismos.fr) | **Freelance** : [christophe-dev-freelance.fr](https://christophe-dev-freelance.fr/)

---

## Fonctionnalites

- **Portfolio one-page** — Hero, projets, competences, processus, parcours, contact
- **Blog technique** — Serie de 8 articles sur la creation de SmartPlanning (SaaS), de l'analyse des besoins au deploiement
- **Fond anime Canvas** — Fragments de syntaxe dev flottants
- **Terminal interactif** — Typewriter effect simulant un workflow dev en 5 etapes
- **SEO avance** — JSON-LD, Open Graph, geo meta tags, sitemap auto
- **Accessibilite** — WCAG, skip link, aria, prefers-reduced-motion
- **Responsive** — Mobile-first, 6 breakpoints

## Stack technique

| Categorie   | Technologie                                                     |
| ----------- | --------------------------------------------------------------- |
| Framework   | [Astro v5](https://astro.build) + [React 19](https://react.dev) |
| Langage     | TypeScript (strict)                                             |
| Blog        | MDX via `@astrojs/mdx` (Content Collections)                    |
| Styles      | CSS scoped par composant + CSS Custom Properties                |
| Typographie | Inter (Google Fonts, chargement non-bloquant)                   |
| Animation   | Canvas API (fond), CSS transitions (scroll reveal)              |
| SEO         | `@astrojs/sitemap`, JSON-LD, Open Graph, geo tags               |
| Build       | Vite (integre a Astro), output statique                         |

## Demarrage rapide

```bash
# Cloner le projet
git clone https://github.com/krismos64/New-Portfolio-Chris.git
cd New-Portfolio-Chris

# Installer les dependances
npm install

# Lancer le serveur de developpement
npm run dev
```

Le site est accessible sur [localhost:4321](http://localhost:4321).

## Scripts disponibles

| Commande              | Description                               |
| --------------------- | ----------------------------------------- |
| `npm run dev`         | Serveur de developpement (localhost:4321) |
| `npm run build`       | Build de production dans `dist/`          |
| `npm run preview`     | Previsualiser le build                    |
| `npm run astro check` | Verification des types TypeScript         |

## Architecture du projet

```
src/
├── components/
│   ├── Navigation.astro        # Navbar glassmorphism + burger mobile
│   ├── Hero.astro              # Section hero avec geolocalisation SEO
│   ├── About.astro             # Timeline parcours (formations + experience)
│   ├── Skills.astro            # 6 categories de competences (SVG inline)
│   ├── Projects.astro          # SmartPlanning featured + 5 projets en grille
│   ├── Process.astro           # Terminal interactif macOS typewriter
│   └── blog/
│       ├── TableOfContents.astro  # Sommaire auto-genere
│       └── VideoDemo.astro        # Composant video (YouTube / local)
├── content/
│   ├── config.ts               # Schema Content Collection (blog)
│   └── blog/                   # 8 articles MDX SmartPlanning
│       ├── 01-analyse-des-besoins.mdx
│       ├── 02-gestion-de-projet-agile.mdx
│       ├── 03-conception-base-de-donnees.mdx
│       ├── 04-architecture-nextjs-saas.mdx
│       ├── 05-developpement-fonctionnalites.mdx
│       ├── 06-strategie-de-tests.mdx
│       ├── 07-cicd-docker-deploiement.mdx
│       └── 08-demos-fonctionnalites.mdx
├── data/
│   └── projects.ts             # Donnees des 6 projets (interface typee)
├── layouts/
│   ├── Layout.astro            # Layout global, SEO, CSS variables, Canvas
│   └── BlogPost.astro          # Layout article (JSON-LD, breadcrumb, nav)
└── pages/
    ├── index.astro             # Page d'accueil (one-page)
    └── blog/
        ├── index.astro         # Liste des articles avec filtres
        └── [...slug].astro     # Route dynamique article

public/
├── images/                     # Images portfolio, projets, blog, OG
├── docs/                       # CV PDF
└── video/                      # Animation logo navbar
```

## Blog technique

Le blog documente la creation de **SmartPlanning** (SaaS Next.js 15) en 8 articles :

1. **Analyse des besoins** — Benchmark, personas, user stories, maquettes Figma
2. **Gestion de projet Agile** — Scrum solo, Jira, Confluence, sprints thematiques
3. **Conception BDD** — Merise, PostgreSQL, Prisma, architecture multi-tenant
4. **Architecture Next.js** — App Router, Server Actions, 4 couches, design patterns
5. **Developpement** — Plannings, conges, Stripe, messagerie, import CSV, SSE
6. **Strategie de tests** — 3003 tests, Vitest, Playwright, CI bloquante
7. **CI/CD et deploiement** — Docker, GitHub Actions, VPS OVH, securite
8. **Demos video** — Fonctionnalites en action (a venir)

Chaque article inclut : SEO (JSON-LD `BlogPosting`), fil d'Ariane, barre de progression de lecture, table des matieres, navigation prev/next, et CTA recrutement.

## SEO

- **JSON-LD** : WebSite, ProfilePage, Person, SoftwareApplication, Blog, BlogPosting, BreadcrumbList
- **Open Graph + Twitter Card** avec image OG dediee (1200x630)
- **Geo meta tags** : geo.region FR-64, geo.placename, ICBM (Pau, Artix, Bearn)
- **Meta keywords** geolocalises (portfolio, CDA, IA, Pau, Artix, Orthez, Bearn)
- **Sitemap auto** via `@astrojs/sitemap`
- **Hreflang fr**, canonical URL, robots.txt

## Accessibilite

- Skip link vers le contenu principal
- `aria-expanded` / `aria-hidden` dynamiques sur le menu mobile
- Fermeture menu avec Escape + focus trap
- `aria-label` sur les liens sociaux et le logo
- `prefers-reduced-motion` respecte (canvas, video, transitions)
- `tabindex` dynamique sur les liens du menu ferme

## Design tokens

```css
--bg: #09090b; /* zinc-950 */
--bg-card: #18181b; /* zinc-900 */
--border: #27272a; /* zinc-800 */
--text: #fafafa; /* zinc-50 */
--text-secondary: #a1a1aa; /* zinc-400 */
--accent: #3b82f6; /* blue-500 */
--green: #22c55e;
--purple: #a855f7;
--amber: #f59e0b;
```

## Deploiement

Build statique compatible avec tout hebergeur :

```bash
npm run build    # Genere dist/
```

Le dossier `dist/` peut etre deploye sur Netlify, Vercel, Cloudflare Pages, ou tout serveur statique.

## Auteur

**Christophe Mostefaoui** — Concepteur Developpeur d'Applications Fullstack

- [Portfolio](https://krismos.fr)
- [LinkedIn](https://www.linkedin.com/in/christophemostefaoui/)
- [GitHub](https://github.com/krismos64)
- [Freelance](https://christophe-dev-freelance.fr/)

## Licence

ISC
