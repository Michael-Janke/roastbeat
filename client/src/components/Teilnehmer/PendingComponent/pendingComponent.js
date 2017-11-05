import React, { Component } from 'react';
import List, { ListItem, ListItemIcon, ListItemText, ListSubheader } from 'material-ui/List';
import { connect } from 'react-redux'

class PendingComponent extends Component {

  state = {
    players: [{name: 'paul'}, {name: 'micha'}],
  };

  render() {
    const state = this.state;

    return (
      <div className="main-content">
        <List className="" subheader>
          {state.players.map((player) => (
            <ListItem> {player.name} </ListItem>
            ))}
        </List>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ws: state ? state.ws : null,
    pin: state ? state.pin: null,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const Pending = connect(mapStateToProps, mapDispatchToProps)(PendingComponent);


export default Pending;
