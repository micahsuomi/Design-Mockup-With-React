import React from 'react';
import './FooterIcon.css';
import './FooterIconData';

const FooterIcon = (props) => {
    return (
        <div class="icon-wrapper">
            <i className={`fab fa${props.icon}`}></i>
        </div>
    )
}

export default FooterIcon;
