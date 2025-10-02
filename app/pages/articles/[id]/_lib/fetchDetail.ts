import type { Article } from "../../_lib/fetchArticles";

export const fetchDetail = (
  id: string,
): Promise<Article & { content: string }> => {
  return $fetch(`/api/articles/${id}`);
};
