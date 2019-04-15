module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: "@callstack",
  // globals: {
  //   Atomics: 'readonly',
  //   SharedArrayBuffer: 'readonly',
  // },
  // parserOptions: {
  //   ecmaFeatures: {
  //     jsx: true,
  //   },
  //   ecmaVersion: 2018,
  //   sourceType: 'module',
  // },
  rules: {
    "react-native/no-raw-text": "off",
    "react-native/no-inline-styles": "off",
  },
};
