import React, {Component} from 'react';
import Card from './Card';
import cardData from './CardData';
import './CardsList.css';

class CardsList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        const displayCards = cardData.map((item) => {
            return <Card 
            key={item.id}
            icon={item.icon}
            headerBold={item.headerBold}
            headerThin={item.headerThin}
            text={item.text}/>
        })
        return(

                <div className="main-section-top__container">
                    <div className="main-section-top__wrapper">
                        {displayCards}
                    </div>
                </div>
    )
        
    }
}

export default CardsList;
    

