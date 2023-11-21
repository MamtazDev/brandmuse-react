import React from 'react';
import GrowWith from '../../../../assets/home1/growWith.png';
import RightArrow from '../../../../assets/home1/rightArrow.png';
import { Link } from 'react-router-dom';

const GrowthWith = () => {
    return (
        <div>
            {/* <!-- Grow with Start --> */}
            <section className="all_mb">
                <div className="container">
                    <div className="row align-items-center gy-5">
                        <div className="col-md-6 pe-md-5">
                            <div className="grothImg text-center">
                                <img className="img-fluid" src={GrowWith} alt="bg" />
                            </div>
                        </div>
                        <div className="col-md-6 ps-md-5">
                            <div className="text-center text-md-start">
                                <h2 className="sectionHeader mb-1">
                                    <span className="txt_curve">Grow with</span> The Digital
                                    Creative Agency <span className="headerHilight">You Can</span> Trust?
                                </h2>
                                <p className="commonPara mb-4">
                                    Our digital marketing experts have put together thousandsof
                                    successfuldigital marketing campaigns for businesses looking to
                                    increase leads, phone calls,transactions, and qualified
                                    website traffic.
                                </p>
                                <Link to="/portfolio" className="stayBtn">
                                    Learn More
                                    <img src={RightArrow} alt="Go" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Grow with End --> */}
        </div>
    );
};

export default GrowthWith;