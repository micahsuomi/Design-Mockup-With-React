import React from 'react';
import './Testimonial.css';

const Testimonial = (props) =>{
    return (
        <div class="small-bubble">
            {props.key}
            <h3 class="small-bubble__header">{props.name}</h3>
                <p class="small-bubble__paragraph italic">{props.text}</p>
            </div>
    )
}

export default Testimonial;