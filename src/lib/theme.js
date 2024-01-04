import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: { main: '#344D67', contrastText: '#F3ECB0' },
    //Primary = main blue (e.g., background)
    secondary: { main: '#F3ECB0', contrastText: '#344D67' },
    //Secondary = header blue (emphasis text)
    tertiary: { main: '#FF7B54', contrastText: '#90BF7A' },

    info: { main: '#90BF7A', contrastText: '#FF7B54' },

    app: {
      primary: {
        main: '#344D67',
      },
      secondary: {
        main: '#F3ECB0',
      },
      tertiary: {
        main: '#FF7B54',
      },
      info: {
        main: '#90BF7A',
      },
      light: {
        main: 'rgb(244, 249, 244)',
      },
      lighter: {
        main: '#ccc',
      },
    },

    text: {
      primary: '#373737',
    },
  },

  typography: {
    body1: {
      lineHeight: 1.75,
    },
    body2: {
      lineHeight: 1.75,
    },
  },
});
export default theme;
