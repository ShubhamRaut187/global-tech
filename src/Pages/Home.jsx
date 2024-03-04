import React,{useState} from 'react';
import ProductCard from '../Components/ProductCard';
import TestimonialCard from '../Components/TestimonialCard';
import SliderNextArrow from '../Components/SliderNextArrow';
import SliderPrevArrow from '../Components/SliderPrevArrow';
import './PageStyles/Home.css'

// Images
import HomeBaner from '../Photos/HomeBaner.png'
import silicon from '../Photos/siliconfree.png'
import petroleum from '../Photos/petroleum.png'
import veg from '../Photos/veg.png'
import Face from '../Photos/Face.png'
import Hair from '../Photos/Hair.png'
import Body from '../Photos/Body.png'
import Gift from '../Photos/Gift.png'
import Human from '../Photos/Human.png'
import NavyCircle from '../Photos/NavyCircle.png'
import Bottom from '../Photos/Bottom.png'
import Prod1 from '../Photos/Kushuma35mlPaint.png'
import Prod2 from '../Photos/Mahodaya Rose Paint.png'
import Prod3 from '../Photos/Kumkumadi.png'

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";




function Home(props) {
    const [divColors, setDivColors] = useState({
        face: {
            text:'#70645C',
            bg:'white'
        },
        hair: {
            text:'w#70645C',
            bg:'white'
        },
        body: {
            text:'#70645C',
            bg:'white'
        }
       
    });
    
    const handleDivClick = (divName) => {
        const newColors = {
            face: {
                text:'#70645C',
                bg:'white'
            },
            hair: {
                text:'#70645C',
                bg:'white'
            },
            body: {
                text:'#70645C',
                bg:'white'
            }
        };
        newColors[divName]= {
            text:'white',
            bg:'#70645C'
        };

        setDivColors(newColors);
    };
      


    const settings = {
        // dots: true,
        // fade: true,
        infinite: true,
        speed: 500,
        initialSlide: 0,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <SliderNextArrow />,
        prevArrow: <SliderPrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 820,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                initialSlide: 0
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                infinite: true,
                slidesToScroll: 1,
                initialSlide: 0
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                infinite: true,
                slidesToScroll: 1
              }
            }
          ]
      };

      const updateSettings = () => {
        const screenWidth = window.innerWidth;
        let newSettings = { ...updateSettings() };
    
        if (screenWidth <= 768) {
          newSettings.slidesToShow = 2;
        } else if (screenWidth <= 992) {
          newSettings.slidesToShow = 3;
        } else {
          newSettings.slidesToShow = 4;
        }
    
        return newSettings;
      };

    return (
        <div id='Home_main'>
            <div className='home_baner'>
                <img src={HomeBaner} alt="" />
            </div>
            <div className='home_info_main'>
                <div className='home_info_one'>
                    <h1>We seek the ancient. We seek the timeless</h1>
                    <h1>We seek the clean way</h1>
                    <p>Inspired from the ancient our products have a rare potency to enhance beauty because we do custom formulation, curate ingredients, test, manufacture, design packaging all at our very own licensed organic factory. </p>
                </div>
                <div className='home_info_images_div'>
                    <div>
                        <img src={veg} alt='silicon' />
                    </div>
                    <div>
                        <img src={veg} alt="silicon" />
                    </div>
                    <div>
                        <img src={veg} alt="petroleum" />
                    </div>
                </div>
            </div>
            <div className='home_categories_main'>
                <div className='home_face_div' onClick={()=>{
                    handleDivClick('face')
                }} style={{backgroundColor:`${divColors.face.bg}`}}>
                    <div className='category_img_div'>
                        <img src={Face} alt="face" />
                    </div>
                    <div className='category_name_div'>
                        <h1 style={{color:`${divColors.face.text}`}}>Face</h1>
                    </div>
                </div>
                <div className='home_hair_div'  onClick={()=>{
                    handleDivClick('hair')
                }} style={{backgroundColor:`${divColors.hair.bg}`}}>
                <div className='category_img_div'>
                        <img src={Hair} alt="Hair" />
                    </div>
                    <div className='category_name_div'>
                        <h1 style={{color:`${divColors.hair.text}`}}>Hair</h1>
                    </div>
                </div>
                <div className='home_body_div'  onClick={()=>{
                    handleDivClick('body')
                }} style={{backgroundColor:`${divColors.body.bg}`}} >
                <div className='category_img_div'>
                        <img src={Body} alt="Body" />
                    </div>
                    <div className='category_name_div'>
                        <h1 style={{color:`${divColors.body.text}`}}>Body</h1>
                    </div>
                </div>
            </div>
            <div className='home_product_slider_main'>
                <div className='home_product_slider'>
                    <Slider {...settings}>
                        <ProductCard Image={Prod1}/>
                        <ProductCard Image={Prod2}/>
                        <ProductCard Image={Prod3}/>
                        <ProductCard Image={Prod1}/>
                        <ProductCard Image={Prod2}/>
                        <ProductCard Image={Prod3}/>
                        <ProductCard Image={Prod1}/>
                        <ProductCard Image={Prod2}/>
                        <ProductCard Image={Prod3}/>
                    </Slider>
                    
                </div>
                <div className='home_product_slider_btn'>
                        <button>View All</button>
                </div>
            </div>
            <div className='best_seller_main'>
                <div className='best_seller_head'>
                    <h1>Our Best Seller</h1>
                </div>
                <div className='best_seller_products'>
                        <ProductCard Image={Prod1}/>
                        <ProductCard Image={Prod2}/>
                        <ProductCard Image={Prod3}/>
                        <ProductCard Image={Prod1}/>
                        <ProductCard Image={Prod1}/>
                        <ProductCard Image={Prod2}/>
                        <ProductCard Image={Prod3}/>
                        <ProductCard Image={Prod1}/>
                </div>
                <div className='home_product_slider_btn'>
                        <button>View All</button>
                </div>
            </div>
            <div className='testimonials_main'>
                <div className='testimonials_head'>
                    <h1>Customer Testimonials</h1>
                </div>
                <div className='home_product_slider'>
                    <Slider {...settings}>
                        <TestimonialCard/>
                        <TestimonialCard/>
                        <TestimonialCard/>
                        <TestimonialCard/>
                        <TestimonialCard/>
                        <TestimonialCard/>
                    </Slider>
                </div>
            </div>
            <div className='timeless_main'>
                <div className='timeless_head'>
                    <h1>Why Timeless</h1>
                </div>
                <div className='timeless_card_parent'>
                    <div className="container" style={{backgroundImage:`url(${Hair})`}}>
                        <div className="content">
                            <h1 className="initial">The Place Holder</h1>
                            <p className="hidden-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sunt ipsum explicabo enim soluta aliquid veniam magni omnis tenetur fugit, voluptates ex similique, eius quam dignissimos sit perferendis quasi necessitatibus?</p>
                        </div>
                    </div>
                    <div className="container" style={{backgroundImage:`url(${Hair})`}}>
                        <div className="content">
                            <h1 className="initial">The Place Holder</h1>
                            <p className="hidden-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sunt ipsum explicabo enim soluta aliquid veniam magni omnis tenetur fugit, voluptates ex similique, eius quam dignissimos sit perferendis quasi necessitatibus?</p>
                        </div>
                    </div>
                    <div className="container" style={{backgroundImage:`url(${Hair})`}}>
                        <div className="content">
                            <h1 className="initial">The Place Holder</h1>
                            <p className="hidden-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sunt ipsum explicabo enim soluta aliquid veniam magni omnis tenetur fugit, voluptates ex similique, eius quam dignissimos sit perferendis quasi necessitatibus?</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='features_main'>
                <div className='feature_card'>
                    <div className='feature_img'>
                        <img src={Gift} alt="gift" />
                    </div>
                    <div className='feature_name'>
                    <h2>Free Shipping</h2>
                    </div>
                </div>
                <div className='feature_card'>
                    <div className='feature_img'>
                        <img src={NavyCircle} alt="gift" />
                    </div>
                    <div className='feature_name'>
                    <h2>Free Shipping</h2>
                    </div>
                </div>
                <div className='feature_card'>
                    <div className='feature_img'>
                        <img src={Human} alt="gift" />
                    </div>
                    <div className='feature_name'>
                        <h2>Free Shipping</h2>
                    </div>
                </div>
                <div className='feature_card'>
                    <div className='feature_img'>
                        <img src={Gift} alt="gift" />
                    </div>
                    <div className='feature_name'>
                    <h2>Free Shipping</h2>
                    </div>
                </div>
            </div>
            <div className='footer_main'>
                <div className='footer_links'>
                    <div>
                        <p>Shop</p>
                        <ul>
                            <li>Face Care</li>
                            <li>Body Care</li>
                            <li>Hair Care</li>
                            <li>Custom</li>
                            <li>Gifting</li>
                        </ul>
                    </div>
                    <div>
                    <p>Shop</p>
                        <ul>
                            <li>Our Story</li>
                            <li>Giving Back</li>
                            <li>Why Timeless</li>
                            <li>Philosophy</li>
                            <li>Certifications</li>
                            <li>Careers</li>
                            <li>Policy</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div>
                    <p>Shop</p>
                        <ul>
                           <li>My Account</li>
                           <li>Custom Products</li>
                           <li>Timeless Clubs</li>
                           <li>Customer Stories</li>
                           <li>Terms & Conditions</li>
                           <li>Refer a Friend</li>
                           <li>Contact Us</li>
                           <li>FAQ</li>
                        </ul>
                    </div>
                    <div>
                    <p>Shop</p>
                        <ul>
                            <li>Face Care</li>
                            <li>Body Care</li>
                            <li>Hair Care</li>
                            <li>Custom</li>
                            <li>Gifting</li>
                        </ul>
                        <div className='socialicons'>
                        <i className="fa-brands fa-twitter fa-xl" style={{color:'white'}}></i>
                        <i className="fa-brands fa-facebook fa-xl"  style={{color:'white'}}></i>
                        <i className="fa-brands fa-youtube fa-xl"  style={{color:'white'}}></i>
                        <i className="fa-brands fa-linkedin-in fa-xl"  style={{color:'white'}}></i>
                        <i className="fa-brands fa-instagram fa-xl"  style={{color:'white'}}></i>
                        </div>
                    </div>
                </div>
                <div className='bottom'>
                    <img src={Bottom} alt="bottm" />
                </div>
            </div>
        </div>
    );
}

export default Home;