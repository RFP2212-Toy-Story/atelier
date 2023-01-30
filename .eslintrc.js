module.exports = {
  env: {
    jest: true,
    browser: true,
    es2021: true
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  overrides: [
    {
      files: [
        '*.jsx',
        '*.js'
      ]
    },
    {
      files: [
        '*.test.*'
      ],
      rules: {
        'import/no-extraneous-dependencies': 'off'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  ignorePatterns: [
    '*.map',
    '*bundle.js*',
    'node_modules'
  ],
  rules: {
    'no-console': [
      'error',
      {
        allow: [
          'error',
          'info',
          'clear'
        ]
      }
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2
      }
    ],
    'import/newline-after-import': [
      'off'
    ],
    'react/jsx-one-expression-per-line': [
      'off'
    ],
    'react/prop-types': [
      'off'
    ],
    'comma-dangle': [
      'error',
      'never'
    ],
    'import/extensions': [
      'off'
    ]
  }
};
