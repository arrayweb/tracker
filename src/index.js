import React from 'react';
import ReactDOM from 'react-dom';
import { createTheme, ThemeProvider } from "@material-ui/core";
import App from './App';
import '@fontsource/roboto';

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff8f00"
    }, secondary: { main: "#ffcc80" }
  }, fontFamily: "Roboto"
});

ReactDOM.render(<ThemeProvider theme={theme}><App /></ThemeProvider>, document.getElementById("root"));
