module.exports = {
	root: true,
  env: {
    browser: true, node: true
  },
  parser: '@typescript-eslint/parser',
	extends: [
		'eslint:recommended',
    'plugin:astro/recommended',
    'plugin:solid/typescript',
		'plugin:svelte/recommended',
		'plugin:@typescript-eslint/recommended'
	],
	plugins: ['@typescript-eslint'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte']
	},
  rules: {
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/no-unused-vars': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    'comma-dangle': ['error', 'never'],
    'eol-last': ['error', 'never'],
    'no-extra-boolean-cast': 'error',
    'no-unused-vars': [1, { 'args': 'none' }],
    'quotes': ['warn', 'single',  {
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }],
    'semi': 'error'
  },
	overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro']
      },
      rules: {
        '@typescript-eslint/consistent-type-imports': 'error',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/no-unused-vars': 'off',
        'arrow-body-style': ['error', 'as-needed'],
        'comma-dangle': ['error', 'never'],
        'eol-last': ['error', 'never'],
        'no-extra-boolean-cast': 'error',
        'no-unused-vars': [1, { 'args': 'none' }],
        'quotes': ['warn', 'single',  {
          'avoidEscape': true,
          'allowTemplateLiterals': true
        }],
        'semi': 'error'
      }
    },
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser'
      },
      rules: {
        '@typescript-eslint/consistent-type-imports': 'error',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/no-unused-vars': 'off',
        'arrow-body-style': ['error', 'as-needed'],
        'comma-dangle': ['error', 'never'],
        'eol-last': ['error', 'never'],
        'no-extra-boolean-cast': 'error',
        'no-unused-vars': [1, { 'args': 'none' }],
        'quotes': ['warn', 'single',  {
          'avoidEscape': true,
          'allowTemplateLiterals': true
        }],
        'semi': 'error'
      }
    }
  ]
};