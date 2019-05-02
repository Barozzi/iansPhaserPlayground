import Phaser from 'phaser';
import React, {Component} from 'react';

// TODO rename this class
class TemplateComponent extends Component {

  componentDidMount() {
    // TODO - paste in phaser code here
    // change var game = new Phaser.Game(config) to this.game = new Phaser.Game(config);
    // 'var game =' to 'this.game ='
  }

  componentWillUnmount() {
    this.game.destroy(true, false);
  }

  // TODO rename the h3 tag below
  render() {
    return (
      <div className="game-component">
        <h3>The Game with no name</h3>
      </div>
    );
  }
}

// TODO rename to match the class above
export default TemplateComponent;
