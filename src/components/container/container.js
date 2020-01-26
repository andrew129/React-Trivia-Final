import React from 'react';
import './container.css';

const Container = props => {
    return <div style={{height: `${props.height}`}} className="container">{props.children}</div>
}

export default Container;