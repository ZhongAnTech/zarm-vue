const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname, '../../'),
  verbose: true,
  testURL: 'http://localhost/',
  moduleFileExtensions: ['js', 'vue'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
  },
  testPathIgnorePatterns: ['<rootDir>/test/e2e'],
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  setupFiles: ['<rootDir>/test/unit/setup'],
  // mapCoverage: true,
  // collectCoverage: true,
  coverageReporters: ['html', 'lcov', 'text'],
  coverageDirectory: '<rootDir>/test/unit/coverage',
  collectCoverageFrom: [
    '!**/index.js',
    '!**/style/**',
    '!**/node_modules/**',
    'src/**/*.{js,vue}', 
  ],
};
