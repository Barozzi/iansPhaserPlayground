import Phaser from 'phaser';
import React, {Component} from 'react';

class DemoComponent extends Component {

  componentDidMount() {
    var config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: {
            y: 200
          }
        }
      },
      scene: {
        preload: preload,
        create: create
      }
    };

    // Associate the game canvas with the component so that we can destroy it later.
    this.game = new Phaser.Game(config);

    function preload() {
      this.load.image('sky', 'assets/bamboo.jpg');
      this.load.image('panda', 'assets/panda.jpg');
      this.load.image('red', 'assets/red.jpg');
    }

    function create() {
      const sky = this.add.image(400, 300, 'sky');
      sky.scaleX = 1.2;
      sky.scaleY = 1.2;

      var particles = this.add.particles('red');
      var emitter = particles.createEmitter({
        speed: 350,
        scale: {
          start: 1,
          end: 0
        },
        blendMode: 'ADD'
      });

      var panda = this.physics.add.image(400, 100, 'panda');
      panda.setVelocity(100, 200);
      panda.setBounce(1, 1);
      panda.setCollideWorldBounds(true);
      emitter.startFollow(panda);
    }
  }

  componentWillUnmount() {
    this.game.destroy(true, false);
  }

  render() {
    return (
      <div className="demo-component">
        <h3>Awesome Sparkle Panda Demo</h3>
      </div>
    );
  }
}

export default DemoComponent;
