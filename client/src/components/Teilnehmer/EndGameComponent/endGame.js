import React, { Component } from 'react';
import List, { ListItem, ListItemIcon, ListItemText, ListSubheader } from 'material-ui/List';

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
    
    function onEndClicked(e){
      window.location.replace('/');
    }

    const state = this.state;

    return (
    <div className="main-content">
      <h2>ROAST QUIZ <br/>SCORES</h2>
      <ul className="scores">
        {state.participants.map((participant) => (
          <li className="scoresItem"><span className="score">{participant.score} <span>pts</span></span><span className="name">{participant.name}</span>
          </li>
        ))}

      </ul>
      <div className="btn_big"><div className="btn" onClick={onEndClicked.bind(this)}>close quiz</div></div>
    </div>);

  }
}

export default FinalScoreComponent;
