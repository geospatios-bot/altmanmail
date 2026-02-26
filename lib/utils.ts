export function cn(...classes: (string | false | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export function formatFullDate(timestamp: string) {
  return new Date(timestamp).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export function formatShortDate(timestamp: string) {
  const d = new Date(timestamp);
  const now = new Date();
  const diffYears = now.getFullYear() - d.getFullYear();
  if (diffYears > 0) {
    return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  }
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export function getInitials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

const AVATAR_COLORS = [
  "#E06C75", // red
  "#61AFEF", // blue
  "#C678DD", // purple
  "#56B6C2", // cyan
  "#E5C07B", // yellow
  "#98C379", // green
  "#D19A66", // orange
  "#BE5046", // dark red
  "#7C8EF2", // indigo
  "#4EC9B0", // teal
  "#CE9178", // salmon
  "#B267E6", // violet
  "#6CC644", // lime
  "#E88B49", // tangerine
  "#55B5DB", // sky
];

export function getAvatarColor(id: string): string {
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = id.charCodeAt(i) + ((hash << 5) - hash);
  }
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}
