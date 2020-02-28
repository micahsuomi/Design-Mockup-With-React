import React from 'react';
import '../../assets/style/Testimonial.css';

const Testimonial = (props) => {
    let {name, text} = props;
    return (
        <div className="small-bubble">
            <h3 className="small-bubble__header">{name}</h3>
                <p className="small-bubble__paragraph italic">{text}</p>
            </div>
    )
}

export default Testimonial;