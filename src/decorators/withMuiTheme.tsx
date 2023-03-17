import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { useMemo } from 'react';
import { themes } from '../themes';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const withMuiTheme = (Story: any, context: any) => {
  const { theme: themeKey } = context.globals;

  // only recompute the theme if the themeKey changes
  const theme = useMemo(() => themes[themeKey] || themes.light, [themeKey]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Story />
    </ThemeProvider>
  );
};
