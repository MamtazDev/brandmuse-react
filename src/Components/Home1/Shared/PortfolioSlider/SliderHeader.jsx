import React from 'react';
import RightArrow from '../../../../assets/images/guidance_up-arrow.png';
import { Link } from 'react-router-dom';
const SliderHeader = () => {
    return (
        <div>
            <div className="container">
                <div className="inner_mb d-flex justify-content-between align-items-center">
                    <p className="sectionHeader text-center text-md-start mx-md-0 mx-auto">
                        Some Of <br className="d-md-block" />
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
            </div>
        </div>
    );
};

export default SliderHeader;