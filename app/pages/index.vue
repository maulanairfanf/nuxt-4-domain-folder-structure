<template>
  <div class="min-h-screen flex justify-center items-center bg-gray-50">
    <NuxtLink
      to="/articles"
      class="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      Go To Articles
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
  </div>
</template>

<script setup lang="ts"></script>
