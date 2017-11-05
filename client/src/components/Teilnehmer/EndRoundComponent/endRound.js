import React, {Component} from 'react';
import { connect } from 'react-redux'

class EndRoundComponent extends Component {

  state = {
    name: 'paul',
    answerCorrect: false,
    songTitle: 'Hey yah',
    score: 0,
    timer: 3,
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



    function onEndClicked(e){
      window.location.replace('/');
    }

    return (

      <div className="">
        <h2>CURRENT  <br/>SCORES</h2>
        <ul className="scores">

          <li className="scoresItem">
            <span className="score">{state.score}
              <span>pts</span>
            </span>
            <span className="name">{state.name}</span>
          </li>
          <li className="scoresItem">
            <span className="score">{state.answerCorrect ? 'Correct' : 'Wrong'}</span>
            <span className="name">Title: {state.songTitle}</span>
          </li>
          <li className="scoresItem">
            <span className="score">{state.timer}
              <span>scnds</span>
            </span>
            <span className="name">Time:</span>
          </li>
        </ul>
        <div className="btn_big"><div className="btn" onClick={onEndClicked.bind(this)}>close quiz</div></div>
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
