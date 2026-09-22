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

    <!-- TODO: remplacer par le lien réel de la boutique Amazon une fois fourni par Simon -->
    <a class="bonhomme-zone bonhomme-zone--fesses" href="https://www.amazon.ca"
       style="top: 62%; left: 18%; width: 60%; height: 24%;"
       aria-label="Boutique Amazon" data-label="Boutique Amazon" target="_blank" rel="noopener"></a>
  </div>
</section>

<p class="hero-note">Bourtouk veut que tu le touches, explore-le pour découvrir ce qu'il a à t'offrir.</p>
