import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import PendingComponent from '../Teilnehmer/PendingComponent/pendingComponent';
import ActionComponent from '../Teilnehmer/GameComponent/gameComponent';
import FeedbackComponent from '../Teilnehmer/EndRoundComponent/endRound';
import FinalScoreComponent from '../Teilnehmer/EndGameComponent/endGame';
import FirstScreen from "../FirstScreen/firstScreen";

const BasicRouter = () => (
  <Router>
    <div>
      <ul className="devNavi">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/pending">Pending</Link></li>
        <li><Link to="/action">Action</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
        <li><Link to="/finalScore">FinalScore</Link></li>
      </ul>
      
      <Route exact path="/" component={FirstScreen}/>
      <Route path="/pending" component={PendingComponent}/>
      <Route path="/action" component={ActionComponent}/>
      <Route path="/feedback" component={FeedbackComponent}/>
      <Route path="/finalScore" component={FinalScoreComponent}/>
    </div>
  </Router>
);

export default BasicRouter;