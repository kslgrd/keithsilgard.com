---
layout: default
title: What the Internet Knows About You
description: Most people don't have any idea how much information they put out onto the internet each and every day. I try to explain what's out there, why it's used, and what you can do.
category: articles
---

#### A scenario
Pretend that you're shopping, and you visit The Gap. As soon as you walk in the door, someone quietly — and without asking — attaches a tracking device to you. As you continue to shop and visit different stores, the device reports back to The Gap on where you've been, what you're looking at, and what you ended up buying. Would you accept that? Would you continue to shop at The Gap?

#### The reality
Google, Facebook, Twitter and many others are doing exactly that to millions of people every day, but not many people know or care. If you have a Google account, and you keep yourself logged in, you may be interested to see [Google's ad profile for you](http://www.google.com/settings/ads/onweb/). The first time I saw my profile, I was shocked at its accuracy. How does Google know so much about me?

#### In a word, cookies
Whenever you visit google.com (or Gmail, YouTube, Picasa, and Google+) Google can write a simple text file to your computer called a cookie. In that file is a bunch of random looking text that uniquely identifies you, and from then on, whatever you do on any Google site, Google tracks exactly what you're doing. 

It gets even more interesting once you consider Google AdSense. Google sells ads on millions of web pages all across the internet, you may even recognize the familiar "ads by Google" ad blocks. Whenever you see those ads, your personally identifiable cookie is sent to Google and Google knows which site you're visiting. 

Have you heard of Google+? Well, you may have also seen Google's +1 button which lets you share pages on Google+. Guess what? Any time you see that button, you're cookie data is being sent to Google, and they know which article you're reading. 

Let's not point fingers at Google though. The exact same is true for Facebook's "like" button, (or the confusingly similar "like" box), and Twitter's "tweet" or "follow" buttons.

#### Why are they doing this?
It's important to remember that — so far as Facebook, Twitter and Google are concerned — you're not their customer. You're a product that they sell to their customers: advertisers. They track you all across the internet to build a more comprehensive profile of you, so that advertisers can more accurately target you. They provide you a service, and in exchange sell your attention.

The data is also used to improve the services, and provide features (to both you, and advertisers) that would otherwise be impossible. The information is all readily available, and there are no laws (in North America) preventing accessing, storing, or sharing that data.

Google uses the information gathered from across all of its sites to improve the quality of your search results (very successfully). Facebook uses their profile of you to suggest friends, and geo-tag your photos. Twitter suggests users you can follow who visit similar sites. Access to the data genuinely helps them improve your experience on their site.

#### Do I need to worry?
I honestly don't know. I worry about it, but only in a far-future, I read too much science fiction kind of way. For example, Facebook knows an incredible amount about me. Facebook is based in the United States, and as such, falls under the authority of the [Patriot Act](http://en.wikipedia.org/wiki/Patriot_Act). As such, the US Goverment can request the full contents of my Facebook profile without my knowledge and without a warrant. How much information is that? Ask Max Schrems who used a UK law to force Facebook to send him a copy of all data they had stored about him. [From a Forbes article last year](http://www.forbes.com/sites/kashmirhill/2012/02/07/the-austrian-thorn-in-facebooks-side/):

> Schrems and a few of his friends made the request, and a few weeks later, received CDs from Facebook’s California office in the mail. Schrems, who has been on Facebook since 2008, had a file that was over 1,200 pages long, including everyone he had ever friended and de-friended, every event he had ever been invited to (and how he responded), a history of every “poke” he had ever received, a record of who else signed onto Facebook on the same computers as him, email addresses that he hadn’t provided for himself (but that must have been culled from his friends’ contact lists) and all of his past messages and chats, including some with the notation “deleted.”

A typical response to this is "let them look, I have nothing to hide," and chances are that you're completely right. Like I said, it's the [scary science fiction](http://blogoscoped.com/archive/2007-09-17-n72.html) scenarios that get me a little worked up. Today, I'd say it's largely to your benefit that the data can be used to improve your experience on those sites. Tomorrow? That's really something you should think about.

#### What can I do about it?
You could disallow 3rd party cookies. Then when you visit "Site A", cookies aren't sent to "Site B" if there's an ad or a sharing button. Well, they shouldn't be, but unfortunately, [it's possible and commonplace to bypass that privacy setting](http://blogs.msdn.com/b/ie/archive/2012/02/20/google-bypassing-user-privacy-settings.aspx) \[1\].

Newer browsers have the option to send a [do not track](http://donottrack.us/) header along with all of your requests, which certainly helps, but again it's disabled by default, and most people aren't even aware the feature exists. Further, it's opt-in, so it will only be obeyed to the degree that it won't damage business (see 3rd party cookies above) \[2\].

Unless you're willing to be extremely paranoid, there's almost nothing you can do to truly protect your privacy. There is so much data sent by your browser to every single site you visit \[3\] that it's completely possible to create a "digital fingerprint" which uniquely identify you, even if you don't use cookies.

As near as I can tell, to be even slightly private on the web you'd need to extremely knowledgable about how the internet works, and implement insane workarounds like:

- use a plugin like [AdBlock Plus](http://adblockplus.org/en/) or [Ghostery](http://www.ghostery.com/) to block 3rd party traffic
- if you need to sign in to any site, do so in an incognito browser, and sign out as soon as you're finished
- don't allow plugins, such as Flash or Java to run
- use some type of proxy to hide your IP address
- spoof your browser user agent and randomize it
- change your browser size from one request to the next

And even then, you're not really in the clear. I do the first three, but I don't really suffer any illusions as to whether or not the people who *really* want to track me still can.

#### The truth about the internet
The most important thing you can do is treat everything you do on the internet as a post card. If you'd be embarrassed to see it posted on someone's fridge, don't put it on the internet. This includes emails, Facebook messages, instant messages, comments, forum posts, and the articles you read. There is no such thing as privacy on the internet.

_To learn when I post new articles, [sign up to receive an email](http://eepurl.com/jgbR9), or [follow me on Twitter](http://www.twitter.com/ironkeith)._

<hr id="footnotes">

1. This is actually a neat side effect of Apple shipping all iOS devices with 3rd party cookies disabled by default. Now that so many people use iPhones and iPads, sites are left being a little scummy to get the data (they think) they need to improve their services
2. It would be interesting to see what would happen if Apple started sending this header with all iOS devices
3. The important ones include you user-agent and IP address, but there are [many more](http://en.wikipedia.org/wiki/List_of_HTTP_header_fields#Requests)
