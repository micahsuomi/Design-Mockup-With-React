import React from 'react';
import './TestimonialsList.css';
import testimonialData from './TestimonialData';
import Testimonial from './Testimonial';

const TestimonialsList = (props) => {
    const testimonials = testimonialData.map((item) => {
        return <Testimonial 
        key={item.id}
        image={item.img}
        name={item.name}
        text={item.text} />
    })
    return (

        <div class="main-section-bottom__left-container">
            <div class="main-section-bottom__header-left-container">
                <div class="main-section-bottom__header">
                    <span class="bottom__heading">Testimonials</span>
                </div>
            </div> 
            <div class="main-section-bottom small-bubbles__wrapper">
                {testimonials}    
        
            </div>
            </div>
    )
}

export default TestimonialsList;
