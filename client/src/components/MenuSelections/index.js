import React from 'react';
import "./menu.css";


const MenuSelect = () => {
    return (
        <div className="card" id="title">
            <ul id="menuul">
                <li>
                    <a href="/intro">New Game</a>
                </li>
                <li>
                    <a href="/Login">Login</a>
                </li>
                <li>
                    <a href="/LeaderBoard">Leader Board</a>
                </li>
                <li>
                    <a href="/Store">Item Shop</a>
                </li>
                <li>
                    <a href="/thankyou">Credits</a>
                </li>
            </ul>
        </div>
    );
}


export default MenuSelect;
