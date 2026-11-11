---
layout: default
title: Libraires
description: "Fiche libraire de Tortok, roman de Simon Lévesque : format, ISBN, prix de détail et modalités de commande auprès des Éditions Coquerelle."
permalink: /libraires/
image: /images/cover_tortok.jpg
extra_css: fiche.css
schema_tortok: true
---
{%- comment -%}
  Version Web de fichiers/fiche-libraire-tortok.pdf (même contenu, même look).
  Mise en page : assets/css/fiche.css (grille sur grand écran, une colonne sur cellulaire,
  feuille d'une page à l'impression).
{%- endcomment -%}

<div class="fiche-outils">
  <a class="button" href="{{ '/fichiers/fiche-libraire-tortok.pdf' | relative_url }}" download>Télécharger la fiche (PDF, 2,3 Mo)</a>
  <button class="button fiche-imprimer" type="button" onclick="window.print()">Imprimer</button>
</div>

<article class="fiche" aria-labelledby="fiche-titre">

  <header class="fiche-bandeau">
    <p class="fiche-sur-titre">Fiche libraire</p>
    <h1 id="fiche-titre" class="fiche-titre">Tortok</h1>
  </header>

  <div class="fiche-haut">
    <img class="fiche-couverture" src="{{ '/images/cover_tortok.jpg' | relative_url }}" alt="Couverture de Tortok : le titre en lettres noires dégoulinantes sur fond jaune, au-dessus de la tour du Stade olympique.">

    <div class="fiche-presentation">
      <p class="fiche-auteur"><strong>Auteur : Simon Lévesque</strong><br>Couverture : Audrey Malo</p>
      <h2 class="fiche-genre">Un roman satirique de science-fiction</h2>
      <p class="fiche-cotoient">où se côtoient…<br>
        le ridicule et le rationnel,<br>
        la tendresse et la rage,<br>
        le mignon et le gore,<br>
        l’absurde et l’horreur.</p>
    </div>

    <div class="fiche-cote">
      <dl class="fiche-specs">
        <div><dt>Format</dt><dd>5 x 8 po</dd></div>
        <div><dt>Nombre de pages</dt><dd>214</dd></div>
        <div><dt>Reliure</dt><dd>broché</dd></div>
        <div><dt>Parution</dt><dd>octobre 2026</dd></div>
        <div><dt>ISBN</dt><dd>9782982553309</dd></div>
      </dl>

      <figure class="fiche-tarz">
        <blockquote class="fiche-bulle">Mon nom c’est Tarz&nbsp;! As-tu de la bouffe&nbsp;? J’aime beaucoup la bouffe&nbsp;! Est-ce que tu en as&nbsp;?</blockquote>
        <img src="{{ '/images/tarz.png' | relative_url }}" alt="Tarz, le carlin qui parle, l’air inquiet.">
      </figure>

      <p class="fiche-prix">Prix de détail : 19,99&nbsp;$</p>
    </div>
  </div>

  <p class="fiche-resume">Un dude de Laval se retrouve piégé dans un cauchemar éveillé aux allures de jeu vidéo. Comme si ça ne suffisait pas, ses dettes et son côlon irritable l’ont suivi. Le chien qu’il gardait aussi. Au moins le chien s’est mis à parler, ça fait quelqu’un avec qui jaser.</p>

  <hr class="fiche-trait">

  <div class="fiche-boites">
    <section class="fiche-boite" aria-labelledby="pour-qui">
      <h2 id="pour-qui" class="fiche-etiquette">Pour qui ?</h2>
      <ul>
        <li>Lecteurs adultes (16+)</li>
        <li>Amateurs de science-fiction déjantée, d’humour noir, d’horreur, et de jeux de rôle.</li>
        <li>Lecteurs qui ont aimé <cite>Dungeon Crawler Carl</cite> de Matt Dinniman</li>
      </ul>
    </section>
    <section class="fiche-boite" aria-labelledby="pourquoi">
      <h2 id="pourquoi" class="fiche-etiquette">Pourquoi ?</h2>
      <ul>
        <li>Des personnages mémorables</li>
        <li>Univers original ancré dans le Québec contemporain.</li>
        <li>Style d’écriture nerveux, visuel et divertissant.</li>
        <li>Humour irrévérencieux</li>
      </ul>
    </section>
  </div>

  <dl class="fiche-modalites">
    <div><dt>Commande</dt><dd>Directement auprès de l’éditeur</dd></div>
    <div><dt>Remise</dt><dd>Selon entente</dd></div>
    <div><dt>Modalités</dt><dd>Dépôt-vente ou achat ferme</dd></div>
    <div><dt>Retours</dt><dd>Selon entente</dd></div>
    <div><dt>Distribution</dt><dd>Directement par l’éditeur</dd></div>
  </dl>

  <footer class="fiche-pied">
    <a href="{{ '/' | relative_url }}">editionscoquerelle.ca</a>
    <img src="{{ '/images/logo-coquerelle.png' | relative_url }}" alt="" class="fiche-logo">
    <a href="tel:+15148395549">Tél. (514) 839-5549</a>
  </footer>

</article>
