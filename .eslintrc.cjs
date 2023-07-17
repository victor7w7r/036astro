module.exports = {
	root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:astro/recommended',
    'plugin:astro/jsx-a11y-strict',
    'plugin:lit/recommended',
		'plugin:svelte/recommended',
    'plugin:wc/recommended',
    'plugin:wc/best-practice'
	],
  parser: '@typescript-eslint/parser',
	parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
		sourceType: 'module',
		ecmaVersion: 2021,
		extraFileExtensions: ['.svelte']
	},
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
    '@typescript-eslint/consistent-type-exports': 'warn',
    '@typescript-eslint/default-param-last': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/member-delimiter-style': ['warn', {
      'multiline': {
        'delimiter': 'comma',
        'requireLast': false
      },
      'singleline': {
        'delimiter': 'comma',
        'requireLast': false
      }
    }],
    '@typescript-eslint/no-confusing-void-expression': ['error', {
      'ignoreArrowShorthand': true
    }],
    '@typescript-eslint/no-inferrable-types': 'warn',
    '@typescript-eslint/no-import-type-side-effects': 'error',
    '@typescript-eslint/no-misused-promises': ['error', {
      'checksVoidReturn': false
    }],
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-unused-expressions': ['error', {
      'allowTaggedTemplates': true,
      'allowTernary': true
    }],
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/require-array-sort-compare': 'error',
    '@typescript-eslint/prefer-readonly': 'warn',
    '@typescript-eslint/strict-boolean-expressions': 'error',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    '@typescript-eslint/type-annotation-spacing': 'warn',
    'array-bracket-spacing': ['warn', 'never'],
    'arrow-body-style': ['warn', 'as-needed'],
    'arrow-spacing': ['warn', { 'before': true, 'after': true }],
    'block-spacing': ['warn', 'always'],
    'brace-style': ['warn', '1tbs', { 'allowSingleLine': true }],
    'camelcase': 'warn',
    'comma-dangle': ['warn', 'never'],
    'comma-spacing': ['warn', { 'before': false, 'after': true }],
    'default-param-last': 'off',
    'dot-location': ['error', 'property'],
    'eol-last': ['warn', 'never'],
    'eqeqeq': ['warn', 'always', { 'null': 'ignore' }],
    'func-call-spacing': ['error', 'never'],
    'func-style': ['warn'],
    'jsx-quotes': ['warn', 'prefer-single'],
    'key-spacing': ['warn', { 'beforeColon': false, 'afterColon': true }],
    'keyword-spacing': ['warn', {
      'overrides': {
        'if': { 'after': false },
        'for': { 'after': false },
        'while': { 'after': false },
        'switch': { 'after': false }
      }
    }],
    'lit/no-useless-template-literals': 'warn',
    'lit/quoted-expressions': 'warn',
    'max-statements-per-line': ['warn', { 'max': 1 }],
    'new-parens': ['error', 'always'],
    'no-confusing-arrow': 'warn',
    'no-console': 'warn',
    'no-constructor-return': 'error',
    'no-duplicate-imports': 'error',
    'no-empty-function': 'warn',
    'no-invalid-this': 'error',
    'no-loop-func': 'error',
    'no-mixed-operators': 'warn',
    'no-multi-spaces': 'warn',
    'no-new-func': 'error',
    'no-return-await': 'warn',
    'no-script-url': 'error',
    'no-self-compare': 'warn',
    'no-template-curly-in-string': 'warn',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'warn',
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
    'no-whitespace-before-property': 'error',
    'object-curly-spacing': ['warn', 'always', {
      'arraysInObjects': false,
      'objectsInObjects': false
    }],
    'operator-assignment': ['warn', 'always'],
    'operator-linebreak': ['warn', 'after', {
      'overrides': {
        '?': 'before', ':': 'before',
        '&&': 'before', '||': 'before'
      }
    }],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'warn',
    'prefer-spread': 'warn',
    'prefer-template': 'warn',
    'quotes': ['warn', 'single', {
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }],
    'rest-spread-spacing': ['error', 'never'],
    'semi': 'error',
    'semi-spacing': 'error',
    'semi-style': ['error', 'last'],
    'space-before-blocks': ['warn', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-in-parens': ['warn', 'never'],
    'switch-colon-spacing': ['error', { 'after': true, 'before': false }],
    'template-tag-spacing': ['warn', 'never'],
    'template-curly-spacing': ['warn', 'never'],
    'yoda': ['error', 'never', { 'exceptRange': false }]
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
        '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
        '@typescript-eslint/consistent-type-exports': 'warn',
        '@typescript-eslint/default-param-last': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/member-delimiter-style': ['warn', {
          'multiline': {
            'delimiter': 'comma',
            'requireLast': false
          },
          'singleline': {
            'delimiter': 'comma',
            'requireLast': false
          }
        }],
        '@typescript-eslint/no-confusing-void-expression': ['error', {
          'ignoreArrowShorthand': true
        }],
        '@typescript-eslint/no-inferrable-types': 'warn',
        '@typescript-eslint/no-import-type-side-effects': 'error',
        '@typescript-eslint/no-misused-promises': ['error', {
          'checksVoidReturn': false
        }],
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-unused-expressions': ['error', {
          'allowTaggedTemplates': true,
          'allowTernary': true
        }],
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/require-array-sort-compare': 'error',
        '@typescript-eslint/prefer-readonly': 'warn',
        '@typescript-eslint/strict-boolean-expressions': 'error',
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        '@typescript-eslint/type-annotation-spacing': 'warn',
        'astro/semi': ['error', 'always'],
        'astro/no-set-text-directive': 'warn',
        'astro/prefer-class-list-directive': 'warn',
        'astro/prefer-object-class-list': 'warn',
        'astro/prefer-split-class-list': 'warn',
        'array-bracket-spacing': ['warn', 'never'],
        'arrow-body-style': ['warn', 'as-needed'],
        'arrow-spacing': ['warn', { 'before': true, 'after': true }],
        'block-spacing': ['warn', 'always'],
        'brace-style': ['warn', '1tbs', { 'allowSingleLine': true }],
        'camelcase': 'warn',
        'comma-dangle': ['warn', 'never'],
        'comma-spacing': ['warn', { 'before': false, 'after': true }],
        'default-param-last': 'off',
        'dot-location': ['error', 'property'],
        'eol-last': ['warn', 'never'],
        'eqeqeq': ['warn', 'always', { 'null': 'ignore' }],
        'func-call-spacing': ['error', 'never'],
        'func-style': ['warn'],
        'jsx-quotes': ['warn', 'prefer-single'],
        'key-spacing': ['warn', { 'beforeColon': false, 'afterColon': true }],
        'keyword-spacing': ['warn', {
          'overrides': {
            'if': { 'after': false },
            'for': { 'after': false },
            'while': { 'after': false },
            'switch': { 'after': false }
          }
        }],
        'max-statements-per-line': ['warn', { 'max': 1 }],
        'new-parens': ['error', 'always'],
        'no-confusing-arrow': 'warn',
        'no-console': 'warn',
        'no-constructor-return': 'error',
        'no-duplicate-imports': 'error',
        'no-empty-function': 'warn',
        'no-invalid-this': 'error',
        'no-loop-func': 'error',
        'no-mixed-operators': 'warn',
        'no-multi-spaces': 'warn',
        'no-new-func': 'error',
        'no-return-await': 'warn',
        'no-script-url': 'error',
        'no-self-compare': 'warn',
        'no-template-curly-in-string': 'warn',
        'no-throw-literal': 'error',
        'no-trailing-spaces': 'warn',
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
        'no-whitespace-before-property': 'error',
        'object-curly-spacing': ['warn', 'always', {
          'arraysInObjects': false,
          'objectsInObjects': false
        }],
        'operator-assignment': ['warn', 'always'],
        'operator-linebreak': ['warn', 'after', {
          'overrides': {
            '?': 'before', ':': 'before',
            '&&': 'before', '||': 'before'
          }
        }],
        'prefer-arrow-callback': 'error',
        'prefer-const': 'warn',
        'prefer-spread': 'warn',
        'prefer-template': 'warn',
        'quotes': ['warn', 'single', {
          'avoidEscape': true,
          'allowTemplateLiterals': true
        }],
        'rest-spread-spacing': ['error', 'never'],
        'semi': 'off',
        'semi-spacing': 'error',
        'semi-style': ['error', 'last'],
        'space-before-blocks': ['warn', 'always'],
        'space-before-function-paren': ['error', 'never'],
        'space-infix-ops': 'error',
        'space-in-parens': ['warn', 'never'],
        'switch-colon-spacing': ['error', { 'after': true, 'before': false }],
        'template-tag-spacing': ['warn', 'never'],
        'template-curly-spacing': ['warn', 'never'],
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
        '@typescript-eslint/consistent-type-imports': 'error',
        '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
        '@typescript-eslint/consistent-type-exports': 'warn',
        '@typescript-eslint/default-param-last': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/member-delimiter-style': ['warn', {
          'multiline': {
            'delimiter': 'comma',
            'requireLast': false
          },
          'singleline': {
            'delimiter': 'comma',
            'requireLast': false
          }
        }],
        '@typescript-eslint/no-confusing-void-expression': ['error', {
          'ignoreArrowShorthand': true
        }],
        '@typescript-eslint/no-inferrable-types': 'warn',
        '@typescript-eslint/no-import-type-side-effects': 'error',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-unused-expressions': 'error',
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/require-array-sort-compare': 'error',
        '@typescript-eslint/prefer-readonly': 'warn',
        '@typescript-eslint/strict-boolean-expressions': 'error',
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        '@typescript-eslint/type-annotation-spacing': 'warn',
        'array-bracket-spacing': ['warn', 'never'],
        'arrow-body-style': ['warn', 'as-needed'],
        'arrow-spacing': ['warn', { 'before': true, 'after': true }],
        'block-spacing': ['warn', 'always'],
        'brace-style': ['warn', '1tbs', { 'allowSingleLine': true }],
        'camelcase': 'warn',
        'comma-dangle': ['warn', 'never'],
        'comma-spacing': ['warn', { 'before': false, 'after': true }],
        'default-param-last': 'off',
        'dot-location': ['error', 'property'],
        'eol-last': ['warn', 'never'],
        'eqeqeq': ['warn', 'always', { 'null': 'ignore' }],
        'func-call-spacing': ['error', 'never'],
        'func-style': ['warn'],
        'jsx-quotes': ['warn', 'prefer-single'],
        'key-spacing': ['warn', { 'beforeColon': false, 'afterColon': true }],
        'keyword-spacing': ['warn', {
          'overrides': {
            'if': { 'after': false },
            'for': { 'after': false },
            'while': { 'after': false },
            'switch': { 'after': false }
          }
        }],
        'max-statements-per-line': ['warn', { 'max': 1 }],
        'new-parens': ['error', 'always'],
        'no-confusing-arrow': 'warn',
        'no-console': 'warn',
        'no-constructor-return': 'error',
        'no-duplicate-imports': 'error',
        'no-empty-function': 'warn',
        'no-invalid-this': 'error',
        'no-loop-func': 'error',
        'no-mixed-operators': 'warn',
        'no-multi-spaces': 'warn',
        'no-new-func': 'error',
        'no-return-await': 'warn',
        'no-script-url': 'error',
        'no-self-compare': 'warn',
        'no-template-curly-in-string': 'warn',
        'no-throw-literal': 'error',
        'no-trailing-spaces': 'warn',
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
        'no-whitespace-before-property': 'error',
        'object-curly-spacing': ['warn', 'always', {
          'arraysInObjects': false,
          'objectsInObjects': false
        }],
        'operator-assignment': ['warn', 'always'],
        'operator-linebreak': ['warn', 'after', {
          'overrides': {
            '?': 'before', ':': 'before',
            '&&': 'before', '||': 'before'
          }
        }],
        'prefer-arrow-callback': 'error',
        'prefer-const': 'warn',
        'prefer-spread': 'warn',
        'prefer-template': 'warn',
        'quotes': ['warn', 'single', {
          'avoidEscape': true,
          'allowTemplateLiterals': true
        }],
        'rest-spread-spacing': ['error', 'never'],
        'semi': 'error',
        'semi-spacing': 'error',
        'semi-style': ['error', 'last'],
        'space-before-blocks': ['warn', 'always'],
        'space-before-function-paren': ['error', 'never'],
        'svelte/button-has-type': 'warn',
        'space-infix-ops': 'error',
        'space-in-parens': ['warn', 'never'],
        'svelte/block-lang': ['error', {
          'script': 'ts'
        }],
        'svelte/html-closing-bracket-spacing': ['warn', {
          'startTag': 'never',
          'endTag': 'never',
          'selfClosingTag': 'always'
        }],
        'svelte/html-quotes': ['warn', { 'prefer': 'single' }],
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
        'switch-colon-spacing': ['error', { 'after': true, 'before': false }],
        'template-tag-spacing': ['warn', 'never'],
        'template-curly-spacing': ['warn', 'never'],
        'yoda': ['error', 'never', { 'exceptRange': false }]
      }
    }
  ]
};