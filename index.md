---
layout: default
title: Keith Silgard
description: This is Keith's site. He does stuff here. If you're a geek, you just might like it. If you're not, save yourself a click and move along.
---

***

{% for post in site.posts limit:1 %}
<h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
<p class="meta">{{ post.date | date_to_string }}</p>
{{ post.content | summarize }}
### [~ Full Article ~]({{post.url}})
{% endfor %}

***

#### Articles
{% for post in site.posts offset:1 %}
<h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
<p class="meta">{{ post.date | date_to_string }}</p>
{% endfor %}