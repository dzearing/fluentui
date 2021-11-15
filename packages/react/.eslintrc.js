// @ts-check
const configHelpers = require('@fluentui/eslint-plugin/src/utils/configHelpers');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['plugin:@fluentui/eslint-plugin/react--legacy'],
  plugins: ['@fluentui', '@rnx-kit'],
  root: true,
  rules: {
    '@fluentui/ban-imports': ['error', { pathRegex: '^(\\.\\./)+Styling$', names: ['FontSizes'] }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@rnx-kit/no-export-all': ['error', { expand: 'external-only' }],
  },
  overrides: [
    {
      files: [...configHelpers.devDependenciesFiles, 'src/common/{shallowUntilTarget,testUtilities}.ts'],
      rules: {
        'import/no-extraneous-dependencies': ['error', { packageDir: ['.', configHelpers.findGitRoot()] }],
      },
    },
  ],
};
