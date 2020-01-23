import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className='header'>
            <h1 className='header-title'>Mineral Trivia Game</h1>
            <ul className='header-list'>
                <li className='github'>
                    <p>Andrew Stiles: </p>
                    <p>Github</p>
                </li>
                <li className='linkedin'>
                    <p>Tim Stiles: </p>
                    <p>LinkedIn</p>
                </li>
            </ul> 
        </div>
    )
}

export default Header;