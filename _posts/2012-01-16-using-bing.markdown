---
layout: default
title: Using Bing
description: I decided to give Bing a fair shot, but it isn't fairing so well.
category: articles
scripts:
- /js/articles/bing-vs-google.js
---
Google's actions of late have left me wondering: can I live without them? Well there's really only one way \[[1](#footnotes)\] to find out: **try Bing**.

So I switched my default search engine to Bing, and since then, I've only used Google if Bing fails me. The unfortunately reality is that I still end up using Google daily. If I'm being honest, I'd much rather still be using Google, on the whole it's a better product. Bing isn't a lost cause though, they're just running a year or so behind. When they launched, there was a lot of clever innovation to be found. There are obviously talented people working there, but they really need to smooth some of the rough edges and differentiate themselves.

#### Design

The first stumbling block is just trying to skim the results. Bing has borrowed heavily from Google's design, but everything is just different enough to feel a little off, and where they are truly different, it's for the worse. Let's take a look at their search results:

<figure class="full" id="results-comparison">
	<img src="/images/articles/bing-vs-google/example-1-bing.png" alt="Bing search results for: check memory usage in PHP">
	<img src="/images/articles/bing-vs-google/example-1-google.png" alt="Google search results for: check memory usage in PHP">
	<figcaption>Click to alternate between Google and Bing</figcaption>
</figure>

If you click the image a few times, you'll get a good idea of how similar the two really are, so, what makes Google so much easier to skim?

1.	**Whitespace**  
	Bing gets all ten links into a single screen, while Google only manages eight. If all of the results had an equal probability of being *the one* Bing may have an advantage there, but [in reality](http://www.seomoz.org/blog/mission-imposserpble-establishing-clickthrough-rates) the first few links account for a majority of the clicks. Take a few steps away from your screen and compare the two. Not only are Google's results more prominent in the page, but the separation between results is more obvious. Google effectively uses whitespace to put the emphasis where it belongs, on the first few results.
2.	**URL Location**  
	Bing chooses to place the URL below the description, while Google places it immediately after the title. Google's placement makes for a better information hierarchy. I don't read search results, I skim them for useful markers, and the page URL is an important one. My basic process is something like this: skim the title, if it looks good, check the URL, if I know it, click the link, if not, skim the description. A failure at any point takes me to the next result. Bing's placement forces my eyes to jump around, and even after three months, I can't get used to it \[[2](#footnotes)\].
3.	**Page Layout**  
	Bing chooses to list related searches and search history in the left column. Neither of those are ever useful to me, but because they're blue links, and the often contain bolded words, I find them difficult to ignore \[[3](#footnotes)\]. The placement of search history is understandable \[[4](#footnotes)\], but it's functionally useless as I am yet to search for something, find a result, then need to run the exact same query again.

#### Search Results

Most of the time, Bing does a solid job, but when I see a posting like [this one on Reddit](http://www.reddit.com/r/pics/comments/l80eb/why_i_use_google_a_comparison_vs_bing_yahoo/), I can't say I'm really surprised. Google has progressed beyond keywords in pages, and seems to be taking intent into consideration when processing results. They've done this by slowly switching from page based algorithms to [entity based ones](http://justinbriggs.org/entity-search-results-the-on-going-evolution-of-search). It's likely that Bing is also doing similar work (the article says as much), but if so, the results just aren't there yet.

Unfortunately, I spend much of my day searching for relatively esoteric things, and Bing consistently fails to find what I'm looking for. Let's look at a few examples (click any result to see how Google handled the same query): 

<figure class="full">
	<img src="/images/articles/bing-vs-google/example-2-bing.png" alt="Bing search results for: iTunes Match laggy scroll">
	<img src="/images/articles/bing-vs-google/example-2-google.png" alt="Google search results for: iTunes Match laggy scroll">
	<figcaption>I signed up for iCloud and iTunes scrolling broke, Bing's index isn't fresh enough to tell me why.</figcaption>
</figure>

<figure class="full">
	<img src="/images/articles/bing-vs-google/example-3-bing.png" alt="Bing search results for: &raquo;">
	<img src="/images/articles/bing-vs-google/example-3-google.png" alt="Google search results for: &raquo;">
	<figcaption>Trying to search for the HTML entity to create a "&raquo;" by just pasting the character.<br> Google provides a helpful autocomplete, Bing is baffled.</figcaption>
</figure>

<figure class="full">
	<img src="/images/articles/bing-vs-google/example-4-bing.png" alt="Bing search results for: moderizer position fixed ios">
	<img src="/images/articles/bing-vs-google/example-4-google.png" alt="Google search results for: moderizer position fixed ios">
	<figcaption>Google notices and fixes a made-up word typo.</figcaption>
</figure>

<figure class="full">
	<img src="/images/articles/bing-vs-google/example-5-bing.png" alt="Bing search results for: ">
	<img src="/images/articles/bing-vs-google/example-5-google.png" alt="Google search results for: ">
	<figcaption>Bing incorrectly fixes a made-up word query.</figcaption>
</figure>

<figure class="full">
	<img src="/images/articles/bing-vs-google/example-6-bing.png" alt="Bing search results for: rbenv">
	<img src="/images/articles/bing-vs-google/example-6-google.png" alt="Google search results for: rbenv">
	<figcaption>I suspect Bing has issues indexing Stack Overflow, <br>it rarely finds results there, even on direct keyword matches.</figcaption>
</figure>

These are just a handful of the queries where Bing has let me down. I cherry picked them to illustrate the problems with using Bing as your default search engine:

- 	The index is often stale when compared to Google
- 	Bing is less likely to find results for complicated or obscure queries
- 	The auto-complete is slower, and often less helpful
- 	If you make a typo, or are searching for an obscure term, Bing will often fail
- 	Anecdotally, Bing seems to do a poor job of indexing and returning results for Stack Overflow. Stack Overflow is basically the Wikipedia of programming queries, it should almost always be in the results

#### Start Your Photocopiers

I think my biggest gripe with Bing is that it lacks originality. Certainly, Google has done an outstanding job of search, but that doesn't mean it's perfect. Bing lacks any sense of uniqueness. It has similar blended results, similar local results, similar maps, and similar images. If I were to replace the Bing logo with a Google one, and tell people that Google has redesigned, most would believe me. What Bing desperately needs is an answer to the question "why would I use this instead of Google?" Innovate, experiment, strike aggressive deals to get content Google can't access. They need to differentiate because "we're basically identical, but a little worse" isn't going to cut it.

#### Speed

My final grievance with Bing is that it's a little slower. For example, when I'm typing a query, I usually outpace Bing's autocomplete. It's not a huge deal, but Google's autocomplete loads *live results* at a faster rate. It is impossible for me to outpace Google's autocomplete, and often I'll see a recommended search that's exactly what I'm looking for, so I just have to hit the down arrow, then **boom** results. Further, with Google Instant, the results are loaded before I'm finished typing my query. With Bing it's always an additional page load. It's a tiny little thing, but the incredible responsiveness of Google make Bing look sluggish, which adds to its general knock-off feel.

#### And So...

Why am I still using Bing? Well, there are a few reasons. One, I don't think it's possible for Bing to get better than Google until it hits some critical traffic point. Google has a huge advantage because of its astonishing amount of search data. That's why Bing was surreptitiously [scraping Google's results](http://searchengineland.com/google-bing-is-cheating-copying-our-search-results-62914); they lacked the data to generate those results themselves. If I continue to use Bing, I'm one more data point they can use to create a viable competitor. My other reason: trust. Due to some perverse twist of fate, I find myself in a position where I trust Microsoft (of all the companies in the world) more than Google \[[5](#footnotes)\]. So can I live without Google? No. Not yet, at least. But I'm still going to try.
	
<hr id="footnotes">

1.	[blekko](http://www.blekko.com) also creates its own index, so I guess I could give them a shot. While I ran this experiment, [a friend](http://brenthousen.com) tried [DuckDuckGo](http://duckduckgo.com) and found it interesting, but ultimately wanting.
2.	Several times, Bing's results contained the page I was looking for, but I missed it. After Googling, I'd go back and notice it there, just a little further down.
3.	Placing related searches in the top left corner of the page makes no sense to me. I haven't had a chance to see if my current query has worked yet, so why choose to provide me with prominent alternates first thing? A better place for this list would be after the first ten results, and Bing seems to agree with me, as the exact same list appears there as well.
4.	It's nice of Bing to make it obvious to people that they are keeping a history, and allow easy options to clear it, and opt-out. I just don't agree that it needs that level of prominence. 
5.	Though honestly, if I'm going to let that be a defining boundary, I should really use DuckDuckGo.