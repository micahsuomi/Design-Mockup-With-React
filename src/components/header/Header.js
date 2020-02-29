import React from 'react';
import '../../assets/style/Header.css';
import headerImage from '../../assets/imgs/Header-img.png';
import ButtonLearnMore from '../common/ButtonLearnMore';
import Banner from '../common/banner/Banner';

const Header = (props) => {
    return (

    <div className="header-background">
        <div className="header-wrapper">
            <div className="header-top-wrapper">
                <div className="header-left">
                    <img src={headerImage} className="header-left__img" alt ="" />
                </div>
                    <div className="header-right">
                        <h1 className="header-right__heading"><span className="italic bold">Powerfully simple</span><span className="thinner"> with a</span>  <span className="italic bold">squeaky clean</span> <span className="thinner"> design</span></h1>
                        <h3 className="header-right__subheading">Find out how you can offer quick and powerful solutions your customers now!</h3>
                        <ButtonLearnMore text = "Learn More" />
                    </div>
                </div>
                
                <Banner text1="Create a"
                        text2="powerful solution"
                        text3="now!" />
                        
           
                </div>
                
            </div>
    )
}

export default Header;
