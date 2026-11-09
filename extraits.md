---
layout: default
schema_tortok: true
image: /images/cover_tortok.jpg
title: Extraits gratuits
description: "Extrait gratuit de Tortok, roman de Simon Lévesque : un dude de Laval piégé dans un cauchemar éveillé aux allures de jeu vidéo."
permalink: /extraits/
---

<div class="page-content">

<h1>Extraits gratuits</h1>

<img class="cover-image" src="{{ '/images/cover_tortok.jpg' | relative_url }}" alt="Couverture du livre Tortok de Simon Lévesque">

<div class="resume">
{%- assign paragraphes = site.data.tortok.resume | split: "

" -%}
{%- for para in paragraphes %}
  <p>{{ para | strip | newline_to_br }}</p>
{%- endfor %}
</div>

<p class="extract-source">Extrait de : <a href="{{ site.lien_amazon_tortok }}" target="_blank" rel="noopener">Tortok</a> (en vente sur Amazon)</p>

<div class="extrait-box" aria-live="polite">
  {%- for extrait in site.extraits %}
  <blockquote class="extrait"{% unless forloop.first %} hidden{% endunless %}>
    {{ extrait.content | markdownify }}
  </blockquote>
  {%- endfor %}
</div>

<button class="button" type="button" id="extrait-aleatoire" hidden>Générer un nouvel extrait aléatoire</button>

</div>
