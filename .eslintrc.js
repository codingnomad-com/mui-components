/* eslint-disable @typescript-eslint/naming-convention */
module.exports = {
  extends: ['@codingnomad/eslint-config-cn', 'plugin:storybook/recommended'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
        project: './tsconfig.json',
      },
    },
  },
  rules: {
    'import/no-default-export': 0,
    'import/prefer-default-export': 1,
  },
};
