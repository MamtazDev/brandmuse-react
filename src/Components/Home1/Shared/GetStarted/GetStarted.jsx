import React from 'react';
import './Getstarted.css'
import RightArrow from '../../../../assets/home1/rightArrow.png';
import GetStarted1 from '../../../../assets/home1/getStarted1.png';
import GetStarted2 from '../../../../assets/home1/getStarted2.png';
import GetStarted3 from '../../../../assets/home1/getStarted3.png';
import { Link } from 'react-router-dom';

const GetStarted = () => {
    return (
        <div>
            <section className="all_mb">
                <div className="container">
                    <div className="inner_mb d-flex justify-content-between align-items-center">
                        <h2 className="sectionHeader text-center text-md-start"><span className="txt_curve">Get started</span> with
                            us<br className="d-none d-md-block" /> simply and
                            quickly
                        </h2>
                        <div className="d-none d-md-block">
                            <Link to="contact-us" className="stayBtn">
                                Start with us
                                <img className="img-fluid" src={RightArrow} alt="go" />
                            </Link>
                        </div>
                    </div>
                    <div className="row gy-3 justify-content-center">
                        <div className="col-md-6 col-lg-4">
                            <div className="getStartedInner d-flex justify-content-start align-items-start gap-2 h-100">
                                <div className="getStatedImg">
                                    <img className="img-fluid" src={GetStarted1} alt="User" />
                                </div>
                                <div>
                                    <span>Create Account</span>
                                    <p className="cardPara">
                                        Users must create an account to
                                        access various services on
                                        Brandmuse
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="getStartedInner d-flex justify-content-start align-items-start gap-2 h-100">
                                <div className="getStatedImg">
                                    <img className="img-fluid" src={GetStarted2} alt="User" />
                                </div>
                                <div>
                                    <span>Explore the Website</span>
                                    <p className="cardPara">
                                        Learn about the agency's services,
                                        projects, team, and values.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="getStartedInner d-flex justify-content-start align-items-start gap-2 h-100">
                                <div className="getStatedImg">
                                    <img className="img-fluid" src={GetStarted3} alt="User" />
                                </div>
                                <div>
                                    <span>Request a Quote</span>
                                    <p className="cardPara">
                                        Looking for a specific service, they
                                        can request a quote fromthe agency.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-block d-md-none text-center">
                        <Link to="/contact-us" className="stayBtn mt-3">
                            Start with us
                            <img className="img-fluid" src={RightArrow} alt="img" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GetStarted;