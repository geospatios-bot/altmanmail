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
      <div className="flex-1 flex flex-col items-center justify-center text-[var(--gpt-text-tertiary)]">
        <div className="text-center px-8">
          <p className="text-[28px] font-medium text-[var(--gpt-text)]">
            What can I help with?
          </p>
          <p className="text-sm mt-3 text-[var(--gpt-text-tertiary)] max-w-md mx-auto">
            Leaked emails, court exhibits & internal communications from Musk v. OpenAI, the board crisis, and more.
          </p>
        </div>
        {/* Fake input bar */}
        <div className="w-full max-w-[672px] mt-6 px-4">
          <div className="flex items-center bg-[var(--gpt-input-bg)] rounded-2xl px-4 py-3 border border-[var(--gpt-input-border)]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--gpt-text-tertiary)] mr-3 shrink-0">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            <span className="text-[var(--gpt-text-tertiary)] text-[15px] flex-1 select-none">
              Ask anything
            </span>
            <div className="flex items-center gap-1.5 shrink-0">
              <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--gpt-text-tertiary)]">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                  <line x1="12" y1="19" x2="12" y2="22" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
      {/* Top bar — model selector style */}
      <div className="flex items-center justify-between px-4 py-2 shrink-0">
        {/* Back button — mobile only */}
        <button
          onClick={onBack}
          className="md:hidden shrink-0 w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white/5 transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Center — model selector style title */}
        <div className="flex items-center gap-1 mx-auto md:mx-0">
          <span className="text-[14px] text-[var(--gpt-text)]">
            {thread.subject || "Conversation"}
          </span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-[var(--gpt-text-tertiary)]">
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </div>

        {/* Right side — share & menu */}
        <div className="flex items-center gap-1">
          <span className="text-[12px] text-[var(--gpt-text-tertiary)] hidden sm:inline mr-2">
            {platformLabel} · {thread.dateRange.start.slice(0, 4)}
          </span>
        </div>
      </div>

      {/* Messages — centered max-width like ChatGPT */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-[672px] mx-auto px-4 py-4">
          {/* Date */}
          <div className="flex items-center justify-center mb-6">
            <span className="text-[12px] text-[var(--gpt-text-tertiary)]">
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
            />
          ))}

          {/* Citation */}
          <div className="flex items-center justify-center mt-10 mb-4">
            <div className="text-center text-[11px] text-[var(--gpt-text-tertiary)] max-w-sm leading-relaxed">
              <p>{thread.exhibitSource}</p>
              <p className="mt-0.5 opacity-60">
                Public court exhibits & reporting · Not affiliated with OpenAI
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom input bar */}
      <div className="px-4 py-3 shrink-0">
        <div className="max-w-[672px] mx-auto">
          <div className="flex items-center bg-[var(--gpt-input-bg)] rounded-2xl px-4 py-3 border border-[var(--gpt-input-border)]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--gpt-text-tertiary)] mr-3 shrink-0">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            <span className="text-[var(--gpt-text-tertiary)] text-[15px] flex-1 select-none">
              Ask anything
            </span>
            <div className="flex items-center gap-1.5 shrink-0">
              <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--gpt-text-tertiary)]">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                  <line x1="12" y1="19" x2="12" y2="22" />
                </svg>
              </button>
              <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="black">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
                </svg>
              </button>
            </div>
          </div>
          <p className="text-[11px] text-[var(--gpt-text-tertiary)] text-center mt-2 opacity-50">
            Read-only exhibit archive. Not affiliated with OpenAI.
          </p>
        </div>
      </div>
    </div>
  );
}
