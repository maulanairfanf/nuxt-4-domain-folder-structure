<template>
  <header class="bg-white rounded-lg shadow-md overflow-hidden">
    <!-- Hero Image -->
    <div
      class="h-64 md:h-80 bg-gradient-to-r from-blue-500 to-purple-600 relative"
    >
      <div class="absolute inset-0 bg-black bg-opacity-30" />
      <div class="absolute bottom-6 left-6 right-6">
        <div class="flex flex-wrap gap-2 mb-4">
          <span
            class="inline-block px-3 py-1 bg-white bg-opacity-90 text-xs font-medium text-gray-800 rounded-full"
          >
            Artikel
          </span>
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
            <span class="text-sm">{{ viewCount }} views</span>
          </div>
        </div>

        <!-- Social Sharing -->
        <div class="flex items-center space-x-2 mt-4 sm:mt-0">
          <span class="text-sm text-gray-500 mr-2">Bagikan:</span>
          <button
            class="p-2 text-gray-400 hover:text-blue-600 transition-colors duration-200"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"
              />
            </svg>
          </button>
          <button
            class="p-2 text-gray-400 hover:text-green-600 transition-colors duration-200"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { formatDate } from "../../_lib/formatDate";

const props = defineProps({
  article: {
    type: Object,
    required: true,
  },
});

const formatted = computed(() => formatDate(props.article.date));

// Estimate reading time based on content length
const readingTime = computed(() => {
  const content = props.article.content || props.article.excerpt || "";
  const words = content.replace(/<[^>]*>/g, "").split(" ").length;
  return Math.ceil(words / 200) || 1;
});

// Mock view count - in real app this would come from analytics
const viewCount = computed(() => {
  return Math.floor(Math.random() * 1000) + 100;
});
</script>
