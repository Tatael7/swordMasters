import React from "react";
import LevelOne from "./components/LevelOne";
import Modal from "./components/Modal/Modal";

class LevelOneThree extends React.Component {

    constructor() {
        super();

        this.state = {
            isShowing : false,
            story: `You've defeated the Elite and Grunt team and you take 
            the Elite's key card and to enter the hidden passageway in the end of the alley.
            Suddenly you are surrounded by enemies, you must choose how to proceed with battle.`,
            link: "",
            message: ""
        }
    }
    

    handleClickLeft = () => {
        console.log("you decided to go left");
        let newStoryLine = `You turn to the Elite to your left and engage.`;
        this.setState({isShowing: true});
        this.setState({message: newStoryLine});
        this.setState({link: "/game3"});
        console.log(this.state.link);
    };

    handleClickRight = () => {
        let newStoryLine = `You turn to the right to take on a pair of Elites`;
        this.setState({isShowing: true});
        this.setState({message: newStoryLine});
        this.setState({link: "/game5"});

    };
    
    handleClickUp = () =>  {
        console.log("this button is up");
        let newStoryLine = `You take on a group of Sardukar Grunts;`;
        console.log(newStoryLine)
        this.setState({isShowing: true});
        this.setState({message: newStoryLine});
        this.setState({link: "/game4"});
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
            <div style={{marginTop:"-10%", position:"relative", zIndex:0}}>
                { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }
                <img 
                    src={require("./img/mapPlay_Straight.jpg")}
                    alt="map"
                    height="100%"
                    width="100%"
                
                />
                <div 
                    style={{
                        position:"absolute",
                        top:150
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

export default LevelOneThree