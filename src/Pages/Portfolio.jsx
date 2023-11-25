import React from 'react';
import GetStarted from '../Components/Home1/Shared/GetStarted/GetStarted';
import GrowthWith from '../Components/Home1/Shared/GrowthWith/GrowthWith';
import Pricing from '../Components/Home1/Shared/Pricing/Pricing';
import BreadCrumb from '../Utils/BreadCrumb/BreadCrumb';
import ProjectList from '../Components/Portfolio/PortfolioProject/ProjectList';

const Portfolio = () => {
    return (
        <div>
             <BreadCrumb title="Portfolio" title1="Portfolio"></BreadCrumb>
             <ProjectList/>
             <GetStarted/>
             <GrowthWith/>
             <Pricing/>
        </div>
    );
};

export default Portfolio;