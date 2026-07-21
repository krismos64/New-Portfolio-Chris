# Portfolio de Christophe Mostefaoui

[![Site](https://img.shields.io/badge/Site-krismos.fr-3b82f6?style=flat-square)](https://krismos.fr)
[![Deploy](https://github.com/krismos64/New-Portfolio-Chris/actions/workflows/deploy.yml/badge.svg)](https://github.com/krismos64/New-Portfolio-Chris/actions/workflows/deploy.yml)
[![Astro](https://img.shields.io/badge/Astro-v5-ff5d01?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178c6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![License](https://img.shields.io/badge/License-ISC-22c55e?style=flat-square)](LICENSE)

Portfolio professionnel de **Christophe Mostefaoui**, Concepteur Développeur d'Applications Fullstack & IA. Design Apple/Google-inspired en dark mode avec fond Canvas animé.

> **Site en ligne** : [krismos.fr](https://krismos.fr) | **Freelance** : [christophe-dev-freelance.fr](https://christophe-dev-freelance.fr/)

---

## Fonctionnalités

- **Portfolio one-page** : Hero, projets, compétences, processus, parcours, contact
- **Blog technique** : série de 8 articles sur la création de SmartPlanning (SaaS), de l'analyse des besoins au déploiement
- **Fond animé Canvas** : fragments de syntaxe dev flottants
- **Terminal interactif** : typewriter effect simulant un workflow dev en 5 étapes
- **Assistant IA Mistral** : chatbot personnalisé pour recruteurs techniques, UI
  Astro/JavaScript vanilla, proxy PHP et streaming SSE
- **SEO avancé** : JSON-LD, Open Graph, geo meta tags, sitemap auto
- **Accessibilité** : WCAG, skip link, aria, prefers-reduced-motion
- **Responsive** : mobile-first, 6 breakpoints
- **Déploiement continu** : mise en production automatique à chaque push

## Stack technique

| Catégorie   | Technologie                                                    |
| ----------- | -------------------------------------------------------------- |
| Framework   | [Astro v5](https://astro.build), composants `.astro`           |
| Client      | TypeScript et JavaScript vanilla, sans runtime React global    |
| Blog        | MDX via `@astrojs/mdx` et Content Collections                  |
| Chatbot     | Mistral AI, PHP, cURL et streaming SSE                         |
| Styles      | CSS scoped par composant et CSS Custom Properties              |
| Typographie | Inter, chargement non bloquant                                 |
| Animation   | Canvas API, CSS transitions et `prefers-reduced-motion`        |
| SEO         | `@astrojs/sitemap`, JSON-LD, Open Graph et geo tags            |
| Build       | Vite intégré à Astro, sortie statique                          |
| CI/CD       | GitHub Actions, contrôles qualité et déploiement FTPS          |

## Démarrage rapide

```bash
# Cloner le projet
git clone https://github.com/krismos64/New-Portfolio-Chris.git
cd New-Portfolio-Chris

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site est accessible sur [localhost:4321](http://localhost:4321).

> Astro ne lance pas PHP en développement. L'interface du chatbot fonctionne en
> local, mais une question affiche le message de repli tant que le proxy n'est
> pas servi par un environnement PHP.

## Scripts disponibles

| Commande          | Description                                |
| ----------------- | ------------------------------------------ |
| `npm run dev`     | Serveur de développement (localhost:4321)  |
| `npm run build`   | Build de production dans `dist/`           |
| `npm run preview` | Prévisualiser le build                     |
| `npx astro check` | Vérification des types TypeScript          |

## Architecture du projet

```
src/
├── components/
│   ├── Navigation.astro        # Navbar glassmorphism + burger mobile
│   ├── Hero.astro              # Section hero avec géolocalisation SEO
│   ├── About.astro             # Timeline parcours (formations + expérience)
│   ├── Skills.astro            # 6 catégories de compétences (SVG inline)
│   ├── Projects.astro          # SmartPlanning featured + 5 projets en grille
│   ├── Process.astro           # Terminal interactif macOS typewriter
│   ├── RecruiterChatbot.astro  # Widget Mistral en JavaScript vanilla
│   ├── BlogNav.astro           # Navbar dédiée aux pages blog
│   └── blog/
│       ├── TableOfContents.astro  # Sommaire auto-généré
│       └── VideoDemo.astro        # Composant vidéo (YouTube / local)
├── content/
│   ├── config.ts               # Schéma Content Collection (blog)
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
│   ├── projects.ts             # Données des 6 projets (interface typée)
│   └── categories.ts           # Couleurs et labels des catégories blog
├── layouts/
│   ├── Layout.astro            # Layout global, SEO, CSS variables, Canvas
│   └── BlogPost.astro          # Layout article (JSON-LD, breadcrumb, nav)
└── pages/
    ├── index.astro             # Page d'accueil (one-page)
    └── blog/
        ├── index.astro         # Liste des articles avec filtres
        └── [...slug].astro     # Route dynamique article

public/
├── api/
│   └── chat.php                # Proxy Mistral, sécurité, quotas et relais SSE
├── chatbot-knowledge.txt       # Base de connaissances détaillée du chatbot
├── llms.txt                    # Résumé public pour moteurs et assistants IA
├── images/                     # Images portfolio, projets, blog, OG
├── docs/                       # CV PDF
└── video/                      # Animation logo navbar

docs/
└── mistral-chatbot-setup.md    # Configuration de la clé sur Hostinger
```

## Assistant IA pour recruteurs techniques

Le chatbot remplace l'ancien widget Chatbase par une solution maîtrisée de bout
en bout. Il s'adresse aux recruteurs, CTO, DSI, engineering managers et leads
tech qui souhaitent explorer le parcours de Christophe, ses projets et ses choix
d'architecture.

### Comportement

- réponses à la première personne, avec un ton chaleureux et professionnel ;
- réponses courtes aux questions simples et développées lorsque le sujet est
  technique ;
- mise en avant de preuves concrètes, sans inventer de métriques ou d'expérience ;
- historique conservé dans `sessionStorage` pendant la navigation ;
- suggestions de questions adaptées au recrutement ;
- interface responsive, accessible au clavier et compatible avec la réduction
  des animations ;
- dépôt SmartPlanning présenté comme privé et partageable sur demande dans un
  contexte de recrutement.

La base [public/chatbot-knowledge.txt](public/chatbot-knowledge.txt) contient les
informations rédigées et validées par Christophe : disponibilité, mobilité,
positionnement, projets, retours d'expérience, limites assumées, pratiques IA et
coordonnées. Le fichier [public/llms.txt](public/llms.txt) reste un résumé public
destiné au référencement dans les moteurs et assistants IA.

### Flux technique

```text
RecruiterChatbot.astro
        |
        | POST /api/chat.php avec les 10 derniers messages
        v
Proxy PHP Hostinger
        |
        | clé hors webroot + prompt serveur + bases de connaissances
        v
API Mistral, modèle mistral-small-latest
        |
        | événements SSE relayés sans mise en mémoire complète
        v
Affichage progressif dans le navigateur
```

Le navigateur n'envoie que les rôles `user` et `assistant`. Le modèle, le prompt,
la température, la limite de tokens et les sources sont imposés côté serveur.

### Sécurité et maîtrise des coûts

- méthode `POST` obligatoire ;
- origine limitée à `krismos.fr` ;
- corps limité à 20 000 octets ;
- 10 messages maximum et 2 000 caractères par message ;
- 10 requêtes par minute et par IP ;
- plafond global de 500 requêtes par jour ;
- clé API absente du dépôt, du bundle client et de `public_html` ;
- erreurs Mistral détaillées uniquement dans les journaux serveur ;
- modèle et plafond de 600 tokens imposés par le proxy.

La clé Mistral doit être créée manuellement dans
`domains/krismos.fr/mistral-key.php`, au même niveau que `public_html` :

```php
<?php return 'VOTRE_CLE_MISTRAL';
```

Le guide complet de configuration et de rotation se trouve dans
[docs/mistral-chatbot-setup.md](docs/mistral-chatbot-setup.md).

## Blog technique

Le blog documente la création de **SmartPlanning** (SaaS Next.js 15) en 8 articles :

1. **Analyse des besoins** : benchmark, personas, user stories, maquettes Figma
2. **Gestion de projet Agile** : Scrum solo, Jira, Confluence, sprints thématiques
3. **Conception BDD** : Merise, PostgreSQL, Prisma, architecture multi-tenant
4. **Architecture Next.js** : App Router, Server Actions, 4 couches, design patterns
5. **Développement** : plannings, congés, Stripe, messagerie, import CSV, SSE
6. **Stratégie de tests** : 3003 tests, Vitest, Playwright, CI bloquante
7. **CI/CD et déploiement** : Docker, GitHub Actions, VPS OVH, sécurité
8. **Démos vidéo** : fonctionnalités en action

Chaque article inclut : SEO (JSON-LD `BlogPosting`), fil d'Ariane, barre de progression de lecture, table des matières, navigation prev/next, et CTA recrutement.

## SEO

- **JSON-LD** : WebSite, ProfilePage, Person, SoftwareApplication, Blog, BlogPosting, BreadcrumbList
- **Open Graph + Twitter Card** avec image OG dédiée (1200x630)
- **Geo meta tags** : geo.region FR-64, geo.placename, ICBM (Pau, Artix, Béarn)
- **Meta keywords** géolocalisés (portfolio, CDA, IA, Pau, Artix, Orthez, Béarn)
- **Sitemap auto** via `@astrojs/sitemap`
- **Hreflang fr**, canonical URL, robots.txt

## Accessibilité

- Skip link vers le contenu principal
- `aria-expanded` / `aria-hidden` dynamiques sur le menu mobile
- Fermeture menu avec Escape + focus trap
- `aria-label` sur les liens sociaux et le logo
- `prefers-reduced-motion` respecté (canvas, vidéo, transitions)
- `tabindex` dynamique sur les liens du menu fermé
- chatbot utilisable au clavier, fermeture avec Escape et zone de messages
  annoncée avec `aria-live`

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

## Déploiement

Le déploiement est **entièrement automatisé** via GitHub Actions ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) : chaque push sur `main` déclenche les contrôles qualité (typage, règles rédactionnelles), le build Astro, puis la synchronisation incrémentale de `dist/` vers l'hébergement Hostinger en FTPS. Astro copie également `public/api/chat.php`, `public/chatbot-knowledge.txt` et `public/llms.txt` dans `dist/` avant le transfert.

```bash
git push origin main    # = mise en production (environ 2 minutes)
```

Les identifiants FTP sont stockés en secrets GitHub Actions (jamais dans le code). Un déclenchement manuel est possible depuis l'onglet Actions ou avec `gh workflow run deploy.yml`.

## Auteur

**Christophe Mostefaoui**, Concepteur Développeur d'Applications Fullstack

- [Portfolio](https://krismos.fr)
- [LinkedIn](https://www.linkedin.com/in/christophemostefaoui/)
- [GitHub](https://github.com/krismos64)
- [Freelance](https://christophe-dev-freelance.fr/)

## Licence

ISC
