import React from 'react';
import BreadCrumb from '../../Utils/BreadCrumb/BreadCrumb';
import GetStarted from '../../Components/Home1/Shared/GetStarted/GetStarted';
import OurApproch from '../../Components/Home1/Shared/OurApproch/OurApproch';
import GrowthWith from '../../Components/Home1/Shared/GrowthWith/GrowthWith';
import BestService from '../../Components/Home1/Shared/BestService/BestService';
import ClientReviewSlider from '../../Components/Home1/Shared/ClientReview/ClientReviewSlider';

const About = () => {
    return (
        <div>
            <BreadCrumb title="About US"></BreadCrumb>
            <GetStarted/>
            <OurApproch/>
            <GrowthWith/>
            <BestService/>
            <ClientReviewSlider/>
        </div>
    );
};

export default About;