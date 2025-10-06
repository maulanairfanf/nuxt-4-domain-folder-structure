// pages/articles/[articleId]/_utils/index.ts
import { COMMENT_CONFIG, SOCIAL_URLS } from "../_constants";
import type { ShareOptions } from "../_types";

// Share utilities
export const generateShareUrl = (
  platform: string,
  options: ShareOptions,
): string => {
  const { title, text, url } = options;

  switch (platform) {
    case "twitter":
      return `${SOCIAL_URLS.TWITTER}?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    case "facebook":
      return `${SOCIAL_URLS.FACEBOOK}?u=${encodeURIComponent(url)}`;
    case "linkedin":
      return `${SOCIAL_URLS.LINKEDIN}?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
    default:
      return url;
  }
};

// Copy to clipboard utility
export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(text);
      return true;
    }

    // Fallback untuk browser lama
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.select();
    const success = document.execCommand("copy");
    document.body.removeChild(textArea);
    return success;
  } catch (error) {
    console.error("Failed to copy to clipboard:", error);
    return false;
  }
};

// Comment validation
export const validateComment = (
  content: string,
): { isValid: boolean; error?: string } => {
  const trimmed = content.trim();

  if (trimmed.length < COMMENT_CONFIG.MIN_LENGTH) {
    return {
      isValid: false,
      error: `Komentar minimal ${COMMENT_CONFIG.MIN_LENGTH} karakter`,
    };
  }

  if (trimmed.length > COMMENT_CONFIG.MAX_LENGTH) {
    return {
      isValid: false,
      error: `Komentar maksimal ${COMMENT_CONFIG.MAX_LENGTH} karakter`,
    };
  }

  return { isValid: true };
};

// Format comment date untuk display
export const formatCommentDate = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);

  if (diffInHours < 1) {
    const minutes = Math.floor(diffInHours * 60);
    return `${minutes} menit yang lalu`;
  } else if (diffInHours < 24) {
    const hours = Math.floor(diffInHours);
    return `${hours} jam yang lalu`;
  } else if (diffInHours < 168) {
    // 7 days
    const days = Math.floor(diffInHours / 24);
    return `${days} hari yang lalu`;
  } else {
    return date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }
};

// Generate comment ID
export const generateCommentId = (): number => {
  return Date.now() + Math.random() * 1000;
};

// Smooth scroll to element
export const scrollToElement = (
  elementId: string,
  offset: number = 0,
): void => {
  const element = document.getElementById(elementId);
  if (element) {
    const top = element.offsetTop - offset;
    window.scrollTo({
      top,
      behavior: "smooth",
    });
  }
};

// Detect if user is on mobile
export const isMobileDevice = (): boolean => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );
};

// Generate article URL for sharing
export const generateArticleUrl = (articleId: string): string => {
  if (typeof window !== "undefined") {
    return `${window.location.origin}/articles/${articleId}`;
  }
  return `/articles/${articleId}`;
};

// Sanitize HTML untuk keamanan (basic)
export const sanitizeHtml = (html: string): string => {
  // Basic sanitization - dalam production gunakan DOMPurify
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/javascript:/gi, "")
    .replace(/on\w+\s*=/gi, "");
};
