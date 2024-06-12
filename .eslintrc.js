module.exports = {
  extends: [require.resolve('@umijs/lint/dist/config/eslint')],
  rules: {
    // 禁止出现定义了，但未使用过的变量
    'no-unused-vars': 1,
    // 阻止 var 的使用，推荐用 let 和 const
    'no-var': 'warn',
  },
  globals: {
    page: true,
    REACT_APP_ENV: true,
  },
};
