import React from 'react';
import About from '../../assets/home2/aboutUS.png'
import Right from '../../assets/home2/rightArrow.png'

const Aboutus = () => {
    return (
        <div>
            <section class="mb_120">
                <div class="container">
                    <h2 class="fs_24 subheading fc_button mb_38 text-center text-lg-start">About Us</h2>
                    <div class="row gy-3 mb_45">
                        <div class="col-md-6">
                            <p class="fs_48 fc_button text-center text-md-start">
                                We always attach
                                importance to quality
                                and original style.
                            </p>
                        </div>
                        <div class="col-md-6">
                            <p class="fc_txt fs_20 mb_32 text-center text-md-start">
                                Brandmuse is an agency with over 10 years of experience and
                                has helped over 300 projects from small to large. We also have
                                many services to help your business grow with us.
                            </p>
                            <span class="d-block text-center text-lg-start">
                                <a href="aboutUs.html" class="darkBtn  text-md-start">
                                    About Us
                                    <img class="img-fluid" src={Right} alt="img"/>
                                </a>
                            </span>
                        </div>
                    </div>
                    <div class="row gy-3">
                        <div class="col-lg-6">
                            <div class="aboutImg">
                                <img class="img-fluid" src={About} alt="#"/>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="h-100 allTotal d-flex flex-column justify-content-between">
                                <div class="d-flex justify-content-between align-items-center mb-4 mb-lg-0">
                                    <div>
                                        <p class="fs_68 fc_button">
                                            10<span class="aboutBg">+</span>
                                        </p>
                                        <p class="fs_20 fc_txt">Years of experience</p>
                                    </div>
                                    <div>
                                        <p class="fs_68 fc_button">
                                            25<span class="aboutBg">K</span>
                                        </p>
                                        <p class="fs_20 fc_txt">Project Completed</p>
                                    </div>
                                </div>

                                <div class="d-flex justify-content-between align-items-center">
                                    <div>
                                        <p class="fs_68 fc_button">
                                            99<span class="aboutBg">%</span>
                                        </p>
                                        <p class="fs_20 fc_txt">Successful Projects</p>
                                    </div>
                                    <div>
                                        <p class="fs_68 fc_button">
                                            150<span class="aboutBg">+</span>
                                        </p>
                                        <p class="fs_20 fc_txt">Happy Clients</p>
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