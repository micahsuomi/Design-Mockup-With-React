import React from 'react';
import '../../assets/style/FooterIcon.css';
import './FooterIconData';

const FooterIcon = (props) => {
    return (
        <div className="icon-wrapper">
            <i className={`fab fa${props.icon}`}></i>
        </div>
    )
}

export default FooterIcon;
