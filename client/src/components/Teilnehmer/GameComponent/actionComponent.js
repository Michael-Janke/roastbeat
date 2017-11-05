import React, {Component} from 'react';
import List, {ListItem, ListItemIcon, ListItemText, ListSubheader} from 'material-ui/List';
import Checkbox from 'material-ui-icons/CheckBox';
import CheckboxOutlineBlank from 'material-ui-icons/CheckBoxOutlineBlank';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

class GameComponent extends Component {

  state = {
    participants: [
      {name: 'micha'},
      {name: 'paul'},
      {name: 'sebb'},
      {name: 'oskar'},
    ],
    question: 'Who sings this song?',
    choices: [
      'Rihanna',
      'ACDC',
      'Brian',
      'Obama'
    ],
    timer: 30,
  };

  componentDidMount() {
    setInterval(() => {
      if (this.state.timer > 0) {
        this.setState({
          timer: (this.state.timer - 1),
        });
      }
    }, 1000);
  }


  render() {
    const state = this.state;

    return (
      <div className="main-content">
        {state.timer > 0 ?
          <div>
            {state.question}
            <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">

              {state.choices.map((choice) => (
                <RadioButton
                  value={choice}
                  label={choice}
                />
              ))}
            </RadioButtonGroup>
            <RaisedButton>
              Confirm
            </RaisedButton>
          </div>
          : null
        }
        <div>
          {state.timer} seconds left
        </div>

      </div>

    );
  }
}

export default GameComponent;
