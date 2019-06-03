import React, { Component } from "react";
import DuncanIdaho from "./components/DuncanIdaho";
import SardaukarGrunt from "./components/SardaukarGrunt";
import BattleMenu from "./components/BattleMenu";
import { Container, Row, Col } from "./components/Grid";
import Modal from "./components/Modal/Modal";
import "./test.css";

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
        shields: 500
      },
      isAttacking: false,
      isShowing: false,
      message: "",
      link: "",
      pulsedGrunt: false
    }
  };



  normalAttack = () => {
    
    console.log("normal attack");
    console.log(this.state.enemy.shields);
    let newEnemyShields = this.state.enemy.shields - 100;
    console.log(`enemy health ${newEnemyShields}`);
    this.setState({enemy: {shields: newEnemyShields},isAttacking:true,}); 
    setTimeout(() =>{this.setState({isAttacking:false})}, 550);
    this.enemyAttack();
    this.deathCheckEnemy();
    this.deathCheckPlayer();
    // this.setState({
    //   player: {attack: this.state.player.attack},
    //   player: {shields: this.state.player.shields},
    //   player: {defense: this.state.player.defense}
    // });

  }
 
  enemyAttack = () => {
    this.setState({player: {shields: this.state.player.shields}});
    let newPlayerShields = this.state.player.shields - 70;
    this.setState({player: {shields: newPlayerShields}});
  };
  
  pulseAttack = () => {
    this.setState({
      enemy: {shields: this.state.enemy.shields},
      isAttacking:true,
      pulsedGrunt:true
    });
    let roll = Math.floor(Math.random() * 6) + 1;
    if (roll === 1 || roll === 4) {
      let damageDealt = Math.floor((80/100) * this.state.enemy.shields);
      let newEnemyShields = this.state.enemy.shields - damageDealt;
      this.setState({enemy: {shields: newEnemyShields}});
    }
    else if (roll === 2 || roll === 5) {
      let damageDealt = Math.floor((40/100) * this.state.enemy.shields);
      let newEnemyShields = this.state.enemy.shields - damageDealt;
      this.setState({enemy: {shields: newEnemyShields}});
    }
    else if (roll === 3 || roll === 6) {
      let damageDealt = 0;
      let newEnemyShields = this.state.enemy.shields - damageDealt;
      this.setState({enemy: {shields: newEnemyShields}});
    }
    setTimeout(() =>{this.setState({isAttacking:false})}, 550);
    setTimeout(() =>{this.setState({pulsedGrunt:false})}, 550);
    this.enemyPulseAttack();
    this.deathCheckEnemy();
    this.deathCheckPlayer();
    

  }

  enemyPulseAttack = () => {
    this.setState({player: {shields: this.state.player.shields}});
    let pulseAttackCost = this.state.player.shields/10;
    let damageDealt = 70 + pulseAttackCost;
    let newPlayerShields = this.state.player.shields - damageDealt;
    this.setState({player: {shields: newPlayerShields}});
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
      let newMessage = "Enemy is dead";
      sessionStorage.setItem("playerShields", this.state.player.shields);
      this.setState({isShowing: true});
      this.setState({message: newMessage});
      this.setState({link: "/levelonetwo"});

    }
  };

  render() {
     
    return (
      
      <div className="A">
        <Modal
          className="modal"
          show={this.state.isShowing}
          close={this.closeModalHandler}
          link={this.state.link}
        >
          {this.state.message}             
        </Modal>
        <Container>
          <div>
            <Row>
              <Col size="md-3" >
                <DuncanIdaho 
                  isAttacking={this.state.isAttacking}            
                />
              </Col>
              <Col size="md-6"></Col>
              <Col size="md-3">
                <SardaukarGrunt
                isAttacking={this.state.isAttacking}
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
              /> 
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Game;
