# Chatbot Mistral du portfolio

Le widget est un composant Astro et JavaScript vanilla. Il appelle le proxy PHP
`public/api/chat.php`, qui ajoute le prompt système, la base dédiée
`public/chatbot-knowledge.txt` et le résumé `public/llms.txt` avant de relayer le
flux SSE de Mistral. Aucun secret n'est envoyé au navigateur.

## Configuration Hostinger

Dans le dossier du domaine `krismos.fr`, au même niveau que `public_html`, créer
manuellement le fichier `mistral-key.php` :

```php
<?php return 'VOTRE_CLE_MISTRAL';
```

Le chemin attendu en production est donc :

```text
domains/krismos.fr/mistral-key.php
domains/krismos.fr/public_html/api/chat.php
```

Le workflow existant construit Astro dans `dist/`. Astro copie automatiquement
`public/api/chat.php` et `public/llms.txt` vers `dist/`, puis le déploiement FTPS
les envoie dans `public_html`. Le fichier contenant la clé reste hors du dépôt,
hors de `dist/` et hors du webroot.

## Vérification

Le serveur de développement Astro n'exécute pas PHP. Le message de repli affiché
en local est donc attendu. Après déploiement, ouvrir le chatbot sur
`https://krismos.fr`, envoyer une question et vérifier dans l'onglet Réseau que
`POST /api/chat.php` répond en `text/event-stream`.

Le proxy accepte uniquement l'origine `krismos.fr`, limite chaque IP à 10 appels
par minute et l'ensemble du site à 500 appels par jour. Le modèle, la température,
le nombre maximal de tokens et le prompt sont imposés côté serveur.

## Maintenance

- Modifier les consignes éditoriales dans `public/api/chat.php`.
- Mettre à jour les faits de recrutement dans `public/chatbot-knowledge.txt`.
- Conserver `public/llms.txt` comme résumé public destiné au référencement IA.
- Pour tourner la clé, remplacer uniquement la valeur de `mistral-key.php` dans
  hPanel. Aucun build n'est nécessaire.
