import React from "react";
import LevelOne from "./components/LevelOne";
import Modal from "./components/Modal/Modal";
// import Cancion from "./img/latcInstrumentalsPart4.mp3";

class LevelFour extends React.Component {

    constructor() {
        super();

        this.state = {
            isShowing : false,
            story: `You stand in a sea of blood, dead Sardukar lie around you, 
            rendered to ribbons by the edge of your sword. You hear
            the rythmic machine breathing of your final enemy, he stands before you waiting.
            One more battle hero.`,
            link: "",
            message: "",
            // cancion: Cancion

        }
    }
    

    handleClickLeft = () => {
        console.log("you decided to go left");
        let newStoryLine = `You look left and you see your reflection in the helment of a Grunt
        , how far you have come, how easily you've embraced savagery, but you must continue
        forward, you must make him pay.`;
        this.setState({isShowing: true});
        this.setState({message: newStoryLine});
        this.setState({link: "/levelonefour"});
        console.log(this.state.link);
    };

    handleClickRight = () => {
        let newStoryLine = `You turn to the right, the intoxicating perfume of blood 
        mixing with the rain, it scares you just how much you've learned to love the smell.`;
        this.setState({isShowing: true});
        this.setState({message: newStoryLine});
        this.setState({link: "/levelonefour"});

    };
    
    handleClickUp = () =>  {
        console.log("this button is up");
        let newStoryLine = `"You have come Duncan" growls the man beast in front of you. 
        He who has molded your life into a nightmare, it's time to have him feel pain.`;
        console.log(newStoryLine)
        this.setState({isShowing: true});
        this.setState({message: newStoryLine});
        this.setState({link: "/game6"});
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
        
        console.log(this.state);
        return (
            <div >
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
                        top:70
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
                    // cancion={this.state.cancion}
                />
                </div>
            </div>
        )
    };
}

export default LevelFour;