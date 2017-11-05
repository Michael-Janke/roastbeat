import React, { Component } from 'react';
import List, { ListItem, ListItemIcon, ListItemText, ListSubheader } from 'material-ui/List';
import Checkbox from 'material-ui-icons/CheckBox';
import CheckboxOutlineBlank from 'material-ui-icons/CheckBoxOutlineBlank';

class FinalScoreComponent extends Component {

  state = {
    participants: [
      {name: 'micha', score: 15},
      {name: 'paul', score: 14},
      {name: 'sebb', score: 13},
      {name: 'oskar', score: 10},
    ],
  };

  render() {

    const state = this.state;

    return (
    <div>
      Scoreboard
      <List>

        Winner
        {state.participants.map((participant) => (
          <ListItem>
            {participant.name} {participant.score}
          </ListItem>
        ))}

      </List>
    </div>);

  }
}

export default FinalScoreComponent;
