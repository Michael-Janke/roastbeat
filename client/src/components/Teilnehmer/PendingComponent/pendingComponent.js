import React, { Component } from 'react';
import List, { ListItem, ListItemIcon, ListItemText, ListSubheader } from 'material-ui/List';
import Close from 'material-ui-icons/Close';
import Add from 'material-ui-icons/Add';
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
        <div className="appNavigation">
          <div className="inviteCode">
            <span className="code">1234</span>
            <span className="label">Code to invite<br/> your friends</span>
          </div>
          <div className="btn btn_closeQuiz"><span className="icon"><Close/></span>close quiz</div>
        </div> 
        <List className="participants_list" subheader>
          <span className="label">Waiting for participants</span>
          {state.participants.map((participant) => (
            <ListItem> {participant.name} </ListItem>
            ))}
          <div class="btn btn_joinThisQuiz"><span className="icon"><Add/></span>join this quiz</div>
        </List>
        How many Songs?
        Insert song count slider
        <div className="btn_bigFilled"><div className="btn">start quiz</div></div>
      </div>
    );
  }
}

export default PendingComponent;
