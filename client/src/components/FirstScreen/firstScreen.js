import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { setWS, setPin, setAnswer, setGameState } from '../../actions';
import { connect } from 'react-redux'


class FirstScreenComponent extends Component {

  constructor (props) {
    super();
    // eslint-disable-next-line no-alert
    let ws = new WebSocket("ws://" + window.location.host + "/socket");
    ws.onmessage = function(e) {
      let data = JSON.parse(e.data);
      switch (data.command) {
        case "READ_PIN": props.addPin(data.pin); break;
        case "READ_GAME_STATE": props.addGameState(data); console.log(data);break;
        case "READ_ANSWER": props.addAnswer(data); break;
        default:
      }
    };
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
      this.props.ws.send(JSON.stringify({
        command: "JOIN_GAME",
        name: this.state.name,
        pin: this.state.accessCode
      }));
      
    }

      return (
        <div className="App main-content firstScreen">
          <div className="btn_bigFilled"><div className="btn" onClick={onStartClicked.bind(this)}>host quiz</div></div>
          <div className="btn_big"><div className="btn" onClick={onJoinClicked.bind(this)}>join quiz</div></div>
          <TextField
            hintText={"Your Name"}
            value={state.name}
            onChange={this.handleChange}
            className="normalTextField"
            style={{marginLeft: 100}}
          />
          <TextField
            hintText={this.props.pin != null? "Share Access Code: " + this.props.pin : "Enter game code"}
            value={state.accessCode}
            onChange={this.handleAccessCode}
            className="normalTextField"
            style={{marginLeft: 100}}
          />
         </div>
      );
    }
}

const mapStateToProps = state => {
  return {
    ws: state ? state.ws : null,
    pin: state? state.pin: null
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addWS: ws => {
      dispatch(setWS(ws))
    },
    addPin: pin => {
      dispatch(setPin(pin))
    },
    addGameState: data => {
      dispatch(setGameState(data))
    },
    addAnswer: data => {
      dispatch(setAnswer(data))
    },
  }
};

const FirstScreen = connect(mapStateToProps, mapDispatchToProps)(FirstScreenComponent);


export default FirstScreen
