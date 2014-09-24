---
layout: default
title: Idea: A Better Job Site
description: "Jobs sites are all awful because none solve the basic problem: what employers want vs. what employees want are opposed."
category: ideas
---
Job sites are terrible for hiring, or for finding a job. Employers create postings filled with uninformative corporate drivel, and ridiculous requirements. Résumés focus on bios and facile action verbs. There should be a better way.

Employers and employees have aligned interests; employers need to hire and employees need a job. The purpose of a job site is to broker a relationship between the two, but there's no logic making the connection. Skills are treated as binary, you either have them or you don't. There's no room for priorities or emphasis. Making matches is a crap shoot, with neither side fully understanding what it is the other requires.


So how do we improve the system? Let's start from the employer's side. I've worked — and hired — as a programmer for the last 9 years, so for this exercise, let's pretend you're hiring a web developer. The question we need to answer is "what type of developer do you need?"

If you scan job sites, you'll see a common theme: every company is a "dynamic", "laid back" and "cool" place to work. They all need "rock star ninjas" who are "detail-driven" and "can work both independently and collaboratively" and blah blah blah. In short, every company needs the best, most talented people in the world. Next come the required skills, which is a laundry list of technologies that candidates must possess "expert knowledge" of, as well as having at least two years job experience. The icing on the cake is often the requirement of a degree. In short, employer job listings are an impossible dream so bereft of real information that no one takes them seriously.

