import { createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: green.A400,
    },
  },
});

export default theme;
