import Phaser from 'phaser';
import React, {Component} from 'react';

class DemoComponentTwo extends Component {

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

    this.game = new Phaser.Game(config);

    function preload() {
      this.load.image('wave', 'assets/wave.jpg');
      this.load.image('surfer', 'assets/surfer.jpg');
      this.load.image('blue', 'assets/blue.jpg');
    }

    function create() {
      var wave = this.add.image(400, 300, 'wave');
      wave.scaleX = 1.2;
      wave.scaleY = 1.2;
      var particles = this.add.particles('blue');
      var emitter = particles.createEmitter({
        speed: 350,
        scale: {
          start: .1,
          end: 0
        },
        blendMode: 'ADD'
      });

      var surfer = this.physics.add.image(100, 50, 'surfer');
      surfer.setVelocity(100, 200);
      surfer.setBounce(1, 1);
      surfer.setCollideWorldBounds(true);
      emitter.startFollow(surfer);
      surfer.scaleX = .2;
      surfer.scaleY = .2;
    }
  }

  componentWillUnmount() {
    this.game.destroy(true, false);
  }


  render() {
    return (
      <div className="demo-component">
        <h3>Awesome Sparkle Surfer Demo</h3>
      </div>
    );
  }
}

export default DemoComponentTwo;