So how do we improve this? We constrain your options. Your company name and URL are both required; employees need to know about your company. Describe your company, but do it in less than 140 characters. Then, tell us how much you are willing to pay for this position \[[1](#footnotes)\], how much work experience you require, and what level of education prospective employees will need.

What we're going to do with those three factors: pay, experience, and education, is assign points. With those points, we're going to allow you to adjust sliders for your job requirements, so you can create a more accurate picture of exactly who you're looking for.

[![A rough idea of what a job posting might look like](http://static.keithsilgard.com/images/ideas/jobs-employer.jpg)](http://static.keithsilgard.com/images/ideas/jobs-employer.jpg)

The sliders will range from novice to expert, and each level will require more points than the previous. You'll be able to add or remove requirements easily, but the points total will remain static. An important point is that each skill level needs to be anchored with concrete examples, otherwise there's no way of ensuring that what you consider a three matches what I consider a three. For example \[[2](#footnotes)\], if web programming \[[3](#footnotes)\] is a requirement, skill levels could be something like this:

1. They understand variables, functions, conditionals, and loops. They're comfortable modifying templates with code in them. They can perform simple tasks like sorting lists, or swapping words.
2. They can query a database for information. They can process forms, checking for required fields, and saving the submitted data.
3. They can create templates for popular open-source projects like Wordpress, or Drupal. They have experience using a framework like Ruby on Rails, or Django. They have some experience with object oriented programming.
4. They understand complex object oriented programming. They have a working knowledge of design patterns. They have contributed to a large, open-source project.
5. They have a deep knowledge of computer science. They have experience in scaling massively trafficked websites. They've written a programming language.

Now you can start to see how — as you add requirements for your position — a really clear picture of who you're looking to hire emerges. The huge challenge of this is defining the different job requirements and their skill levels, as well as balancing the points system. For every industry, it would require deep domain knowledge, as well as a lot of testing a fine tuning until we reach the proper balance.

A few other things that I'd like to see:

* a section that asks you to describe three different tasks whomever fills this position would be performing
* an overview of the technologies you use
* what other benefits the position offers (health, work from home, etc.)
* position details (full-time, part-time, contract)

We want to keep this page nice and clean, but it's important that you're able to explain some of your corporate culture.

---

This leads us to employees. First off, if you're looking for a job, chances are that your résumé sucks. I have personally seen hundreds of résumés, and while programming may be a special case, all of them have sucked. There's your objective statement, about being a "motivated self-starter" who is a "fast leaner". Your list of previous jobs with action word bullets which fail to convey what you actually did there, and for some reason you post that you worked for a grocery store when you were 15. If this is a technical position, you jam in every acronym you've ever heard of so that you can bypass clueless HR filters. You list your education, and let me know your reference are available on request. Oh, and you have a typo. I can't use any of that to hire you, I can only use it to find a reason not to.

So let's learn who you really are. The first thing we want to know about you is how much money you're making right now, and how much you think you should be making \[[4](#footnotes)\]. It would also be nice to ask you to link your Twitter account and Github profiles if you have them. I like the idea of allowing you to express some personality. Some may shy away from putting private, or silly messages on a job site, but do you really want to work for someone who wouldn't hire you if they knew who you were? I'd rather the opportunity to allow a small glimpse into the type of person I am, whether it ends up being more or less likely that I get any given job.

Next, we're going to ask you to explain what it is you do, how long you've been doing it, and how skilled you are at doing the various requirements of the job. Sound familiar? It's the same process employers had to go through when defining their job postings. The key change here is that for each skill, we also ask for an example of work that you've done that can demonstrate it. There needs to be a preference for concrete examples here as well, though for certain skills that would be impossible.

The last thing we ask for is a historical overview of your professional life. Where you worked, your job title, and how long you worked there, merged chronologically with when you want to school, what you studied, etc. Splitting up work experience and education always felt strange to me, and I've often found myself flipping back and forth between the two due to gaps of unaccounted time. Providing a nice, cohesive view feels a lot more natural.

Without a large pool of employee listings, we're never going to be able to attract employers. I think that it's really important that letting employees sign up be fun, and that the resulting page is really attractive and useful. Ideally, after they fill it out, they should be able to export a PDF and have a really great résumé that they can start submitting to employers. It might even be nice to make parts of the system (especially the skills chart) embeddable, so that people can put them into their websites, etc. That would be a great way to let your early adopters spread the word about your site, which is critical.

### Benefits to Employers

Using pay, education, and experience, along with the stated job requirements, we have a really great base for searching for candidates. This is key because [you don't want to hire someone who's looking for a job](http://www.joelonsoftware.com/articles/FindingGreatDevelopers.html). Instead, we can match you with whoever happens best meet your criteria, and help you to attract them. We also have a great opportunity to help you understand why you aren't able to find your ideal candidate. We can let you know if your expectations are out of whack; if you're asking for a university graduate with two years work experience, $50,000/year isn't going to get you what you want. If you're offering $80,000 for someone to skin Wordpress blogs, you might be over paying.

We also reverse the typical job ad cycle. Instead of paying to push a message out to the world, you define your position, and we deliver a list of vetted employees. It removes the tedious step of manually drudging through the dozens of terrible résumés that typical job postings return, and puts you directly in contact with the people you're looking for.

We could also set this up as a "pay for contact" model, which drastically lowers risk. Fill out the job posting form for free, and see if the site has any matches for you. If you want to contact them, you have to pay, but at least you know what you're getting.

### Benefits to Employees

Being passively available on the job market is very much in any employee's best interest. By outlining your skills and experience, you're automatically available to any potential employers and job offers. It could help you find a job that's a better fit than your current position, or give you leverage when it comes time to negotiate your current compensation.

Exporting a clean, professional, and concise résumé would be hugely valuable. If the site were to succeed at nothing beyond helping people create decent résumés, I can't say that I'd be completely disappointed.

There are already a crop of "hey look at me" style job sites ([Zerply](http://zerply.com), [Stack Overflow](http://careers.stackoverflow.com), [About.me](http://about.me)) which compell people to sign up and share themselves with the world. I think the RPG style skills charts would be really fun for certain demographics (see: nerds like me), and seeing other people making and sharing profiles would compell people to make their own, just to play around.

**One last, quick note on matching.** I think an ideal candidate would be slightly below an employer's requirements, and not over any important ones. The reason being that someone overqualified for a position is going to get bored quickly, whereas a person slightly underqualified will be just challenged enough to be focussed and interested.

*If you have a something to say about this idea, you can [email me](mailto:hey@keithsilgard.com), or let me know on [Twitter](http://twitter.com/ironkeith). If you're interested in following what I write, there's an [RSS feed](/atom.xml), and a [mailing list](http://eepurl.com/jgbR9).*

<hr id="footnotes">

1. Pay doesn't have to be published, but it should be. I understand the reasons why employers wouldn't want to publish it, but I think they're silly. Most employers seem to be of the belief that while hiring, they are in a position of power, and that they can exploit that to minimize salaries. Fear of overpaying seems like a weird concern when weighed against the cost of lost opportunities or hiring someone who's underqualified. I suppose I'd rather spend too much money well than waste it frugally.
2. Please don't knit-pick this hierarchy. It's an example. It's not perfect, but it's good enough.
3. Would it be "web programmer", or "PHP/Ruby/Python/etc"? Deciding how finely grained the requirements should be is another big challenge. One idea is to make it "web programmer", but within the widget allow employers to specify which web programming languages they deal with, sort of like adding tags to a skill.
4. I don't think salary would really play into the points system. It's more a factor of experience and education. The main reason to ask for this is the ensure that employers and employees are on the same page when it comes to compensation.