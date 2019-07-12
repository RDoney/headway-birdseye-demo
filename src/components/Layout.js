import React from 'react';
import { Helmet } from 'react-helmet';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#031c7f',
      light: '#7160f6',
      dark: '#071461',
    },
    secondary: {
      main: '#fbe64d',
      dark: '#f5b54c',
    },
  },
  typography: {
    fontFamily: 'Source Sans Pro',
  },
});
console.log(theme);

const Layout = props => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Birdseye</title>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
      {/* TODO: self-host fonts */}
      <link
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700&display=swap"
        rel="stylesheet"
      ></link>
    </Helmet>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </MuiThemeProvider>
  </>
);

export default Layout;
