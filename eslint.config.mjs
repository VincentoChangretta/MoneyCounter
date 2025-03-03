import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'; // Импортируем плагин react-hooks

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended, // Конфигурация для JS
  ...tseslint.configs.recommended, // Конфигурация для TypeScript
  pluginReact.configs.flat.recommended, // Конфигурация для React
  {
    plugins: {
      prettier: eslintPluginPrettier, // Плагин Prettier
      'react-hooks': eslintPluginReactHooks, // Плагин для react-hooks
    },
    rules: {
      'prettier/prettier': 'error',
      'react-hooks/rules-of-hooks': 'error', // Применяем правило для хуков
      'react-hooks/exhaustive-deps': 'warn',
      indent: ['error', 2],
      'no-undef': 'warn',
      'react/react-in-jsx-scope': 'off',
      'no-unused-vars': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-require-imports': 'off',
    },
    ignores: ['build/**'],
  },
];
