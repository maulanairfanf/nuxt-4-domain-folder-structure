<template>
  <article
    class="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
  >
    <!-- Article Image Placeholder -->
    <div
      class="h-48 bg-gradient-to-r from-blue-500 to-purple-600 relative overflow-hidden"
    >
      <div
        class="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"
      />
      <div class="absolute bottom-4 left-4 right-4">
        <span
          class="inline-block px-3 py-1 bg-white bg-opacity-90 text-xs font-medium text-gray-800 rounded-full"
        >
          {{ formattedDate }}
        </span>
      </div>
    </div>

    <!-- Article Content -->
    <div class="p-6">
      <div>
        <h2
          class="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300"
        >
          <NuxtLink :to="`/articles/${article.id}`" class="hover:underline">
            {{ article.title }}
          </NuxtLink>
        </h2>
        <span
          v-for="value in article.tags"
          :key="value"
          class="inline-block px-2 py-1 bg-gray-100 text-xs font-medium text-gray-600 rounded-full mr-2"
        >
          #{{ value }}
        </span>
      </div>

      <p class="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
        {{ article.excerpt }}
      </p>

      <!-- Article Meta -->
      <div class="flex items-center justify-between text-sm text-gray-500 mb-4">
        <span class="flex items-center">
          <svg
            class="w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          {{ article.author }}
        </span>
        <span class="bg-gray-100 px-2 py-1 rounded-full text-xs">{{
          article.category
        }}</span>
      </div>

      <!-- Stats -->
      <div class="flex items-center justify-between text-xs text-gray-400 mb-4">
        <div class="flex items-center space-x-4">
          <span class="flex items-center">
            <svg
              class="w-4 h-4 mr-1"
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
            {{ article.viewCount }}
          </span>
          <button
            class="flex items-center hover:text-red-500 transition-colors"
            @click="toggleLike"
          >
            <svg
              class="w-4 h-4 mr-1"
              :class="{ 'text-red-500 fill-current': isLiked }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            {{ likeCount }}
          </button>
        </div>
        <span class="flex items-center">
          <svg
            class="w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {{ readingTime }} min baca
        </span>
      </div>

      <!-- Read More Button -->
      <div class="flex items-center justify-between">
        <NuxtLink
          :to="`/articles/${article.id}`"
          class="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Baca Selengkapnya
          <svg
            class="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </NuxtLink>

        <span class="text-xs text-gray-400">
          {{ relativeTime }}
        </span>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
// Import dari domain articles
import { useArticleFormat, useArticleLike } from "../_composables";
import type { Article } from "../_types";

const props = defineProps<{
  article: Article;
}>();

// Format artikel menggunakan composable
const articleRef = ref(props.article);
const { readingTime, formattedDate, relativeTime } =
  useArticleFormat(articleRef);

// Like functionality
const { isLiked, likeCount, toggleLike } = useArticleLike(
  props.article.likeCount,
);
</script>
