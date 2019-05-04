import React, {Component} from 'react';
import Button from './components/button'
import GameLoader, { GAMES } from './components/gameLoader'
import './App.scss';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { currentGame: GAMES.demo };
    this.setGame = this.setGame.bind(this);
  }

  setGame(game) {
    this.setState(Object.assign({}, this.state, {currentGame: game}))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Ian's Awesome Games</h2>
          <div className="button-bar">
            {Object.values(GAMES).map(game => (

              <Button 
                key={ game.name } 
                id={ game.name } 
                className='btn' 
                onClick={ () => this.setGame(game) }
                text={ game.name } 
              />

            ))}
          </div>
        </header>
        <GameLoader currentGame={this.state.currentGame} />
      </div>
    );
  }
}

export default App;
