import React, {Component} from 'react';
import DemoComponent from './demoComponent'
import DemoComponentTwo from './demoComponentTwo'
import DefenderComponent from './defenderComponent'
import MassAttackComponent from './massAttackComponent'

export const GAMES = {
  demo: 'PANDA DEMO',
  surfDemo: 'SURF DEMO',
  defender: 'DEFENDER',
  massAttack: 'MASS ATTACK',
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
      case GAMES.defender:
        gameComponent = <DefenderComponent />
        break;
      case GAMES.massAttack:
        gameComponent = <MassAttackComponent />
        break;
      default:
        gameComponent = <DemoComponent />
    }

    return(
      <div className="the-game">
        {gameComponent}
      </div>
    )
  }
}

export default GameLoader;
