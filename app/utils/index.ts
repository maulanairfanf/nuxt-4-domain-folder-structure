// Re-export utilities untuk import yang lebih mudah
export { formatDate } from '~/pages/articles/_lib/formatDate';
export type { Article } from '~/pages/articles/_lib/fetchArticles';

// Utility functions yang bisa digunakan di seluruh aplikasi
export const estimateReadingTime = (content: string): number => {
  const words = content.replace(/<[^>]*>/g, "").split(" ").length;
  return Math.ceil(words / 200) || 1;
};

export const generateViewCount = (): number => {
  return Math.floor(Math.random() * 1000) + 100;
};