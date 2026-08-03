---
name: pre-deploy-check
description: Checklist de vérification avant commit/push en production sur krismos.fr (astro check, build, drafts, tirets IA, sitemap lastmod, robots, OG, liens). Utiliser avant tout push destiné à la prod ou quand Christophe demande "on peut pousser ?".
---

# Vérifications avant mise en prod (krismos.fr)

Le site est statique et **chaque push sur `main` déclenche le déploiement automatique** vers Hostinger via `.github/workflows/deploy.yml` (FTPS). Tout ce qui passe le build part en prod tel quel. Dérouler cette checklist et rapporter chaque point OK/KO.

## Checklist

1. **Types** : `npx astro check`, zéro erreur.
2. **Build** : `npm run build`, doit passer sans warning bloquant.
3. **Rédaction** : `grep -rn "—\|–" src/ README.md public/llms.txt public/chatbot-knowledge.txt` doit être vide (aucun tiret cadratin ou demi-cadratin, marqueur de texte IA ; virgule ou deux-points à la place). C'est le même périmètre que le contrôle bloquant de la CI : le vérifier en local évite un déploiement en échec.
4. **Drafts** : `grep -H "^draft:" src/content/blog/*.mdx`, vérifier qu'aucun article censé être publié n'est resté en draft (et inversement, qu'aucun brouillon ne part par erreur).
5. **Sitemap** : le `lastmod` est dynamique (`new Date()` au build), rien à modifier. Vérifier la présence de `dist/sitemap-index.xml` et compter les URLs : `grep -o "<loc>" dist/sitemap-0.xml | wc -l` (le fichier est sur une seule ligne, `grep -c` renverrait 1).
6. **robots.txt** : `public/robots.txt` intact (Allow /, Allow CV PDF, Disallow /docs/ /video/ /*.pdf$).
7. **SEO on-page** (si une page a changé) : title/description, Open Graph, et JSON-LD parsable sur chaque page modifiée :
   ```bash
   python3 -c "
   import re, json, glob, sys
   for f in glob.glob('dist/**/*.html', recursive=True):
       for s in re.findall(r'<script type=\"application/ld\+json\">(.*?)</script>', open(f, encoding='utf-8').read(), re.S):
           try: json.loads(s)
           except Exception as e: print('KO', f, e); sys.exit(1)
   print('JSON-LD OK sur toutes les pages')"
   ```
8. **Liens internes** : vérifier que tous les liens et ressources de `dist/` pointent vers un fichier existant :
   ```bash
   cd dist && python3 -c "
   import re, os, glob
   cibles, ko = set(), []
   for f in glob.glob('**/*.html', recursive=True):
       h = open(f, encoding='utf-8').read()
       cibles |= set(re.findall(r'href=\"(/[^\"#?]*)\"', h)) | set(re.findall(r'src=\"(/[^\"?]*)\"', h))
   for u in sorted(cibles):
       p = u.lstrip('/')
       if not (os.path.isfile(p) or os.path.isfile(os.path.join(p, 'index.html'))): ko.append(u)
   print('CASSES :', ko) if ko else print(f'{len(cibles)} cibles, aucune cassee')"
   ```
9. **Poids images** : signaler toute nouvelle image > 300 Ko dans `public/images/` : `find public/images -type f -size +300k`.
10. **Prod après déploiement** : contrôler les nouvelles URLs **et** un échantillon d'anciennes (une régression d'URL ne se voit pas au build).

## Après validation

- Commit avec message conventionnel français (`feat(blog): ...`, `chore(seo): ...`), **jamais** de `Co-Authored-By: Claude`.
- Après le push sur `main`, suivre le déploiement : `gh run watch` (ou `gh run list --workflow=deploy.yml --limit 3`). En cas d'échec : `gh run view <id> --log-failed`.
- Vérifier la prod : `curl -sI https://krismos.fr` (200) et contrôler visuellement la page modifiée.
- Pour un audit complet Lighthouse/Core Web Vitals, proposer la skill globale `seo-audit`.
