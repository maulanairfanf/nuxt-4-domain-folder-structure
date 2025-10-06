// @ts-check
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt()
  .append({
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "warn",
      "import/order": [
        "warn",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      "sort-imports": ["warn", { ignoreDeclarationSort: true }],
    },
  })
  .append(prettierConfig);
