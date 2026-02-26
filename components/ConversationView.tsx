"use client";

import { Thread } from "@/types";
import { people } from "@/data/people";
import { MessageBubble } from "./MessageBubble";

interface ConversationViewProps {
  thread: Thread | null;
  onBack: () => void;
}

export function ConversationView({ thread, onBack }: ConversationViewProps) {
  if (!thread) {
    return (
      <div className="flex-1 flex items-center justify-center text-[var(--gpt-text-tertiary)]">
        <div className="text-center px-8">
          {/* OpenAI logo */}
          <div className="w-16 h-16 rounded-full bg-[var(--gpt-green)] flex items-center justify-center mx-auto mb-4 opacity-40">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
              <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
            </svg>
          </div>
          <p className="text-lg font-medium text-[var(--gpt-text-secondary)]">
            AltmanMail
          </p>
          <p className="text-sm mt-1 text-[var(--gpt-text-tertiary)]">
            Leaked emails, court exhibits & internal communications
          </p>
          <p className="text-xs mt-3 max-w-xs mx-auto text-[var(--gpt-text-tertiary)]">
            From Musk v. OpenAI, the board crisis, congressional testimony, and investigative reporting
          </p>
        </div>
      </div>
    );
  }

  const otherParticipants = thread.participants
    .filter((p) => p !== "altman")
    .map((p) => people[p] || { name: p });

  const threadTitle =
    thread.subject ||
    (otherParticipants.length > 0
      ? otherParticipants.map((p) => p.name).join(", ")
      : "Sam Altman (memo)");

  const platformLabel = {
    email: "Email",
    im: "Chat",
    slack: "Slack",
    signal: "Signal",
    sms: "SMS",
    memo: "Internal Memo",
  }[thread.platform];

  return (
    <div className="flex-1 flex flex-col h-full">
      {/* ChatGPT-style header */}
      <div className="flex items-center gap-3 px-4 py-2.5 border-b border-[var(--gpt-border)] shrink-0 bg-[var(--gpt-bg)]">
        {/* Back button — mobile only */}
        <button
          onClick={onBack}
          className="md:hidden shrink-0 w-8 h-8 rounded-lg flex items-center justify-center hover:bg-[var(--gpt-bg-hover)] transition-colors"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="min-w-0 flex-1">
          <h2 className="text-sm font-medium truncate">{threadTitle}</h2>
          <p className="text-[11px] text-[var(--gpt-text-tertiary)] truncate">
            {platformLabel} · {thread.dateRange.start.slice(0, 4)}
            {thread.tags && thread.tags.length > 0 && (
              <span>
                {" "}
                ·{" "}
                {thread.tags
                  .slice(0, 3)
                  .join(", ")}
              </span>
            )}
          </p>
        </div>
      </div>

      {/* Messages — ChatGPT style (centered, max-width) */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
          {/* Date separator */}
          <div className="flex items-center justify-center">
            <span className="text-[12px] text-[var(--gpt-text-tertiary)] px-3 py-1">
              {new Date(thread.dateRange.start).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>

          {thread.messages.map((msg) => (
            <MessageBubble
              key={msg.id}
              message={msg}
              isFromAltman={msg.from === "altman"}
              showSender={thread.participants.length > 2}
            />
          ))}

          {/* Citation */}
          <div className="flex items-center justify-center mt-8 mb-2">
            <div className="text-center text-[11px] text-[var(--gpt-text-tertiary)] max-w-sm leading-relaxed">
              <p className="font-medium">{thread.exhibitSource}</p>
              <p className="mt-0.5 opacity-75">
                Public court exhibits & reporting · Not affiliated with OpenAI
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Input bar */}
      <div className="px-4 py-3 shrink-0">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 bg-[var(--gpt-bg-hover)] rounded-xl px-4 py-2.5 border border-[var(--gpt-border)]">
            <span className="text-[var(--gpt-text-tertiary)] text-[13px] flex-1 select-none">
              Read-only exhibit archive
            </span>
            <div className="w-8 h-8 rounded-lg bg-[var(--gpt-text-tertiary)]/20 flex items-center justify-center shrink-0">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-[var(--gpt-text-tertiary)]"
              >
                <path d="M22 2L11 13" />
                <path d="M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
