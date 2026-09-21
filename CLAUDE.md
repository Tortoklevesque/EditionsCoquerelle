# Site web — maison d'édition (projet "sitecoquerelle")

## Contexte
Site web pour la maison d'édition de **Simon** (auteur), pour publier ses histoires et livres et les vendre en ligne.

- Nom de domaine `.ca` : déjà acheté par Simon.
- Transactions : gérées via **Square** (abonnement déjà acheté par Simon) — boutons/liens Square intégrés côté client, pas de backend de paiement à développer.
- Design : site adaptatif (responsive), rendu identique en mobile et grand écran.
- Site simple : image de **Bourtouk** affichée en grand (page d'accueil), palette de couleurs du site basée sur les couleurs de cette image. Fichier reçu : `images/bourtouk-couleur.png`.
- Accessibilité : respect des règles de base (contraste suffisant, texte alternatif sur les images, navigation au clavier, HTML sémantique). Le menu traditionnel (en parallèle du « bonhomme » cliquable, voir plus bas) sert notamment d'équivalent accessible à la navigation par image.

## Hébergement et dépôt — décisions prises
- **GitHub Pages**, gratuit, supporte le domaine `.ca` personnalisé + HTTPS automatique. Pas besoin de Netlify/Cloudflare pour l'instant.
- Le repo GitHub appartient à **Simon** (compte `Tortoklevesque`), pas au compte du développeur, pour des raisons de propriété (site + transactions = son entreprise). Repo : `github.com/Tortoklevesque/EditionsCoquerelle` (créé, vide pour l'instant). Le développeur (compte GitHub `jy-cote`) y a accès en écriture.
- `gh` (GitHub CLI) installé localement (version portable, sans droits admin, dans `%LOCALAPPDATA%\GitHubCLI`) et authentifié sous `jy-cote` — Claude Code peut pousser directement une fois confirmation donnée pour chaque push.

## Structure de contenu prévue — Jekyll
GitHub Pages supporte Jekyll nativement (pas de build via GitHub Actions nécessaire).

- Deux collections séparées, même structure de front matter : `_livres/` et `_histoires/`.
- Gabarit créé dans chaque répertoire (`_livres/GABARIT.md`, `_histoires/GABARIT.md`) — à copier/renommer pour chaque nouvel item :
  ```
  ---
  titre: "..."
  sous_titre: "..."
  resume: "..."
  prix: 24.99
  image: couverture.jpg
  extrait: ""        # optionnel, chemin vers un extrait gratuit
  lien_amazon: ""     # optionnel
  vedette: false      # true pour apparaître dans le carousel de la page d'accueil
  ---
  ```
- Image associée déposée dans le même répertoire (ou `images/`) avec un nom standard référencé dans le front matter.
- Un template Jekyll boucle sur chaque collection pour générer catalogue + pages individuelles automatiquement à chaque `push`.
- Markdown+front matter préféré à un CSV (plus robuste pour texte multi-lignes et association d'image).
- Les fichiers `GABARIT.md` devront être exclus du build (`_config.yml`) une fois la config Jekyll complète mise en place.

## Fonctionnalités discutées
- **Zones cliquables sur une image** : éviter le `<map>/<area>` HTML classique (coordonnées en pixels, casse en responsive). Préférer des liens positionnés en `%` ou un overlay SVG, qui suivent la taille du conteneur.
  - Usage confirmé : un « bonhomme » illustré avec zones cliquables sur différentes parties du corps :
    - main → boutique (site)
    - ventre → extraits gratuits
    - fesses → boutique Amazon
  - Un **menu traditionnel** sera aussi présent en parallèle (navigation standard, en plus du bonhomme).
- **Carousel** : faisable en CSS natif (`scroll-snap`) ou petite librairie JS. Peut se brancher sur le champ `vedette: true` des fichiers de livres pour alimenter automatiquement le carousel de la page d'accueil.

## Configuration technique — domaine, DNS, SEO
- **Domaine personnalisé (pas une redirection)** : GitHub Pages sert le site directement sous `editioncoquerelle.ca` (le visiteur ne voit jamais l'URL `github.io`). Nécessite :
  - Un fichier `CNAME` (sans extension) à la racine du repo, contenant le domaine (ex. `editioncoquerelle.ca`).
  - Dans le DNS du domaine (chez le registrar de Simon) : enregistrements **A** vers les 4 IP de GitHub Pages (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153) pour le domaine nu, et/ou un **CNAME** pour `www` vers `gitsimon.github.io`.
  - Une fois le DNS propagé, activer « Enforce HTTPS » dans Settings → Pages du repo (certificat généré automatiquement par GitHub).
- **index.html à la racine** : requis pour que GitHub Pages serve la page d'accueil (avec Jekyll, `index.md` est converti automatiquement).
- **Indexation Google** : pas automatique/garantie rapidement pour un domaine neuf. À faire :
  - Générer un `sitemap.xml` (plugin `jekyll-sitemap`) et un `robots.txt`.
  - Créer un compte Google Search Console, valider la propriété du domaine, soumettre le sitemap.
  - Titres et descriptions uniques par page/livre (via le front matter Jekyll).
- **Push automatisé par Claude Code** : possible une fois le repo cloné localement et l'authentification GitHub configurée (`gh auth login`, clé SSH, ou token). Par défaut, confirmation demandée à chaque push (action affectant un dépôt partagé) sauf indication contraire du développeur.

## En attente de Simon
- Images, icônes du site.
- Description détaillée du site (contenu, sections, ton, structure souhaitée).
- Liste complète dans `informations-a-completer.md`.

## Étapes suivantes (non commencées)
- Premier commit + push (CLAUDE.md, informations-a-completer.md) pour créer la branche `main` sur le repo distant.
- Mise en place de la structure Jekyll (dossiers, gabarit de fichier `.md` type, layout catalogue).
- Réception des assets et de la description avant de construire les pages.
