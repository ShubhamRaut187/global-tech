import React from 'react';
import TestimonialRatings from '../Photos/TestimonialRatings.png'
import './ComponentStyles/TestimonialCard.css'
function TestimonialCard(props) {
    return (
        <div>
            <div className='testimonial_card_main'>
            <div className='testimonial_graphic'>
            <i className="fa-solid fa-quote-left fa-xl" style={{color:'white'}}></i>
            </div>
            <div className='testimonial_text'>
                <p>This sunscreen is very good for
                    summer and u can use this
                    winter also i have dry skin
                    and i use this cream its
                    very good for my skin..
                    and its not sticky.</p>
            </div>
            <div className='testimonial_rating'>
                <img src={TestimonialRatings} alt="Ratings" />
            </div>
            <div className='testimonial_name'>
                <p>Shubham Raut</p>
            </div>
        </div>
        </div>
    );
}

export default TestimonialCard;