import React, { Component } from 'react';
import List, { ListItem, ListItemIcon, ListItemText, ListSubheader } from 'material-ui/List';

class PendingComponent extends Component {

  state = {
    participants: [{name: 'paul'}, {name: 'micha'}],
  };

  render() {
    const state = this.state;

    return (
      <div className="main-content">
        <List className="" subheader>
          {state.participants.map((participant) => (
            <ListItem> {participant.name} </ListItem>
            ))}
        </List>
      </div>
    );
  }
}

export default PendingComponent;
