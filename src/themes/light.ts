import { cyan, pink } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const light = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: pink.A200,
    },
    secondary: {
      main: cyan.A400,
    },
  },
});
