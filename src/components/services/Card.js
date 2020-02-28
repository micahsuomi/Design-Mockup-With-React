import React from 'react';
import ButtonSmall from '../common/ButtonSmall';
import '../../assets/style/Card.css';

const Card = ({icon, headerBold, headerThin, text}) => {
    return (
        <div>
            <div className="main-section-top__card">
                <div className="main-section-top__card-head">
                    <div className="card-head__icon-container">
                        <div className="white-icon"><i className={icon}></i></div>
                        </div>
                    </div>
                    <div className="main-section-top__card-body">
                        <h3 className="card__header"><span className="bold">{headerBold} </span>{headerThin}</h3>
                        <p className="card__paragraph">{text}</p>
                        <div className="read-more__btn-container"><ButtonSmall /></div>
                    </div>
                </div>
            </div>
    )
}

export default Card;
