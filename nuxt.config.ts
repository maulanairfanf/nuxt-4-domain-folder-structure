// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/ui"],
  css: ["~/assets/css/main.css"],
  
  // Alias untuk path yang lebih pendek (tetap berguna)
  alias: {
    '@utils': '~/utils',
    '@components': '~/components',
  }
});
