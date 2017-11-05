import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { withStyles, MuiThemeProvider } from 'material-ui/styles';
import BasicRouter from './components/Router/Router';
import './App.css';
import FirstScreen from "./components/FirstScreen/firstScreen";

class App extends Component {

  constructor() {
    super();
  }

  render() {

    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <BasicRouter/>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
