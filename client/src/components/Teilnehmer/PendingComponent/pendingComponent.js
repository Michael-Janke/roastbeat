import React, { Component } from 'react';
import List, { ListItem, ListItemIcon, ListItemText, ListSubheader } from 'material-ui/List';
import Checkbox from 'material-ui-icons/CheckBox';
import CheckboxOutlineBlank from 'material-ui-icons/CheckBoxOutlineBlank';
class PendingComponent extends Component {

  state = {
    participants: [{name: 'paul', status: 'ready'}, {name: 'micha', status: 'pending'}],
  };

  renderParticipantStatus(status) {
    if(status==='ready')
      return true;
    return false;
  }

  render() {
    const state = this.state;

    return (
      <div className="App main-context">
        <List className="App" subheader>
          <ListItem>
            <Checkbox/>
            Paul
          </ListItem>
          <ListItem>
            <CheckboxOutlineBlank/>
            Micha
          </ListItem>
        </List>
      </div>
    );
  }
}

export default PendingComponent;
