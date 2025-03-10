/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");
module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier",
    "plugin:storybook/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  ignorePatterns: ["**/*.config.cjs", "**/*.config.ts", "**/tokens/**/*.ts"],
  rules: {
    "prettier/prettier": "error",
  },
};
