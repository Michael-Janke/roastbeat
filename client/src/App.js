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
    name: "Your Name"
  };

  render() {

    return (
      <MuiThemeProvider>
        <div className="App main-content">
          <FirstScreen state={this.state} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
