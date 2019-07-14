import React, { Component } from "react";
import DuncanIdaho from "./components/DuncanIdaho";
import SardaukarGrunt from "./components/SardaukarGrunt";
import BattleMenu from "./components/BattleMenu";
import { Container, Row, Col } from "./components/Grid";
import Modal from "./components/Modal/Modal";
import "./test.css";
import Cancion from "./img/IronMaiden-ToTameLand8-Bit.mp3";

class Game extends Component {

  constructor() {
    super();
    this.state = {
      player: {
        shields: sessionStorage.getItem("playerShields"),
        attack: sessionStorage.getItem("playerAttack"),
        defense: sessionStorage.getItem("playerDefense")
        
      },
      enemy: {
        shields: sessionStorage.getItem("enemyShields"),
        attack: sessionStorage.getItem("enemyAttack"),
        defense: sessionStorage.getItem("enemyDefense")
      },

      // as you can see we set the primal picture ie the attacking 
      // frame to be false but we set the secondary picture ie the resting frame (that we 
      // just set to hidden) as true, remember the attacking frame has the most value
      // to us, now go to line 48
      isDuncanAttacking: false,
      isGruntAttacking: false,
      archer: true,
      gruntResting: true, //calls the resting image
      isShowing: false,
      message: "",
      link: "",
      pulsedGrunt: false,
      pierce: false,
      cancion: Cancion
    }
  };



  normalAttack = () => {
    let newEnemyShields = this.state.enemy.shields - 100;
    console.log(`enemy health ${newEnemyShields}`);
    // in this set state we switch the pictures, we set the attacking frame to true
    //and we set the resting frame to false, so for the enemies it would take place at line 65
    this.setState({
      enemy: {shields: newEnemyShields},
      archer: false,
      isDuncanAttacking:true,
      pulsedGrunt: true
    }); 
    this.deathCheckEnemy();
    setTimeout(() =>{this.setState({isDuncanAttacking:false})}, 825);
    setTimeout(() => {this.setState({pulsedGrunt:false})}, 550);
    setTimeout(() => {this.enemyAttack()}, 1000);
    this.deathCheckPlayer();

  }
 
  enemyAttack = () => {
    this.setState({player: {shields: this.state.player.shields},
      gruntResting: false,
      isGruntAttacking: true,
      archer: true
    });
    let newPlayerShields = this.state.player.shields - 100;
    this.setState({player: {shields: newPlayerShields}});
    setTimeout(() => {this.setState({isGruntAttacking:false})}, 550);
    setTimeout(() => {this.setState({gruntResting:true})}, 552); //setstate of resting frame

  };
  
  pulseAttack = () => {
    this.setState({
      enemy: {shields: this.state.enemy.shields},
      archer: false,
      isDuncanAttacking:true
    });
    let roll = Math.floor(Math.random() * 6) + 1;
    if (roll === 1 || roll === 4) {
      this.setState({pierce:true});
      let damageDealt = Math.floor((80/100) * this.state.enemy.shields);
      console.log(`damage dealt ${damageDealt}`);
      let newEnemyShields = this.state.enemy.shields - damageDealt;
      this.setState({enemy: {shields: newEnemyShields}});
    }
    else if (roll === 2 || roll === 5) {
      this.setState({pierce:true});
      let damageDealt = Math.floor((40/100) * this.state.enemy.shields);
      console.log(`damage dealt ${damageDealt}`);
      let newEnemyShields = this.state.enemy.shields - damageDealt;
      this.setState({enemy: {shields: newEnemyShields}});
    }
    else if (roll === 3 || roll === 6) {
      let damageDealt = 0;
      let newEnemyShields = this.state.enemy.shields - damageDealt;
      this.setState({enemy: {shields: newEnemyShields}});
    }
    setTimeout(() =>{this.setState({isDuncanAttacking:false})}, 825);
    setTimeout(() =>{this.setState({pierce:false})}, 550);
    setTimeout(() => {this.enemyPulseAttack()}, 1000);
    this.deathCheckEnemy();
    this.deathCheckPlayer();
    

  }

  enemyPulseAttack = () => {
    this.setState({player: {shields: this.state.player.shields},
      gruntResting: false,
      isGruntAttacking: true,
      archer: true
    });
    let pulseAttackCost = Math.floor(this.state.player.shields/10);
    let damageDealt = 70 + pulseAttackCost;
    let newPlayerShields = this.state.player.shields - damageDealt;
    this.setState({player: {shields: newPlayerShields}});
    setTimeout(() => {this.setState({isGruntAttacking:false})}, 550);

  }

  deathCheckPlayer = () => {
    let vida = this.state.player.shields; 
    if ( vida === 0 || vida < 0) {
      console.log("duncan is dead");
    }
  };
  deathCheckEnemy = () => {
    if( this.state.enemy.shields === 0 || this.state.enemy.shields < 0) {
      console.log(`enemy is dead`);
      let newMessage = `Enemy has been defeated, you gain experience`;
      sessionStorage.setItem("playerShields", (this.state.player.shields) + 400);
      sessionStorage.setItem("playerAttack", 125);
      sessionStorage.setItem("playerDefense", 50);
      this.setState({isShowing: true});
      this.setState({message: newMessage});
      this.setState({link: "/levelonetwo"});

    }
  };

  render() {
    function initiateStats(){
    
      sessionStorage.setItem("enemyShields", 450);
      sessionStorage.setItem("enemyAttack", 100);
      sessionStorage.setItem("enemyDefense", 0);

  };
    return (
      
      <div className="A">
        {initiateStats()}
        <Modal  
        // style={{position:"absolute", zIndex:500}}
          className="modal"
          show={this.state.isShowing}
          close={this.closeModalHandler}
          link={this.state.link}
        >
          {this.state.message}             
        </Modal>
        <Container>
          <div style={{marginTop:"-10%", position:"relative", zIndex:0}}>
            <Row>
              <Col size="md-3" >
                <DuncanIdaho 
                  archer={this.state.archer}
                  isDuncanAttacking={this.state.isDuncanAttacking}
                  pierce={this.state.pierce}        
                />
              </Col>
              <Col size="md-6"></Col>
              <Col size="md-3">
                <SardaukarGrunt style={{position:"relative", zIndex:0}}
                // so here you just pass the prop of the resting frame and if
                //all goes well it should work
                gruntResting={this.state.gruntResting}
                isGruntAttacking={this.state.isGruntAttacking}
                pulsedGrunt={this.state.pulsedGrunt} 
                />                
              </Col>
            </Row>
            <Row>
               <BattleMenu
                playerShields = {this.state.player.shields}
                playerAttack = {this.state.player.attack}
                playerDefense = {this.state.player.defense}
                normalAttack = {this.normalAttack}
                pulseAttack = {this.pulseAttack}
                enemyShields = {this.state.enemy.shields} 
                enemyAttack= {this.state.enemy.attack}
                enemyDefense = {this.state.enemy.defense}  
                cancion = {this.state.cancion}
              /> 
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Game;
