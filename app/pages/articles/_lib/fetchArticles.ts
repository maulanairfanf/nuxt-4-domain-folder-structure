export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
}

export const fetchArticles = (): Promise<Article[]> => {
  return $fetch("/api/articles");
};
