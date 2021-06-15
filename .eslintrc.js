module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    browser: true,
    jest: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      jsx: true
    }
  },
  ignorePatterns: [
    'node_modules/*',
    '.next/*',
    '.out/*',
    '!.prettierrc.js',
    'Documentation/*',
    'next.config.js'
  ], // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  rules: {
    'no-unused-vars': [2, { args: 'after-used', argsIgnorePattern: '^_' }],
    'react/prop-types': ['error'],
    'quotes': ['error', 'single', { 'avoidEscape': true }],
    'complexity': ['error', 14],
    'max-statements': ['error', 40],
    'max-lines': ['error', 400],
    'max-params': ['error', 5],
    'semi': ['error', 'always'],
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'comma-dangle': ['error', 'never'],
    'no-trailing-spaces': 'error',
    'no-irregular-whitespace': 'error',
    'default-case': 'error',
    'camelcase': ['warn', { 'properties': 'always' }],
    'no-console': ['error'],
    'no-empty': ['error', { 'allowEmptyCatch': true }],
    'react/display-name': 'off',
    'import/no-anonymous-default-export': ['error', {
      'allowObject': true,
      'allowArray': true
    }]
  },
  overrides: [
    // This configuration will apply only to TypeScript files
    {
      files: ['**/*.ts', '**/*.tsx'],
      settings: { react: { version: 'detect' } },
      env: {
        browser: true,
        node: true,
        es6: true
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended', // TypeScript rules
        'plugin:react/recommended', // React rules
        'plugin:react-hooks/recommended', // React hooks rules
        'plugin:jsx-a11y/recommended', // Accessibility rules,
        'plugin:prettier/recommended' // Prettier plugin
      ],
      rules: {
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        '@typescript-eslint/no-unused-vars': [2, { args: 'after-used', argsIgnorePattern: '^_' }],
        '@typescript-eslint/explicit-function-return-type': [
          'warn',
          {
            allowExpressions: true,
            allowConciseArrowFunctionExpressionsStartingWithVoid: true
          }
        ],
        'prettier/prettier': ['error', {}, { usePrettierrc: true }] // Includes .prettierrc.js rules
      }
    }
  ]
};
