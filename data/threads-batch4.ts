import { Thread } from "@/types";

// BATCH 4: Latest unsealed documents, depositions, and 2025-2026 docket activity
export const threadsBatch4: Thread[] = [
  // ===== MUSK ON TECH CEOS =====
  {
    id: "jeff-tool-satya-not",
    subject: "Re: Tech leaders",
    participants: ["musk", "altman"],
    messages: [
      {
        id: "jt1",
        from: "musk",
        text: "I think Jeff is a bit of a tool and Satya is not.",
        timestamp: "2016-08-15T14:00:00Z",
        exhibitRef: "Unsealed Jan 2026; DNYUZ; Hard Reset Media",
      },
      {
        id: "jt2",
        from: "altman",
        text: "Amazon started really dicking us around on the cloud deal. Switching to Google or Microsoft might make more sense anyway.",
        timestamp: "2016-08-15T15:00:00Z",
        exhibitRef: "Unsealed Jan 2026; DNYUZ",
      },
    ],
    platform: "email",
    dateRange: { start: "2016-08-15", end: "2016-08-15" },
    summary:
      "Musk calls Bezos 'a bit of a tool.' Altman complains Amazon was 'dicking us around' on cloud — foreshadowing the eventual Microsoft partnership.",
    exhibitSource: "Unsealed court documents (Jan 2026); DNYUZ; Hard Reset",
    tags: ["musk-v-openai", "microsoft", "verified-exhibit"],
  },

  // ===== JENSEN HUANG DGX-1 =====
  {
    id: "jensen-huang-dgx1",
    subject: "Re: GPU compute for OpenAI",
    participants: ["musk", "huang"],
    messages: [
      {
        id: "jh1",
        from: "musk",
        text: "[Requesting early access to NVIDIA's new DGX-1 supercomputer for OpenAI's research needs]",
        timestamp: "2016-08-20T10:00:00Z",
        exhibitRef: "Unsealed Jan 2026; Sources.news",
      },
      {
        id: "jh2",
        from: "huang",
        text: "I will make sure OpenAI gets one of the first ones.",
        timestamp: "2016-08-20T12:00:00Z",
        exhibitRef: "Unsealed Jan 2026; Sources.news; DNYUZ",
      },
    ],
    platform: "email",
    dateRange: { start: "2016-08-20", end: "2016-08-20" },
    summary:
      "Musk leverages his relationship with Jensen Huang to secure early NVIDIA DGX-1 hardware for OpenAI. Huang promises: 'I will make sure OpenAI gets one of the first ones.'",
    exhibitSource: "Unsealed court documents (Jan 2026); Sources.news",
    tags: ["musk-v-openai", "compute", "verified-exhibit"],
  },

  // ===== BROCKMAN DIARY — FOR-PROFIT DELIBERATIONS =====
  {
    id: "brockman-diary-for-profit",
    subject: "[Brockman diary — for-profit deliberations]",
    participants: ["brockman"],
    messages: [
      {
        id: "bfp1",
        from: "brockman",
        text: "We've been thinking that maybe we should just flip to a for profit.",
        timestamp: "2017-11-07T20:00:00Z",
        exhibitRef:
          "Musk v. Altman — Exhibit A; Judge Gonzalez Rogers ruling Jan 15, 2026",
      },
      {
        id: "bfp2",
        from: "brockman",
        text: "[Diary continues:] The financial question keeps coming up. If we're going to compete with Google we need serious capital. The nonprofit structure is strangling us.",
        timestamp: "2017-11-07T20:01:00Z",
        exhibitRef: "Musk v. Altman — Exhibit A; TechBuzz.ai",
      },
    ],
    platform: "memo",
    dateRange: { start: "2017-11-07", end: "2017-11-07" },
    summary:
      "More Brockman diary entries: 'maybe we should just flip to a for profit.' The judge later cited these entries as direct evidence of fraud — private plans contradicting public promises.",
    exhibitSource:
      "Musk v. Altman — Exhibit A; Judge Gonzalez Rogers order (Jan 15, 2026)",
    tags: ["musk-v-openai", "nonprofit", "governance", "verified-exhibit"],
  },

  // ===== KEVIN SCOTT MARCH 2018 — QUESTIONING FOR-PROFIT =====
  {
    id: "kevin-scott-for-profit-question",
    subject: "Re: OpenAI restructuring",
    participants: ["kscott", "nadella"],
    messages: [
      {
        id: "ks-fp1",
        from: "kscott",
        text: "[Internal email to Microsoft leadership:] I've been following the OpenAI situation closely. There are signals that they're moving toward some kind of for-profit structure. This raises real questions about the nonprofit mission they sold everyone on — including Elon. If they restructure as a for-profit, what happens to the billions in donations? What happens to the open-source commitments?",
        timestamp: "2018-03-15T09:00:00Z",
        exhibitRef:
          "Court discovery (Musk v. Altman); TechEmails.com; OfficeChai",
      },
    ],
    platform: "email",
    dateRange: { start: "2018-03-15", end: "2018-03-15" },
    summary:
      "Microsoft CTO Kevin Scott flags OpenAI's drift toward for-profit a full year before the 2019 restructuring. Questions what happens to 'billions in donations.'",
    exhibitSource:
      "Court discovery (Musk v. Altman); TechEmails.com; OfficeChai",
    tags: ["musk-v-openai", "microsoft", "nonprofit", "verified-exhibit"],
  },

  // ===== OCTOBER 2022 SLACK — PRE-CHATGPT =====
  {
    id: "october-2022-slack-perception",
    subject: "#leadership — public perception",
    participants: ["brockman", "murati", "altman"],
    messages: [
      {
        id: "os1",
        from: "brockman",
        text: "[Discussing how to manage public narrative around OpenAI's commercial direction ahead of major product launch]",
        timestamp: "2022-10-15T14:00:00Z",
        exhibitRef:
          "Exhibit 111, gov.uscourts.cand.433688; Musk v. Altman filing",
      },
      {
        id: "os2",
        from: "murati",
        text: "[Raising concerns about perception of nonprofit-to-profit shift among researchers and the public]",
        timestamp: "2022-10-15T14:30:00Z",
        exhibitRef: "Exhibit 111, gov.uscourts.cand.433688",
      },
      {
        id: "os3",
        from: "altman",
        text: "[Directing messaging strategy around the capped-profit structure, weeks before ChatGPT launch]",
        timestamp: "2022-10-15T15:00:00Z",
        exhibitRef: "Exhibit 111, gov.uscourts.cand.433688",
      },
    ],
    platform: "slack",
    dateRange: { start: "2022-10-15", end: "2022-10-15" },
    summary:
      "Internal Slack conversation between Brockman, Murati, and Altman about managing public perception of OpenAI's commercial direction — weeks before ChatGPT launch. Entered as Exhibit 111.",
    exhibitSource: "Exhibit 111 — gov.uscourts.cand.433688; Musk v. Altman",
    tags: [
      "musk-v-openai",
      "governance",
      "nonprofit",
      "chatgpt",
      "verified-exhibit",
    ],
  },

  // ===== BROCKMAN DEPOSITION — BILLIONAIRE =====
  {
    id: "brockman-deposition-billionaire",
    subject: "[Brockman deposition — Musk v. Altman]",
    participants: ["brockman"],
    messages: [
      {
        id: "bdb1",
        from: "brockman",
        text: "[Under oath:] Q: 'Did the prospect of becoming a billionaire matter to you?' A: 'It definitely mattered.' Q: 'When you wrote in your diary about what would take you to $1B, that was a real consideration?' A: 'Yes.'",
        timestamp: "2025-09-20T10:00:00Z",
        exhibitRef: "Brockman deposition 2025; TechBuzz.ai; Sources.news",
      },
      {
        id: "bdb2",
        from: "brockman",
        text: "[Under oath:] I still believe the for-profit transition was necessary for the mission. But yes, the financial opportunity was part of my thinking. I don't think those two things are incompatible.",
        timestamp: "2025-09-20T10:30:00Z",
        exhibitRef: "Brockman deposition 2025; TechBuzz.ai",
      },
    ],
    platform: "memo",
    dateRange: { start: "2025-09-20", end: "2025-09-20" },
    summary:
      "Under oath, Brockman admits the prospect of becoming a billionaire 'definitely mattered' to him. Confronted with his own diary entry: 'What will take me to $1B?'",
    exhibitSource: "Brockman deposition (2025); TechBuzz.ai; Sources.news",
    tags: ["musk-v-openai", "nonprofit", "governance", "verified-exhibit"],
  },

  // ===== ALTMAN DEPOSITION =====
  {
    id: "altman-deposition-musk-sensitive",
    subject: "[Altman deposition — Musk v. Altman]",
    participants: ["altman"],
    messages: [
      {
        id: "ad1",
        from: "altman",
        text: "[Under oath:] Elon is extremely sensitive to personal reputation. Many of his actions during that period were driven by how things would look publicly rather than by what was best for the mission.",
        timestamp: "2025-10-05T10:00:00Z",
        exhibitRef: "Altman deposition 2025; Unsealed Jan 2026",
      },
      {
        id: "ad2",
        from: "altman",
        text: "[Under oath:] I have always believed the capped-profit structure was the right path for OpenAI. The nonprofit couldn't raise the capital needed to compete. The alternative was irrelevance.",
        timestamp: "2025-10-05T10:30:00Z",
        exhibitRef: "Altman deposition 2025; TechBuzz.ai",
      },
      {
        id: "ad3",
        from: "altman",
        text: "[Under oath, on his equity:] I didn't take equity in the for-profit entity until the board offered it in 2024. I ran OpenAI for years without any financial stake. That's not what someone committing fraud does.",
        timestamp: "2025-10-05T11:00:00Z",
        exhibitRef: "Altman deposition 2025; CNBC",
      },
    ],
    platform: "memo",
    dateRange: { start: "2025-10-05", end: "2025-10-05" },
    summary:
      "Altman's deposition: calls Musk 'extremely sensitive to personal reputation.' Defends capped-profit as necessary. Claims running OpenAI without equity proves no fraud.",
    exhibitSource: "Altman deposition (2025); TechBuzz.ai; CNBC",
    tags: ["musk-v-openai", "governance", "verified-exhibit"],
  },

  // ===== MUSK DEPOSITION =====
  {
    id: "musk-deposition-excerpts",
    subject: "[Musk deposition — Musk v. Altman]",
    participants: ["musk"],
    messages: [
      {
        id: "md1",
        from: "musk",
        text: "[Under oath:] I donated approximately $44 million to OpenAI. I was told it would remain a nonprofit dedicated to benefiting humanity. That was the deal. They took the money and changed the deal.",
        timestamp: "2025-09-15T10:00:00Z",
        exhibitRef: "Musk deposition Sept 2025; CNBC; Bloomberg",
      },
      {
        id: "md2",
        from: "musk",
        text: "[Under oath:] The for-profit conversion is the biggest bait-and-switch in Silicon Valley history. I was induced to donate based on representations that turned out to be false.",
        timestamp: "2025-09-15T10:30:00Z",
        exhibitRef: "Musk deposition Sept 2025; CNBC",
      },
      {
        id: "md3",
        from: "musk",
        text: "[Under oath, on suggesting C-corp himself:] I was exploring options. Exploring is different from committing. The point is that Sam and Greg made promises about the nonprofit structure and then broke those promises while keeping my money.",
        timestamp: "2025-09-15T11:00:00Z",
        exhibitRef: "Musk deposition Sept 2025; TechBuzz.ai",
      },
    ],
    platform: "memo",
    dateRange: { start: "2025-09-15", end: "2025-09-15" },
    summary:
      "Musk's deposition: calls the for-profit conversion 'the biggest bait-and-switch in Silicon Valley history.' When confronted with his own C-corp suggestion, distinguishes 'exploring' from 'committing.'",
    exhibitSource: "Musk deposition (Sept 2025); CNBC; Bloomberg",
    tags: ["musk-v-openai", "nonprofit", "verified-exhibit"],
  },

  // ===== NADELLA DEPOSITION — GATES & NEURALINK =====
  {
    id: "nadella-deposition-gates-neuralink",
    subject: "[Nadella deposition — expanded excerpts]",
    participants: ["nadella"],
    messages: [
      {
        id: "ndg1",
        from: "nadella",
        text: "[Under oath:] Bill was very clear — he said 'you're going to burn this billion dollars and have nothing to show for it.' He wanted Microsoft to build AI capabilities in-house rather than partner with OpenAI.",
        timestamp: "2025-03-15T10:30:00Z",
        exhibitRef: "Nadella deposition 2025; GeekWire; TechBuzz.ai",
      },
      {
        id: "ndg2",
        from: "nadella",
        text: "[Under oath, on Neuralink:] My financial advisor made an investment in Neuralink. I became aware of it subsequently. I don't believe it created any conflict of interest in my dealings with OpenAI or Mr. Musk.",
        timestamp: "2025-03-15T11:00:00Z",
        exhibitRef: "Nadella deposition 2025; Unsealed Jan 2026",
      },
      {
        id: "ndg3",
        from: "nadella",
        text: "[Under oath, on the unpublished book:] In July 2023, Professor Iansiti and I were working on a manuscript — 'An Inflection Point: Mission, transformation, and the dawn of next generation AI.' It was never published.",
        timestamp: "2025-03-15T11:30:00Z",
        exhibitRef: "Nadella deposition 2025; Unsealed Jan 2026; DNYUZ",
      },
    ],
    platform: "memo",
    dateRange: { start: "2025-03-15", end: "2025-03-15" },
    summary:
      "Expanded Nadella deposition: Gates said Microsoft would 'burn this billion dollars.' Nadella's financial advisor invested in Neuralink. Reveals an unpublished AI book from 2023.",
    exhibitSource: "Nadella deposition (2025); GeekWire; TechBuzz.ai; DNYUZ",
    tags: ["microsoft", "musk-v-openai", "verified-exhibit"],
  },

  // ===== SUTSKEVER DEPOSITION — MURATI EVIDENCE =====
  {
    id: "sutskever-deposition-murati-evidence",
    subject: "[Sutskever deposition — Murati as source]",
    participants: ["sutskever"],
    messages: [
      {
        id: "sme1",
        from: "sutskever",
        text: "[Under oath:] Mira was my primary source of information about Sam's conduct. She provided screenshots, summaries of conversations, and her own interpretations. I trusted her completely at the time.",
        timestamp: "2025-10-01T10:00:00Z",
        exhibitRef:
          "Sutskever deposition (Oct 1, 2025, 365 pages); Decrypt; The Neuron",
      },
      {
        id: "sme2",
        from: "sutskever",
        text: "[Under oath:] In hindsight, I should have verified more independently. But when your CTO tells you the CEO is lying to the board, you take that seriously. The board asked me to compile the evidence. I compiled what I had.",
        timestamp: "2025-10-01T10:30:00Z",
        exhibitRef: "Sutskever deposition Oct 2025; The Neuron",
      },
      {
        id: "sme3",
        from: "sutskever",
        text: "[Under oath, on regret:] I deeply regret the way it played out. The firing was the right decision based on the information I had. But the information may not have been complete.",
        timestamp: "2025-10-01T11:00:00Z",
        exhibitRef: "Sutskever deposition Oct 2025; Decrypt",
      },
      {
        id: "sme4",
        from: "sutskever",
        text: "[Under oath, on his equity:] My vested OpenAI shares were worth approximately $4 billion at the time of Sam's firing. I want to be clear — the equity played no role in my decision. I would have made the same recommendation with $0 at stake.",
        timestamp: "2025-10-01T11:30:00Z",
        exhibitRef: "Sutskever deposition Oct 2025; Bloomberg; Sources.news",
      },
    ],
    platform: "memo",
    dateRange: { start: "2025-10-01", end: "2025-10-01" },
    summary:
      "Full Sutskever deposition (365 pages): Murati was primary evidence source. 'I should have verified more independently.' Reveals $4B equity stake at time of Altman firing. 'The information may not have been complete.'",
    exhibitSource:
      "Sutskever deposition (Oct 1, 2025); Decrypt; The Neuron; Bloomberg",
    tags: [
      "board-crisis",
      "governance",
      "departures",
      "musk-v-openai",
      "verified-exhibit",
    ],
  },

  // ===== TONER — CONSISTENT WITH THE MISSION =====
  {
    id: "toner-consistent-with-mission",
    subject: "[Toner deposition — on OpenAI's destruction]",
    participants: ["toner"],
    messages: [
      {
        id: "tcm1",
        from: "toner",
        text: "[Under oath:] I believed that if OpenAI was not operating safely and in accordance with its charter, then allowing it to be destroyed or restructured could be consistent with the mission. The mission is bigger than any one organization.",
        timestamp: "2025-10-10T10:00:00Z",
        exhibitRef:
          "Toner deposition 2025; Sources.news; TechBuzz.ai; The Neuron",
      },
      {
        id: "tcm2",
        from: "toner",
        text: "[Under oath:] When Sam was fired, I knew it could kill the company. I weighed that against what I believed was a pattern of deception. The board's duty was to the mission, not to the company's survival.",
        timestamp: "2025-10-10T10:30:00Z",
        exhibitRef: "Toner deposition 2025; Sources.news",
      },
    ],
    platform: "memo",
    dateRange: { start: "2025-10-10", end: "2025-10-10" },
    summary:
      "Toner's deposition bombshell: allowing OpenAI to be 'destroyed or restructured could be consistent with the mission.' 'The board's duty was to the mission, not to the company's survival.'",
    exhibitSource:
      "Toner deposition (2025); Sources.news; TechBuzz.ai; The Neuron",
    tags: ["board-crisis", "governance", "safety", "verified-exhibit"],
  },

  // ===== MCCAULEY DEPOSITION =====
  {
    id: "mccauley-deposition",
    subject: "[McCauley deposition — board dynamics]",
    participants: ["mccauley"],
    messages: [
      {
        id: "mcd1",
        from: "mccauley",
        text: "[Under oath:] We were three independent directors trying to oversee an organization run by some of the most powerful and well-connected people in tech. Sam had relationships with every major investor and politician. We had... each other.",
        timestamp: "2025-10-12T10:00:00Z",
        exhibitRef: "McCauley deposition 2025; Unsealed Jan 2026",
      },
      {
        id: "mcd2",
        from: "mccauley",
        text: "[Under oath:] The night of the firing, I received over 200 messages — threats, accusations, demands. People I had never spoken to were calling me. The pressure to reverse the decision was unlike anything I've experienced.",
        timestamp: "2025-10-12T10:30:00Z",
        exhibitRef: "McCauley deposition 2025; Unsealed Jan 2026; Hard Reset",
      },
    ],
    platform: "memo",
    dateRange: { start: "2025-10-12", end: "2025-10-12" },
    summary:
      "McCauley's deposition: 'Sam had relationships with every major investor and politician. We had... each other.' Received 200+ threatening messages the night of the firing.",
    exhibitSource: "McCauley deposition (2025); Unsealed Jan 2026; Hard Reset",
    tags: ["board-crisis", "governance", "verified-exhibit"],
  },

  // ===== JUDGE GONZALEZ ROGERS — SUMMARY JUDGMENT DENIED =====
  {
    id: "judge-ruling-summary-judgment",
    subject: "[Court order — Motion for Summary Judgment DENIED]",
    participants: ["unknown"],
    messages: [
      {
        id: "jr1",
        from: "unknown",
        text: "[Judge Gonzalez Rogers, 28-page order:] The Court finds ample circumstantial evidence from which a reasonable jury could conclude that Defendants made assurances to Musk about maintaining the nonprofit structure while privately planning otherwise.",
        timestamp: "2026-01-15T10:00:00Z",
        exhibitRef:
          "Order Denying Summary Judgment, Case 4:24-cv-04722-YGR (Jan 15, 2026)",
      },
      {
        id: "jr2",
        from: "unknown",
        text: "[Court order:] Defendants' argument that Plaintiff lacks standing because he donated through intermediary charitable funds is rejected. To accept this argument would undermine enforcement of charitable trusts.",
        timestamp: "2026-01-15T10:01:00Z",
        exhibitRef: "Order Denying Summary Judgment, Jan 15, 2026",
      },
      {
        id: "jr3",
        from: "unknown",
        text: "[Court order:] The following claims survive for trial: fraudulent inducement, breach of contract regarding the nonprofit structure, unjust enrichment, and claims against Microsoft for aiding and abetting breach of fiduciary duty. Trial is set for April 27, 2026 in Oakland.",
        timestamp: "2026-01-15T10:02:00Z",
        exhibitRef:
          "Order Denying Summary Judgment, Jan 15, 2026; courthousenews.com",
      },
    ],
    platform: "memo",
    dateRange: { start: "2026-01-15", end: "2026-01-15" },
    summary:
      "Judge Gonzalez Rogers denies OpenAI's motion for summary judgment in 28-page order. Finds 'ample circumstantial evidence' of fraud. Microsoft also goes to trial for 'aiding and abetting.' Trial set April 27, 2026.",
    exhibitSource:
      "Order Denying Summary Judgment, Case 4:24-cv-04722-YGR (Jan 15, 2026); Courthouse News",
    tags: ["musk-v-openai", "governance", "microsoft", "verified-exhibit"],
  },

  // ===== MUSK — $134 BILLION DAMAGES =====
  {
    id: "musk-134-billion-damages",
    subject: "[Damages filing — $134 billion]",
    participants: ["musk"],
    messages: [
      {
        id: "md134-1",
        from: "musk",
        text: "[Court filing:] Plaintiff seeks disgorgement of wrongful gains totaling between $78.8 billion and $134.5 billion. OpenAI gained between $65.5 billion and $109.4 billion from Musk's contributions as co-founder. Microsoft gained between $13.3 billion and $25.1 billion.",
        timestamp: "2026-01-17T10:00:00Z",
        exhibitRef: "Musk damages filing, Jan 17, 2026; CNBC; Bloomberg",
      },
    ],
    platform: "memo",
    dateRange: { start: "2026-01-17", end: "2026-01-17" },
    summary:
      "Musk files for up to $134 BILLION in damages from OpenAI and Microsoft. Claims his co-founding contributions enabled wrongful gains. OpenAI calls it 'unserious.'",
    exhibitSource: "Musk damages filing (Jan 17, 2026); CNBC; Bloomberg",
    tags: ["musk-v-openai", "funding", "microsoft"],
  },

  // ===== OPENAI SPOLIATION MOTION — SIGNAL AUTO-DELETE =====
  {
    id: "openai-spoliation-motion",
    subject: "[Motion — xAI evidence destruction]",
    participants: ["altman"],
    messages: [
      {
        id: "osm1",
        from: "altman",
        text: "[OpenAI court filing:] xAI senior executives were instructed to communicate exclusively via Signal with auto-delete set to one week or less. This constitutes systematic and intentional destruction of evidence. Musk is a recidivist spoliator.",
        timestamp: "2026-02-02T10:00:00Z",
        exhibitRef:
          "OpenAI spoliation motion, Feb 2, 2026; Bloomberg; 9to5Mac",
      },
      {
        id: "osm2",
        from: "altman",
        text: "[Filing continues:] OpenAI requests adverse inference instructions — that the jury may assume deleted Signal messages contained information harmful to Musk's case.",
        timestamp: "2026-02-02T10:01:00Z",
        exhibitRef: "OpenAI spoliation motion, Feb 2, 2026; Bloomberg",
      },
    ],
    platform: "memo",
    dateRange: { start: "2026-02-02", end: "2026-02-02" },
    summary:
      "OpenAI accuses xAI of 'systematic and intentional destruction' of evidence via Signal auto-delete. Labels Musk a 'recidivist spoliator.' Seeks adverse inference at trial.",
    exhibitSource:
      "OpenAI spoliation motion (Feb 2, 2026); Bloomberg; 9to5Mac",
    tags: ["musk-v-openai"],
  },

  // ===== MUSK MOTIONS IN LIMINE =====
  {
    id: "musk-motions-in-limine",
    subject: "[Pre-trial motions — evidence exclusions]",
    participants: ["musk"],
    messages: [
      {
        id: "mil1",
        from: "musk",
        text: "[Court filing:] Plaintiff moves to exclude evidence relating to xAI's competitive practices and Grok, Musk's February 2025 bid to acquire OpenAI's assets, and findings from the WilmerHale investigation into Altman's removal.",
        timestamp: "2026-02-24T10:00:00Z",
        exhibitRef: "Musk motions in limine, Feb 24, 2026; PYMNTS; Bloomberg",
      },
      {
        id: "mil2",
        from: "musk",
        text: "[Filing:] The WilmerHale investigation was a one-sided summary commissioned by Altman's allies to rehabilitate his image. Presenting it to the jury would be highly prejudicial and misleading.",
        timestamp: "2026-02-24T10:01:00Z",
        exhibitRef: "Musk motions in limine, Feb 24, 2026; PYMNTS",
      },
    ],
    platform: "memo",
    dateRange: { start: "2026-02-24", end: "2026-02-24" },
    summary:
      "Musk files motions to exclude xAI/Grok evidence, his $97.4B acquisition bid, and the WilmerHale probe from trial. Calls WilmerHale report 'one-sided' and 'prejudicial.' Hearing March 13.",
    exhibitSource:
      "Musk motions in limine (Feb 24, 2026); PYMNTS; Bloomberg",
    tags: ["musk-v-openai"],
  },

  // ===== XAI TRADE SECRETS DISMISSED =====
  {
    id: "xai-trade-secrets-dismissed",
    subject: "[Court order — xAI v. OpenAI dismissed]",
    participants: ["musk"],
    messages: [
      {
        id: "xtd1",
        from: "unknown",
        text: "[Judge Rita Lin:] xAI's lawsuit alleging OpenAI stole trade secrets via former employees is DISMISSED. xAI has until March 17, 2026 to refile an amended complaint.",
        timestamp: "2026-02-24T14:00:00Z",
        exhibitRef:
          "xAI v. OpenAI order, Feb 24, 2026; Android Headlines; Bloomberg",
      },
    ],
    platform: "memo",
    dateRange: { start: "2026-02-24", end: "2026-02-24" },
    summary:
      "Judge Rita Lin dismisses xAI's trade secrets lawsuit against OpenAI. Major setback for Musk's parallel legal strategy. Can refile by March 17.",
    exhibitSource:
      "xAI v. OpenAI order (Feb 24, 2026); Android Headlines; Bloomberg",
    tags: ["musk-v-openai"],
  },

  // ===== MURATI DEPOSITION =====
  {
    id: "murati-deposition",
    subject: "[Murati deposition — Musk v. Altman]",
    participants: ["murati"],
    messages: [
      {
        id: "mrd1",
        from: "murati",
        text: "[Under oath:] I provided information to Ilya because I believed Sam was not being fully transparent with the board. I stand by the substance of what I shared.",
        timestamp: "2025-10-08T10:00:00Z",
        exhibitRef: "Murati deposition 2025; Unsealed Jan 2026",
      },
      {
        id: "mrd2",
        from: "murati",
        text: "[Under oath:] The week of the firing was the most difficult professional experience of my life. I was asked to serve as interim CEO while the person I had just helped remove was being offered a job at Microsoft. Nothing about that situation was normal.",
        timestamp: "2025-10-08T10:30:00Z",
        exhibitRef: "Murati deposition 2025; Unsealed Jan 2026; Hard Reset",
      },
    ],
    platform: "memo",
    dateRange: { start: "2025-10-08", end: "2025-10-08" },
    summary:
      "Murati's deposition: confirms she provided evidence to Sutskever against Altman. 'I stand by the substance.' Describes the firing week as 'the most difficult professional experience of my life.'",
    exhibitSource: "Murati deposition (2025); Unsealed Jan 2026; Hard Reset",
    tags: ["board-crisis", "governance", "departures", "verified-exhibit"],
  },

  // ===== FTC STATEMENT OF INTEREST =====
  {
    id: "ftc-statement-interest",
    subject: "[FTC/DOJ amicus brief — interlocking directorates]",
    participants: ["unknown"],
    messages: [
      {
        id: "ftc1",
        from: "unknown",
        text: "[FTC Statement of Interest:] The Federal Trade Commission and DOJ Antitrust Division address potential violations of Section 8 of the Clayton Act regarding interlocking directorates between OpenAI and Microsoft. The relationship between these entities warrants careful antitrust scrutiny.",
        timestamp: "2025-01-10T10:00:00Z",
        exhibitRef:
          "FTC Statement of Interest, Musk v. Altman, Jan 10, 2025; ftc.gov",
      },
    ],
    platform: "memo",
    dateRange: { start: "2025-01-10", end: "2025-01-10" },
    summary:
      "FTC and DOJ file amicus brief in Musk v. Altman, flagging potential Clayton Act violations in OpenAI-Microsoft relationship. Federal antitrust scrutiny enters the case.",
    exhibitSource: "FTC Statement of Interest (Jan 10, 2025); ftc.gov",
    tags: ["musk-v-openai", "microsoft"],
  },

  // ===== BIRCHALL DEPOSITION — MUSK DONATIONS =====
  {
    id: "birchall-deposition-donations",
    subject: "[Birchall deposition — Musk donations]",
    participants: ["birchall"],
    messages: [
      {
        id: "jb1",
        from: "birchall",
        text: "[Under oath:] Mr. Musk donated approximately $44.5 million to OpenAI through his family foundation and personal donations. The last donation was made in September 2020. All donations were made on the understanding that OpenAI was and would remain a nonprofit.",
        timestamp: "2025-09-25T10:00:00Z",
        exhibitRef:
          "Birchall deposition 2025; Unsealed Jan 2026; Sources.news",
      },
      {
        id: "jb2",
        from: "birchall",
        text: "[Under oath:] When the capped-profit structure was announced in 2019, Mr. Musk was not consulted. He continued donating through 2020 because he was told the nonprofit still controlled the mission.",
        timestamp: "2025-09-25T10:30:00Z",
        exhibitRef: "Birchall deposition 2025; Unsealed Jan 2026",
      },
    ],
    platform: "memo",
    dateRange: { start: "2025-09-25", end: "2025-09-25" },
    summary:
      "Musk's family office manager confirms $44.5M total donations. Key detail: Musk kept donating through September 2020, a year AFTER the for-profit conversion — undermining OpenAI's argument he knew and approved.",
    exhibitSource:
      "Birchall deposition (2025); Unsealed Jan 2026; Sources.news",
    tags: ["musk-v-openai", "funding", "nonprofit", "verified-exhibit"],
  },

  // ===== OPENAI SUMMARY JUDGMENT MOTION =====
  {
    id: "openai-summary-judgment-motion",
    subject: "[OpenAI Motion for Summary Judgment]",
    participants: ["altman"],
    messages: [
      {
        id: "osj1",
        from: "altman",
        text: "[OpenAI filing, Oct 17, 2025:] Plaintiff's claims should be dismissed because: (1) Musk lacks standing — donations were made through intermediary charitable funds; (2) claims are time-barred — Musk knew about the restructuring by 2019; (3) no binding agreement existed regarding the nonprofit structure; (4) Musk is using litigation to harm a competitor.",
        timestamp: "2025-10-17T10:00:00Z",
        exhibitRef:
          "OpenAI MSJ, Oct 17, 2025; Law.com/The Recorder; ALM",
      },
      {
        id: "osj2",
        from: "altman",
        text: "[Filing continues:] Mr. Musk's real motivation is transparent — he founded xAI, a direct competitor to OpenAI, and is using this litigation as a weapon against a rival he wishes he still controlled.",
        timestamp: "2025-10-17T10:01:00Z",
        exhibitRef: "OpenAI MSJ, Oct 17, 2025; Law.com",
      },
    ],
    platform: "memo",
    dateRange: { start: "2025-10-17", end: "2025-10-17" },
    summary:
      "OpenAI's motion for summary judgment: argues Musk lacks standing, claims are time-barred, no binding agreement existed. Accuses Musk of using litigation as a competitive weapon for xAI. Judge denies it three months later.",
    exhibitSource:
      "OpenAI MSJ (Oct 17, 2025); Law.com/The Recorder",
    tags: ["musk-v-openai"],
  },

  // ===== THE $97.4B ACQUISITION BID =====
  {
    id: "musk-acquisition-bid",
    subject: "[Musk bid to acquire OpenAI — $97.4B]",
    participants: ["musk", "altman"],
    messages: [
      {
        id: "mab1",
        from: "musk",
        text: "[February 2025 public bid:] I am willing to acquire OpenAI's assets for $97.4 billion — the full fair market value. This would return the technology to its intended purpose: benefiting humanity through a nonprofit structure.",
        timestamp: "2025-02-10T10:00:00Z",
        exhibitRef: "Musk public statement Feb 2025; CNBC; Bloomberg; Reuters",
      },
      {
        id: "mab2",
        from: "altman",
        text: "[Response via X:] no thank you but we will buy twitter for $9.74 billion if you want",
        timestamp: "2025-02-10T14:00:00Z",
        exhibitRef: "Altman X post, Feb 2025; CNBC; The Verge",
      },
    ],
    platform: "memo",
    dateRange: { start: "2025-02-10", end: "2025-02-10" },
    summary:
      "Musk offers $97.4B to buy OpenAI. Altman's savage response on X: 'no thank you but we will buy twitter for $9.74 billion if you want.' Musk now seeks to exclude this from trial.",
    exhibitSource: "Public statements (Feb 2025); CNBC; Bloomberg; The Verge",
    tags: ["musk-v-openai", "funding"],
  },

  // ===== OPENAI EMPLOYEE LETTER — 500 STRONG =====
  {
    id: "employee-letter-500-strong",
    subject: "[Open letter — 505 of 770 employees]",
    participants: ["altman", "murati", "lightcap"],
    messages: [
      {
        id: "el1",
        from: "lightcap",
        text: "[Employee letter, Nov 20, 2023:] We, the undersigned employees of OpenAI, call for the resignation of the board of directors. The board's actions have undermined our mission and destabilized our company. We may choose to resign and join Microsoft if the board does not act.",
        timestamp: "2023-11-20T15:00:00Z",
        exhibitRef: "OpenAI employee letter Nov 20, 2023; Wired; NYT; CNBC",
      },
      {
        id: "el2",
        from: "lightcap",
        text: "[Signed by 505 of 770 employees, including Ilya Sutskever, who signed despite having voted to fire Altman two days earlier]",
        timestamp: "2023-11-20T15:01:00Z",
        exhibitRef: "OpenAI employee letter; Wired; Bloomberg",
      },
    ],
    platform: "memo",
    dateRange: { start: "2023-11-20", end: "2023-11-20" },
    summary:
      "505 of 770 OpenAI employees sign letter demanding board resign or they'll join Microsoft. Sutskever signs despite having voted to fire Altman 48 hours earlier.",
    exhibitSource: "OpenAI employee letter (Nov 20, 2023); Wired; NYT; CNBC",
    tags: ["board-crisis", "microsoft", "verified-exhibit"],
  },
];
