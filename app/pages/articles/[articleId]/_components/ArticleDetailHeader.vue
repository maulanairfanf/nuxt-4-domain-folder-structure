<template>
  <header class="bg-white rounded-lg shadow-md overflow-hidden">
    <!-- Hero Image -->
    <div
      class="h-64 md:h-80 bg-gradient-to-r from-blue-500 to-purple-600 relative"
    >
      <div class="absolute inset-0 bg-black bg-opacity-30" />
      <div class="absolute bottom-6 left-6 right-6">
        <div class="flex flex-wrap gap-2 mb-4">
          <button
            class="inline-block px-3 py-1 bg-white bg-opacity-90 text-xs font-medium text-gray-800 rounded-full hover:bg-opacity-100 transition-colors cursor-pointer"
            @click="handleCategoryClick"
          >
            {{ article.category }}
          </button>
          <span
            class="inline-block px-3 py-1 bg-blue-600 text-xs font-medium text-white rounded-full"
          >
            {{ readingTime }} min baca
          </span>
        </div>
      </div>
    </div>

    <!-- Article Info -->
    <div class="p-6">
      <h1
        class="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight"
      >
        {{ article.title }}
      </h1>

      <!-- Article Metadata -->
      <div class="flex flex-wrap items-center justify-between mb-6">
        <div class="flex items-center space-x-4 text-gray-600">
          <div class="flex items-center">
            <svg
              class="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0h6m-6 0a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V9a2 2 0 00-2-2"
              />
            </svg>
            <span class="text-sm">{{ formatted }}</span>
          </div>
          <div class="flex items-center">
            <svg
              class="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            <span class="text-sm">{{ views }} views</span>
          </div>
        </div>

        <!-- Actions -->
        <div class="flex items-center space-x-2 mt-4 sm:mt-0">
          <!-- Like Button -->
          <button
            class="flex items-center px-3 py-1 rounded-full border transition-colors"
            :class="{
              'bg-red-50 border-red-200 text-red-600': isLiked,
              'bg-gray-50 border-gray-200 text-gray-600 hover:text-red-600': !isLiked
            }"
            @click="toggleLike"
          >
            <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            {{ likes }}
          </button>

          <!-- Bookmark Button -->
          <button
            class="flex items-center px-3 py-1 rounded-full border transition-colors"
            :class="{
              'bg-blue-50 border-blue-200 text-blue-600': isBookmarked,
              'bg-gray-50 border-gray-200 text-gray-600 hover:text-blue-600': !isBookmarked
            }"
            @click="toggleBookmark"
          >
            <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
            </svg>
            Save
          </button>

          <!-- Share Button -->
          <button
            class="flex items-center px-3 py-1 rounded-full border bg-gray-50 border-gray-200 text-gray-600 hover:text-green-600 transition-colors"
            @click="handleShare"
          >
            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"/>
            </svg>
            Share
          </button>
        </div>
      </div>

      <!-- Tags Section -->
      <div v-if="article.tags && article.tags.length > 0" class="px-6 pb-6">
        <div class="flex flex-wrap gap-2">
          <button
            v-for="tag in article.tags"
            :key="tag"
            class="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors cursor-pointer"
            @click="handleTagClick(tag)"
          >
            #{{ tag }}
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import type { ArticleDetailProps } from '../_types'
import { useArticleDetail, useArticleNavigation } from '../_composables'
import { formatDate } from '~/utils'

const props = defineProps<ArticleDetailProps>()

// Use domain composables
const { 
  likes, 
  views, 
  isBookmarked, 
  isLiked,
  toggleLike, 
  toggleBookmark, 
  shareArticle,
  initializeFromArticle 
} = useArticleDetail()

const { goToCategory, goToTag } = useArticleNavigation()

// Initialize data from article
onMounted(() => {
  initializeFromArticle(props.article)
})

// Computed properties
const formatted = computed(() => formatDate(props.article.date))
const readingTime = computed(() => props.article.readingTime || 5)

// Event handlers
const handleCategoryClick = () => {
  goToCategory(props.article.category)
}

const handleTagClick = (tag: string) => {
  goToTag(tag)
}

const handleShare = () => {
  shareArticle(props.article)
}
</script>
