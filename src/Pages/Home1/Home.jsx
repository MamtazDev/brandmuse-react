import React from 'react';
import './home.css'
import Banner from '../../Components/Home1/Banner';
import Company from '../../Components/Home1/Shared/Marquee/Company';
import GetStarted from '../../Components/Home1/Shared/GetStarted/GetStarted';
import OurApproch from '../../Components/Home1/Shared/OurApproch/OurApproch';
import GrowthWith from '../../Components/Home1/Shared/GrowthWith/GrowthWith';
import BestService from '../../Components/Home1/Shared/BestService/BestService';
import OurService from '../../Components/Home1/OurService';
import Pricing from '../../Components/Home1/Shared/Pricing/Pricing';
import ClientReviewSlider from '../../Components/Home1/Shared/ClientReview/ClientReviewSlider';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Company/>
            <GetStarted/>
            <OurApproch/>
            <GrowthWith/>
            <BestService/>
            <OurService/>
            <Pricing/>
            <ClientReviewSlider/>
        </div>
    );
};

export default Home;