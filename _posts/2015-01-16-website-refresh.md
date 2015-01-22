---
layout: default
title: Website Refresh
description: I had to update my fonts, so I rewrote my entire website.
category: journal
---
I cancelled my Adobe Creative Cloud subscription (I barely used it), so I had to select new fonts, and I didn't want to use Bootstrap for my CSS anymore (too big), and it really is a lot easier to manage assets with gulp, and when I reinstalled Jekyll the version had been bumped, and I figured I should update; long story short, I completely rebuilt my website.


The most subtle — but to me the biggest — change is that I'm not including any third-party services. No fonts, no analytics, no share buttons, no jQuery CDN; nothing that I don't control. I am so frigging sick of being tracked and targeted on every damn website I visit. I feel a pang at the loss of analytics, but if I decide I care, I can install [Mint](http://haveamint.com).

I liked the old design better. It used Adelle for its body copy, and I love that font. Not using a custom typeface sucks, but I'm choosing privacy as a design feature. Adobe owns an ad network, so Typekit feels less trustworthy. (Google fonts is just another trojan in their epic battle to know every time I visit any website.) Georgia is not my favorite, but it will have to do for now.<sup>1</sup> On the bright side, my site loads crazy fast.<sup>2</sup>

I used Flexbox for the CSS layout. If you're reading this on IE9 (or Opera Mini&hellip;), that's why it looks so terrible. I hadn't used it before, and now I never want to go back to floats.

Lastly, I added a new category called "journal". I hate the word _blog_, so when I built the last site, I arbitrarily called my posts "articles". That had the weird effect of making me feel like anything I wrote had to be somehow substantial. Words have meanings, and I'm hoping that I can fool myself into relaxing and writing more freely.

<hr id="footnotes">

1. I might do some research and specialize the display of the site for OS X, iOS, and Windows, using Georgia as a fallback
2. I guess I could just buy Adelle, and host it myself&hellip; but then I'd have to host it myself