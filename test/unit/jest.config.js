const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname, '../../'),
  testURL: 'http://localhost/',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\js$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest',
  },
  moduleFileExtensions: ['js', 'vue'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  // testMatch: ['<rootDir>/test/**/button.*.js'],
  testPathIgnorePatterns: ['<rootDir>/test/e2e'],
  coverageReporters: ['html', 'lcov', 'text'],
  coverageDirectory: '<rootDir>/test/unit/coverage/',
  collectCoverageFrom: ['!**/index.js', '!**/style/**', '!**/node_modules/**', 'src/**/*.{js,vue}'],
};
