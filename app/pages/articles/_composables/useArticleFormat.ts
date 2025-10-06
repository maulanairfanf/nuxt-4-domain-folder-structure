// pages/articles/_composables/useArticleFormat.ts
import type { Article } from "../_types";
import { calculateReadingTime, getRelativeTime } from "../_utils";
import { formatDate } from "~/utils";

export function useArticleFormat(article: Ref<Article>) {
  const readingTime = computed(() => {
    return calculateReadingTime(article.value.content);
  });

  const formattedDate = computed(() => {
    return formatDate(article.value.date);
  });

  const relativeTime = computed(() => {
    return getRelativeTime(article.value.date);
  });

  return {
    readingTime,
    formattedDate,
    relativeTime,
  };
}
