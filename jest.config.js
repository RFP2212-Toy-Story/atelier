module.exports = {
  coverageReporters: [
    'html-spa',
    'text',
    ['text',
      { file: 'coverage.txt' }
    ]
  ],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  coveragePathIgnorePatterns: [
    'atelier/client/dist',
    'atelier/coverage',
    '.config.'
  ]
};
