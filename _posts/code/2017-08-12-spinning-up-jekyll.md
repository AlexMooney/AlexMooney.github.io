---
title: Spinning up Jekyll
layout: default
date: 2017-08-12T22:50:05-04:00
categories: web
---

I decided to go ahead a spin up a Github site today, in an effort to motivate a little bit more coding outside of work.
My goal was to have a really slim site without any unused CSS or JS code cluttering things up; fortunately the hacker theme weighed in under 10 kB, before I added Google Analytics (which I expect just about everyone has cached).

Here are my notes:

1. I started by making a new empty repo with the `<username>.github.io` format and adding nothing at all to it.
1. I went into the Github repo settings and down to the `GitHub Pages` section, where I used the `Change theme` button to pick this Hacker theme.
1. I cloned that repo, ran `bundle init`, added the `gem 'jekyll'` to the `Gemfile`, ran `bundle install --path vendor/bundle` (because of my user lacking permissions to install gems globally on Linux).
1. I started a `.gitignore` file for the bundled stuff, then [committed](https://github.com/AlexMooney/AlexMooney.github.io/commit/128f5de547db408ac53e2c4037732107ab8b4590) the files I had so far.
1. I realized that the theme is not native to Jekyll, so I added it to the `Gemfile`, ran `bundle update`, filled out the `_config.yml` file, and added some Jekyll-specific stuff to the `.gitignore`.
1. Next, I added a 404 page, although later I came back to correct the configuration so that it worked.
1. I started writing this post, and as I did I continued to troubleshoot.
1. I changed the `permalink` setting on in the `_config.yml` file so that my posts could be categorized.
1. I followed the [instructions](https://github.com/pages-themes/hacker#stylesheet) on the hacker theme repo to modify the CSS, which I changed to get the `inline code blocks` that I'm so fond of.  Thanks [@tomaskrizek](https://github.com/pages-themes/hacker/pull/11)!
1. I imported the layout from the hacker theme too, because I plan to make some modifications as I go, to support additional layouts and includes.

That's about all I've managed so far.
I'm really loving the simplicity of Jekyll!
