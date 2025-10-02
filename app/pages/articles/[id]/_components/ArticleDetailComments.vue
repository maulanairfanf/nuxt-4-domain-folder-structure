<template>
  <section class="bg-white rounded-lg shadow-md">
    <div class="p-6 md:p-8">
      <div class="flex items-center justify-between mb-6">
        <h3 class="text-2xl font-bold text-gray-800">Diskusi</h3>
        <span class="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
          {{ commentCount }} komentar
        </span>
      </div>

      <!-- Comment Form -->
      <div class="mb-8 p-4 bg-gray-50 rounded-lg">
        <h4 class="font-semibold text-gray-800 mb-4">Tinggalkan Komentar</h4>
        <div class="space-y-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Nama Anda"
              class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
            >
            <input
              type="email"
              placeholder="Email Anda"
              class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
            >
          </div>
          <textarea
            rows="4"
            placeholder="Tulis komentar Anda di sini..."
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200 resize-none"
          />
          <div class="flex justify-end">
            <button
              class="inline-flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
              Kirim Komentar
            </button>
          </div>
        </div>
      </div>

      <!-- Placeholder for Comments -->
      <div class="space-y-4">
        <div class="text-center py-8 text-gray-500">
          <svg
            class="w-12 h-12 mx-auto mb-4 text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          <p class="text-lg font-medium mb-2">Belum ada komentar</p>
          <p class="text-sm">
            Jadilah yang pertama memberikan komentar untuk artikel ini!
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  articleId: string;
}>();

// Mock comment count - in real app this would come from API
const commentCount = ref(0);
</script>
