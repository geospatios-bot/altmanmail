export type Platform = "email" | "im" | "slack" | "signal" | "sms" | "memo";

export interface Message {
  id: string;
  from: string;
  text: string;
  timestamp: string;
  exhibitRef?: string;
  redacted?: boolean;
  attachmentDesc?: string;
}

export interface Thread {
  id: string;
  subject?: string;
  participants: string[];
  messages: Message[];
  platform: Platform;
  dateRange: { start: string; end: string };
  summary?: string;
  exhibitSource: string;
  tags?: string[];
}

export interface Person {
  name: string;
  title?: string;
  org?: string;
  avatar?: string;
}
