---
kind: "essay"
slug: "project-q-rethinking-queues"
title: "Project Q - Rethinking Queues"
date: "2017-12-02"
sourceDate: null
archiveYear: 2017
pinned: false
category: "projectsiwouldliketosee"
tags: ["blockchain", "queues", "capitalism", "fairness", "project q", "projects i'd like to see"]
description: "Here is one application for the blockchain, that is not about reimagining financial instruments. Rather, I would like to solve the problem of queues. Yes queues. Like when you queue up to buy tickets for the cinema, or fast food, or to see the doctor. I believe solving this would fix one of the fundamental traits of capitalism…"
cover: "/archive/media/ee7aa575ff8813ab321c.jpeg"
source: "essais/2017/project-q-rethinking-queues.html"
---

![](/archive/media/ee7aa575ff8813ab321c.jpeg)

I like to deconstruct new technologies mentally, really dig into what they are uniquely adding to the human inventory of tools. What can we do now that we couldn't do before?

So here is one application for the blockchain, that is not about reimagining financial instruments. I would like to solve the problem of **fairness in queues**. Yes queues. Like when you queue up to buy tickets for the cinema, or fast food, or to see the doctor. Queues may seem mundane but, this everyday phenomenon is at the heart of many complex interactions that take place in the modern world, which I will touch on in the essay. By understanding the nature of queue behaviour, I believe solving for fairness in queues would fix one of the fundamental traits of capitalism in the interests of fairness.

Curious to find out more? Read on.

### Rethinking Queues

To think about how or why to improve queues, we have to first understand what queues are. By definition, a queue is a waiting line. Which begs the question, why is there a waiting line? Because there is a bottleneck somewhere in the processing of objects/people in the queue sequence. Note that this bottleneck is not just dependent on speed of processing but also desired outcomes such as resource availability, fair distribution, safety and security, verification, measurement and reporting, gatekeeping for controlling flow and volume, linking to other processes etc.

Let's also define what constitutes a queue. The average laptop seems capable of multitasking but at the transistor level, it is a queue of individual operations - these are just occurring so fast that we perceive it as almost instantaneous multi-tasking. Similarly, queue up enough frames per second and you get the illusion of continuous movement on a screen. There are thousands of restaurants in our cities, but the one you want to eat in is the one whose queue length matters - both to you as a customer and the chef in the kitchen. There are thousands of products available on Black Friday but if you come too late, you missed the queue and the products are all gone. There are many services available in the market - from house cleaning to medical screening, from public transportation to police protection, from loot crates to legal representation - and we don't need all of them all the time. But enough people need some of the these services sometime that there is naturally a queue; in business terms, we call this demand. There is also a queue that determines how many products or services are available for purchase at a given moment of time - we call this supply.

My point... everything in modern life can be abstracted at some level as a queue. And queue information is critical to both customers and providers. So far, a lot of (digital) innovation has gone into increasing the volume and flow of supply, increasing the volume and satisfaction of demand. Not surprisingly, this is achieved by the intelligent use of queue information - predicting demand, managing complex supply chains, signalling interest/urgency/need etc. However I believe one aspect of these queues has not been addressed, one that is a fundamental trait of capitalism.

If you asked me to describe capitalism in 4 words, I would say "business class; economy class". Do you agree? It implies that if you have more monetary resources to afford a service, you get higher priority/quality. This leads naturally to a stratification of products and services in the market, and usually mentioned as "A Good Thing" because it increases the number of options for consumers. Connecting this reframe of capitalism to the concept of queues however, we see how some aspects of this system are unfair. In terms of queues, you can come late but if you are willing to pay more, you can skip to the front, essentially bypassing the queue. How do you normally feel about people skipping a queue you're in? For some things, this may not really matter - like who gets to sit on the flight first because the flight doesn't leave without everyone else anyway. (Still a sucky feeling sometimes :/) But for other things, preserving the queue is really an issue of justice - like who gets a vital organ for a transplant?

Now one might say, this isn't unfair - the newcomer did pay extra after all. But we must ask, fair to whom exactly? If a business has 300 items to sell - let's assume this item is an essential need for everyone - and the queue is small, there's enough for everyone and the business is compensated for each sale. If the queue is large but still there are enough items for everyone, the process takes longer but everyone eventually gets what they need and the business gets compensated. What happens when the queue is large and there are not enough items for everyone? The queue really starts to matter. The sequence can be sorted in different ways of course - by order of arrival, urgency, impact - depending on what feels just and right. No matter what, the business gets fairly compensated for every single item.

Now what if a newcomer walks in, skips the queue altogether, and buys some products regardless of order by paying extra for each product? For whom is it fair? Yes the newcomer has paid for his/her privilege, but what about the business that gets paid extra for products it had enough demand for anyway? Is it fair to the people who were waiting their turn in the original queue only to be deprived of it? And more importantly, can you see that this loophole creates great incentives for businesses to design *for* queue-skipping rather than not?

