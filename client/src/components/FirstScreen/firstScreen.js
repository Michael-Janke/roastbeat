import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { setWS } from '../../actions';
import { connect } from 'react-redux'


class FirstScreenComponent extends Component {

  constructor (props) {
    super();
    // eslint-disable-next-line no-alert
    let ws = new WebSocket("ws://" + window.location.host + "/socket");
    ws.onmessage = function(e) {
      console.log(e.data);
    }
    props.addWS(ws);
  }

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
      this.props.ws.send('{"command":"CREATE_GAME"}');
    }

    function onJoinClicked() {
      this.setState({
        readyToPlay: true,
      });
    }

      return (
        <div className="App main-content">
          <TextField
            hintText={"Your Name"}
            errorText="This field is required"
            value={state.name}
            onChange={this.handleChange}
          /><br />
          <div className="startButton">
            <RaisedButton onClick={onStartClicked.bind(this)}>
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
            <RaisedButton onClick={onJoinClicked.bind(this)}>
              Join
            </RaisedButton>
          </div>
         </div>
      );
    }
}

const mapStateToProps = state => {
  return {
    ws: state ? state.ws : null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addWS: ws => {
      dispatch(setWS(ws))
    }
  }
}

const FirstScreen = connect(mapStateToProps, mapDispatchToProps)(FirstScreenComponent)


export default FirstScreen
