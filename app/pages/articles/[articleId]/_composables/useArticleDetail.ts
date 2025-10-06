// pages/articles/[articleId]/_composables/useArticleDetail.ts
import type { Article } from "../../_types";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../_constants";
import { copyToClipboard, generateArticleUrl } from "../_utils";

export const useArticleDetail = () => {
  const isBookmarked = ref(false);
  const likes = ref(0);
  const views = ref(0);
  const isLiked = ref(false);
  const isSharing = ref(false);

  // Toggle bookmark
  const toggleBookmark = () => {
    isBookmarked.value = !isBookmarked.value;
    // Simulate API call
    console.log(
      `Article ${isBookmarked.value ? "bookmarked" : "unbookmarked"}`,
    );
  };

  // Toggle like
  const toggleLike = () => {
    if (isLiked.value) {
      likes.value--;
    } else {
      likes.value++;
    }
    isLiked.value = !isLiked.value;

    // Simulate API call
    console.log(
      `Article ${isLiked.value ? "liked" : "unliked"}, total likes: ${likes.value}`,
    );
  };

  // Share article
  const shareArticle = async (article: Article) => {
    isSharing.value = true;

    try {
      const shareUrl = generateArticleUrl(article.id);
      const shareData = {
        title: article.title,
        text: article.excerpt,
        url: shareUrl,
      };

      if (navigator.share) {
        await navigator.share(shareData);
        console.log(SUCCESS_MESSAGES.LINK_COPIED);
      } else {
        // Fallback: copy to clipboard
        const success = await copyToClipboard(shareUrl);
        if (success) {
          console.log(SUCCESS_MESSAGES.LINK_COPIED);
        } else {
          console.error(ERROR_MESSAGES.SHARE_FAILED);
        }
      }
    } catch (error) {
      console.error(ERROR_MESSAGES.SHARE_FAILED, error);
    } finally {
      isSharing.value = false;
    }
  };

  // Increment views (call this on page load)
  const incrementViews = () => {
    views.value++;
    // Simulate API call for analytics
    console.log(`Page view recorded, total views: ${views.value}`);
  };

  // Initialize data from article
  const initializeFromArticle = (article: Article) => {
    likes.value = article.likes || 0;
    views.value = article.views || 0;
    isBookmarked.value = article.isBookmarked || false;
  };

  return {
    // State
    isBookmarked,
    likes,
    views,
    isLiked,
    isSharing,

    // Actions
    toggleBookmark,
    toggleLike,
    shareArticle,
    incrementViews,
    initializeFromArticle,
  };
};

export const useArticleNavigation = () => {
  const router = useRouter();

  const goBack = () => {
    if (window.history.length > 1) {
      router.go(-1);
    } else {
      router.push("/articles");
    }
  };

  const goToArticles = () => {
    router.push("/articles");
  };

  const goToCategory = (category: string) => {
    router.push(`/articles?category=${encodeURIComponent(category)}`);
  };

  const goToTag = (tag: string) => {
    router.push(`/articles?tag=${encodeURIComponent(tag)}`);
  };

  return {
    goBack,
    goToArticles,
    goToCategory,
    goToTag,
  };
};
