<template>
  <article class="bg-white rounded-lg shadow-md">
    <div class="p-6 md:p-8">
      <!-- Article content - Using v-html for rich content display -->
      <!-- Note: In production, ensure article.content is properly sanitized on the server -->
      <div class="prose prose-lg max-w-none" v-html="sanitizedContent" />
    </div>

    <!-- Article Footer -->
    <div class="px-6 md:px-8 pb-6 border-t border-gray-100">
      <div class="flex flex-wrap items-center justify-between pt-6">
        <!-- Tags -->
        <div class="flex flex-wrap gap-2 mb-4 sm:mb-0">
          <span
            class="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
          >
            #nuxt
          </span>
          <span
            class="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
          >
            #tutorial
          </span>
          <span
            class="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
          >
            #webdev
          </span>
        </div>

        <!-- Back to Articles Button -->
        <NuxtLink
          to="/articles"
          class="inline-flex items-center px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-300"
        >
          <svg
            class="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Kembali ke Artikel
        </NuxtLink>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
const props = defineProps<{
  article: { content: string };
}>();

// Basic sanitization - in production use a proper sanitization library
const sanitizedContent = computed(() => {
  // For now, just return the content as-is since it comes from our own API
  // In production, use DOMPurify or similar library for proper sanitization
  return props.article.content;
});
</script>
