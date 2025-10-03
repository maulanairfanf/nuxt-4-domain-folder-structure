// Simple types untuk domain articles
export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  readingTime: number;
  likes: number;
  views: number;
  isBookmarked?: boolean;
  // Legacy support
  viewCount?: number;
  likeCount?: number;
}

export interface ArticleFilters {
  search?: string;
  category?: string;
  sortBy?: 'date' | 'title' | 'views' | 'likes';
}

export interface Author {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
  socialLinks: SocialLinks;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  color: string;
  icon?: string;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
  color?: string;
}

export interface ArticleMetadata {
  readingTime: number;
  wordCount: number;
  viewCount: number;
  likeCount: number;
  commentCount: number;
  shareCount: number;
}

export interface SEOData {
  metaTitle?: string;
  metaDescription?: string;
  keywords: string[];
  ogImage?: string;
  canonicalUrl?: string;
}

export interface SocialLinks {
  twitter?: string;
  linkedin?: string;
  github?: string;
  website?: string;
}

export type ArticleStatus = 'draft' | 'published' | 'archived' | 'featured';
export type SortBy = 'date' | 'title' | 'views' | 'likes';
export type SortOrder = 'asc' | 'desc';

// API Response types
export interface ArticlesResponse {
  articles: Article[];
  filters: FilterOptions;
}

export interface FilterOptions {
  categories: Category[];
  tags: Tag[];
  authors: Author[];
}

export interface ArticleFilters {
  search?: string;
  category?: string;
  tag?: string;
  author?: string;
  status?: ArticleStatus;
  sortBy?: SortBy;
  sortOrder?: SortOrder;
}

// Comment system types
export interface Comment {
  id: string;
  articleId: string;
  author: CommentAuthor;
  content: string;
  createdAt: string;
  updatedAt?: string;
  parentId?: string;
  replies?: Comment[];
  isApproved: boolean;
}

export interface CommentAuthor {
  name: string;
  email: string;
  website?: string;
  avatar?: string;
}

// Form types
export interface ArticleFormData {
  title: string;
  excerpt: string;
  content: string;
  categoryId: string;
  tagIds: string[];
  status: ArticleStatus;
  seo: Partial<SEOData>;
}

export interface CommentFormData {
  name: string;
  email: string;
  website?: string;
  content: string;
  parentId?: string;
}