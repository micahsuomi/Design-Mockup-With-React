import React from 'react';
import './TestimonialsDevelopment.css';
import TestimonialsList from './TestimonialsList';
import Development from './components/testimonials/Development';
import Banner from './components/common/banner/Banner';

const TestimonialsDevelopment = (props) => {
    return (
             <div>
             <div class="main-section-bottom__container">
           
                    <div class="main-section-bottom__wrapper">
                        <TestimonialsList />
                        <Development />
                            </div>

                                </div>
                                <Banner text1 = "Get in touch with us" text2 ="now" />

                            </div>


    )
}

export default TestimonialsDevelopment;
