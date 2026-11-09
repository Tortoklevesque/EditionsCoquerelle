---
layout: default
title: Accueil
---

<section class="hero">
  <div class="bonhomme">
    <img class="hero-image" src="{{ '/images/bourtouk-couleur.png' | relative_url }}" alt="Bourtouk">

    <!-- Zones cliquables en pourcentage (suivent la taille de l'image en responsive) -->
    <a class="bonhomme-zone bonhomme-zone--main" href="{{ '/catalogue/' | relative_url }}"
       style="top: 15%; left: 5%; width: 26%; height: 28%;"
       aria-label="Catalogue" data-label="Catalogue"></a>

    <a class="bonhomme-zone bonhomme-zone--ventre" href="{{ '/extraits/' | relative_url }}"
       style="top: 42%; left: 25%; width: 40%; height: 22%;"
       aria-label="Extraits gratuits" data-label="Extraits gratuits"></a>

    <a class="bonhomme-zone bonhomme-zone--fesses" href="{{ site.lien_amazon_tortok }}"
       style="top: 62%; left: 18%; width: 60%; height: 24%;"
       aria-label="Boutique Amazon" data-label="Boutique Amazon" target="_blank" rel="noopener"></a>
  </div>
</section>

<p class="hero-note">Bourtouk veut que tu le touches, explore-le pour découvrir ce qu'il a à t'offrir.</p>

<section class="nouvelles" aria-labelledby="nouvelles-titre">
  <h2 id="nouvelles-titre">Nouvelles</h2>
  <a class="nouvelle-carte" href="{{ site.lien_amazon_tortok }}" target="_blank" rel="noopener">
    <img class="nouvelle-image" src="{{ '/images/cover_tortok.jpg' | relative_url }}" alt="">
    <span class="nouvelle-texte">
      <span class="badge">Maintenant disponible</span>
      <span class="nouvelle-titre">Tortok</span>
      <span class="nouvelle-auteur">Simon Lévesque</span>
      <span class="nouvelle-action">Acheter sur Amazon <span class="visually-hidden">(nouvel onglet)</span></span>
    </span>
  </a>
</section>
