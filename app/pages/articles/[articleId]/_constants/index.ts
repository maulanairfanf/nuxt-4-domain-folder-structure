// pages/articles/[articleId]/_constants/index.ts

// UI Constants untuk article detail
export const ARTICLE_DETAIL_ACTIONS = {
  LIKE: 'like',
  BOOKMARK: 'bookmark', 
  SHARE: 'share',
  COMMENT: 'comment'
} as const

// Share platform options
export const SHARE_PLATFORMS = {
  NATIVE: 'native',
  CLIPBOARD: 'clipboard',
  TWITTER: 'twitter',
  FACEBOOK: 'facebook',
  LINKEDIN: 'linkedin'
} as const

// Comment constants
export const COMMENT_CONFIG = {
  MAX_LENGTH: 1000,
  MIN_LENGTH: 10,
  MAX_NESTING_LEVEL: 3
} as const

// Animation durations (ms)
export const ANIMATIONS = {
  LIKE_BOUNCE: 300,
  SHARE_FADE: 200,
  BOOKMARK_SCALE: 250,
  SCROLL_TO_COMMENT: 800
} as const

// Breakpoints untuk responsive design
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280
} as const

// Social sharing URLs
export const SOCIAL_URLS = {
  TWITTER: 'https://twitter.com/intent/tweet',
  FACEBOOK: 'https://www.facebook.com/sharer/sharer.php',
  LINKEDIN: 'https://www.linkedin.com/sharing/share-offsite'
} as const

// Error messages spesifik untuk detail page
export const ERROR_MESSAGES = {
  ARTICLE_NOT_FOUND: 'Artikel tidak ditemukan',
  SHARE_FAILED: 'Gagal membagikan artikel',
  BOOKMARK_FAILED: 'Gagal menyimpan bookmark',
  COMMENT_FAILED: 'Gagal menambahkan komentar',
  NETWORK_ERROR: 'Koneksi bermasalah, coba lagi'
} as const

// Success messages
export const SUCCESS_MESSAGES = {
  ARTICLE_LIKED: 'Artikel disukai!',
  ARTICLE_BOOKMARKED: 'Artikel disimpan!',
  LINK_COPIED: 'Link berhasil disalin',
  COMMENT_ADDED: 'Komentar berhasil ditambahkan'
} as const