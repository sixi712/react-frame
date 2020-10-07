module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react-hooks"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  rules: {
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": 1,
    "no-console": "off",
    "no-debugger": "off",
    quotes: [1, "double"],
    semi: [1, "always"],
    "object-curly-spacing": [1, "always"],
    "no-global-assign": 2, //禁止对原生对象或只读的全局对象进行赋值
    "no-redeclare": 2, //禁止多次声明同一变量
    "no-const-assign": 2, //禁止修改 const 声明的变量
    "no-unused-vars": 0,
    "arrow-spacing": [
      1,
      {
        before: true,
        after: true
      }
    ]
  }
};
