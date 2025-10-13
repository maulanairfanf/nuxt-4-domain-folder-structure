import type { Article } from "../../_types";

// Types spesifik untuk article detail page
export interface ArticleDetailState {
  isBookmarked: boolean;
  likes: number;
  views: number;
  isLiked: boolean;
  isSharing: boolean;
  isLoading: boolean;
}

export interface ShareOptions {
  title: string;
  text: string;
  url: string;
}

export interface CommentData {
  id: number;
  author: string;
  content: string;
  date: string;
  likes: number;
  isLiked: boolean;
  canDelete: boolean;
  replies?: CommentData[];
}

export interface ArticleDetailProps {
  article: Article;
}

export interface NavigationItem {
  label: string;
  href: string;
  isActive?: boolean;
}

// Action types for article interactions
export type ArticleAction =
  | "like"
  | "unlike"
  | "bookmark"
  | "unbookmark"
  | "share"
  | "view";

export interface ArticleInteractionEvent {
  action: ArticleAction;
  articleId: string;
  timestamp: Date;
}
