import React from 'react';
import './Home2.css'
import './Commonstyle.css'
import Banner from '../../Components/Home2/Banner';
import Aboutus from '../../Components/Home2/Aboutus';
import Service from '../../Components/Home2/Service';
import Portfolio from '../../Components/Home2/Portfolio';
import Faq from '../../Components/Home2/Faq';
import LetsCollaborate from '../../Components/Home2/LetsCollaborate';
import SliderHome2 from '../../Components/Home2/SliderHome2';

const Home2 = () => {
    return (
        <div className='home2_scrollbar'>
            <Banner/>
            <Aboutus/>
            <Service/>
            <Portfolio/>
            <Faq/>
            <SliderHome2/>
            <LetsCollaborate/>
        </div>
    );
};

export default Home2;