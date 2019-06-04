import React, { Component } from 'react';
import Card from "./components/MenuSelections";
import Title from "./components/Title";

import Modal from './components/Modal/Modal';

class App extends Component {

    constructor() {
        super();

        this.state = {
            isShowing: false
        }
    }

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

    render () {

        function initiateStats(){
            sessionStorage.clear();
            sessionStorage.setItem("playerShields", 700);
            sessionStorage.setItem("playerAttack", 100);
            sessionStorage.setItem("playerDefense", 50);
            sessionStorage.setItem("enemyShields", 450);

            // sessionStorage.setItem("enemyShields", 450);
            // sessionStorage.setItem("enemyAttack", 100);
            // sessionStorage.setItem("enemyDefense", 0);
    
            console.log(sessionStorage.getItem("playerShields"));
            console.log(sessionStorage.getItem("playerAttack"));
            console.log(sessionStorage.getItem("playerDefense"));

        };

        return (
            <div
                style={{
                    position:"relative",
                    top:50
                }}
            >
                <Title />
                <Card />
                {initiateStats()}
                { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }

                {/* <button className="open-modal-btn" onClick={this.openModalHandler}>New Game</button> */}

                <Modal
                    className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}
                    link={"/leveloneone"}
                    >
                        Let the adventure begin.                
                </Modal>
            </div>
        );
    }
}

export default App;