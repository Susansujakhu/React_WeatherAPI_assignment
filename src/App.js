import React, { Component } from 'react';
import Routes from "./routes";
import {theme} from "./theme";
import {ThemeProvider} from '@material-ui/core/styles';

class App extends Component {
  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
                <Routes/>
                </ThemeProvider>
      </div>
    );
  }
}

export default App;