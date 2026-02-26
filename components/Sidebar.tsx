"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { Thread } from "@/types";
import { people } from "@/data/people";
import { cn } from "@/lib/utils";

interface SidebarProps {
  threads: Thread[];
  activeThreadId: string | null;
  onSelectThread: (id: string) => void;
}

/**
 * Group threads by time period labels, mimicking ChatGPT's sidebar grouping.
 * Threads are assumed already sorted (newest-first after we reverse them).
 */
function getTimePeriodLabel(dateStr: string): string {
  const d = new Date(dateStr);
  const year = d.getFullYear();
  const month = d.toLocaleDateString("en-US", { month: "long" });

  // Group by "Month Year" for all dates
  return `${month} ${year}`;
}

function groupThreadsByPeriod(threads: Thread[]): { label: string; threads: Thread[] }[] {
  // Reverse to show newest first (threads come in chronological order)
  const reversed = [...threads].reverse();

  const groups: { label: string; threads: Thread[] }[] = [];
  let currentLabel = "";

  for (const thread of reversed) {
    const label = getTimePeriodLabel(thread.dateRange.start);
    if (label !== currentLabel) {
      groups.push({ label, threads: [thread] });
      currentLabel = label;
    } else {
      groups[groups.length - 1].threads.push(thread);
    }
  }

  return groups;
}

export function Sidebar({
  threads,
  activeThreadId,
  onSelectThread,
}: SidebarProps) {
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (showSearch && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showSearch]);

  const filtered = useMemo(() => {
    if (!search) return threads;
    const q = search.toLowerCase();
    return threads.filter((t) => {
      return (
        t.messages.some((m) => m.text.toLowerCase().includes(q)) ||
        t.subject?.toLowerCase().includes(q) ||
        t.participants.some((p) => {
          const person = people[p];
          return (
            p.toLowerCase().includes(q) ||
            person?.name.toLowerCase().includes(q) ||
            person?.org?.toLowerCase().includes(q)
          );
        }) ||
        t.summary?.toLowerCase().includes(q)
      );
    });
  }, [threads, search]);

  const groups = useMemo(() => groupThreadsByPeriod(filtered), [filtered]);

  return (
    <div className="flex flex-col h-full bg-[var(--gpt-sidebar-bg)]">
      {/* Top nav — matching ChatGPT sidebar */}
      <div className="px-2 pt-2.5 pb-1 shrink-0 space-y-0.5">
        {/* Logo row */}
        <div className="flex items-center justify-between px-2 mb-1">
          <div className="flex items-center gap-2">
            {/* OpenAI sparkle */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-[var(--gpt-text)]">
              <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
            </svg>
          </div>
        </div>

        {/* Search toggle */}
        <button
          onClick={() => { setShowSearch(!showSearch); if (showSearch) setSearch(""); }}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-[var(--gpt-text-secondary)] hover:bg-[var(--gpt-sidebar-hover)] transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          Search chats
        </button>
      </div>

      {/* Search input — toggled */}
      {showSearch && (
        <div className="px-3 pb-2">
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search conversations..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[var(--gpt-sidebar-hover)] rounded-lg px-3 py-1.5 text-[13px] outline-none focus:ring-1 focus:ring-white/20 placeholder-[var(--gpt-text-tertiary)]"
          />
        </div>
      )}

      {/* Chat list — grouped by time period like ChatGPT */}
      <div className="flex-1 overflow-y-auto px-2">
        {groups.map((group) => (
          <div key={group.label}>
            {/* Time period header */}
            <div className="px-3 pt-4 pb-1 first:pt-2">
              <span className="text-[12px] text-[var(--gpt-text-tertiary)] font-medium">
                {group.label}
              </span>
            </div>

            {/* Threads in this period */}
            {group.threads.map((thread) => {
              const isActive = thread.id === activeThreadId;
              const otherParticipants = thread.participants
                .filter((p) => p !== "altman")
                .map((p) => people[p]?.name || p);
              const title =
                thread.subject ||
                (otherParticipants.length > 0
                  ? otherParticipants.join(", ")
                  : "Sam Altman (memo)");

              return (
                <button
                  key={thread.id}
                  onClick={() => onSelectThread(thread.id)}
                  className={cn(
                    "w-full text-left px-3 py-2 rounded-lg transition-colors group relative",
                    isActive
                      ? "bg-[var(--gpt-sidebar-active)]"
                      : "hover:bg-[var(--gpt-sidebar-hover)]"
                  )}
                >
                  <p className="text-[14px] truncate text-[var(--gpt-text)]">
                    {title}
                  </p>
                  {/* Fade on right edge for long titles */}
                  {!isActive && (
                    <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[var(--gpt-sidebar-bg)] to-transparent pointer-events-none group-hover:from-[var(--gpt-sidebar-hover)]" />
                  )}
                  {isActive && (
                    <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[var(--gpt-sidebar-active)] to-transparent pointer-events-none" />
                  )}
                </button>
              );
            })}
          </div>
        ))}
        {groups.length === 0 && (
          <div className="text-center text-[var(--gpt-text-tertiary)] text-sm py-8">
            No conversations found
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="px-3 py-2.5 border-t border-[var(--gpt-border)] shrink-0">
        <p className="text-[10px] text-[var(--gpt-text-tertiary)] text-center leading-relaxed">
          Musk v. OpenAI (2024) · Public exhibits · Not affiliated with OpenAI
        </p>
      </div>
    </div>
  );
}
