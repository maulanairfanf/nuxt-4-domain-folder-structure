// pages/articles/_composables/useArticleLike.ts
export function useArticleLike(initialCount: number = 0) {
  const isLiked = ref(false);
  const likeCount = ref(initialCount);

  const toggleLike = () => {
    isLiked.value = !isLiked.value;
    likeCount.value += isLiked.value ? 1 : -1;
  };

  return {
    isLiked,
    likeCount,
    toggleLike
  };
}
