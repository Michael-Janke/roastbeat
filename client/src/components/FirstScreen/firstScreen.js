import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


class FirstScreen extends Component {

  handleChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };


  state = {
    name: '',
    accessCode: '',
    attendants: [],
    songTitle: '',
    startGame: false,
    openGame: false,
    endRound: false,
    endGame: false,
  };

  render() {
    const state = this.state;

      return (
        <div className="App main-context">
          <TextField
            hintText={"Your Name"}
            errorText="This field is required"
            value={state.name}
            onChange={this.handleChange}
          /><br />
          <div className="startButton">
            <RaisedButton>
              Start
            </RaisedButton>
          </div>
          <div className="joinButton">
            <RaisedButton>
              Join test
            </RaisedButton>
          </div>
         </div>
      );
    }
}

export default FirstScreen;