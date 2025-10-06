// server/api/articles/[id].get.ts
export default defineEventHandler((event) => {
  const id = event.context.params?.id;

  const articlesData = [
    {
      id: "1",
      title: "Belajar Nuxt 4 — Struktur folder by Domain",
      excerpt:
        "Panduan lengkap mengorganisir kode Nuxt dengan struktur folder berdasarkan domain business untuk maintainability yang lebih baik.",
      content: `
        <h1>Mengapa Struktur Folder by Domain?</h1>
        <p>Dalam pengembangan aplikasi yang kompleks, organisasi kode menjadi sangat penting. Struktur folder by domain membantu kita dalam:</p>
        <ul>
          <li><strong>Maintainability:</strong> Kode lebih mudah dipelihara dan diubah</li>
          <li><strong>Scalability:</strong> Mudah menambah fitur baru tanpa mengubah struktur existing</li>
          <li><strong>Team Collaboration:</strong> Developer dapat fokus pada domain spesifik</li>
        </ul>
        
        <h2>Implementasi di Nuxt 4</h2>
        <p>Berikut adalah cara mengimplementasikan struktur folder by domain di Nuxt 4:</p>
        <pre><code>pages/
  articles/
    _components/     # Komponen khusus articles
    _composables/    # Logic reusable
    _types/         # Type definitions
    _utils/         # Utility functions
    _constants/     # Constants
    index.vue       # List articles
    [id]/           # Detail articles
      index.vue</code></pre>
        
        <h3>Keuntungan Pendekatan Ini</h3>
        <p>Dengan struktur ini, setiap domain memiliki semua yang dibutuhkan dalam satu tempat, memudahkan development dan maintenance.</p>
      `,
      date: "2024-12-15T10:00:00Z",
      author: "John Doe",
      category: "Technology",
      tags: ["nuxt", "vue", "architecture", "best-practices"],
      readingTime: 8,
      likes: 18,
      views: 245,
      isBookmarked: false,
    },
    {
      id: "2",
      title: "Nuxt Tips & Tricks untuk Developer",
      excerpt:
        "Kumpulan tips dan trik berguna untuk mengoptimalkan pengembangan aplikasi Nuxt, dari routing hingga performance optimization.",
      content: `
        <h1>Tips & Tricks Nuxt Development</h1>
        <p>Berikut adalah kumpulan tips yang akan membantu Anda dalam mengembangkan aplikasi Nuxt:</p>
        
        <h2>1. Auto-imports</h2>
        <p>Nuxt 4 memiliki fitur auto-import yang powerful:</p>
        <pre><code>// Tidak perlu import lagi!
// import { ref, computed } from 'vue'
// import { useFetch } from 'nuxt/app'

const data = ref([])
const { data: articles } = await useFetch('/api/articles')</code></pre>
        
        <h2>2. Server Directory</h2>
        <p>Gunakan server directory untuk API endpoints:</p>
        <ul>
          <li><code>server/api/</code> untuk REST endpoints</li>
          <li><code>server/middleware/</code> untuk server middleware</li>
          <li><code>server/plugins/</code> untuk server plugins</li>
        </ul>
        
        <h2>3. Performance Optimization</h2>
        <p>Beberapa tips untuk meningkatkan performance:</p>
        <blockquote>Gunakan <code>useLazyFetch</code> untuk data yang tidak critical di SSR</blockquote>
      `,
      date: "2024-12-10T14:30:00Z",
      author: "Jane Smith",
      category: "Development",
      tags: ["nuxt", "tips", "performance", "optimization"],
      readingTime: 5,
      likes: 25,
      views: 189,
      isBookmarked: true,
    },
    {
      id: "3",
      title: "Vue 3 Composition API Best Practices",
      excerpt:
        "Best practices dalam menggunakan Composition API untuk membangun aplikasi Vue 3 yang lebih maintainable dan reusable.",
      content: `
        <h1>Composition API Best Practices</h1>
        <p>Composition API adalah salah satu fitur terbesar di Vue 3. Berikut adalah best practices untuk menggunakannya:</p>
        
        <h2>1. Organizer Logic dengan Composables</h2>
        <p>Pisahkan logic ke dalam composables yang reusable:</p>
        <pre><code>// composables/useCounter.ts
export const useCounter = () => {
  const count = ref(0)
  const increment = () => count.value++
  const decrement = () => count.value--
  
  return { count, increment, decrement }
}</code></pre>
        
        <h2>2. Reactive vs Ref</h2>
        <p>Gunakan <code>ref</code> untuk primitive values dan <code>reactive</code> untuk objects:</p>
        <ul>
          <li><code>ref(0)</code> untuk numbers, strings, booleans</li>
          <li><code>reactive({})</code> untuk objects dan arrays</li>
        </ul>
        
        <h2>3. Computed Properties</h2>
        <p>Gunakan computed untuk derived state:</p>
        <pre><code>const fullName = computed(() => 
  \`\${firstName.value} \${lastName.value}\`
)</code></pre>
      `,
      date: "2024-12-05T09:15:00Z",
      author: "Mike Johnson",
      category: "Vue",
      tags: ["vue3", "composition-api", "javascript", "best-practices"],
      readingTime: 12,
      likes: 42,
      views: 312,
      isBookmarked: false,
    },
  ];

  const found = articlesData.find((article) => article.id === id);

  if (!found) {
    throw createError({ statusCode: 404, statusMessage: "Article not found" });
  }

  return found;
});
