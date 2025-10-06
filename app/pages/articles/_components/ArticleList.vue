<template>
  <div class="space-y-6">
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
      <ArticleCard v-for="a in articles" :key="a.id" :article="a" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Article } from "../_types";

import ArticleCard from "./ArticleCard.vue";

defineProps<{
  articles: Article[];
}>();
</script>
