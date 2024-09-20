module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    '@nuxt/eslint-config',
  ],
  'overrides': [],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'vue',
  ],
  'ignorePatterns': ['node_modules/', 'dist/', '.nuxt/', '.output/'],
  'rules': {},
};
