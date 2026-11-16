import react from 'eslint-plugin-react';

export default [
  { ignores: ['dist/**', 'node_modules/**'] },
  {
    files: ['src/**/*.{js,jsx}'],
    languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } },
    plugins: { react },
    rules: { 'no-unused-vars': 'error', 'no-undef': 'error', 'react/jsx-uses-vars': 'error' },
    settings: { react: { version: 'detect' } },
  },
  { files: ['src/**/*.{js,jsx}'], languageOptions: { globals: Object.fromEntries(['window','document','Audio','fetch','URL','Image','AbortController'].map(key => [key, 'readonly'])) } },
];
