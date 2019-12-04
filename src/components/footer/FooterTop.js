import React from 'react';
import './FooterTop.css';

const FooterTop = () => {
    return (
                    
            <div className="footer-top">
                <div className="footer-top__item about-us__item">
                    <h3 className="footer-top__item-header">About Us</h3>
                    <p className="footer-top__item-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam placeat modi possimus pariatur eaque iusto temporibus, minus maiores deleniti facere.</p>

                    <p className="footer-top__item-paragraph">123 Street Name</p>
                    <p className="footer-top__item-paragraph">Road Name</p>
                    <p className="footer-top__item-paragraph">London</p>
                    <p className="footer-top__item-paragraph">+44 74139 13807</p>

            </div>

            <div className="footer-top__item tweets__item">
                    <h3 className="footer-top__item-header">Latest Tweets</h3>
                    <p className="footer-top__item-paragraph"><span className="bold white-color">@HyeSoo</span> Just subscribed another great item on #themeforest about 3 hours ago</p>

                    <p className="footer-top__item-paragraph"><span className="bold white-color">@Jaynesh</span> Working on an awesome theme for #themeforest about 3 months ago</p>

                </div>

                <div className="footer-top__item posts__item">
                    <h3 className="footer-top__item-header">Latest Posts</h3>

                        <p className="footer-top__item-paragraph item-paragraph-lorem">Lorem ipsum dolor sit amet
                            </p>

                            <p className="footer-top__item-paragraph item-paragraph-lorem">Lorem ipsum dolor sit amet
                                </p>

                                <p className="footer-top__item-paragraph item-paragraph-lorem">Lorem ipsum dolor sit amet
                                    </p>

                                    <p className="footer-top__item-paragraph item-paragraph-lorem">Lorem ipsum dolor sit amet
                                        </p>
                
                    </div>

                    <div className="footer-top__item flickr__item">
                            <h3 className="footer-top__item-header">Flickr</h3>
                            <div className="flickr__item-box__wrapper box-wrapper">
                                    <div className="box"></div>
                                    <div className="box"></div>
                                    <div className="box"></div>
                                    <div className="box"></div>
                                    <div className="box"></div>
                                    <div className="box"></div>
                                    <div className="box"></div>
                                    <div className="box"></div>
                            </div>
                        </div>
                        </div>



    )
}

export default FooterTop;
