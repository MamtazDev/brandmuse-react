import React from 'react';
import BreadCrumb from '../Utils/BreadCrumb/BreadCrumb';
import GetStarted from '../Components/Home1/Shared/GetStarted/GetStarted';
import OurApproch from '../Components/Home1/Shared/OurApproch/OurApproch';
import GrowthWith from '../Components/Home1/Shared/GrowthWith/GrowthWith';
import ClientReviewSlider from '../Components/Home1/Shared/ClientReview/ClientReviewSlider';
import Pricing from '../Components/Home1/Shared/Pricing/Pricing';
import AllService from '../Components/Service/AllService/AllService';
import PortfolioSlider from '../Components/Home1/Shared/PortfolioSlider/PortfolioSlider';

const Service = () => {
    return (
        <div>
            <BreadCrumb title="Service"></BreadCrumb>
            <AllService/>
            <PortfolioSlider/>
            <GetStarted/>
            <OurApproch/>
            <GrowthWith/>
            <Pricing />
            <ClientReviewSlider/>
        </div>
    );
};

export default Service;