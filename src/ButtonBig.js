import React from 'react';
import './ButtonBig.css';

function ButtonBig(props) {
    return (
        <div>
            <button className="blue-btn">{props.text}</button>
        </div>
    )
}

export default ButtonBig;
