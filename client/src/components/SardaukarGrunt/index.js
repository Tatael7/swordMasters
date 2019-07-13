import React from "react";
import Picture from "./poweredGrunt.gif";
import Foto from "./sardaukarGrunt.gif";
import Pulsed from "../../img/slashPlayer (1).gif";

function SardaukarGrunt (props) {
    return (
        <div id="sardaukarGrunt">
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
                // the resting frame part of the component
                alt="Sardaukar Grunt Powered"
                height="450"
                style={{
                    position:"absolute"
                }}
                className={props.gruntResting ? "gruntResting" : "gruntRestingNot"}
                // setting classname that gets called
            />
            <img src={Picture} 
                alt="Sardaukar Grunt" 
                height="450"
                className={props.isGruntAttacking ? "Grunt attacking" : "Grunt"}
            />
        </div>
    );
}

export default SardaukarGrunt;

