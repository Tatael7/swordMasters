import React from "react";
import Picture from "./archAt.gif";
import Archer from "./archEmiya.gif";
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
            {/* added this part */}
            {/* notes for changing sprite
            so basically the image at the bottom ie "Picture" is the main
            image and the attacking image should be above with an absolute position
            then you pass it the property that youll use to call it and thats all you 
            do in the component
            now go to stylesGame.css line 260*/}
            <img src={Archer} alt="archer"
                height="450"
                style={{
                    position: "absolute"
                }}
                className={props.archer ? "archer" : "archerNot"}
            />
            {/*this remains the same */}
            <img src={Picture} alt="Duncan Idaho" 
                height="450"
                className={props.isDuncanAttacking ? "DuncanIdaho attacking" : "DuncanIdaho"}
            />
        </div>
      
    );
}

export default DuncanIdaho;
