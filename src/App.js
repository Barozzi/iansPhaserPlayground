import React, {Component} from 'react';
import Button from './components/button'
import GameLoader, { GAMES } from './components/gameLoader'
import './App.scss';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentGame: GAMES.demo,
    }
    this.setGamePandaDemo = this.setGamePandaDemo.bind(this);
    this.setGameSurfDemo = this.setGameSurfDemo.bind(this);
    this.setGameDefender = this.setGameDefender.bind(this);
    this.setGameMassAttack = this.setGameMassAttack.bind(this);
    this.setGameFlood = this.setGameFlood.bind(this);
  }

  setGamePandaDemo() {
    this.setState(Object.assign({}, this.state, {currentGame: GAMES.demo}))
  }
  setGameSurfDemo() {
    this.setState(Object.assign({}, this.state, {currentGame: GAMES.surfDemo}))
  }
  setGameDefender() {
    this.setState(Object.assign({}, this.state, {currentGame: GAMES.defender}))
  }
  setGameMassAttack() {
    this.setState(Object.assign({}, this.state, {currentGame: GAMES.massAttack}))
  }
  setGameFlood() {
    this.setState(Object.assign({}, this.state, {currentGame: GAMES.flood}))
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Ian's Awesome Games</h2>
          <div className="button-bar">
            <Button className="btn" onClick={this.setGamePandaDemo} text={GAMES.demo} />
            <Button className="btn" onClick={this.setGameSurfDemo} text={GAMES.surfDemo} />
            <Button className="btn" onClick={this.setGameDefender} text={GAMES.defender} />
            <Button className="btn" onClick={this.setGameMassAttack} text={GAMES.massAttack} />
            <Button className="btn" onClick={this.setGameFlood} text={GAMES.flood} />
          </div>
        </header>
        <GameLoader currentGame={this.state.currentGame} />
      </div>
    );
  }
}

export default App;
