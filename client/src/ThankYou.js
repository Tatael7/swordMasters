import React, { Component } from "react";
// import {Aliens} from "./img/aliens2.png";


class ThankYou extends Component{
    render() {
        return(
            <div 
                style={{
                    position:"relative",
                    top:100

                }}
            >
        
            <div
                style={{color:"white", marginLeft:"10%"}}
                >
                    <h4>The team of Oasis RPG would like to take this opportunity to thank:</h4>
                    <ul>
                        <li><h2>Marcus Howard-Lead Instructor, PowerClap Maestro</h2></li>
                        <li><h3>Brandon Wong- Master of Code Kendo</h3></li>
                        <li><h3>Leeland Clenista- Clutch TA</h3></li>
                        <li><h3>Beau Burrier- Saturday Instructor</h3></li>
                        <li><h3>Alex- Saturday TA</h3></li>
                        <li><h3>Remy- Saturday TA</h3></li>
                        <h3>Jacob Metzinger- Tutor</h3>
                        <li><h3>Trilogy UCSD Support Staff and Career Services: Eric, Rebecca, Iris</h3></li>
                        <li>
                            <h5><marquee behavior="scroll" direction="left">Everyone in the Monday/Wednesday class. ReasonToDrink.Fun, Market Snapshop</marquee></h5>
                        </li>
                        <li><h2>Congratulations: You have unlock new concept art from Ryan Scott</h2></li>
                    
                        </ul>
                        <div>
                            <img src={require('./img/aliens2.png')} style={{marginLeft:"20%",  width:"40%"}}/><br></br>
                            <img src={require("./img/teamDemoDay2019.jpg")} style={{marginLeft:"10%", width:"70%"}}/><br></br>
                            <h3>Team Oasis: James Ravenscroft III, Armando Ochoa, Ryan Scott</h3>
                        <br></br><h2>This Game is for educational use only.</h2>
                            </div>    
                    
                </div>
            </div>
        )
    }
}

export default ThankYou;

