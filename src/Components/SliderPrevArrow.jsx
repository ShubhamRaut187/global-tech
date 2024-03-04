import React from 'react';
import './ComponentStyles/SliderArrow.css'
import Prev from '../Photos/PrevArr.png'
function SliderPrevArrow({onClick}) {
    return (
        <div onClick={onClick} style={{marginRight:'10px', marginLeft:'0px'}}className='slick-arrow slick-prev custom-prev-arrow slider_arrow_main'>
            <img src={Prev} alt="nextarr" />
        </div>
    );
}

export default SliderPrevArrow;