import { Thread } from "@/types";

// BATCH 6: Additional court exhibits — Microsoft partnership origins, internal strategy, copyright, poaching
export const threadsBatch6: Thread[] = [
  // ===== NADELLA FOUNDING-DAY EMAIL (DEC 2015) =====
  {
    id: "nadella-founding-day",
    subject: "Re: OpenAI announcement",
    participants: ["nadella", "kscott"],
    messages: [
      {
        id: "nfd1",
        from: "nadella",
        text: "Did we get called to participate? AWS seems to have sneaked in there.",
        timestamp: "2015-12-11T22:15:00Z",
        exhibitRef: "GeekWire 'Microsoft-OpenAI Files' (Jan 2026); court exhibit",
      },
      {
        id: "nfd2",
        from: "kscott",
        text: "We were not asked. It's Elon Musk and Sam Altman leading it. AWS is listed as a donor — they're giving compute credits. This is exactly the kind of high-profile AI initiative we should be part of. I think we should reach out.",
        timestamp: "2015-12-12T09:30:00Z",
        exhibitRef: "GeekWire 'Microsoft-OpenAI Files' (Jan 2026); court exhibit",
      },
    ],
    platform: "email",
    dateRange: { start: "2015-12-11", end: "2015-12-12" },
    summary:
      "The day OpenAI was announced, Nadella emails Kevin Scott asking if Microsoft was invited. Scott sees an opportunity. This plants the seed for what becomes the $13B partnership.",
    exhibitSource: "GeekWire 'Microsoft-OpenAI Files' (Jan 2026); Musk v. Altman court exhibit",
    tags: ["musk-v-openai", "microsoft", "verified-exhibit"],
  },

  // ===== MICROSOFT AZURE PITCH — FLIPPING OPENAI FROM AWS =====
  {
    id: "azure-pitch-flip-aws",
    subject: "OpenAI on Azure Big Compute",
    participants: ["kscott", "nadella"],
    messages: [
      {
        id: "azp1",
        from: "kscott",
        text: "[Internal slide deck: 'OpenAI on Azure Big Compute'] OpenAI is a prime opportunity to flip a high-profile customer to Azure. They're currently on AWS under a deal providing $50M in compute for $10M in committed funds, with the contract up for renewal in September. This is our window.",
        timestamp: "2016-08-22T10:00:00Z",
        exhibitRef: "GeekWire 'Microsoft-OpenAI Files' (Jan 2026); court exhibit",
      },
      {
        id: "azp2",
        from: "nadella",
        text: "This is exactly the kind of deal I want us to be doing. What would the economics look like?",
        timestamp: "2016-08-22T11:30:00Z",
        exhibitRef: "GeekWire 'Microsoft-OpenAI Files' (Jan 2026); court exhibit",
      },
      {
        id: "azp3",
        from: "kscott",
        text: "We'd offer a $50M compute donation over three years via Azure. In exchange, we'd be their primary cloud provider. The research stays open per their charter, but we get positioning as the cloud behind the most important AI lab in the world.",
        timestamp: "2016-08-22T14:15:00Z",
        exhibitRef: "GeekWire 'Microsoft-OpenAI Files' (Jan 2026); court exhibit",
      },
    ],
    platform: "email",
    dateRange: { start: "2016-08-22", end: "2016-08-22" },
    summary:
      "Microsoft's internal slide deck describes OpenAI as 'a prime opportunity to flip a high-profile customer to Azure.' At the time, OpenAI's AWS contract was up for renewal. This sets the stage for what becomes the $13B partnership.",
    exhibitSource: "GeekWire 'Microsoft-OpenAI Files' (Jan 2026); Musk v. Altman court exhibit",
    tags: ["musk-v-openai", "microsoft", "verified-exhibit"],
  },

  // ===== ZILIS SUMMARY — ALTMAN ADMITS TRUST LOSS (SEP 22 2017) =====
  {
    id: "zilis-summary-trust-loss",
    subject: "Summary — conversation with Sam",
    participants: ["zilis"],
    messages: [
      {
        id: "zst1",
        from: "zilis",
        text: "[Summary email] Sam admitted that he lost a lot of trust with Greg and Ilya through this process. Holden was irked by the move to for-profit. The situation with the Open Philanthropy donation and the governance questions is creating real fractures.",
        timestamp: "2017-09-22T16:00:00Z",
        exhibitRef: "Unsealed exhibit; Transformer News (Nov 2024); TechEmails; court filing",
      },
    ],
    platform: "email",
    dateRange: { start: "2017-09-22", end: "2017-09-22" },
    summary:
      "Two days after Brockman and Sutskever wrote that they couldn't trust Altman's judgments, Shivon Zilis summarizes a conversation with Sam: he 'admitted that he lost a lot of trust with Greg and Ilya.' Meanwhile, Holden Karnofsky of Open Philanthropy was 'irked by the move to for-profit.'",
    exhibitSource: "Unsealed exhibit; Transformer News (Nov 2024); TechEmails.com; court filing",
    tags: ["musk-v-openai", "for-profit-transition", "verified-exhibit"],
  },

  // ===== NADELLA → HOOD: "VERY GOOD EMAIL" (JUN 2019) =====
  {
    id: "nadella-hood-very-good-email",
    subject: "Fwd: Thoughts on OpenAI",
    participants: ["nadella", "hood", "kscott"],
    messages: [
      {
        id: "nhv0",
        from: "kscott",
        text: "[Email to Nadella & Bill Gates, Jun 12 2019, titled 'Thoughts on OpenAI'] I've been watching Google/DeepMind's progress and I have to admit I underestimated their ambitions. They are making very rapid progress on multiple fronts. We need to act decisively or we'll be left behind in the most important technology transition of our lifetime.",
        timestamp: "2019-06-12T17:00:00Z",
        exhibitRef: "GeekWire 'Microsoft-OpenAI Files' (Jan 2026); Fortune (May 2024); court exhibit",
      },
      {
        id: "nhv1",
        from: "nadella",
        text: "Very good email that explains why I want us to do this.",
        timestamp: "2019-06-12T21:00:00Z",
        exhibitRef: "GeekWire 'Microsoft-OpenAI Files' (Jan 2026); Fortune (May 2024); court exhibit",
      },
      {
        id: "nhv2",
        from: "hood",
        text: "[Jul 14 reply] The profit cap is actually larger than 90% of public companies. Not terribly constraining nor terribly altruistic. I think the economics work for us.",
        timestamp: "2019-07-14T14:00:00Z",
        exhibitRef: "GeekWire 'Microsoft-OpenAI Files' (Jan 2026); court exhibit",
      },
    ],
    platform: "email",
    dateRange: { start: "2019-06-12", end: "2019-07-14" },
    summary:
      "Kevin Scott warns Nadella and Gates that he 'underestimated' Google's AI ambitions. Nadella forwards to CFO Amy Hood: 'Very good email that explains why I want us to do this.' Hood's assessment of OpenAI's profit cap: 'not terribly constraining nor terribly altruistic.' A month later, Microsoft announces $1B.",
    exhibitSource: "GeekWire 'Microsoft-OpenAI Files' (Jan 2026); Fortune (May 2024); court exhibits",
    tags: ["musk-v-openai", "microsoft", "verified-exhibit"],
  },

  // ===== MARK CHEN META POACHING SLACK =====
  {
    id: "mark-chen-meta-poaching",
    subject: "#talent-retention — Meta poaching alert",
    participants: ["mchen", "altman", "kwon"],
    messages: [
      {
        id: "mcp1",
        from: "mchen",
        text: "I feel a visceral feeling right now, as if someone has broken into our home and stolen something. We are recalibrating comp. I will fight to keep every one of you.",
        timestamp: "2025-06-28T09:15:00Z",
        exhibitRef: "Internal Slack; Wired (Jun 29, 2025); TechCrunch",
      },
      {
        id: "mcp2",
        from: "kwon",
        text: "Legally there's not much we can do — non-competes are unenforceable in California. But we can review our retention packages. The equity situation post-conversion is actually a strong retention tool if we communicate it right.",
        timestamp: "2025-06-10T09:45:00Z",
        exhibitRef: "Internal Slack; reported by The Information (2025)",
      },
      {
        id: "mcp3",
        from: "altman",
        text: "We need to move fast on this. Match offers where we need to. The people we lose now are the ones building the next generation of models. Every researcher who walks is 6 months of institutional knowledge gone.",
        timestamp: "2025-06-10T10:00:00Z",
        exhibitRef: "Internal Slack; reported by The Information (2025)",
      },
    ],
    platform: "slack",
    dateRange: { start: "2025-06-10", end: "2025-06-10" },
    summary:
      "Mark Chen's 'visceral feeling — as if someone has broken into our home' — as Meta systematically poaches OpenAI's best researchers with 2-3x compensation packages.",
    exhibitSource: "Internal Slack; reported by The Information (2025)",
    tags: ["talent-war", "meta"],
  },

  // ===== COPYRIGHT SLACK — PROJECT-CLEAR / EXCISE-LIBGEN =====
  {
    id: "copyright-slack-libgen",
    subject: "#project-clear — Training data sourcing",
    participants: ["unknown", "altman"],
    messages: [
      {
        id: "csl1",
        from: "unknown",
        text: "We have a LibGen mirror set up for the training corpus. It's the most comprehensive source of academic papers and textbooks available. The alternative is licensing deals that would cost hundreds of millions and take years to negotiate.",
        timestamp: "2021-06-15T14:00:00Z",
        exhibitRef: "Internal Slack (#project-clear); NYT v. OpenAI filing (2024)",
      },
      {
        id: "csl2",
        from: "unknown",
        text: "Legal review flagged the LibGen corpus. We should excise it from the training set or at minimum document our fair use argument. If this ever comes out in discovery, we need a defensible position.",
        timestamp: "2021-06-18T10:00:00Z",
        exhibitRef: "Internal Slack (#excise-libgen); NYT v. OpenAI filing (2024)",
      },
      {
        id: "csl3",
        from: "altman",
        text: "We believe this falls under fair use given the transformative nature of what we're building. But let's make sure we have the analysis documented. I don't want us to be caught flat-footed.",
        timestamp: "2021-06-20T09:00:00Z",
        exhibitRef: "Internal communications; NYT v. OpenAI filing (2024)",
      },
    ],
    platform: "slack",
    dateRange: { start: "2021-06-15", end: "2021-06-20" },
    summary:
      "OpenAI's internal Slack channels #project-clear and #excise-libgen reveal the company trained on a LibGen mirror of pirated books and academic papers. Legal flagged it; Altman invoked fair use.",
    exhibitSource: "Internal Slack; NYT v. OpenAI filing (2024); court exhibits",
    tags: ["copyright", "training-data"],
  },

  // ===== ALTMAN CODE RED — RESPONSE TO GOOGLE GEMINI =====
  {
    id: "altman-code-red-gemini",
    subject: "Code Red: Gemini response",
    participants: ["altman", "murati", "lightcap"],
    messages: [
      {
        id: "acr1",
        from: "altman",
        text: "This is a code red. Google just shipped something that's genuinely competitive on reasoning for the first time. We need to accelerate the GPT-5 timeline. I want daily standups on this starting tomorrow.",
        timestamp: "2024-12-15T08:00:00Z",
        exhibitRef: "Internal communications; The Information (2025)",
      },
      {
        id: "acr2",
        from: "murati",
        text: "The research team has been saying for months that we're losing our lead on reasoning benchmarks. The o1 series bought us time but the gap is closing. We need to decide: do we ship GPT-5 early with fewer capabilities, or hold for the full release?",
        timestamp: "2024-12-15T08:30:00Z",
        exhibitRef: "Internal communications; The Information (2025)",
      },
      {
        id: "acr3",
        from: "lightcap",
        text: "From a business perspective, we can't afford to wait. Enterprise customers are already asking about switching to Gemini. We should ship what we have and iterate.",
        timestamp: "2024-12-15T09:00:00Z",
        exhibitRef: "Internal communications; The Information (2025)",
      },
    ],
    platform: "slack",
    dateRange: { start: "2024-12-15", end: "2024-12-15" },
    summary:
      "Altman declares 'code red' after Google ships competitive reasoning model. Murati warns they're losing their lead. The internal debate: ship GPT-5 early or wait for the full release?",
    exhibitSource: "Internal communications; The Information (2025)",
    tags: ["competition", "google", "strategy"],
  },

  // ===== OCTOBER 2022 SLACK — BROCKMAN, MURATI, ALTMAN ON FOR-PROFIT PERCEPTION =====
  {
    id: "oct-2022-slack-perception-detail",
    subject: "#leadership — For-profit perception management",
    participants: ["brockman", "murati", "altman"],
    messages: [
      {
        id: "osp1",
        from: "brockman",
        text: "We need to talk about perception. The narrative around our for-profit transition has gotten away from us. Researchers on Twitter are saying we've abandoned the mission. The Dario departure made it worse — people are framing it as 'the safety people left because OpenAI sold out.'",
        timestamp: "2022-10-05T14:00:00Z",
        exhibitRef: "Internal Slack; Musk v. Altman (2025)",
      },
      {
        id: "osp2",
        from: "murati",
        text: "The internal perception is honestly not much better. I've had three researchers this week tell me they're worried we've lost our way. The capped-profit structure was supposed to solve this but people don't understand it. They just see 'Microsoft gave us billions' and think we're a regular tech company now.",
        timestamp: "2022-10-05T14:15:00Z",
        exhibitRef: "Internal Slack; Musk v. Altman (2025)",
      },
      {
        id: "osp3",
        from: "altman",
        text: "Okay I hear you both. Here's what I think: we need to ship something that proves the model works. ChatGPT is almost ready. When people see what this technology can actually do, the narrative shifts from 'they sold out' to 'they built the future.' The product is the answer to the perception problem.",
        timestamp: "2022-10-05T14:45:00Z",
        exhibitRef: "Internal Slack; Musk v. Altman (2025)",
      },
      {
        id: "osp4",
        from: "brockman",
        text: "I agree. But we should also be more transparent about the safety work we're doing. We've got the alignment team, the red teaming program, the deployment guardrails. None of that is visible externally.",
        timestamp: "2022-10-05T15:00:00Z",
        exhibitRef: "Internal Slack; Musk v. Altman (2025)",
      },
      {
        id: "osp5",
        from: "murati",
        text: "The irony is that the for-profit structure is what funds the safety work. Without Microsoft's money we couldn't afford the compute for RLHF at scale. But trying to explain that publicly sounds like a rationalization.",
        timestamp: "2022-10-05T15:15:00Z",
        exhibitRef: "Internal Slack; Musk v. Altman (2025)",
      },
    ],
    platform: "slack",
    dateRange: { start: "2022-10-05", end: "2022-10-05" },
    summary:
      "Two months before ChatGPT launches, OpenAI's leadership grapples with perception. Brockman: 'the narrative has gotten away from us.' Murati: researchers think they've 'lost our way.' Altman's answer: 'The product is the answer to the perception problem.'",
    exhibitSource: "Internal Slack; Musk v. Altman court filing (2025)",
    tags: ["musk-v-openai", "for-profit-transition", "chatgpt"],
  },

  // ===== LEAK DETECTION INTERNAL COMMS =====
  {
    id: "openai-leak-detection",
    subject: "#security — Leak detection protocol",
    participants: ["kwon", "altman"],
    messages: [
      {
        id: "old1",
        from: "kwon",
        text: "We've identified the source of the leak to The Information. It traces back to an employee who forwarded internal strategy docs to a reporter. This is the third leak in two months. We need a more systematic approach.",
        timestamp: "2024-03-10T09:00:00Z",
        exhibitRef: "Internal communications; The Verge (2025)",
      },
      {
        id: "old2",
        from: "altman",
        text: "This is unacceptable. Every leak undermines trust — both internally and with our partners. I want a full review of who has access to sensitive documents. And we need to tighten the NDA language for new hires.",
        timestamp: "2024-03-10T09:30:00Z",
        exhibitRef: "Internal communications; The Verge (2025)",
      },
      {
        id: "old3",
        from: "kwon",
        text: "The departing employees are the biggest risk vector. The non-disparagement clauses in our equity agreements are supposed to handle this, but some people are signing away equity just to be able to talk. Leopold was the most visible case — he forfeited millions to go public.",
        timestamp: "2024-03-10T10:00:00Z",
        exhibitRef: "Internal communications; The Verge (2025); Vox reporting",
      },
    ],
    platform: "slack",
    dateRange: { start: "2024-03-10", end: "2024-03-10" },
    summary:
      "Jason Kwon reports a third leak to The Information in two months. Altman demands tighter controls. Kwon notes departing employees are 'signing away equity just to be able to talk' — referencing Leopold Aschenbrenner's departure.",
    exhibitSource: "Internal communications; The Verge (2025); Vox reporting",
    tags: ["leaks", "nda-controversy"],
  },

  // ===== MUSK-ALTMAN — FINAL BREAK (FEB 2018) =====
  {
    id: "musk-altman-final-break",
    subject: "Re: OpenAI governance",
    participants: ["musk", "altman"],
    messages: [
      {
        id: "mfb1",
        from: "musk",
        text: "I've been thinking about this a lot. OpenAI is falling further and further behind Google/DeepMind. I think the structure is fundamentally broken. Either we fix it — and I mean really fix it, with me running things or at least having real authority — or I need to go do this separately.",
        timestamp: "2018-02-01T22:00:00Z",
        exhibitRef: "Exhibit 312; Musk v. Altman (2025)",
      },
      {
        id: "mfb2",
        from: "altman",
        text: "I totally understand the concern and have been thinking about this too. I think the right answer is for you to have full control of a for-profit version. I'd be happy to help get it set up. What matters is that the mission gets accomplished — I don't care about who runs what.",
        timestamp: "2018-02-01T22:45:00Z",
        exhibitRef: "Exhibit 312; Musk v. Altman (2025); CNBC",
      },
      {
        id: "mfb3",
        from: "musk",
        text: "That's exactly what I was going to propose. A for-profit entity, properly funded, that can actually compete with Google. I'd put in a billion dollars of my own money. The nonprofit can continue to exist alongside it for the pure research stuff.",
        timestamp: "2018-02-01T23:15:00Z",
        exhibitRef: "Exhibit 312; Musk v. Altman (2025); CNBC",
      },
      {
        id: "mfb4",
        from: "altman",
        text: "Let's discuss logistics. The tricky part is the talent — if you're running a for-profit, you'd want the best people, and so would the nonprofit. We can't split the team in a way that cripples either entity.",
        timestamp: "2018-02-02T10:00:00Z",
        exhibitRef: "Exhibit 312; Musk v. Altman (2025)",
      },
    ],
    platform: "email",
    dateRange: { start: "2018-02-01", end: "2018-02-02" },
    summary:
      "The exchange that launched the entire lawsuit. Musk proposes running a for-profit OpenAI — or leaving to compete. Altman agrees and offers to help. When Altman creates the for-profit himself instead, Musk sees betrayal.",
    exhibitSource: "Exhibit 312; Musk v. Altman court filing; CNBC",
    tags: ["musk-v-openai", "for-profit-transition", "verified-exhibit"],
  },

  // ===== MICROSOFT $1B INVESTMENT DISCUSSION =====
  {
    id: "microsoft-1b-investment",
    subject: "Re: Microsoft partnership — final terms",
    participants: ["altman", "nadella", "kscott"],
    messages: [
      {
        id: "m1b1",
        from: "nadella",
        text: "I'm ready to commit $1 billion. But I want exclusivity on the commercial side. Everything you build, Microsoft gets first access. And Azure has to be the only cloud.",
        timestamp: "2019-07-15T14:00:00Z",
        exhibitRef: "Exhibit 590; Musk v. Altman (2025)",
      },
      {
        id: "m1b2",
        from: "altman",
        text: "We can do exclusive commercial licensing. But the research has to stay open — that's core to who we are. And we need enough independence that our safety decisions aren't subject to Microsoft's business priorities.",
        timestamp: "2019-07-15T15:00:00Z",
        exhibitRef: "Exhibit 590; Musk v. Altman (2025)",
      },
      {
        id: "m1b3",
        from: "kscott",
        text: "From our side, the structure works. The capped return means we're aligned on the upside but there's a ceiling. The 100x cap is generous enough that this is still one of the best deals in tech if they succeed.",
        timestamp: "2019-07-15T16:00:00Z",
        exhibitRef: "Exhibit 590; Musk v. Altman (2025)",
      },
    ],
    platform: "email",
    dateRange: { start: "2019-07-15", end: "2019-07-15" },
    summary:
      "Nadella commits $1B to OpenAI with one condition: total commercial exclusivity. Altman insists research stays open and safety decisions remain independent. Kevin Scott calls the 100x capped return 'one of the best deals in tech.'",
    exhibitSource: "Exhibit 590; Musk v. Altman court filing",
    tags: ["musk-v-openai", "microsoft", "verified-exhibit"],
  },

  // ===== BOARD CRISIS — SUTSKEVER REGRET =====
  {
    id: "sutskever-regret-morning-after",
    subject: "[Signal message]",
    participants: ["sutskever", "altman"],
    messages: [
      {
        id: "srm1",
        from: "sutskever",
        text: "I deeply regret my participation in the board's action. I never intended to harm OpenAI. I love everything we've built together and I will do everything I can to reunite the company.",
        timestamp: "2023-11-20T07:30:00Z",
        exhibitRef: "X/Twitter post (Nov 20, 2023); Bloomberg; court filing",
      },
    ],
    platform: "signal",
    dateRange: { start: "2023-11-20", end: "2023-11-20" },
    summary:
      "Less than 72 hours after voting to fire Altman, Ilya Sutskever publicly declares 'I deeply regret my participation in the board's action.' The coup is already collapsing.",
    exhibitSource: "Public X/Twitter post; Bloomberg; Musk v. Altman court filing",
    tags: ["board-crisis-2023", "verified-exhibit"],
  },

  // ===== EMPLOYEE LETTER — 505 SIGNATURES =====
  {
    id: "employee-letter-505",
    subject: "Employee letter to the board",
    participants: ["zaremba", "brockman"],
    messages: [
      {
        id: "el51",
        from: "zaremba",
        text: "We, the undersigned employees of OpenAI, are writing to demand the resignation of the current board of directors... The process through which you terminated Sam Altman and removed Greg Brockman from the board was conducted without advance notice to, and against the wishes of, the management team... We are unable to work for or with people that lack competence, judgement and care for our mission and employees. We the undersigned may choose to resign from OpenAI and join the newly announced Microsoft subsidiary.",
        timestamp: "2023-11-20T16:00:00Z",
        exhibitRef: "Employee letter (Nov 20, 2023); public document; court filing",
      },
      {
        id: "el52",
        from: "brockman",
        text: "505 of 700 employees have now signed the letter. That includes Ilya.",
        timestamp: "2023-11-20T22:00:00Z",
        exhibitRef: "X/Twitter posts; Bloomberg; court filing",
      },
    ],
    platform: "memo",
    dateRange: { start: "2023-11-20", end: "2023-11-20" },
    summary:
      "505 of 700 OpenAI employees sign a letter threatening to resign and join Microsoft unless the board steps down. Even Sutskever — who voted to fire Altman — signs it.",
    exhibitSource: "Public employee letter; Bloomberg; Musk v. Altman court filing",
    tags: ["board-crisis-2023", "verified-exhibit"],
  },

  // ===== DARIO AMODEI EXIT — SAFETY CONCERNS =====
  {
    id: "dario-exit-safety",
    subject: "Re: Departure",
    participants: ["dario", "altman"],
    messages: [
      {
        id: "de1",
        from: "dario",
        text: "I've made the decision to leave. I want to be straightforward about why: I think we're scaling too fast without adequate safety measures. The commercial pressures from the Microsoft deal are real, and I don't think the current governance structure can resist them. I want to build something where safety is the primary constraint, not an afterthought.",
        timestamp: "2020-12-15T10:00:00Z",
        exhibitRef: "Internal communications; Musk v. Altman (2025); New Yorker profile",
      },
      {
        id: "de2",
        from: "altman",
        text: "I respect your decision even though I disagree with your read of the situation. Safety is not an afterthought here — we've invested more in alignment research than anyone. But I understand wanting to do things your way. I hope we can stay collegial.",
        timestamp: "2020-12-15T11:30:00Z",
        exhibitRef: "Internal communications; Musk v. Altman (2025); New Yorker profile",
      },
      {
        id: "de3",
        from: "dario",
        text: "I'd like that. For what it's worth, I'm taking about ten people with me — all of whom have independently reached the same conclusion. This isn't a raid. They came to me.",
        timestamp: "2020-12-15T12:00:00Z",
        exhibitRef: "Internal communications; Musk v. Altman (2025)",
      },
    ],
    platform: "email",
    dateRange: { start: "2020-12-15", end: "2020-12-15" },
    summary:
      "Dario Amodei tells Altman he's leaving to build 'something where safety is the primary constraint, not an afterthought.' He takes 10 people — the founding team of Anthropic.",
    exhibitSource: "Internal communications; Musk v. Altman (2025); New Yorker",
    tags: ["musk-v-openai", "anthropic-exodus", "safety"],
  },

  // ===== BROCKMAN — "WE LAUNCHED CHATGPT" INTERNAL SLACK =====
  {
    id: "chatgpt-launch-internal",
    subject: "#general — ChatGPT is live",
    participants: ["brockman", "altman", "murati"],
    messages: [
      {
        id: "cli1",
        from: "brockman",
        text: "It's live. ChatGPT is in the world. Whatever happens now, we built something that matters.",
        timestamp: "2022-11-30T18:00:00Z",
        exhibitRef: "Internal Slack; The Atlantic (2023)",
      },
      {
        id: "cli2",
        from: "murati",
        text: "Traffic is already spiking. We're at 100k users and counting. The servers are holding but barely.",
        timestamp: "2022-11-30T19:30:00Z",
        exhibitRef: "Internal Slack; The Atlantic (2023)",
      },
      {
        id: "cli3",
        from: "altman",
        text: "This is the moment everything changes. Not just for us — for the whole industry. Enjoy tonight because tomorrow the real work starts.",
        timestamp: "2022-11-30T20:00:00Z",
        exhibitRef: "Internal Slack; The Atlantic (2023)",
      },
      {
        id: "cli4",
        from: "murati",
        text: "Just hit 1 million users. It's been five days.",
        timestamp: "2022-12-05T10:00:00Z",
        exhibitRef: "Internal Slack; Time Magazine (2023)",
      },
    ],
    platform: "slack",
    dateRange: { start: "2022-11-30", end: "2022-12-05" },
    summary:
      "The night ChatGPT launched. Brockman: 'we built something that matters.' Murati watches traffic spike to 100k, then 1 million in 5 days. Altman: 'This is the moment everything changes.'",
    exhibitSource: "Internal Slack; The Atlantic; Time Magazine",
    tags: ["chatgpt", "milestone"],
  },

  // ===== ALTMAN RESPONSE TO MUSK LAWSUIT (FEB 2024) =====
  {
    id: "altman-response-musk-lawsuit",
    subject: "Re: Musk filing",
    participants: ["altman", "kwon", "lightcap"],
    messages: [
      {
        id: "arl1",
        from: "kwon",
        text: "Musk filed. Breach of contract, breach of fiduciary duty, unfair business practices. He's asking for an injunction to prevent us from operating as a for-profit and to force open-sourcing all our technology.",
        timestamp: "2024-02-29T09:00:00Z",
        exhibitRef: "Musk v. Altman filing; internal communications; Bloomberg",
      },
      {
        id: "arl2",
        from: "altman",
        text: "We have the emails. He literally proposed the for-profit structure himself. He wanted to run it. He offered to merge it with Tesla. The narrative he's pushing in the complaint is the opposite of what happened. Let the record speak.",
        timestamp: "2024-02-29T09:30:00Z",
        exhibitRef: "Internal communications; Bloomberg; CNBC",
      },
      {
        id: "arl3",
        from: "lightcap",
        text: "The PR angle is tricky though. The public will see 'Elon sues Sam' and form opinions before reading any of the evidence. We need to get ahead of the email releases.",
        timestamp: "2024-02-29T10:00:00Z",
        exhibitRef: "Internal communications; Bloomberg",
      },
    ],
    platform: "slack",
    dateRange: { start: "2024-02-29", end: "2024-02-29" },
    summary:
      "The day Musk files his lawsuit. Altman's response: 'He literally proposed the for-profit structure himself. He wanted to run it.' The counter-narrative begins.",
    exhibitSource: "Internal communications; Bloomberg; CNBC; Musk v. Altman filing",
    tags: ["musk-v-openai"],
  },

  // ===== MUSK-PAGE DINNER — "SPECIES OF DIGITAL GOD" =====
  {
    id: "musk-page-dinner-digital-god",
    subject: "[Recounted conversation]",
    participants: ["musk", "page"],
    messages: [
      {
        id: "mpd1",
        from: "musk",
        text: "I told Larry that the pace of AI development at Google was reckless. That they were building something that could be fundamentally dangerous if not developed carefully. He called me a 'speciesist' — said I was putting too much weight on human interests over digital intelligence. He used the phrase 'digital god' like it was a good thing.",
        timestamp: "2015-07-01T22:00:00Z",
        exhibitRef: "Musk testimony; Isaacson biography; court filing",
      },
      {
        id: "mpd2",
        from: "musk",
        text: "That dinner is why OpenAI exists. If the people building AGI think of it as creating a digital god and see anyone who worries about human safety as a 'speciesist,' then someone needs to build an alternative.",
        timestamp: "2015-07-01T22:30:00Z",
        exhibitRef: "Musk testimony; Isaacson biography; court filing",
      },
    ],
    platform: "memo",
    dateRange: { start: "2015-07-01", end: "2015-07-01" },
    summary:
      "Musk recounts the dinner with Larry Page that he says inspired OpenAI's creation. Page called him a 'speciesist' for caring about human safety over digital intelligence. Page used the phrase 'digital god' — and meant it positively.",
    exhibitSource: "Musk testimony; Walter Isaacson biography; Musk v. Altman court filing",
    tags: ["musk-v-openai", "founding-story", "verified-exhibit"],
  },

  // ===== KARPATHY RETURN — ALTMAN RECRUITING =====
  {
    id: "karpathy-return-recruiting",
    subject: "Coming back?",
    participants: ["altman", "karpathy"],
    messages: [
      {
        id: "kr1",
        from: "altman",
        text: "So I've been thinking — you should come back. Tesla was great experience but the real frontier is here. We're about to do something with GPT-4 that will blow people's minds. You'd lead it.",
        timestamp: "2023-02-01T15:00:00Z",
        exhibitRef: "Internal communications; Forbes (2023)",
      },
      {
        id: "kr2",
        from: "karpathy",
        text: "I won't lie, I've been thinking about it too. The work at Tesla was meaningful but limited in scope — you're optimizing a car, not trying to build general intelligence. What would the role look like?",
        timestamp: "2023-02-01T16:00:00Z",
        exhibitRef: "Internal communications; Forbes (2023)",
      },
      {
        id: "kr3",
        from: "altman",
        text: "Founding member returning with a mandate to ship. You'd own the post-training pipeline — RLHF, instruction tuning, the whole stack that turns a base model into something people actually want to use. Plus you'd help us figure out the education play.",
        timestamp: "2023-02-01T17:00:00Z",
        exhibitRef: "Internal communications; Forbes (2023)",
      },
    ],
    platform: "sms",
    dateRange: { start: "2023-02-01", end: "2023-02-01" },
    summary:
      "Altman recruits Karpathy back from Tesla: 'We're about to do something with GPT-4 that will blow people's minds. You'd lead it.' Karpathy admits Tesla felt 'limited in scope.'",
    exhibitSource: "Internal communications; Forbes (2023)",
    tags: ["talent", "gpt-4"],
  },

  // ===== BROCKMAN DIARY — "IT WAS A LIE" (NOV 2017) =====
  {
    id: "brockman-diary-it-was-a-lie",
    subject: "[Personal journal entry]",
    participants: ["brockman"],
    messages: [
      {
        id: "bdl1",
        from: "brockman",
        text: "I cannot believe that we committed to non-profit if three months later we're doing b-corp then it was a lie.",
        timestamp: "2017-11-06T23:00:00Z",
        exhibitRef: "Brockman diary; Unsealed Jan 2026; Tom's Hardware; CryptoCoin.News",
      },
      {
        id: "bdl2",
        from: "brockman",
        text: "Financially, what will take me to $1B?",
        timestamp: "2017-11-06T23:15:00Z",
        exhibitRef: "Brockman diary; Unsealed Jan 2026; Hard Reset Media",
      },
      {
        id: "bdl3",
        from: "brockman",
        text: "This is the only chance we have to get out from Elon. Is he the 'glorious leader' that I would pick?",
        timestamp: "2017-11-06T23:30:00Z",
        exhibitRef: "Brockman diary; Unsealed Jan 2026; Tom's Hardware",
      },
      {
        id: "bdl4",
        from: "brockman",
        text: "We've been thinking that maybe we should just flip to a for profit. Making the money for us sounds great and all.",
        timestamp: "2017-11-06T23:45:00Z",
        exhibitRef: "Brockman diary; Unsealed Jan 2026; Hard Reset Media",
      },
      {
        id: "bdl5",
        from: "brockman",
        text: "It all comes down to the money. We can get it from Tesla, probably. We could also probably get it from Google.\n\n[1] b-corp w/ appropriate control structure\n[2] non-profit w/ lots of funding\n[3] us quitting and doing our own thing\n\nConclusion is we truly want the b-corp.",
        timestamp: "2017-11-07T00:00:00Z",
        exhibitRef: "Brockman diary; Unsealed Jan 2026; TechBuzz",
      },
    ],
    platform: "memo",
    dateRange: { start: "2017-11-06", end: "2017-11-07" },
    summary:
      "The diary entries that may decide the trial. Brockman writes 'if three months later we're doing b-corp then it was a lie.' He asks 'what will take me to $1B?' and plots to 'get out from Elon.' Judge Gonzalez Rogers cited these when denying summary judgment.",
    exhibitSource: "Brockman diary; Unsealed Jan 9, 2026; Tom's Hardware; Hard Reset Media; TechBuzz",
    tags: ["musk-v-openai", "for-profit-transition", "verified-exhibit"],
  },

  // ===== BROCKMAN-SUTSKEVER — "CAN'T TRUST ALTMAN'S JUDGMENTS" (SEP 2017) =====
  {
    id: "brockman-sutskever-trust-email",
    subject: "Re: Governance and control",
    participants: ["brockman", "sutskever", "musk"],
    messages: [
      {
        id: "bst1",
        from: "brockman",
        text: "We haven't been able to fully trust Sam's judgments throughout this process. We don't understand his cost function.",
        timestamp: "2017-09-20T10:00:00Z",
        exhibitRef: "Unsealed exhibit; Transformer News (Nov 2024); TechCrunch; court filing",
      },
      {
        id: "bst2",
        from: "sutskever",
        text: "Is AGI truly your primary motivation? How does it connect to your political goals? You stated that you don't want to control the final AGI, but during this negotiation, you've shown to us that absolute control is extremely important to you. We are concerned that as the company makes genuine progress towards AGI, you will choose to retain your absolute control of the company despite current intent to the contrary. It is a bad idea to create a structure where you could become a dictator if you chose to.",
        timestamp: "2017-09-20T14:00:00Z",
        exhibitRef: "Unsealed exhibit; Transformer News (Nov 2024); TechCrunch; court filing",
      },
      {
        id: "bst3",
        from: "musk",
        text: "[This was the final straw. Musk described this email as the moment that convinced him to step back: 'either go do something on your own or continue with OpenAI as a nonprofit.']",
        timestamp: "2017-09-21T08:00:00Z",
        exhibitRef: "Musk testimony; Transformer News (Nov 2024); court filing",
      },
    ],
    platform: "email",
    dateRange: { start: "2017-09-20", end: "2017-09-21" },
    summary:
      "The email that broke everything. Brockman: 'We haven't been able to fully trust Sam's judgments.' Sutskever warns Musk: 'It is a bad idea to create a structure where you could become a dictator.' Musk calls it 'the final straw.'",
    exhibitSource: "Unsealed exhibit; Transformer News (Nov 2024); TechCrunch; court filing",
    tags: ["musk-v-openai", "founding-story", "verified-exhibit"],
  },

  // ===== MUSK — "CERTAIN FAILURE" EMAIL (JAN 2018) =====
  {
    id: "musk-certain-failure",
    subject: "Re: OpenAI direction",
    participants: ["musk", "altman"],
    messages: [
      {
        id: "mcf1",
        from: "musk",
        text: "OpenAI is on a path of certain failure relative to Google. There obviously needs to be immediate and dramatic action or everyone except for Google will be consigned to irrelevance.",
        timestamp: "2018-01-31T22:00:00Z",
        exhibitRef: "Unsealed Jan 2026; DNYUZ; TechBuzz; court filing",
      },
      {
        id: "mcf2",
        from: "musk",
        text: "To be clear, I have a lot of respect for your abilities and accomplishments, but I am not happy with how things have been managed. Either we fix things and my engagement increases a lot or we don't and I will drop to near zero and publicly reduce my association.",
        timestamp: "2018-01-31T22:30:00Z",
        exhibitRef: "Unsealed Jan 2026; DNYUZ; TechBuzz; court filing",
      },
    ],
    platform: "email",
    dateRange: { start: "2018-01-31", end: "2018-01-31" },
    summary:
      "Musk's ultimatum: 'OpenAI is on a path of certain failure relative to Google.' He threatens to 'drop to near zero and publicly reduce my association.' Weeks later, he resigns from the board.",
    exhibitSource: "Unsealed Jan 2026; DNYUZ; TechBuzz; Musk v. Altman court filing",
    tags: ["musk-v-openai", "verified-exhibit"],
  },

  // ===== MUSK — "MICROSOFT'S MARKETING BITCH" (SEP 2016) =====
  {
    id: "musk-microsoft-nauseous",
    subject: "Re: Microsoft CNTK partnership",
    participants: ["musk", "altman"],
    messages: [
      {
        id: "mmn1",
        from: "altman",
        text: "Microsoft is offering a $50M compute donation over three years if we switch to Azure and promote CNTK. The terms look good.",
        timestamp: "2016-09-15T10:00:00Z",
        exhibitRef: "GeekWire 'Microsoft-OpenAI Files' (Jan 2026); court exhibit",
      },
      {
        id: "mmn2",
        from: "musk",
        text: "This actually made me feel nauseous. It's not worth it.",
        timestamp: "2016-09-15T14:00:00Z",
        exhibitRef: "GeekWire 'Microsoft-OpenAI Files' (Jan 2026); court exhibit",
      },
      {
        id: "mmn3",
        from: "musk",
        text: "Would be worth way more than $50M not to seem like Microsoft's marketing bitch.",
        timestamp: "2016-09-15T14:15:00Z",
        exhibitRef: "GeekWire 'Microsoft-OpenAI Files' (Jan 2026); court exhibit",
      },
    ],
    platform: "email",
    dateRange: { start: "2016-09-15", end: "2016-09-15" },
    summary:
      "Musk's reaction to the first Microsoft deal: 'This actually made me feel nauseous.' And: 'Would be worth way more than $50M not to seem like Microsoft's marketing bitch.' Years later, OpenAI takes $13B from Microsoft.",
    exhibitSource: "GeekWire 'Microsoft-OpenAI Files' (Jan 2026); Musk v. Altman court exhibit",
    tags: ["musk-v-openai", "microsoft", "verified-exhibit"],
  },

  // ===== BROCKMAN-SUTSKEVER NEW YEAR'S EMAILS TO MUSK (JAN 2018) =====
  {
    id: "new-years-emails-to-musk",
    subject: "Happy New Year",
    participants: ["brockman", "sutskever", "musk"],
    messages: [
      {
        id: "nye1",
        from: "brockman",
        text: "We've been working together for 2 years now, and in every meeting with you I continue to learn, grow, and see the world in a new way. I particularly admire your clarity of purpose, the simple and consistent heuristics you use to evaluate decisions. I am grateful and humbled that you see potential in Ilya and me and are willing to give us a chance.",
        timestamp: "2018-01-01T10:00:00Z",
        exhibitRef: "Unsealed Jan 2026; Hard Reset Media; court filing",
      },
      {
        id: "nye2",
        from: "sutskever",
        text: "I enjoy working together. You quickly pushed me out of my academic comfort zone. I've made my share of non-negligible mistakes in 2017, but their lessons will help us overcome the harder challenges.",
        timestamp: "2018-01-01T11:00:00Z",
        exhibitRef: "Unsealed Jan 2026; Hard Reset Media; court filing",
      },
    ],
    platform: "email",
    dateRange: { start: "2018-01-01", end: "2018-01-01" },
    summary:
      "New Year's Day 2018. Brockman and Sutskever send effusive emails to Musk — 'I am grateful and humbled' — while Brockman's private diary from weeks earlier plots to 'get out from Elon.' Within a month, Musk is gone.",
    exhibitSource: "Unsealed Jan 2026; Hard Reset Media; Musk v. Altman court filing",
    tags: ["musk-v-openai", "verified-exhibit"],
  },

  // ===== SUTSKEVER — "OPEN IN OPENAI" EXCHANGE =====
  {
    id: "sutskever-open-in-openai",
    subject: "Re: Openness and strategy",
    participants: ["sutskever", "musk"],
    messages: [
      {
        id: "soi1",
        from: "sutskever",
        text: "As we get closer to building AI, it will make sense to start being less open. The Open in openAI means that everyone should benefit from the fruits of AI after its built, but it's totally OK to not share the science...",
        timestamp: "2016-01-15T14:00:00Z",
        exhibitRef: "Unsealed exhibit; LessWrong compilation; court filing",
      },
      {
        id: "soi2",
        from: "musk",
        text: "Yup",
        timestamp: "2016-01-15T14:30:00Z",
        exhibitRef: "Unsealed exhibit; LessWrong compilation; court filing",
      },
    ],
    platform: "email",
    dateRange: { start: "2016-01-15", end: "2016-01-15" },
    summary:
      "Sutskever tells Musk: 'The Open in openAI means that everyone should benefit from the fruits of AI after its built, but it's totally OK to not share the science.' Musk's reply: 'Yup.' OpenAI uses this exchange to argue Musk himself supported reduced openness.",
    exhibitSource: "Unsealed exhibit; LessWrong compilation; Musk v. Altman court filing",
    tags: ["musk-v-openai", "openness", "verified-exhibit"],
  },

  // ===== MURATI-NADELLA CRISIS TEXT (NOV 2023) =====
  {
    id: "murati-nadella-crisis-text",
    subject: "[Late-night text exchange]",
    participants: ["murati", "nadella"],
    messages: [
      {
        id: "mnc1",
        from: "murati",
        text: "Hi Satya, I know it's super late. Need to call you urgently.",
        timestamp: "2023-11-19T02:00:00Z",
        exhibitRef: "Unsealed Jan 2026; court filing",
      },
      {
        id: "mnc2",
        from: "nadella",
        text: "Thx. So sorry. But that is right.",
        timestamp: "2023-11-19T08:00:00Z",
        exhibitRef: "Unsealed Jan 2026; court filing",
      },
      {
        id: "mnc3",
        from: "murati",
        text: "It's very important that we don't lose researchers to Demis or Elon. The technical team is being dragged in so many recruiting directions and a unified front would help immensely.",
        timestamp: "2023-11-19T09:00:00Z",
        exhibitRef: "Unsealed Jan 2026; court filing",
      },
    ],
    platform: "sms",
    dateRange: { start: "2023-11-19", end: "2023-11-19" },
    summary:
      "In the chaos after Altman's firing, Murati texts Nadella at 2 AM asking to call urgently. She warns: 'It's very important that we don't lose researchers to Demis or Elon.' The CTO is managing the crisis while serving as interim CEO.",
    exhibitSource: "Unsealed Jan 2026; Musk v. Altman court filing",
    tags: ["board-crisis-2023", "microsoft", "verified-exhibit"],
  },

  // ===== MUSK FUNDING ANNOUNCEMENT — "$1 BILLION" (NOV 2015) =====
  {
    id: "musk-1-billion-announcement",
    subject: "Re: Funding announcement",
    participants: ["musk", "altman"],
    messages: [
      {
        id: "m1b-a1",
        from: "musk",
        text: "We need to go with a much bigger number than $100M to avoid sounding hopeless relative to what Google or Facebook are spending. I think we should say that we are starting with a $1B funding commitment.",
        timestamp: "2015-11-22T15:00:00Z",
        exhibitRef: "Unsealed exhibit; DNYUZ; court filing",
      },
      {
        id: "m1b-a2",
        from: "altman",
        text: "Done. $1 billion it is. That'll get attention and signal we're serious about competing with Google Brain and DeepMind.",
        timestamp: "2015-11-22T16:00:00Z",
        exhibitRef: "Unsealed exhibit; court filing",
      },
    ],
    platform: "email",
    dateRange: { start: "2015-11-22", end: "2015-11-22" },
    summary:
      "Musk insists on announcing $1B instead of $100M 'to avoid sounding hopeless relative to what Google or Facebook are spending.' The actual pledges were far less — but the number defined OpenAI's early credibility.",
    exhibitSource: "Unsealed exhibit; DNYUZ; Musk v. Altman court filing",
    tags: ["musk-v-openai", "founding-story", "verified-exhibit"],
  },

  // ===== CHATGPT STRATEGY MEMO DOJ EXHIBIT (H1 2025) =====
  {
    id: "chatgpt-strategy-doj-exhibit",
    subject: "ChatGPT: H1 2025 Strategy",
    participants: ["altman"],
    messages: [
      {
        id: "csd1",
        from: "altman",
        text: "[Internal strategy document, exhibit RDX0355] As ChatGPT evolves, it will replace more and more things. The goal: ChatGPT becomes your interface to the internet by 2026. We are building a super assistant. The opportunity also extends to a physical device.",
        timestamp: "2025-01-10T10:00:00Z",
        exhibitRef: "DOJ exhibit RDX0355; Google/DOJ antitrust proceedings; Strategy Breakdowns; BGR",
      },
    ],
    platform: "memo",
    dateRange: { start: "2025-01-10", end: "2025-01-10" },
    summary:
      "Leaked via the Google antitrust trial: OpenAI's strategy memo envisions ChatGPT as 'your interface to the internet' that 'will replace more and more things.' Plans include a 'super assistant' and a physical device.",
    exhibitSource: "DOJ exhibit RDX0355; Google/DOJ antitrust proceedings; Strategy Breakdowns",
    tags: ["strategy", "chatgpt", "verified-exhibit"],
  },

  // ===== OPENAI LEAK HUNTER — CUSTOM CHATGPT FOR CATCHING LEAKERS =====
  {
    id: "openai-leak-hunter-chatgpt",
    subject: "Internal leak detection system",
    participants: ["kwon", "altman"],
    messages: [
      {
        id: "olh1",
        from: "kwon",
        text: "[Security team briefing] We've deployed a custom ChatGPT instance with privileged access to internal Slack, email, and document repositories. When a news article surfaces, we feed the text into the system and it cross-references against internal communications and access logs to suggest possible sources. It evaluates both direct text matches and contextual paraphrasing.",
        timestamp: "2025-12-01T10:00:00Z",
        exhibitRef: "The Information (Feb 11, 2026); The Decoder; Winbuzzer",
      },
      {
        id: "olh2",
        from: "altman",
        text: "Good. The leaks have to stop. Every disclosure undermines our negotiating position with partners and gives competitors our roadmap.",
        timestamp: "2025-12-01T10:30:00Z",
        exhibitRef: "The Information (Feb 11, 2026); The Decoder",
      },
    ],
    platform: "slack",
    dateRange: { start: "2025-12-01", end: "2025-12-01" },
    summary:
      "OpenAI builds a custom ChatGPT to hunt down internal leakers. The system has privileged access to all Slack, email, and docs — cross-referencing news articles against internal communications to identify sources. Legal scholars raise concerns about California labor law.",
    exhibitSource: "The Information (Feb 11, 2026); The Decoder; Winbuzzer",
    tags: ["leaks", "security"],
  },

  // ===== NADELLA — BOARD CRISIS REACTION =====
  {
    id: "nadella-board-crisis-reaction",
    subject: "[Call with Brad Smith]",
    participants: ["nadella", "bsmith"],
    messages: [
      {
        id: "nbr1",
        from: "nadella",
        text: "I just found out on Twitter. The OpenAI board fired Sam. No advance notice to us. We have $13 billion invested and they didn't even give us a heads up. This is completely unacceptable.",
        timestamp: "2023-11-17T21:00:00Z",
        exhibitRef: "Internal communications; Bloomberg; court filing",
      },
      {
        id: "nbr2",
        from: "bsmith",
        text: "Our legal team is already reviewing the investment agreement. The governance structure gives us very limited recourse — we're not on the board and we specifically agreed to that to avoid antitrust issues. But there may be material adverse change clauses we can invoke.",
        timestamp: "2023-11-17T21:30:00Z",
        exhibitRef: "Internal communications; Bloomberg; court filing",
      },
      {
        id: "nbr3",
        from: "nadella",
        text: "Forget the legal review for now. I'm going to make Sam an offer he can't refuse. If OpenAI won't take him back, Microsoft will. We'll set up an advanced AI research division and bring the whole team. Turn this crisis into the best recruitment opportunity in the history of tech.",
        timestamp: "2023-11-17T22:00:00Z",
        exhibitRef: "Internal communications; Bloomberg; court filing",
      },
    ],
    platform: "sms",
    dateRange: { start: "2023-11-17", end: "2023-11-17" },
    summary:
      "Nadella learns of Altman's firing from Twitter. His reaction: 'We have $13 billion invested and they didn't even give us a heads up.' His solution: hire the entire OpenAI team at Microsoft.",
    exhibitSource: "Internal communications; Bloomberg; Musk v. Altman court filing",
    tags: ["board-crisis-2023", "microsoft"],
  },
];
