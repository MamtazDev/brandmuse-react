import React from 'react';
import './PortfolioSlider.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import RightArrow from '../../../../assets/images/guidance_up-arrow.png';
import { portfolioSliderDatas } from '../../../../Utils/portfolioSliderData';
import { Link } from 'react-router-dom';

const PortfolioSlider = () => {
    const options = {
        items: 1,
        loop: true,
        autoplay: true,
        dots: true,
        navText: false,
    }

    return (
        <div>
            <div className="container mt_150 all_mb">
                <div className="inner_mb d-flex justify-content-between align-items-center">
                    <p className="sectionHeader text-center text-md-start mx-md-0 mx-auto">Some Of <br className="d-md-block" />
                        The<span className="txt_curve"> Projects</span> We Have <br className="d-md-block" />
                        Done Well
                    </p>

                    <div className="d-none d-md-block">
                        <Link to="/portfolio" className="black fw_600 fs_24">
                            View More
                            <img className="img-fluid" src={RightArrow} alt="go" />
                        </Link>
                    </div>
                </div>

                <OwlCarousel className='owl-theme' {...options}>
                    {portfolioSliderDatas.map((data, index) =>

                        <div key={index} className="item me-1">
                            <div className="row">
                                <div className="col-lg-6 portfolio_slider">
                                    <div>
                                        <img className="img-fluid" src={data.imageUrl} alt="img" />
                                        <p className='fs_20 mt-4'>{data.title}</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h1 className="fs_48 mb-3">{data.content}</h1>
                                            <div className="project_details_btn">
                                                <Link to="/portfolio">
                                                    <img className='img-fluid' src={RightArrow} alt="img" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 portfolio_slider slider_margin">
                                    <div>
                                        <img className="img-fluid" src={data.imageUrl2} alt="img" />
                                        <p className='fs_20 mt-4'>{data.title2}</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h1 className="fs_48 mb-3">{data.content2}</h1>
                                            <div className="project_details_btn">
                                                <Link to="/portfolio">
                                                    <img className='img-fluid' src={RightArrow} alt="img" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </OwlCarousel>

                <div className="d-block d-md-none text-center mt-3">
                    <Link to="/portfolio" className="black fw_600 fs_24">
                        View More
                        <img className="img-fluid" src={RightArrow} alt="go" />
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default PortfolioSlider;