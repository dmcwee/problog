---
layout: page
---
{% assign featuredPost = site.posts | where: "featured", "true" %}
{%- include featured.html featuredPosts=featuredPost maxPosts=4 -%}

{%- include postlist.html -%}