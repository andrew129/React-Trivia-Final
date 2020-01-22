import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div class='header'>
            <h1 class='header-title'>Mineral Trivia Game</h1>
            <ul class='header-list'>
                <li class='github'>
                    <p>Andrew Stiles: </p>
                    <p>Github</p>
                </li>
                <li class='linkedin'>
                    <p>Tim Stiles: </p>
                    <p>LinkedIn</p>
                </li>
            </ul> 
        </div>
    )
}

export default Header;