<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-8 max-w-4xl">
      <!-- Header Section -->
      <div class="text-center mb-10">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">Daftar Artikel</h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Temukan artikel-artikel menarik dan bermanfaat yang telah kami kurasi
          khusus untuk Anda
        </p>
      </div>
      <!-- Articles Section -->
      <ArticleList :articles="articles || []" />

      <!-- Loading State -->
      <div v-if="!articles" class="text-center py-8">
        <div
          class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"
        />
        <p class="mt-4 text-gray-500">Memuat artikel...</p>
      </div>

      <!-- Empty State -->
      <div v-else-if="articles.length === 0" class="text-center py-12">
        <div class="text-gray-400 mb-4">
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
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-gray-700 mb-2">
          Belum Ada Artikel
        </h3>
        <p class="text-gray-500">
          Artikel akan segera hadir. Silakan kembali lagi nanti!
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAsyncData } from "nuxt/app";

import ArticleList from "./_components/ArticleList.vue";
import type { Article } from "./_types";

// Fetch data dari server API
const { data: articles } = await useAsyncData<Article[]>("articles", () =>
  $fetch("/api/articles"),
);
</script>
