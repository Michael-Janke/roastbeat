import React, { Component } from 'react';
import Close from 'material-ui-icons/Close';

class FeedbackComponent extends Component {

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
        Name: {state.name}<br/>
        rightAnswer? {state.answerCorrect}<br/>
        Song title {state.songTitle}<br/>
        Score {state.score}<br/>
        Timer for next step {state.timer}<br/>
      </div>
    );
  }
}

export default FeedbackComponent;
