import { blueGrey, cyan, pink } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const dark = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: pink.A200,
    },
    secondary: {
      main: cyan.A400,
    },
    background: {
      default: blueGrey['800'],
      paper: blueGrey['700'],
    },
  },
});

export default dark;
