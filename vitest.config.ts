import { defineVitestProject } from "@nuxt/test-utils/config";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    projects: [
      {
        test: {
          name: "unit",
          include: ["test/unit/**/*.{test,spec}.ts"], // ✅ Hanya unit
          environment: "node",
        },
      },
      await defineVitestProject({
        test: {
          name: "nuxt",
          include: ["test/nuxt/**/*.{test,spec}.ts"], // ✅ Hanya nuxt
          environment: "nuxt",
        },
      }),
      {
        test: {
          name: "e2e",
          include: ["test/e2e/**/*.{test,spec}.ts"], // ✅ Hanya e2e
          environment: "node",
        },
      },
    ],
  },
});
