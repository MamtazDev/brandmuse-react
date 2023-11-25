import React from 'react';
import GetStarted from '../Components/Home1/Shared/GetStarted/GetStarted';
import PricingCom from '../Components/Home1/Shared/Pricing/Pricing';
import BestService from '../Components/Home1/Shared/BestService/BestService';
import ClientReviewSlider from '../Components/Home1/Shared/ClientReview/ClientReviewSlider';
import BreadCrumb from '../Utils/BreadCrumb/BreadCrumb';

const Pricing = () => {
    return (
        <div>
             <BreadCrumb title="Pricing"></BreadCrumb>
             <GetStarted/>
             <PricingCom/>
             <BestService/>
             <ClientReviewSlider/>
        </div>
    );
};

export default Pricing;