import React from 'react';
import '../../assets/style/TestimonialsList.css';
import testimonialData from './TestimonialData';
import Testimonial from './Testimonial';

const TestimonialsList = () => {
    const testimonials = testimonialData.map((item) => {
        return <Testimonial 
        key={item.id}
        image={item.img}
        name={item.name}
        text={item.text} />
    })
    return (

        <div className="main-section-bottom__left-container">
            <div className="main-section-bottom__header-left-container">
                <div className="main-section-bottom__header">
                    <span className="bottom__heading">Testimonials</span>
                </div>
            </div> 
            <div className="main-section-bottom small-bubbles__wrapper">
                {testimonials}    
        
            </div>
            </div>
    )
}

export default TestimonialsList;
