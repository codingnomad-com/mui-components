import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import React, { useMemo } from 'react';
import { themes } from '../../src/themes';

export const withMuiTheme = (Story, context) => {
  const { theme: themeKey } = context.globals;

  // only recompute the theme if the themeKey changes
  const theme = useMemo(() => themes[themeKey] || themes['light'], [themeKey]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Story />
    </ThemeProvider>
  );
};
