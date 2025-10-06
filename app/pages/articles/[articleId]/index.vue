<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-8 max-w-4xl">
      <!-- Breadcrumb Navigation -->
      <nav class="flex items-center space-x-2 text-sm text-gray-500 mb-8">
        <NuxtLink
          to="/"
          class="hover:text-blue-600 transition-colors duration-200"
          >Home</NuxtLink
        >
        <svg
          class="w-4 h-4"
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
        <NuxtLink
          to="/articles"
          class="hover:text-blue-600 transition-colors duration-200"
          >Artikel</NuxtLink
        >
        <svg
          class="w-4 h-4"
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
        <span class="text-gray-800 font-medium">{{
          article?.title || "Detail Artikel"
        }}</span>
      </nav>

      <!-- Error State -->
      <div v-if="error" class="text-center py-12">
        <div class="text-red-400 mb-4">
          <svg
            class="w-16 h-16 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-gray-700 mb-2">
          Terjadi Kesalahan
        </h3>
        <p class="text-gray-500 mb-4">{{ error.message }}</p>
        <NuxtLink
          to="/articles"
          class="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
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
          Kembali ke Daftar Artikel
        </NuxtLink>
      </div>

      <!-- Loading State -->
      <div v-else-if="pending" class="text-center py-12">
        <div
          class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"
        />
        <p class="mt-4 text-gray-500">Memuat artikel...</p>
      </div>

      <!-- Article Content -->
      <div v-else-if="article" class="space-y-8">
        <ArticleHeader :article="article" />
        <ArticleContent :article="article" />
        <ArticleComments :article-id="article.id" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ArticleHeader from "./_components/ArticleDetailHeader.vue";
import ArticleContent from "./_components/ArticleDetailContent.vue";
import ArticleComments from "./_components/ArticleDetailComments.vue";
import type { Article } from "../_types";

const route = useRoute();
const articleId = route.params.articleId as string;

 const fetchDetail = (
  id: string,
): Promise<Article & { content: string }> => {
  return $fetch(`/api/articles/${id}`);
};

const {
  data: article,
  pending,
  error,
} = await useAsyncData<Article & { content: string }>(`article-${articleId}`, () =>
  fetchDetail(articleId),
);
</script>
