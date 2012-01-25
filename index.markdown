---
layout: default
title: I make stuff.
description: This is Keith's site. He does stuff here. If you're a geek, you just might like it. If you're not, save yourself a click and move along.
---
Websites mostly, but it doesn't really matter. I just love to have a problem, and find a solution. I'm all about the search; finding all of the pieces and trying to figure out how to put them all together.

I like the little details. The small things that separate good enough from amazing. In a perfect world, I could nit-pick and critique all day long, and that would somehow be productive.

I want to create something that will last longer than me.

***

#### Recently

<ul class="articles">
{% for post in site.posts limit:10 %}
	<li><span class="date">{{ post.date | date_to_string }}</span> <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
			
