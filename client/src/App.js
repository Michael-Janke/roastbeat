import React, { Component } from 'react';
import { withStyles, MuiThemeProvider } from 'material-ui/styles';
import RaisedButton from 'material-ui/RaisedButton';
import logo from './logo.svg';
import './App.css';
import FirstScreen from "./components/FirstScreen/firstScreen";

class App extends Component {


  constructor() {
    super();
  }

  state = {
    name: "defaultName"
  };

  render() {

    return (
      <MuiThemeProvider>
        <div className="App">
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          aoh
          <FirstScreen state={this.state} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
