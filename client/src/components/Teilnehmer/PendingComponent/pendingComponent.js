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

  handleSlider = (event, value) => {
    this.setState({songs: value});
  };

  render() {
    const state = this.state;

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
        Currently you have {this.state.songs} selected:
        <Slider
          min={10}
          max={30}
          step={1}
          value={this.state.songs}
          onChange={this.handleSlider}
        />
        <div className="btn_bigFilled"><div className="btn">start quiz</div></div>
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
