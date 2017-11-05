import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


class FirstScreen extends Component {

  handleChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleAccessCode = (event) => {
    this.setState({
      accessCode: event.target.value,
    });
  };

  state = {
    name: '',
    accessCode: '',
    attendants: [],
    songTitle: '',
    isHost: false,
    startGame: false,
    openGame: false,
    endRound: false,
    endGame: false,
    readyToPlay: false,
  };

  render() {
    const state = this.state;

    function onStartClicked() {
      this.setState({
        isHost: true,
        openGame: true,
      });
    }

    function onJoinClicked() {
      this.setState({
        readyToPlay: true,
      });
    }

      return (
        <div className="App main-context">
          <TextField
            hintText={"Your Name"}
            errorText="This field is required"
            value={state.name}
            onChange={this.handleChange}
          /><br />
          <div className="startButton">
            <RaisedButton onclick={onStartClicked.bind(this)}>
              Host Game
            </RaisedButton>
          </div>
          <TextField
            hintText={"Enter game code"}
            errorText="This field is required"
            value={state.accessCode}
            onChange={this.handleAccessCode}
          /><br />
          <div className="joinButton">
            <RaisedButton onclick={onJoinClicked.bind(this)}>
              Join
            </RaisedButton>
          </div>
         </div>
      );
    }
}

export default FirstScreen;