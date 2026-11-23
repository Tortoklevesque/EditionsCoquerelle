---
layout: default
title: Éditions Coquerelle
---

<section class="hero">
  <div class="bonhomme">
    <img class="hero-image" src="{% if site.ambiance == "metal" %}{{ '/images/bourtouk-metal.png' | relative_url }}{% else %}{{ '/images/bourtouk-couleur.png' | relative_url }}{% endif %}" alt="Bourtouk">

    <!-- Zones cliquables en pourcentage (suivent la taille de l'image en responsive) -->
    <a class="bonhomme-zone bonhomme-zone--main" href="{{ '/catalogue/' | relative_url }}"
       style="top: 15%; left: 5%; width: 26%; height: 28%;"
       aria-label="Catalogue" data-label="Catalogue"></a>

    <a class="bonhomme-zone bonhomme-zone--ventre" href="{{ '/extraits/' | relative_url }}"
       style="top: 42%; left: 25%; width: 40%; height: 22%;"
       aria-label="Extraits gratuits" data-label="Extraits gratuits"></a>

    <a class="bonhomme-zone bonhomme-zone--fesses" href="{% include lien-amazon-tortok.html %}"
       style="top: 63%; left: 18%; width: 60%; height: 18%;"
       aria-label="Boutique Amazon" data-label="Boutique Amazon" target="_blank" rel="noopener"></a>

    <a class="bonhomme-zone bonhomme-zone--pieds" href="{{ '/libraires/' | relative_url }}"
       style="top: 81%; left: 22%; width: 51%; height: 13%;"
       aria-label="Libraires" data-label="Libraires"></a>
  </div>
</section>

<p class="hero-note">Bourtouk veut que tu le touches, explore-le pour découvrir ce qu'il a à t'offrir.</p>

{% include nouvelles.html %}
