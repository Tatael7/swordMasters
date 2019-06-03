import React from "react";
import Picture from "./sardaukarGrunt.gif";
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
            <img src={Picture} 
                alt="Sardaukar Grunt" 
                height="450"
            />
        </div>
    );
}

export default SardaukarGrunt;

