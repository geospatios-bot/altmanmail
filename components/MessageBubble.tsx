"use client";

import { Message } from "@/types";
import { people } from "@/data/people";
import { formatFullDate, getInitials, cn } from "@/lib/utils";

interface MessageBubbleProps {
  message: Message;
  isFromAltman: boolean;
  showSender?: boolean;
}

export function MessageBubble({
  message,
  isFromAltman,
  showSender = false,
}: MessageBubbleProps) {
  const sender = people[message.from] || { name: message.from };

  return (
    <div
      className={cn(
        "group",
        isFromAltman
          ? "bg-[var(--gpt-bubble-user)] rounded-xl px-4 py-3"
          : "px-4 py-3"
      )}
    >
      {/* Sender row */}
      <div className="flex items-center gap-2 mb-1.5">
        {isFromAltman ? (
          /* User avatar — like ChatGPT "You" */
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-[10px] font-bold text-white shrink-0">
            {getInitials(sender.name)}
          </div>
        ) : (
          /* AI/other avatar — green OpenAI style */
          <div className="w-6 h-6 rounded-full bg-[var(--gpt-green)] flex items-center justify-center shrink-0">
            <span className="text-[10px] font-bold text-white">
              {getInitials(sender.name)}
            </span>
          </div>
        )}
        <span className="text-[13px] font-semibold">
          {sender.name}
        </span>
        {(sender as { title?: string }).title && (
          <span className="text-[11px] text-[var(--gpt-text-tertiary)]">
            {(sender as { title?: string }).title}
          </span>
        )}
      </div>

      {/* Message text */}
      <div
        className={cn(
          "text-[15px] leading-relaxed pl-8",
          message.redacted && "opacity-50 italic"
        )}
      >
        {message.text}
      </div>

      {/* Metadata — shown on hover */}
      <div className="pl-8 mt-1 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-3">
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
        <div className="text-[12px] text-[var(--gpt-text-tertiary)] mt-1 pl-8 italic">
          {message.attachmentDesc}
        </div>
      )}
    </div>
  );
}
