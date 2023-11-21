import React from 'react';
import './home.css'
import Banner from '../../Components/Home1/Banner';
import Company from '../../Components/Home1/Shared/Marquee/Company';
import GetStarted from '../../Components/Home1/GetStarted';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Company/>
            <GetStarted/>
        </div>
    );
};

export default Home;