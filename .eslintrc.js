module.exports = {
  extends: [
    'next',
    'next/core-web-vitals',
    'plugin:prettier/recommended',
    'plugin:unused-imports/recommended',
  ],
  plugins: ["prettier", "unused-imports"],
  rules: {
    // Add the rule to enforce the same line endings as Prettier
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    "unused-imports/no-unused-imports": "error"
  },
};
