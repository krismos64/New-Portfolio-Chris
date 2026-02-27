# Portfolio — Christophe Mostefaoui

Portfolio professionnel de Christophe Mostefaoui, concepteur développeur d'applications fullstack & IA. Design Apple/Google-inspired en dark mode, construit avec **Astro v5** + **TypeScript**.

**Site en ligne** : [krismos.fr](https://krismos.fr)

## Stack

- **Astro v5** — Framework web statique avec `@astrojs/sitemap`
- **TypeScript** — Typage strict
- **CSS Scoped** — Styles par composant, CSS Custom Properties (palette zinc dark mode)
- **Inter** — Typographie Google Fonts (chargement non-bloquant)
- **Canvas API** — Fond animé avec fragments de syntaxe dev + animation tech featured project

## Sections

| Section | Description |
|---------|-------------|
| **Hero** | Badge "Disponible", titre "Concepteur Développeur Fullstack & IA", localisation Béarn (64), CTA projets & CV, liens sociaux |
| **Pitch** | Paragraphe de présentation personnelle (reconversion, motivation) |
| **Projets** | SmartPlanning en projet phare (canvas animé tech) + 5 projets en grille (dont 4 clients freelance réels) |
| **Compétences** | 6 catégories : Frontend, Backend & BDD, DevOps & CI/CD, IA & Automatisation, Conception & Tests, Gestion de projet |
| **Processus** | Terminal interactif macOS avec typewriter effect — workflow en 5 étapes (analyse, architecture, dev, deploy, gestion) |
| **Parcours** | Timeline verticale des formations (CDA spé. IA, DWWM) et expériences |
| **Contact** | Site freelance, email, LinkedIn, GitHub |

## Architecture

```
src/
├── components/
│   ├── Navigation.astro    # Navbar glassmorphism + burger mobile + Escape + focus trap
│   ├── Hero.astro          # Section hero avec géolocalisation SEO
│   ├── About.astro         # Timeline parcours
│   ├── Skills.astro        # Compétences (6 catégories, SVG inline)
│   ├── Projects.astro      # Projets (featured avec canvas animé + grille 2 colonnes)
│   └── Process.astro       # Terminal interactif typewriter
├── data/
│   └── projects.ts         # Données des 6 projets (interface typée)
├── layouts/
│   └── Layout.astro        # Layout global, SEO, CSS variables, fond animé Canvas
└── pages/
    └── index.astro         # Page unique : pitch + contact + scroll reveal

public/
├── images/                 # Images portfolio et projets + image Open Graph
├── docs/                   # CV PDF
└── video/                  # Animation logo navbar
```

## Développement

```bash
npm install          # Installer les dépendances
npm run dev          # Serveur de développement (localhost:4321)
npm run build        # Build de production → dist/
npm run preview      # Prévisualiser le build
npm run astro check  # Type checking
```

## SEO

- **Title & meta description** géolocalisés (Pau, Béarn, 64, Pyrénées-Atlantiques)
- **Open Graph + Twitter Card** avec image OG dédiée (1200x630)
- **JSON-LD** : WebSite + ProfilePage + Person + areaServed + hasOccupation
- **Geo meta tags** : geo.region FR-64, geo.placename, ICBM
- **Meta keywords** ciblés (portfolio, développeur web, CDA, IA, Pau, Artix, Orthez)
- **Hreflang fr** explicite
- **Sitemap auto** via `@astrojs/sitemap` (lastmod fixe)
- **robots.txt** configuré
- Canonical URL + Favicon PNG
- **Google Fonts** chargé en non-bloquant (preload + media print)

## Accessibilité

- Skip link vers le contenu principal
- `aria-expanded` et `aria-hidden` dynamiques sur le menu mobile
- Fermeture du menu mobile avec **Escape** + gestion du focus
- `aria-label` sur le logo navbar et les liens sociaux
- `aria-hidden="true"` sur tous les SVG décoratifs
- **`prefers-reduced-motion`** respecté : canvas désactivé, gradient CSS stoppé, vidéo logo pausée, typewriter affiché instantanément, scroll reveal sans transition
- `tabindex` dynamique pour empêcher le focus sur le menu fermé

## Responsive

- Breakpoints : 480px, 640px, 768px, 900px, 1024px
- Menu burger mobile avec fermeture au clic dehors et Escape
- Images responsive, photo hero adaptée par breakpoint
- Typographie responsive avec `clamp()`

## Déploiement

Build statique compatible avec tout hébergeur :

```bash
npm run build        # Génère le dossier dist/
```
