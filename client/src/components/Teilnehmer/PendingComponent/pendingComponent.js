import React, { Component } from 'react';
import List, { ListItem, ListItemIcon, ListItemText, ListSubheader } from 'material-ui/List';
import Close from 'material-ui-icons/Close';
import Add from 'material-ui-icons/Add';
import CheckboxOutlineBlank from 'material-ui-icons/CheckBoxOutlineBlank';
import Slider from 'material-ui/Slider';
import { connect } from 'react-redux'
import {setGameState} from "../../../actions/index";

class PendingComponent extends Component {

  state = {
    players: [{name: 'paul'}, {name: 'micha'}],
    songs: 20,
  };

  onStartClicked() {
    console.log(JSON.stringify({command: 'UPDATE_GAME', state: 'QUESTION', question: {song: 'test'}}));
    this.props.ws.send(JSON.stringify({command: 'UPDATE_GAME', pin: this.props.pin, state: 'QUESTION', question: {song: 'test'}}));
  }

  handleSlider = (event, value) => {
    this.setState({songs: value});
  };

  render() {
    const state = this.state;
    console.log(this.props);
    return (
      <div className="main-content">
        <div className="appNavigation">
          <div className="inviteCode">
            <span className="code">{this.props.pin}</span>
            <span className="label">Code to invite<br/> your friends</span>
          </div>
          <div className="btn btn_closeQuiz"><span className="icon"><Close/></span>close quiz</div>
        </div>
        <List className="participants_list" subheader>
          <span className="label">Waiting for players</span>
          {this.props.players && this.props.players.map((player) => (
            <ListItem> {player.name} </ListItem>
            ), 0)}
          <div className="btn btn_joinThisQuiz"><span className="icon"><Add/></span>join this quiz</div>
        </List>
        The quiz will play {this.state.songs} songs:
        <Slider
          min={10}
          max={30}
          step={1}
          value={this.state.songs}
          onChange={this.handleSlider}
        />
        <div className="btn_bigFilled" onClick={this.onStartClicked.bind(this)}>
          <div className="btn" >
            start quiz
          </div>
        </div>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    ws: state ? state.ws : null,
    pin: state ? state.pin: null,
    players: state ? state.players: [],
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

const Pending = connect(mapStateToProps, mapDispatchToProps)(PendingComponent);


export default Pending;
