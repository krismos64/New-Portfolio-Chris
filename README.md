# Portfolio — Christophe Mostefaoui

Portfolio professionnel de Christophe Mostefaoui, concepteur développeur d'applications fullstack & IA. Design Apple/Google-inspired en dark mode, construit avec **Astro v5** + **React 19** + **TypeScript**.

**Site en ligne** : [krismos.fr](https://krismos.fr)

## Stack

- **Astro v5** — Framework web statique avec `@astrojs/sitemap`
- **React 19** — Composants interactifs
- **TypeScript** — Typage strict
- **CSS Scoped** — Styles par composant, CSS Custom Properties (palette zinc dark mode)
- **Inter** — Typographie Google Fonts
- **Canvas API** — Fond animé avec fragments de syntaxe dev

## Sections

| Section | Description |
|---------|-------------|
| **Hero** | Badge "Disponible", titre "Concepteur Développeur Fullstack & IA", localisation Béarn (64), CTA projets & CV, liens sociaux |
| **Pitch** | Paragraphe de présentation personnelle (reconversion, motivation) |
| **Projets** | SmartPlanning en projet phare + 5 projets en grille (dont 4 clients freelance réels) |
| **Compétences** | 6 catégories : Frontend, Backend & BDD, DevOps & CI/CD, IA & Automatisation, Conception & Tests, Gestion de projet |
| **Processus** | Terminal interactif macOS avec typewriter effect — workflow en 5 étapes (analyse, architecture, dev, deploy, gestion) |
| **Parcours** | Timeline verticale des formations (CDA spé. IA, DWWM) et expériences |
| **Contact** | Site freelance, email, LinkedIn, GitHub |

## Architecture

```
src/
├── components/
│   ├── Navigation.astro    # Navbar glassmorphism + burger mobile + fermeture clic dehors
│   ├── Hero.astro          # Section hero avec géolocalisation SEO
│   ├── About.astro         # Timeline parcours
│   ├── Skills.astro        # Compétences (6 catégories, SVG inline)
│   ├── Projects.astro      # Projets (featured + grille 2 colonnes)
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
- **Sitemap auto** via `@astrojs/sitemap`
- **robots.txt** configuré
- Canonical URL + Favicon PNG

## Responsive

- Breakpoints : 480px, 640px, 768px, 900px, 1024px
- Menu burger mobile avec fermeture au clic dehors
- `aria-expanded` sur le toggle (conformité WCAG)
- Images responsive, photo hero adaptée par breakpoint

## Déploiement

Build statique compatible avec tout hébergeur :

```bash
npm run build        # Génère le dossier dist/
```
