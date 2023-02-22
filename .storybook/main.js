const path = require('path');

module.exports = {
  stories: ['../src/components/**/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    'storybook-styled-components-theme-selector',
  ],
  webpackFinal: async (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../src/'),
        '@basics': path.resolve(__dirname, '../src/components/_basics'),
        '@configurator': path.resolve(
          __dirname,
          '../src/components/configurator/'
        ),
        '@events': path.resolve(__dirname, '../src/components/events/'),
        '@iam': path.resolve(__dirname, '../src/components/iam/'),
        '@onlineCashback': path.resolve(
          __dirname,
          '../src/components/onlineCashback/'
        ),
        '@regioCashback': path.resolve(
          __dirname,
          '../src/components/regioCashback/'
        ),
        '@voucher': path.resolve(__dirname, '../src/components/voucher/'),
        '@utils': path.resolve(__dirname, '../src/utils/'),
      },
    },
  }),
};
