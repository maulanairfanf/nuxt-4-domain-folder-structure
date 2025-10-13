// server/api/articles.get.ts
export default defineEventHandler(() => {
  return [
    {
      id: "1",
      title: "Belajar Nuxt 4 — Struktur folder by Domain",
      excerpt:
        "Panduan lengkap mengorganisir kode Nuxt dengan struktur folder berdasarkan domain business untuk maintainability yang lebih baik.",
      content:
        "Dalam artikel ini, kita akan membahas cara mengorganisir kode Nuxt dengan struktur folder by domain. Pendekatan ini membantu dalam maintainability dan scalability aplikasi...",
      date: "2024-12-15T10:00:00Z",
      author: "John Doe",
      category: "Technology",
      viewCount: 245,
      likeCount: 18,
      tags: ["nuxt", "vue", "architecture", "best-practices"],
    },
    {
      id: "2",
      title: "Nuxt Tips & Tricks untuk Developer",
      excerpt:
        "Kumpulan tips dan trik berguna untuk mengoptimalkan pengembangan aplikasi Nuxt, dari routing hingga performance optimization.",
      content:
        "Berikut adalah beberapa tips yang bisa membantu Anda dalam mengembangkan aplikasi Nuxt. Tips ini mencakup routing, fetch data, dan optimasi performance...",
      date: "2024-12-10T14:30:00Z",
      author: "Jane Smith",
      category: "Design",
      viewCount: 189,
      likeCount: 25,
      tags: ["nuxt", "vue", "architecture", "best-practices"],
    },
    {
      id: "3",
      title: "Vue 3 Composition API Best Practices",
      excerpt:
        "Best practices dalam menggunakan Composition API untuk membangun aplikasi Vue 3 yang lebih maintainable dan reusable.",
      content:
        "Composition API adalah fitur baru di Vue 3 yang memberikan cara yang lebih fleksibel untuk mengorganisir logic komponen...",
      date: "2024-12-05T09:15:00Z",
      author: "Mike Johnson",
      category: "Business",
      viewCount: 312,
      likeCount: 42,
      tags: ["nuxt", "vue", "architecture", "best-practices"],
    },
  ];
});
