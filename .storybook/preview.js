import { addDecorator } from '@storybook/react';
import React from 'react';
import { withThemesProvider } from 'storybook-styled-components-theme-selector';

import PortalComponentsThemeProvider from '../src/components/_basics/shared/PortalComponentsThemeProvider';
import { MWTheme } from '../src/theme/themes';

addDecorator(
  withThemesProvider({
    ThemeProvider: PortalComponentsThemeProvider,
    themes: [MWTheme],
  })
);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: {
      order: [
        'Design System',
        'Basic Components',
        ['Atoms', 'Molecules', 'Organisms', 'Templates', 'Shared'],
        'Configurator',
        ['Atoms', 'Molecules', 'Organisms'],
        'Events',
        ['Atoms', 'Molecules', 'Organisms'],
        'Online Cashback',
        ['Atoms', 'Molecules', 'Organisms'],
        'Voucher',
        ['Atoms', 'Molecules', 'Organisms'],
      ],
    },
  },
};
