import React from 'react';
import RightArrow from '../../assets/home1/rightArrow.png';
import GetStarted1 from '../.././assets/home1/getStarted1.png';
import GetStarted2 from '../.././assets/home1/getStarted2.png';
import GetStarted3 from '../.././assets/home1/getStarted3.png';

const GetStarted = () => {
    return (
        <div>
            <section class="all_mb">
                <div class="container">
                    <div class="inner_mb d-flex justify-content-between align-items-center">
                        <h2 class="sectionHeader text-center text-md-start"><span class="txt_curve">Get started</span> with
                            us<br class="d-none d-md-block" /> simply and
                            quickly
                        </h2>
                        <div class="d-none d-md-block">
                            <a href="contactUs.html" class="stayBtn">
                                Start with us
                                <img class="img-fluid" src={RightArrow} alt="go" />
                            </a>
                        </div>
                    </div>
                    <div class="row gy-3 justify-content-center">
                        <div class="col-md-6 col-lg-4">
                            <div class="getStartedInner d-flex justify-content-start align-items-start gap-2 h-100">
                                <div class="getStatedImg">
                                    <img class="img-fluid" src={GetStarted1} alt="User" />
                                </div>
                                <div>
                                    <span>Create Account</span>
                                    <p class="cardPara">
                                        Users must create an account to
                                        access various services on
                                        Brandmuse
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="getStartedInner d-flex justify-content-start align-items-start gap-2 h-100">
                                <div class="getStatedImg">
                                    <img class="img-fluid" src={GetStarted2} alt="User" />
                                </div>
                                <div>
                                    <span>Explore the Website</span>
                                    <p class="cardPara">
                                        Learn about the agency's services,
                                        projects, team, and values.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="getStartedInner d-flex justify-content-start align-items-start gap-2 h-100">
                                <div class="getStatedImg">
                                    <img class="img-fluid" src={GetStarted3} alt="User" />
                                </div>
                                <div>
                                    <span>Request a Quote</span>
                                    <p class="cardPara">
                                        Looking for a specific service, they
                                        can request a quote fromthe agency.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-block d-md-none text-center">
                        <a href="contactUs.html" class="stayBtn mt-3">
                            Start with us
                            <img class="img-fluid" src={RightArrow} alt="img" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GetStarted;