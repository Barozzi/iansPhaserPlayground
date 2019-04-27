import React, {Component} from 'react';
import Button from './components/button'
import GameLoader, { GAMES } from './components/gameLoader'
import './App.scss';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGame: GAMES.surfDemo,
    }
    this.setGamePandaDemo = this.setGamePandaDemo.bind(this);
    this.setGameSurfDemo = this.setGameSurfDemo.bind(this);
  }
  setGamePandaDemo() {
    console.log('load panda')
    this.setState(Object.assign({}, this.state, {currentGame: GAMES.demo}))
  }
  setGameSurfDemo() {
    console.log('load surfer')
    this.setState(Object.assign({}, this.state, {currentGame: GAMES.surfDemo}))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Ian's Awesome Games</h2>
          {this.state.currentGame}
          <div className="button-bar">
            <Button className="btn" onClick={this.setGamePandaDemo} text={GAMES.demo} />
            <Button className="btn" onClick={this.setGameSurfDemo} text={GAMES.surfDemo} />
          </div>
        </header>
        <GameLoader currentGame={this.state.currentGame} />
      </div>
    );
  }
}

export default App;
