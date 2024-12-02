/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: { globals: globals.browser },
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off", // Desactiva esta regla
      "react/react-in-jsx-scope": "off"
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
];
