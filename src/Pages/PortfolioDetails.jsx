import React from 'react';
import BreadCrumb from '../Utils/BreadCrumb/BreadCrumb';
import { useLocation } from 'react-router-dom';
import { projectDatas } from '../Utils/projectData';
import DetailSidebar from '../Components/Portfolio/PortfolioDetails/DetailSidebar';
import MainDetails from '../Components/Portfolio/PortfolioDetails/MainDetails';
import PortfolioSlider from '../Components/Home1/Shared/PortfolioSlider/PortfolioSlider';

const PortfolioDetails = () => {
    const { pathname } = useLocation();
    const ProjectDetails = projectDatas.filter(item => pathname.includes(item.slug))


    return (
        <div>
            <BreadCrumb title="Portfolio Details" title1="Portfolio Details"></BreadCrumb>
            <div className="container">
                <div className="row gy-3 all_mb">
                    <div className="col-lg-8">
                        <MainDetails ProjectDetails={ProjectDetails} />
                    </div>
                    <div className="col-lg-4">
                        <DetailSidebar ProjectDetails={ProjectDetails} />
                    </div>
                </div>
                <div>
                    <p className="fs_48 titleColor text-center text-lg-start mb_64">More<span className="txt_curve">Portfolio</span></p>
                    <PortfolioSlider />
                </div>
            </div>
        </div>
    );
};

export default PortfolioDetails;