import React, { Component } from "react";
import { relative } from "path";
import "./stylesGame.css"



class Login extends React.Component {

    constructor() {
        super();

        this.state = {
            isShowing : false,
            message: `Continue forth towards your destiny.`,
            link: "leveloneone"
        }

    
    }


    render() {
        return(
            <div  style={{zIndex:100, position:relative, fontSize:100, marginTop:"5%"}} className="row">
               <h1
               style={{zIndex:100, position:relative, fontSize:80, marginTop:"5%", marginLeft:"25%"}}
               >Login Coming Soon</h1>


                <div className="row" id= "loginCharacterDiv" style={{zIndex:100, position:relative, fontSize:100, marginLeft:"5%", maxHeight:"75%"}}>
                    <img src={require("../src/img/Mark.gif")}
                        style={{zIndex:100, position:relative, height:"25%" }}/>

                        <img src={require("../src/img/Sprite_Adolf.gif")}
                        style={{zIndex:100, position:relative, height:"25%" }}
                        className="rightFighterFlip"
                        />

                          <img src={require("../src/img/Sprite_Beau.gif")}
                        style={{zIndex:100, position:relative, height:"25%" }}/>

                          <img src={require("../src/img/Sprite_Irvin.gif")}
                        style={{zIndex:100, position:relative, height:"25%" }}
                        className="rightFighterFlip"/>

                          <img src={require("../src/img/Sprite_Joseph.gif")}
                        style={{zIndex:100, position:relative, height:"25%" }}/>

                          <img src={require("../src/img/SPRITE_Mike.gif")}
                        style={{zIndex:100, position:relative, height:"25%" }}
                        className="rightFighterFlip"/>

                          {/* <img src={require("../src/img/SwordnStash.gif")}
                        style={{zIndex:100, position:relative, height:"25%" }}/> */}
                    </div>
                        <div className="row"
                        style={{zIndex:100, position:"relative", width:"90%"}}>
                        <h2 className="combined"
                            style={{zIndex:100, position:relative, fontSize:50, marginTop:"-80%", marginLeft:"15%", width:"100%"}}
                        >Thanks to all who participated in DemoDay</h2><br>
                        </br>
                            <h3
                                className="combined"
                                style={{zIndex:100, position:relative, marginTop:"-86%", marginLeft:"15%", width:"100%"}}
                                >More to Come!</h3>

                        </div>


            </div>
        )
    }
}

export default Login;