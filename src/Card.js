import React from 'react';
import ButtonSmall from './ButtonSmall';
import './Card.css';

const Card = (props) => {
    return (
        <div>
            <div className="main-section-top__card">
                <div className="main-section-top__card-head">
                    <div className="card-head__icon-container">
                        <div className="white-icon"><i className={`fas fa ${props.icon}`}></i></div>
                        </div>
                    </div>
                    <div className="main-section-top__card-body">
                        <h3 className="card__header"><span className="bold">{props.headerBold} </span>{props.headerThin}</h3>
                        <p className="card__paragraph">{props.text}</p>
                        <div className="read-more__btn-container"><ButtonSmall /></div>
                    </div>
                </div>
            </div>
    )
}

export default Card;
