import React, { Component } from 'react';
import List, { ListItem, ListItemIcon, ListItemText, ListSubheader } from 'material-ui/List';
import Checkbox from 'material-ui-icons/CheckBox';
import CheckboxOutlineBlank from 'material-ui-icons/CheckBoxOutlineBlank';
class PendingComponent extends Component {

  state = {
    participants: [{name: 'paul'}, {name: 'micha'}],
  };

  renderParticipantStatus(status) {
    if(status==='ready')
      return true;
    return false;
  }

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
