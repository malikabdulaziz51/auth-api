export default [
  {
    parserOptions: {
      tsconfigRootDir: __dirname,
      sourceType: "module",
    },
    extends: ["plugin:prettier/recommended"],
    root: true,
    env: {
      node: true,
      jest: true,
      commonjs: true,
      es2021: true,
    },
    ignorePatterns: [".eslintrc.js"],
    rules: {
      "max-len": "off",
    },
  },
];
