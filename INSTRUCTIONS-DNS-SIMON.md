# Brancher editionscoquerelle.ca sur le site — instructions pour Simon

*Rédigé le 2026-11-09. Durée : environ 15 minutes de manipulations, puis quelques minutes à quelques heures d'attente (propagation DNS).*

Le site est déjà en ligne à l'adresse temporaire <https://tortoklevesque.github.io/EditionsCoquerelle/>.
Ces étapes le font apparaître sous **editionscoquerelle.ca**. Le visiteur ne verra jamais l'adresse `github.io`.

Il y a deux endroits à configurer :
1. **WHC** (Web Hosting Canada), où le domaine est enregistré ;
2. **GitHub**, dans les paramètres du dépôt (ça demande ton compte `Tortoklevesque`, le seul qui a les droits d'administrateur).

---

## ⚠️ Avant de commencer : ne pas briser le courriel

Le domaine a une **redirection de courriel active** : c'est elle qui fait arriver les messages envoyés à `info@editionscoquerelle.ca`.

- **Ne change pas les serveurs DNS** (« nameservers ») du domaine. Ils doivent rester chez WHC.
- **Ne supprime et ne modifie aucun enregistrement de type `MX`**, ni l'enregistrement `emailfwd`, ni les enregistrements `TXT` liés au courriel (ex. SPF, qui commence par `v=spf1`).
- On ajoute ou remplace **seulement** les enregistrements décrits plus bas.

---

## Étape 1 — Zone DNS chez WHC

1. Connecte-toi à l'espace client de WHC.
2. Va dans la gestion du domaine `editionscoquerelle.ca`, puis dans la **zone DNS** (selon l'interface : « Gérer les DNS », « Zone DNS » ou « DNS Management »).
3. Si une **redirection web** ou une **page de stationnement** est active sur le domaine, désactive-la : elle entrerait en conflit avec le site.
4. **Domaine nu** (`editionscoquerelle.ca`, souvent noté `@` ou laissé vide dans le champ « Nom ») : supprime les enregistrements `A` existants (ceux de la page de stationnement), puis crée ces **4 enregistrements `A`** :

   | Type | Nom / Hôte | Valeur | TTL |
   |---|---|---|---|
   | A | @ | 185.199.108.153 | par défaut |
   | A | @ | 185.199.109.153 | par défaut |
   | A | @ | 185.199.110.153 | par défaut |
   | A | @ | 185.199.111.153 | par défaut |

5. **Sous-domaine `www`** : supprime tout enregistrement `A` ou `CNAME` existant pour `www`, puis crée :

   | Type | Nom / Hôte | Valeur | TTL |
   |---|---|---|---|
   | CNAME | www | tortoklevesque.github.io | par défaut |

   (Certaines interfaces exigent un point final : `tortoklevesque.github.io.` Les deux formes sont correctes.)

6. *Facultatif, recommandé* : enregistrements IPv6 (`AAAA`) pour le domaine nu :

   | Type | Nom / Hôte | Valeur |
   |---|---|---|
   | AAAA | @ | 2606:50c0:8000::153 |
   | AAAA | @ | 2606:50c0:8001::153 |
   | AAAA | @ | 2606:50c0:8002::153 |
   | AAAA | @ | 2606:50c0:8003::153 |

7. Enregistre les changements.

## Étape 2 — Domaine personnalisé sur GitHub

1. Connecte-toi à GitHub avec le compte **Tortoklevesque**.
2. Ouvre le dépôt `EditionsCoquerelle`, puis **Settings → Pages**.
3. Dans **Custom domain**, entre `editionscoquerelle.ca` puis clique **Save**.
4. GitHub vérifie le DNS. Si le message indique que le DNS n'est pas encore prêt, c'est normal : la propagation peut prendre de quelques minutes à quelques heures. Reviens plus tard.
5. Quand la vérification est réussie, coche **Enforce HTTPS**. Si la case est grisée, le certificat est en cours de génération : réessaie un peu plus tard (jusqu'à environ 24 h).

GitHub ajoute alors un fichier `CNAME` dans le dépôt. Le développeur doit le récupérer (`git pull`) avant de pousser de nouvelles modifications.

## Étape 3 — Vérifier

- <https://editionscoquerelle.ca> affiche le site avec le cadenas (HTTPS).
- <https://www.editionscoquerelle.ca> redirige vers <https://editionscoquerelle.ca>.
- L'ancienne adresse `tortoklevesque.github.io/EditionsCoquerelle/` redirige aussi vers le nouveau domaine.
- Envoie un courriel test à `info@editionscoquerelle.ca` pour confirmer que la redirection de courriel fonctionne toujours.

## Étape 4 — Facultatif, recommandé : protéger le domaine sur GitHub

Ça empêche qu'un autre compte GitHub puisse utiliser ton domaine si le site était un jour désactivé.

1. Sur GitHub, clique sur ta photo → **Settings** (paramètres du compte, pas du dépôt) → **Pages**.
2. **Add a domain** → `editionscoquerelle.ca`. GitHub donne un enregistrement `TXT` à créer (nom du genre `_github-pages-challenge-Tortoklevesque`, avec une valeur aléatoire).
3. Crée cet enregistrement `TXT` dans la zone DNS chez WHC, puis clique **Verify** sur GitHub.

---

## Entretien dans le temps

- **Les adresses IP ci-dessus sont stables** : ce sont les adresses officielles de GitHub Pages, inchangées depuis 2018. Aucun entretien régulier n'est nécessaire. Le certificat HTTPS se renouvelle automatiquement.
- **Renouveler le domaine chez WHC** : c'est le seul vrai risque. Un domaine expiré fait tomber le site **et** le courriel `info@`. Active le **renouvellement automatique** chez WHC et garde à jour la carte de crédit et le courriel de contact du compte.
- **Ne pas renommer** le compte GitHub `Tortoklevesque` ni le dépôt `EditionsCoquerelle` sans ajuster le DNS : le `www` pointe vers `tortoklevesque.github.io`.

## Après le branchement : Google

Une fois le domaine actif, inscrire le site dans **Google Search Console** (avec le compte Google de Simon) : ajouter la propriété `editionscoquerelle.ca` (validation par un enregistrement `TXT` chez WHC), puis soumettre le sitemap `https://editionscoquerelle.ca/sitemap.xml`. Le développeur peut accompagner cette étape.
