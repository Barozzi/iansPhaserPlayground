import React, {Component} from 'react';
import DemoComponent from './demoComponent'
import DemoComponentTwo from './demoComponentTwo'
import DefenderComponent from './defenderComponent'
import MassAttackComponent from './massAttackComponent'
import FloodComponent from './floodComponent'

export const GAMES = {
  demo: {
    name: 'PANDA DEMO',
    component: <DemoComponent />
  },
  surfDemo: {
    name: 'SURF DEMO',
    component: <DemoComponentTwo />
  },
  defender: {
    name: 'DEFENDER',
    component: <DefenderComponent />
  },
  massAttack: {
    name: 'MASS ATTACK',
    component: <MassAttackComponent />
  },
  flood: {
    name: 'FLOOD',
    component: <FloodComponent />
  },
}

class GameLoader extends Component {
  render () {
    return(
      <div className="the-game">
        {this.props.currentGame.component}
      </div>
    )
  }
}

export default GameLoader;
