import React from "react";
import {Container, Row, Col} from "./components/Grid";
import introMovie from "../src/img/Ginaz_level2_cutSc1.gif";
import Foto from "./img/battleScreen.png";
import Foto2 from "./img/foroScre.png";
import "./test.css";


class Intro extends React.Component {


    render() {

        function initiateEasyMode() {
            sessionStorage.clear();
            sessionStorage.setItem("playerShields", 100000);
            sessionStorage.setItem("playerAttack", 100);
            sessionStorage.setItem("playerDefense", 50);
            sessionStorage.setItem("enemyShields", 450);

            console.log(sessionStorage.getItem("playerShileds")); 

        }

        function initiateHardMode() {
            sessionStorage.clear();
            sessionStorage.setItem("playerShields", 700);
            sessionStorage.setItem("playerAttack", 100);
            sessionStorage.setItem("playerDefense", 50);
            sessionStorage.setItem("enemyShields", 450);

            console.log(sessionStorage.getItem("playerShileds")); 

        }

        function clickedButton() {
            alert("i have been clicked");
        }
        return(
            <div       style={{marginTop:"10%"}}>
                <Container
              
                    >
                    <Row>
                        <Col size="lg-6">
                            <img src={introMovie} alt="introMovie" width="100%"
                            className="introMovie"
                            
                            />
                        </Col>
                        {/* <Col size="lg-6">
                            <h1>here goes the carousel</h1>
                        </Col> */}
                    </Row>
                    <Row>
                        <Col size="lg-6">
                            <h1>Here goes the carousel</h1>
                        
                        </Col>
                        <Col size="lg-6">
                            <ol>
                                <li>
                                    <img/>
                                </li>
                            </ol>
                        </Col>
                    </Row>
                    <h2>Begin Game: Choose Difficulty</h2>
                    <Row>
                        <Col size="lg-3">
                            <a href="/leveloneone"><button
                                onClick={initiateEasyMode}
                            >
                                Easy</button>
                            </a>
                            <ul>
                            <li className="difficulty">
                                Begin your adventure in easy mode.
                            </li>
                            <li>
                                Death is turned off.
                            </li>
                            <li>
                                Enjoy our game casually.
                            </li>
                            </ul>
                        </Col>
                        <Col size="lg-3">
                            <a href="#"><button
                                
                            >
                                Hard</button>
                            </a>
                            <ul>
                            <li>
                                Hard mode is for real experienced mercanaries.
                            </li>
                            <li>
                                Death features are turned on.
                            </li>
                            <li>
                                For the purpouses of this demo we have disabled Hard mode, but please 
                                return at launch for the full experience.
                            </li>
                            </ul>
                        </Col>
                        <Col size="lg-3">
                            <a href="/game3"><button
                                onClick={initiateEasyMode}
                            >
                                Fun!</button>
                            </a>
                            <ul>
                                <li>Skip right to the Gauntlet, the most action packed part 
                                    of our game.
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Intro;
