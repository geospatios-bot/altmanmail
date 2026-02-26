"use client";

import { useState, useRef, useEffect } from "react";
import { Thread } from "@/types";
import { people } from "@/data/people";
import { getAllTags } from "@/data/threads";
import { cn } from "@/lib/utils";

interface SidebarProps {
  threads: Thread[];
  activeThreadId: string | null;
  onSelectThread: (id: string) => void;
}

const FEATURED_TAGS = [
  "musk-v-openai",
  "board-crisis",
  "microsoft",
  "safety",
  "anthropic",
  "gpt-4",
  "funding",
  "google",
  "congress",
  "nonprofit",
  "departures",
  "nda",
];

export function Sidebar({
  threads,
  activeThreadId,
  onSelectThread,
}: SidebarProps) {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [showAllTags, setShowAllTags] = useState(false);
  const allTags = getAllTags();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setShowAllTags(false);
      }
    }
    if (showAllTags) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [showAllTags]);

  const filtered = threads.filter((t) => {
    const q = search.toLowerCase();
    const matchesSearch =
      !search ||
      t.messages.some((m) => m.text.toLowerCase().includes(q)) ||
      t.subject?.toLowerCase().includes(q) ||
      t.participants.some((p) => p.toLowerCase().includes(q)) ||
      t.summary?.toLowerCase().includes(q);

    const matchesTag = !activeTag || t.tags?.includes(activeTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="flex flex-col h-full bg-[var(--gpt-sidebar-bg)]">
      {/* Header */}
      <div className="px-3 pt-3 pb-2 shrink-0">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            {/* OpenAI sparkle icon */}
            <div className="w-7 h-7 rounded-full bg-[var(--gpt-green)] flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
              </svg>
            </div>
            <h1 className="text-sm font-semibold">AltmanMail</h1>
          </div>
          <span className="text-[11px] text-[var(--gpt-text-tertiary)] tabular-nums">
            {filtered.length}/{threads.length}
          </span>
        </div>

        {/* Search */}
        <div className="relative mb-2">
          <svg
            className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[var(--gpt-text-tertiary)]"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            type="text"
            placeholder="Search conversations..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[var(--gpt-bg-hover)] rounded-lg pl-8 pr-3 py-1.5 text-[13px] outline-none focus:ring-1 focus:ring-[var(--gpt-green)] placeholder-[var(--gpt-text-tertiary)]"
          />
        </div>

        {/* Tag pills */}
        <div className="relative" ref={dropdownRef}>
          <div className="flex gap-1 overflow-x-auto pb-1 scrollbar-hide">
            <button
              onClick={() => setActiveTag(null)}
              className={cn(
                "text-[11px] px-2 py-[3px] rounded-md transition-colors shrink-0 font-medium",
                !activeTag
                  ? "bg-[var(--gpt-green)] text-white"
                  : "bg-[var(--gpt-bg-hover)] text-[var(--gpt-text-secondary)] hover:text-[var(--gpt-text)]"
              )}
            >
              All
            </button>
            {FEATURED_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                className={cn(
                  "text-[11px] px-2 py-[3px] rounded-md transition-colors shrink-0",
                  activeTag === tag
                    ? "bg-[var(--gpt-green)] text-white font-medium"
                    : "bg-[var(--gpt-bg-hover)] text-[var(--gpt-text-secondary)] hover:text-[var(--gpt-text)]"
                )}
              >
                {tag}
              </button>
            ))}
            {allTags.length > FEATURED_TAGS.length && (
              <button
                onClick={() => setShowAllTags(!showAllTags)}
                className="text-[11px] px-2 py-[3px] rounded-md transition-colors shrink-0 bg-[var(--gpt-bg-hover)] text-[var(--gpt-text-tertiary)] hover:text-[var(--gpt-text)]"
              >
                +{allTags.length - FEATURED_TAGS.length}
              </button>
            )}
          </div>

          {showAllTags && (
            <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-[var(--gpt-sidebar-bg)] border border-[var(--gpt-border)] rounded-lg shadow-2xl max-h-[300px] overflow-y-auto p-2">
              <div className="flex flex-wrap gap-1">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => {
                      setActiveTag(activeTag === tag ? null : tag);
                      setShowAllTags(false);
                    }}
                    className={cn(
                      "text-[11px] px-2 py-0.5 rounded-md transition-colors",
                      activeTag === tag
                        ? "bg-[var(--gpt-green)] text-white"
                        : "bg-[var(--gpt-bg-hover)] text-[var(--gpt-text-secondary)] hover:text-[var(--gpt-text)]"
                    )}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {activeTag && (
          <div className="flex items-center gap-2 mt-1">
            <button
              onClick={() => setActiveTag(null)}
              className="text-[11px] px-2 py-0.5 rounded-md bg-[var(--gpt-green)] text-white flex items-center gap-1"
            >
              {activeTag}
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Thread list */}
      <div className="flex-1 overflow-y-auto px-2">
        {filtered.map((thread) => {
          const isActive = thread.id === activeThreadId;
          const otherParticipants = thread.participants
            .filter((p) => p !== "altman")
            .map((p) => people[p]?.name || p);
          const title =
            thread.subject ||
            (otherParticipants.length > 0
              ? otherParticipants.join(", ")
              : "Sam Altman (memo)");
          const preview =
            thread.summary ||
            thread.messages[0]?.text.slice(0, 80) + "...";

          return (
            <button
              key={thread.id}
              onClick={() => onSelectThread(thread.id)}
              className={cn(
                "w-full text-left px-3 py-2.5 rounded-lg mb-0.5 transition-colors group",
                isActive
                  ? "bg-[var(--gpt-bg-hover)]"
                  : "hover:bg-[var(--gpt-bg-hover)]/50"
              )}
            >
              <p className="text-[13px] font-medium truncate text-[var(--gpt-text)]">
                {title}
              </p>
              <p className="text-[12px] text-[var(--gpt-text-tertiary)] truncate mt-0.5">
                {preview}
              </p>
            </button>
          );
        })}
        {filtered.length === 0 && (
          <div className="text-center text-[var(--gpt-text-tertiary)] text-sm py-8">
            No conversations found
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="px-3 py-2 border-t border-[var(--gpt-border)] text-center shrink-0">
        <p className="text-[10px] text-[var(--gpt-text-tertiary)]">
          Source: Musk v. OpenAI (2024) · Public exhibits & reporting · Not affiliated with OpenAI
        </p>
      </div>
    </div>
  );
}
