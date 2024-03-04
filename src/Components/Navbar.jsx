import React,{useState} from 'react';
import BrandLogo from '../Photos/BrandLogo.png'
import { NavLink,Link } from 'react-router-dom';
// import {Link} from 'react-router-hash-link'
import {CodeIcon,HamburgetMenuClose,HamburgetMenuOpen} from './ComponentStyles/Icon'

import './ComponentStyles/Navbar.css'
function Navbar(props) {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    
    // #70645C
    return (
        <div id='navbar-main'>
            <div className='nav-brand'>
                <div className='nav_brand_one_div'>
                <i className="fa-solid fa-location-dot fa-lg" style={{color:'#70645C'}}></i>
                </div>
                <div className='nav_brand_two_div'>
                    <img src={BrandLogo} alt="logo" />
                </div>
                <div className='nav_brand_three_div'>
                <i className="fa-solid fa-magnifying-glass fa-lg" style={{color:'#70645C'}}></i>
                <i className="fa-regular fa-heart fa-lg" style={{color:'#70645C'}}></i>
                <i className="fa-regular fa-user fa-lg" style={{color:'#70645C'}}></i>
                <i className="fa-solid fa-bag-shopping fa-lg" style={{color:'#70645C'}}></i>
                </div>
            </div>
            <div className="navbar">
            <div className="nav-container">
                {/* <Link to="#home" className="nav-logo">
                    <span>Shubham Raut</span>
                    <i className="fas fa-code"></i>
                    <span className="icon">
                    <CodeIcon />
                    </span>
                </Link> */}

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                // exact
                to="#home"
               
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                // exact
                to="#about"
               
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Face
              </Link>
            </li>
            <li className="nav-item">
              <Link
                // exact
                to="#skills"
               
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Hair
              </Link>
            </li>
            <li className="nav-item">
              <Link
                // exact
                to="#projects"
               
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Body
              </Link>
            </li>
            <li className="nav-item">
              <Link
                // exact
                to="/contact"
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Secret's
              </Link>
            </li>
            <li className="nav-item">
              <Link
                // exact
                to="/contact"
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Mini's
              </Link>
            </li>
            <li className="nav-item">
              <Link
                // exact
                to="/contact"
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Gifting
              </Link>
            </li>
            <li className="nav-item">
              <Link
                // exact
                to="/contact"
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
               Offers
              </Link>
            </li>
            <li className="nav-item">
              <Link
                // exact
                to="/contact"
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
               Testimonials
              </Link>
            </li>
            <li className="nav-item">
              <Link
                // exact
                to="/contact"
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Club
              </Link>
            </li>
            <li className="nav-item">
              <Link
                // exact
                to="/contact"
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About Us
              </Link>
            </li>
          </ul>
          
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <HamburgetMenuClose />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuOpen />
              </span>
            )}
          </div>
        </div>
        </div>
        </div>
        
    );
}

export default Navbar;