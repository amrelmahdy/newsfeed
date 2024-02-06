import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'react-native',
  testPathIgnorePatterns: ['<rootDir>/__tests__/test-setup.ts', "tsconfig.spec.js"],
  setupFilesAfterEnv: ['./test-setup.ts'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  // Other Jest configurations...
  coverageDirectory: 'coverage',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
    '!**/i18n/**',
    '!**/theme/**'
  ],
};

export default config;