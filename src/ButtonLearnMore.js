import React from 'react';
import './ButtonLearnMore.css';

const ButtonLearnMore = (props) => {
    return (
        <div>
            <button className="blue-btn btn__learn-more">{props.text}</button>
        </div>
    )
}

export default ButtonLearnMore;
