// server/api/articles.get.ts
export default defineEventHandler(() => {
  return [
    {
      id: "1",
      title: "Belajar Nuxt 4 — Struktur folder",
      excerpt: "Contoh struktur folder by-domain...",
      date: "2025-09-01",
    },
    {
      id: "2",
      title: "Nuxt tips & tricks",
      excerpt: "Beberapa tips untuk routing dan fetch...",
      date: "2025-09-10",
    },
  ];
});
