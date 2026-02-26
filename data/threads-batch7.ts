import { Thread } from "@/types";

// BATCH 7: GeekWire "Microsoft-OpenAI Files" (200+ documents), LessWrong archives, interviews, copyright cases
export const threadsBatch7: Thread[] = [
  // ===== KEVIN SCOTT — "DONORS AWARE OF THESE PLANS?" (MAR 2018) =====
  {
    id: "kevin-scott-donors-aware",
    subject: "Re: OpenAI commercial plans",
    participants: ["kscott", "nadella"],
    messages: [
      {
        id: "ksda1",
        from: "kscott",
        text: "I wonder if the big OpenAI donors are aware of these plans? I cannot imagine that they funded an open effort to concentrate ML talent so that they could then go build a closed, for profit thing on its back.",
        timestamp: "2018-03-15T10:00:00Z",
        exhibitRef: "GeekWire 'Microsoft-OpenAI Files' (Jan 2026); court exhibit",
      },
      {
        id: "ksda2",
        from: "kscott",
        text: "They are building credibility in the AI community very fast. All things equal, I'd love to have them be a Microsoft and Azure net promoter.",
        timestamp: "2018-03-15T10:30:00Z",
        exhibitRef: "GeekWire 'Microsoft-OpenAI Files' (Jan 2026); court exhibit",
      },
    ],
    platform: "email",
    dateRange: { start: "2018-03-15", end: "2018-03-15" },
    summary:
      "Kevin Scott spots the for-profit pivot early: 'I cannot imagine that they funded an open effort to concentrate ML talent so that they could then go build a closed, for profit thing on its back.' He's already thinking about how Microsoft can benefit.",
    exhibitSource: "GeekWire 'Microsoft-OpenAI Files' (Jan 2026); Musk v. Altman court exhibit",
    tags: ["musk-v-openai", "microsoft", "verified-exhibit"],
  },

  // ===== KEVIN SCOTT "THOUGHTS ON OPENAI" — FULLER TEXT (JUN 2019) =====
  {
    id: "kevin-scott-thoughts-full",
    subject: "Thoughts on OpenAI",
    participants: ["kscott", "nadella", "gates"],
    messages: [
      {
        id: "kstf1",
        from: "kscott",
        text: "[Four-page email] I got very, very worried when I dug in to try to understand where all of the capability gaps were between Google and us for model training. We are multiple years behind the competition in terms of machine learning scale. It took us approximately six months to get the BERT language model trained because our infrastructure was inadequate.",
        timestamp: "2019-06-12T17:00:00Z",
        exhibitRef: "GeekWire 'Microsoft-OpenAI Files' (Jan 2026); Fortune (May 2024); court exhibit",
      },
    ],
    platform: "email",
    dateRange: { start: "2019-06-12", end: "2019-06-12" },
    summary:
      "The full 'Thoughts on OpenAI' email that launched the $1B investment. Kevin Scott confesses Microsoft is 'multiple years behind' Google — it took them 6 months just to train BERT. This four-page email to Nadella and Gates made the case for betting everything on OpenAI.",
    exhibitSource: "GeekWire 'Microsoft-OpenAI Files' (Jan 2026); Fortune (May 2024); court exhibit",
    tags: ["musk-v-openai", "microsoft", "verified-exhibit"],
  },

  // ===== BILL GATES — "BURN THIS BILLION DOLLARS" =====
  {
    id: "gates-burn-billion",
    subject: "Re: OpenAI investment",
    participants: ["gates", "nadella"],
    messages: [
      {
        id: "gbb1",
        from: "gates",
        text: "Yeah, you're going to burn this billion dollars.",
        timestamp: "2019-07-01T10:00:00Z",
        exhibitRef: "GeekWire 'Microsoft-OpenAI Files' (Jan 2026); Nadella deposition; court exhibit",
      },
    ],
    platform: "email",
    dateRange: { start: "2019-07-01", end: "2019-07-01" },
    summary:
      "Bill Gates' reaction to the proposed $1B OpenAI investment: 'Yeah, you're going to burn this billion dollars.' Gates wanted Microsoft to build AI in-house. Nadella ignored him. The $1B became $13B.",
    exhibitSource: "GeekWire 'Microsoft-OpenAI Files' (Jan 2026); Nadella deposition testimony",
    tags: ["musk-v-openai", "microsoft", "verified-exhibit"],
  },

  // ===== AMY HOOD — "NOT TERRIBLY ALTRUISTIC" (JUL 2019) =====
  {
    id: "hood-not-terribly-altruistic",
    subject: "Re: OpenAI capped profit structure",
    participants: ["hood", "nadella", "kscott"],
    messages: [
      {
        id: "hna1",
        from: "hood",
        text: "Given the cap is actually larger than 90% of public companies, I am not sure it is terribly constraining nor terribly altruistic but that is Sam's call on his cap.",
        timestamp: "2019-07-14T14:00:00Z",
        exhibitRef: "GeekWire 'Microsoft-OpenAI Files' (Jan 2026); court exhibit",
      },
    ],
    platform: "email",
    dateRange: { start: "2019-07-14", end: "2019-07-14" },
    summary:
      "Microsoft CFO Amy Hood's devastating one-liner about OpenAI's 'nonprofit' structure: 'not terribly constraining nor terribly altruistic.' The profit caps were so high they were almost meaningless as a limit on commercialization.",
    exhibitSource: "GeekWire 'Microsoft-OpenAI Files' (Jan 2026); Musk v. Altman court exhibit",
    tags: ["musk-v-openai", "microsoft", "for-profit-transition", "verified-exhibit"],
  },

  // ===== ALTMAN — "MAKE YOU ALL A BUNCH OF MONEY" (FEB 2021) =====
  {
    id: "altman-make-money-fast",
    subject: "Re: New investment round",
    participants: ["altman", "nadella", "kscott"],
    messages: [
      {
        id: "amm1",
        from: "altman",
        text: "We want to do everything we can to make you all commercially successful and are happy to move significantly from the term sheet.",
        timestamp: "2021-02-15T10:00:00Z",
        exhibitRef: "GeekWire 'Microsoft-OpenAI Files' (Jan 2026); court exhibit",
      },
      {
        id: "amm2",
        from: "altman",
        text: "I'd prefer to make you all a bunch of money as quickly as we can and for you to be enthusiastic about making this additional investment soon.",
        timestamp: "2021-02-15T10:30:00Z",
        exhibitRef: "GeekWire 'Microsoft-OpenAI Files' (Jan 2026); court exhibit",
      },
    ],
    platform: "email",
    dateRange: { start: "2021-02-15", end: "2021-02-15" },
    summary:
      "Altman pitches Microsoft on doubling down: 'I'd prefer to make you all a bunch of money as quickly as we can.' From the man running the nonprofit AI safety lab. This led to Microsoft's $2B follow-on investment.",
    exhibitSource: "GeekWire 'Microsoft-OpenAI Files' (Jan 2026); Musk v. Altman court exhibit",
    tags: ["musk-v-openai", "microsoft", "for-profit-transition", "verified-exhibit"],
  },

  // ===== NADELLA-ALTMAN CHATGPT LAUNCH TEXTS (JAN 2023) =====
  {
    id: "nadella-altman-chatgpt-capacity",
    subject: "[Text messages — ChatGPT launch]",
    participants: ["nadella", "altman"],
    messages: [
      {
        id: "nac1",
        from: "nadella",
        text: "When do you plan to activate a paid subscription?",
        timestamp: "2023-01-10T14:00:00Z",
        exhibitRef: "GeekWire 'Microsoft-OpenAI Files' (Jan 2026); court exhibit",
      },
      {
        id: "nac2",
        from: "altman",
        text: "Hoping to be ready by end of jan, but we can be flexible beyond that. The only real reason for rushing it is we are just so out of capacity and delivering a bad user experience.",
        timestamp: "2023-01-10T15:00:00Z",
        exhibitRef: "GeekWire 'Microsoft-OpenAI Files' (Jan 2026); court exhibit",
      },
      {
        id: "nac3",
        from: "nadella",
        text: "Btw... how many subs have you guys added to ChatGPT?",
        timestamp: "2023-01-24T09:00:00Z",
        exhibitRef: "GeekWire 'Microsoft-OpenAI Files' (Jan 2026); court exhibit",
      },
      {
        id: "nac4",
        from: "altman",
        text: "We have about 6 million daily active users, which is our capacity limit. We've had to turn away about 50 million people who tried to sign up.",
        timestamp: "2023-01-24T09:30:00Z",
        exhibitRef: "GeekWire 'Microsoft-OpenAI Files' (Jan 2026); court exhibit",
      },
    ],
    platform: "sms",
    dateRange: { start: "2023-01-10", end: "2023-01-24" },
    summary:
      "The texts that reveal how big ChatGPT actually was at launch. Altman tells Nadella: 6 million daily users at capacity, 50 million turned away. 'Just so out of capacity and delivering a bad user experience.' Three days later, ChatGPT Plus launched.",
    exhibitSource: "GeekWire 'Microsoft-OpenAI Files' (Jan 2026); Musk v. Altman court exhibit",
    tags: ["musk-v-openai", "microsoft", "chatgpt", "verified-exhibit"],
  },

  // ===== BRAD SMITH — MICROSOFT RAI SUBSIDIARY (NOV 2023) =====
  {
    id: "brad-smith-rai-subsidiary",
    subject: "Re: OpenAI contingency",
    participants: ["bsmith", "nadella"],
    messages: [
      {
        id: "bsr1",
        from: "bsmith",
        text: "We can then capitalize the subsidiary and take all the other steps needed to operationalize this and support Sam in whatever way is needed.",
        timestamp: "2023-11-21T10:00:00Z",
        exhibitRef: "GeekWire 'Microsoft-OpenAI Files' (Jan 2026); court exhibit",
      },
      {
        id: "bsr2",
        from: "bsmith",
        text: "[Microsoft created a subsidiary called 'Microsoft RAI Inc.' (Responsible Artificial Intelligence) ready to absorb the entire OpenAI team. OpenAI COO Brad Lightcap estimated the cost: approximately $25 billion to match employee compensation and unvested equity, or $29B including Sutskever's vested units.]",
        timestamp: "2023-11-21T11:00:00Z",
        exhibitRef: "GeekWire 'Microsoft-OpenAI Files' (Jan 2026); court exhibit",
      },
    ],
    platform: "sms",
    dateRange: { start: "2023-11-21", end: "2023-11-21" },
    summary:
      "Microsoft's nuclear option during the board crisis: they created 'Microsoft RAI Inc.' and were ready to spend $25-29 BILLION to absorb the entire OpenAI team. Brad Smith: 'capitalize the subsidiary and support Sam in whatever way is needed.'",
    exhibitSource: "GeekWire 'Microsoft-OpenAI Files' (Jan 2026); Musk v. Altman court exhibit",
    tags: ["board-crisis-2023", "microsoft", "verified-exhibit"],
  },

  // ===== BOARD VETTING TEXT THREAD — "STRONG STRONG NO" (NOV 2023) =====
  {
    id: "board-vetting-strong-no",
    subject: "[Group text — board candidate vetting]",
    participants: ["altman", "nadella", "bsmith", "kscott"],
    messages: [
      {
        id: "bvs1",
        from: "altman",
        text: "I'm thinking Bret Taylor, Larry Summers, and Adam D'Angelo for the new board.",
        timestamp: "2023-11-22T14:00:00Z",
        exhibitRef: "GeekWire 'Microsoft-OpenAI Files' (Jan 2026); court exhibit",
      },
      {
        id: "bvs2",
        from: "kscott",
        text: "[On one unnamed candidate:] Strong no.",
        timestamp: "2023-11-22T14:15:00Z",
        exhibitRef: "GeekWire 'Microsoft-OpenAI Files' (Jan 2026); court exhibit",
      },
      {
        id: "bvs3",
        from: "kscott",
        text: "Strong strong no.",
        timestamp: "2023-11-22T14:20:00Z",
        exhibitRef: "GeekWire 'Microsoft-OpenAI Files' (Jan 2026); court exhibit",
      },
      {
        id: "bvs4",
        from: "bsmith",
        text: "[On Larry Summers:] Your future would be decided by Larry. Too risky.",
        timestamp: "2023-11-22T15:00:00Z",
        exhibitRef: "GeekWire 'Microsoft-OpenAI Files' (Jan 2026); court exhibit",
      },
    ],
    platform: "sms",
    dateRange: { start: "2023-11-22", end: "2023-11-22" },
    summary:
      "Microsoft executives vetting OpenAI's new board picks via group text — a 'shadow veto' over the nonprofit's governance. Kevin Scott's 'Strong strong no' kills one candidate. Brad Smith warns Altman about Summers: 'Your future would be decided by Larry. Too risky.'",
    exhibitSource: "GeekWire 'Microsoft-OpenAI Files' (Jan 2026); Musk v. Altman court exhibit",
    tags: ["board-crisis-2023", "microsoft", "verified-exhibit"],
  },

  // ===== ALTMAN $50M AZURE DEAL TO MUSK (AUG 2016) =====
  {
    id: "altman-50m-compute-deal",
    subject: "Re: Microsoft compute deal",
    participants: ["altman", "musk"],
    messages: [
      {
        id: "a5c1",
        from: "altman",
        text: "I have negotiated a $50 million compute donation from them over the next 3 years!",
        timestamp: "2016-08-28T16:00:00Z",
        exhibitRef: "GeekWire 'Microsoft-OpenAI Files' (Jan 2026); court exhibit",
      },
    ],
    platform: "email",
    dateRange: { start: "2016-08-28", end: "2016-08-28" },
    summary:
      "Altman excitedly tells Musk he landed a $50M compute deal from Microsoft. Musk's reaction (in a separate thread): 'This actually made me feel nauseous.' The deal that planted the seed for the $13B partnership.",
    exhibitSource: "GeekWire 'Microsoft-OpenAI Files' (Jan 2026); Musk v. Altman court exhibit",
    tags: ["musk-v-openai", "microsoft", "verified-exhibit"],
  },

  // ===== ALTMAN — "FUCKING DEPRESSED AND TIRED" (BLOOMBERG FEB 2025) =====
  {
    id: "altman-bloomberg-raw-interview",
    subject: "[Bloomberg interview — post-firing]",
    participants: ["altman"],
    messages: [
      {
        id: "abr1",
        from: "altman",
        text: "All those people that I feel like really fucked me and fucked the company were gone, and now I had to clean up their mess. And it felt so unfair. It was just a crazy thing to have to go through and then have no time to recover, because the house was on fire.",
        timestamp: "2025-02-10T10:00:00Z",
        exhibitRef: "Bloomberg Businessweek (Feb 2025)",
      },
      {
        id: "abr2",
        from: "altman",
        text: "[On the weeks after returning as CEO:] Alone at night just, like, fucking depressed and tired.",
        timestamp: "2025-02-10T10:15:00Z",
        exhibitRef: "Bloomberg Businessweek (Feb 2025)",
      },
      {
        id: "abr3",
        from: "altman",
        text: "The one thing I'm more aware of is, I had had issues with various board members on what I viewed as conflicts or otherwise problematic behavior, and they were not happy with the way that I tried to get them off the board. Lesson learned on that.",
        timestamp: "2025-02-10T10:30:00Z",
        exhibitRef: "Bloomberg Businessweek (Feb 2025)",
      },
    ],
    platform: "memo",
    dateRange: { start: "2025-02-10", end: "2025-02-10" },
    summary:
      "The most emotionally raw Altman interview on record. On the aftermath of his firing: 'Alone at night just, like, fucking depressed and tired.' On the board: 'All those people that I feel like really fucked me and fucked the company were gone, and now I had to clean up their mess.'",
    exhibitSource: "Bloomberg Businessweek long-form profile (February 2025)",
    tags: ["board-crisis-2023", "personal"],
  },

  // ===== ALTMAN — LEX FRIDMAN: "PAINFUL, SHAMEFUL, UPSETTING" =====
  {
    id: "altman-lex-fridman-firing",
    subject: "[Lex Fridman interview — the firing]",
    participants: ["altman"],
    messages: [
      {
        id: "alf1",
        from: "altman",
        text: "Definitely the most painful professional experience of my life, and chaotic and shameful and upsetting.",
        timestamp: "2024-03-18T10:00:00Z",
        exhibitRef: "Lex Fridman Podcast #419 (Mar 2024)",
      },
      {
        id: "alf2",
        from: "altman",
        text: "There was this fugue state for the month after, maybe 45 days after, that I was just drifting through the days. I was so out of it. I was feeling so down. I just wanted to crawl into a cave and recover for a while.",
        timestamp: "2024-03-18T10:15:00Z",
        exhibitRef: "Lex Fridman Podcast #419 (Mar 2024)",
      },
      {
        id: "alf3",
        from: "altman",
        text: "I was so caught off guard that it has definitely changed how I think about default trust. I'm like an extremely trusting person... this was so shocking to me.",
        timestamp: "2024-03-18T10:30:00Z",
        exhibitRef: "Lex Fridman Podcast #419 (Mar 2024)",
      },
    ],
    platform: "memo",
    dateRange: { start: "2024-03-18", end: "2024-03-18" },
    summary:
      "Altman describes a 45-day 'fugue state' after the firing. 'Chaotic and shameful and upsetting.' Says it fundamentally changed how he thinks about trust — 'I'm like an extremely trusting person... this was so shocking to me.'",
    exhibitSource: "Lex Fridman Podcast #419 (March 2024); full transcript",
    tags: ["board-crisis-2023", "personal"],
  },

  // ===== ALTMAN ON MUSK — "INSECURITY" (FEB 2025 PARIS) =====
  {
    id: "altman-musk-insecurity",
    subject: "[Bloomberg TV — Paris AI Summit]",
    participants: ["altman"],
    messages: [
      {
        id: "ami1",
        from: "altman",
        text: "Probably his whole life is from a position of insecurity. I feel for the guy. I don't think he's like a happy person.",
        timestamp: "2025-02-11T14:00:00Z",
        exhibitRef: "Bloomberg TV at Paris AI Summit (Feb 2025); CNN",
      },
    ],
    platform: "memo",
    dateRange: { start: "2025-02-11", end: "2025-02-11" },
    summary:
      "Altman's most cutting public statement about Musk, delivered at the Paris AI Summit after Musk's $97B hostile bid: 'Probably his whole life is from a position of insecurity. I feel for the guy. I don't think he's like a happy person.'",
    exhibitSource: "Bloomberg TV at Paris AI Summit (Feb 2025); CNN",
    tags: ["musk-v-openai", "personal"],
  },

  // ===== ALTMAN ON MUSK — LEX FRIDMAN =====
  {
    id: "altman-musk-unbecoming",
    subject: "[Lex Fridman — on Elon]",
    participants: ["altman"],
    messages: [
      {
        id: "amu1",
        from: "altman",
        text: "I think this whole thing is unbecoming of a builder... it makes me extra sad. I missed the old Elon.",
        timestamp: "2024-03-18T11:00:00Z",
        exhibitRef: "Lex Fridman Podcast #419 (Mar 2024)",
      },
      {
        id: "amu2",
        from: "altman",
        text: "And the number of messages I got being like, 'That exactly encapsulates how I feel.'",
        timestamp: "2024-03-18T11:15:00Z",
        exhibitRef: "Lex Fridman Podcast #419 (Mar 2024)",
      },
    ],
    platform: "memo",
    dateRange: { start: "2024-03-18", end: "2024-03-18" },
    summary:
      "Altman on Musk: 'I missed the old Elon.' Says the whole lawsuit is 'unbecoming of a builder' and claims people flooded his inbox agreeing.",
    exhibitSource: "Lex Fridman Podcast #419 (March 2024)",
    tags: ["musk-v-openai", "personal"],
  },

  // ===== SUTSKEVER DEPOSITION — "PATTERN OF LYING" (OCT 2025) =====
  {
    id: "sutskever-deposition-pattern-lying",
    subject: "[Deposition testimony — 10 hours]",
    participants: ["sutskever"],
    messages: [
      {
        id: "sdp1",
        from: "sutskever",
        text: "[From 52-page memo to the board:] Sam exhibits a consistent pattern of lying, undermining his execs, and pitting his execs against one another.",
        timestamp: "2025-10-15T10:00:00Z",
        exhibitRef: "Sutskever deposition (Oct 2025); Decrypt; court filing",
      },
      {
        id: "sdp2",
        from: "sutskever",
        text: "[On how long he'd considered removing Altman:] At least a year.",
        timestamp: "2025-10-15T10:30:00Z",
        exhibitRef: "Sutskever deposition (Oct 2025); Decrypt; court filing",
      },
      {
        id: "sdp3",
        from: "sutskever",
        text: "[On what he was waiting for:] That the majority of the board is not obviously friendly with Sam.",
        timestamp: "2025-10-15T11:00:00Z",
        exhibitRef: "Sutskever deposition (Oct 2025); Decrypt; court filing",
      },
      {
        id: "sdp4",
        from: "sutskever",
        text: "[On why he didn't send the memo to Altman:] Because I felt that, had he become aware of these discussions, he would just find a way to make them disappear.",
        timestamp: "2025-10-15T11:30:00Z",
        exhibitRef: "Sutskever deposition (Oct 2025); Decrypt; court filing",
      },
      {
        id: "sdp5",
        from: "sutskever",
        text: "[On the employee revolt:] I had not expected them to cheer, but I had not expected them to feel strongly either way.",
        timestamp: "2025-10-15T12:00:00Z",
        exhibitRef: "Sutskever deposition (Oct 2025); Decrypt; court filing",
      },
      {
        id: "sdp6",
        from: "sutskever",
        text: "One thing I can say is that the process was rushed. I think it was rushed because the board was inexperienced.",
        timestamp: "2025-10-15T12:30:00Z",
        exhibitRef: "Sutskever deposition (Oct 2025); Decrypt; court filing",
      },
    ],
    platform: "memo",
    dateRange: { start: "2025-10-15", end: "2025-10-15" },
    summary:
      "10 hours of deposition testimony. Sutskever's 52-page memo accused Altman of 'a consistent pattern of lying.' He waited 'at least a year' to act, watching for a board 'not obviously friendly with Sam.' He never warned Altman: 'he would just find a way to make them disappear.'",
    exhibitSource: "Sutskever 10-hour deposition (Oct 2025); Decrypt; Musk v. Altman court filing",
    tags: ["musk-v-openai", "board-crisis-2023", "verified-exhibit"],
  },

  // ===== TONER-MCCAULEY — "PSYCHOLOGICAL ABUSE" =====
  {
    id: "toner-mccauley-psychological-abuse",
    subject: "[Op-ed in The Economist]",
    participants: ["toner", "mccauley"],
    messages: [
      {
        id: "tmp1",
        from: "toner",
        text: "[Op-ed] Executives shared with the board that Altman cultivated a toxic culture of lying and engaged in behaviour that can be characterised as psychological abuse.",
        timestamp: "2024-05-28T10:00:00Z",
        exhibitRef: "The Economist op-ed (2024); Quartz",
      },
      {
        id: "tmp2",
        from: "mccauley",
        text: "[From reporting:] Mira Murati reportedly told board members that Altman would tell people what they wanted to hear to charm them, and if they did not cooperate, Altman would seek to undermine their credibility.",
        timestamp: "2024-05-28T10:30:00Z",
        exhibitRef: "The Economist op-ed (2024); Quartz; reporting",
      },
    ],
    platform: "memo",
    dateRange: { start: "2024-05-28", end: "2024-05-28" },
    summary:
      "The board members who fired Altman break their silence. They allege 'a toxic culture of lying' and 'psychological abuse.' Murati reportedly told them Altman would 'tell people what they wanted to hear to charm them.'",
    exhibitSource: "The Economist op-ed (2024); Quartz; public reporting",
    tags: ["board-crisis-2023"],
  },

  // ===== ALTMAN — FATHERHOOD & ISOLATION (FORTUNE FEB 2026) =====
  {
    id: "altman-fatherhood-isolation",
    subject: "[Fortune interview — fatherhood]",
    participants: ["altman"],
    messages: [
      {
        id: "afi1",
        from: "altman",
        text: "It has been my favorite thing ever in life by far. I thought it was going to be great, and it's much better than I thought it was going to be. Significantly underhyped.",
        timestamp: "2026-02-05T10:00:00Z",
        exhibitRef: "Fortune (Feb 2026)",
      },
      {
        id: "afi2",
        from: "altman",
        text: "Now it has all fallen to crap. I've just accepted that life is going to be chaotic for a few years.",
        timestamp: "2026-02-05T10:15:00Z",
        exhibitRef: "Fortune (Feb 2026)",
      },
      {
        id: "afi3",
        from: "altman",
        text: "I end up living in a weirdly isolated world. I fight that every inch. The more you let the world build a bubble around you, the more insane you go.",
        timestamp: "2026-02-05T10:30:00Z",
        exhibitRef: "Fortune (Feb 2026)",
      },
      {
        id: "afi4",
        from: "altman",
        text: "He's just going to grow up never knowing that there was a world... where every computer wasn't smarter than him.",
        timestamp: "2026-02-05T10:45:00Z",
        exhibitRef: "Fortune (Feb 2026)",
      },
    ],
    platform: "memo",
    dateRange: { start: "2026-02-05", end: "2026-02-05" },
    summary:
      "The most personal Altman interview. On fatherhood: 'my favorite thing ever in life by far.' On isolation: 'I end up living in a weirdly isolated world. I fight that every inch.' On his son: 'He's just going to grow up never knowing a world where every computer wasn't smarter than him.'",
    exhibitSource: "Fortune (February 2026)",
    tags: ["personal"],
  },

  // ===== ALTMAN — "FELT USELESS AND SAD" USING AI (FEB 2026) =====
  {
    id: "altman-felt-useless-sad",
    subject: "[X post / Fortune]",
    participants: ["altman"],
    messages: [
      {
        id: "afu1",
        from: "altman",
        text: "I felt a little useless, and it was sad. I am sure we will figure out much better and more interesting ways to spend our time, but I am feeling nostalgic for the present.",
        timestamp: "2026-02-04T10:00:00Z",
        exhibitRef: "X post; Fortune (Feb 2026)",
      },
    ],
    platform: "memo",
    dateRange: { start: "2026-02-04", end: "2026-02-04" },
    summary:
      "The CEO of the company building AGI admits to feeling 'useless and sad' after his own AI tools outperformed him at coding. 'I am feeling nostalgic for the present.'",
    exhibitSource: "X post; Fortune (February 2026)",
    tags: ["personal", "ai-anxiety"],
  },

  // ===== PAUL GRAHAM ON ALTMAN =====
  {
    id: "paul-graham-cannibal-island",
    subject: "[Quote about Sam Altman]",
    participants: ["unknown"],
    messages: [
      {
        id: "pgc1",
        from: "unknown",
        text: "[Paul Graham, Y Combinator co-founder:] If you dropped him on an island of cannibals and came back later, he'd be king.",
        timestamp: "2025-06-01T10:00:00Z",
        exhibitRef: "Keach Hagey biography 'The Optimist'; TechCrunch",
      },
      {
        id: "pgc2",
        from: "unknown",
        text: "[Peter Thiel:] We should treat him as more of a messiah figure.",
        timestamp: "2025-06-01T10:15:00Z",
        exhibitRef: "Keach Hagey biography 'The Optimist'; TechCrunch",
      },
    ],
    platform: "memo",
    dateRange: { start: "2025-06-01", end: "2025-06-01" },
    summary:
      "How the people closest to power describe Altman. Paul Graham: 'If you dropped him on an island of cannibals and came back later, he'd be king.' Peter Thiel: 'We should treat him as more of a messiah figure.'",
    exhibitSource: "Keach Hagey biography 'The Optimist' (2025); TechCrunch",
    tags: ["personal"],
  },

  // ===== ALTMAN AT LOOPT — FIRED TWICE =====
  {
    id: "altman-loopt-fired-twice",
    subject: "[From biography]",
    participants: ["altman"],
    messages: [
      {
        id: "alt1",
        from: "altman",
        text: "[From reporting:] At his startup Loopt, the management team went to the board twice and asked the board to fire him for what they called 'deceptive and chaotic behavior.'",
        timestamp: "2008-01-01T10:00:00Z",
        exhibitRef: "TIME CEO of Year (2023); Keach Hagey biography",
      },
      {
        id: "alt2",
        from: "unknown",
        text: "[TIME Magazine:] Four people who worked with him described him as 'slippery — and at times, misleading and deceptive.'",
        timestamp: "2023-12-15T10:00:00Z",
        exhibitRef: "TIME CEO of the Year profile (Dec 2023)",
      },
    ],
    platform: "memo",
    dateRange: { start: "2008-01-01", end: "2023-12-15" },
    summary:
      "Long before OpenAI, Altman's own Loopt team tried to get him fired — twice — for 'deceptive and chaotic behavior.' TIME: four colleagues called him 'slippery — and at times, misleading and deceptive.' The pattern Sutskever's 52-page memo would later describe.",
    exhibitSource: "TIME CEO of the Year (2023); Keach Hagey biography 'The Optimist'",
    tags: ["personal"],
  },

  // ===== SCARLETT JOHANSSON — "SHOCKED, ANGERED AND IN DISBELIEF" (MAY 2024) =====
  {
    id: "johansson-sky-voice",
    subject: "[Public statement — Sky voice controversy]",
    participants: ["altman"],
    messages: [
      {
        id: "jsv1",
        from: "altman",
        text: "[Sam Altman tweeted a single word on demo day:] her",
        timestamp: "2024-05-13T10:00:00Z",
        exhibitRef: "X/Twitter post (May 13, 2024)",
      },
      {
        id: "jsv2",
        from: "unknown",
        text: "[Scarlett Johansson statement:] When I heard the released demo, I was shocked, angered and in disbelief that Mr. Altman would pursue a voice that sounded so eerily similar to mine that my closest friends and news outlets could not tell the difference.",
        timestamp: "2024-05-20T10:00:00Z",
        exhibitRef: "Scarlett Johansson public statement (May 20, 2024); NPR; Variety",
      },
      {
        id: "jsv3",
        from: "unknown",
        text: "[Johansson continued:] Mr. Altman even insinuated that the similarity was intentional, tweeting a single word 'her' — a reference to the film in which I voiced a chat system, Samantha, who forms an intimate relationship with a human.",
        timestamp: "2024-05-20T10:15:00Z",
        exhibitRef: "Scarlett Johansson public statement (May 20, 2024)",
      },
      {
        id: "jsv4",
        from: "unknown",
        text: "[Johansson:] Two days before the ChatGPT 4.0 demo was released, Mr. Altman contacted my agent, asking me to reconsider. Before we could connect, the system was out there.",
        timestamp: "2024-05-20T10:30:00Z",
        exhibitRef: "Scarlett Johansson public statement (May 20, 2024)",
      },
      {
        id: "jsv5",
        from: "altman",
        text: "The voice of Sky is not Scarlett Johansson's, and it was never intended to resemble hers.",
        timestamp: "2024-05-20T18:00:00Z",
        exhibitRef: "Sam Altman public statement (May 20, 2024)",
      },
    ],
    platform: "memo",
    dateRange: { start: "2024-05-13", end: "2024-05-20" },
    summary:
      "Altman tweeted 'her' on demo day. One week later, Scarlett Johansson went nuclear: 'I was shocked, angered and in disbelief.' She says Altman contacted her agent two days before launch asking her to reconsider, then shipped the eerily similar voice anyway. Altman's defense: 'it was never intended to resemble hers.'",
    exhibitSource: "Scarlett Johansson public statement (May 2024); NPR; Variety; Washington Post",
    tags: ["personal"],
  },

  // ===== MIRA MURATI — "I'M NOT SURE" YOUTUBE TRAINING DATA (MAR 2024) =====
  {
    id: "murati-youtube-training-dodge",
    subject: "[Wall Street Journal interview — Sora training data]",
    participants: ["murati"],
    messages: [
      {
        id: "myt1",
        from: "murati",
        text: "[On Sora's training data:] We used publicly available data and licensed data.",
        timestamp: "2024-03-13T10:00:00Z",
        exhibitRef: "Wall Street Journal interview (Mar 13, 2024)",
      },
      {
        id: "myt2",
        from: "unknown",
        text: "[WSJ reporter:] What about YouTube videos specifically?",
        timestamp: "2024-03-13T10:05:00Z",
        exhibitRef: "Wall Street Journal interview (Mar 13, 2024)",
      },
      {
        id: "myt3",
        from: "murati",
        text: "I'm actually not sure about that.",
        timestamp: "2024-03-13T10:06:00Z",
        exhibitRef: "Wall Street Journal interview (Mar 13, 2024)",
      },
      {
        id: "myt4",
        from: "unknown",
        text: "[WSJ reporter:] What about Instagram or Facebook?",
        timestamp: "2024-03-13T10:07:00Z",
        exhibitRef: "Wall Street Journal interview (Mar 13, 2024)",
      },
      {
        id: "myt5",
        from: "murati",
        text: "If they were publicly available — publicly available to use — there might be the data, but I'm not sure. I'm not confident about it.",
        timestamp: "2024-03-13T10:08:00Z",
        exhibitRef: "Wall Street Journal interview (Mar 13, 2024)",
      },
      {
        id: "myt6",
        from: "murati",
        text: "I'm just not going to go into detail about the data that was used.",
        timestamp: "2024-03-13T10:10:00Z",
        exhibitRef: "Wall Street Journal interview (Mar 13, 2024)",
      },
    ],
    platform: "memo",
    dateRange: { start: "2024-03-13", end: "2024-03-13" },
    summary:
      "CTO Mira Murati's disastrous Wall Street Journal interview about Sora's training data. Asked about YouTube: 'I'm actually not sure about that.' Instagram? 'I'm not confident about it.' Final answer: 'I'm just not going to go into detail.' NYT later reported OpenAI transcribed 1M+ hours of YouTube with Whisper.",
    exhibitSource: "Wall Street Journal interview (March 2024); NYT (April 2024); Entrepreneur",
    tags: ["copyright"],
  },

  // ===== ALTMAN — "ROUGH VIBES" INTERNAL MEMO (NOV 2025) =====
  {
    id: "altman-rough-vibes-memo",
    subject: "[Leaked internal memo — Google competition]",
    participants: ["altman"],
    messages: [
      {
        id: "arv1",
        from: "altman",
        text: "Google has been doing excellent work recently in every aspect.",
        timestamp: "2025-11-15T10:00:00Z",
        exhibitRef: "The Information (Nov 2025); Fortune; WinBuzzer",
      },
      {
        id: "arv2",
        from: "altman",
        text: "It sucks that we have to do so many hard things at the same time, but such is our lot in life.",
        timestamp: "2025-11-15T10:15:00Z",
        exhibitRef: "The Information (Nov 2025); Fortune; WinBuzzer",
      },
      {
        id: "arv3",
        from: "altman",
        text: "[On revenue growth potentially slowing to 5%:] The environment features 'rough vibes' and 'economic headwinds.' It is critically important for the majority of the research team to stay focused on achieving superintelligence.",
        timestamp: "2025-11-15T10:30:00Z",
        exhibitRef: "The Information (Nov 2025); Fortune; WinBuzzer",
      },
    ],
    platform: "memo",
    dateRange: { start: "2025-11-15", end: "2025-11-15" },
    summary:
      "Altman's leaked 'rough vibes' memo to all employees. 'Google has been doing excellent work recently in every aspect.' Revenue growth could crash to 5%. But the solution? 'Stay focused on achieving superintelligence.' Classic Altman: acknowledge the fire, then aim for the stars.",
    exhibitSource: "The Information (November 2025); Fortune; WinBuzzer",
    tags: ["internal-memo"],
  },

  // ===== ALTMAN SENATE TESTIMONY — KEY QUOTES (MAY 2023) =====
  {
    id: "altman-senate-testimony",
    subject: "[Senate Judiciary Committee testimony]",
    participants: ["altman", "blumenthal"],
    messages: [
      {
        id: "ast1",
        from: "altman",
        text: "I do think some regulation would be quite wise on this topic.",
        timestamp: "2023-05-16T10:00:00Z",
        exhibitRef: "Senate Judiciary Committee (May 16, 2023); C-SPAN",
      },
      {
        id: "ast2",
        from: "altman",
        text: "There will be an impact on jobs. We try to be very clear about that, and I think it'll require partnership between industry and government, but mostly action by government, to figure out how we want to mitigate that.",
        timestamp: "2023-05-16T10:30:00Z",
        exhibitRef: "Senate Judiciary Committee (May 16, 2023); C-SPAN",
      },
      {
        id: "ast3",
        from: "altman",
        text: "When Photoshop came onto the scene a long time ago, for a while people were really quite fooled by photoshopped images and then pretty quickly developed an understanding that images were photoshopped. This will be like that, but on steroids.",
        timestamp: "2023-05-16T11:00:00Z",
        exhibitRef: "Senate Judiciary Committee (May 16, 2023); C-SPAN",
      },
      {
        id: "ast4",
        from: "altman",
        text: "People need to know if they're talking to an AI, if content they're looking at might be generated or might not.",
        timestamp: "2023-05-16T11:30:00Z",
        exhibitRef: "Senate Judiciary Committee (May 16, 2023); C-SPAN",
      },
    ],
    platform: "memo",
    dateRange: { start: "2023-05-16", end: "2023-05-16" },
    summary:
      "Altman before the Senate, asking to be regulated. 'I do think some regulation would be quite wise.' On misinformation: 'This will be like Photoshop, but on steroids.' The humble tech CEO routine that launched a thousand memes. Two years later, no regulation has passed.",
    exhibitSource: "Senate Judiciary Committee hearing (May 16, 2023); C-SPAN; PBS",
    tags: ["regulation"],
  },
];
