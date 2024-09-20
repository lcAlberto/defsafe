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
  'rules': {
    'vue/html-comment-indent': ['error', 0],
    'vue/html-indent': ['error', 2, {
      'attribute': 1,
      'baseIndent': 1,
      'closeBracket': 0,
      'alignAttributesVertically': true,
      'ignores': [],
    }],
    'vue/no-v-html': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/require-prop-types': 'off',
    'vue/no-template-shadow': 'off',
    'vue/v-on-event-hyphenation': [2, 'never'],
    'eslint-disable-next-line': 'off',
    'vue/max-attributes-per-line': ['error', {
      'singleline': {
        'max': 1,
      },
      'multiline': {
        'max': 1,
      },
    }],
    'no-unused-vars': 0,
    'no-console': [1, {allow: ['warn', 'error']}],
    'no-undef': 0,
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': [2, {
      'before': false,
      'after': true,
    }],
    'comma-style': [2, 'last'],
    'indent': [2, 2, {
      'SwitchCase': 1,
    }],
    'eol-last': ['error', 'always'],
    'no-multiple-empty-lines': ['error', {'max': 1, 'maxEOF': 0}],
    'vue/no-dupe-keys': ['error'],
  },
};
