import React from 'react';
import About from '../../assets/home2/aboutUS.png';
import Right from '../../assets/home2/rightArrow.png';

const Aboutus = () => {
    return (
        <div>
            <section className="mb_120">
                <div className="container">
                    <h2 className="fs_24 subheading fc_button mb_38 text-center text-lg-start">About Us</h2>
                    <div className="row gy-3 mb_45">
                        <div className="col-md-6">
                            <p className="fs_48 fc_button text-center text-md-start">
                                We always attach
                                importance to quality
                                and original style.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <p className="fc_txt fs_20 mb_32 text-center text-md-start">
                                Brandmuse is an agency with over 10 years of experience and
                                has helped over 300 projects from small to large. We also have
                                many services to help your business grow with us.
                            </p>
                            <span className="d-block text-center text-lg-start">
                                <a href="aboutUs.html" className="darkBtn  text-md-start">
                                    About Us
                                    <img className="img-fluid" src={Right} alt="img"/>
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className="row gy-3">
                        <div className="col-lg-6">
                            <div className="aboutImg">
                                <img className="img-fluid" src={About} alt="#"/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="h-100 allTotal d-flex flex-column justify-content-between">
                                <div className="d-flex justify-content-between align-items-center mb-4 mb-lg-0">
                                    <div>
                                        <p className="fs_68 fc_button">
                                            10<span className="aboutBg">+</span>
                                        </p>
                                        <p className="fs_20 fc_txt">Years of experience</p>
                                    </div>
                                    <div>
                                        <p className="fs_68 fc_button">
                                            25<span className="aboutBg">K</span>
                                        </p>
                                        <p className="fs_20 fc_txt">Project Completed</p>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <p className="fs_68 fc_button">
                                            99<span className="aboutBg">%</span>
                                        </p>
                                        <p className="fs_20 fc_txt">Successful Projects</p>
                                    </div>
                                    <div>
                                        <p className="fs_68 fc_button">
                                            150<span className="aboutBg">+</span>
                                        </p>
                                        <p className="fs_20 fc_txt">Happy Clients</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Aboutus;