import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { withStyles, MuiThemeProvider } from 'material-ui/styles';

import roastbeatReducer from './reducers/roastbeefReducer.js';
import BasicRouter from './components/Router/router';
import './App.css';
import FirstScreen from "./components/FirstScreen/firstScreen";

let store = createStore(roastbeatReducer)

class App extends Component {

  constructor(props) {
    super();
  }

  render() {

    return (
        <MuiThemeProvider>
          <Provider store={store}>
            <BrowserRouter>
              <BasicRouter/>
            </BrowserRouter>
          </Provider>
        </MuiThemeProvider>
    );
  }
}

export default App;
