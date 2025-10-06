// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/ui"],
  css: ["~/assets/css/main.css"],
  eslint: {
    config: {
      stylistic: true,
    },
  },
  ignore: [
    "**/_types/**",
    "**/_utils/**",
    "**/_constants/**",
    "**/_composables/**",
    "**/_components/**",
    "**/_lib/**",
    "**/_locales/**",
  ],
});
