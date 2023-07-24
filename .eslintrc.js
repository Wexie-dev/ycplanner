module.exports = {
  extends: ["next", "next/core-web-vitals", "plugin:prettier/recommended"],
  rules: {
    // Add the rule to enforce the same line endings as Prettier
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
};
