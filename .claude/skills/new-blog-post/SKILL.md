---
name: new-blog-post
description: Créer ou publier un article de blog MDX conforme au schéma du projet (frontmatter Zod, catégorie, order, image, draft) puis vérifier le build. Utiliser dès que Christophe veut ajouter, rédiger ou publier un article sur krismos.fr/blog.
---

# Nouvel article de blog

Workflow pour ajouter un article à la collection `blog` du portfolio.

## Règle rédactionnelle absolue

**Aucun tiret cadratin (—) ni demi-cadratin (–)** dans le texte, les titres, les alt d'images, les descriptions ou les titles de composants. C'est un marqueur de texte IA. Utiliser une virgule ou deux-points à la place. Vérifier avant publication : `grep -n "—\|–" src/content/blog/NN-slug.mdx` doit être vide.

## Étapes

1. **Lire le schéma** dans `src/content/config.ts` : le frontmatter doit valider le Zod, sinon le build casse.
2. **Choisir la série**, `smartplanning` ou `claude-code`. Les métadonnées de chaque série (titre, meta description, image, accent, libellés) sont dans `src/data/series.ts`. Créer une série demande une entrée là **et** une valeur dans l'enum Zod.
3. **Déterminer `order`** : il est séquentiel **au sein de la série**, pas sur toute la collection. Lister les articles de la série visée et prendre le numéro suivant. Nommer le fichier `NN-slug-court.mdx` pour SmartPlanning, `claude-code-NN-slug.mdx` pour l'autre série (slug en kebab-case, français sans accents).
4. **Frontmatter obligatoire** :
   ```yaml
   ---
   title: "Titre : accroche claire"
   description: "150-160 caractères, orienté SEO, mots-clés SmartPlanning/CDA si pertinent."
   date: 2026-08-03
   series: "smartplanning"     # enum: smartplanning | claude-code
   category: "developpement"   # enum: analyse | gestion-projet | conception | developpement | tests | deploiement | demo | ia-outillage
   tags: ["Tag1", "Tag2"]
   image: "/images/blog/nom-image.svg"   # optionnel, fichier à placer dans public/images/blog/
   draft: true                 # true tant que non publié (filtré au build)
   order: 9
   ---
   ```
5. **Corps de l'article** : headings `##` (ils alimentent le sommaire TableOfContents automatiquement). Ton éditorial à la première personne, cohérent avec les articles existants de la même série (lire le début d'un article récent pour caler le style). Pour une vidéo YouTube, utiliser le composant `blog/VideoDemo.astro`.
6. **Visuels** : placer dans `public/images/blog/`, référencer en chemin absolu `/images/blog/...`. Format d'alt : `![Sujet : description détaillée](/images/blog/...)`.
   Une couverture au format SVG a besoin de son rendu PNG 1200x630 dans `public/images/blog/og/`, même nom de fichier : Google refuse le SVG pour les rich results, et `BlogPost.astro` construit ce chemin automatiquement.
   ```bash
   node -e "require('sharp')('public/images/blog/NOM.svg',{density:216}).resize(1200,630,{fit:'fill'}).png({quality:80}).toFile('public/images/blog/og/NOM.png').then(i=>console.log(i.width+'x'+i.height))"
   ```
7. **Maillage** : ajouter un lien contextuel depuis un article existant proche du sujet, et un lien retour. Un article sans lien entrant reste isolé pour le référencement.
8. **Publication** : passer `draft: false`, puis :
   - `grep -n "—\|–" src/content/blog/*.mdx` (zéro tiret long)
   - `npx astro check`
   - `npm run build` (vérifie la validation Zod + la génération de la page)
9. **llms.txt** : ajouter l'article dans la section de sa série, avec ses faits techniques citables. C'est le fichier que lisent les moteurs IA, l'oublier annule une grande partie du bénéfice GEO.
10. **SEO** : proposer de lancer la skill globale `seo-audit` sur la nouvelle page avant push.

## Rappels

- **Le push sur `main` déclenche la mise en production automatique** (GitHub Actions, environ 2 minutes) : dérouler la skill `pre-deploy-check` avant de pousser.
- `prev/next` est calculé par `pages/blog/[...slug].astro` **à l'intérieur d'une série**, rien à câbler. Un article ne renvoie jamais vers une autre série.
- Le `lastmod` du sitemap est dynamique (`new Date()` au build dans `astro.config.mjs`), rien à mettre à jour.
- Les URLs d'articles restent à plat (`/blog/<slug>/`), quelle que soit la série. Ne pas les préfixer : les articles SmartPlanning sont indexés sous cette forme.
- Les couleurs/labels de catégories viennent de `src/data/categories.ts`, ne pas inventer de catégorie hors enum.
- Si l'article apporte des faits utiles au chatbot recruteur, les ajouter aussi à `public/chatbot-knowledge.txt`.
- Jamais de `Co-Authored-By: Claude` dans le commit.
