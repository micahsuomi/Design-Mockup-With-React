import React from 'react';
import '../../assets/style/TestimonialsDevelopment.css';
import TestimonialsList from './TestimonialsList';
import Development from './Development';
import Banner from '../common/banner/Banner';

const TestimonialsDevelopment = () => {
    return (
             <div>
             <div className="main-section-bottom__container">
           
                    <div className="main-section-bottom__wrapper">
                        <TestimonialsList />
                        <Development />
                            </div>

                                </div>
                                <Banner text1 = "Get in touch with us" text2 ="now" />

                            </div>


    )
}

export default TestimonialsDevelopment;
