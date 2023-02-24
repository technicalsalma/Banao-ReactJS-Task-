import React from 'react';
import Article from '../comoponents/Article';
import Education from '../comoponents/Education';
import HeroSection from '../comoponents/HeroSection';
import Job from '../comoponents/Job';
import Meet from '../comoponents/Meet';
import SignUp from './SignUp';


const Home = () => {
    return (
        <div>
         <HeroSection/>
         <Article/>
         <Education/>
         <Meet/>
         <Job/>
        </div>
    );
};

export default Home;