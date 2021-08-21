import React from 'react';
import ReactDOM from 'react-dom';
import { createTheme, ThemeProvider } from "@material-ui/core";
import 'typeface-roboto';
import App from './App';

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff8f00"
    }, secondary: { main: "#ffcc80" }
  }, fontFamily: "Roboto"
});

ReactDOM.render(<ThemeProvider theme={theme}><App /></ThemeProvider>, document.getElementById("root"));
