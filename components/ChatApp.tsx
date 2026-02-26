"use client";

import { useRouter } from "next/navigation";
import { Sidebar } from "@/components/Sidebar";
import { ConversationView } from "@/components/ConversationView";
import { threads, getThread } from "@/data/threads";

interface ChatAppProps {
  initialThreadId?: string | null;
}

export function ChatApp({ initialThreadId = null }: ChatAppProps) {
  const router = useRouter();
  const activeThread = initialThreadId
    ? getThread(initialThreadId) ?? null
    : null;

  function handleSelectThread(id: string) {
    router.push(`/c/${id}`, { scroll: false });
  }

  function handleBack() {
    router.push("/", { scroll: false });
  }

  return (
    <main className="flex h-[100dvh] overflow-hidden bg-[var(--gpt-bg)]">
      <div
        className={`w-full md:w-[260px] shrink-0 ${
          initialThreadId ? "hidden md:flex" : "flex"
        } flex-col h-full`}
      >
        <Sidebar
          threads={threads}
          activeThreadId={initialThreadId}
          onSelectThread={handleSelectThread}
        />
      </div>
      <div
        className={`flex-1 min-w-0 ${
          !initialThreadId ? "hidden md:flex" : "flex"
        } flex-col h-full`}
      >
        <ConversationView thread={activeThread} onBack={handleBack} />
      </div>
    </main>
  );
}
