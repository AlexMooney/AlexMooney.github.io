---
title: Playing with Vue.js at Pair Columbus
layout: default
date: 2017-08-13T10:58:36-04:00
categories: web
---

Yesterday, I spent a few hours at Pair Columbus because I was excited for the topic of the month: [Vue](https://vuejs.org/).
The assignment was, of course, to build a todo list app.
You can check out what Raymond and I ended up with [here](https://alexmooney.github.io/Pair_Columbus_Task_Tracker/).

Our app works pretty well, although I'd make some changes if I were going to spend the time to do it all again.
For one, I started from a pretty heavy example html layout instead of building it up from scratch.
When we had the app basically functioning, we had to spend time tearing out a ton of boilerplate that we didn't end up using.
This was the first time either of us had ever used `localStorage`, which was surprisingly trivial to implement.
We didn't end up implementing dragging to reorder the list, but that would have been next on our list, I suppose.

I became excited about Vue during a lightning talk from one of my coworkers.
His talk was on making a todo list using Vue and avoiding all of the Javascript build ecosystem.
I'm interested in Vue mostly because of how small and focused it is, which seems to echo the Unix Philosophy.

Why is the standard JavaScript example app a todo list?
Pen and paper is just better than a website to keep track of a list and check things off.
Why not pick something that computers are actually useful for?
