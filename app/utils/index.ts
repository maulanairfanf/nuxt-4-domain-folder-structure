// Utility functions yang bisa digunakan di seluruh aplikasi
export const estimateReadingTime = (content: string): number => {
  const words = content.replace(/<[^>]*>/g, "").split(" ").length;
  return Math.ceil(words / 200) || 1;
};

export const generateViewCount = (): number => {
  return Math.floor(Math.random() * 1000) + 100;
};

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
