import React from 'react';
import './ComponentStyles/ProductCard.css'
import kumkumadi from '../Photos/Kumkumadi.png'
import Ratings from '../Photos/Ratings.png'
function ProductCard({Image,Name,Price}) {
    return (
        <div className='product_card_main'>
            <div className='product_card_img'>
                <img src={Image} alt="" />
            </div>
            <div className='product_card_info_div'>
                <div className='product_name'>
                    <p>{Name}</p>
                </div>
                <div className='product_card_rating'>
                    <img src={Ratings} alt="Ratings" />
                </div>
                <div className='product_card_price'>
                    <p>₹{Price}.00</p>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;