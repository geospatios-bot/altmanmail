import { ChatApp } from "@/components/ChatApp";
import { threads } from "@/data/threads";
import { people } from "@/data/people";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ chatId: string }>;
}

export function generateStaticParams() {
  return threads.map((t) => ({ chatId: t.id }));
}

export async function generateMetadata({ params }: Props) {
  const { chatId } = await params;
  const thread = threads.find((t) => t.id === chatId);
  if (!thread) return { title: "Not Found — AltmanMail" };

  const otherParticipants = thread.participants
    .filter((p) => p !== "altman")
    .map((p) => people[p]?.name || p);

  return {
    title: `${thread.subject || otherParticipants.join(", ")} — AltmanMail`,
    description: thread.summary || thread.exhibitSource,
  };
}

export default async function ChatPage({ params }: Props) {
  const { chatId } = await params;
  const thread = threads.find((t) => t.id === chatId);
  if (!thread) notFound();
  return <ChatApp initialThreadId={chatId} />;
}
