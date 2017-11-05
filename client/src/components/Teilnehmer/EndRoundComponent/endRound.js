import React, {Component} from 'react';
import { connect } from 'react-redux';
import Close from 'material-ui-icons/Close';

class EndRoundComponent extends Component {

  state = {
    name: 'paul',
    answerCorrect: false,
    songTitle: '',
    score: 0,
    timer: 8,
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
        <div className="appNavigation">
          <div className="btn btn_closeQuiz"><span className="icon"><Close/></span>close quiz</div>
        </div>
        <div>
          Name: {this.props.lastPlayer}
        </div>
        <div>
          rightAnswer? {this.props.answer}
        </div>
        <div>
          Song title {state.songTitle}
        </div>
        <div>
          Score {state.score}
        </div>
        <div>
          Timer for next step {state.timer}
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    ws: state ? state.ws : null,
    pin: state ? state.pin: null,
    lastPlayer: state ? state.lastPlayer: "",
    answer: state.answer ? state.answer: "",
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const EndRound = connect(mapStateToProps, mapDispatchToProps)(EndRoundComponent);


export default EndRound;
