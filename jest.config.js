module.exports = {
  coverageReporters: [
    'html-spa',
    'text'
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
