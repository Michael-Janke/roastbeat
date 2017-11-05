import React, {Component} from 'react';
import List, {ListItem, ListItemIcon, ListItemText, ListSubheader} from 'material-ui/List';
import Checkbox from 'material-ui-icons/CheckBox';
import CheckboxOutlineBlank from 'material-ui-icons/CheckBoxOutlineBlank';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import { connect } from 'react-redux'

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
          <div className="choiceGroup">
            <h2>
              {state.question}
            </h2>
            <RadioButtonGroup className="choiceRadioGroup" name="choices">

              {state.choices.map((choice) => (
                <RadioButton
                  key={choice}
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


const mapStateToProps = state => {
  return {
    ws: state ? state.ws : null,
    pin: state ? state.pin: null,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const Game = connect(mapStateToProps, mapDispatchToProps)(GameComponent);

export default Game;
