import React from 'react';
import './Home3.css'
import '../Home2/Commonstyle.css'
import Banner from '../../Components/Home3/Banner';
import Company from '../../Components/Home1/Shared/Marquee/Company';
import Service from '../../Components/Home3/Service';
import ServiceOffer from '../../Components/Home3/ServiceOffer';
import DigitalMarketing from '../../Components/Home3/DigitalMarketing';
import OurProject from '../../Components/Home3/OurProject';
import SliderHome3 from '../../Components/Home3/SliderHome3';
import LetsWork from '../../Components/Home3/LetsWork';


const Home3 = () => {
    return (
        <div className='home3Bg'>
            <Banner />
            <Company />
            <Service />
            <ServiceOffer />
            <DigitalMarketing />
            <OurProject />
            <SliderHome3 />
            <LetsWork />
        </div>
    );
};

export default Home3;