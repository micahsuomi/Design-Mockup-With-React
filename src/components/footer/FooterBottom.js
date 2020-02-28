import React from 'react';
import '../../assets/style/FooterBottom.css';
import FooterIcon from './FooterIcon';
import footerIconData from './FooterIconData';

const FooterBottom = () => {

    const icons = footerIconData.map((item, index) => {
        return <FooterIcon key={index} icon={item.icon}/>
    })
    return (
        
            <div className="footer-bottom">
            <div className="footer-bottom__left">
                <p className="footer-top__item-paragraph">Copyright @2003-2012 Ventus Ivc. All Rights Reserved.</p>
            </div>
            <div className="footer-bottom__right">
                     {icons}
                </div>

        </div>
        
    )
}

export default FooterBottom;
