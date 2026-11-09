# Site web — maison d'édition (projet "sitecoquerelle")

## Contexte
Site web pour la maison d'édition de **Simon** (auteur), pour publier ses histoires et livres et les vendre en ligne.

- Nom de domaine : `editionscoquerelle.ca`, acheté par Simon chez WHC (Web Hosting Canada) ; vérifié le 2026-11-09 : domaine stationné (DNS parking1/parking2.whc.ca) avec redirection de courriel active (MX `emailfwd.editionscoquerelle.ca`).
- **Changement de plan (2026-11-09)** : Simon veut d'abord un **site de base** mis en ligne rapidement, pour avoir une présence web avant de démarcher les librairies. Les fonctionnalités avancées passent après.
- Vente : **lien vers Amazon** pour le livre *Tortok* (URL centralisée dans `_config.yml`, variable `lien_amazon_tortok`, utilisée par la carte du catalogue, la page Extraits et la zone « fesses » du bonhomme). Valeur : `https://www.amazon.ca/dp/2982553309` (adresse directe de la fiche, ISBN/ASIN 2982553309). **Square abandonné pour l'instant** (abonnement acheté par Simon, non utilisé).
- Design : site adaptatif (responsive), rendu identique en mobile et grand écran.
- Site simple : image de **Bourtouk** affichée en grand (page d'accueil), palette de couleurs du site basée sur les couleurs de cette image. Fichier reçu : `images/bourtouk-couleur.png`.
- Accessibilité : respect des règles de base (contraste suffisant, texte alternatif sur les images, navigation au clavier, HTML sémantique). Le menu traditionnel (en parallèle du « bonhomme » cliquable, voir plus bas) sert notamment d'équivalent accessible à la navigation par image.

## Hébergement et dépôt — décisions prises
- **GitHub Pages**, gratuit, supporte le domaine `.ca` personnalisé + HTTPS automatique. Pas besoin de Netlify/Cloudflare pour l'instant.
- Le repo GitHub appartient à **Simon** (compte `Tortoklevesque`), pas au compte du développeur, pour des raisons de propriété (site + transactions = son entreprise). Repo : `github.com/Tortoklevesque/EditionsCoquerelle`. Le développeur (compte GitHub `jy-cote`) y a accès en écriture (pas admin — ne peut pas activer Pages lui-même).
- `gh` (GitHub CLI) installé localement (version portable, sans droits admin, dans `%LOCALAPPDATA%\GitHubCLI`) et authentifié sous `jy-cote` — Claude Code peut pousser directement une fois confirmation donnée pour chaque push.
- **Repo public** et **GitHub Pages actif** (vérifié 2026-11-09) : source branche `main`, `/ (root)`, HTTPS forcé. Site en ligne à `https://tortoklevesque.github.io/EditionsCoquerelle/` (chaque `push` sur `main` republie le site). Domaine personnalisé pas encore configuré (pas de fichier `CNAME`).
- Simon modifie parfois le repo directement sur GitHub (téléversements, édition de `informations-a-completer.md`) : toujours faire `git fetch` / `git pull --ff-only` avant de travailler.

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
- Les fichiers `GABARIT.md` sont exclus du build (`exclude` dans `_config.yml`).

## Fonctionnalités discutées
- **Zones cliquables sur une image** : éviter le `<map>/<area>` HTML classique (coordonnées en pixels, casse en responsive). Préférer des liens positionnés en `%` ou un overlay SVG, qui suivent la taille du conteneur.
  - Usage confirmé : un « bonhomme » illustré avec zones cliquables sur différentes parties du corps :
    - main → catalogue (site)
    - ventre → extraits gratuits
    - fesses → boutique Amazon
  - Un **menu traditionnel** sera aussi présent en parallèle (navigation standard, en plus du bonhomme).
- **Carousel** : faisable en CSS natif (`scroll-snap`) ou petite librairie JS. Peut se brancher sur le champ `vedette: true` des fichiers de livres pour alimenter automatiquement le carousel de la page d'accueil.
- **Page Extraits gratuits** (`extraits.md`) : couverture de Tortok + résumé (tiré de `_data/tortok.yml`, même texte que les métadonnées JSON-LD), puis un encadré avec un extrait. Les extraits sont dans la collection `_extraits/` (un fichier par extrait, `output: false`, gabarit `_extraits/GABARIT.md`) ; tous sont inclus dans la page, cachés sauf un, et le bouton « Générer un nouvel extrait aléatoire » en affiche un autre au hasard (`initExtraitAleatoire` dans `assets/js/main.js`). Sans JavaScript, le premier extrait reste visible et le bouton est masqué. L'ancienne page stub `extrait-aleatoire.md` a été supprimée.
- **Lien de vente** : sur la page Extraits gratuits et dans le catalogue, le titre *Tortok* pointe vers Amazon (`site.lien_amazon_tortok`, nouvel onglet). Les autres cartes du catalogue (tomes à venir, histoires) restent sans lien (`#`).

## Configuration technique — domaine, DNS, SEO
- **Domaine personnalisé (pas une redirection)** : GitHub Pages sert le site directement sous `editionscoquerelle.ca` (le visiteur ne voit jamais l'URL `github.io`). Nécessite :
  - Un fichier `CNAME` (sans extension) à la racine du repo, contenant le domaine (ex. `editionscoquerelle.ca`).
  - Dans le DNS du domaine (chez le registrar de Simon) : enregistrements **A** vers les 4 IP de GitHub Pages (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153) pour le domaine nu, et/ou un **CNAME** pour `www` vers `tortoklevesque.github.io`.
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

## Plan du site
Plan de structure des pages et de la navigation : voir `SITEMAP.md`.

## État d'avancement
- Fait : branche `main` créée et poussée sur le repo distant. Structure Jekyll de base en place (commit `38b864e`) : `_config.yml`, layout `default.html`, gabarits `_livres/`/`_histoires/` (exclus du build), pages `index`, `catalogue`, `auteur`, `editeur`, `extraits`.

## Étapes suivantes
- Déclarer les collections `livres` et `histoires` dans `_config.yml` et créer le layout catalogue/fiche qui boucle dessus.
- Réception des images de Simon (annoncées pour le 2026-11-09 en fin de journée) et intégration rapide pour publication.
- Domaine `.ca` : fichier `CNAME` + DNS chez le registraire (voir plus bas).