(Note that the hypothetical scenario described above is a toy problem to illustrate a more generic problem in queues, and within academic circles, solving for [fairness in queues](https://scholar.google.nl/scholar?hl=en&as_sdt=0%2C5&q=fairness+in+queues&btnG=&oq=fairness+in+q) has been a continuing debate.)

So how might we design some trust and fairness into queues? And could this be done in a peer-to-peer way rather than a top-down imposed rules kind of way? The next logical question is, what *would* be a fairer outcome in queues? I believe the fairer outcome is if newcomers are allowed to pay premiums to skip the queue in the first place, then this premium should be redistributed to the others in the queue, not the business which would have provided that service anyway.

I also believe that dynamic queue negotiation should be possible among the people in the queue, so that whichever order of sequence is decided upon, that sequence can be implemented with the consensus and compensation of the entire queue. This makes possible more complex kinds of ordering than first-come-first-served approaches that we currently observe because there are no other simple yet fair options.

So, putting all this on an evolutionary timeline, this is part of a natural progression:

Level 0: no queues - survival of the fittest

Level 1: queues form - first come first served(?)

Level 2: multi-line queues - "unfair" bypass rules

Level 3: smart queues - dynamic negotiation and compensation

### How can it be done?

These are some innovations in queues that I've observed in the world.

**Take a number:** Why stand in line as "proof" of your needing a service and your order in the line? Why not print a number upon arrival, wait in comfort and get served when your number is called up?

**Notifications:** in some fast food restaurants, you get an electronic notification token upon making an order. You can grab a table and wait in comfort. Again, when your order is ready, the notification token starts blinks and you can pick up your order.

**Blockchain:** a distributed immutable database that serves as a single source of truth.

What if we digitised queues using these innovations?

Instead of every business having its daily queue numbers, what if every *person* had a dedicated and unique token with which to queue up for various services? This is the equivalent of a personalised train pass you tap in and out each time you take a trip. The advantage of digitizing it is that you can now "queue" for multiple things without physically being there.

Whenever a user token enters the queue, it is recorded in a public ledger as a proof of demand and sequence in the existing queue. When your number in the sequence comes up, you can be notified digitally. And remember, you can be in multiple queues at any point of time. For businesses, the real-time queue information is important for planning resource allocation.

More interestingly, what if there were a smart contract layer for individual queues that allowed users to negotiate their order in the sequence among themselves? These negotiations redistribute the premiums that newcomers would have otherwise spent to persons within the queue via micro-transactions. Depending on how easily the smart contracts are designed, this process can be simplified or even automated.

An interesting way this could be implemented would be through microtransactions *a la* Flattr. Notably, negotiation only proceeds with consensus upstream of the queue. For any queue a user (newcomer) is in where he would prefer some urgency, he might define a certain amount that he is willing to spend to minimize the wait - say $10 dollars. This amount is quantized in that a single user may only receive a maximum of 50 cents from a single negotiation. With $10, in theory, 20 people may be compensated to give up their place in the queue. However, if #19 from the end is feeling some urgency, and decides that the compensation is not worth the delay, the negotiation ends there, and the newcomer advances to position #18 from the end.

The scenario above was just an example. However there are [quite a few alternatives to processing jobs on a queue that process/network specialists have designed depending on the usecase](https://en.wikipedia.org/wiki/Scheduling_(computing)#Scheduling_disciplines), and perhaps now, these can be implemented in the real world as well? First-come-first-serve is just one way of doing things after all...

### Some implications

Clearly, there are some design choice departures from the orthodox cryptotoken paradigm.

1. It is not necessary and perhaps more transparent if it were non-anonymous. Like telephone numbers or Twitter handles, some things don't have to be private.
2. Moreover, it is not necessary to preserve the full history of the system: participants who have been serviced can be dropped, and only the ones who are still in queues are kept in the ledger. This should vastly decrease the amount of data being transferred and archived in the network. On the other hand, if full history were to be maintained, depending on the value of the service, the queue number is in abstract a measure of value as (potential) proof of actual work.
3. To incentivise businesses to adopt the system, they take on the role of miners running and validating the network. Like a telephone network, system only works when multiple parties are equally participating in the network. In return, they receive a portion of the rewards within the network as compensation for what they would have otherwise received through premiums from queue-skipping newcomers.
4. To disincentivize users who might queue up just for the compensation, certain safeguards may be designed. This could look like price-of-entry payments for entering a queue in the first place, or penalties for missing your turn, or limitations on the number of times you can swap positions within the queue.

So that's the loose idea. I call it "Project Q", part of a new series called Projects I Would Like To See. Let me know what you think.
