module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  resolver: 'ts-jest-resolver',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
}