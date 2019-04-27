import React, {Component} from 'react';
import DemoComponent from './demoComponent'
import DemoComponentTwo from './demoComponentTwo'

export const GAMES = {
  demo: 'PANDA DEMO',
  surfDemo: 'SURF DEMO'
}

class GameLoader extends Component {
  render () {
    let gameComponent;
     switch (this.props.currentGame) {
      case GAMES.demo:
        gameComponent = <DemoComponent />
        break;
      case GAMES.surfDemo:
        gameComponent = <DemoComponentTwo />
        break;
      default:
        gameComponent = <DemoComponent />
    }

    return(
      <div>
        {gameComponent}
      </div>
    )
  }
}

export default GameLoader;
