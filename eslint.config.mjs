import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
    },
  },
  {
    languageOptions: {
      globals: globals.node,
    },
    plugins: ['prettier'], // prettier integration
    extends: [pluginJs.configs.recommended, 'plugin:prettier/recommended'],
    rules: {
      'prettier/prettier': 'error',
    },
  },
];
