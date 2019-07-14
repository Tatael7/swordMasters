import React, { Component } from "react";
import BeastHarkonnen from "./components/BeastHarkonnen";
import DuncanIdaho from "./components/DuncanIdaho";
import BattleMenu from "./components/BattleMenu";
import { Container, Row, Col } from "./components/Grid";
import Modal from "./components/Modal/Modal";
import Cancion from "./Images/bloody.mp3";
import "./stylesGame.css";
import "./test.css";

class Game6 extends Component {

  constructor() {
    super();
    this.state = {
      player: {
        shields: sessionStorage.getItem("playerShields"),
      },
      enemy: {
        shields: 5000
      },
      isDuncanAttacking: false,
      isBeastAttacking: false,
      archer: true,
      beastResting: true,
      isShowing: false,
      message: "",
      link: "",
      fireExploding:false,
      poweredUp:false,
      pulsedGrunt: false,
      pierce: false,
      cancion: Cancion

    }
  };

  normalAttack = () => {
    let newEnemyShields = this.state.enemy.shields - 300;
    console.log(`enemy health ${newEnemyShields}`);
    this.setState({
      enemy: {shields: newEnemyShields},
      archer: false,
      isDuncanAttacking:true,
      pulsedGrunt: true
    }); 
    this.deathCheckEnemy();
    setTimeout(() =>{this.setState({isDuncanAttacking:false})}, 550);
    setTimeout(() =>{this.setState({archer:true})}, 550);
    setTimeout(() => {this.setState({pulsedGrunt:false})}, 570);
    setTimeout(() => {this.enemyAttack()}, 1000);
    this.deathCheckPlayer();

  }

  enemyAttack = () => {
    this.setState({player: {shields: this.state.player.shields},
      beastResting: false,
      isBeastAttacking: true,
      archer: true
    });
    let roll = Math.floor(Math.random() * 9) + 1;
    console.log(`this is beast's roll ${roll}`);
    if ( roll === 6) {
      let newPlayerShields = this.state.player.shields - this.state.player.shields;
      this.setState({player: {shields: newPlayerShields}});
      setTimeout(() => {this.setState({isBeastAttacking:false})}, 550);
      setTimeout(() => {this.setState({beastResting: true})}, 560);

    }
    else {
      let newPlayerShields = this.state.player.shields - 500;
      this.setState({player: {shields: newPlayerShields}});
      setTimeout(() => {this.setState({isBeastAttacking:false})}, 550);
      setTimeout(() => {this.setState({beastResting: true})}, 560);
    }
  };
  
  pulseAttack = () => {
    this.setState({
      enemy: {shields: this.state.enemy.shields},
      archer: false,
      isDuncanAttacking:true
    });
    
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`this is the roll ${roll}`);
    if (roll === 1 || roll === 4) {
      this.setState({pierce:true});
      let damageDealt = Math.floor((80/100) * this.state.enemy.shields);
      console.log(`damage dealt ${damageDealt}`);
      let newEnemyShields = this.state.enemy.shields - damageDealt;
      console.log(`new enemy shields ${newEnemyShields}`);
      this.setState({enemy: {shields: newEnemyShields}});
    }
    else if (roll === 2 || roll === 5) {
      this.setState({pierce:true});
      let damageDealt = (40/100) * this.state.enemy.shields;
      console.log(`damage dealt ${damageDealt}`);
      let newEnemyShields = this.state.enemy.shields - damageDealt;
      console.log(`new enemy shields ${newEnemyShields}`);
      this.setState({enemy: {shields: newEnemyShields}});
    }
    else if (roll === 3 || roll === 6) {
      let damageDealt = 0;
      console.log(`damage dealt ${damageDealt}`);
      let newEnemyShields = this.state.enemy.shields - damageDealt;
      console.log(`new enemy shields ${newEnemyShields}`);
      this.setState({enemy: {shields: newEnemyShields}});
    }
    setTimeout(() =>{this.setState({isDuncanAttacking:false})}, 550);
    setTimeout(() =>{this.setState({pierce:false})}, 550);
    setTimeout(() =>{this.setState({archer:true})}, 550);
    setTimeout(() =>{this.enemyPulseAttack()}, 1000);
    this.deathCheckEnemy();
    this.deathCheckPlayer();  

  }

  enemyPulseAttack = () => {
    this.setState({player: {shields: this.state.player.shields},
      beastResting: false,
      isBeastAttacking: true,
      archer: true});
    let pulseAttackCost = Math.floor(this.state.player.shields/10);
    let damageDealt = pulseAttackCost + 500;
    this.setState({player: {shields: this.state.player.shields}});
    let roll = Math.floor(Math.random() * 12) + 1;
    console.log(`this is beast's roll ${roll}`);
    if ( roll === 6) {
      let newPlayerShields = this.state.player.shields - this.state.player.shields;
      this.setState({player: {shields: newPlayerShields}});
      setTimeout(() => {this.setState({isBeastAttacking:false})}, 550);
      setTimeout(() => {this.setState({beastResting: true})}, 560);
    }
    else {
      let newPlayerShields = this.state.player.shields - damageDealt;
      this.setState({player: {shields: newPlayerShields}});
      setTimeout(() => {this.setState({isBeastAttacking:false})}, 550);
      setTimeout(() => {this.setState({beastResting: true})}, 560);
    }
  }

  deathCheckPlayer = () => {
    let vida = this.state.player.shields; 
    if ( vida === 0 || vida < 0) {
      console.log("Duncan is dead");
      alert(`Duncan is dead, but in death he finds the power of coding magic.`);
      let newPlayerShields = 1000000000000000;
      this.setState({poweredUp:true});
      this.setState({player: {shields: newPlayerShields}});
      
    }
  };
  deathCheckEnemy = () => {
    if( this.state.enemy.shields === 0 || this.state.enemy.shields < 0) {
      console.log(`enemy is dead`);
      let newMessage = "Beast is dead";
      this.setState({fireExploding:true});
      this.setState({isShowing: true});
      this.setState({message: newMessage});
      this.setState({link:"/thankyou"});
    }
  };

  render() {
    function initiateStats(){
    
      sessionStorage.setItem("enemyShields", 3000);
      sessionStorage.setItem("enemyAttack", 500);
      sessionStorage.setItem("enemyDefense", 200);

  };
    return (
      <div className="A">
       {initiateStats()}
       <Modal
          className="modal"
          show={this.state.isShowing}
          close={this.closeModalHandler}
          link={this.state.link}
          style={{
            zIndex:10,
            position: "fixed",
            top:50
          }}
          >  
            {this.state.message}             
        </Modal>
        <Container>
          <div >
          <img src={require("../src/img/rain.gif")} alt="rain" height="80%" width="100%"
             style={{zIndex:0, position:"fixed", top:40}}   
              />
          <Row>
              <Col size="md-3">
                <DuncanIdaho
                  archer={this.state.archer}
                  isDuncanAttacking={this.state.isDuncanAttacking}
                  pierce={this.state.pierce}                  
                  poweredUp={this.state.poweredUp}
                />
              </Col>
              <Col size="md-9">
                <BeastHarkonnen
                  beastResting={this.state.beastResting}
                  isBeastAttacking={this.state.isBeastAttacking}
                  fireExploding={this.state.fireExploding}
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
              style={{
                position:"relative",
                zIndex:2,
                bottom: -50
              }}
              cancion={this.state.cancion}
            />
          </Row>
          </div>
        </Container>
        
      </div>
   
    );
  }
}

export default Game6;
