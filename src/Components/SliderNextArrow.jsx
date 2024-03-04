import React from 'react';
import './ComponentStyles/SliderArrow.css'
import Next from '../Photos/NextArr.png'
function SliderNextArrow({onClick}) {
    return (
        <div onClick={onClick} className='slick-arrow slick-next custom-next-arrow slider_arrow_main'>
            <img src={Next} alt="nextarr" />
        </div>
    );
}

export default SliderNextArrow ;