<template>
  <article class="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
    <!-- Article Image Placeholder -->
    <div class="h-48 bg-gradient-to-r from-blue-500 to-purple-600 relative overflow-hidden">
      <div class="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300" />
      <div class="absolute bottom-4 left-4 right-4">
        <span class="inline-block px-3 py-1 bg-white bg-opacity-90 text-xs font-medium text-gray-800 rounded-full">
          {{ formatDate(article.date) }}
        </span>
      </div>
    </div>
    
    <!-- Article Content -->
    <div class="p-6">
      <h2 class="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
        <NuxtLink :to="`/articles/${article.id}`" class="hover:underline">
          {{ article.title }}
        </NuxtLink>
      </h2>
      
      <p class="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
        {{ article.excerpt }}
      </p>
      
      <!-- Read More Button -->
      <div class="flex items-center justify-between">
        <NuxtLink 
          :to="`/articles/${article.id}`" 
          class="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Baca Selengkapnya
          <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </NuxtLink>
        
        <!-- Reading Time Estimate -->
        <span class="text-xs text-gray-400 flex items-center">
          <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {{ readingTime }} min baca
        </span>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
// 🎯 BUKTI: 3 CARA IMPORT YANG PASTI BERFUNGSI DI NUXT 3

// ✅ Cara 1: Relative path (SELALU berfungsi, tidak perlu config apapun)
// import { formatDate } from '../_lib/formatDate';

// ✅ Cara 2: Nuxt tilde alias (BUILT-IN, tidak perlu setup)  
import { formatDate } from '~/pages/articles/_lib/formatDate';

// ✅ Cara 3: Centralized utils (BEST PRACTICE)
import { estimateReadingTime, type Article } from '~/utils';

const props = defineProps<{
  article: Article;
}>();

// Reading time calculation
const readingTime = computed(() => estimateReadingTime(props.article.excerpt));
</script>