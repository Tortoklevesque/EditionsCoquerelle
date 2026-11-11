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
- **Repo public** et **GitHub Pages actif** (vérifié 2026-11-09) : source branche `main`, `/ (root)`, HTTPS forcé. Site en ligne à `https://tortoklevesque.github.io/EditionsCoquerelle/` (chaque `push` sur `main` republie le site). **Domaine `editionscoquerelle.ca` branché le 2026-11-10** : zone DNS WHC modifiée (4 A `@` vers 185.199.108-111.153, CNAME `www` → `tortoklevesque.github.io.` ; A `emailfwd`, MX, TXT SPF conservés ; ancienne valeur A `@` : 149.56.225.6), domaine déclaré par Simon dans Settings → Pages, fichier `CNAME` dans le dépôt, `url`/`baseurl` fixés dans `_config.yml`. L'ancienne adresse `github.io` redirige vers le domaine. **HTTPS forcé** (Enforce HTTPS coché par Simon le 2026-11-10 ; certificat Let's Encrypt pour le domaine nu et `www`, renouvelé automatiquement par GitHub). Le compte `jy-cote` n'a pas accès à Settings (404) : toute modification de Pages passe par Simon. Redirection de courriel WHC : 0/3 configurée (`info@` n'a jamais reçu de courriel).
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
    - pieds → page Libraires (ajouté le 2026-11-10)
  - Un **menu traditionnel** sera aussi présent en parallèle (navigation standard, en plus du bonhomme).
