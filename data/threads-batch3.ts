import { Thread } from "@/types";

// BATCH 3: Real verbatim quotes from court exhibits, depositions, and public filings
export const threadsBatch3: Thread[] = [
  // ===== THE FOUNDING EMAIL — THE REAL ONE =====
  {
    id: "manhattan-project-for-ai",
    subject: "question",
    participants: ["altman", "musk"],
    messages: [
      {
        id: "mp1",
        from: "altman",
        text: "Been thinking a lot about whether it's possible to stop humanity from developing AI. I think the answer is almost definitely not. If it's going to happen anyway, it seems like it would be good for someone other than Google to do it first. Any thoughts on whether it would be good for YC to start a Manhattan Project for AI? My sense is we could get many of the top ~50 to work on it, and we could structure it so that the tech belongs to the world via some sort of nonprofit but the people working on it get startup-like compensation if it works. Obviously we'd comply with/aggressively support all regulation.",
        timestamp: "2015-05-25T21:10:00Z",
        exhibitRef: "Musk v. Altman — Complaint exhibit; OpenAI blog Mar 2024",
      },
      {
        id: "mp2",
        from: "musk",
        text: "Probably worth a conversation",
        timestamp: "2015-05-25T23:09:00Z",
        exhibitRef: "Musk v. Altman — Complaint exhibit; OpenAI blog Mar 2024",
      },
    ],
    platform: "email",
    dateRange: { start: "2015-05-25", end: "2015-05-25" },
    summary:
      "The founding email. Altman pitches 'a Manhattan Project for AI' to Musk. Musk's two-word reply launches what becomes OpenAI.",
    exhibitSource:
      "Musk v. Altman complaint exhibit; OpenAI blog 'OpenAI and Elon Musk' (Mar 6, 2024)",
    tags: ["musk-v-openai", "founding", "verified-exhibit"],
  },
  {
    id: "mission-individual-empowerment",
    subject: "Re: AI lab structure",
    participants: ["altman", "musk"],
    messages: [
      {
        id: "mi1",
        from: "altman",
        text: "The mission would be to create the first general AI and use it for individual empowerment — ie, the distributed version of the future that seems the safest. More generally, safety should be a first-class requirement.",
        timestamp: "2015-06-24T10:24:00Z",
        exhibitRef:
          "Musk v. Altman complaint exhibit; TechEmails.com court records",
      },
    ],
    platform: "email",
    dateRange: { start: "2015-06-24", end: "2015-06-24" },
    summary:
      "Altman defines OpenAI's mission: 'create the first general AI and use it for individual empowerment.' Safety as first-class requirement.",
    exhibitSource: "Musk v. Altman complaint exhibit; TechEmails.com",
    tags: ["musk-v-openai", "founding", "safety", "verified-exhibit"],
  },
  {
    id: "billion-dollar-commitment",
    subject: "Re: Funding announcement",
    participants: ["musk", "altman", "brockman"],
    messages: [
      {
        id: "bc1",
        from: "musk",
        text: "We need to go with a much bigger number than $100M to avoid sounding hopeless relative to what Google or Facebook are spending. I think we should say that we are starting with a $1B funding commitment. This is real. I will cover whatever anyone else doesn't provide.",
        timestamp: "2015-11-22T10:00:00Z",
        exhibitRef:
          "OpenAI blog 'OpenAI and Elon Musk' (Mar 6, 2024); CNBC reporting",
      },
    ],
    platform: "email",
    dateRange: { start: "2015-11-22", end: "2015-11-22" },
    summary:
      "Musk pushes funding from $100M to $1B: 'I will cover whatever anyone else doesn't provide.' (He contributed ~$45M total before departing.)",
    exhibitSource: "OpenAI blog Mar 2024; CNBC",
    tags: ["musk-v-openai", "funding", "founding", "verified-exhibit"],
  },
  {
    id: "musk-standard-c-corp",
    subject: "Re: Structure",
    participants: ["musk", "altman"],
    messages: [
      {
        id: "sc1",
        from: "musk",
        text: "Also, the structure doesn't seem optimal... Probably better to have a standard C corp with a parallel nonprofit.",
        timestamp: "2015-11-20T14:00:00Z",
        exhibitRef:
          "OpenAI blog 'Elon Musk wanted an OpenAI for-profit' (Dec 2024)",
      },
    ],
    platform: "email",
    dateRange: { start: "2015-11-20", end: "2015-11-20" },
    summary:
      "Even before launch, Musk suggests a 'standard C corp with a parallel nonprofit' — undermining his later lawsuit claiming the nonprofit was sacrosanct.",
    exhibitSource: "OpenAI blog Dec 2024",
    tags: ["musk-v-openai", "nonprofit", "founding", "verified-exhibit"],
  },

  // ===== THE OPEN VS CLOSED DEBATE =====
  {
    id: "start-being-less-open",
    subject: "Re: Publication policy",
    participants: ["sutskever", "musk", "brockman"],
    messages: [
      {
        id: "so1",
        from: "sutskever",
        text: "As we get closer to building AI, it will make sense to start being less open. The Open in OpenAI means that everyone should benefit from the fruits of AI after it's built, but it's totally OK to not share the science (even though sharing everything is definitely the right strategy in the short and possibly medium term for recruitment purposes).",
        timestamp: "2016-01-02T10:00:00Z",
        exhibitRef: "OpenAI blog Mar 2024; Musk lawsuit exhibits",
      },
      {
        id: "so2",
        from: "musk",
        text: "Yup.",
        timestamp: "2016-01-02T10:05:00Z",
        exhibitRef: "OpenAI blog Mar 2024; Musk lawsuit exhibits",
      },
    ],
    platform: "email",
    dateRange: { start: "2016-01-02", end: "2016-01-02" },
    summary:
      "Sutskever: 'it will make sense to start being less open.' Musk's one-word reply: 'Yup.' Later, Musk sues over OpenAI not being open enough.",
    exhibitSource: "OpenAI blog Mar 2024; Musk lawsuit exhibits",
    tags: ["musk-v-openai", "open-source", "safety", "verified-exhibit"],
  },
  {
    id: "hard-takeoff-open-source-risk",
    subject: "Re: Open source risks",
    participants: ["sutskever", "musk"],
    messages: [
      {
        id: "ht1",
        from: "sutskever",
        text: "If a hard takeoff occurs, and a safe AI is harder to build than an unsafe one, then by open sourcing everything, we make it easy for someone unscrupulous with access to overwhelming amount of hardware to build an unsafe AI, which will experience a hard takeoff.",
        timestamp: "2016-02-15T09:00:00Z",
        exhibitRef: "OpenAI blog Mar 2024; Decrypt",
      },
    ],
    platform: "email",
    dateRange: { start: "2016-02-15", end: "2016-02-15" },
    summary:
      "Sutskever warns that open-sourcing could enable 'someone unscrupulous' to build unsafe AI that experiences 'a hard takeoff.'",
    exhibitSource: "OpenAI blog Mar 2024; Decrypt",
    tags: ["musk-v-openai", "safety", "open-source", "verified-exhibit"],
  },

  // ===== DEEPMIND WARS =====
  {
    id: "deepmind-counteroffers-nips",
    subject: "Re: DeepMind counteroffers",
    participants: ["altman", "musk", "brockman"],
    messages: [
      {
        id: "dc1",
        from: "altman",
        text: "Just got word... that deepmind is going to give everyone in openAI massive counteroffers tomorrow to try to kill it.",
        timestamp: "2015-12-11T18:00:00Z",
        exhibitRef: "Musk lawsuit exhibits (Nov 2024 batch)",
      },
      {
        id: "dc2",
        from: "musk",
        text: "Either we get the best people in the world or we will get whipped by Deepmind. Whatever it takes.",
        timestamp: "2015-12-11T19:00:00Z",
        exhibitRef: "Musk lawsuit exhibits",
      },
    ],
    platform: "email",
    dateRange: { start: "2015-12-11", end: "2015-12-11" },
    summary:
      "DeepMind launches massive counteroffers to kill OpenAI before it launches. Musk: 'Whatever it takes.'",
    exhibitSource: "Musk lawsuit exhibits (Nov 2024 batch)",
    tags: [
      "musk-v-openai",
      "google",
      "talent",
      "founding",
      "verified-exhibit",
    ],
  },
  {
    id: "deepmind-extreme-mental-stress",
    subject: "Re: DeepMind",
    participants: ["musk", "brockman"],
    messages: [
      {
        id: "ds1",
        from: "musk",
        text: "Deepmind is causing me extreme mental stress. If they win, it will be really bad news with their one mind to rule the world philosophy.",
        timestamp: "2016-02-10T14:00:00Z",
        exhibitRef: "Musk lawsuit exhibits (Nov 2024); Transformer News",
      },
    ],
    platform: "email",
    dateRange: { start: "2016-02-10", end: "2016-02-10" },
    summary:
      "Musk: DeepMind is causing him 'extreme mental stress.' Fears their 'one mind to rule the world philosophy.'",
    exhibitSource: "Musk lawsuit exhibits; Transformer News",
    tags: ["musk-v-openai", "google", "safety", "verified-exhibit"],
  },

  // ===== MICROSOFT "MARKETING BITCH" =====
  {
    id: "microsoft-marketing-bitch",
    subject: "Re: Microsoft Azure deal",
    participants: ["musk", "altman"],
    messages: [
      {
        id: "mb1",
        from: "musk",
        text: "This actually made me feel nauseous. It sucks and is exactly what I would expect from them.",
        timestamp: "2016-09-15T10:00:00Z",
        exhibitRef: "Musk amended complaint exhibits (Nov 2024); GeekWire",
      },
      {
        id: "mb2",
        from: "musk",
        text: "Would be worth way more than $50M not to seem like Microsoft's marketing bitch.",
        timestamp: "2016-09-15T11:00:00Z",
        exhibitRef: "Musk amended complaint exhibits (Nov 2024); GeekWire",
      },
    ],
    platform: "email",
    dateRange: { start: "2016-09-15", end: "2016-09-15" },
    summary:
      "Musk reacts to Microsoft Azure partnership: 'made me feel nauseous.' Says it's 'worth way more than $50M not to seem like Microsoft's marketing bitch.'",
    exhibitSource: "Musk amended complaint exhibits (Nov 2024); GeekWire",
    tags: ["musk-v-openai", "microsoft", "verified-exhibit"],
  },

  // ===== THE "HONEST THOUGHTS" BOMBSHELL =====
  {
    id: "honest-thoughts-email",
    subject: "Honest Thoughts",
    participants: ["sutskever", "brockman", "musk", "altman"],
    messages: [
      {
        id: "ht1",
        from: "sutskever",
        text: "Elon, Sam, This process has been the highest stakes conversation that Greg and I have ever participated in, and if the project succeeds, it'll turn out to have been the highest stakes conversation the world has seen. Yesterday while we were considering making our final commitment, we realized we'd made a mistake. We have several important concerns that we haven't raised with either of you. We didn't raise them because we were afraid to: we were afraid of harming the relationship, having you think less of us, or losing you as partners.",
        timestamp: "2017-09-20T14:08:00Z",
        exhibitRef:
          "OpenAI blog Dec 2024; Musk lawsuit exhibits; OfficeChai; TechCrunch",
      },
      {
        id: "ht2",
        from: "sutskever",
        text: "[To Elon:] The current structure provides you with a path where you end up with unilateral absolute control over the AGI. You stated that you don't want to control the final AGI, but during this negotiation, you've shown to us that absolute control is extremely important to you. You said that you needed to be CEO of the new company so that everyone will know that you are the one who is in charge, even though you also stated that you hate being CEO and would much rather not be CEO.",
        timestamp: "2017-09-20T14:08:01Z",
        exhibitRef: "OpenAI blog Dec 2024; Musk lawsuit exhibits",
      },
      {
        id: "ht3",
        from: "sutskever",
        text: "The goal of OpenAI is to make the future good and to avoid an AGI dictatorship. You are concerned that Demis could create an AGI dictatorship. So do we. So it is a bad idea to create a structure where you could become a dictator if you chose to, especially given that we can create some other structure that avoids this possibility.",
        timestamp: "2017-09-20T14:08:02Z",
        exhibitRef: "OpenAI blog Dec 2024; Musk lawsuit exhibits",
      },
      {
        id: "ht4",
        from: "sutskever",
        text: "[To Sam:] We haven't been able to fully trust your judgements throughout this process, because we don't understand your cost function. We don't understand why the CEO title is so important to you. Is AGI truly your primary motivation? How does it connect to your political goals?",
        timestamp: "2017-09-20T14:08:03Z",
        exhibitRef: "OpenAI blog Dec 2024; Musk lawsuit exhibits",
      },
      {
        id: "ht5",
        from: "musk",
        text: "Guys, I've had enough. This is the final straw. Either go do something on your own or continue with OpenAI as a nonprofit. I will no longer fund OpenAI until you have made a firm commitment to stay or I'm just being a fool who is essentially providing free funding for you to create a startup.",
        timestamp: "2017-09-20T14:17:00Z",
        exhibitRef: "OpenAI blog Dec 2024; Musk lawsuit exhibits",
      },
      {
        id: "ht6",
        from: "musk",
        text: "To be clear, this is not an ultimatum to accept what was discussed before. That is no longer on the table.",
        timestamp: "2017-09-20T15:08:00Z",
        exhibitRef: "OpenAI blog Dec 2024",
      },
      {
        id: "ht7",
        from: "altman",
        text: "i remain enthusiastic about the non-profit structure!",
        timestamp: "2017-09-21T09:17:00Z",
        exhibitRef: "OpenAI blog Dec 2024; Musk lawsuit exhibits",
      },
    ],
    platform: "email",
    dateRange: { start: "2017-09-20", end: "2017-09-21" },
    summary:
      "The pivotal 'Honest Thoughts' email chain. Sutskever and Brockman confront both Musk ('AGI dictator') and Altman ('what is your cost function?'). Musk explodes: 'This is the final straw.' Altman replies next morning: 'i remain enthusiastic about the non-profit structure!'",
    exhibitSource:
      "OpenAI blog Dec 2024; Musk lawsuit exhibits; OfficeChai; TechCrunch",
    tags: ["musk-v-openai", "governance", "nonprofit", "verified-exhibit"],
  },

  // ===== BROCKMAN DIARY =====
  {
    id: "brockman-diary-it-was-a-lie",
    subject: "[Brockman personal diary — discovered in Musk v. Altman]",
    participants: ["brockman"],
    messages: [
      {
        id: "bd1",
        from: "brockman",
        text: "I cannot believe that we committed to non-profit if three months later we're doing b-corp then it was a lie.",
        timestamp: "2017-11-06T20:00:00Z",
        exhibitRef:
          "Musk v. Altman — Exhibit A; Judge Gonzalez Rogers ruling Jan 2026",
      },
      {
        id: "bd2",
        from: "brockman",
        text: "By the way, another realization from this is that it would be wrong to steal the nonprofit from him [Musk] to convert to a B corp without him. That would be pretty morally bankrupt, and he's really not an idiot.",
        timestamp: "2017-11-06T20:01:00Z",
        exhibitRef: "Musk v. Altman — Exhibit A",
      },
      {
        id: "bd3",
        from: "brockman",
        text: "Some chance that rejecting Elon will actually lose us Sam. This is the only chance we have to get out from Elon.",
        timestamp: "2017-11-06T20:02:00Z",
        exhibitRef: "Musk v. Altman — Exhibit A",
      },
      {
        id: "bd4",
        from: "brockman",
        text: "Financially, what will take me to $1B?",
        timestamp: "2017-11-06T20:03:00Z",
        exhibitRef:
          "Musk v. Altman — gov.uscourts.cand.433688.379.67.pdf",
      },
      {
        id: "bd5",
        from: "brockman",
        text: "the conclusion is we truly want the b-corp... and the true answer is that we want him out.",
        timestamp: "2017-11-06T20:04:00Z",
        exhibitRef:
          "Musk v. Altman — Exhibit A; cited by Judge Gonzalez Rogers Jan 2026",
      },
    ],
    platform: "memo",
    dateRange: { start: "2017-11-06", end: "2017-11-06" },
    summary:
      "Brockman's personal diary, discovered in Musk v. Altman discovery. Devastating entries: nonprofit commitment was 'a lie,' 'what will take me to $1B,' and 'the true answer is that we want him out.' Cited by judge in denying OpenAI summary judgment.",
    exhibitSource:
      "Musk v. Altman — Exhibit A; Judge Gonzalez Rogers ruling (Jan 2026)",
    tags: ["musk-v-openai", "governance", "nonprofit", "verified-exhibit"],
  },

  // ===== NEW YEAR FLATTERY =====
  {
    id: "new-year-flattery-2018",
    subject: "Happy New Year",
    participants: ["sutskever", "brockman", "musk"],
    messages: [
      {
        id: "ny1",
        from: "sutskever",
        text: "We've been working together for almost exactly two years, so it felt appropriate to send this note. I enjoy working together. You quickly pushed me out of my academic comfort zone. With time, I grew to appreciate the vast depth of your strategic insight.",
        timestamp: "2018-01-01T08:00:00Z",
        exhibitRef:
          "Unsealed Jan 2026; gov.uscourts.cand.433688.379.70.pdf",
      },
      {
        id: "ny2",
        from: "brockman",
        text: "We've been working together for 2 years now, and in every meeting with you I continue to learn, grow, and see the world in a new way. I particularly admire your clarity of purpose.",
        timestamp: "2018-01-01T09:00:00Z",
        exhibitRef:
          "Unsealed Jan 2026; gov.uscourts.cand.433688.379.71.pdf",
      },
    ],
    platform: "email",
    dateRange: { start: "2018-01-01", end: "2018-01-01" },
    summary:
      "Sutskever and Brockman send separate sycophantic New Year's emails to Musk — BCC'ing each other. Weeks later, Musk departs.",
    exhibitSource: "Unsealed court documents (Jan 2026)",
    tags: ["musk-v-openai", "verified-exhibit"],
  },

  // ===== CERTAIN FAILURE & TESLA MERGER =====
  {
    id: "certain-failure-vs-google",
    subject: "Re: OpenAI status",
    participants: ["musk", "altman"],
    messages: [
      {
        id: "cf1",
        from: "musk",
        text: "OpenAI is on a path of certain failure relative to Google. There obviously needs to be immediate and dramatic action or everyone except for Google will be consigned to irrelevance.",
        timestamp: "2018-01-31T10:00:00Z",
        exhibitRef: "OpenAI blog Mar 2024; multiple exhibits",
      },
      {
        id: "cf2",
        from: "musk",
        text: "To be clear, I have a lot of respect for your abilities and accomplishments, but I am not happy with how things have been managed. Either we fix things and my engagement increases a lot or we don't and I will drop to near zero and publicly reduce my association. I will not be in a situation where the perception of my influence and time doesn't match the reality.",
        timestamp: "2018-01-31T10:01:00Z",
        exhibitRef: "Court exhibits; multiple news outlets",
      },
    ],
    platform: "email",
    dateRange: { start: "2018-01-31", end: "2018-01-31" },
    summary:
      "Musk: 'OpenAI is on a path of certain failure relative to Google.' Threatens to 'publicly reduce my association.'",
    exhibitSource: "OpenAI blog Mar 2024; court exhibits",
    tags: ["musk-v-openai", "google", "verified-exhibit"],
  },
  {
    id: "tesla-cash-cow-karpathy",
    subject: "Fwd: Tesla proposal",
    participants: ["musk", "altman", "brockman"],
    messages: [
      {
        id: "tc1",
        from: "musk",
        text: "[Forwarding Karpathy's email:] 'The most promising option I can think of would be for OpenAI to attach to Tesla as its cash cow... If we do this really well, the transportation industry is large enough that we could increase Tesla's market cap to high O(~100K), and use that revenue to fund the AI work at the appropriate scale.'",
        timestamp: "2018-02-05T10:00:00Z",
        exhibitRef: "OpenAI blog Mar 2024; CNBC; Washington Post",
      },
      {
        id: "tc2",
        from: "musk",
        text: "[Karpathy is] exactly right... Tesla is the only path that could even hope to hold a candle to Google. Even then, the probability of being a counterweight to Google is small. It just isn't zero.",
        timestamp: "2018-02-05T10:30:00Z",
        exhibitRef: "OpenAI blog Mar 2024; CNBC",
      },
    ],
    platform: "email",
    dateRange: { start: "2018-02-05", end: "2018-02-05" },
    summary:
      "Karpathy proposes OpenAI 'attach to Tesla as its cash cow.' Musk endorses: 'Tesla is the only path that could even hope to hold a candle to Google.'",
    exhibitSource: "OpenAI blog Mar 2024; CNBC; Washington Post",
    tags: ["musk-v-openai", "tesla", "google", "verified-exhibit"],
  },

  // ===== ICO REJECTED =====
  {
    id: "altman-ico-rejected",
    subject: "Re: Crypto funding idea",
    participants: ["musk", "altman"],
    messages: [
      {
        id: "ic1",
        from: "musk",
        text: "[It would] simply result in a massive loss of credibility for OpenAI and everyone associated with the ICO.",
        timestamp: "2018-01-15T14:00:00Z",
        exhibitRef: "Musk lawsuit exhibits (Nov 2024); CoinTelegraph",
      },
    ],
    platform: "email",
    dateRange: { start: "2018-01-15", end: "2018-01-15" },
    summary:
      "Altman proposes an ICO (crypto token) to fund OpenAI. Musk shoots it down as a 'massive loss of credibility.'",
    exhibitSource: "Musk lawsuit exhibits (Nov 2024); CoinTelegraph",
    tags: ["musk-v-openai", "funding", "verified-exhibit"],
  },

  // ===== MUSK PROBABILITY ZERO =====
  {
    id: "probability-zero-billions",
    subject: "Re: Funding needs",
    participants: ["musk", "altman"],
    messages: [
      {
        id: "pz1",
        from: "musk",
        text: "Even raising several hundred million won't be enough. This needs billions per year immediately or forget it.",
        timestamp: "2018-12-26T10:00:00Z",
        exhibitRef:
          "OpenAI blog 'Elon Musk wanted an OpenAI for-profit' (Dec 2024)",
      },
      {
        id: "pz2",
        from: "musk",
        text: "My probability assessment of OpenAI being relevant to DeepMind/Google without a dramatic change in execution and resources is 0%.",
        timestamp: "2018-12-26T10:01:00Z",
        exhibitRef: "OpenAI blog Dec 2024",
      },
    ],
    platform: "email",
    dateRange: { start: "2018-12-26", end: "2018-12-26" },
    summary:
      "Musk's final assessment: 'This needs billions per year immediately or forget it.' Gives OpenAI 0% probability vs Google. Three months later, OpenAI announces capped-profit restructuring.",
    exhibitSource: "OpenAI blog Dec 2024",
    tags: ["musk-v-openai", "funding", "google", "verified-exhibit"],
  },

  // ===== ALTMAN "YOU'RE MY HERO" TEXT =====
  {
    id: "youre-my-hero-text",
    subject: "[Text messages]",
    participants: ["altman", "musk"],
    messages: [
      {
        id: "yh1",
        from: "altman",
        text: "i remember seeing you in a tv interview a long time ago (maybe 60 minutes?) where you being attacked by some guys, and you said they were heroes of yours and it was really tough. well, you're my hero and that's what it feels like when you attack openai. totally get we have some screwed some stuff up, but we have worked incredibly hard to do the right thing, and i think we have ensured that neither google nor anyone else is on a path to have unilateral control over AGI, which i believe we both think is critical.",
        timestamp: "2023-02-18T10:00:00Z",
        exhibitRef:
          "gov.uscourts.cand.433688.379.75.pdf; TechEmails.com",
      },
      {
        id: "yh2",
        from: "altman",
        text: "i am tremendously thankful for everything you've done to help — i dont think openai would have happened without you — and it really fucking hurts when you publicly attack openai.",
        timestamp: "2023-02-18T10:01:00Z",
        exhibitRef: "gov.uscourts.cand.433688.379.75.pdf",
      },
      {
        id: "yh3",
        from: "musk",
        text: "I hear you and it is certainly not my intention to be hurtful, for which I apologize, but the fate of civilization is at stake.",
        timestamp: "2023-02-18T11:00:00Z",
        exhibitRef: "gov.uscourts.cand.433688.379.75.pdf",
      },
      {
        id: "yh4",
        from: "altman",
        text: "i agree with that, and i would really love to hear the things you think we should be doing differently/better. it's also not clear to me how the attacks on twitter help the fate of civilization, but that's less important to me that getting to the right substance.",
        timestamp: "2023-02-18T11:30:00Z",
        exhibitRef: "gov.uscourts.cand.433688.379.75.pdf",
      },
    ],
    platform: "sms",
    dateRange: { start: "2023-02-18", end: "2023-02-18" },
    summary:
      "Altman to Musk: 'you're my hero and that's what it feels like when you attack openai... it really fucking hurts.' Musk: 'the fate of civilization is at stake.'",
    exhibitSource: "Court exhibit gov.uscourts.cand.433688.379.75.pdf",
    tags: ["musk-v-openai", "verified-exhibit"],
  },

  // ===== SUTSKEVER 52-PAGE MEMO & DEPOSITION =====
  {
    id: "sutskever-52-page-memo",
    subject: "[52-page memo to independent board members]",
    participants: ["sutskever", "toner", "dangelo", "mccauley"],
    messages: [
      {
        id: "sm1",
        from: "sutskever",
        text: "Sam exhibits a consistent pattern of lying, undermining his execs, and pitting his execs against one another.",
        timestamp: "2023-11-15T10:00:00Z",
        exhibitRef:
          "Sutskever deposition transcript (Oct 1, 2025, 365 pages); Decrypt; The Neuron",
      },
      {
        id: "sm2",
        from: "sutskever",
        text: "[Deposition testimony:] The context for this document is that the independent board members asked me to prepare it. And I did. And I was pretty careful.",
        timestamp: "2023-11-15T10:01:00Z",
        exhibitRef: "Sutskever deposition Oct 2025",
      },
      {
        id: "sm3",
        from: "sutskever",
        text: "[On the source of evidence:] Most or all of the supporting material, including critical screenshots, was provided by Mira Murati. I fully believed the information that Mira was giving me. In hindsight, I realize that I didn't know it. But back then, I thought I knew it. But I knew it through secondhand knowledge.",
        timestamp: "2023-11-15T10:02:00Z",
        exhibitRef: "Sutskever deposition Oct 2025",
      },
    ],
    platform: "memo",
    dateRange: { start: "2023-11-15", end: "2023-11-15" },
    summary:
      "Sutskever's 52-page memo to the board: 'Sam exhibits a consistent pattern of lying.' Sent via 'disappearing email.' Evidence mostly from Murati. Later admitted he 'didn't verify' the claims.",
    exhibitSource: "Sutskever deposition transcript (Oct 1, 2025)",
    tags: ["board-crisis", "governance", "verified-exhibit"],
  },

  // ===== ANTHROPIC MERGER PLOT =====
  {
    id: "anthropic-merger-plot",
    subject: "[Board call with Anthropic — day after Altman firing]",
    participants: ["sutskever", "toner", "dario", "daniela"],
    messages: [
      {
        id: "am1",
        from: "sutskever",
        text: "[Deposition testimony:] I don't know whether it was Helen who reached out to Anthropic or whether Anthropic reached out to Helen. But they reached out with a proposal to be merged with OpenAI and take over its leadership.",
        timestamp: "2023-11-18T14:00:00Z",
        exhibitRef: "Sutskever deposition Oct 2025; The Neuron; Bay Area Times",
      },
      {
        id: "am2",
        from: "sutskever",
        text: "I recall Anthropic expressing their excitement about it and expressing the issue — the practical challenges that they would have with it. I was very unhappy about it. I really did not want OpenAI to merge with Anthropic.",
        timestamp: "2023-11-18T14:01:00Z",
        exhibitRef: "Sutskever deposition Oct 2025",
      },
      {
        id: "am3",
        from: "sutskever",
        text: "My recollection is that Helen was the most supportive. [The merger] did not continue due to practical obstacles that Anthropic has raised.",
        timestamp: "2023-11-18T14:02:00Z",
        exhibitRef: "Sutskever deposition Oct 2025",
      },
    ],
    platform: "im",
    dateRange: { start: "2023-11-18", end: "2023-11-18" },
    summary:
      "Bombshell from Sutskever deposition: the day after firing Altman, the board called Anthropic about a MERGER. Dario and Daniela Amodei on the call. Toner 'most supportive.' Sutskever 'very unhappy.' Fell apart over 'practical obstacles.'",
    exhibitSource: "Sutskever deposition (Oct 2025); The Neuron",
    tags: [
      "board-crisis",
      "anthropic",
      "governance",
      "verified-exhibit",
    ],
  },

  // ===== TONER ON ALTMAN LYING =====
  {
    id: "toner-altman-lying",
    subject: "[Helen Toner — public statements on Altman]",
    participants: ["toner"],
    messages: [
      {
        id: "tl1",
        from: "toner",
        text: "[Altman had been] withholding information, misrepresenting things happening at the company, and in some cases outright lying to the board.",
        timestamp: "2024-05-28T10:00:00Z",
        exhibitRef: "TED podcast interview, May 2024; Fortune; CNBC",
      },
      {
        id: "tl2",
        from: "toner",
        text: "The board learned about ChatGPT's launch through Twitter. He hadn't informed us that he personally owned the OpenAI Startup Fund. He claimed to be an independent board member with no financial interest in the company. On multiple occasions, he gave the board inaccurate information about the small number of formal safety processes that the company did have in place.",
        timestamp: "2024-05-28T10:01:00Z",
        exhibitRef: "TED podcast interview, May 2024; Fortune; CNBC",
      },
    ],
    platform: "memo",
    dateRange: { start: "2024-05-28", end: "2024-05-28" },
    summary:
      "Toner's TED interview: Altman was 'outright lying to the board.' Board learned about ChatGPT launch from Twitter. Altman hid ownership of Startup Fund.",
    exhibitSource: "TED podcast (May 2024); Fortune; CNBC",
    tags: ["board-crisis", "governance", "verified-exhibit"],
  },

  // ===== KEVIN SCOTT CRISIS EMAIL =====
  {
    id: "kevin-scott-crisis-email",
    subject: "Re: OpenAI situation",
    participants: ["nadella", "altman"],
    messages: [
      {
        id: "ks1",
        from: "nadella",
        text: "[Kevin Scott email to Microsoft leadership, Nov 19:] A member of the board, Ilya Sutskever, had been increasingly at odds with his boss, Sam, over a variety of issues. Ilya has had a very, very hard time with this, with this person that used to work for him suddenly becoming the leader.",
        timestamp: "2023-11-19T07:31:00Z",
        exhibitRef:
          "Court discovery (Musk v. Altman); TechEmails.com; OfficeChai",
      },
    ],
    platform: "email",
    dateRange: { start: "2023-11-19", end: "2023-11-19" },
    summary:
      "Microsoft CTO Kevin Scott's internal email analyzing the board crisis in real-time. Reveals Ilya's resentment of Altman becoming leader.",
    exhibitSource:
      "Court discovery (Musk v. Altman); TechEmails.com; OfficeChai",
    tags: ["board-crisis", "microsoft", "verified-exhibit"],
  },

  // ===== MURATI URGENT TEXT TO NADELLA =====
  {
    id: "murati-urgent-nadella",
    subject: "[Urgent text during board crisis]",
    participants: ["murati", "nadella"],
    messages: [
      {
        id: "mn1",
        from: "murati",
        text: "Hi Satya, I know it's super late. Need to call you urgently.",
        timestamp: "2023-11-18T23:00:00Z",
        exhibitRef: "Unsealed court documents; GeekWire",
      },
      {
        id: "mn2",
        from: "nadella",
        text: "Thx. So sorry. But that is right.",
        timestamp: "2023-11-19T07:00:00Z",
        exhibitRef: "Unsealed court documents; GeekWire",
      },
    ],
    platform: "sms",
    dateRange: { start: "2023-11-18", end: "2023-11-19" },
    summary:
      "Murati's late-night text to Nadella during the crisis, asking to confirm if Microsoft planned to absorb OpenAI staff. Nadella's terse morning reply.",
    exhibitSource: "Unsealed court documents; GeekWire",
    tags: ["board-crisis", "microsoft", "verified-exhibit"],
  },

  // ===== NADELLA DEPOSITION =====
  {
    id: "nadella-deposition-excerpts",
    subject: "[Nadella deposition — Musk v. Altman]",
    participants: ["nadella"],
    messages: [
      {
        id: "nd1",
        from: "nadella",
        text: "[On hiring Altman at Microsoft after the firing:] It was definitely not my preferred thing.",
        timestamp: "2025-03-15T10:00:00Z",
        exhibitRef: "Nadella deposition 2025; GeekWire; TechBuzz.ai",
      },
      {
        id: "nd2",
        from: "nadella",
        text: "[On Bill Gates' view of the OpenAI investment:] Gates was clear in wanting us to just do our own — arguing Microsoft should build AI capabilities in-house.",
        timestamp: "2025-03-15T10:01:00Z",
        exhibitRef: "Nadella deposition 2025; GeekWire; TechBuzz.ai",
      },
    ],
    platform: "memo",
    dateRange: { start: "2025-03-15", end: "2025-03-15" },
    summary:
      "Nadella deposition reveals: hiring Altman at Microsoft was 'not my preferred thing.' Bill Gates argued against the OpenAI investment, wanted Microsoft to build AI in-house.",
    exhibitSource: "Nadella deposition 2025; GeekWire; TechBuzz.ai",
    tags: ["microsoft", "board-crisis", "verified-exhibit"],
  },

  // ===== LIGHTCAP INTERNAL MEMO =====
  {
    id: "lightcap-employee-memo",
    subject: "[Internal memo to all employees]",
    participants: ["lightcap"],
    messages: [
      {
        id: "lm1",
        from: "lightcap",
        text: "[The firing was] not the result of malfeasance or anything related to our financial, business, safety, or security/privacy practices, but rather a breakdown in communications between Sam Altman and the board.",
        timestamp: "2023-11-18T10:00:00Z",
        exhibitRef: "Axios (Nov 18, 2023); CNBC",
      },
    ],
    platform: "memo",
    dateRange: { start: "2023-11-18", end: "2023-11-18" },
    summary:
      "OpenAI COO Brad Lightcap's internal memo: firing was 'not malfeasance' but 'a breakdown in communications.' Attempted to calm 770 panicking employees.",
    exhibitSource: "Axios (Nov 18, 2023); CNBC",
    tags: ["board-crisis", "verified-exhibit"],
  },
];
