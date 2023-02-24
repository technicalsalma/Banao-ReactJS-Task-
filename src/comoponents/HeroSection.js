import React from 'react';
import Hero_img from '../assest/images/hero-img.png'


const HeroSection = () => {
    return (
        <div>
           <div className='position-relative'>
             <img className='img-fluid shadow-4' src={Hero_img} alt=''></img>
            </div>
           <div className='position-absolute text-white text-start' style={{"marginTop":"-150px", "marginLeft":"200px"}}>
           <h1>Computer Engineering</h1>
            <p>142,765 Computer Engineers follow this</p>
           </div>
        </div>
        
);
};

export default HeroSection;