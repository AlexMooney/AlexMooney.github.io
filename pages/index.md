---
title: Welcome to my blog
layout: default
permalink: /
---

[About me]({{ site.url }}{% link pages/about.md %})

[My trip to China through CoverMyQuest](https://www.covermymeds.com/main/covermyquest-alex-mooney/)

[RSS Feed]({{ site.url }}{% link pages/feed.xml %})

### Latest posts
<ul>
  {% for post in site.posts limit:10 %}
    <li><a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>
