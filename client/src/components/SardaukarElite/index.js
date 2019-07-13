import React from "react";
import Picture from "../../img/sardaukarElite.gif";
import Pulsed from "../../img/slashPlayer (1).gif";

function SardaukarElite (props) {
    return (
        <div id="sardaukarElite">
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
            <img src={Picture} 
                alt="Sardaukar Elite" 
                height="450" 
                className={props.isEliteAttacking ? "Elite attacking" : "Elite"}/>
        </div>
    );
}

export default SardaukarElite;