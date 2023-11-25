import React from 'react';
import './ProjectList.css'
import Slider1 from '../../../assets/images/slider1.png'
import Arrow from '../../../assets/images/portfolioArrow.png'
import { Link } from 'react-router-dom';
import { projectDatas } from '../../../Utils/projectData';

const ProjectList = () => {
    return (
        <div>
            <div className="container all_mb">
                <div className="mb_56">
                    <h2 className="sectionHeader text-center inner_mb">
                        Some Of The<span className="txt_curve"> Projects</span><br /> We Have Done Well
                    </h2>
                    <div className='pro_btn mx-auto'>
                        <div className='all_portfolio_btn d-flex gap-4'>
                            <button className="portfolio_btn portfolio_btn_active titleColor  fs_18 fw_500">All</button>
                            <button className="portfolio_btn titleColor fs_18 fw_500">UI/UX</button>
                            <button className="portfolio_btn titleColor fs_18 fw_500">Landing Page</button>
                            <button className="portfolio_btn titleColor fs_18 fw_500">Web Development</button>
                            <button className="portfolio_btn titleColor fs_18 fw_500">App Design</button>
                            <button className="portfolio_btn titleColor fs_18 fw_500">Finance</button>
                        </div>
                    </div>
                </div>

                <div className="row gy-3 ">
                    { projectDatas.map((prodata, index) => 
                    <div key={index} className="col-lg-6 mb_56">
                        <div className="portfolioBox trasitionTime">
                            <div className="overflow-hidden fintech mb_36">
                                <img className="img-fluid" src={prodata?.imgPro} alt="img"/>
                            </div>
                            <p className='black fs_20'>{prodata?.titlePro}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <h1 className="fs_48 titleColor">{prodata?.companyName}</h1>
                                <div className="fitgoarrow trasitionTime">
                                    <Link to={`/portfolio-details/${prodata?.slug}`}>
                                        <img className="img-fluid" src={Arrow} alt="img"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    ) }
                </div>
            </div>
        </div>
    );
};

export default ProjectList;