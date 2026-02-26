import { Thread } from "@/types";

// BATCH 5: Verbatim from TechEmails.com (Feb & Dec 2025 articles) — Musk v. Altman court filings
export const threadsBatch5: Thread[] = [
  // ===== ALTMAN-ZILIS TEXT — VERBATIM FROM TECHEMAILS =====
  {
    id: "altman-zilis-tweet-verbatim",
    subject: "[Text to Shivon Zilis]",
    participants: ["altman", "zilis"],
    messages: [
      {
        id: "azv1",
        from: "altman",
        text: "BTW, good idea for me to tweet something nice about Elon? Have been meaning to do this after he DMd about not being in the photo from the first day of OpenAI. Just about how much I and others look up to him, how critical his early contributions to OpenAI are, etc.",
        timestamp: "2023-02-09T14:00:00Z",
        exhibitRef:
          "TechEmails.com (Dec 6, 2025); Musk v. Altman (2025)",
      },
    ],
    platform: "sms",
    dateRange: { start: "2023-02-09", end: "2023-02-09" },
    summary:
      "Altman asks Shivon Zilis if he should 'tweet something nice about Elon' — managing the relationship after Musk DMed about being excluded from OpenAI's founding photo. Nine days later: the 'you're my hero' texts.",
    exhibitSource: "TechEmails.com (Dec 6, 2025); Musk v. Altman court filing",
    tags: ["musk-v-openai", "verified-exhibit"],
  },

  // ===== ALTMAN-MUSK FOUNDING — $100M, GATES, SAFETY BOARD =====
  {
    id: "altman-musk-founding-100m",
    subject: "Re: followup",
    participants: ["altman", "musk"],
    messages: [
      {
        id: "amf1",
        from: "altman",
        text: "Good seeing you a couple of weeks ago.\n\nAs discussed I think starting with a $100MM commitment (and leaving the time unspecified) is the way to go.\n\nEveryone we discussed but Gates is committed to donating. Hope to have him locked down next week. I am going to sit down with Zuck, but I still think it's probably too problematic given Facebook AI Research.\n\nTwo big new recruits that we expect to sign offer letters this week: John Schulman and Wojciech Zaremba.\n\nSpecific asks for you:\n1) Can you donate $30MM over the next 5 years?\n2) Can we call you an \"advisor\" but leave unspecified what you'll do in detail and figure it out as we go?\n3) Will you be on the Safety Board with me? I'd like it to eventually be 5 of us, adding the next 3 over the year or so. This will be the \"second key\" for releasing anything that could be dangerous.",
        timestamp: "2015-10-18T11:36:00Z",
        exhibitRef:
          "TechEmails.com (Dec 6, 2025); Musk v. Altman (2025)",
      },
      {
        id: "amf2",
        from: "musk",
        text: "Happy to talk about it any time. Governance is extremely important to me. I wouldn't want to be just a donor to what could be a potentially dangerous technology without any say in how it's used. If there's a way to do that, I'm interested. But I don't want to fund something where I have no ability to course-correct if things go in what turns out to be the wrong direction.\n\nBtw, great move on the continuity fund!",
        timestamp: "2015-10-19T03:27:00Z",
        exhibitRef: "TechEmails.com (Dec 6, 2025); Musk v. Altman (2025)",
      },
      {
        id: "amf3",
        from: "altman",
        text: "Happy to talk about it any time--very focused on getting this right!\n\nThanks--you were actually the main inspiration for that. We've had such a struggle getting our capital-intensive businesses funded (unless the founders were already rich from a previous startup) that we figured we should just do it ourselves.",
        timestamp: "2015-10-19T08:47:00Z",
        exhibitRef: "TechEmails.com (Dec 6, 2025); Musk v. Altman (2025)",
      },
    ],
    platform: "email",
    dateRange: { start: "2015-10-18", end: "2015-10-19" },
    summary:
      "Pre-founding emails: Altman asks Musk for $30M over 5 years, Safety Board seat, advisor title. Zuck considered 'too problematic.' Schulman & Zaremba signing. Musk demands governance: 'I wouldn't want to fund a potentially dangerous technology without any say.'",
    exhibitSource: "TechEmails.com (Dec 6, 2025); Musk v. Altman court filing",
    tags: ["musk-v-openai", "founding", "funding", "safety", "verified-exhibit"],
  },

  // ===== ALTMAN-MUSK TEXTS — FULL VERBATIM WITH TESLA RECRUITING =====
  {
    id: "altman-musk-hero-tesla-recruiting",
    subject: "[Text continuation — Tesla recruiting]",
    participants: ["altman", "musk"],
    messages: [
      {
        id: "amtr1",
        from: "altman",
        text: "also, i checked with our team on recruiting from tesla. we really are doing very little relative to the size of the company, but i will make sure we don't hurt tesla, i obviously think it's a super important company.",
        timestamp: "2023-02-18T12:00:00Z",
        exhibitRef:
          "TechEmails.com (Feb 1, 2026); Musk v. Altman (2026)",
      },
    ],
    platform: "sms",
    dateRange: { start: "2023-02-18", end: "2023-02-18" },
    summary:
      "Previously unreported: right after the 'you're my hero' exchange, Altman also promises not to 'hurt Tesla' with recruiting. Reassures Musk: 'i obviously think it's a super important company.'",
    exhibitSource: "TechEmails.com (Feb 1, 2026); Musk v. Altman court filing",
    tags: ["musk-v-openai", "tesla", "verified-exhibit"],
  },

  // ===== KEVIN SCOTT FULL EMAIL — WHY THE BOARD FIRED ALTMAN =====
  {
    id: "kevin-scott-full-email",
    subject: "Why the OpenAI board really fired Sam Altman",
    participants: ["kscott", "nadella", "shaw", "bsmith", "hood"],
    messages: [
      {
        id: "ksf1",
        from: "kscott",
        text: "A member of the board, Ilya Sutskever, had been increasingly at odds with his boss, Sam, over a variety of issues.",
        timestamp: "2023-11-19T07:31:00Z",
        exhibitRef: "TechEmails.com (Feb 1, 2026); Musk v. Altman (2026)",
      },
      {
        id: "ksf2",
        from: "kscott",
        text: "One of those issues is that there is a perfectly natural tension inside of the company between Research and Applied over resource allocations. The success of Applied has meant that headcount and GPUs got allocated to things like the API and ChatGPT. Research, which is responsible for training new models, could always use more GPUs because what they're doing is literally insatiable. It's why Sam has pushed us so hard on capacity: he's the one thing about the global optima and trying to make things non-zero sum.",
        timestamp: "2023-11-19T07:31:01Z",
        exhibitRef: "TechEmails.com (Feb 1, 2026); Musk v. Altman (2026)",
      },
      {
        id: "ksf3",
        from: "kscott",
        text: "The second of the issues, and one that's deeply personal to Ilya, is that Jakub moreso than Ilya has been making the research breakthroughs that are driving things forward, to the point that Sam promoted Jakub, and put him charge of the major model research directions. I think that Ilya has had a very, very hard time with this, with this person that used to work for him suddenly becoming the leader, and perhaps more importantly, for solving the problem that Ilya has been trying to solve the past few years with little or no progress.",
        timestamp: "2023-11-19T07:31:02Z",
        exhibitRef: "TechEmails.com (Feb 1, 2026); Musk v. Altman (2026)",
      },
      {
        id: "ksf4",
        from: "kscott",
        text: "I think the things that made them susceptible, is that two of the board members were effective altruism folks who all things equal would like to have an infinite bag of money to build AGI-like things, just to study and ponder, but not to do anything with. None of them were experienced enough with running things, or understood the dynamic at OAI well enough to understand that firing Sam not only would not solve any of the concerns they had, but would make them worse.",
        timestamp: "2023-11-19T07:31:03Z",
        exhibitRef: "TechEmails.com (Feb 1, 2026); Musk v. Altman (2026)",
      },
      {
        id: "ksf5",
        from: "kscott",
        text: "Thursday late night, the board let's Mira know what they're going to do. By board, it's Ilya, Tash, Helen, and Adam.\n\nMira calls me and Satya about 10-15 minutes before the board talks to Sam. This is the first either of us had heard of any of this. Mira sounded like she had been run over by a truck as she tells me.\n\nOAI Board notifies Sam at noon on Friday that he's out, and that Greg is off the board, and immediately does a blog post.\n\nOAI all hands at 2P to rattled staff.\n\nGreg resigns. He was blindsided and hadn't been in the board deliberations, and hadn't agreed to stay.",
        timestamp: "2023-11-19T07:31:04Z",
        exhibitRef: "TechEmails.com (Feb 1, 2026); Musk v. Altman (2026)",
      },
    ],
    platform: "email",
    dateRange: { start: "2023-11-19", end: "2023-11-19" },
    summary:
      "Kevin Scott's explosive internal email to Microsoft leadership, sent the morning after Altman's firing. Reveals: Ilya's jealousy of Jakub Pachocki, EA board members who wanted 'an infinite bag of money to study and ponder,' Murati calling Scott 'sounding like she had been run over by a truck.'",
    exhibitSource: "TechEmails.com (Feb 1, 2026); Musk v. Altman court filing",
    tags: ["board-crisis", "microsoft", "verified-exhibit"],
  },

  // ===== ALTMAN-NADELLA-TAYLOR CRISIS GROUP TEXT — THE FULL DAY =====
  {
    id: "altman-nadella-taylor-crisis-text",
    subject: "[Group text — crisis coordination]",
    participants: ["altman", "nadella", "taylor"],
    messages: [
      {
        id: "ant1",
        from: "nadella",
        text: "[Liked \"I pinged Adam again this morning and have not hear...\"]",
        timestamp: "2023-11-19T07:25:00Z",
        exhibitRef: "TechEmails.com (Feb 1, 2026); Musk v. Altman (2026)",
      },
      {
        id: "ant2",
        from: "altman",
        text: "i haven't heard anything at all",
        timestamp: "2023-11-19T07:30:00Z",
        exhibitRef: "TechEmails.com (Feb 1, 2026); Musk v. Altman (2026)",
      },
      {
        id: "ant3",
        from: "altman",
        text: "i'm gonna talk to a few key team members and then propose a plan b to you guys",
        timestamp: "2023-11-19T07:35:00Z",
        exhibitRef: "TechEmails.com (Feb 1, 2026); Musk v. Altman (2026)",
      },
      {
        id: "ant4",
        from: "taylor",
        text: "Just called Adam and no response",
        timestamp: "2023-11-19T07:50:00Z",
        exhibitRef: "TechEmails.com (Feb 1, 2026); Musk v. Altman (2026)",
      },
      {
        id: "ant5",
        from: "nadella",
        text: "No response on my side either",
        timestamp: "2023-11-19T08:00:00Z",
        exhibitRef: "TechEmails.com (Feb 1, 2026); Musk v. Altman (2026)",
      },
      {
        id: "ant6",
        from: "altman",
        text: "are you guys free? new idea",
        timestamp: "2023-11-19T11:09:00Z",
        exhibitRef: "TechEmails.com (Feb 1, 2026); Musk v. Altman (2026)",
      },
      {
        id: "ant7",
        from: "nadella",
        text: "Yes",
        timestamp: "2023-11-19T11:10:00Z",
        exhibitRef: "TechEmails.com (Feb 1, 2026); Musk v. Altman (2026)",
      },
      {
        id: "ant8",
        from: "altman",
        text: "adam thinks it might work with the 3 member board",
        timestamp: "2023-11-19T11:20:00Z",
        exhibitRef: "TechEmails.com (Feb 1, 2026); Musk v. Altman (2026)",
      },
      {
        id: "ant9",
        from: "nadella",
        text: "That will be great.",
        timestamp: "2023-11-19T11:25:00Z",
        exhibitRef: "TechEmails.com (Feb 1, 2026); Musk v. Altman (2026)",
      },
      {
        id: "ant10",
        from: "nadella",
        text: "Can we put Amy as observer? May help you all",
        timestamp: "2023-11-19T11:26:00Z",
        exhibitRef: "TechEmails.com (Feb 1, 2026); Musk v. Altman (2026)",
      },
      {
        id: "ant11",
        from: "altman",
        text: "id be fine either way",
        timestamp: "2023-11-19T11:28:00Z",
        exhibitRef: "TechEmails.com (Feb 1, 2026); Musk v. Altman (2026)",
      },
      {
        id: "ant12",
        from: "taylor",
        text: "If this all plays out, it is important to me we stabilize and include her in that capacity, so either will work, ie, we will make it happen after if not now",
        timestamp: "2023-11-19T11:30:00Z",
        exhibitRef: "TechEmails.com (Feb 1, 2026); Musk v. Altman (2026)",
      },
      {
        id: "ant13",
        from: "altman",
        text: "ok i think we get ready to go on the plan of mira rehiring me and greg while we work on the injunction. the board just won't give any timeline. this will stabilize things in the short term and everyone can come to work monday morning. ok with you?",
        timestamp: "2023-11-19T11:49:00Z",
        exhibitRef: "TechEmails.com (Feb 1, 2026); Musk v. Altman (2026)",
      },
      {
        id: "ant14",
        from: "altman",
        text: "if that blows up we can go on to the subsidiary",
        timestamp: "2023-11-19T11:50:00Z",
        exhibitRef: "TechEmails.com (Feb 1, 2026); Musk v. Altman (2026)",
      },
      {
        id: "ant15",
        from: "nadella",
        text: "This sounds good to me. I will call Brad just to talk through the injunction and have him call Jason.",
        timestamp: "2023-11-19T11:55:00Z",
        exhibitRef: "TechEmails.com (Feb 1, 2026); Musk v. Altman (2026)",
      },
      {
        id: "ant16",
        from: "altman",
        text: "adam called. they commit to answer by 5 pm. just trying to get clear on their legal risk. we do the above plan if not.",
        timestamp: "2023-11-19T12:05:00Z",
        exhibitRef: "TechEmails.com (Feb 1, 2026); Musk v. Altman (2026)",
      },
      {
        id: "ant17",
        from: "taylor",
        text: "FYI, if the board comes back with anything other than this simple structure, eg, representations of some kind, I am not comfortable proceeding personally. My high level requirements:\n- Interim (six months)\n- Sam is back as CEO and on the board\n- Stabilize the org\n- Mandate to appoint the full time board address the governance issues\n- No additional complexity, eg, requirements from the outgoing board",
        timestamp: "2023-11-19T12:09:00Z",
        exhibitRef: "TechEmails.com (Feb 1, 2026); Musk v. Altman (2026)",
      },
      {
        id: "ant18",
        from: "altman",
        text: "we have heard from other people they are trying to find a backup ceo if this doesn't resolve, but are still saying they think it can resolve peacefully",
        timestamp: "2023-11-19T15:25:00Z",
        exhibitRef: "TechEmails.com (Feb 1, 2026); Musk v. Altman (2026)",
      },
      {
        id: "ant19",
        from: "nadella",
        text: "I guess we wait till 5 and get on a call",
        timestamp: "2023-11-19T15:30:00Z",
        exhibitRef: "TechEmails.com (Feb 1, 2026); Musk v. Altman (2026)",
      },
      {
        id: "ant20",
        from: "altman",
        text: "hannah just knocked on the door. mira said she will wrap up soon and told the board we have to say something.",
        timestamp: "2023-11-19T18:45:00Z",
        exhibitRef: "TechEmails.com (Feb 1, 2026); Musk v. Altman (2026)",
      },
      {
        id: "ant21",
        from: "altman",
        text: "mira still on with them, said it's not going well",
        timestamp: "2023-11-19T19:10:00Z",
        exhibitRef: "TechEmails.com (Feb 1, 2026); Musk v. Altman (2026)",
      },
    ],
    platform: "sms",
    dateRange: { start: "2023-11-19", end: "2023-11-19" },
    summary:
      "THE crisis text chain. 12 hours of real-time coordination between Altman, Nadella, and Bret Taylor on Nov 19. 'Plan B' of Mira rehiring Sam, 'if that blows up we can go on to the subsidiary' (Microsoft), Taylor's 5 requirements, and the agonizing wait as the board goes dark.",
    exhibitSource: "TechEmails.com (Feb 1, 2026); Musk v. Altman court filing",
    tags: ["board-crisis", "microsoft", "governance", "verified-exhibit"],
  },

  // ===== BRET TAYLOR REQUIREMENTS =====
  {
    id: "taylor-board-chair-requirements",
    subject: "[Bret Taylor accepts board chair]",
    participants: ["taylor", "altman", "nadella"],
    messages: [
      {
        id: "btc1",
        from: "altman",
        text: "bret are you still good to be chair?",
        timestamp: "2023-11-19T12:45:00Z",
        exhibitRef: "TechEmails.com (Feb 1, 2026); Musk v. Altman (2026)",
      },
      {
        id: "btc2",
        from: "taylor",
        text: "Yes",
        timestamp: "2023-11-19T12:46:00Z",
        exhibitRef: "TechEmails.com (Feb 1, 2026); Musk v. Altman (2026)",
      },
      {
        id: "btc3",
        from: "nadella",
        text: "Thanks much Bret for doing this. Really grateful that you are willing to do this.",
        timestamp: "2023-11-19T12:48:00Z",
        exhibitRef: "TechEmails.com (Feb 1, 2026); Musk v. Altman (2026)",
      },
    ],
    platform: "sms",
    dateRange: { start: "2023-11-19", end: "2023-11-19" },
    summary:
      "Bret Taylor agrees to become OpenAI board chair during the crisis. Nadella: 'Really grateful that you are willing to do this.' This text set up the resolution of the entire crisis.",
    exhibitSource: "TechEmails.com (Feb 1, 2026); Musk v. Altman court filing",
    tags: ["board-crisis", "governance", "verified-exhibit"],
  },
];
