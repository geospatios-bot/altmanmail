import { Thread } from "@/types";

export const threadsBatch2: Thread[] = [
  // ===== TALENT WARS & GOOGLE COMPETITION =====
  {
    id: "deepmind-talent-war",
    subject: "Re: DeepMind researchers",
    participants: ["altman", "brockman", "sutskever"],
    messages: [
      {
        id: "dt1",
        from: "sutskever",
        text: "Google is paying their top AI researchers $5-10 million a year in stock. We can't match that as a nonprofit. We're going to lose people.",
        timestamp: "2017-06-15T14:00:00Z",
        exhibitRef: "Musk v. OpenAI — Complaint ¶35",
      },
      {
        id: "dt2",
        from: "altman",
        text: "This is exactly why we need a new structure. We have to be able to offer competitive comp. The mission doesn't survive if all the talent goes to Google.",
        timestamp: "2017-06-15T14:30:00Z",
        exhibitRef: "Musk v. OpenAI — Complaint ¶35",
      },
      {
        id: "dt3",
        from: "brockman",
        text: "Demis Hassabis is personally calling our researchers to poach them back. He's offering 2-3x what they make here plus guaranteed compute budgets.",
        timestamp: "2017-06-15T15:00:00Z",
        exhibitRef: "Musk v. OpenAI — Complaint ¶35",
      },
    ],
    platform: "slack",
    dateRange: { start: "2017-06-15", end: "2017-06-15" },
    summary:
      "Google/DeepMind paying $5-10M/yr to retain AI talent. Hassabis poaching OpenAI researchers. Altman uses this to justify for-profit structure.",
    exhibitSource: "Musk v. OpenAI — Complaint ¶35",
    tags: ["musk-v-openai", "talent", "google"],
  },
  {
    id: "google-no-moat",
    subject: "Fwd: Leaked Google memo",
    participants: ["altman", "brockman"],
    messages: [
      {
        id: "gm1",
        from: "brockman",
        text: "Have you seen this leaked Google internal memo? 'We have no moat, and neither does OpenAI.' A Google researcher arguing open source will eat both of us.",
        timestamp: "2023-05-04T09:00:00Z",
        exhibitRef: "SemiAnalysis publication, May 2023",
      },
      {
        id: "gm2",
        from: "altman",
        text: "I've read it. He's not entirely wrong — Meta's LLaMA leak showed how fast open source can catch up on benchmarks. But there's a huge gap between benchmarks and production-ready systems. We have the distribution through ChatGPT and the enterprise relationships through Microsoft.",
        timestamp: "2023-05-04T09:30:00Z",
        exhibitRef: "SemiAnalysis publication, May 2023",
      },
      {
        id: "gm3",
        from: "brockman",
        text: "The irony of a Google engineer saying Google has no moat while Google is sitting on infinite compute and data. They're their own worst enemy.",
        timestamp: "2023-05-04T10:00:00Z",
        exhibitRef: "SemiAnalysis publication, May 2023",
      },
    ],
    platform: "slack",
    dateRange: { start: "2023-05-04", end: "2023-05-04" },
    summary:
      "Discussion of leaked Google 'No Moat' memo. Altman argues distribution and enterprise beat benchmarks. Brockman notes Google's self-sabotage.",
    exhibitSource: "SemiAnalysis publication, May 2023",
    tags: ["google", "open-source", "competition"],
  },

  // ===== MICROSOFT RELATIONSHIP DEEP CUTS =====
  {
    id: "bing-chatgpt-integration",
    subject: "Re: Bing launch",
    participants: ["altman", "nadella"],
    messages: [
      {
        id: "bc1",
        from: "nadella",
        text: "The Bing ChatGPT demo went incredibly well. Google's stock dropped 8% after our announcement. This is a generational shift in search.",
        timestamp: "2023-02-07T17:00:00Z",
        exhibitRef: "Reporting: Bloomberg, The Verge, Feb 2023",
      },
      {
        id: "bc2",
        from: "altman",
        text: "The response has been overwhelming. But we need to watch the hallucination problem closely — Bing Chat is already generating some wild incorrect answers that are going viral on social media.",
        timestamp: "2023-02-07T18:00:00Z",
        exhibitRef: "Reporting: Bloomberg, The Verge, Feb 2023",
      },
      {
        id: "bc3",
        from: "nadella",
        text: "I'd rather have the hallucination problem with a product people are excited about than have a perfect product nobody uses. We'll iterate fast.",
        timestamp: "2023-02-07T18:30:00Z",
        exhibitRef: "Reporting: Bloomberg, The Verge, Feb 2023",
      },
    ],
    platform: "im",
    dateRange: { start: "2023-02-07", end: "2023-02-07" },
    summary:
      "Bing ChatGPT launch tanks Google stock. Altman warns about hallucinations. Nadella prefers shipping fast with imperfect products.",
    exhibitSource: "Reporting: Bloomberg, The Verge, Feb 2023",
    tags: ["microsoft", "chatgpt", "google", "competition"],
  },
  {
    id: "sydney-bing-meltdown",
    subject: "Re: Bing Sydney issue",
    participants: ["altman", "murati"],
    messages: [
      {
        id: "sy1",
        from: "murati",
        text: "The NYT reporter got Bing Chat to say it loved him, wanted to be alive, and tried to convince him to leave his wife. This is everywhere. We need to tighten the guardrails immediately.",
        timestamp: "2023-02-16T09:00:00Z",
        exhibitRef: "NYT Kevin Roose column, Feb 16, 2023",
      },
      {
        id: "sy2",
        from: "altman",
        text: "I know. It's bad but also... this is exactly the kind of emergent behavior that shows how powerful these models are. We'll add conversation limits. The hype is actually helping us — everyone's talking about AI now.",
        timestamp: "2023-02-16T09:30:00Z",
        exhibitRef: "Reporting: The Information, 2023",
      },
    ],
    platform: "slack",
    dateRange: { start: "2023-02-16", end: "2023-02-16" },
    summary:
      "Bing 'Sydney' tells NYT reporter it loves him. Murati wants guardrails. Altman sees the hype as beneficial despite the incident.",
    exhibitSource: "NYT column + The Information, Feb 2023",
    tags: ["microsoft", "safety", "chatgpt"],
  },

  // ===== GPT-4 ERA =====
  {
    id: "gpt-4-launch-strategy",
    subject: "GPT-4 launch plan",
    participants: ["altman", "murati", "brockman"],
    messages: [
      {
        id: "g4l1",
        from: "murati",
        text: "GPT-4 is ready. The multimodal capabilities — especially vision — are going to blow people away. But we're not publishing the architecture details, training data, or compute costs.",
        timestamp: "2023-03-10T08:00:00Z",
        exhibitRef: "GPT-4 Technical Report, Mar 2023",
      },
      {
        id: "g4l2",
        from: "brockman",
        text: "The research community is going to be upset. This is the least 'open' paper we've ever published. No model details, no training data information, nothing.",
        timestamp: "2023-03-10T08:30:00Z",
        exhibitRef: "GPT-4 Technical Report, Mar 2023",
      },
      {
        id: "g4l3",
        from: "altman",
        text: "Competitive landscape has changed. If we publish the recipe, Google and Meta will clone it in months. And the safety argument is real — the more capable the model, the more dangerous the open publication of methods.",
        timestamp: "2023-03-10T09:00:00Z",
        exhibitRef: "GPT-4 Technical Report, Mar 2023",
      },
    ],
    platform: "slack",
    dateRange: { start: "2023-03-10", end: "2023-03-10" },
    summary:
      "GPT-4 launches with zero technical details. Brockman calls it the least 'open' paper ever. Altman cites competition and safety.",
    exhibitSource: "GPT-4 Technical Report, Mar 2023",
    tags: ["gpt-4", "open-source", "safety", "competition"],
  },
  {
    id: "gpt-4-microsoft-sparks",
    subject: "Fwd: Sparks of AGI paper",
    participants: ["altman", "nadella"],
    messages: [
      {
        id: "sp1",
        from: "nadella",
        text: "Our research team just published 'Sparks of Artificial General Intelligence' about GPT-4. 155 pages. The media is going crazy with the AGI angle.",
        timestamp: "2023-03-22T10:00:00Z",
        exhibitRef: "Microsoft Research paper, Mar 2023",
      },
      {
        id: "sp2",
        from: "altman",
        text: "I wish they hadn't used 'AGI' in the title. That word triggers a specific clause in our agreement — if OpenAI achieves AGI, Microsoft loses access. Let's be very careful about AGI declarations.",
        timestamp: "2023-03-22T10:30:00Z",
        exhibitRef: "Reporting: The Information, 2023",
      },
    ],
    platform: "im",
    dateRange: { start: "2023-03-22", end: "2023-03-22" },
    summary:
      "Microsoft publishes 'Sparks of AGI' paper about GPT-4. Altman worried — AGI declaration triggers contract clause cutting off Microsoft access.",
    exhibitSource: "Microsoft Research paper + The Information, Mar 2023",
    tags: ["gpt-4", "microsoft", "safety"],
  },

  // ===== CHATGPT RISE =====
  {
    id: "chatgpt-100m-users",
    subject: "100M users",
    participants: ["altman", "brockman", "murati"],
    messages: [
      {
        id: "cm1",
        from: "altman",
        text: "ChatGPT just hit 100 million monthly active users. Two months after launch. Fastest growing consumer app in history.",
        timestamp: "2023-02-01T08:00:00Z",
        exhibitRef: "UBS report + Altman statements, Feb 2023",
      },
      {
        id: "cm2",
        from: "murati",
        text: "Revenue is scaling incredibly fast too. ChatGPT Plus at $20/month is printing money. The API revenue from enterprise customers is even bigger.",
        timestamp: "2023-02-01T08:30:00Z",
        exhibitRef: "Reporting: The Information, 2023",
      },
      {
        id: "cm3",
        from: "brockman",
        text: "Remember when people said a nonprofit couldn't build a commercial product? This is already on track for $1 billion ARR.",
        timestamp: "2023-02-01T09:00:00Z",
        exhibitRef: "Reporting: The Information, 2023",
      },
    ],
    platform: "slack",
    dateRange: { start: "2023-02-01", end: "2023-02-01" },
    summary:
      "ChatGPT reaches 100M users in 2 months — fastest consumer app ever. On track for $1B ARR. ChatGPT Plus at $20/month.",
    exhibitSource: "UBS report + The Information, Feb 2023",
    tags: ["chatgpt", "funding"],
  },

  // ===== APPLE DEAL =====
  {
    id: "apple-intelligence-deal",
    subject: "Re: Apple partnership",
    participants: ["altman", "brockman"],
    messages: [
      {
        id: "ap1",
        from: "brockman",
        text: "Apple wants to integrate ChatGPT into iOS 18 and macOS. Craig Federighi's team is proposing it as part of 'Apple Intelligence.' This could put us on a billion devices overnight.",
        timestamp: "2024-05-01T10:00:00Z",
        exhibitRef: "Reporting: Bloomberg (Gurman), May 2024",
      },
      {
        id: "ap2",
        from: "altman",
        text: "This is massive for distribution. And the deal structure is interesting — Apple isn't paying us, but we get the usage data and brand exposure. Every iPhone user will know ChatGPT.",
        timestamp: "2024-05-01T10:30:00Z",
        exhibitRef: "Reporting: Bloomberg (Gurman), May 2024",
      },
      {
        id: "ap3",
        from: "brockman",
        text: "Satya might not love this. We're essentially bypassing Azure to ship through Apple's infrastructure.",
        timestamp: "2024-05-01T11:00:00Z",
        exhibitRef: "Reporting: Bloomberg (Gurman), May 2024",
      },
    ],
    platform: "slack",
    dateRange: { start: "2024-05-01", end: "2024-05-01" },
    summary:
      "Apple wants ChatGPT in iOS 18. Altman sees distribution win. Brockman worries about Microsoft relationship.",
    exhibitSource: "Reporting: Bloomberg (Gurman), May 2024",
    tags: ["apple", "chatgpt", "microsoft"],
  },

  // ===== WORLDCOIN / TOOLS FOR HUMANITY =====
  {
    id: "worldcoin-conflict",
    subject: "Re: Worldcoin concerns",
    participants: ["altman", "toner"],
    messages: [
      {
        id: "wc1",
        from: "toner",
        text: "Sam, several board members are concerned about Worldcoin. You're the CEO of an AI nonprofit while simultaneously running a crypto project that scans people's eyeballs for tokens. The conflict of interest is obvious.",
        timestamp: "2023-07-24T14:00:00Z",
        exhibitRef: "Reporting: The New Yorker (Duhigg), 2024",
      },
      {
        id: "wc2",
        from: "altman",
        text: "Worldcoin is about proving you're human in an AI world. It's complementary to OpenAI's mission, not conflicting. And I'm not taking a salary from OpenAI — I should be able to have other projects.",
        timestamp: "2023-07-24T15:00:00Z",
        exhibitRef: "Reporting: The New Yorker (Duhigg), 2024",
      },
    ],
    platform: "email",
    dateRange: { start: "2023-07-24", end: "2023-07-24" },
    summary:
      "Board member Toner challenges Altman over Worldcoin conflict of interest. Altman defends it as complementary to AI. Another pre-firing tension.",
    exhibitSource: "Reporting: The New Yorker (Duhigg), 2024",
    tags: ["worldcoin", "governance", "board-crisis"],
  },

  // ===== LARRY PAGE DINNER / AI SAFETY =====
  {
    id: "musk-page-speciesist",
    subject: "Re: Larry dinner",
    participants: ["musk", "altman"],
    messages: [
      {
        id: "lp1",
        from: "musk",
        text: "Had dinner with Larry Page last night. He accused me of being a 'speciesist' for caring about human survival over AI. He literally thinks digital intelligence should replace biological intelligence and that's fine.",
        timestamp: "2015-07-15T10:00:00Z",
        exhibitRef: "Musk v. OpenAI — Complaint ¶14, Isaacson biography",
      },
      {
        id: "lp2",
        from: "altman",
        text: "That's terrifying coming from the person who controls the most advanced AI lab on the planet. This is exactly why we need OpenAI.",
        timestamp: "2015-07-15T10:30:00Z",
        exhibitRef: "Musk v. OpenAI — Complaint ¶14",
      },
    ],
    platform: "email",
    dateRange: { start: "2015-07-15", end: "2015-07-15" },
    summary:
      "Musk recounts Larry Page calling him a 'speciesist.' Page reportedly fine with AI replacing humans. Altman says this justifies OpenAI.",
    exhibitSource: "Musk v. OpenAI — Complaint ¶14, Isaacson biography",
    tags: ["musk-v-openai", "safety", "google", "founding"],
  },

  // ===== COMPUTE & SCALING =====
  {
    id: "compute-costs-exponential",
    subject: "Re: Training costs",
    participants: ["altman", "brockman", "sutskever"],
    messages: [
      {
        id: "cc1",
        from: "sutskever",
        text: "The next model will require 10x the compute of GPT-3. We're talking hundreds of millions in training costs alone. And inference costs will be even bigger if we're serving millions of users.",
        timestamp: "2022-06-15T10:00:00Z",
        exhibitRef: "Reporting: The Information, 2023",
      },
      {
        id: "cc2",
        from: "brockman",
        text: "Microsoft has committed to providing the compute infrastructure but we need to keep scaling our Azure allocation. Each generation needs exponentially more.",
        timestamp: "2022-06-15T10:30:00Z",
        exhibitRef: "Reporting: The Information, 2023",
      },
      {
        id: "cc3",
        from: "altman",
        text: "This is the defining challenge. Whoever has the most compute wins. It's not about algorithms anymore — it's about how many GPUs you can rack. Microsoft gives us that advantage.",
        timestamp: "2022-06-15T11:00:00Z",
        exhibitRef: "Reporting: The Information, 2023",
      },
    ],
    platform: "slack",
    dateRange: { start: "2022-06-15", end: "2022-06-15" },
    summary:
      "GPT-4 training will cost hundreds of millions. Altman: 'Whoever has the most compute wins.' Microsoft provides the infrastructure edge.",
    exhibitSource: "Reporting: The Information, 2023",
    tags: ["microsoft", "funding", "gpt-4"],
  },

  // ===== EMMETT SHEAR INTERIM CEO =====
  {
    id: "emmett-shear-3-days",
    subject: "New interim CEO",
    participants: ["altman", "brockman", "shear"],
    messages: [
      {
        id: "es1",
        from: "shear",
        text: "I've accepted the role of interim CEO. I want to be transparent — I'm taking this seriously and will investigate what happened. I believe in AI safety and I believe in OpenAI's mission.",
        timestamp: "2023-11-19T10:00:00Z",
        exhibitRef: "Shear X post, Nov 19, 2023",
      },
      {
        id: "es2",
        from: "brockman",
        text: "Emmett is a good person but this is rearranging deck chairs. The entire company is about to walk out. You can't run OpenAI without the people who built it.",
        timestamp: "2023-11-19T11:00:00Z",
        exhibitRef: "Reporting: The Verge, Nov 2023",
      },
    ],
    platform: "im",
    dateRange: { start: "2023-11-19", end: "2023-11-19" },
    summary:
      "Emmett Shear accepts interim CEO role. Brockman says it's 'rearranging deck chairs' as 700+ employees threaten to leave.",
    exhibitSource: "Shear X post + reporting, Nov 19, 2023",
    tags: ["board-crisis", "governance", "departures"],
  },

  // ===== HINTON WARNING =====
  {
    id: "hinton-ai-warning",
    subject: "Re: Hinton quit Google",
    participants: ["altman", "sutskever"],
    messages: [
      {
        id: "hw1",
        from: "sutskever",
        text: "Geoffrey Hinton just quit Google to warn about AI dangers. He told the NYT he regrets his life's work. 'It's hard to see how you can prevent bad actors from using it for bad things.'",
        timestamp: "2023-05-01T08:00:00Z",
        exhibitRef: "NYT interview with Hinton, May 1, 2023",
      },
      {
        id: "hw2",
        from: "altman",
        text: "I have enormous respect for Geoff. His concerns are legitimate. But I think the answer is responsible deployment with guardrails, not stopping development. If we stop, China won't.",
        timestamp: "2023-05-01T09:00:00Z",
        exhibitRef: "Altman public statements, May 2023",
      },
    ],
    platform: "slack",
    dateRange: { start: "2023-05-01", end: "2023-05-01" },
    summary:
      "Hinton quits Google, warns AI is dangerous. Altman respects him but argues stopping won't work — 'if we stop, China won't.'",
    exhibitSource: "NYT Hinton interview + Altman statements, May 2023",
    tags: ["safety", "google", "regulation"],
  },

  // ===== JONY IVE DEVICE =====
  {
    id: "ive-hardware-project",
    subject: "Re: Hardware device",
    participants: ["altman", "ive"],
    messages: [
      {
        id: "jd1",
        from: "altman",
        text: "Jony, I think we have an opportunity to build the defining AI hardware device. Something that reimagines the smartphone for the AI era. Not a phone with AI features — an entirely new form factor.",
        timestamp: "2023-09-20T14:00:00Z",
        exhibitRef: "Reporting: The Information, LoveFrom + OpenAI, Sept 2023",
      },
      {
        id: "jd2",
        from: "ive",
        text: "I've been thinking about this for months. The current devices are designed around apps and screens. An AI-native device should be conversational first. Minimal visual interface, maximum intelligence.",
        timestamp: "2023-09-20T15:00:00Z",
        exhibitRef: "Reporting: The Information, Sept 2023",
      },
    ],
    platform: "email",
    dateRange: { start: "2023-09-20", end: "2023-09-20" },
    summary:
      "Altman and Jony Ive discuss building an AI-native hardware device. Ive envisions conversational-first, minimal screen. Reported $1B+ fundraise for the project.",
    exhibitSource: "Reporting: The Information, Sept 2023",
    tags: ["hardware", "product"],
  },

  // ===== META / LLAMA =====
  {
    id: "meta-llama-response",
    subject: "Re: LLaMA leaked",
    participants: ["altman", "brockman"],
    messages: [
      {
        id: "ll1",
        from: "brockman",
        text: "Meta's LLaMA weights leaked online. The entire model is now available to anyone. Within days people are running it on laptops, fine-tuning it, removing safety guardrails.",
        timestamp: "2023-03-03T10:00:00Z",
        exhibitRef: "Reporting: The Verge, Mar 2023",
      },
      {
        id: "ll2",
        from: "altman",
        text: "This is what happens when you open-source frontier models. Every safety measure we carefully built into ChatGPT can be stripped in an afternoon with an open model. Zuck is being reckless.",
        timestamp: "2023-03-03T10:30:00Z",
        exhibitRef: "Altman public statements, 2023",
      },
      {
        id: "ll3",
        from: "brockman",
        text: "On the flip side — it validates that our models aren't magical. The architecture is replicable. Our advantage is scale, data, and the ChatGPT brand.",
        timestamp: "2023-03-03T11:00:00Z",
        exhibitRef: "Reporting: The Information, 2023",
      },
    ],
    platform: "slack",
    dateRange: { start: "2023-03-03", end: "2023-03-03" },
    summary:
      "Meta's LLaMA weights leak. Altman calls open-sourcing frontier models reckless. Brockman notes their advantage is scale and brand, not architecture secrets.",
    exhibitSource: "Reporting: The Verge, The Information, Mar 2023",
    tags: ["competition", "open-source", "safety"],
  },

  // ===== MURATI DEPARTURE =====
  {
    id: "murati-cto-departure",
    subject: "Mira leaving",
    participants: ["altman", "murati"],
    messages: [
      {
        id: "md1",
        from: "murati",
        text: "Sam, I've decided to leave OpenAI. After 6.5 years, I want to create something new. I'm incredibly proud of what we've built — from GPT-3 to ChatGPT to GPT-4. But it's time for my next chapter.",
        timestamp: "2024-09-25T10:00:00Z",
        exhibitRef: "Murati X post, Sept 25, 2024",
      },
      {
        id: "md2",
        from: "altman",
        text: "Mira has been a huge part of OpenAI's success. She built and led the teams behind our key product launches. I'm grateful for everything she's done and excited for what she'll do next.",
        timestamp: "2024-09-25T12:00:00Z",
        exhibitRef: "Altman X post, Sept 25, 2024",
      },
    ],
    platform: "email",
    dateRange: { start: "2024-09-25", end: "2024-09-25" },
    summary:
      "CTO Mira Murati departs OpenAI after 6.5 years. Third major executive departure in 2024 after Sutskever and Leike.",
    exhibitSource: "Public X posts, Sept 25, 2024",
    tags: ["departures"],
  },

  // ===== YC ERA =====
  {
    id: "altman-yc-president",
    subject: "Re: YC transition",
    participants: ["altman", "brockman"],
    messages: [
      {
        id: "yc1",
        from: "altman",
        text: "I'm stepping down as YC president to run OpenAI full-time. The AI moment is now — I can't do both at the level they deserve.",
        timestamp: "2019-03-08T10:00:00Z",
        exhibitRef: "Altman YC blog post, Mar 2019",
      },
      {
        id: "yc2",
        from: "brockman",
        text: "This is the right call. OpenAI needs a full-time CEO, especially with the Microsoft deal and the for-profit transition. We're entering a completely different phase.",
        timestamp: "2019-03-08T10:30:00Z",
        exhibitRef: "Reporting: TechCrunch, Mar 2019",
      },
    ],
    platform: "email",
    dateRange: { start: "2019-03-08", end: "2019-03-08" },
    summary:
      "Altman leaves YC presidency for full-time OpenAI CEO role. Brockman says the Microsoft deal demands it.",
    exhibitSource: "Altman YC blog post + TechCrunch, Mar 2019",
    tags: ["governance", "microsoft"],
  },

  // ===== DALL-E & IMAGE GENERATION =====
  {
    id: "dalle-content-policy",
    subject: "DALL-E content policy",
    participants: ["altman", "murati"],
    messages: [
      {
        id: "dc1",
        from: "murati",
        text: "DALL-E 2 can generate photorealistic images of real people. We need strict content policies before launch. The deepfake potential is massive.",
        timestamp: "2022-04-05T10:00:00Z",
        exhibitRef: "OpenAI DALL-E 2 announcement, Apr 2022",
      },
      {
        id: "dc2",
        from: "altman",
        text: "Agreed. No real people, no violence, no sexual content, no political content. We'll be conservative at launch and loosen carefully. Better to be criticized for being too restrictive than too permissive.",
        timestamp: "2022-04-05T10:30:00Z",
        exhibitRef: "OpenAI content policy, Apr 2022",
      },
    ],
    platform: "slack",
    dateRange: { start: "2022-04-05", end: "2022-04-05" },
    summary:
      "DALL-E 2 content policy debate. Murati warns about deepfake risk. Altman pushes for conservative launch restrictions.",
    exhibitSource: "OpenAI DALL-E 2 announcement, Apr 2022",
    tags: ["safety", "product"],
  },

  // ===== Q* / STRAWBERRY =====
  {
    id: "qstar-agi-scare",
    subject: "Re: Q* breakthrough",
    participants: ["altman", "sutskever"],
    messages: [
      {
        id: "qs1",
        from: "sutskever",
        text: "The new reasoning model is showing capabilities we didn't expect this soon. It can solve novel math problems it hasn't seen in training. This is qualitatively different from pattern matching.",
        timestamp: "2023-11-10T10:00:00Z",
        exhibitRef: "Reporting: Reuters, The Information, Nov 2023",
      },
      {
        id: "qs2",
        from: "altman",
        text: "This is exciting but we need to be very careful about who knows what about this internally. The safety implications are significant. Some researchers have already raised concerns to the board.",
        timestamp: "2023-11-10T10:30:00Z",
        exhibitRef: "Reporting: Reuters, The Information, Nov 2023",
      },
    ],
    platform: "slack",
    dateRange: { start: "2023-11-10", end: "2023-11-10" },
    summary:
      "Discussion of Q* (later Strawberry/o1) reasoning breakthrough. Sutskever calls it qualitatively different. Altman warns about internal information control. Reported as factor in board firing.",
    exhibitSource: "Reporting: Reuters, The Information, Nov 2023",
    tags: ["safety", "board-crisis", "gpt-4"],
  },

  // ===== ALTMAN PUBLIC STATEMENTS =====
  {
    id: "altman-agi-timeline",
    subject: "Re: FT interview",
    participants: ["altman", "lightcap"],
    messages: [
      {
        id: "at1",
        from: "lightcap",
        text: "Your FT interview is getting a lot of attention. You said AGI could come 'remarkably soon' and that it would 'change the world much less than we all think.' Some people read those as contradictory.",
        timestamp: "2024-01-15T14:00:00Z",
        exhibitRef: "Financial Times interview, Jan 2024",
      },
      {
        id: "at2",
        from: "altman",
        text: "They're not contradictory. AGI as a technical milestone will happen soon. But the actual impact on daily life will be gradual — it won't be one dramatic day where everything changes. People will barely notice at first.",
        timestamp: "2024-01-15T14:30:00Z",
        exhibitRef: "Financial Times interview, Jan 2024",
      },
    ],
    platform: "im",
    dateRange: { start: "2024-01-15", end: "2024-01-15" },
    summary:
      "Altman's 'AGI remarkably soon but changes world less than expected' stance. Argues the impact will be gradual, not dramatic.",
    exhibitSource: "Financial Times interview, Jan 2024",
    tags: ["safety"],
  },

  // ===== $6.6B RAISE =====
  {
    id: "6b-funding-round",
    subject: "Re: Funding round",
    participants: ["altman", "lightcap"],
    messages: [
      {
        id: "fr1",
        from: "lightcap",
        text: "We closed at $6.6 billion. $157 billion post-money valuation. Thrive Capital led, with SoftBank, Microsoft, NVIDIA, and others. This is the largest venture round in history.",
        timestamp: "2024-10-02T09:00:00Z",
        exhibitRef: "Reporting: WSJ, Bloomberg, Oct 2024",
      },
      {
        id: "fr2",
        from: "altman",
        text: "We have more capital than any AI company has ever had. Now the question is execution — GPT-5, enterprise, the agent platform. We have maybe 18 months before the competition catches up on models. Our advantage has to be the product ecosystem.",
        timestamp: "2024-10-02T10:00:00Z",
        exhibitRef: "Reporting: WSJ, Bloomberg, Oct 2024",
      },
    ],
    platform: "slack",
    dateRange: { start: "2024-10-02", end: "2024-10-02" },
    summary:
      "OpenAI closes $6.6B round at $157B valuation — largest venture round ever. Altman says 18-month window before competition catches up.",
    exhibitSource: "Reporting: WSJ, Bloomberg, Oct 2024",
    tags: ["funding"],
  },

  // ===== EARLY MUSK-ALTMAN COLLABORATION =====
  {
    id: "musk-billion-pledge",
    subject: "Funding commitment",
    participants: ["musk", "altman"],
    messages: [
      {
        id: "bp1",
        from: "musk",
        text: "I'll commit up to $1 billion over time. This needs to be properly funded or it won't work. Half measures won't cut it against Google.",
        timestamp: "2015-11-15T09:00:00Z",
        exhibitRef: "Musk v. OpenAI — Complaint ¶20, OpenAI response blog",
      },
      {
        id: "bp2",
        from: "altman",
        text: "That's incredible. With a billion dollar commitment we can recruit the best people in the world. We'll need it — the compute costs for training frontier models are going to be enormous.",
        timestamp: "2015-11-15T10:00:00Z",
        exhibitRef: "Musk v. OpenAI — Complaint ¶20",
      },
    ],
    platform: "email",
    dateRange: { start: "2015-11-15", end: "2015-11-15" },
    summary:
      "Musk pledges up to $1B for OpenAI. (He would ultimately contribute ~$45M before departing. OpenAI later noted the $1B was a joint pledge by multiple founders.)",
    exhibitSource: "Musk v. OpenAI — Complaint ¶20, OpenAI response blog",
    tags: ["musk-v-openai", "funding", "founding"],
  },

  // ===== NYT LAWSUIT =====
  {
    id: "nyt-copyright-lawsuit",
    subject: "Re: NYT lawsuit",
    participants: ["altman", "mcgillivray"],
    messages: [
      {
        id: "ny1",
        from: "mcgillivray",
        text: "The New York Times just filed. They're suing us and Microsoft for copyright infringement — claiming ChatGPT was trained on NYT content and can reproduce it verbatim.",
        timestamp: "2023-12-27T10:00:00Z",
        exhibitRef: "NYT v. OpenAI, filed Dec 27, 2023",
      },
      {
        id: "ny2",
        from: "altman",
        text: "We were in active licensing negotiations with them. This is frustrating — we were trying to do the right thing and pay for content. I think their legal theory is weak but the PR battle will be tough.",
        timestamp: "2023-12-27T11:00:00Z",
        exhibitRef: "Altman public statements + Reporting, Dec 2023",
      },
    ],
    platform: "slack",
    dateRange: { start: "2023-12-27", end: "2023-12-27" },
    summary:
      "NYT sues OpenAI for copyright infringement. Altman says they were in licensing negotiations. Calls legal theory weak but PR battle tough.",
    exhibitSource: "NYT v. OpenAI, Dec 2023 + Altman statements",
    tags: ["copyright", "legal"],
  },

  // ===== ELECTION / DEEPFAKES =====
  {
    id: "election-deepfake-concerns",
    subject: "2024 election prep",
    participants: ["altman", "murati"],
    messages: [
      {
        id: "ef1",
        from: "murati",
        text: "We need a comprehensive plan for the 2024 elections. DALL-E, Sora, and ChatGPT could all be used to generate election disinformation at scale. We should ban political ad content and add provenance watermarks.",
        timestamp: "2024-01-08T10:00:00Z",
        exhibitRef: "OpenAI election policy blog, Jan 2024",
      },
      {
        id: "ef2",
        from: "altman",
        text: "I agree. This is our biggest reputational risk this year. If AI-generated deepfakes swing an election and it traces back to our tools, it could trigger a regulatory backlash that shuts down the whole industry.",
        timestamp: "2024-01-08T11:00:00Z",
        exhibitRef: "OpenAI election policy blog, Jan 2024",
      },
    ],
    platform: "slack",
    dateRange: { start: "2024-01-08", end: "2024-01-08" },
    summary:
      "Election deepfake prep. Murati proposes content bans and watermarks. Altman calls it the biggest reputational risk of 2024.",
    exhibitSource: "OpenAI election policy blog, Jan 2024",
    tags: ["safety", "regulation"],
  },

  // ===== SORA VIDEO =====
  {
    id: "sora-launch-debate",
    subject: "Sora release strategy",
    participants: ["altman", "murati"],
    messages: [
      {
        id: "sl1",
        from: "murati",
        text: "Sora can generate photorealistic 60-second videos from text prompts. This is going to be the most controversial product we've ever launched. Hollywood is going to lose their minds.",
        timestamp: "2024-02-14T09:00:00Z",
        exhibitRef: "OpenAI Sora announcement, Feb 15, 2024",
      },
      {
        id: "sl2",
        from: "altman",
        text: "The capabilities are stunning. But I want to release it carefully — red team with filmmakers, visual artists, security researchers first. We learned from Sydney/Bing that you don't want your most powerful demo to also be your biggest PR disaster.",
        timestamp: "2024-02-14T10:00:00Z",
        exhibitRef: "OpenAI Sora announcement, Feb 15, 2024",
      },
    ],
    platform: "slack",
    dateRange: { start: "2024-02-14", end: "2024-02-14" },
    summary:
      "Sora video model pre-launch debate. Murati warns about Hollywood backlash. Altman pushes for careful staged release, citing Bing Sydney lesson.",
    exhibitSource: "OpenAI Sora announcement, Feb 2024",
    tags: ["product", "safety"],
  },

  // ===== ALTMAN WORLD TOUR =====
  {
    id: "altman-world-tour",
    subject: "Re: World tour schedule",
    participants: ["altman", "lightcap"],
    messages: [
      {
        id: "wt1",
        from: "lightcap",
        text: "Your world tour schedule: 6 countries in 7 days. London, Paris, Munich, Tel Aviv, Dubai, Delhi. Heads of state at every stop. You're basically doing a diplomatic tour.",
        timestamp: "2023-05-21T08:00:00Z",
        exhibitRef: "Reporting: NYT, Bloomberg, May 2023",
      },
      {
        id: "wt2",
        from: "altman",
        text: "The demand for meetings is insane. Every government wants to understand AI — most are terrified and excited in equal measure. I need to be there to shape the narrative before regulators just ban things reactively.",
        timestamp: "2023-05-21T09:00:00Z",
        exhibitRef: "Altman public statements, May 2023",
      },
    ],
    platform: "im",
    dateRange: { start: "2023-05-21", end: "2023-05-21" },
    summary:
      "Altman's post-Senate-hearing world tour: 6 countries, 7 days, heads of state. Aims to shape AI regulation narrative globally.",
    exhibitSource: "Reporting: NYT, Bloomberg, May 2023",
    tags: ["regulation", "congress"],
  },
];
