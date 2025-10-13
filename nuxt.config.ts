// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/eslint", "@nuxt/ui", "@nuxt/test-utils/module"],
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  ignore: [
    "**/_types/**",
    "**/_utils/**",
    "**/_constants/**",
    "**/_composables/**",
    "**/_components/**",
    "**/_lib/**",
    "**/_locales/**",
  ],
  compatibilityDate: "2025-07-15",
  eslint: {
    config: {
      stylistic: true,
    },
  },
});
