/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:astro/recommended',
    'plugin:astro/jsx-a11y-strict',
    'plugin:lit/recommended',
    'plugin:svelte/recommended',
    'plugin:wc/recommended',
    'plugin:wc/best-practice',
    'plugin:tailwindcss/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
    extraFileExtensions: ['.astro', '.svelte']
  },
  plugins: ['@typescript-eslint', 'prettier', 'tailwindcss'],
  rules: {
    'prettier/prettier': 'warn',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
    '@typescript-eslint/consistent-type-exports': 'warn',
    '@typescript-eslint/default-param-last': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-confusing-void-expression': [
      'error',
      { 'ignoreArrowShorthand': true }
    ],
    '@typescript-eslint/no-inferrable-types': 'warn',
    '@typescript-eslint/no-import-type-side-effects': 'error',
    '@typescript-eslint/no-misused-promises': [
      'error',
      { 'checksVoidReturn': false }
    ],
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        'allowTaggedTemplates': true,
        'allowTernary': true
      }
    ],
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/prefer-readonly': 'warn',
    '@typescript-eslint/require-array-sort-compare': 'error',
    '@typescript-eslint/strict-boolean-expressions': 'error',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    'arrow-body-style': ['warn', 'as-needed'],
    'camelcase': 'warn',
    'default-param-last': 'off',
    'eqeqeq': ['warn', 'always', { 'null': 'ignore' }],
    'func-style': ['warn'],
    'lit/no-useless-template-literals': 'warn',
    'lit/quoted-expressions': 'warn',
    'max-statements-per-line': ['warn', { 'max': 1 }],
    'no-console': 'warn',
    'no-constructor-return': 'error',
    'no-duplicate-imports': 'error',
    'no-empty-function': 'warn',
    'no-invalid-this': 'error',
    'no-loop-func': 'error',
    'no-new-func': 'error',
    'no-return-await': 'warn',
    'no-script-url': 'error',
    'no-self-compare': 'warn',
    'no-template-curly-in-string': 'warn',
    'no-throw-literal': 'error',
    'no-undefined': 'warn',
    'no-unneeded-ternary': 'warn',
    'no-unused-expressions': 'off',
    'no-use-before-define': 'off',
    'no-useless-concat': 'warn',
    'no-useless-constructor': 'warn',
    'no-useless-return': 'warn',
    'no-useless-rename': 'warn',
    'no-unreachable-loop': 'error',
    'no-var': 'error',
    'operator-assignment': ['warn', 'always'],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'warn',
    'prefer-spread': 'warn',
    'prefer-template': 'warn',
    'yoda': ['error', 'never', { 'exceptRange': false }]
  },
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser'
      },
      rules: {
        'prettier/prettier': 'warn',
        '@typescript-eslint/consistent-type-imports': 'error',
        '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
        '@typescript-eslint/consistent-type-exports': 'warn',
        '@typescript-eslint/default-param-last': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-confusing-void-expression': [
          'error',
          { 'ignoreArrowShorthand': true }
        ],
        '@typescript-eslint/no-inferrable-types': 'warn',
        '@typescript-eslint/no-import-type-side-effects': 'error',
        '@typescript-eslint/no-misused-promises': [
          'error',
          { 'checksVoidReturn': false }
        ],
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-unused-expressions': [
          'error',
          {
            'allowTaggedTemplates': true,
            'allowTernary': true
          }
        ],
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/prefer-readonly': 'warn',
        '@typescript-eslint/require-array-sort-compare': 'error',
        '@typescript-eslint/strict-boolean-expressions': 'error',
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        'arrow-body-style': ['warn', 'as-needed'],
        'astro/semi': ['error', 'always'],
        'astro/no-set-text-directive': 'warn',
        'astro/prefer-class-list-directive': 'warn',
        'astro/prefer-object-class-list': 'warn',
        'astro/prefer-split-class-list': 'warn',
        'camelcase': 'warn',
        'default-param-last': 'off',
        'eqeqeq': ['warn', 'always', { 'null': 'ignore' }],
        'func-style': ['warn'],
        'max-statements-per-line': ['warn', { 'max': 1 }],
        'no-console': 'warn',
        'no-constructor-return': 'error',
        'no-duplicate-imports': 'error',
        'no-empty-function': 'warn',
        'no-invalid-this': 'error',
        'no-loop-func': 'error',
        'no-new-func': 'error',
        'no-return-await': 'warn',
        'no-script-url': 'error',
        'no-self-compare': 'warn',
        'no-template-curly-in-string': 'warn',
        'no-throw-literal': 'error',
        'no-undefined': 'warn',
        'no-unneeded-ternary': 'warn',
        'no-unused-expressions': 'off',
        'no-use-before-define': 'off',
        'no-useless-concat': 'warn',
        'no-useless-constructor': 'warn',
        'no-useless-return': 'warn',
        'no-useless-rename': 'warn',
        'no-unreachable-loop': 'error',
        'no-var': 'error',
        'operator-assignment': ['warn', 'always'],
        'prefer-arrow-callback': 'error',
        'prefer-const': 'warn',
        'prefer-spread': 'warn',
        'prefer-template': 'warn',
        'yoda': ['error', 'never', { 'exceptRange': false }]
      }
    },
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser'
      },
      rules: {
        'prettier/prettier': 'warn',
        '@typescript-eslint/consistent-type-imports': 'error',
        '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
        '@typescript-eslint/consistent-type-exports': 'warn',
        '@typescript-eslint/default-param-last': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-confusing-void-expression': [
          'error',
          { 'ignoreArrowShorthand': true }
        ],
        '@typescript-eslint/no-inferrable-types': 'warn',
        '@typescript-eslint/no-import-type-side-effects': 'error',
        '@typescript-eslint/no-misused-promises': [
          'error',
          { 'checksVoidReturn': false }
        ],
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-unused-expressions': [
          'error',
          {
            'allowTaggedTemplates': true,
            'allowTernary': true
          }
        ],
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/prefer-readonly': 'warn',
        '@typescript-eslint/require-array-sort-compare': 'error',
        '@typescript-eslint/strict-boolean-expressions': 'error',
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        'arrow-body-style': ['warn', 'as-needed'],
        'camelcase': 'warn',
        'default-param-last': 'off',
        'eqeqeq': ['warn', 'always', { 'null': 'ignore' }],
        'func-style': ['warn'],
        'max-statements-per-line': ['warn', { 'max': 1 }],
        'no-console': 'warn',
        'no-constructor-return': 'error',
        'no-duplicate-imports': 'error',
        'no-empty-function': 'warn',
        'no-invalid-this': 'error',
        'no-loop-func': 'error',
        'no-new-func': 'error',
        'no-return-await': 'warn',
        'no-script-url': 'error',
        'no-self-compare': 'warn',
        'no-template-curly-in-string': 'warn',
        'no-throw-literal': 'error',
        'no-undefined': 'warn',
        'no-unneeded-ternary': 'warn',
        'no-unused-expressions': 'off',
        'no-use-before-define': 'off',
        'no-useless-concat': 'warn',
        'no-useless-constructor': 'warn',
        'no-useless-return': 'warn',
        'no-useless-rename': 'warn',
        'no-unreachable-loop': 'error',
        'no-var': 'error',
        'operator-assignment': ['warn', 'always'],
        'prefer-arrow-callback': 'error',
        'prefer-const': 'warn',
        'prefer-spread': 'warn',
        'prefer-template': 'warn',
        'svelte/block-lang': [
          'error',
          {
            'script': 'ts'
          }
        ],
        'svelte/html-closing-bracket-spacing': [
          'warn',
          {
            'startTag': 'never',
            'endTag': 'never',
            'selfClosingTag': 'always'
          }
        ],
        'svelte/infinite-reactive-loop': 'warn',
        'svelte/indent': ['warn', { 'indent': 2 }],
        'svelte/mustache-spacing': 'warn',
        'svelte/no-dom-manipulating': 'error',
        'svelte/no-dupe-on-directives': 'error',
        'svelte/no-dupe-style-properties': 'error',
        'svelte/no-dupe-use-directives': 'error',
        'svelte/no-reactive-functions': 'warn',
        'svelte/no-reactive-reassign': 'warn',
        'svelte/no-spaces-around-equal-signs-in-attribute': 'warn',
        'svelte/no-target-blank': 'warn',
        'svelte/no-trailing-spaces': 'warn',
        'svelte/no-useless-mustaches': 'error',
        'svelte/prefer-class-directive': 'warn',
        'svelte/prefer-destructured-store-props': 'warn',
        'svelte/prefer-style-directive': 'warn',
        'svelte/shorthand-attribute': 'warn',
        'svelte/shorthand-directive': 'warn',
        'svelte/require-event-dispatcher-types': 'warn',
        'svelte/require-store-reactive-access': 'warn',
        'yoda': ['error', 'never', { 'exceptRange': false }]
      }
    }
  ]
};