- **Carousel** : faisable en CSS natif (`scroll-snap`) ou petite librairie JS. Peut se brancher sur le champ `vedette: true` des fichiers de livres pour alimenter automatiquement le carousel de la page d'accueil.
- **Page Extraits gratuits** (`extraits.md`) : couverture de Tortok + résumé (tiré de `_data/tortok.yml`, même texte que les métadonnées JSON-LD), puis un encadré avec un extrait. Les extraits sont dans la collection `_extraits/` (un fichier par extrait, `output: false`, gabarit `_extraits/GABARIT.md`) ; tous sont inclus dans la page, cachés sauf un, et le bouton « Générer un nouvel extrait aléatoire » en affiche un autre au hasard (`initExtraitAleatoire` dans `assets/js/main.js`). Sans JavaScript, le premier extrait reste visible et le bouton est masqué. L'ancienne page stub `extrait-aleatoire.md` a été supprimée.
- **Lien de vente** : sur la page Extraits gratuits et dans le catalogue, le titre *Tortok* pointe vers Amazon (`site.lien_amazon_tortok`, nouvel onglet).
- **Catalogue** (`catalogue.md`, cartes écrites à la main pour l'instant, pas encore générées depuis `_livres/`) : carte Tortok (couverture `images/cover_tortok.jpg`, lien Amazon) ; cartes « Tome 2 (à venir) » et « Tome 3 (à venir) » sans lien (`<div>`, pas `<a>`). Section Histoires : « À venir » ; le carrousel des histoires est conservé dans un bloc `{% comment %}` Liquid, à réactiver quand les histoires arriveront.
- **Encadré « Nouvelles »** sur l'accueil (sous la phrase de Bourtouk) : carte « Maintenant disponible » avec la couverture, le titre, l'auteur et « Acheter sur Amazon » ; toute la carte est un lien vers Amazon. Approuvé tel quel par l'utilisateur.
- **Page Libraires** (`libraires.md`, `/libraires/`, lien dans le menu) : version Web de la fiche libraire de Simon (`fichiers/fiche-libraire-tortok.pdf`, téléchargeable depuis la page). Même contenu et même look que le PDF : feuille blanche posée sur le fond du site, gris `#d5d5d5`, Impact (repli Google Fonts Anton) ; styles dans `assets/css/fiche.css`, chargés via `extra_css: fiche.css` dans le front matter. Grille sur grand écran, une colonne sur cellulaire, une page à l'impression (Ctrl+P ; pas de bouton Imprimer, retiré à la demande de Simon). **Pas de numéro de téléphone sur la page Web** (décision de Simon le 2026-11-10 ; il reste dans le PDF). Tarz (le carlin) extrait du PDF : `images/tarz.png`. Si Simon modifie le PDF, mettre aussi à jour `libraires.md` (le texte y est recopié). Le résumé de la fiche diffère légèrement de `_data/tortok.yml` (ordre « ses dettes et son côlon »).
- **Footer** : « Éditions Coquerelle » est un lien vers la page Éditeur ; icônes Facebook et Instagram (SVG en ligne, nouvel onglet), adresses dans `_config.yml` (`facebook_url`, `instagram_url`, et `social.links` pour jekyll-seo-tag). La page Facebook n'a pas de nom d'utilisateur (adresse `profile.php?id=…`) ; Instagram : `@editionscoquerelle`.
- **Favicon** : `favicon.ico`, `favicon-32.png`, `apple-touch-icon.png` à la racine (coquerelle jaune sur carré brun foncé, générés depuis `images/logo-coquerelle.png`).
- **Cache navigateur** : `style.css` et `main.js` sont appelés avec `?v=<horodatage du build>` dans le layout, pour forcer le rechargement après chaque déploiement.
- **Fond du site blanc** (`--color-bg: #ffffff`, était crème `#fdf8f0`) pour que l'image de Bourtouk (fond blanc) se fonde dans la page. La version sans fond `images/brtksansfond.png` existe si on revient à un fond coloré.
- **Pièges connus** : le Markdown à l'intérieur d'un `<div>` n'est interprété par kramdown qu'avec `markdown="1"` (sinon `# Titre` s'affiche tel quel) ; `extraits.md` est écrit en HTML pur à la place.

## Configuration technique — domaine, DNS, SEO
- **Domaine personnalisé (pas une redirection)** : GitHub Pages sert le site directement sous `editionscoquerelle.ca` (le visiteur ne voit jamais l'URL `github.io`). Nécessite :
  - Un fichier `CNAME` (sans extension) à la racine du repo, contenant le domaine (ex. `editionscoquerelle.ca`).
  - Dans le DNS du domaine (chez le registrar de Simon) : enregistrements **A** vers les 4 IP de GitHub Pages (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153) pour le domaine nu, et/ou un **CNAME** pour `www` vers `tortoklevesque.github.io`.
  - Une fois le DNS propagé, activer « Enforce HTTPS » dans Settings → Pages du repo (certificat généré automatiquement par GitHub).
- **index.html à la racine** : requis pour que GitHub Pages serve la page d'accueil (avec Jekyll, `index.md` est converti automatiquement).
- **Indexation Google** : pas automatique/garantie rapidement pour un domaine neuf. À faire :
  - Fait (2026-11-09) : `sitemap.xml` généré par `jekyll-sitemap` (déclaré dans `plugins` de `_config.yml`) et `robots.txt` (pointe vers le sitemap via `absolute_url`, suit donc le domaine). Métadonnées JSON-LD `Book` pour Tortok (`_data/tortok.yml`, `_includes/tortok-jsonld.html`). `robots.txt` n'est lu par les robots qu'à la racine d'un domaine : effectif seulement une fois `editionscoquerelle.ca` branché.
  - Fait (2026-11-10) : **Google Search Console**, propriété de type Domaine `editionscoquerelle.ca` sur le compte Google `editionscoquerelle@gmail.com` (« Coquerelle Premium », 3e compte connecté dans le Chrome du développeur, `/u/2/`). Validée par un TXT `google-site-verification=…` chez WHC (**ne pas supprimer** ce TXT, sinon la propriété est perdue). Sitemap `https://editionscoquerelle.ca/sitemap.xml` soumis (« Impossible de récupérer » affiché juste après l'envoi alors que le sitemap répond 200 : état transitoire d'une propriété neuve, Google l'a quand même lu) ; indexation de l'accueil demandée.
  - Fait (2026-11-09) : balises de partage via `jekyll-seo-tag` (`{% seo title=false %}` dans le layout ; Open Graph, Twitter Cards, URL canonique, meta description). `locale: fr_CA` ; image par défaut Bourtouk (`defaults` dans `_config.yml`), couverture de Tortok sur Catalogue et Extraits (`image:` dans le front matter). Accueil : titre « Éditions Coquerelle », description du site « Maison d'édition de Tortok (Simon Lévesque). » (choisie par l'utilisateur ; sert aussi par défaut aux pages sans description).
  - Titres et descriptions uniques par page/livre (via le front matter Jekyll).
- **Vérifier un déploiement** : passer par les runs GitHub Actions (`gh run list` / `gh run watch`), pas par l'API `pages/builds` qui affiche de faux « errored ». Cache CDN d'environ 10 min (Ctrl+Shift+R). Pas de Ruby/Jekyll sur le poste : on pousse et on vérifie en ligne.
- **Push automatisé par Claude Code** : possible une fois le repo cloné localement et l'authentification GitHub configurée (`gh auth login`, clé SSH, ou token). Depuis le 2026-11-09, le développeur a demandé de **pousser à chaque modification** (pas de prévisualisation locale possible), puis de vérifier le résultat en ligne dans Chrome. Toujours `git pull --ff-only` avant, et ne committer que les fichiers voulus (vérifier `git status` : Simon ou le développeur peuvent déposer des fichiers entre-temps).

## En attente de Simon
- Autres images (annoncées pour le 2026-11-09 en fin de journée) et liste complète dans `informations-a-completer.md`.

## Courriel de contact
- Adresse affichée sur le site (page Éditeur seulement) : `editionscoquerelle@gmail.com` (choisie par Simon le 2026-11-10, remplace `info@editionscoquerelle.ca`). La redirection de courriel WHC reste active, mais l'adresse `info@` n'apparaît plus sur le site.

## Ton et ambiance
- **Ambiance voulue : label death metal**, humour noir assumé (décidé avec Simon le 2026-11-10). Textes courts et provocateurs (Éditeur : « Des publications de mauvais goût pour le monde qui n'aime pas lire. » ; Auteur : « Bureaucrate de jour. Psychopathe de nuit. »). La photo de l'auteur est volontairement à l'horizontale : ne pas la « corriger ».
- **Ambiance metal (adoptée par Simon le 2026-11-10)** : couche `assets/css/metal.css` (fond noir granuleux, police Google Fonts « Metal Mania » pour les titres, liens jaune coquerelle, rouge sang `#b3121f` pour boutons, badges et filets ; Bourtouk détouré `bourtouk-metal.png` avec contour pâle — même canevas 1200 × 1500 que `bourtouk-couleur.png`, recadré pour que les zones cliquables en % tombent au même endroit dans les deux ambiances). Activée par `ambiance: metal` dans `_config.yml` (le layout charge alors la police et `metal.css`, l'accueil la version détourée de Bourtouk). **Retour arrière** : commenter cette ligne (style d'origine sur fond blanc, rien d'autre à toucher) ; ou, en dernier recours, l'étiquette git `avant-death-metal` marque l'état complet d'avant l'essai.
- Photo de l'auteur : version Web `images/simon-levesque-portrait.jpg` (800 px) ; l'original `images/simon_levesque.jpg` est ignoré par git (`.gitignore`).

## Plan du site
Plan de structure des pages et de la navigation : voir `SITEMAP.md`.

## État d'avancement
- Structure Jekyll de base en place (commit `38b864e`) : `_config.yml`, layout `default.html`, gabarits `_livres/`/`_histoires/`/`_extraits/` (exclus du build), pages `index`, `catalogue`, `auteur`, `editeur`, `extraits`.
- Session du 2026-11-09 (site de base, publication rapide) : synchronisation avec les modifications de Simon ; Square remplacé par le lien Amazon ; titre du livre corrigé en « Tortok » ; couverture intégrée ; résumé et extraits aléatoires sur la page Extraits ; encadré Nouvelles sur l'accueil ; fond blanc ; lien footer → Éditeur ; correction du Markdown non interprété dans les pages ; métadonnées JSON-LD, sitemap, robots.txt et balises de partage ; nom de domaine et cible DNS corrigés dans ce fichier ; instructions DNS rédigées pour Simon.
- Session du 2026-11-10 (avec Simon) : textes Éditeur et Auteur et photo de l'auteur intégrés. Simon veut finir le site avant de brancher le domaine.

## Étapes suivantes
1. Finir le contenu avec Simon (favicon, réseaux sociaux, autres images éventuelles).
2. Dans quelques jours : vérifier dans Search Console que le sitemap est « Réussite » et que les pages sont indexées.
3. Plus tard : générer le catalogue depuis les collections `_livres/`/`_histoires/` (déclarer les collections, layout fiche), réactiver le carrousel des histoires.
