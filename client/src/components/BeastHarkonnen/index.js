import React from "react";
import Foto from "./beastHarkonnen.gif";
import Picture from "./beastPunch.gif";
import Pulsed from "../../img/slashPlayer (1).gif";

function BeastHarkonnen (props) {
    return (
        <div id="beastHarkonnen">
          <img 
            src={require('../../img/fire-explosion-animation-2.gif')} 
            id="fireExplosion" alt ="fireExplosion" height ="500"
            style={{
                position:"absolute", zIndex:5,
                    
            }} 
            className={props.fireExploding ? "fireExploding" : "fireNotExploding"        
            } 
            />
            <img src={Pulsed}
                id="pulsedGrunt"
                alt=" pulsed grunt"
                height="500"
                width="500"
                style={{
                    position: "absolute",
                    zIndex: 2
                }}
                className={props.pulsedGrunt ? "pulsedGrunt" : "notPulsedGrunt"}
            />
            <img src={Foto}
                alt="Beast Attacking"
                height="500"
                style={{
                    position: "absolute"
                }}
                className={props.beastResting ? "beastResting" : "beastRestingNot"}
            />
           <img src={Picture} 
            alt="Beast Harkonnen" height="500" 
            className={props.isBeastAttacking ? "Beast attacking" : "Beast"}
            /> 
        </div> 
    );
}

export default BeastHarkonnen;