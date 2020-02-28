import React from 'react';
import '../../assets/style/Banner.css';
import ButtonBig from '../../../ButtonBig';
import {buttonStyle} from  '../../../buttonStyle';

const Banner = (props) => {
    return (
            <div className="header-bottom-banner">
                    <h1 className="bottom-banner__heading">
                        <span className="thinner">{props.text1}</span> <span className="italic">{props.text2}</span> <span className="thinner">{props.text3}</span></h1>
                    <div class="bottom-banner__right">
                    <ButtonBig buttonStyle={buttonStyle} text="Get Started"/>
                    </div>
                </div>  
    )
}

export default Banner;
