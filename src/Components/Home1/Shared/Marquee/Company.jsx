import React from 'react';
import './companyMarquee.css'
import Slider1 from '../../../../assets/home1/slider1.png'
import Slider2 from '../../../../assets/home1/slider2.png'
import Slider3 from '../../../../assets/home1/slider3.png'
import Slider4 from '../../../../assets/home1/slider4.png'
import Slider5 from '../../../../assets/home1/slider5.png'
import Slider6 from '../../../../assets/home1/slider6.png'

const Company = () => {
    return (
        <div>
            <div className="all_mb">
                <div className="container">
                    <div className="marquee-container">
                        <div className="marquee">
                            <div className="initial-child-container">
                                <div className="child">
                                    <img className="img-fluid" src={Slider1} alt="img" />
                                </div>
                                <div className="child">
                                    <img className="img-fluid" src={Slider2}alt="img" />
                                </div>
                                <div className="child">
                                    <img className="img-fluid" src={Slider3}  alt="img" />
                                </div>
                                <div className="child">
                                    <img className="img-fluid" src={Slider4} alt="img" />
                                </div>
                                <div className="child">
                                    <img className="img-fluid" src={Slider5} alt="img" />
                                </div>
                                <div className="child">
                                    <img className="img-fluid" src={Slider6} alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="marquee">
                            <div className="initial-child-container">
                            <div className="child">
                                    <img className="img-fluid" src={Slider1} alt="img" />
                                </div>
                                <div className="child">
                                    <img className="img-fluid" src={Slider2}alt="img" />
                                </div>
                                <div className="child">
                                    <img className="img-fluid" src={Slider3}  alt="img" />
                                </div>
                                <div className="child">
                                    <img className="img-fluid" src={Slider4} alt="img" />
                                </div>
                                <div className="child">
                                    <img className="img-fluid" src={Slider5} alt="img" />
                                </div>
                                <div className="child">
                                    <img className="img-fluid" src={Slider6} alt="img" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Company;