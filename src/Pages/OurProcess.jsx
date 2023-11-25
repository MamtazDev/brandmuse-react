import React from 'react';
import BreadCrumb from '../Utils/BreadCrumb/BreadCrumb';
import GetStarted from '../Components/Home1/Shared/GetStarted/GetStarted';
import OurApproch from '../Components/Home1/Shared/OurApproch/OurApproch';
import BestService from '../Components/Home1/Shared/BestService/BestService';
import ClientReviewSlider from '../Components/Home1/Shared/ClientReview/ClientReviewSlider';

const OurProcess = () => {
    return (
        <div>
            <BreadCrumb title="Our Process" title1="Our Process" />
            <GetStarted />
            <OurApproch />
            <BestService />
            <ClientReviewSlider />
        </div>
    );
};

export default OurProcess;