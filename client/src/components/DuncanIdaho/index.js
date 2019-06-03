import React from "react";
import Picture from "../../img/duncanIdaho.gif";
import Power from "../../img/XSNu.gif";
import Pierce from "../../Images/piercer.gif";


function DuncanIdaho (props) {

    return (
         <div id="duncanIdaho">
            <img src={Power}
                id="powerUp"
                alt="power up"
                height="500"
                width="500"
                style={{
                    position: "absolute",
                    zIndex:2
                }}
                className={props.poweredUp ? "poweredUp" : "poweredNotUp"}        

            />
            <img src={Pierce}
                id="pierce"
                alt="pierce"
                height="600"
                widht="500"
                style={{
                    position: "absolute",
                    //right: 10,
                    //zIndex:2
                }}
                className={props.pierce ? "pierce" : "notPierce"}
            
            />
            <img src={Picture} alt="Duncan Idaho" 
                height="450"
                className={props.isAttacking ? "DuncanIdaho attacking" : "DuncanIdaho"}/>
            
        </div>
      
    );
}

export default DuncanIdaho;
