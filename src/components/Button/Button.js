import React from 'react';
import './Button.css';

const Button = props => {
    return (
        <button onClick={props.onClick} class='btn'>{props.message}</button>
    )
}

export default Button;