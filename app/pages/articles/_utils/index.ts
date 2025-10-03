import { formatDate } from "~/utils";

// Simple utilities untuk domain articles
export function calculateReadingTime(content: string): number {
  const words = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return Math.max(minutes, 1);
}

export function getRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
  
  if (diffHours < 24) return `${diffHours} jam yang lalu`;
  const diffDays = Math.floor(diffHours / 24);
  if (diffDays < 7) return `${diffDays} hari yang lalu`;
  
  return formatDate(dateString);
}