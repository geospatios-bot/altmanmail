import { Thread } from "@/types";
import { threadsBatch1 } from "./threads-batch1";
import { threadsBatch2 } from "./threads-batch2";
import { threadsBatch3 } from "./threads-batch3";
import { threadsBatch4 } from "./threads-batch4";
import { threadsBatch5 } from "./threads-batch5";
import { threadsBatch6 } from "./threads-batch6";
import { threadsBatch7 } from "./threads-batch7";

export const threads: Thread[] = [...threadsBatch1, ...threadsBatch2, ...threadsBatch3, ...threadsBatch4, ...threadsBatch5, ...threadsBatch6, ...threadsBatch7].sort(
  (a, b) => a.dateRange.start.localeCompare(b.dateRange.start)
);

export function getThread(id: string): Thread | undefined {
  return threads.find((t) => t.id === id);
}

export function getAllTags(): string[] {
  const tagSet = new Set<string>();
  threads.forEach((t) => t.tags?.forEach((tag) => tagSet.add(tag)));
  return Array.from(tagSet).sort();
}
