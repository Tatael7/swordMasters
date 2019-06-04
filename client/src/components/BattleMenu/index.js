import React from "react";
import ArrowLeft from "../ArrowLeft";
import ArrowUp from "../ArrowUp";
import ArrowRight from "../ArrowRight";
import MusicPlayer from "react-audio-player";
import Cancion from "../../img/IronMaiden-ToTameLand8-Bit.mp3";


function BattleMenu(props)  {
   
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <button 
                            style={{fontSize:25,borderColor:"black", borderWidth:4, width:"80%"}}
                            className="btn btn-warning"
                            onClick={props.normalAttack}
                        >
                        Attack
                        </button>
                        <button 
                            style={{marginTop:30, fontSize:25, borderColor:"black", borderWidth:4, width:"80%"}}
                            className="btn btn-danger"
                            onClick={props.pulseAttack}
                        >Pulse Attack </button>
                    </div>
                    <div className="col-sm-3">
                        <ul 
                            className="playerStats" 
                            style={{fontSize:35, color:"lime", backgroundColor:"grey", borderRadius:20}}
                        >
                           <li>Shields: {props.playerShields}</li>
                           <li>Attack: {sessionStorage.getItem("playerAttack")}</li>
                           <li>Defense: {sessionStorage.getItem("playerDefense")}</li>
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <div className="container">
                            <div className="row"
                                style={{marginLeft:60}}
                            >
                                <ArrowUp
                                    handleClickUp={props.handleClickUp}
                                />
                            </div>
                            <div className="row">
                                <ArrowLeft
                                    handleClickLeft={props.handleClickLeft}
                                />
                                <ArrowRight
                                    handleClickRight={props.handleClickRight}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <ul 
                            className="enemyStats" 
                            style={{fontSize:35, color:"lime", backgroundColor:"grey", borderRadius:20, float:"right"}}
                        >
                            <li>Shields:{props.enemyShields}</li>
                            <li>Attack: {sessionStorage.getItem("enemyAttack")}</li>
                            <li>Defense:{sessionStorage.getItem("enemyDefense")}</li>
                            
                        </ul>
                        <MusicPlayer
                            src={props.cancion}
                            autoPlay
                            controls
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}



export default BattleMenu;