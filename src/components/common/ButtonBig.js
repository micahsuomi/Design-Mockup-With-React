import React from 'react';
import './ButtonBig.css';


function ButtonBig({text, buttonStyle}) {
    return (
        <div>
            <button style={buttonStyle}>{text}</button>
        </div>
    )
}

export default ButtonBig;
