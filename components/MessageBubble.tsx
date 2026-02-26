"use client";

import { Message } from "@/types";
import { people } from "@/data/people";
import { formatFullDate, cn, getInitials, getAvatarColor } from "@/lib/utils";

interface MessageBubbleProps {
  message: Message;
  isFromAltman: boolean;
  isConsecutive: boolean;
}

export function MessageBubble({ message, isFromAltman, isConsecutive }: MessageBubbleProps) {
  const sender = people[message.from] || { name: message.from };
  const senderPerson = sender as { name: string; title?: string; org?: string };
  const initials = getInitials(senderPerson.name);
  const color = getAvatarColor(message.from);

  if (isFromAltman) {
    return (
      <div className={cn("flex justify-end group", isConsecutive ? "mb-1" : "mb-6")}>
        <div className="max-w-[85%]">
          <div
            className={cn(
              "bg-[var(--gpt-bubble-user)] rounded-2xl px-4 py-3 text-[15px] leading-relaxed",
              message.redacted && "opacity-50 italic"
            )}
          >
            {message.text}
          </div>
          <div className="flex justify-end gap-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-[11px] text-[var(--gpt-text-tertiary)]">
              {senderPerson.name}
            </span>
            <span className="text-[11px] text-[var(--gpt-text-tertiary)]">
              {formatFullDate(message.timestamp)}
            </span>
            {message.exhibitRef && (
              <span className="text-[11px] text-[var(--gpt-text-tertiary)]">
                {message.exhibitRef}
              </span>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Other person — left-aligned
  if (isConsecutive) {
    // Grouped follow-up: no avatar, no name, just indented text
    return (
      <div className="mb-1 group">
        <div className="flex items-start gap-3">
          {/* Spacer matching avatar width */}
          <div className="w-7 shrink-0" />
          <div className="flex-1 min-w-0">
            <div
              className={cn(
                "text-[15px] leading-relaxed",
                message.redacted && "opacity-50 italic"
              )}
            >
              {message.text}
            </div>
            <div className="flex gap-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-[11px] text-[var(--gpt-text-tertiary)]">
                {formatFullDate(message.timestamp)}
              </span>
              {message.exhibitRef && (
                <span className="text-[11px] text-[var(--gpt-text-tertiary)]">
                  {message.exhibitRef}
                </span>
              )}
            </div>
            {message.attachmentDesc && (
              <div className="text-[12px] text-[var(--gpt-text-tertiary)] mt-1 italic">
                {message.attachmentDesc}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // First message from this sender (or new sender) — full header with colored initials avatar
  return (
    <div className="mb-1 group mt-5 first:mt-0">
      <div className="flex items-start gap-3">
        {/* Colored initials avatar */}
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-[11px] font-bold text-white"
          style={{ backgroundColor: color }}
        >
          {initials}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[13px] font-semibold mb-1">
            {senderPerson.name}
            {senderPerson.title && (
              <span className="font-normal text-[var(--gpt-text-tertiary)] ml-1.5 text-[12px]">
                {senderPerson.title}
              </span>
            )}
          </p>
          <div
            className={cn(
              "text-[15px] leading-relaxed",
              message.redacted && "opacity-50 italic"
            )}
          >
            {message.text}
          </div>
          <div className="flex gap-2 mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-[11px] text-[var(--gpt-text-tertiary)]">
              {formatFullDate(message.timestamp)}
            </span>
            {message.exhibitRef && (
              <span className="text-[11px] text-[var(--gpt-text-tertiary)]">
                {message.exhibitRef}
              </span>
            )}
          </div>
          {message.attachmentDesc && (
            <div className="text-[12px] text-[var(--gpt-text-tertiary)] mt-1 italic">
              {message.attachmentDesc}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
