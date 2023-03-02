module.exports = {
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "prettier",
    "plugin:cypress/recommended",
    "@vue/eslint-config-typescript",
  ],
  plugins: ["cypress", "vitest"],
  rules: {},
};
