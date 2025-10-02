// server/api/articles/[id].get.ts
export default defineEventHandler(event => {
  const id = event.context.params?.id;
  const data = [
    {
      id: "1",
      title: "Belajar Nuxt 4 — Struktur folder",
      content: "Isi lengkap artikel 1...",
      date: "2025-09-01",
    },
    {
      id: "2",
      title: "Nuxt tips & tricks",
      content: "Isi lengkap artikel 2...",
      date: "2025-09-10",
    },
  ];
  const found = data.find(a => a.id === id);
  if (!found) {
    // simple 404
    throw createError({ statusCode: 404, statusMessage: "Not found" });
  }
  return found;
});
