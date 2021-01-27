module.exports = {
  parser: '@babel/eslint-parser',
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      jsx: false,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  babelOptions: {
    configFile: ".babelrc",
  },
  plugins: [
    'react',
  ],
  rules: {
  },
};
