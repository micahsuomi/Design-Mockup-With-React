import React from 'react';
import './FooterBottom.css';
import FooterIcon from './FooterIcon';
import footerIconData from './FooterIconData';

const FooterBottom = () => {

    const icons = footerIconData.map((item) => {
        return <FooterIcon icon={item.icon}/>
    })
    return (
        
            <div class="footer-bottom">
            <div class="footer-bottom__left">
                <p class="footer-top__item-paragraph">Copyright @2003-2012 Ventus Ivc. All Rights Reserved.</p>
            </div>
            <div class="footer-bottom__right">
                     {icons}
                </div>

        </div>
        
    )
}

export default FooterBottom;
