import React from "react";
import LevelOne from "./components/LevelOne";
import Modal from "./components/Modal/Modal";
// import "./stylesGame.css";
import "./test.css";
import Cancion from "./img/latcInstrumentalsPart1.mp3";

class LevelOneOne extends React.Component {


    constructor() {
        super();

        this.state = {
            isShowing : false,
            story: `You start your adventure in the citadel, you come into a street, you can
                continue forward, go left or right.`,
            link: "",
            message: "",
            cancion: Cancion,
            // attackButton:buttonHidden,
        }

    
    }
    
    handleClickLeft = () => {
        console.log("you decided to go left");
        let newStoryLine = `You make a left at the fork and run into a Sardukar Grunt
        time to fight`;
        this.setState({isShowing: true});
        this.setState({message: newStoryLine});
        this.setState({link: "/game"});
        console.log(this.state.link);
    };

    handleClickRight = () => {
      
        let newStoryLine = 
        `You turn right into an alley way and you see something shiny 
        in the corner, you walk over to it and you pick up a battery pack
        for your shields system. Install it quickly.`;
        this.setState({isShowing: true});
        this.setState({message: newStoryLine});
        this.setState({link: "/leveloneone"});
        this.setState({Battery01: false});
      
    };
    
    handleClickUp = () =>  {
        console.log("this button is up");
        let newStoryLine = `You walk forward and you come to a fork in the road where you 
        can only go left or right.`;
        console.log(newStoryLine)
        this.setState({isShowing: true});
        this.setState({message: newStoryLine});
        this.setState({link: "/levelonetwo"});
        
    };

    openModalHandler = () => {
        this.setState({
            isShowing: true
        });
    }

    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
    }

    render() {
        
        return (
            <div >
                { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }
                <img 
                    src={require("./img/mapPlay_LeftRight.jpg")}
                    alt="map"
                    height="100%"
                    width="100%"
                     />
                    <div 
                    style={{
                        position:"absolute",
                        top:150, marginTop:"-5%"
                    }}                
                    >
                <Modal
                    className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}
                    link={this.state.link}
                    >
                        {this.state.message}             
                </Modal>
                <img src={require("../src/img/Spinning-orb-new-GIF-2.gif")}   alt="Battery01" height="100"
                       style={{
                           float:"right"
                       }}
                /> 
                <LevelOne
                    story={this.state.story}
                    handleClickLeft={this.handleClickLeft}
                    handleClickRight={this.handleClickRight}
                    handleClickUp={this.handleClickUp}
                    
                />
                </div>
            </div>
        )
    };
}

export default LevelOneOne;