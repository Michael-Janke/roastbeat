import React, { Component } from 'react';

class FeedbackComponent extends Component {

  state = {
    name: 'paul',
    answerCorrect: false,
    songTitle: '',
    score: 0,
    timer: 3,
  };

  render() {
    const state = this.state;

    return (
      <div>
        Name: {state.name}
        rightAnswer? {state.answerCorrect}
        Song title {state.songTitle}
        Score {state.score}
        Timer for next step {state.timer}
      </div>
    );
  }
}

export default FeedbackComponent;
