import Home from './components/Home';
import './components/assets/css/app.css';
import {useState} from 'react';
import {HashRouter, Switch,Route } from "react-router-dom";
import GamePage from './components/GamePage';
import ManageRoom from './components/ManageRoom';
import StepContext from "./context/StepContext"
import PlayerContext from "./context/PlayerContext"

const  App = () => {
  const [step, setStep] = useState([]);
  const [player, setPlayerId] = useState([]);

  return (
    <PlayerContext.Provider
    value={
      [
        player,
        setPlayerId
      ]
    }>
      <StepContext.Provider
        value={[
          step,
          setStep
        ]}
      >
        <HashRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/room/:id" component={ManageRoom} />
            <Route path="/game/:id" component={GamePage} />
          </Switch>
        </HashRouter>
      </StepContext.Provider>
    </PlayerContext.Provider>
  );
}

export default App;