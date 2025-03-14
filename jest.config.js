const ignorePatterns = [
  '/node_modules/',
  '<rootDir>/__tests__/__mocks__/',
  '<rootDir>/__tests__/utils/',
  '<rootDir>/src/screens/index.ts',
  'mock.ts',
];

module.exports = {
  preset: 'react-native',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coverageReporters: ['text', 'lcov'],
  testPathIgnorePatterns: ignorePatterns,
  coveragePathIgnorePatterns: ignorePatterns,
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(js|jsx|ts|tsx)$',
  transformIgnorePatterns: [],
};
