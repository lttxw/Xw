module.exports = {
  extends: [require.resolve('@umijs/lint/dist/config/eslint')],
  globals: {
    page: true,
    REACT_APP_ENV: true,
  },
};

// module.exports = {
//   extends: [require.resolve('@umijs/fabric/dist/eslint')],
//   rules: {
//     'comma-dangle': [
//       'error',
//       {
//         arrays: 'only-multiline',
//         objects: 'only-multiline',
//         imports: 'only-multiline',
//         exports: 'never',
//         functions: 'never',
//       },
//     ],
//     'max-len': ['error', { code: 200 }],
//   },
//   globals: {
//     ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
//     page: true,
//   },
// };
