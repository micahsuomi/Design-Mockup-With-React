import React from 'react';
import '../../assets/style/ButtonBig.css';


const ButtonBig = ({text, buttonStyle}) => {
    return (
        <div>
            <button style={buttonStyle}>{text}</button>
        </div>
    )
}

export default ButtonBig;
