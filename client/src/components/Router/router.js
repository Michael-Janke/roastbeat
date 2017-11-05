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
import HostComponent from "../Host/host";

const BasicRouter = () => (
  <Router>
    <div>
      <ul className="devNavi">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/pending">Pending</Link></li>
        <li><Link to="/action">Game</Link></li>
        <li><Link to="/feedback">Round Over</Link></li>
        <li><Link to="/finalScore">FinalScore</Link></li>
      </ul>
      <div className="main-content">
        <Route exact path="/" component={FirstScreen}/>
        <Route path="/pending" component={PendingComponent}/>
        <Route path="/action" component={ActionComponent}/>
        <Route path="/feedback" component={FeedbackComponent}/>
        <Route path="/finalScore" component={FinalScoreComponent}/>
        <Route path="/host" component={HostComponent}/>
      </div>
    </div>
  </Router>
);

export default BasicRouter;