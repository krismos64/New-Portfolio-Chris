# Portfolio Christophe Mostefaoui - Développeur Web

Portfolio professionnel présentant mes compétences en développement web, mes projets réalisés et mon parcours professionnel. Réalisé avec **Astro v5** et une approche moderne, interactive avec un design cyberpunk.

## 🌟 Fonctionnalités clés

- **Framework Moderne**  
  Construit avec Astro v5 et composants React pour une performance optimale
- **Design Cyberpunk**  
  Thème sombre avec accents néon et animation d'étoiles en arrière-plan
- **Animations Natives**  
  Animations fluides avec JavaScript vanilla et IntersectionObserver
- **Responsive Design**  
  Interface adaptative pour tous les appareils avec menu burger sur mobile
- **Sections Interactives**
  - Présentation radiale interactive avec photo centrale
  - Galerie de projets avec menus déroulants
  - Lecteur audio personnalisé pour les podcasts
  - Fenêtre modale pour afficher le diplôme
  - Intégration vidéo YouTube
  - Timeline de parcours professionnel
- **Optimisation Performances**
  - Animation des étoiles optimisée (150 éléments)
  - Navigation fluide avec smooth scroll
  - Lazy loading des images

## 🛠 Stack Technologique

**Framework & Build**

- **Astro v5** - Framework web moderne
- **React** - Composants interactifs
- **TypeScript** - Typage statique
- **Vite** - Build tool rapide

**Frontend**

- HTML5/CSS3 (Grid/Flexbox)
- JavaScript ES6+ (Vanilla)
- CSS Custom Properties
- Responsive Design

**Outils & Librairies**

- Font Awesome (Icônes)
- YouTube Embed API
- IntersectionObserver (Animations au scroll)

## 🎨 Structure du Site

### 1. Section Hero (Radiale)

- Présentation radiale avec photo centrale
- Cartes de présentation disposées en cercle
- Vidéo d'animation dans la navigation
- Boutons d'action (CV, Diplôme)
- Liens réseaux sociaux (LinkedIn, GitHub)
- Miniature vidéo YouTube cliquable

### 2. Parcours Professionnel

- Timeline verticale interactive
- Étapes clés du parcours avec animations au scroll
- Mise en évidence des formations (DWWM, CDA IA)
- Alternance gauche-droite pour la timeline

### 3. Compétences Techniques

- Grille de logos technologiques
- Texte descriptif des compétences
- Animation au défilement avec IntersectionObserver

### 4. Projets

- Cartes de projet interactives avec :
  - Images avec overlay
  - Tags de technologies utilisées
  - Menus déroulants pour plus d'informations
  - Lecteur audio intégré pour les podcasts
  - Liens vers démos, GitHub, documentation

### 5. Articles

- Cartes d'articles LinkedIn
- Images et descriptions
- Liens vers les publications originales

### 6. Contact

- Photo de profil avec effet glow
- Bulle de présentation
- Grille d'informations de contact
- Liens directs (téléphone, email)

## 🚀 Installation et Développement

### Prérequis

- Node.js 18+
- npm ou yarn

### Installation

1. **Cloner le dépôt :**

```bash
git clone https://github.com/krismos64/New-Portfolio-Chris.git
cd New-Portfolio-Chris
```

2. **Installer les dépendances :**

```bash
npm install
```

3. **Lancer le serveur de développement :**

```bash
npm run dev
```

4. **Ouvrir dans le navigateur :**
   - **Local** : http://localhost:4321/
   - **Network** : utiliser `--host` pour exposer sur le réseau

### Scripts disponibles

```bash
npm run dev        # Serveur de développement
npm run build      # Build de production
npm run preview    # Prévisualiser le build
npm run astro      # Commandes Astro
```

## 🏗️ Architecture du Projet

```
src/
├── components/          # Composants Astro
│   ├── Hero.astro      # Section hero radiale
│   ├── About.astro     # Timeline parcours
│   ├── Skills.astro    # Compétences techniques
│   ├── Projects.astro  # Section projets
│   ├── Articles.astro  # Articles LinkedIn
│   └── Navigation.astro # Menu navigation
├── data/
│   └── projects.ts     # Données des projets
├── layouts/
│   └── Layout.astro    # Layout principal
├── pages/
│   └── index.astro     # Page d'accueil
└── styles/
    └── style.css       # Styles globaux

public/
├── images/             # Images et logos
├── docs/              # CV et documents
├── audio/             # Fichiers podcasts
└── video/             # Vidéos
```

## 📝 Bonnes Pratiques

### **Performance**

- Build optimisé avec Astro (génération statique)
- Lazy loading des images
- CSS optimisé et minifié
- JavaScript minimal (vanilla)

### **Accessibilité**

- Structure sémantique HTML5
- Contraste élevé (niveau AAA)
- ARIA labels appropriés
- Support clavier complet

### **SEO**

- Meta tags optimisés
- Structure de données appropriée
- Images avec attributs alt
- URLs sémantiques

## 🚀 Déploiement

Le projet est configuré pour un déploiement statique :

```bash
npm run build        # Génère le dossier dist/
```
