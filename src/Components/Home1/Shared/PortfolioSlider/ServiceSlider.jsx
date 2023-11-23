import React from 'react';
import SliderHeader from './SliderHeader';
import PortfolioSlider from './PortfolioSlider';
import { Link } from 'react-router-dom';
import RightArrow from '../../../../assets/images/guidance_up-arrow.png';

const ServiceSlider = () => {
    return (
        <div>
            <SliderHeader />
            <PortfolioSlider />
            <div className="container">
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

export default ServiceSlider;