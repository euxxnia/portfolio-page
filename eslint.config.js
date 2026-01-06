import react from '@woohm402/eslint-config-react';

export default [
  {
    ignores: [
      'eslint.config.js',
      '.yarn',
      'node_modules/**',
      'dist/**',
      'dist-ssr/**',
    ],
  },
  ...react({
    tsconfigRootDir: import.meta.dirname,
  }),
];
