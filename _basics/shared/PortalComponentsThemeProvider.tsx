/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './globalStyles';

const PortalComponentsThemeProvider = (props: any): ReactElement => {
  const { theme, children } = props;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      {children}
    </ThemeProvider>
  );
};

export default PortalComponentsThemeProvider;
