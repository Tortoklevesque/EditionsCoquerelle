---
layout: default
schema_tortok: true
image: /images/cover_tortok.jpg
title: Catalogue
description: "Les livres et histoires des Éditions Coquerelle, dont Tortok, roman de Simon Lévesque."
permalink: /catalogue/
---

<div class="page-content wide" markdown="1">

# Catalogue

<section class="catalogue-section">
  <h2>Livres</h2>
  <div class="carousel">
    <button class="carousel-btn carousel-btn--prev" type="button" aria-label="Livres précédents">&lsaquo;</button>
    <div class="carousel-track" aria-label="Carrousel des livres">
      <a class="carousel-card" href="{{ site.lien_amazon_tortok }}" target="_blank" rel="noopener">
        <img class="card-image" src="{{ '/images/cover_tortok.jpg' | relative_url }}" alt="">
        <p class="card-title">Tortok <span class="visually-hidden">(acheter sur Amazon, nouvel onglet)</span></p>
      </a>
      <div class="carousel-card">
        <div class="card-image-placeholder" aria-hidden="true">Image à venir</div>
        <p class="card-title">Tome 2 (à venir)</p>
      </div>
      <div class="carousel-card">
        <div class="card-image-placeholder" aria-hidden="true">Image à venir</div>
        <p class="card-title">Tome 3 (à venir)</p>
      </div>
    </div>
    <button class="carousel-btn carousel-btn--next" type="button" aria-label="Livres suivants">&rsaquo;</button>
  </div>
</section>

<section class="catalogue-section">
  <h2>Histoires</h2>
  <p class="a-venir">À venir</p>
  {% comment %}
  Carrousel des histoires désactivé tant qu'aucune histoire n'est publiée.
  Pour le réactiver : retirer les balises comment/endcomment et le paragraphe « À venir » ci-dessus.
  <div class="carousel">
    <button class="carousel-btn carousel-btn--prev" type="button" aria-label="Histoires précédentes">&lsaquo;</button>
    <div class="carousel-track" aria-label="Carrousel des histoires">
      <a class="carousel-card" href="#">
        <div class="card-image-placeholder" aria-hidden="true">Image à venir</div>
        <p class="card-title">La bébite</p>
      </a>
      <a class="carousel-card" href="#">
        <div class="card-image-placeholder" aria-hidden="true">Image à venir</div>
        <p class="card-title">Chaos dans la piscine</p>
      </a>
      <a class="carousel-card" href="#">
        <div class="card-image-placeholder" aria-hidden="true">Image à venir</div>
        <p class="card-title">La fille qui saigne du nez</p>
      </a>
      <a class="carousel-card" href="#">
        <div class="card-image-placeholder" aria-hidden="true">Image à venir</div>
        <p class="card-title">La machine à cauchemards</p>
      </a>
      <a class="carousel-card" href="#">
        <div class="card-image-placeholder" aria-hidden="true">Image à venir</div>
        <p class="card-title">Un robot pour Noël</p>
      </a>
      <a class="carousel-card" href="#">
        <div class="card-image-placeholder" aria-hidden="true">Image à venir</div>
        <p class="card-title">Le compost joyeux</p>
      </a>
    </div>
    <button class="carousel-btn carousel-btn--next" type="button" aria-label="Histoires suivantes">&rsaquo;</button>
  </div>
  {% endcomment %}
</section>

</div>
