import React, {Component} from 'react';
import List, {ListItem, ListItemIcon, ListItemText, ListSubheader} from 'material-ui/List';
import Checkbox from 'material-ui-icons/CheckBox';
import CheckboxOutlineBlank from 'material-ui-icons/CheckBoxOutlineBlank';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import { connect } from 'react-redux';
import Close from 'material-ui-icons/Close';
import CircularProgress from 'material-ui/CircularProgress';


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
    completed: 0,
  };

  componentDidMount() {
    setInterval(() => {
      if (this.state.timer > 0) {
        this.setState({
          timer: (this.state.timer - 1),
          completed: (this.state.timer - 30) * (100 - 0) / (0 - 30) + 0,
        });
      }
    }, 1000);
  }
  


  render() {
    const state = this.state;

    return (
      <div>
        <div className="appNavigation">
          <div className="btn btn_closeQuiz"><span className="icon"><Close/></span>close quiz</div>
        </div> 
        {state.timer > 0 ?
          <div className="choiceGroup">
            <div className="progress">
              <span className="timer">{state.timer}</span>
              <div className="progressCircle">
                <CircularProgress
                  mode="determinate"
                  value={this.state.completed}
                  size={240}
                  thickness={4}
                  color="#fff"
                />
              </div>
            </div>
            <h3>
              {state.question}
            </h3>
            <RadioButtonGroup className="choiceRadioGroup" name="choices">

              {state.choices.map((choice) => (
                <RadioButton
                  key={choice}
                  value={choice}
                  label={choice}
                />
              ))}
            </RadioButtonGroup>
            <div className="btn_bigFilled"><div className="btn">Confirm</div></div>
          </div>
          : null
        }

      </div>

    );
  }
}


const mapStateToProps = state => {
  return {
    ws: state ? state.ws : null,
    pin: state ? state.pin: null,
    question: state ? state.question: null,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const Game = connect(mapStateToProps, mapDispatchToProps)(GameComponent);

export default Game;
